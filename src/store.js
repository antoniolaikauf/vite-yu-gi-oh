import { reactive } from "vue";

export const store = reactive({
    // array con dentro richiesta 
    ArrayCards: [],
    // link per richiesta api
    richiestaApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    optionApi:"https://db.ygoprodeck.com/api/v7/archetypes.php",

    ArrrayOption:[],

    TipoOption:"",

    nameParam:"archetype"
})