import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync.js'
import createHumanModel from './humans.js';
import createPetModel from './pet.js';
import createToyModel from './toy.js';

const adapter = new FileSync('server/db/dummy.json');
export const db = low(adapter);

// other models later
export const models = {
  Human: createHumanModel(db),
  Pet: createPetModel(db),
  Toy: createToyModel(db),
}