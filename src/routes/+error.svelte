<script lang="ts">
    import { page } from "$app/stores";

    
</script>

<svelte:head>
    <title>Oops</title>
</svelte:head>

<main>
    <h1 class="display1 total_black">Error { $page.status }</h1>
    <p class="main_sm_16 total_black">{ $page?.error?.message ?? "No message"} </p> 
</main>



<style>
    main{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        row-gap: 16px;
    }
    :global(body,html){
        height: 100%;
    }
</style>