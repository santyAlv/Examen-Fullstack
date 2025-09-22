import React from 'react'
import './Layout.css'
import Main from '../main/Main'
function Layout() {
  return (
    <>
    <header className="encabezado">
        <h1>Escuela tecnica n°1</h1>
        <div className="menu">
            <h1>Escuela</h1>            
            <h1>Previas</h1>
            <h1>Cursos</h1>
            <h1>Contactos</h1>
        </div>
    </header>
    <main>
        <Main/>
    </main>
    

    
    <footer className="footer">
        <div className="lol">
            <h1>Escuela tecnica n°1</h1>
            <p>formando especiales tecnicos dede los años </p>
        </div>
        <div className="lol1">
            <h1>Navegacion</h1>
            

        </div>



    </footer>
    
    </>
  )
}

export default Layout