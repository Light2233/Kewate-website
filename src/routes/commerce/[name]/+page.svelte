<script lang="ts">
    import Countup from "svelte-countup"
    import {fade,slide,fly} from "svelte/transition"
    import { inview } from 'svelte-inview'
    import type { PageData } from './$types';
    import { serviceVerboseMap, priceFormat } from "$lib/client/formarters";


        
    import nikolayBig from "$lib/assets/command/nikolay.webp"
    import daniil from "$lib/assets/command/daniil.jfif"
    import andey from "$lib/assets/command/andrey.webp"
    import nikita from "$lib/assets/command/nikita.jfif"
    import maxim from "$lib/assets/command/maxim.webp"


    
    import ApplicationModalWindow from "../../(main)/ApplicationModalWindow.svelte";
    import LandingGrid from "$lib/client/components/LandingGrid.svelte"
    import ProjectsBlock from "$lib/client/components/ProjectsBlock.svelte";
    import TeamBlock from "$lib/client/components/TeamBlock.svelte";
    import ApplicationBlock from "$lib/client/components/ApplicationBlock.svelte";

    export let data: PageData;

    let commerceOffer = data.commercialOffer;

    let innerWidth : number;
    let showModal : boolean = false;


    // Тригерры при скролле
    let isInView = false;
    let isInView3 = false;
    let isInView5 = false
    let isInView2= false


    var projects: Project[] = [
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

    var team : TeamMember[] = [
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
    $: console.log(commerceOffer?.task)

</script>

<svelte:window bind:innerWidth={innerWidth}/>
<!-- <ApplicationModalWindow bind:showModal bg={websiteInfo.images[1]} page={pageName} utm={data.utm}/> -->

<!-- <svelte:head>
    <title>{websiteInfo.pageTitle}</title>
    <meta name="keywords" content="{metaTeg[pageName][1]}">
    <meta name="description" content="На Kewate.ru представлены готовые решения для бизнеса – от лендингов до интернет-магазинов. Запустите проект легко и быстро. {metaTeg[pageName][0]}">
</svelte:head> -->


<main class="main_content">
    <section class="tagline trans-background"
        use:inview={ inviewOptions }
        on:inview_change={({ detail }) => {
            isInView = detail.inView;
        }}    
    >   

        <div  class="image-bg1">
        </div>
        <div class="tagline_info_bottom">
            <div class="welcome_img">.
                <div class="img_block">
                    <!-- <img src="" alt=""> -->
                </div>
                
                <h2 class="header2">Николай Ковальчук</h2>
                <p class="main_sm_16">CEO Kewate, ответственный за коммуникацию</p>
            </div>
            <h2 class="display2">— Здравствуйте, {commerceOffer?.clientName}!</h2>
        </div>
        <aside class="tagline_map">
            <p class="main_sm_16">Это Ваше персональное коммерческое предложение от студии Kewate</p>
        </aside>
        
    </section>
    <section class="about_task dark-background">
        <h3 class="display3 total_black">Подробнее о задаче</h3>
        <div class="about_task_grid">
            <div class="task_block">
                <h2 class="header2 total_black">Боль</h2>
                <p class="main_sm_16 gray">{commerceOffer?.task?.problem}</p>
            </div>
            <div class="task_block">
                <h2 class="header2 total_black">Задача</h2>
                <p class="main_sm_16 gray">{commerceOffer?.task?.["solution"]}</p>
            </div>
            <div class="task_block">
                <div class="task_mini">
                    <p class="main_sm_16 total_black">Тип проекта</p>
                    <p class="main_sm_16 gray">{serviceVerboseMap.get(commerceOffer?.service)}</p>
                </div>
                <div class="task_mini">
                    <p class="main_sm_16 total_black">Сфера проекта</p>
                    <p class="main_sm_16 gray">{commerceOffer?.task["scope"]}</p>
                </div>
                <div class="task_mini">
                    <p class="main_sm_16 total_black">Срок разработки</p>
                <p class="main_sm_16 gray">{commerceOffer?.task?.term}</p>
                </div>
                
            </div>
        </div>
    </section>
    <TeamBlock {team}/>
    <section class="client_problems light-background">
        <div class="client_problem_content">
            <div class="client_problems_title">
                <h3 class="display3 total_black">Мы уже работали с промышленной сферой</h3>
                <p class="main_sm_16 gray">Большинство пользователей испытывают проблемы с:</p>
            </div>
            <div class="problems_grid">
                <!-- Тут надо ичить -->

                {#each commerceOffer?.userProblems as problem}
                    <div class="problem">
                        <h2 class="header2 total_black">{problem?.percent}</h2>
                        <div class="problem_info">
                            <div class="problem_name">
                                <h2 class="header2 total_black">{problem?.name}</h2>
                                <p class="main_sm_16 gray">{problem?.desc}</p>
                            </div>
                            <div class="solution">
                                <p class="main_sm_16 gray" style="font-weight: 600;">Возможные решения: </p>
                                <p class="gray main_sm_16" style="text-align: start;">
                                    {problem?.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
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
                    <p class="main_sm_16 gray">{serviceVerboseMap.get(commerceOffer?.service)} будет готов через {commerceOffer?.task?.term}</p>
                </div>
            </div>
            <LandingGrid />
        
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
                isInView2 = true;
            }}>
                {#key isInView2}
                    <table>
                        <thead  in:fade={{duration: 750,delay:0}} >
                            <th class="main_sm_16 gray first_th">ФАКТ</th>
                            <th class="empty"></th>
                            <th class="main_sm_16 gray">ПОКАЗАТЕЛЬ</th>
                        </thead>
                        <tbody >
                            <tr>
                                <td class="main_sm_16 total_black" in:fade={{duration: 750,delay:0}} >За всё время работы принесли прибыли клиентам</td>
                                <td class="empty"></td>
                                <td class="display1 total_black"  in:fly={{duration: 750,x:100,delay:500}}>
                                    <Countup value={80} duration={1500} initial={0}/>
                                    млн ₽</td>
                            </tr>
                            <tr>
                                <td class="main_sm_16 total_black" in:fade={{duration: 750,delay:500}} >Успешно создаём цифровые продукты</td>
                                <td class="empty"></td>
                                <td class="display1 total_black"  in:fly={{duration: 750,x:100,delay:1000}}> &#707; <Countup value={4} duration={1500} initial={0}/> лет </td>
                            </tr>
                            <tr>
                                <td class="main_sm_16 total_black" in:fade={{duration: 750,delay:1000}} >Реализовали проектов</td>
                                <td class="empty"></td>
                                <td class="display1 total_black" in:fly={{duration: 750,x:100,delay:1500}}><Countup value={100} duration={2000} initial={0}/>+</td>
                            </tr>
                        </tbody>
                    </table>
                {/key}
            </div>
        </div>
    </section>
    <ProjectsBlock {projects} />
    <section class="about_task getting dark-background">
        <h3 class="display3 total_black">Резюмируем: что вы получите</h3>
        <div class="about_task_grid getting">
            {#each commerceOffer?.clientGettings as block}
                <div class="task_block getting_tabs_block ">
                    <h2 class="header2 total_black">{block?.name}</h2>
                    <p class="main_sm_16 gray">{block?.desc}</p>
                </div>
            {/each}
        </div>
    </section>
    <section class="price_block">
        <h3 class="display3 total_black title">Расчёт стоимости</h3>
        <p class="main_sm_16 gray">Стоимость разработки под ключ без переплат</p>
        <div class="calculated_price">
            <h2 class="header2">Итоговые цифры</h2>
            <div class="price">
                <div class="">
                    <h3 class="header3">Стоимость работы:</h3>
                    <h1 class="display1">{priceFormat(commerceOffer?.task?.price)}</h1>
                </div>
                <div class="line"></div>
                <div class="">
                    <h3 class="header3">Срок разработки:</h3>
                    <h1 class="display1">{commerceOffer?.task?.term}</h1>
                </div>
            </div>
        </div>
        <div class="too_much">
            <h3 class="header3 total_black">Не устраивает цена? Найдем решение!</h3>
            <button class="main_btn_black" style="margin-left: 0;">Написать в Telegram</button>
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

    .image-bg1m{
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
    .img_block{
        width: 180px;
        height: 180px;
        border-radius: 50rem;
        overflow: hidden;
        margin-bottom: 14px;
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
        height: 100%;
        justify-content: end;
        padding-bottom: 100px;
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
    .welcome_img{
        display: flex;
        flex-direction: column;
        row-gap:6px;
    }


    /* Task block */

    .about_task{
        max-width: 1280px;
        margin: 0 auto;
        padding: 120px 50px 50px 50px;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
    }
    .about_task_grid{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 20px;
    }
    .task_block:not(:last-child){
        height: 277px;
        background: #FFFFFF;
        border-radius: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .about_task_grid .task_block:last-child{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .task_mini{
        background: #FFFFFF;
        border-radius: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 6px;
    }
    .getting_tabs_block {
        height: 330px !important;
        background: #FFFFFF;
        border-radius: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Problem block */

    .client_problems{
        background: #FFFFFF;
        margin-top: 50px;
    }
    .client_problem_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
    }
    .client_problems_title{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        max-width: 60%;
    }
    .problems_grid{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(2,1fr);
        gap: 20px;
    }
    .problem{
        background: #FAFAFA;
        border-radius: 24px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        min-height: 500px;
        justify-content: space-between;
    }
    .problem_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 54.35%;
    }
    .solution {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
    }
    .solution p:first-child{
        line-height: 17.6px;
    }
    .problem_name{
        display: flex;
        flex-direction: column;
        row-gap: 4px;
    }
    .problem:first-child{
        grid-row: 1/1;
        grid-column: 1/1;
    }
    .problem:nth-child(2){
        grid-row: 1/1;
        grid-column: 2/2;
    }
    .problem:nth-child(3){
        grid-row: 2/2;
        grid-column: 2/2;
    }
    .problem:nth-child(4){
        grid-row: 2/2;
        grid-column: 3/3;
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
        justify-content: end;
        cursor: pointer;
        @media (max-width:800px){
            justify-content: start;
        } 
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

    /* Price block */

    .price_block{
        max-width: 1280px;
        margin: 0 auto;
        padding: 150px 50px 100px 50px;
    }
    .calculated_price{
        background: #0A0A0A;
        border-radius: 16px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 40px;
        height: 277px;
    }
    .price{
        display: flex;
        align-items: center;
        max-height: 98px;
        
    }
    .price div:not(.line){
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 18px;
    }
    .price_block .title{
        margin-bottom: 10px;
    }
    .too_much{
        margin-top: 20px;
        border-radius: 16px;
        border: 1px solid #D4D4D4;
        padding: 16px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .line{
        height: 100%;
        width: 1px;
        background: #FFFFFF;
        opacity: 0.5;
        margin: 0 40px;
    }

</style>