<script lang="ts">
    import logo from "$lib/assets/kewate_logo.svg";
    import login_img from "$lib/assets/login_img.png"

    let inputPassword : HTMLInputElement
    let passwordVisibled = false;
    

    function showPass(){
        passwordVisibled = !passwordVisibled
        if(passwordVisibled) {
            inputPassword.type = "text"; 
        }
        else {
            inputPassword.type = "password"
        }
    }
</script>

<main>
    <div class="login">
        <div class="logo">
            <a href="/"><img src="{logo}" alt=""></a>
        </div>
        <form action="">
            <h1 class="header2 total_black">Авторизация</h1>
            <div class="input_place">
                <p class="main_sm_14 total_black">Username</p>
                <input type="text">
            </div>
            <div class="input_place">
                <p>Пароль</p>
                <div class="">
                    <input type="password" bind:this={inputPassword}>
                    <button type="button" on:click={showPass} >
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class:password_visibled={passwordVisibled}>
                            <path d="M12 16.83C9.61001 16.83 7.67001 14.89 7.67001 12.5C7.67001 10.11 9.61001 8.17004 12 8.17004C14.39 8.17004 16.33 10.11 16.33 12.5C16.33 14.89 14.39 16.83 12 16.83ZM12 9.67004C10.44 9.67004 9.17001 10.94 9.17001 12.5C9.17001 14.06 10.44 15.33 12 15.33C13.56 15.33 14.83 14.06 14.83 12.5C14.83 10.94 13.56 9.67004 12 9.67004Z" fill="#DADADA"/>
                            <path d="M12 21.52C8.23999 21.52 4.68999 19.32 2.24999 15.5C1.18999 13.85 1.18999 11.16 2.24999 9.49998C4.69999 5.67998 8.24999 3.47998 12 3.47998C15.75 3.47998 19.3 5.67998 21.74 9.49998C22.8 11.15 22.8 13.84 21.74 15.5C19.3 19.32 15.75 21.52 12 21.52ZM12 4.97998C8.76999 4.97998 5.67999 6.91998 3.51999 10.31C2.76999 11.48 2.76999 13.52 3.51999 14.69C5.67999 18.08 8.76999 20.02 12 20.02C15.23 20.02 18.32 18.08 20.48 14.69C21.23 13.52 21.23 11.48 20.48 10.31C18.32 6.91998 15.23 4.97998 12 4.97998Z" fill="#DADADA"/>
                        </svg>
                    </button>
                    
                </div>
            </div>
            <button type="submit" class="main_btn_black">Войти</button>
        </form>
    </div>
    <div class="img">
        <img src="{login_img}" alt="">
    </div>
</main>




<style lang="less">
    .password_visibled path{
        fill: #7e7e7e;
    }
    main{
        height: 100%;
        display: flex;
    }
    .login{
        width: 43%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;
    }
    .logo {
        position: absolute;
        top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo img{
        width: 92px;
    }
    form{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        width: 50.9%;
    }
    form h1{
        margin-bottom: 16px;
        text-align: center;
    }
    form button[type="submit"]{
        margin-top: 16px;
        margin-left: 0;
        width: 100%;
    }
    .input_place{
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 6px;
    }
    .input_place div{
        width: 100%;
        position: relative;
    }
    .input_place div button{
        position: absolute;
        cursor: pointer;
        right: 12px;
        top: 14px;
    }
    input{
        border: 1px solid var(--Neutral_100, #F5F5F5);
        background:  #FFFFFF;
        padding: 16px 12px;
        border-radius: 12px;
        outline: none;
        width: 100%;
    }
    input:focus{
        border: 1px solid var(--Neutral_300);
    }
    .img{
        flex-grow: 1;
        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

</style>