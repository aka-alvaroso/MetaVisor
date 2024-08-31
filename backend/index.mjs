import express from 'express';
import cors from 'cors';
import metascraper from 'metascraper';
import metascraperAuthor from 'metascraper-author';
import metascraperDate from 'metascraper-date';
import metascraperDescription from 'metascraper-description';
import metascraperImage from 'metascraper-image';
import metascraperLogo from 'metascraper-logo';
import metascraperPublisher from 'metascraper-publisher';
import metascraperTitle from 'metascraper-title';
import metascraperUrl from 'metascraper-url';
import got from 'got';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('MetaVisor Backend is running');
});

app.get('/api/metadata', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const { body: html, url: finalUrl } = await got(url);
    const metadata = await metascraper([
      metascraperAuthor(),
      metascraperDate(),
      metascraperDescription(),
      metascraperImage(),
      metascraperLogo(),
      metascraperPublisher(),
      metascraperTitle(),
      metascraperUrl(),
    ])({ html, url: finalUrl });

    res.json(metadata);
  } catch (error) {
    console.error('Error fetching metadata:', error.message);
    res.status(500).json({ error: 'Failed to fetch metadata' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
