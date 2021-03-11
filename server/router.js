const router = require('express').Router();
const solveNgram = require('./controllers/solvengram');

router.post('/solve', solveNgram);

module.exports = router;
