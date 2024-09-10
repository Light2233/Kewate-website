<script lang="ts">
    import { fade } from 'svelte/transition';

    let password: string = "";
    let success: boolean;

    async function postJoin() {
        const res = await fetch("/join", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({password})
        })

        const jsonRes = await res.json();
        success = jsonRes?.success;
    }

</script>

<main class="">
    <h4 class="header4 total_black">Dev-password</h4>
    <input name="dev-pass" type="password" placeholder="" required bind:value={password}>

    {#if success == false}
        <p style="color:red;" transition:fade>Wrong password</p>
    {:else if success == true}
        <p style="color: yellowgreen;">Access granted</p>
        <a href="/" style="text-decoration: underline;">go to main page</a>
    {/if}

    <button class="main_sm_16 main_btn_black" type="submit" on:click={postJoin}>join</button>
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
    input {
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 12px;
        outline: none;
        border-radius: 12px;
        width: 100%;
        max-width: 500px;
        margin-top: 8px;
    }
</style>