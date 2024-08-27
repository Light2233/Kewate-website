<script>
    export let open = false;
    import arrow_up from "$lib/assets/arrow_up.svg"

    import { slide } from "svelte/transition";
</script>


{#if open}
    <nav transition:slide>
        <div class="nav_block">
            <h3 class="header3 total_black">Веб-сайты</h3>
            <a href="" class="main_sm_16 service_link total_black">Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
            <a href="" class="main_sm_16 service_link total_black">Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
            <a href="" class="main_sm_16 service_link total_black">Интернет-магазин <img src="{ arrow_up }" alt=""></a>
        </div>
        <div class="nav_block">
            <h3 class="header3 total_black">Цифровые продукты</h3>
            <a href="" class="main_sm_16 service_link total_black">Веб-сервис<img src="{ arrow_up }" alt=""></a>
            <a href="" class="main_sm_16 service_link total_black">Desktop-приложение<img src="{ arrow_up }" alt=""></a>
            <a href="" class="main_sm_16 service_link total_black">Мобильное приложение<img src="{ arrow_up }" alt=""></a>
        </div>
        <div class="nav_block ">
            <h3 class="header3 total_black">Другое</h3>
            <a href="" class="main_sm_16 service_link total_black">Бот для мессенджера<img src="{ arrow_up }" alt=""></a>
        </div>
    </nav>
{/if}

<style lang="less">
    nav{
        padding: 32px 50px;
        background-color: var(--Neutral_100);
        position: absolute;
        top: 64px;
        left: 0;
        width: 100%;
        display: flex;
        column-gap: 64px;

    }
    .nav_block{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        padding-right: 66px;
        @media (max-width:950px) {
            padding-right: 0;
        }
    }
    .nav_block h3{
        margin-bottom: 8px;
    }
    img{
        width: 24px;
        height: 24px;
    }
    .service_link{
        justify-content: unset;
    }
</style>