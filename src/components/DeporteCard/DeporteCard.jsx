/* 7️⃣ *** COMPONENTE DeporteCard *** 7️⃣

Implementar el componente DeporteCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un deporte específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './deporteCard.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import  * as actions from "../../redux/actions";

const DeporteCard = (props) => {

   const dispatch = useDispatch()

   const deleteDeporte = () =>{
      dispatch(actions.deleteDeporte(props.id))
   }

   return <div className='card'>
      <button onClick={deleteDeporte}>x</button>
      <h3>{props.nombre}</h3>
      <img src={props.imagen} alt={props.nombre} />
      <p>Origen: {props.lugar_de_origen}</p>
      <Link to = {`/deportes/${props.id}`}>
         {props.nombre}
      </Link>
   </div>;
};

export default DeporteCard;
