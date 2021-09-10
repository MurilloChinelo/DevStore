import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import LoadingBar from 'react-top-loading-bar'

import { useState, useEffect, useRef } from 'react'
import { ContainerConteudo, Barra } from './conteudostyle'

import Api from '../../service/api'
const api = new Api()


export default function Conteudo() {
    const [alunos, setAlunos] = useState([])
    const [nome, setNome] = useState('')
    const [chamada, setChamada] = useState('')
    const [turma, setTurma] = useState('')
    const [curso, setCurso] = useState('')
    const [idAlterando, setIdAlterando] = useState(0)

    const loading = useRef(null);

    async function listar () {
        loading.current.continuousStart();

        let r = await api.listar()
        setAlunos(r)

        loading.current.complete();
    }

    async function inserir() {
        if (idAlterando == 0) {
            let r = await api.inserir( nome, chamada, curso, turma)

            if (r.erro)
                toast.error(`❌ ${r.erro}`)
            else 
                toast.dark('✔️ Aluno Cadastrado com sucesso');

        } else {
            let r = await api.alterar(idAlterando, nome, chamada, curso, turma)
            
            if (r.erro)
                toast.error(`❌ ${r.erro}`)
            else 
                toast.dark('✔️ Aluno alterado com sucesso');

        }
        
        limparDados()
        listar()
    }
    function limparDados() {
        setNome('')
        setChamada('')
        setCurso('')
        setTurma('')
        setIdAlterando(0)
    }

    async function remover(id) {
        confirmAlert({
            title: 'Remover aluno',
            message: `Tem certeza que deseja remover o aluno ${id} ?`,
            buttons: [
              {
                label: 'Sim', 
                onClick: async () => {
                    let r = await api.remover(id);
                    if (r.erro)
                        toast.error(`${r.erro}`);
                    else {
                        toast.dark('✔️ Aluno removido!')
                        listar();
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
        });
    }

    async function editar(item) {
        setNome(item.nm_aluno)
        setChamada(item.nr_chamada)
        setCurso(item.nm_curso)
        setTurma(item.id_matricula)
        setIdAlterando(item.id_matricula)

    }
    useEffect(() => {
        listar()
    }, [])
    
    return (
        <ContainerConteudo>
            <ToastContainer />
            <LoadingBar color="red" ref={loading} />
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
                    <div className="titulo-alun"> {idAlterando == 0 ? "Novo Aluno" : "Alterando Aluno " + idAlterando}</div>
                    </div>
                    <div className="cxinputs">
                        <div className="dados">
                            <div className="nome"> Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)}  /> </div>
                            <div className="curso"> Curso: <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/> </div>
                            <div className="chamada"> Chamada: <input type="text" value={chamada} onChange={e => setChamada(e.target.value)}/> </div>
                            <div className="turma"> Turma: <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/> </div>
                        </div>
                        <div className="botao"> <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
                    </div>
                </div> 
                <div className="listaalunos">
                    <div className="cab">
                        <Barra/>
                        <div className="titulo-matri"> Alunos Matriculados</div>
                    </div>

                    <table className="lista-tb">
                    <thead>
                        <tr className="cabecalhoTb">
                            <th className="idTb">ID</th>
                            <th className="alunoTb">Nome</th>
                            <th className="numeroTb">Chamada</th>
                            <th className="turmaTb">Turma</th>
                            <th className="cursoTb">Curso</th>
                            <th className="espaço"></th>
                            <th className="espaço"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((item, i) => 
                            <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                <td className="idTb1">{item.id_matricula}</td>
                                
                                <td title={item.nm_aluno}>
                                    {item.nm_aluno != null && item.nm_aluno.length >= 25
                                        ? item.nm_aluno.substr(0, 25) + '...'  : item.nm_aluno}       
                                </td>
                                <td>{item.nr_chamada}</td>
                                <td>{item.nm_turma}</td>
                                <td>{item.nm_curso}</td>
                                <td className="botao-visivel"> <button onClick={() => editar(item)}> <img src="/assents/images/pencil.svg" alt="" /> </button> </td>
                                <td className="botao-visivel"> <button onClick={() => remover(item.id_matricula)}  > <img src="/assents/images/delete.svg" alt="" /> </button> </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </div>
        </ContainerConteudo>
        
        
    )
}