<script lang="ts">
    import { enhance } from '$app/forms';
    import { imask } from '@imask/svelte';
    import notificationStore from "$lib/client/notificationStore"

    import close from "$lib/assets/close.svg"
    import { isSubmit } from "$lib/client/PostApplicationStore"

    export let data;
    
    export let bg: string;
    export let page : string  = '';
    export let showModal : boolean = false;

    let dialog: HTMLDialogElement;

    let form : HTMLFormElement
	$: if (dialog && showModal) dialog.showModal();

    const sendApp = async () => {
        var formData = new FormData(form);
        var data = Object.fromEntries(formData);

        const response = await fetch("/api/sendApp", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const jsonResponse : {
            success: boolean,
            message?: string
        } = await response.json();

        $notificationStore.success = jsonResponse.success;
        $notificationStore.message = jsonResponse.message;
        $notificationStore.show = true;
        if (jsonResponse.success) 
            form.reset()
    }



    
    import { options } from "$lib/client/formarters"
    
    let value : string = '';

</script>

{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <dialog
        bind:this={dialog}
        on:close={() => (showModal = false)}
        on:click|self={() => dialog.close()}

    >
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <main class="dialog_content">
            
            <div class="image_block" class:min_height={page!="/"}>
                <img src="{ bg }" alt="">
                <div class="application_title">
                    <h2 class="header2">{page == "/" ? "Давайте обсудим задачу" : "Оставить заявку"}</h2>
                    <p class="main_sm_14 gray">{page == "/" ? "Проведём созвон, где расскажем о нас, обсудим задачу и выстроим планы" : "Мы свяжемся с Вами в течение дня"} </p>
                </div>
                <button on:click={() => {dialog.close(),showModal=false}} type="button"><img class="close" src="{ close }" alt=""></button>
            </div>
            <form method="post" on:submit|preventDefault={sendApp} bind:this={form}>
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
                    <input type="text" name="phone" placeholder="+7 (900) 000–00–00" required bind:value={value} use:imask={options}>
                </div>
                <button type="submit"  class="main_sm_16 main_btn_black">Оставить заявку</button>
            </form>
        </main>
    </dialog>
{/if}

<style lang="less">
    
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
        width: 390px;
        border-radius: 16px;
        padding: 8px;
        margin: 0 16px;
        @media (max-width:340px) {
            padding: 4px;
        }
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
        height: 179px;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        @media (max-width:400px) {
            height: 170px;
        }
        
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
        row-gap: 2px;
        align-items: center;
        height: 100%;
        padding: 16px;
    }
    .application_title p{
        @media (max-width:340px) {
            line-height: 15.6px;
            font-weight: 500;
        }
    }
    .application_title *{
        text-align: center;
    }
    form{
        padding: 16px 16px 16px 16px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        @media (max-width:340px) {
            padding: 16px 8px 12px 8px;
        }
    }
    form h4{
        @media (max-width:340px) {
            font-size: 12px;
            line-height: 14.4px;
        }
    }
    .input_place{
        display: flex;
        flex-direction: column;
        row-gap: 11px;
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
    .min_height{
        max-height: 162px;
    }
</style>