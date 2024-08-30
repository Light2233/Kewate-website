<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import arrow_right from "$lib/assets/arrow_right_swiper.svg"
    import { onMount } from 'svelte';

    let slideCnt = 1;
    let innerWidth;
    let swiper = false

    onMount(()=>{
        swiper = true
    })




</script>

<svelte:window bind:innerWidth={innerWidth}/>


<div class="swiper website_swiper">
            
    {#if swiper}
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation = {
            {nextEl: '.next1',
            prevEl: ".prev1",}
        }
        scrollbar={{ draggable: false }}
        pagination={
        { clickable: true,el : ".pagination" }
        }
        simulateTouch={false}
        >
            {#each {length:3} as _ , index}
                <SwiperSlide>
                    <div class="slide_content">

                    </div>
                </SwiperSlide>
            {/each}
            
        </Swiper>
        <div class="swiper_btn">
            <button class="prev1">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.8602 38.14C28.4802 38.14 28.1002 38 27.8002 37.7C27.2202 37.12 27.2202 36.16 27.8002 35.58L38.8802 24.5L27.8002 13.42C27.2202 12.84 27.2202 11.88 27.8002 11.3C28.3802 10.72 29.3402 10.72 29.9202 11.3L42.0602 23.44C42.6402 24.02 42.6402 24.98 42.0602 25.56L29.9202 37.7C29.6202 38 29.2402 38.14 28.8602 38.14Z" fill="white"/>
                    <path d="M40.66 26H7C6.18 26 5.5 25.32 5.5 24.5C5.5 23.68 6.18 23 7 23H40.66C41.48 23 42.16 23.68 42.16 24.5C42.16 25.32 41.48 26 40.66 26Z" fill="white"/>
                </svg>
            </button>
            <div class="pagination"></div>
            <button class="next1">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.8602 38.14C28.4802 38.14 28.1002 38 27.8002 37.7C27.2202 37.12 27.2202 36.16 27.8002 35.58L38.8802 24.5L27.8002 13.42C27.2202 12.84 27.2202 11.88 27.8002 11.3C28.3802 10.72 29.3402 10.72 29.9202 11.3L42.0602 23.44C42.6402 24.02 42.6402 24.98 42.0602 25.56L29.9202 37.7C29.6202 38 29.2402 38.14 28.8602 38.14Z" fill="white"/>
                    <path d="M40.66 26H7C6.18 26 5.5 25.32 5.5 24.5C5.5 23.68 6.18 23 7 23H40.66C41.48 23 42.16 23.68 42.16 24.5C42.16 25.32 41.48 26 40.66 26Z" fill="white"/>
                </svg>
            </button>
        </div>
    {/if}


</div>


<style lang="less">
    .swiper{
        max-width: 480px;
        margin: 0;
    }
    .slide_content{
        padding: 24px;
        display: flex;
        justify-content: space-between;
        row-gap: 20px;
        width: 100%;
        height: 480px;
        background-color: var(--Neutral_1000);
        align-items: center;
        column-gap: 20px;
        overflow: hidden;
        
        @media (max-width:750px) {
            max-width: 100%;
            flex-direction: column;
            padding: 0;
        }
        @media (max-width:500px) {
            height: 350px;
        }
        @media (max-width:340px) {
            height: 288px;
        }
    }
    svg{
        width: 24px;
        height: 24px;
    }
    .prev1{
        height: 24px;
    }
    .next1{
        height: 24px;
    }
    .prev1 svg{
        rotate: -180deg;
    }
    .swiper_btn{
        display: flex;
        align-items: center;
        position: absolute;
        z-index: 99;
        padding: 20px;
        width: 100%;
        justify-content: space-between;
        bottom: 0;
        column-gap: 12px;
        @media (max-width:750px) {
            display: none;
        }
    }
    .swiper_btn button{
        cursor: pointer;
    }
    :global(.swiper-button-disabled){
        opacity: 0.5;
    }
    .pagination{
        width: fit-content;
    }
    :global(.website_swiper .swiper-pagination-bullet){
        background: var(--Neutral_100) !important;
    }
    :global(.website_swiper .swiper-slide:not(.swiper-slide-active,.swiper-slide-next)){
        opacity: 1 !important;
    }


   
</style>