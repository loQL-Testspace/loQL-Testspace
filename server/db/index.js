import low from 'lowdb'
import FileSync  from 'lowdb/adapters/FileSync'
import createHumanModel from './humans.js';

const adapter = new FileSync('./dummy.json');
const db = low(adapter);

// other models later

export default {
  models: {
    Human: createHumanModel(db),
    // User: createUserModel(db),
  },
  db
};