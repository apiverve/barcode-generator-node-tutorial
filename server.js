/**
 * Barcode Generator - Tutorial Example
 *
 * A simple Express server for generating barcodes using the APIVerve API.
 * https://apiverve.com/marketplace/barcodegenerator
 */

const express = require('express');
const path = require('path');

// ============================================
// CONFIGURATION - Add your API key here
// Get a free key at: https://dashboard.apiverve.com
// ============================================
const API_KEY = process.env.API_KEY || 'your-api-key-here';
const API_URL = 'https://api.apiverve.com/v1/barcodegenerator';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static('public'));

// API endpoint to generate barcode
app.post('/api/generate', async (req, res) => {
  const { data, type = 'code128', displayValue = true } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Data is required' });
  }

  if (API_KEY === 'your-api-key-here') {
    return res.status(500).json({
      error: 'API key not configured. Set API_KEY environment variable or edit server.js'
    });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({
        data,
        type,
        displayValue
      })
    });

    const result = await response.json();

    if (result.status === 'ok') {
      res.json({
        success: true,
        data: data,
        type: type,
        imageUrl: result.data.downloadURL
      });
    } else {
      res.status(400).json({ error: result.error || 'Generation failed' });
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ error: 'Failed to generate barcode' });
  }
});

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Barcode Generator running at http://localhost:${PORT}\n`);
});
