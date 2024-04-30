import './QuemSomos.css'

function QuemSomos(){
    return(
        <div className='quemsomos'>
            <h1 className="titulo"> Quem Somos</h1>
            <p className='textao'>No mundo do SESI, a criatividade é uma ferramenta fundamental para o desenvolvimento dos alunos, e uma forma única de expressão artística tem se destacado: o cosplay. Originado da junção das palavras "costume" (fantasia) e "play" (brincadeira), o cosplay é uma atividade em que os participantes se vestem e interpretam personagens de ficção, sejam eles de animes, mangás, jogos, filmes, séries ou histórias em quadrinhos.</p>
            <p className='textao'>Os alunos do SESI têm abraçado essa forma de expressão de maneira incrível, utilizando sua inventividade para criar trajes e se transformar em seus personagens favoritos. Nos corredores das escolas, durante eventos e até mesmo em competições, é possível encontrar uma variedade impressionante de cosplayers, cada um trazendo sua paixão e dedicação para a comunidade escolar.</p>
            <p className='textao'>O cosplay vai além de simplesmente vestir uma fantasia; é uma oportunidade para os alunos explorarem sua criatividade, habilidades artísticas e até mesmo aprenderem sobre técnicas de costura, maquiagem e design de personagens. Além disso, proporciona um espaço seguro para os alunos se expressarem e se conectarem com outros colegas que compartilham de interesses semelhantes.</p>
            <img className='Foto4' src={require('../assets/FOTO4.jpg')} width={175}/>
            <img className='Foto5' src={require('../assets/FOTO5.jpg')} width={175}/>
        </div>
    )
}

export default QuemSomos