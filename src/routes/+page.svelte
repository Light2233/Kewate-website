<script lang="ts">
    import about_bg from "$lib/assets/about_bg.png"
    import arrow_circle_right from "$lib/assets/arrow_circle_right.svg"
    import arrow_right from "$lib/assets/arrow_right.svg"
    import k from "$lib/assets/k.svg"
    import check_mark from "$lib/assets/check_mark.svg"

    import { priceFormat } from "$lib/client/formarters"

    import {fade,slide} from "svelte/transition"

    let projects = [
        {
            id:1,
            name: "Разработка сайта для DA&BR",
            impuct: "Повысили продажи на 120 %",
        },
        {
            id:2,
            name: "Разработка сайта для DA&BR",
            impuct: "Повысили продажи на 120 %",
        },
        {
            id:3,
            name: "Разработка сайта для DA&BR",
            impuct: "Повысили продажи на 120 %",
        },
        {
            id:4,
            name: "Разработка сайта для DA&BR",
            impuct: "Повысили продажи на 120 %",
        },        
    ]

    let websites = [
        {
            name:"Одностраничный сайт",
            desc:"Подойдёт для бизнеса, мероприятий и рекламы",
            functions:[
                {
                    name:"Разработка за 2 недели"
                },
                {
                    name:"Консультация со специалистами"
                },
                {
                    name:"Настройка SEO-оптимизации"
                },
                {
                    name:"Адаптация под все устройства"
                }
            ],
            price:50000,
            oldprice:55350,
        },
        {
            name:"Многостраничный сайт",
            desc:"Для крупных компаний, информационных ресурсов, различных агентств",
            functions:[
                {
                    name:"Разработка за 3 недели"
                },
                {
                    name:"Консультация со специалистами"
                },
                {
                    name:"Настройка SEO-оптимизации"
                },
                {
                    name:"Адаптация под все устройства"
                }
            ],
            price:undefined,
            oldprice:60000
        },
        {
            name:"Интернет-магазин",
            desc:"Даст толчок для развития бизнеса, автоматизирует работу и повысит продажи",
            functions:[
                {
                    name:"Разработка за 1 месяц"
                },
                {
                    name:"Консультация со специалистами"
                },
                {
                    name:"Настройка SEO-оптимизации"
                },
                {
                    name:"Адаптация под все устройства"
                },
                {
                    name:"Платформа для управления магазином"
                }
            ],
            price:100000,
            oldprice:120000,
        }
    ]

    let projectImage =  arrow_right;
    let projectSelected = 0;
</script>

