/* 8️⃣ ***COMPONENTE DeporteDetail*** 8️⃣

Implementar el componente DeporteDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del deporte.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del deporte cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del deporte correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import { useDispatch, useSelector } from 'react-redux';
import './deporteDetail.css';
import React from 'react';
import  * as actions from "../../redux/actions";
import { useParams } from 'react-router-dom';



const DeporteDetail = (props) => {
      const dispatch = useDispatch()

      const detail = useSelector((state) => state.deporteDetail)
      
const {id}  = useParams()

React.useEffect(()=>{
      dispatch(actions.getDeporteDetail(id))
}, [dispatch, id])

   return <div className='detail'>
     
      <h1>{detail.nombre}</h1>
      <img src={detail.imagen} alt={detail.nombre} />
      <h3>Descripcion: {detail.descripcion}</h3>
      <h5>Reglas: {detail.reglas}</h5>
      <h5>Equipamiento: {detail.equipamiento}</h5>
      <h5>Origen: {detail.lugar_de_origen}</h5>
      <h5>Ligas destacadas: {detail.ligas_destacadas}</h5>
   </div>;
};

export default DeporteDetail;
