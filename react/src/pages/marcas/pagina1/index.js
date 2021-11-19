import { Container } from "./styled";
import Cabecalho from "../../../components/Cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom';

export default function Marcas () {
    return (
        <Container>
        <Cabecalho/> 
        
            <div className="superior">  Marcas </div>
            <div className="linha"> <img src="../../assets/images/Line 21.jpg" alt=""/> </div> 

            <div className="conteudo-marca">
              <div className="box"> 
                <div className="texto">Fundada pelos irmãos Fila em 1911 no século XXI, a marca 
                    tornou-se especialista na produção de moda que mescla o 
                    casual com o esportivo, resgatando sua história em cada 
                    nova peça desenvolvida. Navegue por nossa coleção de 
                    pólos, tênis para corrida, moda fitness, calçados casuais, 
                    bermudas, camisas, roupas para academia e outros itens 
                    de moda masculina e feminina.</div>
                <div className="imagem">
                    <img src="../../assets/images/image 18.png" alt=""/>
                    <div className="dois">  
                        <div className="desc"> Linha Fila </div>
                        <Link to={{pathname:"/marcas2"}}>   
                        <div className="ver-agora"> <button> Ver Agora </button> </div>
                        </Link>
                    </div>  
                </div>
            </div>
            <div className="box2"> 
                <div className="texto">A união da KACE e da MONARCH na coleção RAISED simboliza
                    mais do que peças de qualidade premium e alto valor estético. 
                   Esta colaboração entre as marcas é uma celebração da amizade 
                   verdadeira, a qual construímos desde a infância. A linha de joias 
                   RAISED foi desenvolvida com o  que há de melhor em tecnologia 
                   disponível na atualidade. Todas as peças são de prata 
                   com pedras de zircônio.</div>
                <div className="imagem2">
                    <img src="../../assets/images/image 20.png" alt=""/>
                    <div className="dois">
                        <div className="desc"> JOIAS MONARCH X VERSE </div>
                        <Link to={{pathname:"/marcas2"}}>   
                        <div className="ver-agora"> <button> Ver Agora </button> </div>
                        </Link>                    </div>    
                </div>
            </div>
            <div className="box3"> 
                <div className="texto">A Verse é uma loja do estilo urban lifestyle especializada 
                    em sneakers (tênis), bonés e vestuários das melhores marcas 
                    do mundo, valorizando a transparência no relacionamento e 
                    busca atender as necessidades de seus clientes da forma mais 
                    rápida, profissional e sem deixar que a tecnologia distancie 
                    o relacionamento.
                     </div>
                <div className="imagem3">
                    <img src="../../assets/images/image 19.png" alt=""/>
                    <div className="dois">
                        <div className="desc"> LINHA VERSE </div>
                        <Link to={{pathname:"/marcas2"}}>   
                        <div className="ver-agora"> <button> Ver Agora </button> </div>
                        </Link>                    </div>  
                </div>
            </div>
            <div className="box4"> 
                <div className="texto">A KACE, acrônimo de Keep Advancing and Conquer Everything 
                    (Continue Avançando e Conquiste Tudo), é uma marca de roupas 
                    streetwear high-end e plataforma de cultura e moda urbana 
                    brasileira, com sede em Belo Horizonte (Minas Gerais). A marca
                     incorpora em seus produtos a consciência de que somos do
                     tamanho dos nossos sonhos e disponibiliza itens de qualidade 
                    premium, combinando: conceito, conforto e exclusividade.</div>
                <div className="imagem4">
                    <img src="../../assets/images/image 22.png" alt=""/>
                    <div className="dois">
                        <div className="desc"> LINHA KACE </div>
                        <Link to={{pathname:"/marcas2"}}>   
                        <div className="ver-agora"> <button> Ver Agora </button> </div>
                        </Link>                    
                    </div>  
                </div>
            </div>
            <div className="box5"> 
                <div className="texto">A marca Vans foi fundada em 1966  quando os irmãos Paul e 
                    Jim Van Doren, ao lado dos sócios Gordon Lee e Serge Delia, 
                    inauguraram sua empresa  na cidade de Anaheim, na Califórnia, 
                    em 16 de Março, a Van Doren Rubber Company sendo uma 
                    empresa  única em fabricar tênis. Hoje, a vans é uma marca de 
                    tênis, skate e moletons.</div>
                <div className="imagem5">
                    <img src="../../assets/images/image 21.png" alt=""/>
                    <div className="dois">
                        <div className="desc"> LINHA VANS </div>
                        <Link to={{pathname:"/marcas2"}}>   
                        <div className="ver-agora"> <button> Ver Agora </button> </div>
                        </Link>                    </div>  
                </div>
            </div>
            </div>
            
        <Rodape/>
        </Container>
    );
}
