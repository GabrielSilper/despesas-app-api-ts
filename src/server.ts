import app from './app';
import { AppDataSource } from './database/data-source';

const PORT = process.env.SERVER_PORT || 3001;

AppDataSource.initialize().then(async () => {
  console.log('Database Ok');
  app.listen(PORT, () => console.log(`Despesas Api listening port ${PORT}`));
});
