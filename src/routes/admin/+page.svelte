<script lang="ts">
    import { getContext } from "svelte";

    import Tabs from "./Tabs.svelte";
    import CommercialEditor from "./CommercialEditor.svelte"

    const tabActive = getContext("TabActive");
    let tabsList : Tab[] = [
        {
            number: 3,
            component: CommercialEditor
        }
    ]
</script>

<Tabs {tabsList} activeTab={$tabActive}/>

