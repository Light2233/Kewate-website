<script>
    import play from "$lib/assets/play.svg"
    import pause from "$lib/assets/pause.svg"
    import previewVideo from "$lib/assets/preview_video.png"
    export let url;

    let innerWidth



    let paused = true;
    let video ;
    let time = 0;
    let lastMouseDown;
    let startVideo = false
    let allTime = 0;
    let radius = 138
    let offsetTop = -40
    

    function handleMousedown(e) {
		lastMouseDown = new Date();
	}

    function handleMouseup(e) {
        allTime = e.target.duration
        if (new Date() - lastMouseDown < 500) {
            if (paused) e.target.play();
            else e.target.pause();
        }
    }
    let progress
    let circumference
    let offset ;
    
    $: progress = (time * 100) / allTime;
    $: circumference = 2 * Math.PI * radius;
    $: offset = circumference - (progress / 100) * circumference;
    
    $: if(progress == 100){
        progress = 0;
    }

    $: {
        if(innerWidth>1180 || (innerWidth<=1080 && innerWidth >900)){
            radius = 137;
            offsetTop = -40
        }
        else if(innerWidth<=1180 && innerWidth>1080){
            radius = 117
            offsetTop = -20
        }
        else if(innerWidth<=900 && innerWidth>300){
            radius = 127
            offsetTop = -30
        }
        else if(innerWidth<=300){
            radius = 112
            offsetTop = -15
        }
    }

</script>


<svelte:window bind:innerWidth={innerWidth}/>

<div class="video" class:video_active={!paused} class:video_paused={paused} >
    <video on:mouseup={handleMouseup} bind:paused src="{url}" poster={previewVideo} bind:currentTime={time} on:mousedown={handleMousedown} bind:this={video} volume="0.2" on:click|once={()=>{startVideo=true}}>
        <script>
            var video = document.currentScript.parentElement;
            video.volume = 0.1;
        </script>
        
    </video>
    {#if startVideo}
        <svg>
            <circle
            cx="50%"
            cy="50%"
            r="{radius}"
            stroke=""
            fill="none"
            stroke-width="3"
            />
            <circle
                cx="{offsetTop}"
                cy="50%"
                r="{radius}"
                stroke="#E5E5E5"
                fill="none"
                stroke-width="3"
                stroke-dasharray={circumference}
                stroke-dashoffset={offset}
                transform="rotate(-90 50 50)"
                style="transition: stroke-dashoffset 0.1s linear;"
            />
        </svg>
    {/if}
    {#if paused}
        <button class="play" on:mouseup={handleMouseup} on:mousedown={handleMousedown}><img src="{ play }" alt=""></button>
    {:else}
        <button class="play pause" on:mouseup={handleMouseup} on:mousedown={handleMousedown}><img src="{ pause }" alt=""></button>
    {/if}
</div>

<style>

    .video{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50rem;
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        
    }
    .play{
        z-index: 2;
        cursor: pointer;
        pointer-events: none;
    }
    .video_paused:hover > video{
        filter: brightness(90%);
    }
    .video_active:hover > video{
        filter: brightness(80%);
    }
    .pause{
        display: none;
    }
    .video:hover > .pause{
        display: unset;
    }
    svg{
        width: 100%;
        height: 100%;
        z-index: 22;
        position: absolute;
        pointer-events: none
    }

</style>