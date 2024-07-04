<script lang="ts">
    import about_bg from "$lib/assets/about_bg.png"
    import arrow_circle_right from "$lib/assets/arrow_circle_right.svg"
    import arrow_right from "$lib/assets/arrow_right.svg"
    import k from "$lib/assets/k.svg"

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
        <div class="graph">
            
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
</style>