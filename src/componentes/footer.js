import './footer.css'

function Footer(){
    return(
        <footer className="baixo">
            <img className='sesi' src={require('../assets/SESI.png')} width={100}/>
            <div className='textinho1'>
                <p>&copy; 2024 Vitor e Duda. Todos os direitos reservados.</p>
            </div>
            <div className='textinho2'>
                <p>Contato: almoçar@cabacos.com</p>
            </div>
        </footer>
    )
}

export default Footer