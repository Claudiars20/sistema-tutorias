const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tfichatutoria', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tfichatutoria set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('ficha tutoria added!')
        })
    })
})
routes.delete('/:IdFichaTutoria', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tfichatutoria WHERE IdFichaTutoria = ?', [req.params.IdFichaTutoria], (err, rows)=>{
            if(err) return res.send(err)
            return res.send('Ficha Tutoria delete!')
        })
    })
})

module.exports = routes