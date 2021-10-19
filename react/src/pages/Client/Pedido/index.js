import Menu from '../../../components/Menu/menu'
import Cabecalho from '../../../components/Cabecalho/cabecalho'

import { Link } from 'react-router-dom'
import { Container, Conteudo } from './styled'

export default function Pedido(){
    return(
        <Container>
            <Menu />
            <Conteudo />
                <Cabecalho />
        </Container>
    )
}