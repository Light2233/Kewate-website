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
            <p class="main_sm">Ответим в течение дня</p>
        </div>
        <div class="line"></div>
        <div class="company_info">

        </div>
    </div>
</footer>


<style lang="less">
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
    }
    .nav{
        flex-grow: 2;
        display: flex;
        align-items: center;
        justify-content: end;
        column-gap: 40px;
        margin-right: 20px;
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
    }

    /* Footer */

    .footer_content{
        max-width: 1280px;
        margin: 0 auto;
        background: white;
        border-radius: 32px 32px 0px 0px;
        padding: 40px 50px;
    }
    .nikolai{
        display: flex;
        column-gap: 12px;
        width: 100%;
    }
    .nikolai img{
        height: 48px;
        width: 48px;
    }
    .contacts div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tg{
        display: flex;
        column-gap: 20px;
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

</style>