<script lang="ts">
    import nikolay_big from "$lib/assets/nikolay_big.png"
    import tick_circle from "$lib/assets/tick_circle.svg"


    
    import Countup from "svelte-countup"
    import { enhance } from '$app/forms';
    import {fade,slide,fly} from "svelte/transition"
    import { inview } from 'svelte-inview'
    import SwiperReviews from "../SwiperReviews.svelte"
    import { onMount, afterUpdate , onDestroy } from "svelte"
    import type { PageData } from './$types';
    import { page } from '$app/stores';


    
    import { priceFormat } from "$lib/client/formarters"
    import { isSubmit } from "$lib/client/PostApplicationStore"
    import ApplicationModalWindow from "../ApplicationModalWindow.svelte";
    import WebsiteSwiper from "../WebsiteSwiper.svelte"
    import ProjectSwiper from "../ProjectSwiper.svelte"
    import LandingGrid from "$lib/client/components/LandingGrid.svelte"
    import MultiPageGrid from "$lib/client/components/MultiPageGrid.svelte"
    import OnlineStoreGrid from "$lib/client/components/OnlineStoreGrid.svelte"
    import WelcomeBlock from "../WelcomeBlock.svelte"
    import { imask } from '@imask/svelte';

    export let data: PageData;


    let websiteInfo = data.websiteInfo;
    let pageName = data.slug;
    let projects = data.projects;
    let team = data.team;

    $:{
        websiteInfo = data.websiteInfo;
        pageName = data.slug;
        projects = data.projects;
        team = data.team;
    }




    let render : boolean = false

 

    let innerWidth : number;
    let showModal : boolean = false;
    let budgetSelected : string = '';
    let form : HTMLFormElement;


    // Тригерры при скролле
    let isInView1 = false;
    let isInView2 = false;
    let isInView3 = false;
    let isInView5 = false

    // Заявка 
    let budget = ["До 50 тыс. ₽","50 – 200 тыс. ₽","200 – 500 тыс. ₽","от 500 тыс. ₽"];

    // Открывашки по вопросам
    let tabs = [
        {
            name:"Как проходит согласование проекта?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        },
        {
            name:"На чём разрабатывается сайт?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        },
        {
            name:"Используется ли авторский контент?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        },
        {
            name:"Из чего складывается стоимость сайта?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        },
        {
            name:"Как производится оплата работ?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        },
        {
            name:"Можно ли будет редактировать сайт после разработки?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        },
        {
            name:"Будет ли техническая поддержка?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
            open : false
        }
    ]


    // Маска масконосец

    const options = {
        mask: '{+7} (000) 000-00-00',
        lazy: true
    };
    
    let phoneNumber= '';

</script>

<svelte:window bind:innerWidth={innerWidth}/>
<ApplicationModalWindow bind:showModal bg={websiteInfo.images[1]} page={pageName}/>

<svelte:head>
    <title>Главная</title>
</svelte:head>


<main class="main_content">
    <WelcomeBlock images={websiteInfo.images} page={pageName} taglineDesc={websiteInfo.taglineDesc}/>
    <section class="facts dark-background">
        <div class="facts_content">
            <div class="about_company">
                <h3 class="display3 total_black">Факты, которые говорят сами за себя</h3>
            </div>
            <div class="more_details">
                <div class="more_details_info">
                    <p class="main_sm_16 total_blac whiteop">Наша амбиция — создать передовой, удобный и продающий продукт для нашего клиента. Мы помогаем компаниям развивать цифровые продукты, делая их простыми для понимания.</p>
                </div>
                <div class="more_details_link">
                    <a href="/" class="total_black main_sm_16">
                        Подробнее о студии
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0002 2.33331C7.57183 2.33331 2.3335 7.57165 2.3335 14C2.3335 20.4283 7.57183 25.6666 14.0002 25.6666C20.4285 25.6666 25.6668 20.4283 25.6668 14C25.6668 7.57165 20.4285 2.33331 14.0002 2.33331ZM17.2552 14.6183L13.1368 18.7366C12.9618 18.9116 12.7402 18.9933 12.5185 18.9933C12.2968 18.9933 12.0752 18.9116 11.9002 18.7366C11.5618 18.3983 11.5618 17.8383 11.9002 17.5L15.4002 14L11.9002 10.5C11.5618 10.1616 11.5618 9.60165 11.9002 9.26331C12.2385 8.92498 12.7985 8.92498 13.1368 9.26331L17.2552 13.3816C17.6052 13.72 17.6052 14.28 17.2552 14.6183Z" fill="white"/>
                        </svg>                    
                    </a>
                </div>
            </div>
            <div class="achievements" 
            use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
            on:inview_change={({ detail }) => {
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
                            <td class="main_sm_16 total_black" in:fade={{duration: 750,delay:0}} class:hidden={!isInView5}>За всё время работы принесли прибыли клиентам</td>
                            <td class="empty"></td>
                            <td class="display1 total_black" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:500}}>
                                <Countup value={80} duration={1500} initial={0}/>
                                млн ₽</td>
                        </tr>
                        <tr>
                            <td class="main_sm_16 total_black" in:fade={{duration: 750,delay:500}} class:hidden={!isInView5}>Успешно создаём цифровые продукты</td>
                            <td class="empty"></td>
                            <td class="display1 total_black" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1000}}> &#707; <Countup value={4} duration={1500} initial={0}/> лет </td>
                        </tr>
                        <tr>
                            <td class="main_sm_16 total_black" in:fade={{duration: 750,delay:1000}} class:hidden={!isInView5}>Реализовали проектов</td>
                            <td class="empty"></td>
                            <td class="display1 total_black" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1500}}><Countup value={100} duration={2000} initial={0}/>+</td>
                        </tr>
                    </tbody>
                </table>
                {/key}
            </div>
        </div>
    </section>
    <section class="working dark-background">
        <h3 class="display3 total_black">Методы работы</h3>
        <div class="working_grid">
            <div class="method">
                <h2 class="header2 total_black">Исследуем рынок</h2>
                <p class="main_sm_16 gray" >Анализируем конкурентов и потребности аудитории, чтобы сайт идеально подходил под их запросы</p>
            </div>
            <div class="method">
                <h2 class="header2 total_black">Транслируем ценности бизнеса</h2>
                <p class="main_sm_16 gray" >Отталкиваемся от целей бизнеса, следуем философии бренда и делаем дизайн под фирменный стиль</p>
            </div>
            <div class="method">
                <h2 class="header2 total_black">Работаем без конструкторов</h2>
                <p class="main_sm_16 gray" >Разрабатываем сайты на чистом коде, что делает его наиболее оптимизированным с возможностью внести любые правки</p>
            </div>
        </div>
    </section>
    <section class="feedback light-background"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-30%' }}
    on:inview_change={({ detail }) => {
        isInView3 = detail.inView;
    }}
    >   
        <div class="feedback_content">
            <div class="feedback_title">
                <h3 class="display3">Держим в курсе разработки</h3>
                <div class="title_desc">
                    <p class="main_sm_16 gray">Уделяем большое внимание контролю сроков</p>
                    <p class="main_sm_16 gray">{websiteInfo.time}</p>
                </div>
            </div>
            {#if isInView3}
                {#if pageName == "landing"}
                    <LandingGrid />
                {:else if pageName == "multi-page"}
                    <MultiPageGrid/>
                {:else}
                    <OnlineStoreGrid/>
                {/if}
            {/if}
        
        </div>

        <div class="responsibility">
            <h1 class="header1">У нас есть проектная ответст&shyвенность</h1>
            <div class="responsibility_grid">
                <div class="responsibility_block">
                    <div class="responsibility_block_info">
                        <h2 class="header2 total_black">Личный кабинет клиента</h2>
                        <p class="main_sm_16 gray">Отличная замена личным сообщениям и звонкам. Доступ к процессу работы в реальном времени</p>
                    </div>
                </div>
                <div class="responsibility_block">
                    <div class="responsibility_block_info">
                        <h2 class="header2">Доступ к проектному файлу</h2>
                        <p class="main_sm_16 gray">Просмотр результатов работы и в Figma</p>
                    </div>
                </div>
                <div class="responsibility_block">
                    <div class="responsibility_block_info">
                        <h2 class="header2">Мы на связи с 7:00 до 23:00</h2>
                        <p class="main_sm_16 gray">А служба поддержки сайтов работает даже ночью =)</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section class="website dark-background">
        <div class="website_content">
            <div class="website_title">
                <h3 class="display3 total_black">Разработаем сайт под ключ</h3>
                <p class="main_sm_16 gray">Всё включено в стоимость</p>
            </div>
            <div class="website_info">
                <div class="website_swiper">
                    <WebsiteSwiper />
                </div>
                <div class="main_info">
                    <div class="">
                        <div class="website_name">
                            <h1 class="header1 total_black">{@html websiteInfo.name}</h1>
                            <p class="main_sm_16 total_black">Срок разработки: {websiteInfo.term}</p>
                        </div>
                        <div class="for">
                            <p class="main_sm_16 gray">{websiteInfo.purpose}</p>
                        </div>
                    </div>
                    <div class="advantage_grid">
                        {#each websiteInfo.advantages as item}
                            <div class="advantage">
                                <h1 class="main_sm_16 total_black">{item.title}</h1>
                                <p class="main_sm_16 gray">{item.desc}</p>
                            </div>
                        {/each}
                    </div>
                    <div class="cost_info">
                        <h1 class="header1 total_black">{ priceFormat(websiteInfo.cost)}</h1>
                        <button class="main_sm_16 main_btn_black" on:click={()=>{showModal=true}}>Оставить заявку</button>
                    </div>
                </div>
            </div>
            <div class="included">
                <h2 class="header2 total_black">Что входит в разработку?</h2>
                <div class="blocks">
                    <div class="included_block">
                        <p class="main_sm_16 gray">Дизайн</p>
                        <div class="">
                            <img src="{ tick_circle  }" alt="">
                            <p class="main_sm_16 total_black">Создание иллюстраций</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Анимация сайта</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Правки для достижения результата</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Адаптация под 3 устройства</p>
                        </div>
                    </div>
                    <div class="included_block">
                        <p class="main_sm_16 gray">Разработка</p>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Вывод сайта в полную готовность</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Оптимизация сайта</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Хостинг и домен в подарок</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Тех.поддержка сайта в течение месяца</p>
                        </div>
                    </div>
                    <div class="included_block">
                        <p class="main_sm_16 gray">Другое</p>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Консультация с юристом</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Подключение Яндекс Метрики</p>
                        </div>
                        <div class="">
                        <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Подключение обратной связи</p>
                        </div>
                        <div class="">
                            <img src=" { tick_circle} " alt="">
                            <p class="main_sm_16 total_black">Настройка SEO</p>
                        </div>
                    </div>
                </div>
                
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
            {#each team  as person}
                <div class="person_block">
                    <div class="image_block">
                        <img src="{person.url ? person.url : " "}" alt="">
                    </div>
                    <div class="person_info">
                        <h3 class="header3 total_black">{person.name}</h3>
                        <p class="main_sm_14 total_black op50">{person.speciality}</p>
                    </div>
                </div>
            {/each}
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
    <section class="swiper_section dark-background" >
        <SwiperReviews/>
    </section>
    <section class="tabs">
        <div class="tabs_title">
            <h3 class="display3 total_black">Частые вопросы</h3>
        </div>
        <div class="tabs_block">
            {#each tabs as tab}
                <div class="tab">
                    <button class="main_sm_16 total_black" on:click={()=>{tab.open = !tab.open}} >{tab.name}<div class="cross" class:tab_open={tab.open}></div></button>
                    {#if tab.open}
                        <div class="tab_content main_sm_16 total_black" transition:slide>
                            {tab.content}
                        </div>
                    {/if}
                </div>
            {/each}
            
        
        </div>
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
                            <input name="phone" type="text" placeholder="+7 (900) 000–00–00" required bind:value={phoneNumber} use:imask={options}>
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
        color: var(--Neutral_400);
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
        top: 128px;
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
        overflow: hidden;
        background: #FFFFFF;
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
    .more_details_link svg path{
        fill: black;
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
        border-bottom: 1px solid #E5E5E5;
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


    /* working block */
    .working{
        max-width: 1280px;
        margin: 0 auto;
        padding: 120px 50px;
        @media (max-width:700px) {
            padding: 120px 16px;
        }
    }
    .working_grid{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        @media (max-width:900px) {
            flex-direction: column;
        }
    }
    .method{
        height: 330px;
        background-color: #FFFFFF;
        border-radius: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    
    }


    /* Stages block */
    .feedback{
        margin: 0 auto;
        background: #0A0A0A;
        padding: 64px 0px;
        @media (max-width:700px) {
            padding: 0px 0 40px 0px;
        }
    }
    .feedback_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 40px 50px 0 50px;
        @media (max-width:700px) {
            padding: 40px 16px 0px 16px;
        }
    }
    .responsibility{
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 50px;
        @media (max-width:700px) {
            padding: 0 16px;
        }
    }
    .responsibility_grid{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
        margin-top: 40px;
        @media (max-width:800px) {
            grid-template-columns: 1fr;
        }
    }
    .responsibility_block{
        padding: 20px;
        display: flex;
        align-items: end;
        border-radius: 16px;
        height: 190px;
    }
    .responsibility_block:not(:first-child){
        background: #171717;
    }
    .responsibility_block:first-child{
        grid-row: 1/3;
        height: 400px;
        background: #A1E5D1;
    }
    .responsibility_block p{
        color: #737373;
        margin-top: 6px;
        font-weight: 500;
    }
    .responsibility_block h2{
        font-weight: 500;
    }
    .responsibility h1{
        font-weight: 500;
    }
    .title_desc{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        @media (max-width:600px) {
            flex-direction: column;
            align-items: start;
            row-gap: 16px;
        }
    }
    .responsibility_block:first-child h2{
        font-weight: 700;
    }
    .responsibility_block:not(:first-child) h2{
        font-weight: 500;
    }


    /* Website onfo block */
    .website{
        max-width: 1280px;
        margin: 0 auto;
        padding: 50px 50px;
        @media (max-width:700px) {
            padding: 50px 16px;
        }

    }
    .website_title{
        display: flex;
        align-items: end;
        justify-content: space-between;
        margin-bottom: 40px;
        @media (max-width:1000px) {
            align-items: start;
            flex-direction: column;
            row-gap: 10px;
        }
    }
    .website_info{
        display: flex;
        column-gap: 40px;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 64px;
        @media (max-width:1000px) {
            flex-direction: column;
            row-gap: 48px;
            padding-bottom: 48px;
        }

    }
    .main_info{
        width: 100%;
        max-width: 580px;
        @media (max-width:1000px) {
            max-width: 100%;
        }
    }
    .website_swiper{
        width: 100%;
        max-width: 480px;
        border-radius: 16px;
        overflow: hidden;
    }
    .website_name{
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-bottom: 20px;
        @media (max-width:1180px) {
            flex-direction: column;
            align-items: start;
            row-gap: 8px;
        }
        @media (max-width:1000px) {
            row-gap: 16px;
        }
    }
    .cost_info h1{
        @media (max-width:400px) {
            font-size: 24px;
            line-height: 26.4px;
        }
    }
    .cost_info button{
        @media (max-width:400px) {
            font-size: 14px;
            line-height: 15.4px;
        }
        @media (max-width:300px) {
            margin-left: 0;
        }
    }
    .advantage_grid{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin-top: 48px;
        border-bottom: 1px solid var(--Neutral_300);
        @media (max-width:1000px) {
            margin-top: 32px;
        }
        @media (max-width:300px) {
            grid-template-columns: repeat(1,1fr);
        }
    }
    .advantage{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .advantage:first-child{
        grid-column: 1/3;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--Neutral_300);
        @media (max-width:1000px) {
            padding-bottom: 16px;
        }
        @media (max-width:300px) {
            grid-template-columns: repeat(1,1fr);
        }
    }
    .advantage:nth-child(2){
        grid-column: 1/1;
        padding-top: 20px;
        padding-right: 20px;
        border-right: 1px solid var(--Neutral_300);
        padding-bottom: 20px;
        @media (max-width:1000px) {
           padding: 16px 16px 16px 0px;
        }
        @media (max-width:300px) {
            grid-column: 1/1;
            border-right: none;
            border-bottom: 1px solid var(--Neutral_300);
        }
    }
    .advantage:last-child{
        grid-column: 2/2;
        padding-top: 20px;
        padding-right: 40px;
        padding-left: 20px;
        padding-bottom: 20px;
        @media (max-width:1000px) {
           padding: 16px 0px 16px 16px;
        }
        @media (max-width:300px) {
            grid-column: 1/1;
            padding-left: 0;
        }
    }
    .advantage h1{
        font-weight: 700;
        letter-spacing:normal
    }
    .cost_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        @media (max-width:300px) {
            flex-direction: column;
            align-items: start;
            row-gap: 16px;
        }
    }
    .included{
        padding-top: 64px;
        border-top: 1px solid var(--Neutral_300);
        @media (max-width:1000px) {
            padding-top: 48px;
        }
    }
    .included_block img{
        width: 24px;
        height: 24px;
    }
    .included_block{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        flex-grow: 1;
    }
    .included_block div{
        display: flex;
        align-items: center;
        column-gap: 8px;
        
    }
    .blocks{
        display: flex;
        justify-content: space-between;
        column-gap: 20px;
        margin-top: 24px;
        @media (max-width:1000px) {
           flex-direction: column;
           row-gap: 20px;
        }
        
    }
    .included_block p:first-child{
        margin-bottom: 4px;
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
        padding-bottom: 0px;
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
        font-weight: 500;
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

    /* Tabs block */
    .tabs{
        display: flex;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 50px;
        justify-content: space-between;
        column-gap: 20px;
        @media (max-width:1050px) {
            flex-direction: column;
            row-gap: 32px;
        }
        @media (max-width:700px) {
            padding: 0 16px;
        }
        @media (max-width:500px) {
            display: none;
        }
    }
    .tabs_block{
        display: flex;
        flex-direction: column;
        max-width: 580px;
        width: 100%;
        @media (max-width:1050px) {
            max-width: 100%;
        }
    }
    .tab{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .tab button{
        display: flex;
        justify-content: space-between;
        padding: 20px 0px;
        border-bottom: 1px solid var(--Neutral_300);
        font-weight: 600;
        cursor: pointer;
    }
    .tab button:hover{
        border-bottom: 1px solid var(--Neutral_400);
    }
    .tab_content{
        padding: 20px 0px;
    }
    .tab img{
        width: 24px;
    }
    .cross {
        position: relative;
        width: 13.5px;
        height: 13.5px;
        cursor: pointer;
        
        &.tab_open {
            &:before {
                transform: translatey(-50%) rotate(-90deg);
                opacity: 0;
            }
            &:after {
                transform: translatey(-50%) rotate(0);
            }
        }
        
        &:before , &:after {
            content: "";
            display: block;
            background-color: #333;
            position: absolute;		
            top: 50%; left: 0;
            transition: .35s;
            width: 100%;
            height: 2px;
        }
        
        &:before {		
            transform: translatey(-50%);
        }
        
        &:after {
            transform: translatey(-50%) rotate(90deg);
        }
        
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
            padding: 64px 16px 120px 16px;
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
        column-gap: 29px;
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