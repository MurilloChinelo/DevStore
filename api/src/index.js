import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll();
        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/matricula', async (req, resp) => {
    try {
        let matri = req.body;
        
        let matriculaa = {
            id_sala: 20,
            nm_aluno: matri.nm_aluno,
            nr_chamada: matri.nr_chamada,
            nm_curso: matri.nm_curso,
            nm_turma: matri.nm_turma
             
        }

        let r = await db.tb_matricula.create(matriculaa);
        resp.send(r);
        
    } catch (e) {
        resp.send('Deu erro');
        console.log(e.toString());
    }
});

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: { id_matricula: req.params.id} })
        resp.sendStatus(200);
        
    } catch (e) {
        resp.send({ erro: e.toString() })
        
    }
})

app.put('/matricula/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let dados = req.body;
        let r = await db.tb_matricula.update (
            {
                nm_aluno: dados.nm_aluno,
                nr_chamada: dados.nr_chamada,
                nm_curso: dados.nm_curso,
                nm_turma: dados.nm_turma
            },
            {
                where: { id_matricula: id }
            }
        );
        resp.sendStatus(200)

    }catch (e) {
        resp.send({ erro: e.toString() });
    }
})



app.listen(process.env.PORT,
           x => console.log(`>> Server up at port ${process.env.PORT}`))