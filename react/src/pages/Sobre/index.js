import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

export default function Sobre (){
    return(
        <Container>
        <Cabecalho> </Cabecalho>
        
    <div class="conteudo">
            <div class="caixaum">
            <div class="titulo"> Conheça a Lusset Models - Marca de Streetwear Brasileira </div>
        </div>

        <div class="caixadois">
            <div class="texto"> A LTM é uma empresa criada por 4 jovens que queriam 
             fazer algo próprio, e tinham uma ideia inovadora voltada para o mundo da moda.Eles tiveram essa ideia pois, estavam cansados de roupas repetidas, com os mesmos designs. 
             <p> Eles se conheceram na época de escola, onde tiveram que fazer um projeto de criar uma empresa, mas esse projeto não ficou apenas no papel. Três anos depois de terminarem a escola, um deles, que já era formado em ti, prôpos que eles criassem uma empresa baseada naquele projeto. Algo que não seria fácil, mas o dom da persuasão era muito forte e conquistou a todos.  </p> </div>
            <img src="https://cdn.discordapp.com/attachments/871813906115469353/905131580866064384/imagem_estranha.png"/>
        </div>

        <div class="caixatres">
            <img src="https://cdn.discordapp.com/attachments/871813906115469353/905131580866064384/imagem_estranha.png"/>
            <div class="textodois"> O foco da LTM é VOCÊ! Ver nossos clientes escolhendo uma roupa, feliz por ser aquilo que ele procurava, é o que nos dá gás para continuar, mesmo com nossos altos e baixos no mercado. ALtos e baixos esses, que  aumentavam por  sermos uma empresa nova e com um estilo diferente, sendo assim, tivemos muita dificuldade em concretizarmos nossa base e encontrarmos nosso "Tchan". Mas nem por uma pequena defasagem desistem os lutadores!</div>
        </div>

        <div class="caixaquatro">
            <div class="textores">Criada a menos de uma década, a LTM  é uma empresa de médio porte, criada e gerenciada pelos seus 4 criadores. São eles: Rayssa Guerra - formada em ti, e com o dom de persuasão que convenceu os outros; João Gabriel - formado em comunicação visual e publicidade, além de ser uma caixinha de surpresa; Renato Ribeiro - ; Pedro AVelar - . 
            Acreditamos que o nosso maior diferencial, seja a nossa mente jovem que nos trás insipirações, criatividade e força de vontade para sempre nos reinventarmos se preciso e sempre continuar na luta. A LTM faz de tudo para trazer o melhor para sua autoestima.</div>
        </div>
  </div>

        <Rodape> </Rodape>
        </Container>
    );
}
  