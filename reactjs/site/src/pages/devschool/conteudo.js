import { useState } from 'react'
import { ContainerConteudo, Barra } from './conteudostyle'

export default function Conteudo() {
    const [alunos, setAlunos] = useState([])

    
    
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
            <div className="container2">
                <div className="cabecalho">
                    <div className="usuario-imagem">  
                        <div className="usuario">
                            <img src="/assents/images/neyy.jpg" alt="nao foi" /> 
                            <div className="bullet">3</div>
                        </div>
                        <div className="mensagem-usu"> Olá, Ney lindo </div>   
                    </div>
                    <div className="contalunos">
                        <img className="recarregar" src="/assents/images/recarregar.png" alt="" />
                    </div>
                    <div className="contalunos">
                        <img className="logout" src="/assents/images/logout_icon.svg" alt="" />
                    </div>
                </div>
                <div className="cadrastro">
                    <div className="cab"> 
                    <Barra/>
                    <div className="titulo-alun"> Novo Aluno</div>
                    </div>
                    <div className="cxinputs">
                        <div className="dados">
                            <div className="nome"> Nome: <input/> </div>
                            <div className="curso"> Curso: <input/> </div>
                            <div className="chamada"> Chamada: <input/> </div>
                            <div className="turma"> Turma: <input/> </div>
                        </div>
                        <div className="botao"> <button> Cadrastrar</button> </div>
                    </div>
                </div> 
                <div className="listaalunos">
                    <div className="cab">
                        <Barra/>
                        <div className="titulo-matri"> Alunos Matriculados</div>
                    </div>
                </div>
            </div>
        </ContainerConteudo>
        
        
    )
}