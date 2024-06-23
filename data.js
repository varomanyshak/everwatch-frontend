/**
 * Module dependencies.
 */
const cors = require('cors')
const express = require('express');
const { google } = require('googleapis');
const credentials = require('./credentials.json');

const app = express();
app.use(cors())

/**
 * Add the proxy to express
 */
const fetchGoogleSheetData = async (res) => {
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
  
    const sheets = google.sheets({ version: 'v4', auth });
  
    const spreadsheetId = '1jqRHhf3A9ZI8ijvCdlCMGgpBm2E7Wz4edPJZa1aHAvU'; // Replace with the ID of your target spreadsheet
    const range = 'sompo_results_sample2'; // Replace with the range of data you want to retrieve
  
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      });
  
      const values = response.data.values;
      if (values.length) {
        return res.json(values)
      } else {
        console.log('No data found.');
      }
    } catch (err) {
      console.error('The API returned an error:', err);
    }
  };

  //
  app.get('/api', (req, res)=> {
    fetchGoogleSheetData(res)
});
// app.use('/api', createProxyMiddleware({ target: 'http://api.example.com', changeOrigin: true }));

const server = app.listen(3001);

console.log('[DEMO] Server: listening on port 3001');
// console.log('[DEMO] Opening: http://localhost:3000/users');

process.on('SIGINT', () => server.close());
process.on('SIGTERM', () => server.close());
