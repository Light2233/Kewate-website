<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let confirm = false;
    export let deleteKP = false;

    export let title: string;
    export let description: string;

    let dialog : HTMLDialogElement;


    $: if (dialog && confirm) dialog.showModal();

    const dispatch = createEventDispatcher();
    
    function bamcing(){
        dispatch('confirm');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

{#if confirm}
    <dialog
        bind:this={dialog}
        on:close={() => (confirm = false)}
        on:click|self={() => dialog.close()}
    >
        <div class="dialog_content">
            <div class="popup_title">
                <h3 class="header3 total_black">{ title }</h3>
                <p class="main_sm_16 gray">{ description }</p>
            </div>
            <div class="confirm_block">
                <button class="main_btn_white" on:click={()=>{confirm=false}}>Отменить</button>
                <button class="main_btn_black" class:delete={bamcing} >Подтвердить</button>
            </div>
        </div>

    </dialog>
{/if}

<style lang="less">
    .gray{
        color: #B1B1B1;
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
        z-index: 9;
        
	}
    .dialog_content{
        background-color: white;
        width: 300px;
        border-radius: 16px;
        padding: 0;

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
    button{
        margin-left: 0;
    }
    .popup_title {
        display: flex;
        flex-direction: column;
        row-gap: 2px;
        justify-content: center;
        padding: 16px;
    }
    p,h3{
        text-align: center;
    }
    .confirm_block{
        display: flex;
        column-gap: 8px;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-top: 1px solid var(--Neutral_300);
    }
    .confirm_block .main_btn_white{
        background: none;
        border: 1px solid var(--Neutral_300);
    }
    .delete{
        background: #FF2B27;
        border: 1px solid #FF2B27;
    }
</style>