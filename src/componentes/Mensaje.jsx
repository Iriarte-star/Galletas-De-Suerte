import '../hojas-de-estilo/Mensaje.css'

const Mensaje = ({ dataFrase }) => {
    return(
        <div className="estiloMensaje">
            <p className='estiloFrase'>{dataFrase}</p>
        </div>
    );
}

export default Mensaje;