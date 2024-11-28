const cron = require('node-cron');
const { fetchNews } = require('../services/newsService');
const News = require('../models/News');

// Chạy crawler mỗi 30 phút
cron.schedule('*/30 * * * *', async () => {
  try {
    const news = await fetchNews();
    await News.bulkWrite(
      news.items.map(item => ({
        updateOne: {
          filter: { slug: item.slug },
          update: { $set: item },
          upsert: true
        }
      }))
    );
    console.log('News updated successfully');
  } catch (error) {
    console.error('Error updating news:', error);
  }
}); 