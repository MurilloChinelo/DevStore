import db from './db.js';
import express from 'express'
import cors from 'cors'

///oiiii
const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll({ order: [['id_matricula', 'desc']] });
        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/matricula', async (req, resp) => {
    try {

        
        let { nome, chamada, curso, turma } = req.body;

        let p = await db.tb_matricula.findOne({where: { nm_turma: turma } } );
        let q = await db.tb_matricula.findOne({where: { nr_chamada: chamada} } );

        let matriculaa = {
            nm_aluno: nome,
            nr_chamada: chamada,
            nm_curso: curso,
            nm_turma: turma
             
        }
        if(nome == '' || chamada == '' || curso == '' || turma == '') {
            return resp.send({ erro: 'Você esqueceu de preencher os campos' })
        }
        if(nome.length <= 4 || curso.length <= 4 || turma.length <= 4) {
            return resp.send({ erro: 'Coloque mais que 4 caracteres nos campos abaixo' })
        }
        if(chamada <= 0)
        return resp.send({ erro: 'Coloque um numero maior que 0' })
        else if(!chamada == Number) {
            return resp.send({ erro: 'No campo Chamada coloque apenas numeros' })
        }
        else if(p != null && q != null){
            return resp.send({ erro: 'Aluno ja cadastrado' })
        }
        
        let r = await db.tb_matricula.create(matriculaa);
        resp.send(r);
        
    } catch (e) {
        resp.send({ erro: e.toString() })
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
        let { nome, chamada, curso, turma } = req.body;
        let r = await db.tb_matricula.update (
            {
                nm_aluno: nome,
                nr_chamada: chamada,
                nm_curso: curso,
                nm_turma: turma
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