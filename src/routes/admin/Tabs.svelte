<script lang="ts">

    export let tabsList : Tab[] = [];
    export let activeTab;
</script>


<div class="tab_content">
    {#each tabsList as tab}
        {#if activeTab == tab.number}
            <div class="box">
                <svelte:component this={tab.component}/>
            </div>
        {/if}
    {/each}
</div>
