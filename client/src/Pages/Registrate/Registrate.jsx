import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Registrate.css';
//import { useDispatch} from "react-redux";


function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Se requiere un nombre';
    } else if (!input.lastname) {
      errors.lastname = 'Se requiere un apellido';
    }
     else if (!input.country) {
    errors.country = 'Se requiere un pais';
    }
    else if (!input.town) {
    errors.town = 'Se requiere una ciudad';
    }
    else if (!input.direction) {
        errors.direction = 'Se requiere una dirección';
    }
    else if (!input.mail) {
        errors.mail = 'Se requiere un mail';
    }  
    else if (!input.telephone) {
        errors.telephone = 'Se requiere un teléfono';
    }
    else if (!input.keyword) {
        errors.keyword = 'Se requiere una palabra clave';
    }
    return errors;
  };

export default function Registrate() {
   // const dispatch = useDispatch()
    const history = useHistory()

   // const platforms = useSelector((state) => state.platforms)
    const [errors,setErrors] = useState({});

    const [input,setInput] = useState({
        name: "",
        lastname: "",
        country: "",
        town: "",
        direction: "",
        mail: "",
        telephone: "", 
        keyword: "",
        relation: "",
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
         ...input,
         [e.target.name]: e.target.value
       }));
        console.log(input)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }));
        //dispatch((input))
        alert("Registro creado!")
        setInput({
        name: "",
        lastname: "",
        country: "",
        town: "",
        direction: "",
        mail: "",
        telephone: "", 
        keyword: "",
        relation: "", 
        })
        history.push('/')
    }
    

    return (
        <div className='pageregistro'>
            <div className='title'><h1>Registro de lugar seguro</h1></div>
            <div > <p>Completá el formulario y registrá tu comercio, empresa o entidad.</p> </div>
           <div className='segundoparrafo' >
           <p>Ayudanos a luchar contra la violencia machista y sexual.</p>
           </div>
           <div >
           <form className='rectangulo' onSubmit={(e)=>handleSubmit(e)}>
               <input  className='formname'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.name}
                    name= "name"
                    placeholder="Nombre"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.name && (
                        <p className='error'>{errors.name}</p>
                        )}  
               <input className='formlastname'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.lastname}
                    name= "lastname"
                    placeholder="Apellido"
                    onChange={(e)=>handleChange(e)} 
                    />
                    {errors.lastname && (
                        <p className='error'>{errors.lastname}</p>
                    )}
               <input className='formcountry'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.country}
                    name= "country"
                    placeholder="Pais del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.country && (
                        <p className='error'>{errors.country}</p>
                    )}
               <input className='formtown'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.town}
                    name= "town"
                    placeholder="Ciudad del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.town && (
                        <p className='error'>{errors.town}</p>
                    )}
               <input className='formdirection'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.direction}
                    name= "direction"
                    placeholder="Dirección del lugar seguro"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.town && (
                        <p className='error'>{errors.town}</p>
                    )}
               <input className='formmail'
                    autoComplete = 'off'
                    type= "email"
                    value= {input.mail}
                    name= "mail"
                    placeholder="nombre@example.com"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.mail && (
                        <p className='error'>{errors.mail}</p>
                    )}
               <input className='formtelephone'
                    autoComplete = 'off'
                    type= "tel"
                    value= {input.telephone}
                    name= "telephone"
                    placeholder="Teléfono"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.telephone && (
                        <p className='error'>{errors.telephone}</p>
                    )}
               <input className='formkeyword'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.keyword}
                    name= "keyword"
                    placeholder="Palabra clave"
                    onChange={(e)=>handleChange(e)} 
                    />
                     {errors.keyword && (
                        <p className='error'>{errors.keyword}</p>
                    )}
               <input className='formrelation'
                    autoComplete = 'off'
                    type= "text"
                    value= {input.relation}
                    name= "relation"
                    placeholder="Cuál es tu relación con el lugar seguro a registrar?"
                    onChange={(e)=>handleChange(e)} 
                   />
                    {errors.relation && (
                        <p className='error'>{errors.relation}</p>
                    )}
               <button className="btninput" type='submit'>Registrar</button>
           </form>
           </div>
        </div>
    )
}