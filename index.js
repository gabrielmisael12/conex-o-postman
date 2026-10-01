import express from 'express'
// Importando as funções lógicas do banco de dados (vamos criá-las no passo abaixo)

import { buscarClientes } from './DAO/cliente/buscar_cliente.js'

const app = express()
app.use(express.json())

app.post('/incluirPacientes', async (req, res) => {
    let { nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo } = req.body
    let infos = [nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo]
    let resp = await incluirPaciente(infos)
    res.send(resp)
})

app.get('/ola', (req, res) => {
    res.json({ mensagem: 'Ola Mundo !!!' })
})


app.get('/primeiraApi', async (req, res) => {
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})