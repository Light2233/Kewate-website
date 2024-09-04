<script lang="ts">
    import { imask } from '@imask/svelte';
    import notificationStore from "$lib/client/notificationStore"

    import nikolay_big from "$lib/assets/nikolay_big.png";

    export let utm;

    let form : HTMLFormElement;
    let phoneNumber : string;
    let budget = ["До 50 тыс. ₽", "50 – 200 тыс. ₽", "200 – 500 тыс. ₽", "от 500 тыс. ₽"];
    let budgetSelected : string;


    let innerWidth : number;

    const sendApp = async () => {
        var formData = new FormData(form);
        var data = Object.fromEntries(formData);

        const response = await fetch("/api/sendApp", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const jsonResponse : {
            success: boolean,
            message?: string
        } = await response.json();

        $notificationStore.success = jsonResponse.success;
        $notificationStore.message = jsonResponse.message;
        $notificationStore.show = true;
        form.reset()
    }


    const options = {
        mask: '{+7} (000) 000-00-00',
        lazy: true
    };
</script>

<svelte:window bind:innerWidth={innerWidth}/>

<section class="application dark-background">
    <div class="ceo">
        <div class="ceo_info">
            <div class="ceo_image">
                <img src="{ nikolay_big }" alt="">
            </div>
            <div class="ceo_desc">
                <h2 class="header2 total_black">Николай Ковальчук</h2>
                <p class="main_sm_16 total_black">— CEO Kewate, ответственный за коммуникацию</p>
            </div>
        </div>
        <div class="contacts_div">
            {#if innerWidth<= 980}
                <h3 class="header3 total_black">Контакты</h3>
            {/if}
            <div class="contacts">
                <a href="mailto: main@kewate.ru" class="main_sm_16 total_black" style="text-decoration: underline;">main@kewate.ru</a>
                <a href="tel: +79850123407" class="main_sm_16 total_black" style="text-decoration: underline;">+7 985 012-34-07</a>
            </div>
        </div>
    </div>
    <form method="post" on:submit|preventDefault={sendApp} bind:this={form}>
        <input type="hidden" name="page" value="Главная">
        <input type="hidden" name="source" value="Последний блок с Колей">
        <input type="hidden" name="utm" value="{JSON.stringify(utm)}">
        <div class="application_title">
            <h3 class="display3 total_black">Давайте обсудим Вашу задачу</h3>
            <p class="main_sm_16 gray">Проведём созвон, где расскажем о нас, обсудим задачу и выстроим планы</p>
        </div>
        <div class="application_form">
            <div class="row">
                <p class="main_sm_16 gray" style="font-weight: 600;">Основное</p>
                <div class="input_place">
                    <div class="">
                        <h4 class="header4 total_black">Имя</h4>
                        <input name="name" required type="text" placeholder="Как к вам обращаться?">
                    </div>
                    <div class="">
                        <h4 class="header4 total_black">Компания</h4>
                        <input name="company" type="text" placeholder="Необязательное поле">
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="main_sm_16 gray" style="font-weight: 600;">Контакты</p>
                <div class="input_place">
                    <div class="">
                        <h4 class="header4 total_black">Телефон</h4>
                        <input name="phone" type="text" placeholder="+7 (900) 000–00–00" required bind:value={phoneNumber} use:imask={options}>
                    </div>
                    <div class="">
                        <h4 class="header4 total_black">E-mail</h4>
                        <input name="email" type="text" placeholder="Необязательное поле">
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="main_sm_16 gray" style="font-weight: 600;">Бюджет</p>
                <div class="budget">

                    {#each budget as money ,index}
                        <div class="budget_section main_sm_16 total_black" class:budget_selected={budgetSelected === money}>
                            <input type="radio" name="budget" value="{money}" bind:group={budgetSelected} required>
                            {money}
                        </div>
                        {#if index+1 != budget.length}
                            <div class="line"></div>
                        {/if}
                    {/each}
                    
                </div>
            </div>
        </div>
        <div class="send_app">
            <div class="empty"></div>
            <div class="send_app_btn">
                <button class="main_sm_16 main_btn_black" type="submit">Оставить заявку</button>
                <p class="main_sm_16 gray">Мы перезвоним Вам в течение дня</p>  
            </div>
        </div>
    </form>
</section>

<style lang="less">
    .gray{
        color: #969696;
    }

    .application{
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 50px;
        display: flex;
        justify-content: space-between;
        padding-top: 100px;
        padding-bottom: 100px;
        column-gap: 120px;
        @media (max-width:980px) {
            flex-direction: column-reverse;
        }
        @media (max-width:700px) {
            padding: 100px 16px;
        }
    }
    .ceo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 20px;
        width: 30%;
        @media (max-width:980px) {
            width: 100%;
            margin-top: 64px;
            row-gap: 32px;
        }
    }
    .ceo_info{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        @media (max-width:980px) {
            flex-direction: row;
            column-gap: 16px;
        }
    }
    .ceo_image{
        width: 180px;
        height: 180px;
        @media (max-width:980px) {
            width: 50px;
            height: 50px;
        }
    }
    .ceo_desc h2{
        margin-bottom: 8px; 
    }
    .contacts{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
    }
    .contacts a:hover{
        opacity: 0.8;
    }
    .contacts_div{
        @media (max-width:980px) {
            display: flex;
            flex-direction: row;
            column-gap: 16px;
            justify-content: space-between;
        }  
    }
    .application input[type="text"]{
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 12px;
        outline: none;
        border-radius: 12px;
        width: 100%;
        margin-top: 8px;
    }
    form{
        display: flex;
        flex-direction: column;
        row-gap: 64px;
        width: 100%;
        max-width: 780px;
        @media (max-width:980px) {
            max-width: unset;
        }
    }
    .application_title{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        align-items: end;
        @media (max-width:1250px) {
            align-items: start;
        }
    }
    .application_title h3{
        margin-right: 10px;
    }
    .application_form{
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        
    }
    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width:1250px) {
            flex-direction: column;
            align-items: start;
            row-gap: 12px;
        }
    }
    .row p{
        flex-grow: 2;
    }
    .input_place{
        flex-grow: 3;
        display: flex;
        column-gap: 28px;
        justify-content: space-between;
        @media (max-width:1250px) {
            width: 100%;
        }
        @media (max-width:500px) {
            flex-direction: column;
            row-gap: 20px;
        }
    }
    .input_place div{
        width: 100%;
    }
    .budget{
        display: flex;
        align-items: center;
        flex-grow: 2;
        height: 100%;
        justify-content: end;
        max-width: 590px;
        @media (max-width:1250px) {
            width: 100%;
            max-width: 780px;
        }
        @media (max-width:980px) {
            max-width: 100%;
        }
        @media (max-width:680px) {
            flex-direction: column;
            border: 1px solid var(--Neutral_300);
            border-radius: 16px;
        }
    }
    .budget_section{
        position: relative;
        height: 100%;
        width: 100%;
        max-width: 144px;
        display: flex;
        height: 55px;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--Neutral_300);
        border-bottom: 1px solid var(--Neutral_300);
        text-align: center;
        cursor: pointer;
        font-weight: 650;
        @media (max-width:1250px) {
            max-width: 100%;
        }
        @media (max-width:680px) {
            border: none;
        }
    }
    .budget_section input{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }
    .budget_section:first-child{
        padding: 0px 0px 0px 0px;
        border-radius: 12px 0px 0px 12px;
        border-left: 1px solid var(--Neutral_300);
        @media (max-width:680px) {
            border: none;
            border-radius: 12px 12px 0px 0px;
        }
    }
    .budget_section:last-child{
        padding: 0px 0px 0px 0px;
        border-radius:  0px 12px 12px 0px;
        border-right: 1px solid var(--Neutral_300);
        @media (max-width:680px) {
            border: none;
            border-radius:  0px 0px 12px 12px;
        }
    }
    .line{
        height: 100%;
        width: 1px;
        background: #FAFAFA;
    }
    .budget_selected{
        background: var(--Neutral_1000);
        color: white;
        font-weight: 500;
    }
    .send_app{
        display: flex;
        align-items: center;
        justify-content: end;
        
      
    }
    .empty{
        flex-grow: 3;
        height: 100%;
        @media (max-width:1250px) {
            display: none;
        }
    }
    .send_app_btn{
        display: flex;
        flex-grow: 2;
        align-items: center;
        column-gap: 32px;
        @media (max-width:980px) {
            width: 100%;
            flex-direction: column;
            row-gap: 16px;
        }
    }
    .send_app_btn button{
        @media (max-width:1250px) {
            margin-left: 0;
        }
        @media (max-width:980px) {
            width: 100%;
        }
    }

</style>