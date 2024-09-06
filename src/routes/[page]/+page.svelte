<script lang="ts">
    import nikolay_big from "$lib/assets/command/nikolay.webp"
   


    
    import Countup from "svelte-countup"
    import { enhance } from '$app/forms';
    import {fade,slide,fly} from "svelte/transition"
    import { inview } from 'svelte-inview'
    import { onMount, afterUpdate , onDestroy } from "svelte"
    import type { PageData } from './$types';
    import { page } from '$app/stores';


    
    import { priceFormat } from "$lib/client/formarters"
    import { isSubmit } from "$lib/client/PostApplicationStore"
    import ApplicationModalWindow from "../ApplicationModalWindow.svelte";
    import LandingGrid from "$lib/client/components/LandingGrid.svelte"
    import MultiPageGrid from "$lib/client/components/MultiPageGrid.svelte"
    import OnlineStoreGrid from "$lib/client/components/OnlineStoreGrid.svelte"
    import WelcomeBlock from "$lib/client/components/WelcomeBlock.svelte"
    import ProjectsBlock from "$lib/client/components/ProjectsBlock.svelte";
    import TeamBlock from "$lib/client/components/TeamBlock.svelte";
    import SwiperReviews from "$lib/client/components/SwiperReviews.svelte";
    import ApplicationBlock from "$lib/client/components/ApplicationBlock.svelte";
    import WebsiteBlock from "$lib/client/components/WebsiteBlock.svelte";
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
    let tabSelected : number = undefined;


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
        },
        {
            name:"На чём разрабатывается сайт?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
        },
        {
            name:"Используется ли авторский контент?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
        },
        {
            name:"Из чего складывается стоимость сайта?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
        },
        {
            name:"Как производится оплата работ?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
        },
        {
            name:"Можно ли будет редактировать сайт после разработки?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
        },
        {
            name:"Будет ли техническая поддержка?",
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iste deserunt illo tempore minima deleniti suscipit aperiam, vitae quos ut sequi, sunt accusantium! Illum voluptates esse praesentium nisi eligendi optio!',
        }
    ]

    function tabOpen (index : number){
        if(tabSelected == index){
            tabSelected = undefined;
            return;
        }
        tabSelected = index;
    }

    
    let metaTeg = {
        "landing" : ["Ищете качественный лендинг для бизнеса? На Kewate.ru доступны готовые лендинги с адаптивным дизайном, созданные для быстрой конверсии и привлечения клиентов. Легкий запуск и максимальная отдача от вашего проекта.","купить лендинг, готовые лендинги, продажа лендингов, лендинги для бизнеса, создание лендингов"],
        "multi-page" : ["Многостраничные сайты на Kewate.ru – комплексные решения для компаний, которым нужна обширная онлайн-платформа. Полностью адаптивные, SEO-оптимизированные сайты с функциональностью для бизнеса любой сложности.","многостраничные сайты, корпоративные сайты, купить многостраничный сайт, разработка многостраничных сайтов"],
        "store" : ["Интернет-магазины на Kewate.ru – идеальные решения для электронной коммерции. Платежные системы, удобная навигация, адаптивный дизайн и готовность к масштабированию помогут быстро начать онлайн-продажи","интернет-магазин, купить интернет-магазин, готовый магазин, интернет-торговля, сайт для интернет-магазина"]
    }

</script>

<svelte:window bind:innerWidth={innerWidth}/>
<ApplicationModalWindow bind:showModal bg={websiteInfo.images[1]} page={pageName}/>

<svelte:head>
    <title>{websiteInfo.pageTitle}</title>
    <meta name="keywords" content="{metaTeg[pageName][1]}">
    <meta name="description" content="На Kewate.ru представлены готовые решения для бизнеса – от лендингов до интернет-магазинов. Запустите проект легко и быстро. {metaTeg[pageName][0]}">
</svelte:head>


<main class="main_content">
    <WelcomeBlock images={websiteInfo.images} page={pageName} taglineDesc={websiteInfo.taglineDesc} on:modalOpen={()=>{showModal=true}}/>
    <section class="facts dark-background">
        <div class="facts_content">
            <div class="about_company">
                <h1 class="display3 total_black">Факты, которые говорят сами за себя</h1>
            </div>
            <div class="more_details">
                <div class="more_details_info">
                    <p class="main_sm_16 total_blac gray">Наша амбиция — создать передовой, удобный и продающий продукт для нашего клиента. Мы помогаем компаниям развивать цифровые продукты, делая их простыми для понимания.</p>
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
                        <th class="main_sm_16 gray first_th">ФАКТ</th>
                        <th class="empty"></th>
                        <th class="main_sm_16 gray">ПОКАЗАТЕЛЬ</th>
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
        <h1 class="display3 total_black">Методы работы</h1>
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

        <!-- <div class="responsibility">
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
        </div> -->

    </section>
    <WebsiteBlock {websiteInfo}  on:modalOpen={()=>{showModal=true}}/>
    <TeamBlock {team}/>
    <ProjectsBlock {projects} />
    <section class="swiper_section dark-background" >
        <SwiperReviews/>
    </section>
    <section class="tabs">
        <div class="tabs_title">
            <h3 class="display3 total_black">Частые вопросы</h3>
        </div>
        <div class="tabs_block">
            {#each tabs as tab, index}
                <div class="tab">
                    <button class="main_sm_16 total_black" on:click={()=>{tabOpen(index+1)}}>{tab.name}<div class="cross" class:tab_open={tabSelected == index+1}></div></button>
                    {#if tabSelected==index+1}
                        <div class="tab_content main_sm_16 total_black" transition:slide>
                            {tab.content}
                        </div>
                    {/if}
                </div>
            {/each}
            
        
        </div>
    </section>
    <ApplicationBlock utm={data.utm}/>
</main>


<style lang="less">
    :global(body){
        background: #F5F5F5;
    }
    .op50{
        opacity: 0.5;
    }
    .gray{
        color: var(--Neutral_400);
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
        font-weight: 600;
    }
    .responsibility_block:not(:first-child) h2{
        font-weight: 500;
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