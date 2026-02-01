const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { ElevenLabsClient } = require('@elevenlabs/elevenlabs-js');
const { translate } = require('@vitalets/google-translate-api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

// Language codes and voices
const LANGUAGES = {
  english: { code: 'en', voice: '21m00Tcm4TlvDq8ikWAM' },
  spanish: { code: 'es', voice: '21m00Tcm4TlvDq8ikWAM' },
  french: { code: 'fr', voice: '21m00Tcm4TlvDq8ikWAM' },
  hindi: { code: 'hi', voice: '21m00Tcm4TlvDq8ikWAM' },
  chinese: { code: 'zh', voice: '21m00Tcm4TlvDq8ikWAM' },
  portuguese: { code: 'pt', voice: '21m00Tcm4TlvDq8ikWAM' },
};

app.post('/api/speech', async (req, res) => {
  try {
    const { text, language = 'english' } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    let finalText = text;
    const lang = LANGUAGES[language] || LANGUAGES.english;

    // Translate if not English
    if (language !== 'english') {
      const translated = await translate(text, { to: lang.code });
      finalText = translated.text;
      console.log(`Translated to ${language}: ${finalText}`);
    }

    const audio = await elevenlabs.textToSpeech.convert(lang.voice, {
      text: finalText,
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
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Speech generation failed' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
