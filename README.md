# Barcode Generator | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000)](https://expressjs.com)
[![APIVerve | Barcode Generator](https://img.shields.io/badge/APIVerve-Barcode_Generator-purple)](https://apiverve.com/marketplace/barcodegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial)

A Node.js web app for generating barcodes. Create Code128 and Code39 barcodes with customizable options.

![Screenshot](https://raw.githubusercontent.com/apiverve/barcode-generator-node-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial)** - no credit card required.

---

## Features

- Generate Code128 barcodes (alphanumeric)
- Generate Code39 barcodes
- Option to show/hide value text
- Download generated barcodes
- Clean, modern web interface
- Built with Express.js

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/barcode-generator-node-tutorial.git
   cd barcode-generator-node-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Set environment variable or edit `server.js`:
   ```bash
   export API_KEY=your-api-key-here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**

   Visit http://localhost:3000 and generate barcodes!

## Project Structure

```
barcode-generator-node-tutorial/
├── server.js           # Express server & API endpoint
├── public/
│   └── index.html      # Frontend UI
├── package.json        # Dependencies
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. User enters data to encode
2. User selects barcode type (Code128 or Code39)
3. Frontend sends POST request to `/api/generate`
4. Server calls the Barcode Generator API
5. API returns image URL
6. Frontend displays barcode with download option

### The API Call

```javascript
const response = await fetch('https://api.apiverve.com/v1/barcodegenerator', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  },
  body: JSON.stringify({
    data: '1234567890',
    type: 'code128',
    displayValue: true
  })
});
```

## API Reference

**Endpoint:** `POST https://api.apiverve.com/v1/barcodegenerator`

**Request Body:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data to encode |
| `type` | string | Yes | Barcode type (code128, code39) |
| `displayValue` | boolean | No | Show value below barcode (default: true) |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "imageName": "cc85680f-a1d0-4627-89ff-7d7e53663a2b.png",
    "format": ".png",
    "type": "CODE128",
    "expires": 1766010012598,
    "downloadURL": "https://storage.googleapis.com/apiverve/..."
  }
}
```

## Barcode Types

| Type | Characters | Use Case |
|------|------------|----------|
| Code128 | All ASCII | General purpose, high density |
| Code39 | A-Z, 0-9, - . $ / + % SPACE | Industrial, government |

## Use Cases

- **Inventory management** - Label products with barcodes
- **Shipping labels** - Generate tracking barcodes
- **Asset tracking** - Tag equipment and assets
- **Library systems** - Generate book barcodes
- **Event tickets** - Create scannable tickets
- **ID badges** - Add barcodes to ID cards

## Customization Ideas

- Add more barcode formats (EAN, UPC, etc.)
- Add batch generation
- Save barcode history
- Add custom colors
- Print directly from browser
- Generate barcodes from spreadsheet

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial):

- [QR Code Generator](https://apiverve.com/marketplace/qrcodegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial) - Generate QR codes
- [QR Code Reader](https://apiverve.com/marketplace/qrcodereader?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial) - Read QR codes
- [Invoice Generator](https://apiverve.com/marketplace/invoicegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial) - Generate invoices

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial) - Browse 300+ APIs
- [Barcode Generator API](https://apiverve.com/marketplace/barcodegenerator?utm_source=github&utm_medium=tutorial&utm_campaign=barcode-generator-node-tutorial) - API details
