import { ContainerConteudo } from './conteudostyle'

export default function Conteudo() {
    
    
    return (
        <ContainerConteudo>
            <div className="container1">
                <div className="sloga">
                    <img className="logo" src="/assents/images/Vector.png" alt="" />
                    <div className="titulo"><span>Dev</span> School</div>
                </div>
                <div className="vazio">

                </div>
                <div className="geren">
                    <div className="opcao1"> Gerenciamento <img className="setaprabaixo" src="/assents/images/setinhaprabaixo.png" alt="" /> </div>
                </div>
                <div className="alun">
                    <div className="barra1roxo"></div>
                    <div className="opcao2">Alunos</div>
                </div>
            </div>
            <div className="container2"></div>
        </ContainerConteudo>
        
        
    )
}