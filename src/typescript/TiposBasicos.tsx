export const TiposBasicos = () => {
    
    const nombre: string = 'Erik';
    const profesion: string = 'Desarrollador Web';
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: string[] = ['Capacidad de aprendizaje continua', 'Adaptabilidad', 'Proactivo'];

    return (
        <>
            <h3>Tipos basicos</h3>
            { nombre }, { edad }, {profesion}, { (estaActivo) ? 'Activo' : 'Inactivo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}
