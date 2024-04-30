import './Contato.css'

function Contato(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Formulário enviado!');
    }

    return (
        <div className='div-formulario'> 
            <h1 className='formulario-titulo'>Formulário de Contato</h1> 
            <form className='formulario'> 
                <label className='formulario-item' htmlFor="nome">Nome:</label> 
                <input className='formulario-textarea' type="text" id="nome" name="nome" required /> 
                <label className='formulario-item' htmlFor="email">E-mail:</label> 
                <input className='formulario-textarea' type="email" id="email" name="email" required /> 
                <label className='formulario-item' htmlFor="mensagem">Mensagem:</label> 
                <textarea
                    className='formulario-textarea' 
                    id="mensagem" 
                    name="mensagem" 
                    required
                    rows="4" 
                ></textarea> 
                <button className='formulario-botao' type="submit" onClick={handleSubmit}>Enviar</button> 
            </form>
        </div> 
    )
}

export default Contato;
