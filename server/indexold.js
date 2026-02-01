const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { ElevenLabsClient } = require('@elevenlabs/elevenlabs-js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

app.post('/api/speech', async (req, res) => {
  try {
    const { text, language = 'english' } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    // Updated API call
    const audio = await elevenlabs.textToSpeech.convert('21m00Tcm4TlvDq8ikWAM', {
      text: text,
      model_id: 'eleven_multilingual_v2'
    });

    const chunks = [];
    for await (const chunk of audio) {
      chunks.push(chunk);
    }
    const audioBuffer = Buffer.concat(chunks);

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length
    });
    res.send(audioBuffer);

  } catch (error) {
    console.error('ElevenLabs error:', error.message);
    res.status(500).json({ error: 'Speech generation failed' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
