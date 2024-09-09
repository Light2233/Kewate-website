<script lang="ts">

    import { enhance } from "$app/forms";
    import { page } from "$app/stores";

    export let pageName: string = "";
    export let source: string = "";
    
    export let utm: {[key:string]: string | null} = {};

    export let form: HTMLFormElement;


    // TODO: save data after error
</script>

<form method="POST" action="?/sendapp" use:enhance bind:this={ form }>

    <input type="hidden" name="page" value={ pageName }>
    <input type="hidden" name="source" value={ source }>
    <input type="hidden" value={ JSON.stringify(utm) }>
    <slot />

</form>