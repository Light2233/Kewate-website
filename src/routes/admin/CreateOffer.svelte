<script lang="ts">
    import { slide,fade } from "svelte/transition";

    export let currentStep = 1;
    let maxStep = 5

    let dropMenu = false
    let services = ["Одностраничный сайт", "Bamcing", "Dancing"]
    let currentService = services[0]


    let lvlCnt = 4
    let getting = 3
</script>

{#if currentStep<6}
    <form>
        <div class="step" in:fade> 
            <p class="step_title gray">Шаг {currentStep} из {maxStep}</p>
            {#if currentStep == 1}
                <div class="step_content" in:fade>
                    <h1 class="header3 total_black">Основная информация</h1>
                    <div class="inputs_content">
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Название КП</p>
                            <input type="text" required>
                            <p class="main_sm_14 gray" >Будет отображаться в админке</p>
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Адрес сайта</p>
                            <input type="text" required>
                            <p class="main_sm_14 gray" >По этому адресу будет доступно КП</p>
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Услуга</p>
                            <button class="select" type="button" on:click={()=>{dropMenu=!dropMenu}} class:drop_active={dropMenu}>{currentService} 
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00004 6.95276L0.467285 1.42027L1.46054 0.447266L6.00004 4.98652L10.5395 0.447266L11.5328 1.42027L6.00004 6.95276Z" fill="white"/>
                                </svg>          
                            </button>
                            {#if dropMenu}
                                <div class="drop_menu" transition:slide>
                                    {#each services as item}
                                        <button type="button" on:click={()=>{currentService = item;dropMenu= false}} >{item}</button>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Имя клиента</p>
                            <input type="text" required>
                        </div>
                    </div>
                    
                </div>
            {:else if currentStep == 2}
                <div class="step_content" in:fade>
                    <h1 class="header3 total_black">Подробнее о задаче</h1>
                    <div class="inputs_content">
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Боль</p>
                            <textarea name="pain" id="" cols="33" required></textarea>
                            <p class="main_sm_14 gray" >Будет отображаться в админке</p>
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Задача</p>
                            <textarea name="task" id="" cols="33" required></textarea>
                            <p class="main_sm_14 gray" >По этому адресу будет доступно КП</p>
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Сфера проекта</p>
                            <input type="text" required>
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Срок разработки</p>
                            <input type="text" required>
                        </div>
                        <div class="input_place">
                            <p class="main_sm_14 total_black">Стоимость работы</p>
                            <input type="text" required>
                        </div>
                    </div>
                    
                </div>
            {:else if currentStep==3}
                <div class="step_content" in:fade>
                    <h1 class="header3 total_black">Опыт работы со сферой<p class="main_sm_16 gray">Большинство пользователей испытывают проблемы с:</p></h1>
                    
                    <div class="inputs_content lvl_content">
                        {#each {length: lvlCnt} as _ , index}
                            <div class="lvl_block">
                                <div class="lvl_title">
                                    #{index+1}
                                    <div class="client_percent">
                                        <p class="main_sm_14 total_black">Процент пользователей</p>
                                        <input type="text" required>
                                    </div>
                                </div>
                                <div class="input_grid">
                                    <div class="input_place">
                                        <p class="main_sm_14 total_black">Название</p>
                                        <textarea name="task" id="" cols="33" required></textarea>
                                    </div>
                                    <div class="input_place">
                                        <p class="main_sm_14 total_black">Описание</p>
                                        <textarea name="task" id="" cols="33" required></textarea>
                                    </div>
                                    <div class="input_place">
                                        <p class="main_sm_14 total_black">Возможные решения</p>
                                        <textarea name="task" id="" cols="33" required></textarea>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                    
                </div>
            {:else if currentStep==5}
                <div class="step_content" in:fade>
                    <h1 class="header3 total_black">Что получит клиент?</h1>
                    
                    <div class="inputs_content lvl_content">
                        {#each {length: getting } as _ , index}
                            <div class="lvl_block">
                                <div class="lvl_title">
                                    #{index+1}
                                </div>
                                <div class="input_grid getting_grid">
                                    <div class="input_place">
                                        <p class="main_sm_14 total_black">Название</p>
                                        <textarea name="task" id="" cols="33" required></textarea>
                                    </div>
                                    <div class="input_place">
                                        <p class="main_sm_14 total_black">Описание</p>
                                        <textarea name="task" id="" cols="33" required></textarea>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                    
                </div>
                
            {/if}
            <div class="buttons">
                {#if currentStep >1}
                    <button type="button" class="main_btn_white prev" on:click={()=>{currentStep--}} in:fade>Назад</button>
                {/if}
                {#if currentStep<5}
                    <button type="button" class="main_btn_black" on:click={()=>{currentStep++}} in:fade>Далее</button>
                {:else}
                    <button type="button" class="main_btn_black" in:fade on:click={()=>{currentStep++}} >Создать КП</button>
                {/if}
            </div>
            
        </div>
    </form>
{:else}
    <div class="create_complete">
        <div class="step" in:fade> 
            <div class="complete_content" in:fade>
                <div class="img_block">
    
                </div>
                <div class="created_complete_title">
                    <h2 class="header2 total_black">КП «Николай Kewate» создано</h2>
                    <p class="main_sm_16 gray">Оно доступно по адресу <br>kewate.ru/commerce/nikolay/kewate</p>
                </div>
                <div class="complete_links">
                    <a href="/admin" class="main_btn_white prev" on:click={()=>{currentStep=0}}>Вернуться обратно</a>
                    <a href="/" class="main_btn_black">Перейти к КП</a>
                </div>
                
            </div>
        </div>
    </div>
    
{/if}
<style lang="less">
    
    form,.create_complete{
        margin-top: 214px;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .step{
        width: fit-content;
        min-width: 780px;
        padding-bottom: 64px;
    }
    .step_title{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.2px;
        color: #0A0A0A;  
    }
    .step_content h1{
        padding: 16px 0px 24px 0px;
        border-bottom: 1px solid var(--Neutral_300);
    }
    button{
        margin-left: 0;
    }
    input[type="text"]{
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 9px;
        outline: none;
        border-radius: 12px;
        width: 100%;
        height: 44px;
        z-index: 1;
    }
    .input_place{
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        width: 100%;
        position: relative;
        z-index: 1;
    }
    .inputs_content{
        margin-top: 32px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
        margin-bottom: 32px;
    }
    .buttons {
        display: flex;
        justify-content: end;
        column-gap: 8px;
    }
    .prev{
        background: none;
        border: 1px solid var(--Neutral_300);
    }
    .select{
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 9px;
        outline: none;
        border-radius: 12px;
        width: 100%;
        text-align: start;
        font-size: 16px;
        font-weight: 500;
        line-height: 17.6px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .select svg{
        width: 20px;
    }
    .select svg path{ 
        fill: #C4C4C4;
    }
    .drop_active{
        border-radius: 12px 12px 0px 0px;
    }
    .drop_menu{
        position: absolute;
        background: var(--Neutral_100);
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        padding: 12px 12px 20px 12px;
        border-radius: 0px 0px 16px 16px;
        border: 1px solid var(--Neutral_300);
        border-top: none;
        width: 100%;
        top: 68px;
    }
    .drop_menu button{
        text-align: start;
        font-size: 16px;
        font-weight: 500;
        line-height: 17.6px;
    }
    textarea{
        outline: none;
        border-radius: 12px;
        min-height: 44px;
        resize: vertical;
        background: var(--Neutral_100);
        border: 1px solid var(--Neutral_300);
        padding: 9px;
        outline: none;
        border-radius: 12px;
        width: 100%;
        height: 44px;
    }
    textarea, input{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 500;
        line-height: 17.6px;
        text-align: left;

    }
    .step_content h1 p{
        padding-top: 12px;
    }
    .gray{
        color: #B1B1B1;
    }
    .input_grid{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
    }
    .input_grid .input_place:first-child{
        grid-column: 1/1;
    }
    .input_grid .input_place:nth-child(2){
        grid-column: 2/2;
    }
    .input_grid .input_place:last-child{
        grid-column: 1/3;
    }
    .lvl_title{
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-family: Manrope;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--Neutral_300);
        border-bottom-style: dashed;
        margin-bottom: 16px;

    }
    .client_percent{
        max-width: 166px;
        flex-direction: column;
        display: flex;
        row-gap: 6px;
    }
    .lvl_content{
        grid-template-columns: 1fr;
        gap: 32px;
    }
    .getting_grid{
        grid-template-columns: repeat(2,1fr);
    }
    .getting_grid .input_place:first-child{
        grid-column: 1/1;
    }
    .getting_grid .input_place:last-child{
        grid-column: 2/2;
    }
    .getting_grid textarea{
        min-height: 98px;
        height: 100%;
    }
    .img_block{
        width: 180px;
        height: 180px;
        background: var(--Neutral_1000);
        border-radius: 16px;
    }
    .complete_links{
        height: 44px;
        display: flex;
        column-gap: 8px;
        justify-content: center;
        align-items: start;
        width: 100%;
    }
    .complete_links a{
        display: flex;
        flex-grow: 1;
        margin-left: 0;
        width: 100%;
        max-width: 186px;
        flex-shrink: 0;
        justify-content: center;
    }
    .complete_content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        row-gap: 37px;
    }
    .created_complete_title .header2{
        font-size: 24px;
        font-weight: 600;
        line-height: 28.8px;
        text-align: center;
    }
    .created_complete_title p{
        text-align: center;
        margin-top: 8px;
    }
</style>