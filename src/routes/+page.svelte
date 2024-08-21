<script lang="ts">
    import tagline_bg from "$lib/assets/tagline_bg.png"
    import tagline_laptop from "$lib/assets/tagline_laptop.png"
    import arrow_circle_right from "$lib/assets/arrow_circle_right.svg"
    import arrow_right from "$lib/assets/arrow_right.svg"
    import k from "$lib/assets/k.svg"
    import check_mark from "$lib/assets/check_mark.svg"
    import nikolay from "$lib/assets/nikolay.png"
    import arrow_up from "$lib/assets/arrow_up.svg"

    import { priceFormat } from "$lib/client/formarters"
    import {fade,slide,fly} from "svelte/transition"
    import { quintOut } from 'svelte/easing';

    import Swiper from "./Swiper.svelte"

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

    // let websites = [
    //     {
    //         name:"Одностраничный сайт",
    //         desc:"Подойдёт для бизнеса, мероприятий и рекламы",
    //         functions:[
    //             {
    //                 name:"Разработка за 2 недели"
    //             },
    //             {
    //                 name:"Консультация со специалистами"
    //             },
    //             {
    //                 name:"Настройка SEO-оптимизации"
    //             },
    //             {
    //                 name:"Адаптация под все устройства"
    //             }
    //         ],
    //         price:50000,
    //         oldprice:55350,
    //     },
    //     {
    //         name:"Многостраничный сайт",
    //         desc:"Для крупных компаний, информационных ресурсов, различных агентств",
    //         functions:[
    //             {
    //                 name:"Разработка за 3 недели"
    //             },
    //             {
    //                 name:"Консультация со специалистами"
    //             },
    //             {
    //                 name:"Настройка SEO-оптимизации"
    //             },
    //             {
    //                 name:"Адаптация под все устройства"
    //             }
    //         ],
    //         price:undefined,
    //         oldprice:60000
    //     },
    //     {
    //         name:"Интернет-магазин",
    //         desc:"Даст толчок для развития бизнеса, автоматизирует работу и повысит продажи",
    //         functions:[
    //             {
    //                 name:"Разработка за 1 месяц"
    //             },
    //             {
    //                 name:"Консультация со специалистами"
    //             },
    //             {
    //                 name:"Настройка SEO-оптимизации"
    //             },
    //             {
    //                 name:"Адаптация под все устройства"
    //             },
    //             {
    //                 name:"Платформа для управления магазином"
    //             }
    //         ],
    //         price:100000,
    //         oldprice:120000,
    //     }
    // ]

    let arrow =  arrow_right;
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



    let command = [
        {
            name: "Николай Ковальчук",
            speciality : "CEO Kewate",
        },
        {
            name: "Никита Корчагин",
            speciality : "Продуктовый дизайнер, Lead",
        },
        {
            name: "Максим Дёмин",
            speciality : "Backend–разработчик",
        },
        {
            name: "Даниил Микитчук",
            speciality : "Frontend–разработчик",
        },
        {
            name: "Андрей Орлов",
            speciality : "Frontend–разработчик",
        },
    ]


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
            <p class="display2 white" in:fly={{duration: 750,y:100}} class:hidden={!isInView4} >Удобство для пользователей — прибыль для бизнеса</p>
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
    <section class="command">
        <div class="command_info">
            <div class="info_block">
                <h3 class="display3 black">Наши специалисты решат задачи</h3>
                <p class="main_sm_16 black op50">Команда специалистов, которые показывают явный результат </p>
            </div>
        </div>
        <div class="command_table">
            {#each command  as person}
                <div class="person_block">
                    <div class="image_block">
                        
                    </div>
                    <div class="person_info">
                        <h3 class="header3 black">{person.name}</h3>
                        <h3 class="main_sm_14 black op50">{person.speciality}</h3>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    <section class="facts">
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
                            <td class="display1" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:500}}>80 млн ₽</td>
                        </tr>
                        <tr>
                            <td class="main_sm_16 white" in:fade={{duration: 750,delay:500}} class:hidden={!isInView5}>Успешно создаём цифровые продукты</td>
                            <td class="empty"></td>
                            <td class="display1" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1000}}> &#707;4 лет </td>
                        </tr>
                        <tr>
                            <td class="main_sm_16 white" in:fade={{duration: 750,delay:1000}} class:hidden={!isInView5}>Реализовали проектов</td>
                            <td class="empty"></td>
                            <td class="display1" class:hidden={!isInView5} in:fly={{duration: 750,x:100,delay:1500}}>100+</td>
                        </tr>
                    </tbody>
                </table>
                {/key}
            </div>
        </div>
    </section>
    <section class="section_pd projects" 
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView1 = detail.inView;
    }}>
        {#key isInView1}
            <h3 class="display3 black" in:fly={{duration: 750,x:100,delay:0}} class:hidden={!isInView1}>Реализовали более 100 проектов</h3>
            <div class="project_selected" in:fade={{duration: 750,delay:500}} class:hidden={!isInView1}>
                <div class="project_image">

                </div>
                <div class="project_info">
                    <p class="header2 black" class:hidden={!isInView1}>Manuspect — сервис для анализа продаж</p>
                    <div class="tags">
                        {#each projects[0].tags as tag}
                            <div class="tag main_sm_14 black">
                                {tag}
                            </div>
                        {/each}
                    </div>
                </div>
                
            </div>       
        {/key}
            <div class="modile_apps"
            use:inview={{ unobserveOnEnter: true, rootMargin: '-40%' }}
            on:change={({ detail }) => {
                isInView2 = detail.inView;
            }}
            >
                {#each projects as project, index}
                    {#key isInView2}
                        {#if index !== 0}
                            <div class="app" in:fly={{duration: 750,y:100,delay: index*300}} class:hidden={!isInView2}>
                                
                                    <div class="img_box">

                                    </div>
                                    <div class="app_info">
                                        <div class="">
                                            <h2 class="header2 black">{project.name}</h2>
                                        </div>
                                        <div class="tags">
                                            {#each project.tags as tag}
                                                <div class="tag main_sm_14 black">
                                                    {tag}
                                                </div>
                                            {/each}
                                        </div>
                                    </div>
                                
                            </div>
                        {/if}
                    {/key}
                
                {/each}
                
            </div>
        
    </section>
    <!-- <section class="development_stages">
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
    </section> -->
    <!-- <section class="section_pd you_get"
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
    </section> -->
    <!-- <section class="websites section_pd"
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
    </section> -->
    <div class="services">
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
                        <div class="digital_products link_ul">
                            <h3 class="header3">Цифровые продукты</h3>
                            <a href="" class="main_sm_16 service_link">Веб-сервис<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Desktop-приложение<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Мобильное приложение<img src="{ arrow_up }" alt=""></a>
                        </div>
                        <div class="other link_ul">
                            <h3 class="header3">Другое</h3>
                            <a href="" class="main_sm_16 service_link">Бот для мессенджера<img src="{ arrow_up }" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="design services_row">
                    <h2 class="header2">Дизайн</h2>
                    <div class="map">
                        <div class="product_disign link_ul">
                            <h3 class="header3">Продуктовый дизайн</h3>
                            <a href="" class="main_sm_16 service_link">Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
                            <a href="" class="main_sm_16 service_link">Интернет-магазин<img src="{ arrow_up }" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="swiper_section" >
        <Swiper/>
    </section>
    
    <section class="tg">
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
            <a href="https://t.me/kewateru" class="main_btn_white" target="_blank">Перейти в Telegram</a>
        </a>
    </section>
    <section class="application">
        
    </section>
</div>

<style lang="less">

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
        top: -68px;
        height: 54vh;
        min-height: 700px;
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
        max-width: 1280px;
        margin: 0 auto;
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


    /* Command section */

    .image_block{
        width: 280px;
        height: 320px;
        background: var(--Neutral_900);
        border-radius: 16px;
    }
    .command{
        display: flex;
        justify-content: space-between;
        padding: 150px 50px;
        max-width: 1280px;
        margin: 0 auto;
        column-gap: 20px;
    }
    .info_block{
        height: 390px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 0;
    }
    .command_info{
        width: 100%;
    }
    .command_table{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 40px 20px;
    }
    .person_block{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    .person_info{
        display: flex;
        flex-direction: column;
        row-gap: 5px;
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
        
    }
    table{
        margin-top: 72px;
    }
    .facts_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 72px 50px;
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
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
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
    .project_image{
        background-color: var(--Neutral_1000);
        width: 100%;
        max-height: 600px;
        height: 100vh;
        border-radius: 16px;
       
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
        @media (max-width:500px) {
            padding: 20px;
        }
    }
    .modile_apps{
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 20px;
        row-gap: 40px;
        margin-bottom: 80px;
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
            max-width: 300px;
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
        padding: 12px;
        border: 1px solid var(--Neutral_400);
        border-radius: 24px;
        line-height: 16.8px;
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
    .services_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 64px  50px;
    }
    .map img{
        width: 24px;
        height: 24px;
    }
    .service_link{
        display: flex;
        align-items: center;
        column-gap: 8px;
    }
    .map{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 64px;
        column-gap: 64px;
        width: 100%;
    }
    .link_ul{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        padding-right: 66px;
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
    }
    .services_row h2{
        width: 70%;
    }
    .development{
        padding-bottom: 32px;
        border-bottom: 1px solid var(--Neutral_800);
    }


    /* Tg block */

    .tg{
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        padding: 0 50px;
        column-gap: 20px;
    }
    .tg_link{
        background: var(--Neutral_1000);
        width: 100%;
        max-width: 580px;
        height: 342px;
        border-radius: 16px;
        padding: 16px;
        position: relative;
    }
    .tg_block_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    /* Swiper section */

    .swiper_section{
        max-width: 1280px;
        margin: 0 auto;
        padding: 160px 50px;
    }
</style>