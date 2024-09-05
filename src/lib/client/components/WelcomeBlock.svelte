<script lang="ts"> 
    import { inview } from 'svelte-inview'
    import type { Options } from 'svelte-inview';
    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';

    export let images;
    export let page : string 
    export let taglineDesc : string

    let isInView = false;
    let innerWidth : number;
    let inviewOptions : Options = {
        unobserveOnEnter: true,
        rootMargin: '-20%',
    }
    const dispatch = createEventDispatcher();


    // Заголовки 
    let titleMap: {[name : string] : string} = {
        "/" : "Удобство для пользователей — прибыль для бизнеса",
        "landing" : "Разработаем Landing-page за 2 недели",
        "multi-page" : "Много&shyстраничный сайт для разных целей",
        "store" : "Интернет-магазин поможет автоматизи&shyровать продажи"
    }

	function showModalWindow(){
        dispatch('modalOpen',{});
    }
        
</script>

<svelte:window bind:innerWidth={innerWidth}/>


<section class="tagline trans-background"
    use:inview={ inviewOptions }
    on:inview_change={({ detail }) => {
        isInView = detail.inView;
    }}    
>   

    <div class="" class:image-bg1={page != "multi-page" && page != "/"} class:image-bg2={page == "multi-page"} class:image-bg3={page=='/'}>
    </div>
    {#if page == "landing"}
        <video id="myVideo" preload="metadata" autoplay loop muted playsinline src="{images[0]}" >
        </video>
    {:else}
        <img src="{images[0]}" alt=""  class:bg={page == "/" }  class:bg1={page == "multi-page" } class:bg2={page == "store" } >
        <img src="{images[2]}" alt=""  class:laptop_main={page == "/" } class:laptop={page == "multi-page"} class:laptop2={page == "store"}>
    {/if}
    {#key isInView}
        <div class="tagline_info_bottom">
            <h2 class="display2 white" in:fly={{duration: 750,y:100}} class:hidden={!isInView} >{@html titleMap[page]}</h2>
            {#if innerWidth < 600}
                <p class="main_sm_16">{taglineDesc}</p>
                <button type="button" class="main_sm_16 main_btn_white" on:click={showModalWindow}>Обсудить задачу</button>
            {/if}
        </div>
    {/key}
    <aside class="tagline_map">
        <p class="main_sm_16">{taglineDesc}</p>
        <nav class="map_links">
            <a class="map_link main_sm_16" href="/store">Интернет-магазины</a>
            <a class="map_link main_sm_16" href="/landing">Лендинги</a>
            <a class="map_link main_sm_16" href="/multi-page">Многостраничный сайт</a>
        </nav>
    </aside>
</section>


<style lang="less">

    .white{
        color: white;
    }
    .total_black{
        color: var(--Neutral_1000);
    }
    .black{
        color: var(--Neutral_900);
    }
    .whiteop{
        color: #737373;
    }
    #myVideo{
        position: absolute;
        top: -10%;
        right: -45%;
        object-fit: cover;
        z-index: -1;
        height: 160%;
        @media (max-width:900px) {
            height: 130%;
            width: 150%;
            top: 10%;
            right: -40%;
        }
        @media (max-width:600px) {
            height: 130%;
            width: 150%;
            top: -20%;
            right: -50%;
        }
        @media (max-width:400px) {
            height: 90%;
            width: unset;
            top: 0;
            right: -80%;
        }
        @media (max-width:300px) {
            height: 90%;
            width: unset;
            top: 0;
            right: -110%;
        }
    }
    .tagline{
        background:  
            linear-gradient(0deg, #0A0A0A, #0A0A0A),
            linear-gradient(360deg, rgb(10, 10, 10) 50%, rgba(10, 10, 10, 0.719) 53.93%),
            linear-gradient(180deg, rgba(10, 10, 10, 1) 100%, rgb(10, 10, 10) 100.5%);
        display: flex; 
        z-index: 2;
        padding: 68px 50px 48px 50px;
        position: relative;
        height: 54vh;
        min-height: 700px;
        overflow: hidden;
        height: 100svh;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        @media (max-width:800px) {
            padding: 48px 16px 24px 16px;
            min-height: unset;
        }
        @media (max-width:600px){
            flex-direction: column-reverse;
        }
    }
    .tagline img{
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }
    

    .bg{
        object-position: 20%;
        top: 0;
        left: 0;
    }
    .laptop_main{
        object-fit: cover !important;
        width: 100% !important;
        height: 130% !important;
        top: -3% !important;
        right: -18% !important;
        left: unset !important;
        @media (max-width:670px) {
            height: 60% !important;
            top: 25% !important;
            right: -10% !important;
            width: 100% !important;
            left: 0 !important;

        }
    }



    .bg1{
        object-position: 20%;
        top: 0;
        left: 0;
    }
    .laptop{
        object-fit: contain !important;
        width: 115% !important;
        height: 115vh !important;
        top: 12% !important;
        right: -32% !important;
        @media (max-width:900px) {
            right: -30% !important;
            height: 100% !important;
            top: 20% !important;
            width: 100% !important;
        }
       @media (max-width:600px) {
            height: 100% !important;
            width: 150% !important;
            top: 0% !important;
            right: -60% !important;
        } 
        @media (max-width:400px) {
            width: 200% !important;
            right: -100% !important;
        }
    }

    .bg2{
        object-position: 20%;
        top: 0;
        left: 0;
        filter: grayscale(1);
    }
    .laptop2{
        object-fit: contain !important;
        width: 115% !important;
        height: 115vh !important;
        top: 7% !important;
        right: -35% !important;

        @media (max-width:600px) {
            top: 0 !important;
            height: 90vh !important;
            width: unset !important;
            right: -90% !important;
        }
        @media (max-width:340px) {
            right: -100% !important;
        } 
        @media (max-width:320px) {
            right: -120% !important;
        } 
    }

    .image-bg1{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;    
        background: 
            linear-gradient(162.05deg, rgba(10, 10, 10, 0.64) 28.53%, rgba(10, 10, 10, 0) 51.19%),
            linear-gradient(360deg, rgba(10, 10, 10, 0.32) 0%, rgba(10, 10, 10, 0) 53.93%);
        @media (max-width:600px) {
            background: 
                linear-gradient(180deg, rgba(10, 10, 10, 0.64) 0%, rgba(10, 10, 10, 0) 46.5%),
                linear-gradient(0deg, #0A0A0A 20.08%, rgba(10, 10, 10, 0) 53.93%);
        }

    }
    .image-bg2{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background:
            linear-gradient(360deg, rgba(10, 10, 10, 0.32) 0%, rgba(10, 10, 10, 0) 53.93%),
            linear-gradient(180deg, rgba(10, 10, 10, 0.64) 0%, rgba(10, 10, 10, 0) 46.5%);
        @media (max-width:600px) {
            background: 
            linear-gradient(180deg, rgba(10, 10, 10, 0.64) 0%, rgba(10, 10, 10, 0) 46.5%),
            linear-gradient(0deg, #0A0A0A 20.08%, rgba(10, 10, 10, 0) 53.93%)
        }

    }
    .image-bg3{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background:
            linear-gradient(162.05deg, rgba(10, 10, 10, 0.64) 28.53%, rgba(10, 10, 10, 0) 51.19%),
            linear-gradient(360deg, rgba(10, 10, 10, 0.32) 0%, rgba(10, 10, 10, 0) 53.93%);
        @media (max-width:600px) {
            background: 
            linear-gradient(168.16deg, rgba(10, 10, 10, 0.8) 13.23%, rgba(10, 10, 10, 0) 56.01%),
            linear-gradient(360deg, rgba(10, 10, 10, 0.8) 28.08%, rgba(10, 10, 10, 0) 53.93%);

        }

    }

    .tagline p:not(.tagline_map p){
        margin-top: 48px;
        @media (max-width:800px) {
            max-width: 100%;
            margin-top: 48px;
        }
        @media (max-width:600px) {
            max-width: 100%;
            margin-top: 16px;
        }
    }
    .tagline_map{
        display: flex;
        justify-content: space-between;
        align-items: end;
        z-index: 3;
        @media (max-width:600px){
            margin-top: 45px;
        }
    }
    .tagline_map p{
        @media (max-width:600px){
            display: none;
        }
    }
    .map_links{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: end;
        @media (max-width:600px){
            flex-direction: row;
            column-gap: 8px;
            flex-wrap: wrap;
        }
    }
    .map_link{
        background: #0A0A0A52;
        backdrop-filter: blur(10px);
        padding: 16px;
        line-height: 17.6px;
        width: fit-content;
        border-radius: 24px;
        @media (max-width:600px){
            padding: 8px 12px;
            font-size: 14px;
            line-height: 15.4px;
        }

    }
    .tagline_info_bottom{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        z-index: 3;
    }
    .tagline_info_bottom p{
       
        @media (max-width:600px) {
            margin-top: 0; 
        }
        
    }
    .tagline_info_bottom button{
        margin-left: 0;
    }
    .tagline .display2{
        max-width: 75%;
       @media (max-width:600px) {
            font-size: 32px;
            line-height: 35.2px;
       }
    }
</style>