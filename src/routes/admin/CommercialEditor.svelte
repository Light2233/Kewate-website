<script lang="ts">
    import { fade } from "svelte/transition";
    import Offer from "./Offer.svelte";
    import CreateOffer from "./CreateOffer.svelte";
    let activeKP = 10
    let createOffer = false
    let currentStep : number
    $: if(currentStep==0) createOffer = false;
</script>

{#if currentStep!=6}
    <header>
        <div class="header_content">
            {#if !createOffer}
                <h1 class="header3 total_black">Активно {activeKP} КП</h1>
                <button class="main_btn_black" on:click={()=>{createOffer=true}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#0A0A0A"/>
                        <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#0A0A0A"/>
                    </svg>
                    Создать КП
                </button>
            {:else}
                <button class="header3 total_black" on:click={()=>{createOffer= false}}>Создать новое КП</button>
            {/if}
        </div>
    </header>
{/if}
{#if !createOffer}
    <main in:fade>
        <table>
            <thead>
                <th colspan="3">Клиент / Компания</th>
                <th colspan="4">Создано</th>
                <th colspan="2">Услуга</th>
                <th colspan="2">Адрес</th>
                <th colspan="4"></th>
            </thead>
            <tbody>
                {#each {length: activeKP} as _}
                    <Offer/>
                {/each}
            </tbody>
        </table>
    </main>
{:else}
    <CreateOffer bind:currentStep />
{/if}

<style lang="less">
    .header3{
        font-size: 18px;
    }
    header{
        position: fixed;
        top: 64px;
        padding: 16px 0px 0 0;
        width: 100%;
        background: var(--Neutral_50, #FAFAFA);
        z-index: 999;

    }
    .header_content{
        padding: 0px 50px 0px 50px;
        width: 100%;
        border-bottom: 1px solid var(--Neutral_200, #E5E5E5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 62px;
    }
    button:not(.header3){
        display: flex;
        align-items: center;
        column-gap: 6px;

        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
        padding: 8px 10px;
    }
    svg{
        width: 20px;
        height: 20px;
    }
    path{
        fill: white;
    }
    table{
        width: 100%;
    }
    tbody{
        overflow-y: scroll;
        height: 100%;
    }

    main{
        padding: 0 50px;
        margin-top: 180px;
        overflow: hidden;
    }
    th{
        font-family: Manrope;
        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
        text-align: left;
        color: #919191;
    }
</style>