<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
    import 'swiper/css';

    import review_person from "$lib/assets/reviews.svg"

    import arrow_right from "$lib/assets/arrow_right_swiper.svg"
    import { afterUpdate, onMount } from 'svelte';

    let reviews = [
        {
            name:"ООО «Арбуз»",
            personName:"Кравченко А. О. Генеральный директор",
            desc:"Я рекомендую эту компанию всем, кто ищет профессиональных разработчиков сайтов. Уверен, что они помогут вам создать качественный и эффективный ресурс, который будет способствовать развитию вашего бизнеса.",
            url:review_person
        },
        {
            name:"ООО «Арбуз»",
            personName:"Кравченко А. О. Генеральный директор",
            desc:"Я рекомендую эту компанию всем, кто ищет профессиональных разработчиков сайтов. Уверен, что они помогут вам создать качественный и эффективный ресурс, который будет способствовать развитию вашего бизнеса.",
            url:review_person
        },
        {
            name:"ООО «Арбуз»",
            personName:"Кравченко А. О. Генеральный директор",
            desc:"Я рекомендую эту компан  ию всем, кто ищет профессиональных разработчиков сайтов. Уверен, что они помогут вам создать качественный и эффективный ресурс, который будет способствовать развитию вашего бизнеса.",
            url:review_person
        },
        {
            name:"ООО «Арбуз»",
            personName:"Кравченко А. О. Генеральный директор",
            desc:"Я рекомендую эту компанию всем, кто ищет профессиональных разработчиков сайтов. Уверен, что они помогут вам создать качественный и эффективный ресурс, который будет способствовать развитию вашего бизнеса.",
            url:review_person
        },
        {
            name:"ООО «Арбуз»",
            personName:"Кравченко А. О. Генеральный директор",
            desc:"Я рекомендую эту компанию всем, кто ищет профессиональных разработчиков сайтов. Уверен, что они помогут вам создать качественный и эффективный ресурс, который будет способствовать развитию вашего бизнеса.",
            url:review_person
        },
        {
            name:"ООО «Арбуз»",
            personName:"Кравченко А. О. Генеральный директор",
            desc:"Я рекомендую эту компанию всем, кто ищет профессиональных разработчиков сайтов. Уверен, что они помогут вам создать качественный и эффективный ресурс, который будет способствовать развитию вашего бизнеса.",
            url:review_person
        }
    ]
    let slideCnt = 1;
    let innerWidth;
    let swiper = false
    onMount(()=>{
        if(innerWidth>900){
            slideCnt = 2.5
        }
        else if(innerWidth<=900 && innerWidth>700){
            slideCnt = 2;
        }
        if(innerWidth<=700){
            slideCnt = 1;
        }
        setTimeout(()=>{
            swiper = true
        },100)
    })

    $:{
        if(innerWidth>900){
            slideCnt = 2.5
        }
        else if(innerWidth<=900 && innerWidth>700){
            slideCnt = 2;
        }
        if(innerWidth<=700){
            slideCnt = 1;
        }
    }
    

</script>

<svelte:window bind:innerWidth={innerWidth}/>


<div class="swiper">
    <div class="title">
        <p class="header2">Отзывы наших клиентов</p>
        {#if innerWidth>=700}
        <div class="swiper_btn">
            <button class="prev"><img src="{ arrow_right }" alt=""></button>
            <button class="next"><img src="{ arrow_right }" alt=""></button>
        </div>
        {/if}
    </div>
    {#if swiper}
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={slideCnt}
        navigation = {
            {nextEl: '.next',
            prevEl: ".prev",}
        }
        scrollbar={{ draggable: false }}
        pagination={{ clickable: true }}
        simulateTouch={false}
        >
            {#each reviews as item , index}
                <SwiperSlide>
                    <div class="slide_content">
                        <div class="">
                            <p class="main_sm2 gray desc">{ item.desc }</p>
                        </div>
                        <div class="slide_info">
                            <div class="">
                                <p class="main_sm2_bold">{item.name}</p>
                                <p class="main_sm2 gray">{item.personName}</p>
                            </div>
                            <img src="{ item.url }" alt="">
                        </div>
                    </div>
                </SwiperSlide>
            {/each}
            

        </Swiper>
    {/if}


</div>


<style lang="less">
    .gray{
        color: #969696;
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }
    .slide_content{
        background: white;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        width: 100%;
        max-width: 480px;
        height: 214px;
        border-radius: 16px;
        overflow: hidden;
        @media (max-width:1180px) {
            max-height: fit-content;
            height: unset;
        }
        @media (max-width:700px) {
            max-width: 100%;
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
        column-gap: 20px;
    }
    .swiper_btn button{
        cursor: pointer;
    }
    :global(.swiper-button-disabled){
        opacity: 0.2;

    }
</style>