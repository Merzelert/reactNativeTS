import React from 'react'
import { ContadorConHook } from './components/ContadorConHook'
// import { Contador } from './components/Contador'
// import { Funciones } from './typescript/Funciones'
// import { ObjetosLiterales } from './typescript/ObjetosLiterales'
// import { TiposBasicos } from './typescript/TiposBasicos';

const App = () => {
    return (
        <div className='mt-2'>
            <h1>Introducción a TypeScript</h1>
            <hr />
            {/* <TiposBasicos /> */}
            {/* <ObjetosLiterales/> */}
            {/* <Funciones /> */}
            {/* <Contador/> */}
            <ContadorConHook/>
        </div>
    )
}

export default App
