<script lang="ts">
    import SelectionMenu from "./SelectionMenu.svelte";


    type UsingTag = "input" | "textarea" | "selection";

    interface InputData {
        name: string,
        verboseName: string,
        description?: string,
        
        
        // HTML
        tag: UsingTag,
        type: string,
        placeholder?: string,
        required?: boolean,
        style?: string,
        options?: string[],
    }
    
    
    export let inputData: InputData;

    
    function importInputStyle(sheet: string) {
        return import(`../../css/input/${sheet}.css`);
    }
    
    if (inputData?.style) {
        importInputStyle(inputData?.style);
    } else {
        importInputStyle(inputData.tag);
    }



</script>


<div class="input_place">
    <p class="main_sm_14 total_black">{inputData.verboseName}</p>
    {#if inputData.tag == "input"}
        <input type="{inputData.type}" required={inputData.required} placeholder="{inputData.placeholder}" name="{inputData.name}">
    {:else if inputData.tag == "textarea"}
        <textarea name="{inputData.name}" required={inputData.required}></textarea>
    {:else}
        <SelectionMenu />
    {/if}
    {#if inputData.description}
        <p class="main_sm_14 gray">{inputData.description}</p>
    {/if}
</div>
