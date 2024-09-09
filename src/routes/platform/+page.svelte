
<script>
    let tabs =[
        "Активные",
        "Завершенные"
    ]
    let currentTab = tabs[0];
</script>
<header>
    <div class="header_content">
        <h1 class="header3 total_black">Проекты</h1>
        <div class="tabs">
            {#each tabs as tab}
                <button class:tab_active={tab==currentTab} on:click={()=>{currentTab=tab}}>{tab}</button>
            {/each}

        </div>
    </div>
    
</header>


<style lang="less">
    header{
        position: fixed;
        top: 64px;
        padding: 16px 0px 0 0;
        width: 100%;
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

    .tabs{
        display: flex;
        align-items: end;
        height: 100%;
    }
    .tabs button{
        padding: 13.5px 0px;
        width: 127px;
        height: 44px;
        font-size: 14px;
        font-weight: 500;
        line-height: 16.8px;
        cursor: pointer;
        position: relative;
    }
    .tab_active::after{
        content: "";
        height: 1px;
        width: 100%;
        background: var(--Neutral-800, #0A0A0A);
        position: absolute;
        bottom: -1px;
        right: 0;
    }
</style>