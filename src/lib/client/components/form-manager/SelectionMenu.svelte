<script lang="ts">
    import { slide } from "svelte/transition";
    import { serviceVerboseMap } from "$lib/client/formarters";
    export let selectionValue = "landing";
    let dropMenu = false;
</script>

<button class="select" type="button" on:click={()=>{dropMenu=!dropMenu}} class:drop_active={dropMenu}>{serviceVerboseMap.get(selectionValue)} 
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00004 6.95276L0.467285 1.42027L1.46054 0.447266L6.00004 4.98652L10.5395 0.447266L11.5328 1.42027L6.00004 6.95276Z" fill="white"/>
    </svg>          
</button>
{#if dropMenu}
    <div class="drop_menu" transition:slide>
        {#each serviceVerboseMap as item}
            <button type="button" on:click={()=>{selectionValue= item[0]; dropMenu= false}} >{item[1]}</button>
        {/each}
    </div>
{/if}
