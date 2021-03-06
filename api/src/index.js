import db from './db.js';
import express from 'express'
import cors from 'cors'



///oiiii
const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try {
        let produto = await db.tb_produto.findAll({ order: [['id_produto', 'desc']] });
        resp.send(produto);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/produto', async (req, resp) => {
    try {    
            
        let { nome, categoria, precode, precopor, avaliacao,  descricao, estoque, linkimagem } = req.body;

        

        let p = await db.tb_produto.findOne({where: { nm_produto: nome } } );

        let produtoo = {
            nm_produto: nome,
            ds_categoria: categoria,
            vl_preco_de: precode,
            vl_preco_por: precopor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: linkimagem,
            bt_ativo: true,
            dt_inclusao: new Date()
              
        }

<<<<<<< HEAD

        


        
        if(nome == '' || categoria == '' || precode == '' || precopor == '' || avaliacao == '' || descricao == '' || estoque == '' || linkimagem == '') {
            return resp.send({ erro: 'Você Deve de Preencher os Campos' }) 
=======
        if(!isNaN(chamada) == false) {
            return resp.send({ erro: 'No campo Chamada coloque apenas numeros!' })
        } 
        
        if(nome == '' || chamada == '' || curso == '' || turma == '') {
            return resp.send({ erro: 'Você esqueceu de preencher os campos' })
>>>>>>> faf8e427f6036e447a29e6b84becb8fe8acad573
        }
        if(nome.length <= 4 || categoria.length <= 4 || descricao.length <= 4 || linkimagem.length <= 4) {
            return resp.send({ erro: 'Coloque mais que 4 caracteres nos campos abaixo' })
        }
<<<<<<< HEAD

        if(!isNaN(precopor) == false) {
            return resp.send({ erro: 'No campo Preço POR coloque apenas numeros!' })
        }   

        if(!isNaN(avaliacao) == false) {
            return resp.send({ erro: 'No campo Avaliação coloque apenas numeros!' })
        }

        if(!isNaN(precode) == false)
            return resp.send({ erro: 'No campo Preço DE coloque apenas numeros!' })

        if( !isNaN(estoque) == false)
            return resp.send({ erro: 'No campo estoque coloque apenas numeros!' })

        if(avaliacao <= 0 || precopor <= 0 || precode <= 0 || estoque <= 0 )
            return resp.send({ erro: 'Coloque um numero maior que 0' })
        
         if(p != null ){
                return resp.send({ erro: 'Produto ja cadastrado' })
=======
        
        
        if(chamada <= 0)
            return resp.send({ erro: 'Coloque um numero maior que 0' })


        
        if(p != null && q != null){
            return resp.send({ erro: 'Aluno ja cadastrado' })
>>>>>>> faf8e427f6036e447a29e6b84becb8fe8acad573
        }
        
        
        
        let r = await db.tb_produto.create(produtoo);
        resp.send(r);
        
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
});

app.delete('/produto/:id', async (req, resp) => {
    try {
        let r = await db.tb_produto.destroy({ where: { id_produto: req.params.id} })
        resp.sendStatus(200);
        
    } catch (e) {
        resp.send({ erro: e.toString() })
        
    }
})

app.put('/produto/:id', async (req, resp) => {
    try {
        let id = req.params.id;
<<<<<<< HEAD
<<<<<<< HEAD
        let { nome, categoria, precode, precopor, avaliacao,  descricao, estoque, linkimagem } = req.body;

        if(nome == '' || categoria == '' || precode == '' || precopor == '' || avaliacao == '' || descricao == '' || estoque == '' || linkimagem == '') {
            return resp.send({ erro: 'Você Deve de Preencher os Campos' }) 
        }
        if(nome.length <= 4 || categoria.length <= 4 || descricao.length <= 4 || linkimagem.length <= 4) {
            return resp.send({ erro: 'Coloque mais que 4 caracteres nos campos abaixo' })
        }

        if(!isNaN(precopor) == false) {
            return resp.send({ erro: 'No campo Preço POR coloque apenas numeros!' })
        }   

        if(!isNaN(avaliacao) == false) {
            return resp.send({ erro: 'No campo Avaliação coloque apenas numeros!' })
        }

        if(!isNaN(precode) == false)
            return resp.send({ erro: 'No campo Preço DE coloque apenas numeros!' })

        if( !isNaN(estoque) == false)
            return resp.send({ erro: 'No campo estoque coloque apenas numeros!' })

        if(avaliacao <= 0 || precopor <= 0 || precode <= 0 || estoque <= 0 )
            return resp.send({ erro: 'Coloque um numero maior que 0' })

            
        let r = await db.tb_produto.update (
=======
=======
>>>>>>> parent of faf8e42 (biiiiiii)
        let { nome, chamada, curso, turma } = req.body;
        let r = await db.tb_matricula.update (
>>>>>>> faf8e427f6036e447a29e6b84becb8fe8acad573
            {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precode,
                vl_preco_por: precopor,
                vl_avaliacao: avaliacao,
                ds_produto: descricao,
                qtd_estoque: estoque,
                img_produto: linkimagem,
                bt_ativo: true,
                dt_inclusao: new Date()
            },
            {
                where: { id_produto: id }
            }
        );

        


        resp.sendStatus(200)

    }catch (e) {
        resp.send({ erro: e.toString() });
    }
})



app.listen(process.env.PORT,
           x => console.log(`>> Server up at port ${process.env.PORT}`))