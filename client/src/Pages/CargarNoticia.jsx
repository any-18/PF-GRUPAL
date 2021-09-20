import React, {useState} from "react";
import { useSelector } from "react-redux";
import ImageContainer from "../Components/ImageContainer";
import ImageForm from "../Components/ImageForm";
import axios from "axios";
import "./CargarNoticia.css";
const{ REACT_APP_BACK_BASE_URL} = process.env


export function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = "Se requiere un título"
    }
    if (!input.content) {
        errors.content = "Se requiere un contenido"
    }
}

const CargarNoticia = () => {

    // let fecha = new Date();
    // let date = fecha.getDate()
    // console.log(fecha)
    // console.log(date);

    const [newImage, setNewImage] = useState([]);
    console.log(newImage)
    const [input, setInput] = useState({
        title: "",
        content: "",
        image: "",
    })
    const user = useSelector((state => state.userId))
    console.log(user)

    const handleInputChange = (e) => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let image2 = await localStorage.getItem("image")
        setInput({...input, image: image2.toString(), id: user})
            await axios.post(`${REACT_APP_BACK_BASE_URL}/newNotice`, input);
            alert("La noticia fue creada correctamente!");
            setInput({
                title: "",
                content: "",
            })
    }

    const handleNewImage = () => {
        setNewImage([...newImage, "New image"])
    }
    return (
        <div>
            <h1>Cargar noticia</h1>
            <form className="back">
                <input name="title" value={input.title} onChange={handleInputChange} placeholder="Título"></input>
                {/* <p>{errors.title}</p> */}
                <textarea name="content" value={input.content} onChange={handleInputChange} placeholder="Contenido"></textarea>
            </form>
            <ImageContainer newImage={newImage} />
            <ImageForm handleNewImage={handleNewImage}/>
            <button type="submit" onClick={handleSubmit}>Crear</button>
        </div>
    )
}

export default CargarNoticia;