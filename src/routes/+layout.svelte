<script lang="ts">
    import '../app.css'
    import logo from '$lib/assets/kewate_logo.svg'
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


<style>
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
</style>