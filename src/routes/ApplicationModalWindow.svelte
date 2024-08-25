<script lang="ts">
    import { enhance } from '$app/forms';

    import close from "$lib/assets/close.svg"
    import bg from "$lib/assets/application_modal_bg.png"
    import { isSubmit } from "$lib/client/PostApplicationStore"
    
    export let showModal = false;
    export let data;
    let dialog

    let form
	$: if (dialog && showModal) dialog.showModal();




</script>

{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <dialog
        bind:this={dialog}
        on:close={() => (showModal = false)}
        on:click|self={() => dialog.close()}

    >
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="dialog_content">
            
            <div class="image_block">
                <img src="{ bg }" alt="">
                <div class="application_title">
                    <h2 class="header2">Давайте обсудим задачу</h2>
                    <p class="main_sm_14 gray">Проведём созвон, где расскажем о нас, обсудим задачу и выстроим планы</p>
                </div>
                <button on:click={() => {dialog.close(),showModal=false}} type="button"><img class="close" src="{ close }" alt=""></button>
            </div>
            <form action="?/sendApp" method="post" use:enhance bind:this={form} on:submit={()=>{$isSubmit = true;dialog.close();showModal=false}}>
                <input type="hidden" name="page" value="Главная">
                <input type="hidden" name="source" value="Модальное окно в хидере">
                <input type="hidden" name="utm" value="{JSON.stringify(data?.utm)}">
                <div class="input_place">
                    <h4 class="header4 total_black">Имя</h4>
                    <input type="text" name="name" placeholder="Как к вам обращаться?" required>
                </div>
                <div class="input_place">
                    <h4 class="header4 total_black">Компания</h4>
                    <input type="text" name="company" placeholder="Необязательное поле">
                </div>
                <div class="input_place">
                    <h4 class="header4 total_black">Телефон</h4>
                    <input type="text" name="phone" placeholder="+7 (900) 000–00–00" required>
                </div>
                <button type="submit"  class="main_sm_16 main_btn_black">Оставить заявку</button>
            </form>
        </div>
    </dialog>
{/if}

<style>
    .total_black{
        color: var(--Neutral_1000);
    }
    .gray{
        color: #A3A3A3;
    }
	dialog {
		width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
	}
    .dialog_content{
        background-color: white;
        max-width: 380px;
        border-radius: 16px;
        padding: 8px;
    }
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.8);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
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
	button {
		display: block;
	}
    .close{
        width: 26px;
        height: 26px;
        cursor: pointer;
    }
    .image_block{
        height: 187px;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        
    }
    .image_block img:not(.close){
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        filter: brightness(40%);
        z-index: 1;
    }
    .image_block button{
        position: absolute;
        width: 26px;
        height: 26px;
        right: 8px;
        top: 8px;
    }
    .image_block *:not(image){
        z-index: 2;
    }
    .application_title{
        display: flex;
        flex-direction: column;
        justify-content: end;
        row-gap: 12px;
        align-items: center;
        height: 100%;
        padding: 12px;
    }
    .application_title *{
        text-align: center;
    }
    form{
        padding: 16px 16px 8px 16px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    .input_place{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    input[type="text"]{
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 9px;
        outline: none;
        border-radius: 12px;
        width: 100%;
    }
    form button{
        margin-left: 0;
        margin-top: 12px;
    }
</style>