<div class="main_content">
    <section class="tagline">
        <p class="header1 white">Создаём сайты, которые работают на ваш успех</p>
    </section>
    
    <section class="facts">
        <img class="about_bg" src="{ about_bg }" alt="">
        <div class="about_company">
            <p class="main_sm2 whiteop">О КОМПАНИИ</p>
            <p class="header2 white">Факты, которые говорят сами за себя</p>
        </div>
        <div class="more_details">
            <div class="more_details_link">
                <a href="#" class="white">Подробнее о студии<img src="{ arrow_circle_right }" alt=""></a>
            </div>
            <div class="more_details_info">
                <p class="main_sm2 whiteop">Наша амбиция — создать передовой, удобный и продающий продукт для нашего клиента. Мы помогаем компаниям развивать цифровые продукты, делая их простыми для понимания.    </p>
            </div>
        </div>
        <div class="achievements">
            <table>
                <thead>
                    <th class="main_sm2 whiteop first_th">ФАКТ</th>
                    <th></th>
                    <th class="main_sm2 whiteop">ПОКАЗАТЕЛЬ</th>
                </thead>
                <tbody>
                    <tr>
                        <td class="main_sm white">За всё время работы принесли прибыли клиентам</td>
                        <td></td>
                        <td class="big">80 млн ₽</td>
                    </tr>
                    <tr>
                        <td class="main_sm white">Успешно создаём цифровые продукты</td>
                        <td></td>
                        <td class="big"> &#707;3 лет </td>
                    </tr>
                    <tr>
                        <td class="main_sm white">Реализовали проектов</td>
                        <td></td>
                        <td class="big">100+</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <section class="section_pd projects">
        <p class="header2">Реализовали 100+ проектов</p>
        <div class="project_selected">
            <p class="header3 white">Название проекта</p>
        </div>
        <div class="modile_apps">
            <div class="app">
                <div class="img_box" style="background:#4F93E1">

                </div>
                <div class="app_info">
                    <div class="">
                        <p class="header3">Мобильное приложение</p>
                        <p class="header3">Manuspect</p>
                    </div>
                    <p class="main_sm2 gray">Повысили продажи на 120 %</p>
                </div>
            </div>
            <div class="app">
                <div class="img_box" style="background:#1FC977">

                </div>
                <div class="app_info">
                    <div class="">
                        <p class="header3">Мобильное приложение</p>
                        <p class="header3">Manuspect</p>
                    </div>
                    <p class="main_sm2 gray">Повысили продажи на 120 %</p>
                </div>
            </div>
            <div class="app">
                <div class="img_box" style="background:#4F93E1">

                </div>
                <div class="app_info">
                    <div class="">
                        <p class="header3">Мобильное приложение</p>
                        <p class="header3">Manuspect</p>
                    </div>
                    <p class="main_sm2 gray">Повысили продажи на 120 %</p>
                </div>
            </div>
        </div>
        <div class="projects_grid">
            {#each projects as project, id(project.id)}
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="project" on:mouseenter={()=>{projectImage = k;projectSelected = project.id}} on:mouseleave={()=>{projectImage = arrow_right;projectSelected = 0}}>
                    <div class="project_info">
                        <p class="header3 project_name">Разработка сайта для DA&BR</p>
                        <p class="main_sm2 gray">Повысили продажи на 120 %</p>
                    </div>
                    {#if projectSelected == project.id}
                        <div class="project_img" in:slide>

                        </div>
                    {/if}
                    <div class="">
                        {#key projectImage && projectSelected == project.id}
                            <img src="{ projectSelected == project.id ? projectImage : arrow_right }" alt="" in:fade>
                        {/key}
                    </div>
                    
                </div>
            {/each}
            
        </div>
    </section>
    <section class="development_stages">
        <div class="stages_title">
            <p class="main_sm2 whiteop">ЭТАПЫ РАЗРАБОТКИ САЙТА</p>
            <p class="header2">Уделяем внимание срокам разработки</p>
        </div>
        <div class="graph_div">
            <div class="first_stage stage">
                <div class="graph">
                    <div class="time">
                        <p class="main_sm2 gray">1 НЕДЕЛЯ</p>
                    </div>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Исследование продукта</p>
                        <p class="main_sm2 gray">Включение в разработку, планирование работ</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress_bar_head main_sm_medium white">
                        10%
                    </div>
                    <div class="status_div">
                        <hr class="border03">
                        <div class="status"><p class="main_sm2">Обсуждение работ</p></div>
                        
                    </div>
                </div>
                <div class="graph intermediate">
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Разработка дизайна</p>
                        <p class="main_sm2 gray">Утверждение концепции, подбор визуального стиля, разработка готового результата</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress30 progress_bar_head main_sm_medium white">
                        30%
                    </div>
                    <div class="status_div">
                        <hr class="border03">
                        <div class="status"><p class="main_sm2">Утверждение дизайна</p></div>
                        
                    </div>
                </div>
            </div>
            <div class="second_stage stage">
                <div class="graph">
                    <div class="time">
                        <p class="main_sm2 gray">2 НЕДЕЛЯ</p>
                    </div>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Разработка технической части</p>
                        <p class="main_sm2 gray">Перенос дизайна в код, оптимизация сайта и настройка продвижения</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress_bar_head main_sm_medium white">
                        30%
                    </div>
                    <div class="status_div status_center">
                        <hr class="border03">
                        <div class="status"><p class="main_sm2">Утверждение вёрстки</p></div>
                        
                    </div>
                </div>
                <div class="graph intermediate">
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Контрольное тестирование</p>
                        <p class="main_sm2 gray">Проверка соответствия итоговой версии с макетом, поиск багов и недоработок</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress15 main_sm_medium white">
                        15%
                    </div>
                    <div class="status_div">
                    </div>
                </div>
                <div class="graph intermediate">
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Исправление ошибок</p>
                        <p class="main_sm2 gray">Исправляем все найденные ошибки и доводим сайт до идеала</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress15 main_sm_medium white progress_end">
                        15%
                    </div>
                    <div class="status_div">
                        <hr class="border03">
                        <div class="status"><p class="main_sm2">Сдача проекта</p></div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="advantages">
            <div class="advantage">
                <p class="main_sm_medium">Всегда на связи</p>
                <p class="main_sm2 gray">Отвечаем в любое время суток в Телеграме или по телефону</p>
            </div>
            <div class="line"></div>
            <div class="advantage">
                <p class="main_sm_medium">Регулярно показываем результат</p>
                <p class="main_sm2 gray">Выходим на недельный спринт и показываем результат в конце недели</p>
            </div>
            <div class="line"></div>
            <div class="advantage">
                <p class="main_sm_medium">Прозрачная разработка</p>
                <p class="main_sm2 gray">Предоставляем доступ ко всем рабочим файлам и исследованиям</p>
            </div>
        </div>
    </section>
    <section class="section_pd you_get">
        <p class="header2">Резюмируем: в итоге, вы получаете</p>
        <div class="standard">
            <div class="standard_item">
                <p class="header3">Сайт на Javascript с адаптацией под все устройства</p>
                <p class="main_sm2 gray">Разработаем сайт так, чтобы он красиво выглядел как на компьютерах, так и на телефонах и планшетах</p>
            </div>
            <div class="standard_item">
                <p class="header3">Настроенную SEO оптимизацию и доступ к рекламному кабинету</p>
                <p class="main_sm2 gray">Мы всё настроим и покажем вам, как пользоваться рекламным кабинетом для продвижения сайта</p>
            </div>
            <div class="standard_item">
                <p class="header3">Возможность отредактировать сайт в любое время</p>
                <p class="main_sm2 gray">За небольшую доплату отредактируем любой раздел сайта. Если требуются регулярные изменения — есть ежемесячная подписка</p>
            </div>
        </div>
    </section>
    <section class="websites section_pd">
        <p class="header2 white">
            Выберите сайт под разные нужды
            <span class="title_promotion main_sm2 white">
                🔥 Получи скидку 5% за отзыв
            </span>
        </p>
        <div class="websites_table">
            {#each websites as website}
                <div class="website">
                    <div class="website_info">
                        <p class="header3">{ website.name }</p>
                        <p class="main_sm2 gray">{ website.desc }</p>
                        <div class="functions">
                            {#each website.functions as fun}
                                <div class="function main_sm2_bold">
                                    <img src="{ check_mark  }" alt="">
                                    { fun.name }
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="website_end_content">
                        <div class="promotion">
                            <p class="main_sm2_bold">🔥 Оплата частями</p>
                            <p class="gray">50 % до и 50% после</p>
                        </div>
                        <div class="price_div">
                            <div class="price">
                                <p class="header3">{website.name == "Многостраничный сайт" ? "от " : ""}{priceFormat(website.price ? website.price : website.oldprice)}</p>
                                {#if website.price}
                                    <p class="oldprice gray"><span></span>{priceFormat( website.oldprice) }</p>
                                {/if}
                            </div>
                            <button>Заказать</button>
                        </div>
                    </div>
                    
                </div>
            {/each}
            
        </div>
    </section>
</div>

<style lang="less">
    .main_content{
        max-width: 1280px;
        margin: 0 auto;
    }

    /* Tagline (First section) */
    .white{
        color: white;
    }
    .gray{
        color: var(--gray);
    }
    .whiteop{
        color: rgba(255, 255, 255, 0.5);
    }
    .tagline{
        background: var(--dark);
        border-radius: 32px;
        padding: 50px 64px;
        height: 50rem;
        max-height: 700px;
        display: flex;
        align-items: end;
    }
    .tagline p{
        max-width: 80%;
    }

    /* Facts (Second section) */

    .facts{
        background: var(--blue);
        border-radius: 32px;
        overflow: hidden;
        padding: 72px 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 72px;
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
    }
    .more_details{
        display: flex;
        column-gap: 100px;
        z-index: 2;
        position: relative;
    }
    .more_details_link a{
        display: flex;
        column-gap: 8px;
        width: 100%;
        align-items: center;
        font-family: "TT";
        font-size: 18px;
        font-weight: 500;
        line-height: 22.5px;   
        justify-content: space-between;
        cursor: pointer;
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
        width: 60px;
    }
    td{
        max-height: 90px;
        padding: 52px 0px;
        vertical-align: top;
    }
    .big{
        font-family: 'TT';
        font-size: 128px;
        font-weight: 600;
        line-height: 98px;
        color: white;
    }

    /* Projects (Therd section) */

    .section_pd{
        padding: 0 50px;
    }
    .projects{
        margin-top: 172px;
        margin-bottom: 160px;
    }
    .project_selected{
        margin-top: 40px;
        background: var(--dark);
        border-radius: 24px;
        padding: 40px;
        height: 560px;
        display: flex;
        align-items: end;
    }
    .modile_apps{
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        margin-bottom: 80px;
    }
    .app{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
    .img_box{
        height: 380px;
        border-radius: 24px;
    }
    .app_info {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
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

    /* Fourth section */
    
    .development_stages {
        background: white;
        border-radius: 32px;
        padding: 72px 50px;

    }
    .advantages{
        display: flex;
    }
    .advantage{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        padding: 20px 0px;
        max-width: 372px;
        width: 100%;
    }
    .line{
        content: "";
        background: rgba(0, 0, 0, 0.24);
        height: 100rem;
        max-height: 113px;
        width: 1px;
        margin: 0 16px;
    }
    .stages_title{
        width: 50%;
    }
    .stage{
        display: flex;
        flex-direction: column;
    }
    .graph{
        width: 100%;
        display: flex;
        align-items: end;
    }
    .graph_div{
        padding: 72px 100px;
    }
    .step{
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        justify-content: end;
    }
    .status{
        background: var(--green);
        padding: 8px 0px;
        border-radius: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        max-height: 36px;
        margin-left: 15px;
    }
    .status_div{
        width: 100%;
        max-width: 200px;
        display: flex;
        align-items: end;
        
    }
    .time{
        margin-right: 20px;
        width: fit-content;
        display: flex;
        flex-wrap: nowrap;
        text-wrap: nowrap;
        height: 100%;
    }
    .first_stage .time{
        max-height: 74px;
        height: 100%;
        height: 73px;
    }
    .border02 {
        height: 1px;
        background-image: linear-gradient(90deg, #00000024, #00000024 50%, transparent 50%, transparent 50%);
        background-size: 22px 1px;
        border: none;
        margin-top: 12px;
        background-position: -1%;
    }
    .border03 {
        height: 1px;
        width: 8px;
        background-image: linear-gradient(90deg, #00000024, #00000024 50%, transparent 50%, transparent 50%);
        background-size: 26px 1px;
        border: none;
        margin-top: 12px;
        background-position: 0;
    }
    .progress_bar{
        background: var(--blue);
        height: 100%;
        width: 100%;
        max-width: 80px;
        padding: 20px 23px;
        text-align: center;
    }
    .progress_bar_head{
        border-radius: 12px 12px 0px 0px;
        height: 100px;
    }
    .intermediate .step{
        margin-left: 80px;
    }
    .progress30{
        height: 300px;
        border-radius: 0;
        margin-top: 4px;
    }
    .step p{
        max-width: 380px;
    }
    
    .second_stage .progress_bar_head{
        height: 300px;
        margin-top: 4px;
        border-radius: 0px;
    }
    .second_stage .time{
        height: 93px;
    }
    .progress15{
        height: 142px;
        margin-top: 4px;
    }
    .status_center{
        position: relative;
        top: -150px;
    }
    .progress_end{
        border-radius: 0 0 12px 12px;
    }

    /* Fifth section */

    .you_get{
        padding-top: 160px;
        padding-bottom: 80px;
    }
    .you_get .header2 {
        max-width: 43%;
    }
    .standard{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        margin-top: 40px;
    }
    .standard_item{
        background: white;
        padding: 20px;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 24px;
        
    }
    .standard_item p{
        width: 90%;
    }

    /* Sixth section */

    .websites .header2{
        max-width: 40%;
        position: relative;
    }
    .websites{
        background: var(--dark);
        border-radius: 32px;
        padding: 40px 50px;
    }
    .oldprice{
        font-family: 'TT';
        font-size: 14px;
        font-weight: 450;
        line-height: 17.5px;
    }
    .websites_table{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        margin-top: 40px;
    }
    .website{
        background: white;
        border-radius: 24px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        max-height: 480px;
    }
    .website_info{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }
    .function img{
        width: 20px;
        height: 20px;
        
    }
    .functions{
        display: flex;
        flex-direction: column;
        row-gap: 14px;
        margin-top: 12px;
    }
    .function{
        display: flex;
        align-items: center;
        column-gap: 8px;
        
    }
    .price_div{
        display: flex;
        align-items: center;
        column-gap: 20px;
    }
    .price_div button{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.86px;
        color: white;
        padding: 12px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--dark);
        border-radius: 16px;
        cursor: pointer;
    }
    .price{
        width: fit-content;
        display: flex;
        align-items: end;
        column-gap: 4px;
        text-wrap: nowrap;
    }
    .oldprice{
        position: relative;
    }
    .oldprice span{
        content: "";
        width: 100%;
        height: 1px;
        background: var(--gray);
        position: absolute;
        bottom: 8px;
    }
    .promotion{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #EDF7F5;
        padding: 12px;
        border-radius: 16px;
        margin-bottom: 12px;
    }
    .promotion .gray{
        font-family: 'TT light';
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.01em;
    }
    .title_promotion{
        background: #FFFFFF1F;
        padding: 8px 12px;
        border-radius: 24px;
        position: absolute;
        top: 0;
        right: -105px;
        backdrop-filter: blur(10px);
    }
</style>