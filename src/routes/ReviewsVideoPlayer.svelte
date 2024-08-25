<script>
    import play from "$lib/assets/play.svg"
    import previewVideo from "$lib/assets/preview_video.png"
    export let url;
    let paused = true;
    let video ;
    let time = 0;
    let lastMouseDown;


    function handleMousedown(e) {
		lastMouseDown = new Date();
	}

    function handleMouseup(e) {
        if (new Date() - lastMouseDown < 300) {
            if (paused) e.target.play();
            else e.target.pause();
        }
    }

</script>

<div class="video">
    <video on:mouseup={handleMouseup} bind:paused src="{url}" poster={previewVideo} bind:currentTime={time} on:mousedown={handleMousedown} bind:this={video} volume="0.2">
        <script>
            var video = document.currentScript.parentElement;
            video.volume = 0.1;
        </script>
        
    </video>
    {#if paused}
        <button class="play" on:mouseup={handleMouseup} on:mousedown={handleMousedown}><img src="{ play }" alt=""></button>
    {/if}
</div>

<style>
    .circle-container{
        border-radius: 50px;
        width: 100px;
        height: 100px;
        position: absolute;
        z-index: 99;
    }
    .video{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
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
</style>