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
    const [produtos, setProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precode, setPrecode] = useState('')
    const [precopor, setPrecopor] = useState('')
    const [avaliacao, setAvalicao] = useState('')
    const [descricao, setDescricao] = useState('')
    const [estoque, setEstoque] = useState('')
    const [linkimagem, setLinkimagem] = useState('')
    const [idAlterando, setIdAlterando] = useState(0)

    const loading = useRef(null);

    async function listar () {
        loading.current.continuousStart();

        let r = await api.listar()
        setProdutos(r)

        loading.current.complete();
    }

    async function inserir() {
        if (idAlterando == 0) {
            let r = await api.inserir( nome, categoria, precode, precopor, avaliacao,  descricao, estoque, linkimagem)

            if (r.erro)
                toast.error(`❌ ${r.erro}`)
            else 
                toast.dark('✔️ Produto Cadastrado com sucesso');

        } else {
            let r = await api.alterar(idAlterando, nome, categoria, precode, precopor, avaliacao,  descricao, estoque, linkimagem)
            
            if (r.erro)
                toast.error(`❌ ${r.erro}`)
            else 
                toast.dark('✔️ Produto alterado com sucesso');

        }

        limparDados()
        listar()
    }
    function limparDados() {
        setNome('')
        setCategoria('')
        setPrecode('')
        setPrecopor('')
        setAvalicao('')
        setDescricao('')
        setEstoque('')
        setLinkimagem('')
        setIdAlterando(0)
    }

    async function remover(id) {
        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que deseja remover o produto ${id} ?`,
            buttons: [
              {
                label: 'Sim', 
                onClick: async () => {
                    let r = await api.remover(id);
                    if (r.erro)
                        toast.error(`${r.erro}`);
                    else {
                        
                        toast.dark('✔️ Produto removido!')
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
        setNome(item.nm_produto)
        setCategoria(item.ds_categoria)
        setPrecode(item.vl_preco_de)
        setPrecopor(item.vl_preco_por)
        setAvalicao(item.vl_avaliacao)
        setDescricao(item.ds_produto)
        setEstoque(item.qtd_estoque)
        setLinkimagem(item.img_produto)
        setIdAlterando(item.id_produto)

    }
    useEffect(() => {
        listar()
    }, [])
    
    return (
        <ContainerConteudo>
            <ToastContainer />
            <LoadingBar color="rgba(17, 159, 220, 1)" ref={loading} />
            <div className="container1">
                <div className="sloga">
                    <img className="logo" src="/assents/images/logodevstore.jpg" alt="" />
                    <div className="titulo"><span>Dev</span> Store</div>
                </div>
                <div className="vazio">

                </div>
                <div className="geren">
                    <div className="opcao1"> Gerenciamento <img className="setaprabaixo" src="/assents/images/setinhaprabaixo.png" alt="" /> </div>
                </div>
                <div className="alun">
                    <div className="barra1roxo"></div>
                    <div className="opcao2">Produtos</div>
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
                    <div className="titulo-alun"> {idAlterando == 0 ? "Novo Produto" : "Alterando Produto " + idAlterando}</div>
                    </div>
                    <div className="cxinputs">
                        <div className="dados">
                            <div className="nome"> Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)}  /> </div>
                            <div className="prde"> Preço DE:  <input type="text" value={precode} onChange={e => setPrecode(e.target.value)}/> </div>
                            <div className="cat"> Categoria: <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/> </div>
                            <div className="prpo"> Preco POR:  <input type="text" value={precopor} onChange={e => setPrecopor(e.target.value)}/> </div>
                            <div className="ava"> Avaliação: <input type="text" value={avaliacao} onChange={e => setAvalicao(e.target.value)}  /> </div>
                            <div className="est"> Estoque:  <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/> </div>
                            <div className="lm"> Link Imagem: <input type="text" value={linkimagem} onChange={e => setLinkimagem(e.target.value)}/> </div>
                            <div className="ds"> Descrição: </div>
                            <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />  
                        </div>
                        <div className="botao"> <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button> </div>
                    </div>
                </div> 
                <div className="listaalunos">
                    <div className="cab">
                        <Barra/>
                        <div className="titulo-matri"> Produtos Cadastrados </div>
                    </div>

                    <table className="lista-tb">
                    <thead>
                        <tr className="cabecalhoTb">
                            <th className="imgTB"></th>
                            <th className="idTb">ID</th>
                            <th className="alunoTb">Produto</th>
                            <th className="numeroTb">Categoria</th>
                            <th className="turmaTb">Preço</th>
                            <th className="cursoTb">Estoque</th>
                            <th className="espaço"></th>
                            <th className="espaço"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((item, i) => 
                            <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                <td className="imgtab"><img src={item.img_produto} alt="" style={{ width: '40px', height: '35'}} /> </td>

                                <td className="idTb1">{item.id_produto}</td>
                                
                                <td title={item.nm_produto}>
                                    {item.nm_produto != null && item.nm_produto.length >= 25
                                        ? item.nm_produto.substr(0, 25) + '...'  : item.nm_produto}       
                                </td>
                                <td>{item.ds_categoria}</td>
                                <td>{item.vl_preco_de}</td>
                                <td>{item.qtd_estoque}</td>
                                <td className="botao-visivel"> <button onClick={() => editar(item)}> <img src="/assents/images/pencil.svg" alt="" /> </button> </td>
                                <td className="botao-visivel"> <button onClick={() => remover(item.id_produto)}  > <img src="/assents/images/delete.svg" alt="" /> </button> </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </div>
        </ContainerConteudo>
        
        
    )
}