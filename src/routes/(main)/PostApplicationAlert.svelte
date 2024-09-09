<script lang="ts">
    import { slide } from "svelte/transition";
    import { createEventDispatcher } from 'svelte'
    import { onMount } from "svelte";

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("mounted");
    })


    let successMessage = "Заявка успешно отправлена - мы перезвоним Вам в течение дня";
    export let success: boolean;
    export let message: string | undefined;

    let show: boolean;
    let showDelay = 3000; // Время показа самого алёрта в мс

    // При свитче success на false или true показываем окно с ошибкой и тут же ставим таймаут на исчизновение
    $: {
        if (success !== undefined) {
            show = true;
            dispatch("shown");
            
            setTimeout(() => {
                show = false
            }, showDelay);
        }
    }

</script>

{#if show}
    <aside class="post_application" transition:slide class:error={ !success } class:successfull={ success }>
        <p class="main_sm_16" style="text-align: center;">{ success ? successMessage : message }</p>
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
        z-index: 9999999;
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