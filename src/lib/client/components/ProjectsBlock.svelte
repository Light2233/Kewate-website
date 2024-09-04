<script lang="ts">
    import { inview } from 'svelte-inview'
    import { fly,fade } from 'svelte/transition';
    import ProjectSwiper from './ProjectSwiper.svelte';
    
    export let projects
   
    let isInViewTop = false;
    let isInViewBottom = false;
    let innerWidth : number
</script>


<svelte:window bind:innerWidth={innerWidth}/>

<section class="section_pd projects dark-background" id="projects"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:change={({ detail }) => {
    isInViewTop= detail.inView;
}}>
    {#key isInViewTop}
        <h3 class="display3 total_black" in:fly={{duration: 750,x:100,delay:0}} class:hidden={!isInViewTop}>Реализовали более 100 проектов</h3>
        <div class="project_selected" in:fade={{duration: 750,delay:500}} class:hidden={!isInViewTop}>
            <div class="project_image">

            </div>
            <div class="project_info">
                <p class="header2 total_black" class:hidden={!isInViewTop}>Manuspect — сервис для анализа продаж</p>
                <div class="tags">
                    {#each projects[0].tags as tag}
                        <div class="tag main_sm_14 total_black">
                            {tag.name}
                        </div>
                    {/each}
                </div>
            </div>
            
        </div>       
    {/key}
    {#if innerWidth <= 600}
        <ProjectSwiper {projects} />
    {:else}
        <div class="modile_apps"
        use:inview={{ unobserveOnEnter: true, rootMargin: '-40%' }}
        on:change={({ detail }) => {
            isInViewBottom  = detail.inView;
        }}
        >
            {#each projects as project, index}
                
                {#if index !== 0}
                    {#key isInViewBottom }
                        <div class="app" in:fly={{duration: 750,y:100,delay: index*300}} class:hidden={!isInViewBottom }>
                            
                                <div class="img_box">

                                </div>
                                <div class="app_info">
                                    <div class="">
                                        <h2 class="header2 total_black">{project.name}</h2>
                                    </div>
                                    <div class="tags">
                                        {#each project.tags as tag}
                                            <div class="tag main_sm_14 total_black">
                                                {tag.name}
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            
                        </div>
                    {/key}
                {/if}
                
            
            {/each}
        </div>
    {/if}
</section>


<style lang="less">
    .section_pd{
        padding: 0 50px;
        @media (max-width:1000px) {
            padding: 0 16px;
        }
        @media (max-width:600px) {
            padding: 0 0 0 16px;
        }
    }
    .projects{
        padding-top: 172px;
        padding-bottom: 160px;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        @media (max-width:800px) {
            padding-top: 64px;
            padding-bottom: 64px;
        }
    }
    .projects_grid{
        @media (max-width:900px) {
            display: none;
        }
    }
    .project_image{
        background-color: var(--Neutral_1000);
        width: 100%;
        max-height: 600px;
        height: 100vh;
        border-radius: 16px;
       
    }
    .project_selected .project_image{
        @media (max-width:600px) {
            max-height: 480px;
        }
    }
    .project_info{
        margin-top: 32px;
    }
    .project_selected{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        border-radius: 24px;
        display: flex;
        @media (max-width:600px) {
            margin-bottom: 64px;
            margin-right: 16px;
        }
        
    }
    .modile_apps{
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
        overflow-y: hidden;
        @media (max-width:900px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    .app{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        @media (max-width:900px) {
            max-width: 500px;
        }
    }
    .img_box{
        height: 480px;
        border-radius: 16px;
        background-color: var(--Neutral_1000);
        @media (max-width:900px) {
            height: 300px;
        }
    }
    .app_info {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        flex-grow: 1;
        justify-content: space-between;
    }
    .tags{
        display: flex;
        column-gap: 8px;
        margin-top: 12px;
    }
    .tag{
        padding: 8px 12px;
        border: 1px solid var(--Neutral_400);
        border-radius: 24px;
        line-height: 16.8px;
        @media (max-width:600px) {
            padding: 5px 8px;
        }
    }
    .app_info .header3{
        @media (max-width:900px) {
            font-size: 24px !important;
            line-height: 30px !important;
            font-weight: 700 !important;
        }
    }
    .project{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 32px 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.24);
        cursor: pointer;
        position: relative;
    }
    .project:hover .project_name{
        color: var(--blue);
    }
    .project_img{
        position: absolute;
        height: 280px;
        border-radius: 24px 24px 0px 0px;
        background: var(--dark);
        width: 280px;
        bottom: 0;
        right: 18%;
    }

</style>