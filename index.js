import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;




app.post('/webhook', (req, res) => {
    const formData = req.body ;  // Dati del form inviati dal Webhook
  
    console.log('Dati ricevuti dal form Typeform:', formData);
  
    // A questo punto puoi eseguire qualsiasi logica desideri:
    // 1. Salvarli nel database
    // 2. Inviare una risposta
    // 3. Avviare una funzione locale
  
    // Rispondi per confermare la ricezione dei dati
    res.status(200).send('Dati ricevuti correttamente');
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })