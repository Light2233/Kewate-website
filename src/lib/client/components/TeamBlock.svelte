<script>
    export let team
</script>


<section class="command dark-background" id="command">
    <aside class="command_info">
        <div class="info_block">
            <h3 class="display3 total_black">Наши специалисты решат задачи</h3>
            <p class="main_sm_16 total_black op50">Команда специалистов, которые показывают явный результат </p>
        </div>
    </aside>
    <div class="command_table">
        {#each team as person}
            <div class="person_block">
                <div class="image_block">
                    <img src="{ person.url }" alt="">
                </div>
                <div class="person_info">
                    <h3 class="header3 total_black">{person.name}</h3>
                    <p class="main_sm_14 total_black op50">{person.speciality}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="less">
    .op50{
        opacity: 0.5;
    }
    .image_block{
        width: 280px;
        height: 320px;
        background: var(--Neutral_900);
        border-radius: 16px;
        @media (max-width:980px) {
            height: 250px;
            max-width: 250px;
        }
        @media (max-width: 553px) {
            height: 180px;
            width: 100%;
        }
    }
    .command{
        display: flex;
        justify-content: space-between;
        padding: 150px 50px;
        max-width: 1280px;
        margin: 0 auto;
        column-gap: 20px;
        @media (max-width:1180px) {
            flex-direction: column;
        }
        @media (max-width:700px) {
            padding: 40px 16px;
        }
        
    }
    .info_block{
        height: 390px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 128px;
        @media (max-width:1180px) {
            height: fit-content;
            row-gap: 5px;
        }
    }
    .command_info{
        width: 100%;
    }
    .command_table{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 40px 20px;
        @media (max-width:1180px) {
            grid-template-columns: repeat(3,1fr);
            margin-top: 40px;
        }
        @media (max-width:900px) {
            grid-template-columns: repeat(2,1fr);
        }
        @media (max-width:400px) {
            gap: 24px 8px;
        }
    }
    .person_block{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        @media (max-width:900px) {
            align-items: center;
        }
        @media (max-width:400px) {
            row-gap: 16px;
        }
    }
    .person_info{
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        @media (max-width:400px) {
            row-gap: 12px;
        }
    }
    .person_block h3{
        @media (max-width:400px) {
      wwww      font-size: 20px;
            line-height: 24px;
        }
    }
    .person_block .image_block{
        border-radius: 16px;
        overflow: hidden;
    }
    .person_block .image_block img{
        object-fit: cover;
        width: 100%;
        height: 100%; 
    }
    .person_block:nth-child(2) .image_block img{
        transform: scale(2);  
    }
    .person_block:nth-child(4) .image_block img{
        transform: scale(1.5);  
    }
    .person_block:nth-child(5) .image_block img{
        transform: scale(1.3);
        object-position: 50%;  
    }
</style>