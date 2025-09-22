import {useEffect,useState} from 'react'
import './Main.css'
import axios from 'axios'

function Main() {
const [productos,setProductos] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:5000/productos")
      .then((res)=>{
        setProductos(res.data)
      })
      .catch((error)=>{
        console.error(error)
      })
    }
    
    )
  return (
    <>
    {productos.map((i)=>(
      <section className="contenedor">
        <div className="tarjeta">
         <h1>{i.Nombre}</h1>
         <h2>{i.Años}</h2>
         <h2>{i.Dni}</h2>
         <h2>{i.Nacionalidad}</h2>
         <h2>{i.Provincia}</h2>
         <h2>{i.cp}</h2>
        </div>
      </section>
  
    )   
    )}
    
    </>
  )
}

export default Main