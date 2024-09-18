<script lang="ts">
    import CommercialEditor from './CommercialEditor.svelte';
    import InputField from '$lib/client/components/form-manager/InputField.svelte';
    import InputGridCreator from '$lib/client/components/form-manager/InputGridCreator.svelte';
    export let data


    interface InputData {
        name: string,
        verboseName: string,
        description?: string,
        
        // HTML
        tag: "input" | "textarea" | "selection",
        type: string,
        placeholder?: string,
        required?: boolean,
        style?: string,
        options?: string[],
    }

    let test: InputData = {
        name:"clientName",
        verboseName : "Имя клиента",
        tag : "selection",
        type : "text",
        required : true,
        style : "selection",
        options: ["landing","multi-page","store"],
    };

    let testInputs = [
        {
            name:"clientName",
            verboseName : "Имя клиента",
            tag : "input",
            type : "text",
            required : true,
            style : "selection",
        },
        {
            name:"clientName",
            verboseName : "Имя клиента",
            tag : "selection",
            type : "text",
            required : true,
            style : "selection",
            options: ["landing","multi-page","store"],
        },
        {
            name:"clientName",
            verboseName : "Имя клиента",
            tag : "selection",
            type : "text",
            required : true,
            style : "selection",
            options: ["landing","multi-page","store"],
        }
    ]
</script>

<CommercialEditor offersData = {data.commercialOffers}/>

<InputGridCreator />
