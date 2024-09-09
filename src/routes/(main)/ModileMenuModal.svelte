<script lang="ts">
    import arrow_right_modal from "$lib/assets/arrow_right_modal.svg"
    import ApplicationModalWindow from "./ApplicationModalWindow.svelte";
    import arrow_up from "$lib/assets/arrow_up.svg"
    import modalBg from '$lib/assets/application_modal_bg.png'

    import {slide,fly} from "svelte/transition"
    export let utm;
    export let open = false;
    let showModal = false



    let servicesOpen = false;



</script>

<ApplicationModalWindow bind:showModal bg={modalBg} page={"/"} utm={utm}/>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
{#if open}
    <div class="dialog" in:fly>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="dialog_content">
            <div class="menu">
                
                <div class="title">
                    <svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_30_422)">
                        <path d="M6.90885 7.77531C9.61777 6.18269 11.7757 5.11709 15.2208 3.71644M6.90885 7.77531C5.28222 5.02009 3.42718 2.80648 0.880371 1M6.90885 7.77531C6.90885 7.77531 10.7138 9.72597 15.2208 14.7499M6.90885 7.77531C4.00454 9.48288 -2.61564 14.7238 4.26795 14.7499C9.34449 14.7692 8.21118 9.98122 6.90885 7.77531Z" stroke="#292D32" stroke-width="2.5"/>
                        <path d="M23.1531 15.4375C21.8304 15.4375 20.6453 15.1934 19.5976 14.7052C18.55 14.2105 17.7315 13.5204 17.1422 12.6352C16.5529 11.7433 16.2583 10.7181 16.2583 9.5594C16.2583 8.42021 16.5399 7.41124 17.103 6.53246C17.6661 5.64715 18.4485 4.9604 19.4503 4.47218C20.4521 3.98396 21.5849 3.73987 22.8486 3.73987C24.1188 3.73987 25.2254 4.02302 26.1683 4.58937C27.1111 5.14918 27.8347 5.94984 28.3388 6.99137C28.8496 8.0264 29.1049 9.2339 29.1049 10.6139H19.7744C20.0232 11.369 20.5078 11.9517 21.228 12.3617C21.9483 12.7718 22.8617 12.9769 23.9683 12.9769C24.8129 12.9769 25.6608 12.8565 26.512 12.6156C27.3632 12.3748 28.126 12.0363 28.8005 11.6001V13.7873C28.0606 14.3081 27.1995 14.7149 26.2174 15.0079C25.2418 15.2943 24.2203 15.4375 23.1531 15.4375ZM25.9129 8.44624C25.723 7.71068 25.3629 7.14434 24.8325 6.74727C24.3087 6.34368 23.654 6.14187 22.8682 6.14187C22.0367 6.14187 21.3393 6.35018 20.7762 6.76681C20.2197 7.1769 19.853 7.73671 19.6762 8.44624H25.9129Z" fill="#292D32"/>
                        <path d="M32.7351 4.04257L35.6916 11.9126L38.7166 4.04257H41.9086L44.8846 11.9321L47.8508 4.04257H51.1311L46.79 15.1446H43.4408L40.2978 7.05973L37.0961 15.1446H33.7468L29.4155 4.04257H32.7351Z" fill="#292D32"/>
                        <path d="M62.0262 12.6449C61.4696 13.5302 60.7657 14.217 59.9144 14.7052C59.0697 15.1934 58.1301 15.4375 57.0957 15.4375C56.0152 15.4375 55.0529 15.1934 54.2082 14.7052C53.3634 14.217 52.7052 13.5302 52.2338 12.6449C51.769 11.7596 51.5366 10.7441 51.5366 9.59843C51.5366 8.44624 51.769 7.42752 52.2338 6.54221C52.7052 5.6504 53.36 4.9604 54.1984 4.47218C55.0428 3.98396 56.0086 3.73987 57.0957 3.73987C58.1301 3.73987 59.0697 3.98396 59.9144 4.47218C60.7657 4.9539 61.4727 5.6374 62.0359 6.52268L62.3205 4.04256H65.7188L65.0707 9.58868L65.7188 15.1446H62.3205L62.0262 12.6449ZM54.866 9.59843C54.866 10.2364 55.0003 10.806 55.2689 11.3072C55.5372 11.8084 55.9073 12.199 56.3787 12.4789C56.8567 12.7588 57.3967 12.8988 57.9992 12.8988C58.6081 12.8988 59.1877 12.7588 59.7377 12.4789C60.2877 12.199 60.7689 11.8117 61.1815 11.317C61.6004 10.8157 61.9278 10.2429 62.1636 9.59843C61.9278 8.95399 61.6004 8.38115 61.1815 7.87993C60.7689 7.37868 60.2877 6.98812 59.7377 6.70821C59.1877 6.42181 58.6081 6.27859 57.9992 6.27859C57.3967 6.27859 56.8567 6.42181 56.3787 6.70821C55.9073 6.98812 55.5372 7.38196 55.2689 7.88968C55.0003 8.39093 54.866 8.96053 54.866 9.59843Z" fill="#292D32"/>
                        <path d="M66.792 5.04828L69.1198 4.28669L70.5145 1.09375H72.4002V4.04256H77.3404V6.49341H72.4002V10.5261C72.4002 11.1119 72.4788 11.5741 72.636 11.9126C72.793 12.2511 73.0452 12.4952 73.392 12.6449C73.7392 12.7946 74.2138 12.8695 74.8163 12.8695C75.3664 12.8695 75.8573 12.8174 76.2897 12.7133C76.7284 12.6091 77.1441 12.4529 77.5369 12.2446V14.7931C77.1309 14.9688 76.6136 15.1185 75.985 15.2422C75.3566 15.3724 74.7245 15.4375 74.0896 15.4375C72.4002 15.4375 71.1495 15.0469 70.3378 14.2658C69.5258 13.4846 69.1198 12.3943 69.1198 10.9948V6.49341H66.792V5.04828Z" fill="#292D32"/>
                        <path d="M85.2477 15.4375C83.925 15.4375 82.7401 15.1934 81.6922 14.7052C80.6447 14.2105 79.8264 13.5204 79.237 12.6352C78.6477 11.7433 78.353 10.7181 78.353 9.5594C78.353 8.42021 78.6345 7.41124 79.1977 6.53246C79.7607 5.64715 80.5431 4.9604 81.545 4.47218C82.547 3.98396 83.6797 3.73987 84.9433 3.73987C86.2135 3.73987 87.3202 4.02302 88.263 4.58937C89.2058 5.14918 89.9294 5.94984 90.4336 6.99137C90.9443 8.0264 91.1996 9.2339 91.1996 10.6139H81.8693C82.118 11.369 82.6026 11.9517 83.3228 12.3617C84.043 12.7718 84.9565 12.9769 86.0629 12.9769C86.9076 12.9769 87.7554 12.8565 88.6067 12.6156C89.458 12.3748 90.2207 12.0363 90.8952 11.6001V13.7873C90.1553 14.3081 89.2942 14.7149 88.3121 15.0079C87.3365 15.2943 86.3151 15.4375 85.2477 15.4375ZM88.0076 8.44624C87.8177 7.71068 87.4576 7.14434 86.9274 6.74727C86.4035 6.34368 85.7487 6.14187 84.9628 6.14187C84.1313 6.14187 83.4341 6.35018 82.8709 6.76681C82.3142 7.1769 81.9476 7.73671 81.7708 8.44624H88.0076Z" fill="#292D32"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_30_422">
                        <rect width="91.2" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <button on:click={() => {showModal=false,open=false}} type="button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33333 15.5447L4.4552 14.6665L9.12187 9.99987L4.4552 5.3332L5.33333 4.45508L9.99999 9.12175L14.6667 4.45508L15.5448 5.3332L10.8781 9.99987L15.5448 14.6665L14.6667 15.5447L9.99999 10.878L5.33333 15.5447Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                {#if !servicesOpen} 
                    {#key open}
                        <nav class="modal_content">
                            <button class="display3" on:click={()=>{servicesOpen=true}} in:fly={{delay:200}}>Услуги <img src="{arrow_right_modal}" alt=""></button>
                            <a href="#projects" class="display3" in:fly={{delay:300}} on:click={()=>{open=false;showModal=false}}>Проекты</a>
                            <a href="#command" class="display3" in:fly={{delay:400}} on:click={()=>{open=false;showModal=false}}>Команда</a>
                            <a href="" class="display3" in:fly={{delay:500}}>Контакты</a>
                            <a href="" class="display3" in:fly={{delay:600}}>О студии</a>
                        </nav>
                    {/key}
                {:else}
                    <nav class="services_table" in:fly>
                        <button class="display3" on:click={()=>{servicesOpen=false}}><img src="{arrow_right_modal}" alt="" class="rotate"> Услуги</button>
                        <div class="development services_row">
                            <h2 class="header2">Разработка</h2>
                            <div class="map">
                                <div class="websites link_ul">
                                    <h3 class="header3">Веб-сайты</h3>
                                    <a href="/landing" class="main_sm_16 service_link" on:click={()=>{open=false;showModal=false,servicesOpen = false}}>Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
                                    <a href="/multi-page" class="main_sm_16 service_link" on:click={()=>{open=false;showModal=false,servicesOpen = false}}>Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
                                    <a href="/store" class="main_sm_16 service_link" on:click={()=>{open=false;showModal=false,servicesOpen = false}}>Интернет-магазин<img src="{ arrow_up }" alt=""></a>
                                </div>
                                <!-- <div class="digital_products link_ul">
                                    <h3 class="header3">Цифровые продукты</h3>
                                    <a href="" class="main_sm_16 service_link">Веб-сервис<img src="{ arrow_up }" alt=""></a>
                                    <a href="" class="main_sm_16 service_link">Desktop-приложение<img src="{ arrow_up }" alt=""></a>
                                    <a href="" class="main_sm_16 service_link">Мобильное приложение<img src="{ arrow_up }" alt=""></a>
                                </div>
                                <div class="other link_ul">
                                    <h3 class="header3">Другое</h3>
                                    <a href="" class="main_sm_16 service_link">Бот для мессенджера<img src="{ arrow_up }" alt=""></a>
                                </div> -->
                            </div>
                        </div>
                        <!-- <div class="design services_row">
                            <h2 class="header2">Дизайн</h2>
                            <div class="map">
                                <div class="product_disign link_ul">
                                    <h3 class="header3">Продуктовый дизайн</h3>
                                    <a href="" class="main_sm_16 service_link">Одностраничный сайт<img src="{ arrow_up }" alt=""></a>
                                    <a href="" class="main_sm_16 service_link">Многостраничный сайт <img src="{ arrow_up }" alt=""></a>
                                    <a href="" class="main_sm_16 service_link">Интернет-магазин<img src="{ arrow_up }" alt=""></a>
                                </div>
                            </div>
                        </div> -->
                    </nav>
                {/if}
            </div>
            {#if !servicesOpen}
                <button class="main_sm_16 main_btn_white last_btn" on:click={()=>{showModal=true}}>Обсудить задачу</button>
            {/if}
        </div>
        
    </div>
{/if}


<style>
    .hidden{
        display: none;
    }
    .rotate{
        transform: rotate(180deg);
        margin-right: 16px;
    }
    
    .gray{
        color: #A3A3A3;
    }
	.dialog{
		width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        background: none;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        z-index: 99999;
	}
    .dialog_content{
        background-color: black;
        width: 100%;
        padding: 16px;
        height: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        z-index: 9;
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
            opacity: 0;
		}
		to {
			transform: scale(1);
            opacity: 1;
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
    .title > svg path:nth-child(3) , svg path:nth-child(2) , svg path:nth-child(4) , svg path:nth-child(5) , svg path:nth-child(6){
        fill: white;
    }
    .title > svg path:first-child{
        stroke: white;
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 0px 22px 0px;
    }
    .last_btn{
        margin-left: 0;
    }
    .display3{
        font-size: 28px;
        line-height: 33.6px;
        text-align: start;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .modal_content{
        display: flex;
        flex-direction: column;
        row-gap: 25px;
    }
    .display3 img{
        width: 28px;
        height: 28px;
    }




    .services{
        background: var(--Neutral_1000);
       
    }
    .services_content{
        max-width: 1280px;
        margin: 0 auto;
        padding: 64px  50px;
        @media (max-width:700px) {
            padding: 64px 16px;
        }
    }
    .map img{
        width: 24px;
        height: 24px;
    }
   
    .map{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 64px;
        column-gap: 64px;
        width: 100%;
        @media (max-width:680px) {
            grid-template-columns: repeat(1,1fr);
        }
    }
    .link_ul{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        flex-shrink: 0;
    }
    .link_ul *{
        flex-shrink: 0;
    }
    .link_ul h3{
        font-size: 16px;
        line-height: 19.2px;
    }
    .services_row{
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        @media (max-width:1080px) {
            flex-direction: column;
            row-gap: 32px;
        }
    }
    .services_row h2{
        width: 40%;
        font-size: 20px;
        flex-shrink: 0;
        line-height: 24px;
    }
    .development{
        padding-bottom: 32px;

    }
    .design{
        margin-bottom: 12px;
    }
</style>