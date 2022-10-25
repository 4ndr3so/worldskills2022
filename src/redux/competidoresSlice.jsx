import { createSlice } from "@reduxjs/toolkit";

const initialState= {records:
    [
        {"id":"30","nombre":"Erika Paola Su\u00e1rez","habilidad":"Torno CNC","edad":"1","descripcion":"So\u00f1adora, persistente y berraca, cree que todo es posible si se desea con el coraz\u00f3n y que la disciplina es fundamental para surgir, le gusta pasar tiempo con su familia y jugar futsal.<br\/><br\/><span class=\"cursText\"> \u201cCuando haces las cosas con pasi\u00f3n te das cuenta que los l\u00edmites son mentales\u201d.<\/span>","redes":"facebook",                        "foto":"https://worldskills.sena.edu.co/imagen/JPG-WS-2019/WORLD-SKILLS-KAZAN-2019-DELEGACION-ERIKA-PAOLA-SUAREZ.jpg"},
        {"id":"29","nombre":"Sebasti\u00e1n Castro","habilidad":"Fresado CNC","edad":"1","descripcion":"Le gusta aprender, leer y montar en bicicleta, cree fielmente en el poder de la mente y dice que lo que se piensa se puede lograr, para \u00e9l, WorldSkills le permite demostrar lo que sabe y hacer lo que le gusta.<br\/><br\/><span class=\"cursText\"> \u201cMi coraz\u00f3n y mi mente cargar\u00e1n mi cuerpo, cuando mis piernas no puedan m\u00e1s\u201d.  <\/span>","redes":"facebook","foto":"https://worldskills.sena.edu.co/imagen/JPG-WS-2019/WORLD-SKILLS-KAZAN-2019-DELEGACION-SEBASTIAN-CASTRO.jpg"},
        {"id":"28","nombre":"Laura Patricia Barreto","habilidad":"An\u00e1lisis Qu\u00edmico","edad":"1","descripcion":"Exigente, no se conforma con cualquier resultado, es t\u00edmida alegre disciplinada y perseverante, le gusta salir con su familia y su mejor amiga, as\u00ed como jugar baloncesto. <br\/><br\/><span class=\"cursText\">\u201cCon la disciplina y la perseverancia es posible alcanzar el \u00e9xito\u201d.<\/span>","redes":"facebook",                                       "foto":"https://worldskills.sena.edu.co/imagen/JPG-WS-2019/WORLD-SKILLS-KAZAN-2019-DELEGACION-LAURA-PATRICIA-BARRETO.jpg"}
    ]}

export const competidoresSlice = createSlice({
    name:'videosAll',
    initialState,
    reducers:{
        increment:(state)=>
            state.records
        ,
        prub:(state)=>{
            return state;
        },
    }
})

export const {prub,increment} = competidoresSlice.actions;

export default competidoresSlice.reducer;