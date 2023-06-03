/* 6️⃣ *** COMPONENTE CreateDeporte *** 6️⃣

Implementar el componente CreateDeporte. Este consistirá en un formulario controlado con estados de React.
📢¡Sigue las instrucciones de los TEST!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗A fines practicos el input de ligas destacadas será solo un string y será nombra liga destacada.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from 'react';
import { useDispatch } from 'react-redux';
import  * as actions from "../../redux/actions";


const CreateDeporte = () => {

      const validate = (state) =>{
            var errors = {}
            if(state.nombre.length > 30) errors.errorName = 'Nombre demasiado largo'
            if(state.descripcion.length < 100) errors.errorDescription = 'Descripción demasiada corta'
            if(state.reglas.length < 50) errors.errorReglas = 'El texto de las reglas deben ser más largas'
            return errors;
      }

      const [errors, setErrors] = React.useState({
            errorName: '',
            errorDescription: '',
            errorReglas: '',      

      })

      const [state, setState] = React.useState(
            {
                  nombre: '',
                  descripcion: '',
                  imagen: '',
                  reglas: '',
                  equipamiento: '',
                  lugar_de_origen: '',
                  liga_destacada: '',
               }
      )

      const dispatch = useDispatch();

      
      const handleChange = (e) => {
            const property = e.target.name
            const value = e.target.value
            setState({ ...state, [property]: value })
            setErrors(validate(
                  {
                        ...state, 
                        [property]: value 
                  }
            ))
      }
   
      const handleSubmit = (e) =>{
            e.preventDefault()        
           
            dispatch(actions.createDeporte(state))
      }
      

   return <>
      <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" name='nombre'  onChange={handleChange}/>
            <p>{errors.errorName}</p>

            <label >Descripción: </label>
            <textarea name="descripcion" onChange={handleChange}></textarea>
            <p>{errors.errorDescription}</p>

            <label >Reglas: </label>
            <input type="text" name='reglas'  onChange={handleChange}/>
            <p>{errors.errorReglas}</p>

            <label >Imagen: </label>
            <input type="text" name='imagen'  onChange={handleChange} />

            <label >Equipamiento: </label>
            <input type="text" name='equipamiento'  onChange={handleChange}/>

            <label >Lugar de origen: </label>
            <input type="text" name='lugar_de_origen' onChange={handleChange}/>

            <label >Liga destacada: </label>
            <input type="text" name='liga_destacada'  onChange={handleChange}/>

            <button type='submit'>Crear deporte</button>    


      </form>
   </>;
};  

export default CreateDeporte;
