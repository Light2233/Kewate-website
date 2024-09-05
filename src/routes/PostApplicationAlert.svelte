<script lang="ts">
    import { slide } from "svelte/transition";
    import notificationStore from "$lib/client/notificationStore"

    let successMessage = "Заявка успешно отправлена - мы перезвоним Вам в течение дня";

    $: if($notificationStore.show) {
        setTimeout(()=>{
            $notificationStore.show = false; 
        },3000)
    }

</script>

{#if $notificationStore.show}
    <aside class="post_application" transition:slide on:animationend={() => {$notificationStore.readed = true}} class:error={!$notificationStore.success} class:successfull={$notificationStore.success}>
        <p class="main_sm_16" style="text-align: center;">{$notificationStore.success ? successMessage : $notificationStore.message}</p>
    </aside>
{/if}


<style>
    .post_application{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .error{
        background: #EE1E1E;
    }
    .successfull{
        background: #19C68D;
    }
    p{
        text-align: center;
    }
</style>