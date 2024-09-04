<script>
    import WebsiteSwiper from "./WebsiteSwiper.svelte";
    import { priceFormat } from "../formarters";
    import { createEventDispatcher } from 'svelte';

    import tick_circle from "$lib/assets/tick_circle.svg"

    export let websiteInfo 

    let showModal = false
    const dispatch = createEventDispatcher();

    function showModalWindow(){
        dispatch('modalOpen',{});
    }
        

</script>


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
                    <button class="main_sm_16 main_btn_black" on:click={showModalWindow}>Оставить заявку</button>
                </div>
            </div>
        </div>
        <div class="included">
            <h2 class="header2 total_black">Что входит в разработку?</h2>
            <div class="blocks">
                <div class="included_block">
                    <p class="main_sm_16 gray">Дизайн</p>
                    <div class="">
                        <img src="{ tick_circle }" alt="">
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

<style lang="less">
    .op50{
        opacity: 0.5;
    }
    .gray{
        color: var(--Neutral_400);
    }
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
</style>