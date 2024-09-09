<script lang="ts">
    import arrow_circle_right from "$lib/assets/arrow_circle_right.svg"
   
    import arrow_up from "$lib/assets/arrow_up.svg"
    import object2 from "$lib/assets/object2.webp"
    import object3 from "$lib/assets/object3.webp"
    import object1 from "$lib/assets/object1.webp"
    import bgModal from "$lib/assets/application_modal_bg.png"
    import tg_bg from "$lib/assets/tg_blok_bg.png"

    import bg1 from "$lib/assets/taglines/tagline1_bg.webp"
    import laptop from "$lib/assets/taglines/tagline1_laptop.png"

    import andey from "$lib/assets/command/andrey.webp"
    import nikita from "$lib/assets/command/nikita.jfif"
    import daniil from "$lib/assets/command/daniil.jfif"
    import maxim from "$lib/assets/command/maxim.webp"
    import nikolayBig from "$lib/assets/command/nikolay.webp"


    import Countup from "svelte-countup"
    import { enhance } from '$app/forms';
    import {fade,slide,fly} from "svelte/transition"
    import { inview } from 'svelte-inview'
    import { page } from '$app/stores'
    
    import SwiperReviews from "$lib/client/components/SwiperReviews.svelte"
    import { isSubmit } from "$lib/client/PostApplicationStore"
    import ApplicationModalWindow from "./ApplicationModalWindow.svelte";
    import WelcomeBlock from "$lib/client/components/WelcomeBlock.svelte"
    import ProjectsBlock from "$lib/client/components/ProjectsBlock.svelte"
    import TeamBlock from "$lib/client/components/TeamBlock.svelte"
    import ApplicationBlock from "$lib/client/components/ApplicationBlock.svelte"

    export let data;

    // Список проектов

    interface Project{
        name: string,
        tags: {
            name:string
        }[]
    }

    let projects: Project[] = [
        {
            name: "Manuspect — сервис для анализа продаж",
            tags:[{name: "Сервис"},{name: "Продуктовый дизайн"}]
        },
        {
            name: "RusStroj — строительство элитных домов в Сербии",
            tags:[{name: "Сайты"}]
        },
        {
            name: "SomeBrand — повышение конверсии после редизайна интернет-магазина",
            tags:[{name: "Интернет-магазин"},{name: "Продуктовый дизайн"}]
        },
        {
            name: "DA&BR — Повысили конверсию на 120 % с помощью редизайна сайта",
            tags:[{name: "Сайты"},{name: "Продуктовый дизайн"}]
        },
        {
            name: "DA&BR — Повысили конверсию на 120 % с помощью редизайна сайта",
            tags:[{name: "Сайты"},{name: "Продуктовый дизайн"}]
        },     
    ]


    // Тригерры при скролле

    let isInView5 = false


    interface Person{
        name: string,
        speciality: string,
        url: string
    }


    //  Список команды
    let command : Array<Person> = [
        {
            name: "Николай Ковальчук",
            speciality : "CEO Kewate",
            url : nikolayBig
        },
        {
            name: "Никита Корчагин",
            speciality : "Продуктовый дизайнер, Lead",
            url : nikita
        },
        {
            name: "Максим Дёмин",
            speciality : "Backend–разработчик",
            url : maxim
        },
        {
            name: "Даниил Микитчук",
            speciality : "Frontend–разработчик",
            url : daniil
        },
        {
            name: "Андрей Орлов",
            speciality : "Frontend–разработчик",
            url: andey
        },
    ]

    // Заявка 

   

    
    // Ширина экрана
    let innerWidth : number;
    let showModal : boolean

    // Контроль скрола 
    
    let scrollable : boolean = true;
    $: if(showModal) scrollable=false;
	
	const wheel = (node, options) => {
		let { scrollable } = options;
		
		const handler = e => {
			if (!scrollable) e.preventDefault();
		};
		
		node.addEventListener('wheel', handler, { passive: false });
		
		return {
			update(options) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
    };



   

   
    
</script>

<svelte:window bind:innerWidth={innerWidth} use:wheel={{scrollable}}/>
<ApplicationModalWindow bind:showModal bg={bgModal} page={'main'} utm={data.utm}/>

<svelte:head>
    <title>Главная</title>
    <meta name="keywords" content="готовые сайты для бизнеса, купить сайт, продажа сайтов, лендинги, интернет-магазины">
    <meta name="description" content="Kewate.ru – профессиональная платформа для покупки готовых сайтов, включая лендинги, многостраничные проекты и интернет-магазины. Мы предлагаем комплексные решения для малого и среднего бизнеса, готовые сайты с адаптивным дизайном и высокой скоростью загрузки. Поддержка клиентов, уникальные предложения и быстрый запуск – все это поможет вам начать или развивать онлайн-бизнес без лишних усилий. Откройте для себя возможности вместе с Kewate!">
</svelte:head>

<main class="main_content">
    <WelcomeBlock images={[bg1,'',laptop]} page={'/'} taglineDesc={"Улучшаем пользовательский опыт для продуктов по всему миру"} on:modalOpen={()=>{showModal=true}}/>
    <section class="business_objectives dark-background">
        <h1 class="display3 total_black">Решаем задачи бизнеса</h1>
        <div class="objectives">
            <div class="object" style="background: url({object1});background-size: cover;background-repeat:no-repeat;background-position: right;" >
                <div class="object_info">
                    <h2 class="header2">Разработка сайтов</h2>
                    <p class="main_sm_16">Для бизнеса, мероприятий и рекламы</p>
                </div>
                
                
            </div>
            <div class="object">
                <img class="img1" src="{ object2 }" alt="">
                <div class="object_info">
                    <h2 class="header2">Интернет-магазины</h2>
                    <p class="main_sm_16">Повышение продаж с помощью автоматизации</p>
                </div>
                <div class="gradient1"></div>
            </div>
            <div class="object" >
                <img class="img2" src="{ object3 }" alt="">
                <div class="object_info" >
                    <h2 class="header2">Многостраничные сайты</h2>
                    <p class="main_sm_16">Для информационных ресурсов, корпоративных сайтов и других целей</p>
                </div>
                <div class="gradient2"></div>
            </div>
        </div>
    </section>
    <TeamBlock team={command}/>
    <section class="facts light-background">
        <div class="facts_content">
            <div class="about_company">
                <h3 class="display3 white">Факты, которые говорят сами за себя</h3>
            </div>
            <div class="more_details">
                <div class="more_details_info">
                    <p class="main_sm_16 whiteop">Наша амбиция — создать передовой, удобный и продающий продукт для нашего клиента. Мы помогаем компаниям развивать цифровые продукты, делая их простыми для понимания.    </p>
                </div>
                <div class="more_details_link">
                    <a href="#" class="white">Подробнее о студии<img src="{ arrow_circle_right }" alt=""></a>
                </div>
            </div>
            <div class="achievements" 
            use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
            on:change={({ detail }) => {
                isInView5 = detail.inView;
            }}>
                {#key isInView5}
                <table>
                    <thead  in:fade={{duration: 750,delay:0}} class:hidden={!isInView5}>
                        <th class="main_sm_16 whiteop first_th">ФАКТ</th>
                        <th class="empty"></th>
                        <th class="main_sm_16 whiteop">ПОКАЗАТЕЛЬ</th>
                    </thead>
                    <tbody class:hidden={!isInView5}>
                        <tr>
                            <td class="main_sm_16 white" in:fade={{duration: 750,delay:0}} class:hidden={!isInView5}>За всё время работы принесли прибыли клиентам</td>
                            <td class="empty"></td>
                            <td class="display1" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:500}}>
                                <Countup value={80} duration={2000} initial={0}/>
                                млн ₽</td>
                        </tr>
                        <tr>
                            <td class="main_sm_16 white" in:fade={{duration: 750,delay:500}} class:hidden={!isInView5}>Успешно создаём цифровые продукты</td>
                            <td class="empty"></td>
                            <td class="display1" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1000}}> &#707; <Countup value={4} duration={1500} initial={0}/> лет </td>
                        </tr>
                        <tr>
                            <td class="main_sm_16 white" in:fade={{duration: 750,delay:1000}} class:hidden={!isInView5}>Реализовали проектов</td>
                            <td class="empty"></td>
                            <td class="display1" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1500}}><Countup value={100} duration={2500} initial={0}/>+</td>
                        </tr>
                    </tbody>
                </table>
                {/key}
            </div>
        </div>
    </section>
    <ProjectsBlock {projects} />
    <div class="services light-background" id="services">
        <div class="services_content">
            <div class="services_title">
                <h1 class="display3">Услуги</h1>
                <p class="main_sm_16" style="color:#737373;">Комплексный подход к разработке цифровых продуктов</p>
            </div>
            <div class="services_table">
                <div class="development services_row">
                    <h2 class="header2">Разработка</h2>
                    <div class="map">
                        <div class="websites link_ul">
                            <h3 class="header3">Веб-сайты</h3>
                            <a href="/landin" class="main_sm_16 service_link">Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Интернет-магазин<img src="{ arrow_up }" alt=""></a>
                        </div>
                        <!-- <div class="digital_products link_ul">
                            <h3 class="header3">Цифровые продукты</h3>
                            <a href="" class="main_sm_16 service_link">Веб-сервис<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Desktop-приложение<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Мобильное приложение<img src="{ arrow_up }" alt=""></a>
                        </div>
                        <div class="other link_ul">
                            <h3 class="header3">Другое</h3>
                            <a href="" class="main_sm_16 service_link">Бот для мессенджера<img src="{ arrow_up }" alt=""></a>
                        </div> -->
                    </div>
                </div>
                <!-- <div class="design services_row">
                    <h2 class="header2">Дизайн</h2>
                    <div class="map">
                        <div class="product_disign link_ul">
                            <h3 class="header3">Продуктовый дизайн</h3>
                            <a href="" class="main_sm_16 service_link">Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Интернет-магазин<img src="{ arrow_up }" alt=""></a>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <section class="swiper_section dark-background" >
        <SwiperReviews/>
    </section>
    <section class="tg dark-background">
        <div class="tg_block_info">
            <h1 class="display3 total_black">Наш телеграм — о бизнесе и интерфейсах</h1>
            <div class="nikolay">
                <div class="nikolay_image">
                    <img src="{ nikolayBig }" alt="">
                </div>
                <h3 class="header3 total_black">Расскажет Николай Ковальчук <span class="gray"> — CEO Kewate</span></h3>
            </div>
        </div>
        <a href="https://t.me/kewateru" class="tg_link" target="_blank" style="background:url({tg_bg })">
            <span href="https://t.me/kewateru" class="main_btn_white main_sm_16" target="_blank">Перейти в Telegram</span>
        </a>
    </section>
    <ApplicationBlock utm={data.utm}/>
