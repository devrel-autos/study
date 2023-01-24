const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const ID = req.params
    console.log(ID.id)
    res.json({'userid': ID.id})
})

app.get('/oauth', (req, res) => {
    const code = req.query
    console.log(code)
    res.send(`<a href="https://www.swit.io">Swit바로가기</a>`)
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == 'dog') {
        res.json({'sound': '멍멍'})
    } else if (name == 'cat') {
        res.json({'sound': '야옹'})
    } else if (name == 'pig') {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

app.get('/dog', (req, res) => {
    res.json({'sound': '멍멍'})
})

app.get('/cat', (req, res) => {
    res.send({'sound': '야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})