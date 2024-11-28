const express = require('express');
const router = express.Router();
const { fetchNews } = require('../services/newsService');

router.get('/news', async (req, res) => {
  try {
    const { category } = req.query;
    const news = await fetchNews(category);
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 