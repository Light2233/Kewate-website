<script lang="ts">
    import tagline_bg from "$lib/assets/tagline_bg.png"
    import tagline_bg_sm from "$lib/assets/tagline_bg_sm.png"
    import arrow_circle_right from "$lib/assets/arrow_circle_right.svg"
    import nikolay from "$lib/assets/nikolay.png"
    import nikolay_big from "$lib/assets/nikolay_big.png"
    import arrow_up from "$lib/assets/arrow_up.svg"
    import object2 from "$lib/assets/object2.png"
    import object3 from "$lib/assets/object3.png"
    import object1 from "$lib/assets/object1.png"
    import bgModal from "$lib/assets/application_modal_bg.png"

    import andey from "$lib/assets/command/andrey.png"
    import nikita from "$lib/assets/command/nikita.jfif"
    import daniil from "$lib/assets/command/daniil.jfif"
    import nikolayBig from "$lib/assets/command/nikolay.jfif"


    import Countup from "svelte-countup"
    import { enhance } from '$app/forms';
    import {fade,slide,fly} from "svelte/transition"
    import { inview } from 'svelte-inview'
    
    import SwiperReviews from "./SwiperReviews.svelte"
    import { isSubmit } from "$lib/client/PostApplicationStore"
    import ApplicationModalWindow from "./ApplicationModalWindow.svelte";
    import ProjectSwiper from "./ProjectSwiper.svelte"

    export let data;

    // Список проектов

    let projects = [
        {
            id:1,
            name: "Manuspect — сервис для анализа продаж",
            tags:["Сервис","Продуктовый дизайн"]
        },
        {
            id:2,
            name: "RusStroj — строительство элитных домов в Сербии",
            tags:["Сайты"]
        },
        {
            id:3,
            name: "SomeBrand — повышение конверсии после редизайна интернет-магазина",
            tags:["Интернет-магазин","Продуктовый дизайн"]
        },
        {
            id:4,
            name: "DA&BR — Повысили конверсию на 120 % с помощью редизайна сайта",
            tags:["Сайты","Продуктовый дизайн"]
        },
        {
            id:5,
            name: "DA&BR — Повысили конверсию на 120 % с помощью редизайна сайта",
            tags:["Сайты","Продуктовый дизайн"]
        },     
    ]


    // Тригерры при скролле

    let isInView1 = false;
    let isInView2 = false;
    let isInView3 = false;
    let isInView4 = false
    let isInView5 = false
    let isInView6 = false
    let isInView7 = false
    let isInView8 = false
    let isInView9 = false


    //  Список команды

    let command = [
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
            url : null
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

    let budget = ["До 50 тыс. ₽","50 – 200 тыс. ₽","200 – 500 тыс. ₽","от 500 тыс. ₽"];
    let budgetSelected;
    let form;

    
    // Ширина экрана

    let innerWidth;
    let showModal

    let taglineBg 
    $:  {
        if(innerWidth <= 700){
            taglineBg = tagline_bg_sm
        }
        else taglineBg = tagline_bg
    }


    // Контроль скрола 
    
    let scrollable = true;
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
<ApplicationModalWindow bind:showModal bg={bgModal} page={'main'}/>

<svelte:head>
    <title>Главная</title>
</svelte:head>

<main class="main_content">
    <section class="tagline trans-background"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView4 = detail.inView;
    }}
    style="background-image: url({ taglineBg });background-repeat: no-repeat"
    
    >
        {#key isInView4}
            <div class="">
                <p class="display2 white" in:fly={{duration: 750,y:100}} class:hidden={!isInView4} >Удобство для пользователей<br> — прибыль для бизнеса</p>
                {#if innerWidth < 600}
                    <p class="main_sm_16">Улучшаем пользовательский опыт для продуктов по всему миру</p>
                    <button class="main_sm_16 main_btn_white" on:click={()=>{showModal=true}}>Обсудить задачу</button>
                {/if}
            </div>
        {/key}
        <div class="tagline_map">
            <p class="main_sm_16">Улучшаем пользовательский опыт для продуктов по всему миру</p>
            <div class="map_links">
                <a class="map_link main_sm_16" href="/pages/online-store">Интернет-магазины</a>
                <a class="map_link main_sm_16" href="/pages/landing-page">Лендинги</a>
                <!-- <a class="map_link main_sm_16" href="#services">UI/UX дизайн</a> -->
            </div>
        </div>
    </section>
    <section class="business_objectives dark-background"
    
    >
        <h3 class="display3 total_black">Решаем задачи бизнеса</h3>
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
    <section class="command dark-background" id="command">
        <div class="command_info">
            <div class="info_block">
                <h3 class="display3 total_black">Наши специалисты решат задачи</h3>
                <p class="main_sm_16 total_black op50">Команда специалистов, которые показывают явный результат </p>
            </div>
        </div>
        <div class="command_table">
            {#each command  as person}
                <div class="person_block">
                    <div class="image_block">
                        <img src="{ person.url }" alt="">
                    </div>
                    <div class="person_info">
                        <h3 class="header3 total_black">{person.name}</h3>
                        <p class="main_sm_14 total_black op50">{person.speciality}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    <section class="facts light-background">
        <div class="facts_content">
            <div class="about_company">
                <p class="display3 white">Факты, которые говорят сами за себя</p>
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
    <section class="section_pd projects dark-background" id="projects"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView1 = detail.inView;
    }}>
        {#key isInView1}
            <h3 class="display3 total_black" in:fly={{duration: 750,x:100,delay:0}} class:hidden={!isInView1}>Реализовали более 100 проектов</h3>
            <div class="project_selected" in:fade={{duration: 750,delay:500}} class:hidden={!isInView1}>
                <div class="project_image">

                </div>
                <div class="project_info">
                    <p class="header2 total_black" class:hidden={!isInView1}>Manuspect — сервис для анализа продаж</p>
                    <div class="tags">
                        {#each projects[0].tags as tag}
                            <div class="tag main_sm_14 total_black">
                                {tag}
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
                    isInView2 = detail.inView;
                }}
                >
                    {#each projects as project, index}
                        
                        {#if index !== 0}
                            {#key isInView2}
                                <div class="app" in:fly={{duration: 750,y:100,delay: index*300}} class:hidden={!isInView2}>
                                    
                                        <div class="img_box">

                                        </div>
                                        <div class="app_info">
                                            <div class="">
                                                <h2 class="header2 total_black">{project.name}</h2>
                                            </div>
                                            <div class="tags">
                                                {#each project.tags as tag}
                                                    <div class="tag main_sm_14 total_black">
                                                        {tag}
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
    <div class="services light-background" id="services">
        <div class="services_content">
            <div class="services_title">
                <h3 class="display3">Услуги</h3>
                <p class="main_sm_16" style="color:#737373;">Комплексный подход к разработке цифровых продуктов</p>
            </div>
            <div class="services_table">
                <div class="development services_row">
                    <h2 class="header2">Разработка</h2>
                    <div class="map">
                        <div class="websites link_ul">
                            <h3 class="header3">Веб-сайты</h3>
                            <a href="" class="main_sm_16 service_link">Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
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
            <h3 class="display3 total_black">Наш телеграм — о бизнесе и интерфейсах</h3>
            <div class="nikolay">
                <div class="nikolay_image">
                    <img src="{ nikolay }" alt="">
                </div>
                <h3 class="header3 total_black">Расскажет Николай Ковальчук <span class="gray"> — CEO Kewate</span></h3>
            </div>
        </div>
        <a href="https://t.me/kewateru" class="tg_link" target="_blank">
            <span href="https://t.me/kewateru" class="main_btn_white main_sm_16" target="_blank">Перейти в Telegram</span>
        </a>
    </section>
    <section class="application dark-background">
        <div class="ceo">
            <div class="ceo_info">
                <div class="ceo_image">
                    <img src="{ nikolay_big }" alt="">
                </div>
                <div class="ceo_desc">
                    <h2 class="header2 total_black">Николай Ковальчук</h2>
                    <p class="main_sm_16 total_black">— CEO Kewate, ответственный за коммуникацию</p>
                </div>
            </div>
            <div class="contacts_div">
                {#if innerWidth<= 980}
                    <h3 class="header3 total_black">Контакты</h3>
                {/if}
                <div class="contacts">
                    <a href="mailto: main@kewate.ru" class="main_sm_16 total_black" style="text-decoration: underline;">main@kewate.ru</a>
                    <a href="tel: +79850123407" class="main_sm_16 total_black" style="text-decoration: underline;">+7 985 012-34-07</a>
                </div>
            </div>
        </div>
        <form action="?/sendApp" method="post" use:enhance on:submit={()=>{$isSubmit = true}} bind:this={form}>
            <input type="hidden" name="page" value="Главная">
            <input type="hidden" name="source" value="Последний блок с Колей">
            <input type="hidden" name="utm" value="{JSON.stringify(data.utm)}">
            <div class="application_title">
                <h3 class="display3 total_black">Давайте обсудим Вашу задачу</h3>
                <p class="main_sm_16 gray">Проведём созвон, где расскажем о нас, обсудим задачу и выстроим планы</p>
            </div>
            <div class="application_form">
                <div class="row">
                    <p class="main_sm_16 gray" style="font-weight: 600;">Основное</p>
                    <div class="input_place">
                        <div class="">
                            <h4 class="header4 total_black">Имя</h4>
                            <input name="name" required type="text" placeholder="Как к вам обращаться?">
                        </div>
                        <div class="">
                            <h4 class="header4 total_black">Компания</h4>
                            <input name="company" type="text" placeholder="Необязательное поле">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <p class="main_sm_16 gray" style="font-weight: 600;">Контакты</p>
                    <div class="input_place">
                        <div class="">
                            <h4 class="header4 total_black">Телефон</h4>
                            <input name="phone" type="text" placeholder="+7 (900) 000–00–00" required>
                        </div>
                        <div class="">
                            <h4 class="header4 total_black">E-mail</h4>
                            <input name="email" type="text" placeholder="Необязательное поле">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <p class="main_sm_16 gray" style="font-weight: 600;">Бюджет</p>
                    <div class="budget">

                        {#each budget as money ,index}
                            <div class="budget_section main_sm_16 total_black" class:budget_selected={budgetSelected === money}>
                                <input type="radio" name="budget" value="{money}" bind:group={budgetSelected} required>
                                {money}
                            </div>
                            {#if index+1 != budget.length}
                                <div class="line"></div>
                            {/if}
                        {/each}
                        
                    </div>
                </div>
            </div>
            <div class="send_app">
                <div class="empty"></div>
                <div class="send_app_btn">
                    <button class="main_sm_16 main_btn_black" type="submit">Оставить заявку</button>
                    <p class="main_sm_16 gray">Мы перезвоним Вам в течение дня</p>  
                </div>
            </div>
        </form>
    </section>
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
    .total_black{
        color: var(--Neutral_1000);
    }
    .black{
        color: var(--Neutral_900);
    }
    .whiteop{
        color: rgba(255, 255, 255, 0.5);
    }
    .tagline{
        z-index: 2;
        padding: 68px 50px 48px 50px;
        position: relative;
        height: 54vh;
        min-height: 700px;
        height: 100svh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width:800px) {
            padding: 24px 16px;
            min-height: unset;
        }
        @media (max-width:600px){
            flex-direction: column-reverse;
        }
    }
    .tagline p:not(.tagline_map p){
        max-width: 75%;
        margin-top: 48px;
        @media (max-width:800px) {
            max-width: 100%;
        }
    }
    .tagline_map{
        display: flex;
        justify-content: space-between;
        align-items: end;
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

        width: fit-content;
        border-radius: 24px;
        @media (max-width:600px){
            padding: 8px 12px;
            font-size: 14px;
            line-height: 15.4px;
        }

    }
    .tagline div:first-child{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
    .tagline div:first-child p{
        @media (max-width:600px) {
            margin-top: 0; 
        }
        
    }
    .tagline div:first-child button{
        margin-left: 0;
    }
    .tagline .display2{
       @media (max-width:600px) {
            font-size: 32px;
            line-height: 35.2px;
       }
    }

    /* business_objectives */

    .business_objectives{
        padding: 50px;
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


    /* Command section */

    .image_block{
        width: 280px;
        height: 320px;
        background: var(--Neutral_900);
        border-radius: 16px;
        @media (max-width:980px) {
            height: 250px;
            max-width: 250px;
        }
        @media (max-width: 553px) {
            height: 180px;
            width: 100%;
        }
    }
    .command{
        display: flex;
        justify-content: space-between;
        padding: 150px 50px;
        max-width: 1280px;
        margin: 0 auto;
        column-gap: 20px;
        @media (max-width:1180px) {
            flex-direction: column;
        }
        @media (max-width:700px) {
            padding: 40px 16px;
        }
        
    }
    .info_block{
        height: 390px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 64px;
        @media (max-width:1180px) {
            height: fit-content;
            row-gap: 5px;
        }
    }
    .command_info{
        width: 100%;
    }
    .command_table{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 40px 20px;
        @media (max-width:1180px) {
            grid-template-columns: repeat(3,1fr);
            margin-top: 40px;
        }
        @media (max-width:900px) {
            grid-template-columns: repeat(2,1fr);
        }
        @media (max-width:400px) {
            gap: 24px 8px;
        }
    }
    .person_block{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        @media (max-width:900px) {
            align-items: center;
        }
        @media (max-width:400px) {
            row-gap: 16px;
        }
    }
    .person_info{
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        @media (max-width:400px) {
            row-gap: 12px;
        }
    }
    .person_block h3{
        @media (max-width:400px) {
            font-size: 20px;
            line-height: 24px;
        }
    }
    .person_block .image_block{
        border-radius: 16px;
        overflow: hidden;
    }
    .person_block .image_block img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: grayscale(1);
         
    }
    .person_block:nth-child(2) .image_block img{
        transform: scale(2);  
    }
    .person_block:nth-child(4) .image_block img{
        transform: scale(1.5);  
    }
    .person_block:nth-child(5) .image_block img{
        transform: scale(1.3);
        object-position: 50%;  
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
            row-gap: 20px;
        }
        @media (max-width:400px) {
            row-gap: 16px;
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
        justify-content: space-between;
        cursor: pointer;
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


    /* Projects (Therd section) */

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
    }
    .nikolay_image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Application */

    .application{
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        padding-top: 100px;
        padding-bottom: 100px;
        column-gap: 120px;
        @media (max-width:980px) {
            flex-direction: column-reverse;
        }
        @media (max-width:700px) {
            padding: 100px 16px;
        }
    }
    .ceo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        width: 30%;
        @media (max-width:980px) {
            width: 100%;
            margin-top: 64px;
            row-gap: 32px;
        }
    }
    .ceo_info{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        @media (max-width:980px) {
            flex-direction: row;
            column-gap: 16px;
        }
    }
    .ceo_image{
        width: 180px;
        height: 180px;
        @media (max-width:980px) {
            width: 50px;
            height: 50px;
        }
    }
    .ceo_desc h2{
        margin-bottom: 8px; 
    }
    .contacts{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
    .contacts a:hover{
        opacity: 0.8;
    }
    .contacts_div{
        @media (max-width:980px) {
            display: flex;
            flex-direction: row;
            column-gap: 16px;
            justify-content: space-between;
        }  
    }
    .application input[type="text"]{
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 12px;
        outline: none;
        border-radius: 12px;
        width: 100%;
        margin-top: 8px;
    }
    form{
        display: flex;
        flex-direction: column;
        row-gap: 64px;
        width: 100%;
        max-width: 780px;
        @media (max-width:980px) {
            max-width: unset;
        }
    }
    .application_title{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        align-items: end;
        @media (max-width:1250px) {
            align-items: start;
        }
    }
    .application_title h3{
        margin-right: 10px;
    }
    .application_form{
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        
    }
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width:1250px) {
            flex-direction: column;
            align-items: start;
            row-gap: 12px;
        }
    }
    .row p{
        flex-grow: 2;
    }
    .input_place{
        flex-grow: 3;
        display: flex;
        column-gap: 28px;
        justify-content: space-between;
        @media (max-width:1250px) {
            width: 100%;
        }
        @media (max-width:500px) {
            flex-direction: column;
            row-gap: 20px;
        }
    }
    .input_place div{
        width: 100%;
    }
    .budget{
        display: flex;
        align-items: center;
        flex-grow: 2;
        height: 100%;
        justify-content: end;
        max-width: 590px;
        @media (max-width:1250px) {
            width: 100%;
            max-width: 780px;
        }
        @media (max-width:980px) {
            max-width: 100%;
        }
        @media (max-width:680px) {
            flex-direction: column;
            border: 1px solid var(--Neutral_300);
            border-radius: 16px;
        }
    }
    .budget_section{
        position: relative;
        height: 100%;
        width: 100%;
        max-width: 144px;
        display: flex;
        height: 55px;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--Neutral_300);
        border-bottom: 1px solid var(--Neutral_300);
        text-align: center;
        cursor: pointer;
        font-weight: 650;
        @media (max-width:1250px) {
            max-width: 100%;
        }
        @media (max-width:680px) {
            border: none;
        }
    }
    .budget_section input{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }
    .budget_section:first-child{
        padding: 0px 0px 0px 0px;
        border-radius: 12px 0px 0px 12px;
        border-left: 1px solid var(--Neutral_300);
        @media (max-width:680px) {
            border: none;
            border-radius: 12px 12px 0px 0px;
        }
    }
    .budget_section:last-child{
        padding: 0px 0px 0px 0px;
        border-radius:  0px 12px 12px 0px;
        border-right: 1px solid var(--Neutral_300);
        @media (max-width:680px) {
            border: none;
            border-radius:  0px 0px 12px 12px;
        }
    }
    .line{
        height: 100%;
        width: 1px;
        background: #FAFAFA;
    }
    .budget_selected{
        background: var(--Neutral_1000);
        color: white;
        font-weight: 500;
    }
    .send_app{
        display: flex;
        align-items: center;
        justify-content: end;
        
      
    }
    .empty{
        flex-grow: 3;
        height: 100%;
        @media (max-width:1250px) {
            display: none;
        }
    }
    .send_app_btn{
        display: flex;
        flex-grow: 2;
        align-items: center;
        column-gap: 32px;
        @media (max-width:980px) {
            width: 100%;
            flex-direction: column;
            row-gap: 16px;
        }
    }
    .send_app_btn button{
        @media (max-width:1250px) {
            margin-left: 0;
        }
        @media (max-width:980px) {
            width: 100%;
        }
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