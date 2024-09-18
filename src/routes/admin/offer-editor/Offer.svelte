<script lang="ts">
    import trash from "$lib/assets/trash.svg"
    import { serviceVerboseMap,formatDate } from "$lib/client/formarters"
    import ConfirmPopup from "../ConfirmPopup.svelte";
    export let offerData;

    let confirm = false;
    let deleteKP = false;

    $: if(!confirm) deleteKP = false;

    let popupTitle = '';
    let desc = ''

    let form: HTMLFormElement;

    function popupOpen(){
        popupTitle = 'Удаление';
        desc = `Вы действиетльно хотите удалить ${offerData.name} ?`;
        confirm=!confirm;
        deleteKP=true;
    }


    function otpravka(){
        form.submit()
    }
</script>

<ConfirmPopup bind:confirm {deleteKP} title={popupTitle} description={desc} on:confirm={otpravka}/>
<tr> 
    <td colspan="3">{offerData.name}</td>
    <td colspan="4">{ formatDate(offerData.createdAt) }</td>
    <td colspan="2">{serviceVerboseMap.get(offerData.service)}</td>
    <td colspan="2">commerce/{offerData.url}</td>
    <td colspan="1">
        <a href="/commerce/{offerData.url}">Перейти</a>
        <button>Изменить</button>
        <form action="?/deleteOffer" method="post" on:submit|preventDefault={popupOpen} bind:this={form}>
            <input type="hidden" name="id" value="{offerData.id}">
            <button type="submit" class="delete" ><img src="{trash}" alt=""></button>
        </form>
    </td>
</tr>


<style>
    tr{
        width: 100%;
        padding: 16px 50px;
        height: 68px;
    }
    td{
        font-size: 16px;
        font-weight: 600;
        line-height: 17.6px;
        height: 100%;
    }
    td:last-child{
        display: flex;
        justify-content: end;
        align-items: center;
        column-gap: 8px;
        height: 100%;
        height: 68px;
    }
    
    a:not(.delete),button{
        padding: 8px 10px;
        border: 1px solid var(--Neutral_300);
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
        text-align: left;
        color: black;
    }
    .delete{
        background: #FFDDDC;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0;
    }
    .delete img{
        width: 20px;
        height: 20px;

    }

</style>