</main>

<style lang="less">
    :global(body){
        background: #F5F5F5;
    }

    .hidden{
        visibility: hidden;
    }
    .op50{
        opacity: 0.5;
    }
    .gray{
        color: #969696;
    }


    /* Tagline (First section) */
    .white{
        color: white;
    }
    
    .black{
        color: var(--Neutral_900);
    }
    .whiteop{
        color: rgba(255, 255, 255, 0.5);
    }

    /* business_objectives */

    .business_objectives{
        padding: 120px 50px 50px 50px;
        max-width: 1280px;
        margin: 0 auto;
        @media (max-width:700px) {
            padding: 80px 16px;
        }
    }
    .objectives{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
        margin-top: 40px;
        @media (max-width: 900px) {
            display: flex;
            flex-direction: column;
        }
    }
    .object{
        border-radius: 16px;
        padding: 20px;
        display: flex;
        align-items: end;
        position: relative;
        overflow: hidden;
        

    }
    .object .img1{
        position: absolute;
        width: fit-content;
        right: -17%;
        z-index: 1;
        height: 150%;
        bottom: -21%;
        object-fit: contain;
        @media (max-width:600px) {
            right: -120px;
            height: 160%;
        }
    }
    .object .img2{
        position: absolute;
        width: fit-content;
        right: -20%;
        z-index: 1;
        height: 150%;
        bottom: -29%;
        object-fit: contain;
        @media (max-width:600px) {
            right: -90px;
            height: 180%;
        }
    }
    .object:not(:first-child){
        height: 190px;
    }
    .object p{
        color: var(--Neutral_500);
    }
    .object:first-child{
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 3;
        height: 400px;
    }
    .object:nth-child(2){
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
        background: #A1E5D1;
        @media (max-width: 700px) {
            height: 190px;
        }
    }
    .object:not(:first-child) h2{
        color: var(--Neutral_900);
    }
    .object:nth-child(3){
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
        background: #C4E3E6;
        @media (max-width: 700px) {
            height: 190px;
        }
    }
    .object_info{
        max-width: 400px;
        z-index: 6;
        display: flex;
        flex-direction: column;
        row-gap: 4px;
    }
    .gradient1{
        display: none;   
        background: linear-gradient(180deg, rgba(161, 229, 209, 0.1), #a1e5d1, #a1e5d1),
            linear-gradient(180deg, rgba(161, 229, 209, 0) 20%, #a1e5d1 34.47%);
        width: 100%;
        height: 55%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 5;
        @media (max-width:1180px) {
            display: unset;
        }
        @media (max-width:900px) {
            display: none;
        }
        @media (max-width:600px) {
            display: unset;
        }
    }

    .gradient2{
        display: none;   
        background: linear-gradient(180deg, rgba(161, 229, 209, 0.1), #C4E3E6, #C4E3E6,#c4e3e675),
            linear-gradient(180deg, rgba(161, 229, 209, 0) 20%, #C4E3E6 34.47%);
        width: 100%;
        height: 60%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 5;
        @media (max-width:1180px) {
            display: unset;
        }
        @media (max-width:900px) {
            display: none;
        }
        @media (max-width:600px) {
            display: unset;
        }
        @media (max-width:330px) {
            height: 70%;
        }
    }



    /* Facts (Second section) */

    .facts{
        background: #0A0A0A;
        overflow: hidden;
        
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 72px;
        @media (max-width:900px) {
            row-gap: 40px;
        }
        @media (max-width:800px) {
            padding: 72px 16px;
        }
        @media (max-width:400px) {
            padding: 32px 16px;
        }
        
    }
    table{
        margin-top: 72px;
        @media (max-width:400px) {
            margin-top: 0px;
        }
    }
    .facts_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 72px 50px;
        @media (max-width:700px) {
            padding: 0px 0px;
        }
    }
    .about_company{
        z-index: 2;
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
    .about_bg{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.05;
        z-index: 1;
        height: 100%;
    }
    .more_details{
        display: flex;
        column-gap: 40px;
        justify-content: space-between;
        z-index: 2;
        position: relative;
        margin-top: 32px;
        @media (max-width:800px) {
            flex-direction: column;
            row-gap: 32px;
            margin-top: 16px;
        }
    }
    .more_details_link a{
        display: flex;
        column-gap: 8px;
        width: 100%;
        align-items: center;
        font-family: "Manrope";
        font-size: 18px;
        font-weight: 500;
        line-height: 22.5px;   
        justify-content: end;
        cursor: pointer;
        @media (max-width:800px){
            justify-content: start;
        } 
    }
    .more_details_link a:hover{
        opacity: 0.8;
    }
    .more_details_link{
        width: 100%;
        max-width: 240px;
    }
    .more_details_link a img{
        width: 28px;
        height: 28px;
    }
    .more_details_info{
        max-width: 45%;
        @media (max-width:800px) {
            max-width: 100%;
        }
    }
    thead{
        @media (max-width:800px) {
            display: none;
        }
    }
    .empty{
        @media (max-width:800px) {
            display: none;
        }
    }
    .achievements{
        z-index: 2;
        position: relative;
    }
    .achievements table{
        width: 100%;
        border-collapse: collapse;
    }
    th{
        padding: 0 0 16px 0px;
        text-align: start;
    }
    tr:not(:last-child ),th{
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .first_th{
        width: 280px;
    }
    table tr td:empty {
        width: 100px;
    }
    td{
        max-height: 90px;
        padding: 52px 0px;
        vertical-align: top;
        @media (max-width:1080px){
            padding: 26px 0px;
        }
        @media (max-width:800px) {
            padding: 0px 0px;
        }
    }
    tr{
        @media (max-width:800px) {
            display: flex;
            flex-direction: column;
            padding: 40px 0 40px 0px;
            row-gap: 40px;
        }
        @media (max-width:400px) {
            row-gap: 32px;
            padding: 64px 0 64px 0px;
        }
    }

    /* Services */

    .services{
        background: var(--Neutral_1000);
       
    }
    .services_table{
        margin-top: 64px;
    }
    .services_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 64px  50px;
        @media (max-width:700px) {
            padding: 64px 16px;
        }
    }
    .services_title{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
    .map img{
        width: 24px;
        height: 24px;
    }
    .service_link{
        display: flex;
        align-items: center;
        column-gap: 8px;
        justify-content: start;
        text-wrap: nowrap;
    }
    .service_link:hover{
        opacity: 0.8;
    }
    .map{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 64px;
        column-gap: 0px;
        width: 100%;
        margin-left: 40px;
        @media (max-width:1080px) {
            margin-left: 0;
        }
        @media (max-width:680px) {
            grid-template-columns: repeat(1,1fr);
        }
    }
    .link_ul{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        flex-shrink: 0;
    }
    .link_ul *{
        flex-shrink: 0;
    }
    .link_ul h3{
        margin-bottom: 8px;
    }
    .services_row{
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        width: 100%;
        @media (max-width:1080px) {
            flex-direction: column;
            row-gap: 64px;
        }
    }
    .services_row h2{
        width: 40%;
        flex-shrink: 0;
    }
    .development{
        padding-bottom: 32px;
    }


    /* Tg block */

    .tg{
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        padding: 0 50px;
        column-gap: 20px;
        margin-bottom: 100px;
        @media (max-width:900px) {
            flex-direction: column-reverse;
        }
        @media (max-width:700px) {
            padding: 0px 16px;
        }
    }
    .tg_link{
        background: var(--Neutral_1000);
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: 50% !important;
        width: 100%;
        max-width: 580px;
        height: 342px;
        border-radius: 16px;
        padding: 16px;
        position: relative;
        @media (max-width:900px) {
            max-width: 100%;
            margin-bottom: 40px;
        }
    }
    .tg_block_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width:900px) {
            row-gap: 32px;
        }
    }
    .tg_link .main_btn_white{
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
    .nikolay{
        display: flex;
        align-items: center;
        column-gap: 20px;
    }
    .nikolay_image{
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        border-radius: 16px;
        overflow: hidden;
    }
    .nikolay_image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    
    /* Swiper section */

    .swiper_section{
        max-width: 1280px;
        margin: 0 auto;
        padding: 160px 0px 160px 50px;
        @media (max-width:1080px) {
            padding: 100px 50px;
        }
        @media (max-width:700px) {
            padding: 100px 16px;
        }
    }
    .swiper > .title{
        margin-right: 50px;
    }
</style>