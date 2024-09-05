<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import review_person from "$lib/assets/а я думала сова оригинал.mp4"
    import arrow_right from "$lib/assets/arrow_right_swiper.svg"
    import { onMount } from 'svelte';

    import ReviewsVideoPlayer from './ReviewsVideoPlayer.svelte';

    
    let reviews = [
        {
            name:"DA&BR",
            personName:"Павел Калашников",
            desc:"Коллеги! Хотел бы вам порекомендовать компанию Kewate. В частности разработку сайтов, потому-что мы сами заказали у них сайт и остались довольны. На текущий момент мы и дальше будем продолжать с ними сотрудничать, а также заказывать дизайн-поддержку для наших активностей.",
            url:review_person
        },
        {
            name:"DA&BR",
            personName:"Павел Калашников",
            desc:"Коллеги! Хотел бы вам порекомендовать компанию Kewate. В частности разработку сайтов, потому-что мы сами заказали у них сайт и остались довольны. На текущий момент мы и дальше будем продолжать с ними сотрудничать, а также заказывать дизайн-поддержку для наших активностей.",
            url:review_person
        },
        {
            name:"DA&BR",
            personName:"Павел Калашников",
            desc:"Коллеги! Хотел бы вам порекомендовать компанию Kewate. В частности разработку сайтов, потому-что мы сами заказали у них сайт и остались довольны. На текущий момент мы и дальше будем продолжать с ними сотрудничать, а также заказывать дизайн-поддержку для наших активностей.",
            url:review_person
        },
    ]
    let slideCnt = 1;
    let innerWidth;
    let swiper = false  
    onMount(()=>{
        if(innerWidth>900){
            slideCnt = 1.7
        }
        else if(innerWidth<=900){
            slideCnt = 1;
        }
        setTimeout(()=>{
            swiper = true
        },100)
    })

    $:{
        if(innerWidth>1080){
            slideCnt = 1.7
        }
        else if(innerWidth<=1080){
            slideCnt = 1;
        }
    }




</script>

<svelte:window bind:innerWidth={innerWidth}/>


<div class="swiper">
    <div class="title">
        <h3 class="display3 black">Нас рекомендуют</h3>
        {#if innerWidth>=700}
        <div class="swiper_btn">
            <button class="prev"><img src="{ arrow_right }" alt=""></button>
            <div class="dds"></div>
            <button class="next"><img src="{ arrow_right }" alt=""></button>
        </div>
        {/if}
    </div>
    {#if swiper}
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={slideCnt}
        navigation = {
            {nextEl: '.next',
            prevEl: ".prev",}
        }
        scrollbar={{ draggable: false }}
        pagination={
        { clickable: true,el : ".dds" }
        }
        simulateTouch={false}
        >
            {#each reviews as item}
                <SwiperSlide>
                    <div class="slide_content">
                        <div class="slide_video" >
                           <ReviewsVideoPlayer url={item.url}/>
                        </div>
                        <div class="review_info">
                            <div class="review_person_info">
                                <h3 class="header3 total_black">{item.personName}</h3>
                                <h3 class="header3 gray">{item.name}</h3>
                            </div>
                            <article class="">
                                <p class="main_sm_16 op50 total_black">{ item.desc }</p>
                            </article>
                        </div>
                    </div>
                </SwiperSlide>
            {/each}
            
            
        </Swiper>
        {#if innerWidth < 750}
            <div class="dds"></div>
        {/if}
    {/if}


</div>


<style lang="less">
    .review_person_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }
    .op50{
        opacity: 0.5;
    }
    .total_black{
        color: var(--Neutral_1000);
    }
    .black{
        color: var(--Neutral_900);
    }
    .swiper{
        max-width: 1280px;
    }
    .gray{
        color: #969696;
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 35px;
        margin-right: 50px;
    }
    .slide_content{
        display: flex;
        justify-content: space-between;
        row-gap: 20px;
        width: 100%;
        align-items: center;
        border-radius: 16px;
        column-gap: 20px;
        overflow: hidden;
        @media (max-width:1180px) {
            max-height: fit-content;
            height: unset;
        }
        
        @media (max-width:750px) {
            max-width: 100%;
            flex-direction: column;
            padding: 0;
        }
    }
    .slide_video{
        width: 280px;
        height: 280px;
        border-radius: 50rem;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: var(--Neutral_500);
        @media (max-width:1180px) {
            width: 240px;
            height: 240px;
        }
        @media (max-width:1080px) {
            width: 280px;
            height: 280px;
        }
        @media (max-width:900px) {
            width: 260px;
            height: 260px;
        }
        @media (max-width:300px) {
            width: 230px;
            height: 230px;
        }
    }
    

    .slide_info img{
        width: 60px;
        height: 60px;
    }
    .slide_info{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .slide_info div{
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        padding: 8px 0px;
    }
    .desc{
        word-break: break-all;
    }
    :global(.swiper-slide:not(.swiper-slide-active,.swiper-slide-next)){
        opacity: 0.32;
        z-index: -1;
        transition: all .2s ease-out;
    }
    .prev img{
        rotate: -180deg;
    }
    .swiper_btn{
        display: flex;
        align-items: center;
        column-gap: 12px;
        @media (max-width:750px) {
            display: none;
        }
    }
    .swiper_btn button{
        cursor: pointer;
    }
    :global(.swiper-button-disabled){
        opacity: 0.2;

    }
    .review_info{
        width: 100%;
        max-width: 380px;
    }
    .dds{
        width: fit-content;
        @media (max-width:750px) {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 32px;
        }
        
    }
    :global(.swiper-pagination-bullet){
        background: var(--Neutral_1000) !important;
    }
</style>