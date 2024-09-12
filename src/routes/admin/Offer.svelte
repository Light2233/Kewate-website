<script lang="ts">
    import trash from "$lib/assets/trash.svg"
</script>



<tr>
    <td colspan="3">Николай / Kewate</td>
    <td colspan="4">28.08.2024</td>
    <td colspan="2">Одностраничный сайт</td>
    <td colspan="2">commerce/nikolay/kewate</td>
    <td colspan="1">
        <button>Перейти</button>
        <button>Изменить</button>
        <button class="delete"><img src="{trash}" alt=""></button>
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
    
    button:not(.delete){
        padding: 8px 10px;
        border: 1px solid var(--Neutral_300);
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
        text-align: left;
    }
    .delete{
        background: #FFDDDC;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .delete img{
        width: 20px;
        height: 20px;
    }
</style>

