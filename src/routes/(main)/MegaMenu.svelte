<script lang="ts">
    export let open = false;
    import arrow_up from "$lib/assets/arrow_up.svg"
    import { slide } from "svelte/transition";
    import { createEventDispatcher } from 'svelte'

    export let color = "header_black"
    let time = false;

    $: {
        if(open) setTimeout(()=>{time = true},100) 
        else time=false
    }

    const dispatch = createEventDispatcher()

    function linkClick() {
		dispatch('message', {
			text: 'click'
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
{#if open && time}
    <nav transition:slide class:black={color!="header_white"} class:white={color=="header_white"}> 
        <div class="nav_block">
            <h3 class="header3 total_black">Веб-сайты</h3>
            <a href="/landing" class="main_sm_16 service_link total_black" on:click={linkClick} >Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
            <a href="/multi-page" class="main_sm_16 service_link total_black" on:click={linkClick}>Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
            <a href="/store" class="main_sm_16 service_link total_black" on:click={linkClick}>Интернет-магазин <img src="{ arrow_up }" alt=""></a>
        </div>
        <!-- <div class="nav_block">
            <h3 class="header3 total_black">Цифровые продукты</h3>
            <a href="" class="main_sm_16 service_link total_black" on:click={linkClick}>Веб-сервис<img src="{ arrow_up }" alt=""></a>
            <a href="" class="main_sm_16 service_link total_black" on:click={linkClick}>Desktop-приложение<img src="{ arrow_up }" alt=""></a>
            <a href="" class="main_sm_16 service_link total_black" on:click={linkClick}>Мобильное приложение<img src="{ arrow_up }" alt=""></a>
        </div>
        <div class="nav_block ">
            <h3 class="header3 total_black">Другое</h3>
            <a href="" class="main_sm_16 service_link total_black" on:click={linkClick}>Бот для мессенджера<img src="{ arrow_up }" alt=""></a>
        </div> -->
    </nav>
{/if}

<style lang="less">
    .black{
        background: var(--Neutral_1000);
    }
    
    nav{
        padding: 32px 50px;
        background-color: #FFFFFF;
        position: absolute;
        top: 60px;
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
    .service_link:hover{
        opacity: 0.8;
    }
    .black .service_link , .black h3{
        color: var(--Neutral_100);
    }
    h3{
        color: var(--Neutral_1000);
    }
</style>