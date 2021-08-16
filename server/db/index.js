import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync.js'
import createHumanModel from './humans.js';

const adapter = new FileSync('server/db/dummy.json');
export const db = low(adapter);

// other models later
export const models = {
  Human: createHumanModel(db)
}

// export {
//   models: {
//     Human: createHumanModel(db),
//     // User: createUserModel(db),
//   },
//   db
// };