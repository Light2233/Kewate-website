<script lang="ts">

    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";

    export let pageName: string = "";
    export let source: string = "";
    
    export let utm: {[key:string]: string | null} = {};
    export let form: HTMLFormElement;

    const onSubmit: SubmitFunction = () => {

        return async ({ result, update }) => {
            const customResult = result?.data;
            
            if (customResult?.success)
                await update();
            else
                await update({reset: false, invalidateAll: false});
        }
    }

</script>

<form method="POST" action="?/sendApp" bind:this={ form } use:enhance={ onSubmit }>

    <input type="hidden" name="page" value={ pageName }>
    <input type="hidden" name="source" value={ source }>
    <input type="hidden" value={ JSON.stringify(utm) }>
    <slot />

</form>