<script lang="ts">
    import '../app.css'
    import logo from '$lib/assets/kewate_logo.svg'
    import nikolai from "$lib/assets/nikolai.svg"
    import tg from "$lib/assets/tg.svg"
</script>

<header>
    <div class="header_content">
        <div class="logo">
            <img src="{ logo }" alt="">
        </div>
        <div class="nav">
            <a href="#" class="nav_link">Услуги</a>
            <a href="#" class="nav_link">Кейсы</a>
            <a href="#" class="nav_link">О студии</a>
            <a href="#" class="nav_link">Команда</a>
        </div>
        <button class="main_sm2">Обсудить проект</button>
    </div>
</header>

<slot/>

<footer>
    <div class="footer_content">
        <div class="contacts">
            <div class="">
                <p class="header2">Обсудить проект</p>
                <div class="tg">
                    <div class="nikolai">
                        <img src="{ nikolai }" alt="">
                        <p class="main_sm2">Николай — ответственный за коммуникацию</p>
                    </div>
                    <button class="tg_link">
                        Написать в Telegram
                        <img src="{  tg }" alt="">
                    </button>
                </div>
            </div>
            <p class="main_sm none">Ответим в течение дня</p>
        </div>
        <div class="line"></div>
        <div class="company_info">
            <div class="about_company">
                <p class="main_sm2 gray">© 2024, Kewate. Все права защищены</p>
                <div class="">
                    <p class="main_sm2 gray">Общество с ограниченной ответственностью «Kewate»</p>
                    <p class="main_sm2 gray">ОГРН 10103013013010301, юридический адрес 19419491</p>
                    <p class="main_sm2 gray">г.Москва, ул. Арбузная д.228</p>
                </div>
            </div>
            <div class="policy">
                <a href="#" class=" main_sm2 gray">Политика конфиденциальности</a>
                <a href="#" class=" main_sm2 gray">Реквизиты</a>
            </div>
        </div>
    </div>
</footer>


<style lang="less">

    .gray{
        color: #969696;
    }

    /* Header */
    header{
        margin: 0 auto;
    }
    .header_content{
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 50px;
        @media (max-width:800px) {
            padding: 16px 16px; 
            
        }
    }
    .nav{
        flex-grow: 2;
        display: flex;
        align-items: center;
        justify-content: end;
        column-gap: 40px;
        margin-right: 20px;
        @media (max-width:800px) {
            column-gap: 20px;
        }
        @media (max-width:700px) {
            display: none;
        }
    }
    .nav_link{
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: var(--dark);
        padding: 6px 0px;
        
    }
    header button{
        background: var(--dark);
        border-radius: 12px;
        padding: 8px 16px;
        color: #ffff;
        cursor: pointer;
    }
    header button:hover{
        background: rgba(41, 45, 50, 0.8);
    }
    header button:active{
        background: rgba(41, 45, 50, 0.6);
    }

    /* Footer */

    .footer_content{
        max-width: 1280px;
        margin: 0 auto;
        background: white;
        border-radius: 32px 32px 0px 0px;
        padding: 40px 50px;
        @media (max-width:800px) {
            padding: 40px 16px;
        }
    }
   
    .none{
        @media (max-width:800px) {
            display: none;
        }
    }
    .nikolai img{
        height: 48px;
        width: 48px;
    }
    .contacts div:first-child:not(.nikolai){
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width:800px) {
            flex-direction: column;
            align-items: baseline;
        }

    }
    .tg{
        display: flex;
        column-gap: 20px;
        @media (max-width:800px) {
            flex-direction: column;
            align-items: baseline;
        }
    }
    .nikolai{
        display: flex;
        column-gap: 12px;
        width: 100%;
        @media (max-width:800px) {
            flex-direction: row;
            align-items: center;
            margin-top: 40px;
            margin-bottom: 20px;
        }
        
    }
    .tg_link{
        max-width: 280px;
        width: 100%;
        display: flex;
        padding: 13px 0px;
        justify-content: center;
        column-gap: 10px;
        background: #EDF7F5;
        align-items: center;
        border-radius: 16px;
        max-height: 51px;
        cursor: pointer;
        @media (max-width:420px) {
            max-width: unset;
            width: 100%;
        }
    }
    .tg_link img{
        height: 20px;
        width: 20px;
    }
    .line{
        content: "";
        width: 100%;
        height: 1px;
        background: #00000033;
        margin: 40px 0px;
    }
    .company_info{
        display: flex;
        justify-content: space-between;
        @media (max-width:800px) {
            flex-direction: column;
            align-items: baseline;
            row-gap: 80px;
        }
    }
    .about_company{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        
    }
    .about_company p{
        @media (max-width:420px) {
            font-size: 14px !important;
            line-height: 17.5px;
        }
    }
    .about_company div{
        display: flex;
        flex-direction: column;
        row-gap: 4px;
    }
    .policy{
        display: flex;
        flex-direction: column;
        align-items: end;
        row-gap: 8px;
        @media (max-width:800px) {
            flex-direction: column;
            align-items: baseline;
        }
        
    }
    .policy a{
        @media (max-width:420px) {
            font-size: 14px !important;
            line-height: 17.5px ;
        }
    }
    

</style>