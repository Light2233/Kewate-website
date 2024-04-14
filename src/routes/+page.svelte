<script lang="ts">
    import company1 from '$lib/assets/company1_logo.png'
    import company2 from '$lib/assets/company2_logo.png'
    import company3 from '$lib/assets/company3_logo.png'
    import company4 from '$lib/assets/company4_logo.png'
    import company5 from '$lib/assets/company5_logo.png'
    import ticker from '$lib/assets/ticker.png'
</script>

<div class="site_content">
    <section style="padding-top: 84px;">
        <div class="tagline">
            <div class="tagline_text">
                <span>
                    <p class="h1">Грамотный сайт</p>
                    <div class="hidden_img" style="margin-left: 20px;max-width:389px"></div>

                </span>
                <span>
                    <div class="hidden_img" style="margin-right: 20px;max-width:268px"></div>
                    <p class="h1"> — ключ к продажам</p>
                </span>
                
            </div>
            <p class="sub_h1">в недвижимости, e-commerce и стартапах</p>
        </div>
    </section>
    <section >
        <div class="video_manuspect">
            <div class="company_logos">
                <div class="logo_div"><img src="{company1}" alt=""></div>
                <div class="logo_div"><img src="{company2}" alt=""></div>
                <div class="logo_div"><img src="{company3}" alt=""></div>
                <div class="logo_div"><img src="{company4}" alt=""></div>
                <div class="logo_div"><img src="{company5}" alt=""></div>
            </div>
            
        </div>
        <div class="video_content">
            <div class="enveloping">
                <span class="video_tagline">
                    <p class="h3 white">RPA Manuspect</p>
                    <p class="sub_h2 white" style="margin-top: 4px;">Виртуальный помощник Manuspect, предназначенный для автоматизации повседневных задач</p>
                </span>
                <div class="video">

                </div>
            </div>
        </div>
    </section>
    <section class="ticker_container">
        <div class="ticker" style="background: url({ticker}) repeat ;">

        </div>
    </section>
    <section>
        <div class="services">
            <p class="h1">Услуги</p>
            <div class="services_row">
                <div class="service">
                    <div class="">
                        <p class="sub_h2" style="margin-bottom: 24px;">Выбрав нас, вы получаете релевантное решение профессионального уровня, которое повысит ваше влияние на рынке</p>
                        <p class="sub_h2" style="color: var(--gray)">Наш инструментарий состоит из Javascript, SvelteKit, Sequelzie</p>
                    </div>
                    <button class="sub_h3 default_btn">Обсудить проект</button>
                </div>
                <div class="service">
                    <div class="service_info">
                        <p class="sub_h3" style="opacity: 0.48;margin-bottom: 8px">от 30.000₽<span style="margin: 0px 8px;">/</span>от 2-х недель</p>
                        <p class="h3">Сайт для бизнеса</p>
                    </div>
                </div>
                <div class="service">
                    <div class="service_info">
                        <p class="sub_h3" style="opacity: 0.48;margin-bottom: 8px">от 80.000₽<span style="margin: 0px 8px;">/</span>от 1 месяца</p>
                        <p class="h3">Интернет-магазин</p>
                    </div>
                </div>
                <div class="service">
                    <div class="service_info">
                        <p class="sub_h3" style="opacity: 0.48;margin-bottom: 8px">от 15.000₽<span style="margin: 0px 8px;">/</span>от 1 недели</p>
                        <p class="h3">UI/UX-дизайн</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>

    /* First block */

    .tagline{
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        align-items: center;
        justify-content: center;
        max-width: 1392px;
        margin: 0 auto;
        height: 894px;

    }
    .tagline_text{
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        flex-wrap: nowrap;
        max-width: 1080px;
        width: 100%;
    }
    .tagline span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hidden_img{
        height: 112px;
        border-radius: 40px;
        overflow: hidden;
        background: blueviolet;
        width: 100%;
        position: relative;
    }

    /* Second block */
    
    .video_manuspect{
        max-width: 1040px;
        margin: 0 auto;
    }
    .company_logos{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .video_content{ 
        background: var(--main);
        height: 945px;
        max-width: 1680px;
        margin: 0 auto;
        margin-top: 24px;
    }
    .white{
        color: var(--white);
    }
    .enveloping{
        max-width: 1392px;
        margin: 0 auto;
        height: 100%;
        padding: 48px;
    }

    /* ticker */

    .ticker_container{
        max-width: 1680px;
        margin: 0 auto;
        overflow: hidden;
    }
    .ticker{
        height: 112px;
        width: 3554px;
        animation: slide 10s linear infinite;
    }
    @keyframes slide{
        0%{
            transform: translate(0);
        }
        100%{
            transform: translate(-1777px);
        }
    }

    /* Third block */

    .default_btn{
        color: var(--white);
        background: var(--dark);
        padding: 20px 0px;
        width: 100%;
    }
    .services{
        max-width: 1394px;
        margin:  0 auto;
        display: flex;
        flex-direction: column;
        row-gap: 32px;
        padding-bottom: 200px;
    }
    .services_row{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        column-gap: 20px;
    }
    .service{
        display: flex;
        flex-direction: column;
        height: 495px;
        justify-content: space-between;    
    }
    .service:not(:first-child){
        padding: 16px;
        border-radius: 16px;
        overflow: hidden;
    }
    .service:nth-child(2){
        background: #E6EAE7;
    }
    .service:nth-child(3){
        background: #F3E8D5;
    }
    .service:nth-child(4){
        background: #E5E5FE;
    }
</style>