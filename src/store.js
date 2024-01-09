import { reactive } from "vue";

export const store = reactive({
    // array con dentro richiesta 
    ArrayCards: [],
    // link per richiesta api
    richiestaApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    // api per tutti gli archetipi 
    optionApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    // array con dentro le option della select
    ArrrayOption: [],
    // tipo option selezionato
    TipoOption: "",
    // nome per api 
    nameParam: "archetype",
})