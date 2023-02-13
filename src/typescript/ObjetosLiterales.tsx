interface Persona { // interface es una forma de definir un tipo de dato
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;// Direccion es una interface
}

interface Direccion {// interface es una forma de definir un tipo de dato
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Erik',
        edad: 35,
        direccion: {
            pais: 'CDMX',
            casaNo: 29
        }
    } 

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                    {/* null es para que no se filtre nada, 2 es para que se vea bien */}
                </pre>
            </code>
        </>
    )
}
