<script lang="ts">
    import { getContext } from "svelte";
    import type { PageServerData } from "./$types.js";

    import Tabs from "./Tabs.svelte";
    import CommercialEditor from "./CommercialEditor.svelte"

    export let data: PageServerData;

    const tabActive = getContext("TabActive");
    let tabsList : Tab[] = [
        {
            number: 3,
            component: CommercialEditor,
            loadData: data.commercialOffers
        }
    ]
</script>

<Tabs {tabsList} activeTab={$tabActive}/>

