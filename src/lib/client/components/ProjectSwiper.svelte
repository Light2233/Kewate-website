<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
    import 'swiper/css';
    export let projects
</script>

<Swiper 
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={8}
slidesPerView={1.05}
navigation = {
    {nextEl: '.next4',
    prevEl: ".prev4",}
}
scrollbar={{ draggable: false }}
simulateTouch={false}
>
    {#each projects as project , index}
            <SwiperSlide>
                <div class="app">
                                    
                    <div class="img_box">

                    </div>
                    <div class="app_info">
                        <div class="">
                            <h2 class="header2 total_black">{project.name}</h2>
                        </div>
                        <div class="tags">
                            {#each project.tags as tag}
                                <div class="tag main_sm_14 total_black">
                                    {tag}
                                </div>
                            {/each}
                        </div>
                    </div>
                
            </div>
            </SwiperSlide>
    {/each}
</Swiper>

<style lang="less">

    .app{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        height: fit-content;
    }
    .img_box{
        height: 480px;
        border-radius: 16px;
        background-color: var(--Neutral_1000);
        @media (max-width:900px) {
            height: 300px;
        }
    }
    .app_info {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        flex-grow: 1;
        justify-content: space-between;
    }
    .tags{
        display: flex;
        column-gap: 8px;
        margin-top: 12px;
        
    }
    .tag{
        padding: 8px 12px;
        border: 1px solid var(--Neutral_400);
        border-radius: 24px;
        line-height: 16.8px;
        font-weight: 500;
        @media (max-width:600px) {
            padding: 5px 8px;
        }
    }
</style>