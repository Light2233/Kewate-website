<script lang="ts">
    import '../app.css'
    import logo from '$lib/assets/logo.svg'
</script>


<header>
    <div class="header_content">
        <div class="logo"><img src="{logo}" alt=""></div>
        <div class="nav">
            <a href="" class="nav_link sub_h3">Проекты</a>
            <a href="" class="nav_link sub_h3">Услуги</a>
            <a href="" class="nav_link sub_h3">О Kewate</a>
        </div>
        <div class="application_btn">
            <button class="sub_h3 default_btn">Обсудить проект</button>
        </div>
    </div>
</header>

<slot/>


<style>
    /* header */

    header{
        position: fixed;
        width: 100%;
        max-height: 84px;
        z-index: 99;
    }
    .header_content{
        max-width: 686px;
        margin: 0 auto;
        margin-top: 20px;
        border: 1px solid var(--light);
        box-shadow: 0px 4px 16px 0px #0B152914;
        border-radius: 20px;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--white);
    }
    .application_btn button{
        background: var(--main);
        color: var(--white);
    }
    .nav{
        display: flex;
        column-gap: 32px;
        align-items: center;
    }
    .nav_link{
        color: var(--gray);
    }
</style>