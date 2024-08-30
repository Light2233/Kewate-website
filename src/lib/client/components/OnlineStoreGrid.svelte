
<script>

</script>

<div class="gantt-chart-container">
    <div class="columns">
        {#each Array(15) as _, i}
            <div class="column" style="left: {(i) * 77}px;" class:last_column={i==14}>
                
            </div>
        {/each}
        {#each Array(8) as _, i}
            <div class="column" style="left: {(i) * 77*2}px;">
                <div class="column-number">{ i+1 }</div>
            </div>
        {/each}
    </div>
    <div class="gantt-chart">
        <div class="bar"><p class="main_sm_16 total_black">Исследование рынка</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Job Stories и сегменты аудитории</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Дизайн-концепция</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Дизайн</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Разработка</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Авторский надзор</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Настройка Seo</p></div>
        <div class="bar"><p class="main_sm_16 total_black">Настройка сайта</p></div>
        <div class="bar last"><p class="main_sm_16 total_black">Сдача проекта</p></div>
    </div>
</div>


<style>

.gantt-chart-container {
        width: 100%;
        white-space: nowrap;
        position: relative;
        margin-top: 64px;
        height: 513px;
        overflow: auto;
    }

    .gantt-chart {
        position: relative;
        display: inline-block;
        width: 1180px;
        top: 40px;
    }

    /* Стили для столбцов */
    .column {
        position: absolute;
        height: 95%;
        width: 78px;
        bottom: 0;
        border-left: 1px solid #4a4a4a;
        color: #ffffff;
        text-align: center;
    }
    .columns{
        position: absolute;
        width: 99%;
        height: 483px;
        left: 10px;
        z-index: 2;
    }
    .last_column{
        border-right: 1px solid #4a4a4a;
    }
    .column-number {
        position: absolute;
        top: -20px;
        width: 100%;
        left: -5px;
        font-size: 14px;
        color: var(--Neutral_600);
        text-align: start;
    }
   
    .column:nth-child(16) .column-number{
        left: -3px;
    }
    .bar {
        display: inline-block;
        position: absolute;
        height: 44px;
        border-radius: 14px;
        background-color: #ffffff;
        color: black;
        padding: 16px 0px 16px 16px;
        display: flex;
        align-items: center;
        font-size: 14px;
        white-space: nowrap;
        z-index: 99;

    }
    .bar.last {
        background-color: #6AEEC7;
    }
    .bar:not(.bar:last-child) p{
        font-weight: 400;
        white-space: nowrap;
        position: relative;
        z-index: 1;
        mix-blend-mode: difference;
        color: white;
    }
    .bar:last-child p{
        font-weight: 700;
    }

    .bar:nth-child(1) { left: 0px; top: -20px; width: 94px; }
    .bar:nth-child(2) { left: 0px; top: 35px; width: 94px; }
    .bar:nth-child(3) { left: 0px; top: 90px; width: 177px; }
    .bar:nth-child(4) { left: 190px; top: 90px; width: 649px; }
    .bar:nth-child(5) { left: 340px; top: 145px; width: 661px; }
    .bar:nth-child(6) { left: 590px; top: 200px; width: 579px; }
    .bar:nth-child(7) { left: 995px; top: 255px; width: 86px; }
    .bar:nth-child(8) { left: 995px; top: 310px; width: 86px; }
    .bar:last-child { left: 995px; top: 365px; width: 180px; }
    
</style>