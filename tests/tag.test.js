const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'musical-octo-waddle';
const client = new MongoClient(url, {useUnifiedTopology: true});
const collectionName = "tags";

describe("tag", () => {
  let db;

  beforeAll(async () => {
    await client.connect();
    db = await client.db(dbName);
    db.collection(collectionName).drop(); 
  }); 

  afterAll(async () => {
    // await client.close();
  });

  test('creates a tag', async () => { 
    const { insertedId } = (await db.collection(collectionName).insertOne({tag: "Java"}))
    console.log(insertedId);
    
  });
})

