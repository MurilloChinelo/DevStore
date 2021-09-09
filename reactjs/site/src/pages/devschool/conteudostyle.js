import styled from 'styled-components'

const Barra = styled.div`
    background: rgba(152, 108, 223, 1);
    width: 4px;
    height: 2em;
    margin: 0em 1em;
    border-radius: 1em;

`

const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: row;
    


    .container1 {
        background-color: #2B3031;
    }

    .container2 {
        background: linear-gradient(0deg, #F5F5F5, #F5F5F5);
        width: 68em;
    }

   
    .sloga {
        display: flex;
        flex-direction: row;
        padding: 2em 2em;
        align-items: center;
    }

    .logo {
        
    }

    .titulo {
        padding-left: 0.5em;
        font-size: 1.5em;
        color: white;
    }
    .titulo span {
        color: #EA10C7;
        margin-right: -5px;
    }

    .vazio {
        background: rgba(38, 38, 38, 1);
        width: auto;
        height: 3em;
    }

    .geren {
        display: flex;
        align-items: center;
        width: 17em;
        height: 3em;
        padding: 2em;
        color: white;
    }
    .setaprabaixo{
        padding-left: 5.7em;
    }

    .alun {
        display: flex;
        align-items: center;
        

    }

    .opcao2 {
        display: flex;
        align-items: center;
        width: 17em;
        height: 3em;
        padding: 2em;
        color: rgba(26, 26, 26, 1);
        background: rgba(255, 255, 255, 1);
    }
    .barra1roxo {
        background: rgba(219, 33, 189, 1);
        width: 0.2em;
        height: 4em;
    }

    .cabecalho {
        display: flex;
        flex-direction: row;
        padding: 1em 2em;
        align-items: center;
        background: rgba(255, 255, 255, 1);

   
    }

    
    .usuario-imagem img {
        border-radius: 50%;
        width: 3em;
        height: 3em;
    }

    .usuario-imagem {
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .mensagem-usu {
        padding-left: 1em;
        padding-right: 48em;
    }

    .contalunos {
        align-items: center;
        background: rgba(152, 108, 223, 1);
        border-radius: 50%;
        align-items: center;
        width: 2.3em;
        height: 2.3em;
        margin: 0em 0.2em;
       
    }
    .recarregar {
        padding: 0.5em 0.4em;
    }

    .logout {
        padding: 0.3em 0.5em;
    }

    .cadrastro {
        background: rgba(255, 255, 255, 1);
        margin: 2em 2em;
        padding: 2em;
    }
    .cab {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4em;
    }
    .cxinputs {
        display: flex;
        flex-direction: row;
        
    }

    .dados {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 40em;
        height: 5em;
    }

    .nome {
        padding-left: 3em;
        margin-right: 5em;
    }
    .curso {
        padding-left: 0em;
    }
    .chamada {
        padding-left: 1.6em;
        margin-right: 4.7em;
    }
    .turma {
        padding-left: 0.2em;
    }
    .dados input {
        border: 1px solid rgba(168, 168, 168, 1);
        background: #FFFFFF;
        border-radius: 5px;

        outline: none;
        padding: .4em .5em;

        cursor: text;
    }

    .botao {
        padding-bottom: 0.5em;
        align-self: flex-end;
    }

    .botao button {
        font-weight: 700;

        color: #fff;
        background: rgba(233, 17, 198, 1);
        border: none;
        border-radius: 20px;
        padding: .5em 2em;
        margin: .3em;

        cursor: pointer;
    }

    .listaalunos {
        background: rgba(255, 255, 255, 1);
        margin: 2em 2em;
        padding: 2em;
    }
`



export { ContainerConteudo, Barra }