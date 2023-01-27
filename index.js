import fs from 'fs'
import express from 'express'
import { move_words_to_newline } from './helpers/index.js'

const app = express()
const PORT = 2023

app.use(express.json())

app.post('/add-template', function (req, res) {
    const { question, keywords, answer } = req.body
    const keywords_on_newline = move_words_to_newline(keywords, ',')

    const template = `\n\n{QUESTINON}\n${question}\n{KEYS}\n${keywords_on_newline}\n{VALUE}\n${answer}`

    fs.appendFile('tl_general_uz.txt', template, (err) => {
        if (err) throw err;
    });

    res.send(template)
})

app.get('/templates', function (req, res) {
    const templates = fs.readFileSync('tl_general_uz.txt', 'utf8', (err, data) => {
        if (err) {
            return err
        }

        return data
    })

    res.send(templates)
})

app.listen(PORT, () => {
    console.log('Server runnning on port ' + PORT);
})