import styled from 'styled-components'


const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: row;

    .container1 {
        background-color: #2B3031;
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
`



export { ContainerConteudo }