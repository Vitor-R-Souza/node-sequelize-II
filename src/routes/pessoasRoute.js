const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res)); // pega todas as pessoas com status ativo
router.get('/pessoas/todos', (req, res) => pessoaController.pegaTodasAsPessoas(req, res)); // pega todas as pessoas
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res)); // pega pessoa por ID
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res)); // cria pessoa
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res)); // atualiza
router.put('/pessoas/:estudante_id/matriculas/cancela', (req, res) => pessoaController.cancelaRegistroEstudante(req, res)); // cancela cadastro e matricula
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res)); // deleta pessoa (soft delete)
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.pegaMatriculasAtivas(req, res)); // pega matriculas ativas do estudante
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => pessoaController.pegaTodasAsMatriculas(req, res));  // pega matriculas do estudante
router.get('/pessoas/:estudante_id/matriculas/confirmadas', (req, res) => matriculaController.pegaMatriculasPorEstudante(req, res));
router.get('/pessoas/matriculas/lotadas', (req, res) => matriculaController.pegaCursosLotados(req, res)); // pega cursos lotados
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.pegaUm(req, res)); // pega matricula por ID da matricula e do estudante
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.criaNovo(req, res)); // crianova matricula usando o ID do estudante
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualiza(req, res)); // atualiza matricula
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.exclui(req, res)); // deleta matricula

module.exports = router;
