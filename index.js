import express from 'express'
import hbs from 'hbs'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

const compliments = [
    'You must be a magician, every time I look at you everyone else disappears.',
    'You are my goddess. I love you.',
    'I FUCKING LOVE YOU',
    'DONT YOU DARE BE SAD',
    'Do you have a map? I just keep getting lost in your eyes.',
    'Excuse me, but I think you dropped something: my jaw.',
    'Are you a time traveler? Because I see you in my future.',
    'Do you have a Band-Aid? I just scraped my knee falling for you.',
    "You're amazing!",
    "You light up the room!",
    "You're a true gem!",
    'I must be a snowflake, because Ive fallen for you.',
    'Excuse me do you have a name, or can I just call you mine?',
    'I think you dropped something, my heart.',
    'You must be a camera, because every time I look at you, I smile.'
]
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)]
    res.render('home', { compliment: randomCompliment })
})

app.listen(3000, () => console.log('Server is up and running on port 3000!'))