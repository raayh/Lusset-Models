import { Container } from "./styled";
import Cabecalho from "../../../components/Cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

import Api from '../../../service/api';
const api = new Api();

export default function Roupas () {
    const loading = useRef(null);
  
    const [roupasf, setRoupasf] = useState([])
  
       async function listar(){
         let r = await api.listar3();
         setRoupasf(r);     
        }

        useEffect(() => {
        listar();
           });

    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Roupas </div>
            <div className="linha"> <img src="/assets/images/Line 21.jpg" alt=""/> </div>

            <div className="conteudo-principal">
                <div className="lateral-tudo">                           
                    <div className="lateral">
                        <div className="item-L"> Categorias </div> <br/>
                        <div className="item-L"> Sobre </div>      <br/> 
                        <div className="item-L-x"> Roupas </div>     <br/> 
                        <div className="item-L-X"> Acessorios </div> <br/>
                        <div className="item-L-X">  Bonés/Chapéus </div> <br/>
                        <div className="item-L-X"> - Meias </div> <br/>
                        <div className="item-L-X"> - Mascaras </div> <br/>
                        <div className="item-L-X"> - Outros </div> <br/>
                        <div className="item-L-X"> - Marcas </div> <br/>
                        <div className="item-L-X"> - Calçados </div> <br/>
                    </div>
                    <div className="lateral-baixo">    
                        <div className="item-L-Baixo"> + Cores </div> <br/>
                        <div className="item-L-Baixo"> + Tamanho </div> <br/>
                        <div className="item-L-Baixo"> + Numeração </div> <br/>
                        <div className="item-L-Baixo"> + Marcas </div> <br/>
                        <div className="item-L-Baixo"> + Faixas de Preço </div> 
                    </div>
                </div>           

                <div className="catalogo">  
                    <div className="seleção">   
                        <select > 
                            <option value="filtro-D"> </option>
                            <option value="filtro-D"> Novidades </option>
                            <option value="filtro-D"> Extras </option>
                        </select>
                        <select > 
                            <option value="filtro-D"> </option>
                            <option value="filtro-D"> 24 </option>
                            <option value="filtro-D"> 25 </option>
                        </select>
                    </div>    
                            <div className="encaixotado">
                                    
                                <div className="box">
                                   
                                    
                                    {roupasf.map(i =>
                                    
                                    <div className="conteudo-corpo">
                                        <Produto roupasf={i} display={i.genero !== 'feminino'
                                                          ? 'none'
                                                          : 'visible'} />
                                        <div className="item"> {i.img_produto} </div>
                                        <div className="descricao-item"> {i.nm_produto} </div>
                                        <div className="preço-item"> {i.vl_preco_por} </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>

                                    )}
                                    
                                </div>
                            </div>
                        <div className="filtro"> </div>    
                </div>               
            </div>
            <Rodape> </Rodape>
        </Container>
    );
}
     

            