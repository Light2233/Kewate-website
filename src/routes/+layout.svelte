<script lang="ts">
    import '../app.css'
    import tg from "$lib/assets/tg_icon.svg"
    import vk from "$lib/assets/vk_icon.svg"
   

    import { onMount } from 'svelte'
    import { slide,fly } from 'svelte/transition'

    import ModileMenuModal from './ModileMenuModal.svelte'
    import ApplicationModalWindow from "./ApplicationModalWindow.svelte"
    import { isSubmit } from "$lib/client/PostApplicationStore"
    import MegaMenu from './MegaMenu.svelte'
    import modalBg from '$lib/assets/application_modal_bg.png'
    import favicon from '$lib/assets/ICO_kewate.ico'

    export let data;


    let showModal;
    let alert = false;
    let render = false;
    let open = false;
    let innerWidth;
    let blackColor = false;
    let megaMenuOpen= false;
    let header;
    let headerClass = "header_trans";
    let waiting = true


    // Реакция на отправку формы
    $: if($isSubmit){
        alert = true;
        setTimeout(()=>{
            alert = false;
            $isSubmit = false; 
        },3000)
        
    }

    
    //  Плавная сменацвета у хидера
    $: {
        if(megaMenuOpen) blackColor = true; 
        else {
            setTimeout(()=>{blackColor= false},300);
            
        }
    }
    
    let scrollY;
    // Смена цвета хиддера при скролле 
    onMount(() => {
        showModal = false;
        render= true;
        scrollY = 0.2   ;
        function handleScroll() {
            const headerRect = header.getBoundingClientRect();
            const sections = document.querySelectorAll('.light-background, .dark-background,.trans-background');
            
            sections.forEach(section => {
                const sectionRect = section.getBoundingClientRect();
                
                if (
                (headerRect.bottom - 10) > (sectionRect.top+20) && 
                headerRect.top < sectionRect.bottom
                ) {
                // Если хедер находится на секции, изменяем его стиль
                if (section.classList.contains('dark-background')) {
                    headerClass = "header_white"
                } else if (section.classList.contains('light-background')) {
                    headerClass = "header_black"
                }
                else if(section.classList.contains('trans-background')){
                    headerClass = "header_trans"
                }
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    });


    // Ловим ивен открытия мега меню
    function handleMessage(event) {
		megaMenuOpen = false;
	}


    // Контроль скролла
    let scrollable = true;
    $: if(showModal || open) scrollable=false;
        else scrollable = true
	
	const wheel = (node, options) => {
		let { scrollable } = options;
		
		const handler = e => {
			if (!scrollable) e.preventDefault();
		};
		
		node.addEventListener('wheel', handler, { passive: false });
		
		return {
			update(options) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
    };


    // Плавная прокрутка до якоря
    function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}

    //Ожидание загрузки
    // async function wait() {

    //     let promise = new Promise((resolve) =>{
    //         setTimeout(()=>resolve(false),2000)
    //     })
    //     let result = await promise;
    //     return result
    // }

    // onMount(async ()=>{
    //     waiting = await wait();
    // })

   
    
</script>

<svelte:head>
    <link rel="icon" href={favicon} type="image/x-icon" />
</svelte:head>

<svelte:window bind:innerWidth={innerWidth} use:wheel={{scrollable}} bind:scrollY={scrollY}/>

{#if render}
    <ApplicationModalWindow bind:showModal data={data} bg={modalBg} page={"/"}/>
    <ModileMenuModal bind:open/>
{/if}

<header bind:this={header} class:black={headerClass == "header_trans" && blackColor}  class="{headerClass}" >
    <div class="header_content" >
        <a href="/" class="logo" on:click={()=>{megaMenuOpen = false,headerClass = "header_trans"}}>
            <svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g clip-path="url(#clip0_30_422)" >
                    <path  d="M6.90885 7.77531C9.61777 6.18269 11.7757 5.11709 15.2208 3.71644M6.90885 7.77531C5.28222 5.02009 3.42718 2.80648 0.880371 1M6.90885 7.77531C6.90885 7.77531 10.7138 9.72597 15.2208 14.7499M6.90885 7.77531C4.00454 9.48288 -2.61564 14.7238 4.26795 14.7499C9.34449 14.7692 8.21118 9.98122 6.90885 7.77531Z" stroke="#292D32" stroke-width="2.5" />
                    <path  d="M23.1531 15.4375C21.8304 15.4375 20.6453 15.1934 19.5976 14.7052C18.55 14.2105 17.7315 13.5204 17.1422 12.6352C16.5529 11.7433 16.2583 10.7181 16.2583 9.5594C16.2583 8.42021 16.5399 7.41124 17.103 6.53246C17.6661 5.64715 18.4485 4.9604 19.4503 4.47218C20.4521 3.98396 21.5849 3.73987 22.8486 3.73987C24.1188 3.73987 25.2254 4.02302 26.1683 4.58937C27.1111 5.14918 27.8347 5.94984 28.3388 6.99137C28.8496 8.0264 29.1049 9.2339 29.1049 10.6139H19.7744C20.0232 11.369 20.5078 11.9517 21.228 12.3617C21.9483 12.7718 22.8617 12.9769 23.9683 12.9769C24.8129 12.9769 25.6608 12.8565 26.512 12.6156C27.3632 12.3748 28.126 12.0363 28.8005 11.6001V13.7873C28.0606 14.3081 27.1995 14.7149 26.2174 15.0079C25.2418 15.2943 24.2203 15.4375 23.1531 15.4375ZM25.9129 8.44624C25.723 7.71068 25.3629 7.14434 24.8325 6.74727C24.3087 6.34368 23.654 6.14187 22.8682 6.14187C22.0367 6.14187 21.3393 6.35018 20.7762 6.76681C20.2197 7.1769 19.853 7.73671 19.6762 8.44624H25.9129Z" fill="#292D32"/>
                    <path  d="M32.7351 4.04257L35.6916 11.9126L38.7166 4.04257H41.9086L44.8846 11.9321L47.8508 4.04257H51.1311L46.79 15.1446H43.4408L40.2978 7.05973L37.0961 15.1446H33.7468L29.4155 4.04257H32.7351Z" fill="white"/>
                    <path  d="M62.0262 12.6449C61.4696 13.5302 60.7657 14.217 59.9144 14.7052C59.0697 15.1934 58.1301 15.4375 57.0957 15.4375C56.0152 15.4375 55.0529 15.1934 54.2082 14.7052C53.3634 14.217 52.7052 13.5302 52.2338 12.6449C51.769 11.7596 51.5366 10.7441 51.5366 9.59843C51.5366 8.44624 51.769 7.42752 52.2338 6.54221C52.7052 5.6504 53.36 4.9604 54.1984 4.47218C55.0428 3.98396 56.0086 3.73987 57.0957 3.73987C58.1301 3.73987 59.0697 3.98396 59.9144 4.47218C60.7657 4.9539 61.4727 5.6374 62.0359 6.52268L62.3205 4.04256H65.7188L65.0707 9.58868L65.7188 15.1446H62.3205L62.0262 12.6449ZM54.866 9.59843C54.866 10.2364 55.0003 10.806 55.2689 11.3072C55.5372 11.8084 55.9073 12.199 56.3787 12.4789C56.8567 12.7588 57.3967 12.8988 57.9992 12.8988C58.6081 12.8988 59.1877 12.7588 59.7377 12.4789C60.2877 12.199 60.7689 11.8117 61.1815 11.317C61.6004 10.8157 61.9278 10.2429 62.1636 9.59843C61.9278 8.95399 61.6004 8.38115 61.1815 7.87993C60.7689 7.37868 60.2877 6.98812 59.7377 6.70821C59.1877 6.42181 58.6081 6.27859 57.9992 6.27859C57.3967 6.27859 56.8567 6.42181 56.3787 6.70821C55.9073 6.98812 55.5372 7.38196 55.2689 7.88968C55.0003 8.39093 54.866 8.96053 54.866 9.59843Z" fill="#292D32"/>
                    <path  d="M66.792 5.04828L69.1198 4.28669L70.5145 1.09375H72.4002V4.04256H77.3404V6.49341H72.4002V10.5261C72.4002 11.1119 72.4788 11.5741 72.636 11.9126C72.793 12.2511 73.0452 12.4952 73.392 12.6449C73.7392 12.7946 74.2138 12.8695 74.8163 12.8695C75.3664 12.8695 75.8573 12.8174 76.2897 12.7133C76.7284 12.6091 77.1441 12.4529 77.5369 12.2446V14.7931C77.1309 14.9688 76.6136 15.1185 75.985 15.2422C75.3566 15.3724 74.7245 15.4375 74.0896 15.4375C72.4002 15.4375 71.1495 15.0469 70.3378 14.2658C69.5258 13.4846 69.1198 12.3943 69.1198 10.9948V6.49341H66.792V5.04828Z" fill="#292D32"/>
                    <path  d="M85.2477 15.4375C83.925 15.4375 82.7401 15.1934 81.6922 14.7052C80.6447 14.2105 79.8264 13.5204 79.237 12.6352C78.6477 11.7433 78.353 10.7181 78.353 9.5594C78.353 8.42021 78.6345 7.41124 79.1977 6.53246C79.7607 5.64715 80.5431 4.9604 81.545 4.47218C82.547 3.98396 83.6797 3.73987 84.9433 3.73987C86.2135 3.73987 87.3202 4.02302 88.263 4.58937C89.2058 5.14918 89.9294 5.94984 90.4336 6.99137C90.9443 8.0264 91.1996 9.2339 91.1996 10.6139H81.8693C82.118 11.369 82.6026 11.9517 83.3228 12.3617C84.043 12.7718 84.9565 12.9769 86.0629 12.9769C86.9076 12.9769 87.7554 12.8565 88.6067 12.6156C89.458 12.3748 90.2207 12.0363 90.8952 11.6001V13.7873C90.1553 14.3081 89.2942 14.7149 88.3121 15.0079C87.3365 15.2943 86.3151 15.4375 85.2477 15.4375ZM88.0076 8.44624C87.8177 7.71068 87.4576 7.14434 86.9274 6.74727C86.4035 6.34368 85.7487 6.14187 84.9628 6.14187C84.1313 6.14187 83.4341 6.35018 82.8709 6.76681C82.3142 7.1769 81.9476 7.73671 81.7708 8.44624H88.0076Z" fill="#292D32"/>
                <defs>
                </g>
                <defs>
                    <clipPath id="clip0_30_422" >
                        <rect width="91.2" height="16" fill="white" stroke="white"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
        <nav class="nav" class:nav_black={headerClass == "header_white"}>
            <button class="nav_link" on:click={()=>{megaMenuOpen=!megaMenuOpen}}>
                Услуги 
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class:rotate={megaMenuOpen}>
                    <path d="M6.00004 6.95276L0.467285 1.42027L1.46054 0.447266L6.00004 4.98652L10.5395 0.447266L11.5328 1.42027L6.00004 6.95276Z" fill="white"/>
                </svg>
            </button>
            <a href="#projects" class="nav_link" on:click={handleAnchorClick }>Проекты</a>
            <a href="#command" class="nav_link" on:click={handleAnchorClick }>Команда</a>
            <a href="/contacts" class="nav_link">Контакты</a>
            <a href="/" class="nav_link">О студии</a>
        </nav>
        {#if innerWidth >600}
            <button class="main_sm_16 main_btn_white" on:click={()=>{showModal=true}}>Обсудить задачу</button>
        {:else}
            <button class="burger_menu" on:click={()=>{open = true}}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </button>
        {/if}
    </div>
    <MegaMenu open={megaMenuOpen} color={headerClass} on:message={handleMessage}/>
</header>


<!-- {#if waiting}
<div class="loading_page" out:fly={{duration:1000}} >
    <div class="load">
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
            <rect width="91.2" height="16" fill="black"/>
            </clipPath>
            </defs>
        </svg>
        <h1 class="total_black"><Countup value={100} duration={1500} initial={0}/> %</h1>
    </div>
</div>
{/if} -->


<slot/>

<footer>
    <div class="footer_content">
        <div class="kewate_info">
            <p class="main_sm_14 gray">© 2024, Kewate. Все права защищены.️</p>
            <p class="main_sm_14 gray">Общество с ограниченной ответственностью «Kewate».</p>
            <p class="main_sm_14 gray">ОГРН 10103013013010301, юридический адрес 19419491</p>
            <p class="main_sm_14 gray">г.Москва, ул. Арбузная д.228</p>     
        </div>
        <div class="policy_block">
            <div class="policy">
                <a href="/policy" class="main_sm_14 gray" style="text-decoration: underline;" data-sveltekit-preload-data="false">Политика конфиденциальности</a>
                <a href="/contacts" class="main_sm_14 gray" style="text-decoration: underline;" data-sveltekit-preload-data="false">Реквизиты и контакты</a>
            </div>
            <div class="contacts">
                <a href="https://vk.com/kewate" target="_blank"><img src="{ vk }" alt=""></a>
                <a href="https://t.me/kewateru" target="_blank"><img src="{ tg }" alt=""></a>
            </div>
        </div>
    </div>
</footer>


{#if alert}
    <div class="post_application" transition:slide>
        <p class="main_sm_16">Заявка успешно отправлена — мы перезвоним Вам в течение дня</p>
    </div>
{/if}


    


<style lang="less">
    .gray{
        color: #A3A3A3;
    }

    .loading_page{
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 999999;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .load {
        position: relative;
    }
    .load h1{
        position: absolute;
        font-family: Manrope;
        font-size: 128px;
        font-weight: 250;
        line-height: 153.6px;
        text-align: left;
        color: #F5F5F5;
        top: -70px;
        right: -135%;
        text-wrap: nowrap;
        z-index: -1;
        @media (max-width:500px) {
            font-size: 100px;
            font-weight: 250;
            line-height: 120px;
            top: -55px;
            right: -90%;
        }
    }
    
    

    /* Header */
    header{
        margin: 0 auto;
        z-index: 999999;
        position: fixed;
        width: 100%;
    }
    .header_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 50px;
        @media (max-width:800px) {
            padding: 10px 16px; 
            
        }
        @media (max-width:600px) {
            height: 60px;
            
        }

    }
    .nav{
        flex-grow: 2;
        display: flex;
        align-items: center;
        justify-content: end;
        column-gap: 32px;
        margin-right: 20px;
        @media (max-width:800px) {
            column-gap: 20px;
        }
        @media (max-width:850px) {
            display: none;
        }
    }
    .nav_link{
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: var(--Neutral_100);
        padding: 6px 0px;
        cursor: pointer;
        
    }
    .nav_link:hover{
        opacity: 0.8;
    }
    .nav_link:first-child {
        display: flex;
        align-items: center;
        column-gap: 14px;
    }
    .nav_link:first-child img{
        width: 11px;
    }
    
    /* Footer */

    footer{
        background-color: var(--Neutral_1000);
    }
    .kewate_info p:first-child{
        margin-bottom: 20px;
    }
    .kewate_info p:not(:first-child){
        margin-bottom: 4px;
    }
    .footer_content{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 64px 50px;
        @media (max-width:660px) {
            flex-direction: column;
            row-gap: 64px;
        }
        @media (max-width:700px) {
            padding: 64px 16px;
        }
    }
    .policy{
        display: flex;
        flex-direction: column;
        align-items: end;
        row-gap: 2px;
        @media (max-width:800px) {
            flex-direction: column;
            align-items: baseline;
        }
        
    }
    .contacts{
        display: flex;
        align-items: center;
        column-gap: 8px;
        justify-content: end;
        @media (max-width:660px) {
            justify-content: start;
            row-gap: 8px;
        }
    }
    .policy_block{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width:660px) {
            row-gap: 8px;
        }
    }
    .policy a{
        @media (max-width:420px) {
            font-size: 14px !important;
            line-height: 17.5px ;
        }
    }
    .post_application{
        background: #19C68D;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .burger_menu{
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    
    .burger_menu div{
        width: 22.75px;
        height: 1.75px;
        background: var(--Neutral_100);
        border-radius: 5px;
    }
    .contacts a:hover{
        opacity: 0.8;
    }
    .nav_black  a{
        color: var(--Neutral_1000);
    }
    .nav_black  button{
        color: var(--Neutral_1000);
    }
    .btn_black{
        color: white;
        background: var(--Neutral_1000);
    }
    .header_white{
        background-color: var(--Neutral_100);
    }
    .header_black{
        background: var(--Neutral_1000);
    }
    .header_trans{
        background: transparent;
    }
    .header_white .main_btn_white{
        color: white;
        background: var(--Neutral_1000);
    }
    
    .black{
        background: var(--Neutral_1000) !important;
    }
    .header_white .nav svg path{
        fill: var(--Neutral_1000) !important;
    }
    .rotate{
        transform: rotate(180deg);
    }
    .header_white .burger_menu div{
        background: var(--Neutral_1000);
    }
    .header_black .burger_menu div{
        background: var(--Neutral_100);
    }


    

</style>