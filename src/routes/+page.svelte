<script lang="ts">
    import tagline_bg from "$lib/assets/tagline_bg.png"
    import tagline_laptop from "$lib/assets/tagline_laptop.png"
    import arrow_circle_right from "$lib/assets/arrow_circle_right.svg"
    import arrow_right from "$lib/assets/arrow_right.svg"
    import k from "$lib/assets/k.svg"
    import check_mark from "$lib/assets/check_mark.svg"

    import { priceFormat } from "$lib/client/formarters"
    import {fade,slide,fly} from "svelte/transition"
    import { quintOut } from 'svelte/easing';

    import Swiper from "./Swiper.svelte"

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


    import { inview } from 'svelte-inview';

    let isInView1 = false;
    let isInView2 = false;
    let isInView3 = false;
    let isInView4 = false
    let isInView5 = false
    let isInView6 = false
    let isInView7 = false
    let isInView8 = false
    let isInView9 = false
</script>

<div class="main_content">
    <section class="tagline"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView4 = detail.inView;
    }}
    style="background: url({tagline_bg});background-size:cover;"
    >
        {#key isInView4}
            <p class="display2 white" in:fly={{duration: 750,y:100}} class:hidden={!isInView4}>Удобство для пользователей — прибыль для бизнеса</p>
        {/key}
        <div class="tagline_map">
            <p class="main_sm_16">Улучшаем пользовательский опыт для продуктов по всему миру</p>
            <div class="map_links">
                <a class="map_link main_sm_16" href="#">Интернет-магазины</a>
                <a class="map_link main_sm_16" href="#">Лендинги</a>
                <a class="map_link main_sm_16" href="#">UI/UX дизайн</a>
            </div>
        </div>
    </section>
    <section class="business_objectives">
        <h3 class="display3 black">Решаем задачи бизнеса</h3>
        <div class="objectives">
            <div class="object">
                <div class="object_info">
                    <h2 class="header2">Разработка сайтов</h2>
                    <p class="main_sm_16">Для бизнеса, мероприятий и рекламы</p>
                </div>
            </div>
            <div class="object">
                <div class="object_info">
                    <h2 class="header2">Разработка сайтов</h2>
                    <p class="main_sm_16">Для бизнеса, мероприятий и рекламы</p>
                </div>
            </div>
            <div class="object">
                <div class="object_info">
                    <h2 class="header2">Разработка сайтов</h2>
                    <p class="main_sm_16">Для бизнеса, мероприятий и рекламы</p>
                </div>
            </div>
        </div>
    </section>
    <section class="facts">
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
        <div class="achievements" 
        use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
        on:change={({ detail }) => {
            isInView5 = detail.inView;
        }}>
            {#key isInView5}
            <table>
                <thead  in:fade={{duration: 750,delay:0}} class:hidden={!isInView5}>
                    <th class="main_sm2 whiteop first_th">ФАКТ</th>
                    <th class="empty"></th>
                    <th class="main_sm2 whiteop">ПОКАЗАТЕЛЬ</th>
                </thead>
                <tbody class:hidden={!isInView5}>
                    <tr>
                        <td class="main_sm white" in:fade={{duration: 750,delay:0}} class:hidden={!isInView5}>За всё время работы принесли прибыли клиентам</td>
                        <td class="empty"></td>
                        <td class="big" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:500}}>80 млн ₽</td>
                    </tr>
                    <tr>
                        <td class="main_sm white" in:fade={{duration: 750,delay:500}} class:hidden={!isInView5}>Успешно создаём цифровые продукты</td>
                        <td class="empty"></td>
                        <td class="big" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1000}}> &#707;3 лет </td>
                    </tr>
                    <tr>
                        <td class="main_sm white" in:fade={{duration: 750,delay:1000}} class:hidden={!isInView5}>Реализовали проектов</td>
                        <td class="empty"></td>
                        <td class="big" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1500}}>100+</td>
                    </tr>
                </tbody>
            </table>
            {/key}
        </div>
    </section>
    <section class="section_pd projects" 
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView1 = detail.inView;
    }}>
        {#key isInView1}
            <p class="header2" in:fly={{duration: 750,x:100,delay:0}} class:hidden={!isInView1}>Реализовали 100+ проектов</p>
            <div class="project_selected" in:fade={{duration: 750,delay:500}} class:hidden={!isInView1}>
                <p class="header3 white" class:hidden={!isInView1}>Название проекта</p>
            </div>
        {/key}
        
            <div class="modile_apps"
            use:inview={{ unobserveOnEnter: true, rootMargin: '-40%' }}
            on:change={({ detail }) => {
                isInView2 = detail.inView;
            }}
            >
                {#key isInView2}
                <div class="app" in:fly={{duration: 750,y:100,delay:0}} class:hidden={!isInView2}>
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
                <div class="app" in:fly={{duration: 750,y:100,delay:300}} class:hidden={!isInView2}>
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
                <div class="app" in:fly={{duration: 750,y:100,delay:600}}  class:hidden={!isInView2}>
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
                {/key}
            </div>
       
            <div class="projects_grid"
            use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
            on:change={({ detail }) => {
                isInView3 = detail.inView;
            }}
            >
                {#each projects as project, id(project.id)}
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                     {#key isInView3}
                    <div class="project" in:fade={{duration: 750,delay:300+300*id}} on:mouseenter={()=>{projectImage = k;projectSelected = project.id}} on:mouseleave={()=>{projectImage = arrow_right;projectSelected = 0}} class:hidden={!isInView3}>
                        <div class="project_info">
                            <p class="header3 project_name">Разработка сайта для DA&BR</p>
                            <p class="main_sm2 gray">Повысили продажи на 120 %</p>
                        </div>
                        {#if projectSelected == project.id}
                            <div class="project_img" in:slide={{duration:500}}>

                            </div>
                        {/if}
                        <div class="">
                            {#key projectImage && projectSelected == project.id}
                                <img src="{ projectSelected == project.id ? projectImage : arrow_right }" alt="" in:fade>
                            {/key}
                        </div>
                        
                    </div>
                    {/key}
                {/each}
                
            </div>
        
    </section>
    <section class="development_stages">
        <div class="stages_title">
            <p class="main_sm2 whiteop">ЭТАПЫ РАЗРАБОТКИ САЙТА</p>
            <p class="header2">Уделяем внимание срокам разработки</p>
        </div>
        <div class="graph_div" use:inview={{ unobserveOnEnter: true, rootMargin: '-40%' }}
        on:change={({ detail }) => {
            isInView6 = detail.inView;
        }}>
            {#key isInView6}
            <div class="first_stage stage">
                <div class="graph" in:fade={{duration:750}} class:hidden={!isInView6}>
                    <div class="time">
                        <p class="main_sm2 gray">1 НЕДЕЛЯ</p>
                    </div>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Исследование продукта</p>
                        <p class="main_sm2 gray">Включение в разработку, планирование работ</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress_bar_head main_sm_medium white" in:fly={{duration:750}} class:hidden={!isInView6}>
                        10%
                    </div>
                    <div class="status_div">
                        <hr class="border03">
                        <div class="status" in:fly={{duration:750,y:20,delay:500}} class:hidden={!isInView6}><p class="main_sm2" >Обсуждение работ</p></div>
                        
                    </div>
                </div>
                <div class="graph intermediate" in:fade={{duration:750,delay:750}} class:hidden={!isInView6}>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Разработка дизайна</p>
                        <p class="main_sm2 gray">Утверждение концепции, подбор визуального стиля, разработка готового результата</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress30 progress_bar_head main_sm_medium white" in:fly={{duration:750,delay:1000}} class:hidden={!isInView6}>
                        30%
                    </div>
                    <div class="status_div">
                        <hr class="border03">
                        <div class="status" in:fly={{duration:750,y:20,delay:1000}} class:hidden={!isInView6}><p class="main_sm2">Утверждение дизайна</p></div>
                        
                    </div>
                </div>
            </div>
            {/key}
            <div class="second_stage stage"
            use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
            on:change={({ detail }) => {
                isInView7 = detail.inView;
            }}
            >
                {#key isInView7}
                <div class="graph" in:fade={{duration:750,delay:1500}} class:hidden={!isInView7}>
                    <div class="time">
                        <p class="main_sm2 gray">2 НЕДЕЛЯ</p>
                    </div>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Разработка технической части</p>
                        <p class="main_sm2 gray">Перенос дизайна в код, оптимизация сайта и настройка продвижения</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress_bar_head main_sm_medium white" in:fly={{duration:750}} class:hidden={!isInView7}>
                        30%
                    </div>
                    <div class="status_div status_center">
                        <hr class="border03">
                        <div class="status" in:fly={{duration:750,y:20,delay:1500}} class:hidden={!isInView7} ><p class="main_sm2">Утверждение вёрстки</p></div>
                        
                    </div>
                </div>
                <div class="graph intermediate" in:fade={{duration:750,delay:2000}} class:hidden={!isInView7}>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Контрольное тестирование</p>
                        <p class="main_sm2 gray">Проверка соответствия итоговой версии с макетом, поиск багов и недоработок</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress15 main_sm_medium white" in:fly={{duration:750}} class:hidden={!isInView7}>
                        15%
                    </div>
                    <div class="status_div">
                    </div>
                </div>
                <div class="graph intermediate" in:fade={{duration:750,delay:2500}} class:hidden={!isInView7}>
                    <div class="step"> 
                        <p class="step_title main_sm_medium">Исправление ошибок</p>
                        <p class="main_sm2 gray">Исправляем все найденные ошибки и доводим сайт до идеала</p>
                        <hr class="border02">
                    </div>
                    <div class="progress_bar progress15 main_sm_medium white progress_end" in:fly={{duration:750}} class:hidden={!isInView7}>
                        15%
                    </div>
                    <div class="status_div">
                        <hr class="border03">
                        <div class="status" in:fly={{duration:750,y:20,delay:2500}} class:hidden={!isInView7}><p class="main_sm2">Сдача проекта</p></div>
                        
                    </div>
                </div>
                {/key}
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
    <section class="section_pd you_get"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-30%' }}
    on:change={({ detail }) => {
        isInView8 = detail.inView;
    }}
    >   
        {#key isInView8}
        <p class="header2" in:fly={{duration: 750,x:100}} class:hidden={!isInView8}>Резюмируем: в итоге, вы получаете</p>
        {/key}
        {#key isInView8}
            <div class="standard" >
                <div class="standard_item" in:fly={{duration: 750,y:100,delay:500}} class:hidden={!isInView8}>
                    <p class="header3">Сайт на Javascript с адаптацией под все устройства</p>
                    <p class="main_sm2 gray">Разработаем сайт так, чтобы он красиво выглядел как на компьютерах, так и на телефонах и планшетах</p>
                </div>
                <div class="standard_item" in:fly={{duration: 750,y:100,delay:1000}} class:hidden={!isInView8}>
                    <p class="header3">Настроенную SEO оптимизацию и доступ к рекламному кабинету</p>
                    <p class="main_sm2 gray">Мы всё настроим и покажем вам, как пользоваться рекламным кабинетом для продвижения сайта</p>
                </div>
                <div class="standard_item" in:fly={{duration: 750,y:100,delay:1500}} class:hidden={!isInView8}>
                    <p class="header3">Возможность отредактировать сайт в любое время</p>
                    <p class="main_sm2 gray">За небольшую доплату отредактируем любой раздел сайта. Если требуются регулярные изменения — есть ежемесячная подписка</p>
                </div>
            </div>
        {/key}
    </section>
    <section class="websites section_pd"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView9 = detail.inView;
    }}
    >   
        {#key isInView9}
        <p class="header2 white" in:fly={{duration:750,x:100}} class:hidden={!isInView9}>
            Выберите сайт под разные нужды
            <span class="title_promotion main_sm2 white" in:fade={{duration:750,delay:1500}} class:hidden={!isInView9}>
                🔥 Получи скидку 5% за отзыв
            </span>
        </p>
        {/key}
        <div class="websites_table">
            {#each websites as website,index}
                {#key isInView9}
                <div class="website" class:hidden={!isInView9} in:fly={{duration:750,x:100,delay:400+400*index}}>
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
                {/key}
            {/each}
            
            
        </div>
    </section>
    <section class="swiper_section">
        
        <Swiper/>
    </section>
</div>

<style lang="less">

    .hidden{
        visibility: hidden;
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
    .tagline{
        z-index: 2;
        padding: 68px 50px 48px 50px;
        position: relative;
        top: -68px;
        height: 50rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width:800px) {
            padding: 24px 16px;
            max-height: 570px;
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
    }
    .map_links{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        align-items: end;
    }
    .map_link{
        background: #00000066;
        backdrop-filter: blur(10px);
        padding: 16px;

        width: fit-content;
        border-radius: 24px;

    }

    /* business_objectives */

    .business_objectives{
        padding: 50px;
    }
    .objectives{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
        margin-top: 40px;
    }
    .object{
        background: var(--Neutral_900);
        border-radius: 16px;
        padding: 20px;
        display: flex;
        align-items: end;
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
    }

    /* Facts (Second section) */

    .facts{
        background: var(--Neutral_900);
        border-radius: 32px;
        overflow: hidden;
        padding: 72px 50px;
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
        column-gap: 100px;
        z-index: 2;
        position: relative;
        @media (max-width:800px) {
            flex-direction: column;
            row-gap: 20px;
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
        width: 60px;
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
    }
    .big{
        font-family: 'Manrope';
        font-size: 128px;
        font-weight: 600;
        line-height: 98px;
        color: white;
        @media (max-width:1080px){
            font-size: 80px;
        }
        @media (max-width:800px) {
            font-size: 64px;
            font-weight: 600;
            line-height: 80px;
        }
    }

    /* Projects (Therd section) */

    .section_pd{
        padding: 0 50px;
        @media (max-width:1000px) {
            padding: 0 16px;
        }
    }
    .projects{
        margin-top: 172px;
        margin-bottom: 160px;
        @media (max-width:800px) {
            margin-top: 64px;
            margin-bottom: 64px;
        }
    }
    .projects_grid{
        @media (max-width:900px) {
            display: none;
        }
    }
    .project_selected{
        margin-top: 40px;
        background: var(--dark);
        border-radius: 24px;
        padding: 40px;
        height: 560px;
        display: flex;
        align-items: end;
        @media (max-width:500px) {
            padding: 20px;
        }
    }
    .modile_apps{
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        margin-bottom: 80px;
        @media (max-width:900px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 40px;
        }
    }
    .app{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        @media (max-width:900px) {
            max-width: 300px;
        }
    }
    .img_box{
        height: 380px;
        border-radius: 24px;
        @media (max-width:900px) {
            height: 300px;
        }
    }
    .app_info {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
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

    /* Fourth section */
    
    .development_stages {
        background: white;
        border-radius: 32px;
        padding: 72px 50px;
        @media (max-width:900px) {
            display: none;
        }

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
        @media (max-width:1180px) {
            padding: 72px 0px;
        }
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
        margin-left: 95px;
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
        @media (max-width:800px) {
            padding-top: 0px;;
        }
    }
    .you_get .header2 {
        max-width: 50%;
        @media (max-width:800px) {
            max-width: 75%;
        }
        @media (max-width:500px) {
            max-width: 100%;
        }
    }
    .standard{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        margin-top: 40px;
        @media (max-width:900px) {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }
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
        @media (max-width:500px) {
            width: 100%;
        }
    }

    /* Sixth section */

    .websites .header2{
        max-width: 50%;
        position: relative;
        @media (max-width:900px) {
            max-width: 70%;
        }
        @media (max-width:700px) {
            max-width: 100%;
        }
    }
    .websites{
        background: var(--dark);
        border-radius: 32px;
        padding: 40px 50px;
        @media (max-width:800px) {
            padding: 40px 16px;
        }
    }
    .oldprice{
        font-family: 'Manrope';
        font-size: 14px;
        font-weight: 450;
        line-height: 17.5px;
    }
    .websites_table{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        margin-top: 40px;
        @media (max-width:1080px){
            grid-template-columns: 1fr;
            row-gap: 40px;
        }
    }
    .website{
        background: white;
        border-radius: 24px;
        padding: 20px;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        max-height: 480px;
        @media (max-width:1180px) {
            max-height: fit-content;
            height: unset;
            row-gap: 30px;
        }
        @media (max-width:500px){
            min-height: 445px;
            height: 100%;
            max-height: unset;
        }
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
        @media (max-width:1080px){
            flex-direction: column;
            align-items: baseline;
            row-gap: 20px;
        }
    }
    .price_div button{
        font-family: 'Manrope';
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
    .price_div button:hover{
        background: rgba(41, 45, 50, 0.8);
    }
    .price_div button:active{
        background: rgba(41, 45, 50, 0.6);
    }
    .price{
        width: fit-content;
        display: flex;
        align-items: end;
        column-gap: 4px;
        text-wrap: nowrap;
        @media (max-width:1180px) {
            flex-direction: column;
            align-items: baseline;
        }
        @media (max-width:1080px){
            flex-direction: row;
        }
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
        @media (max-width:1240px) {
            flex-direction: column;
        }
        @media (max-width:1080px){
            flex-direction: row;
            justify-content: baseline;
            align-items: baseline;
        }
        @media (max-width:500px){
            display: none;
        }
    }
    .promotion .gray{
        font-family: 'Manrope';
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
        right: -95px;
        backdrop-filter: blur(10px);
        @media (max-width:900px) {
            display: none;
        }
    }

    /* Swiper section */

    .swiper_section{
        padding: 160px 50px;
        @media (max-width:500px){
            padding: 64px 16px;
        }
    }
</style>