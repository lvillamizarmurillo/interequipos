import { MongoClient } from 'mongodb';
import { loadEnv } from 'vite';

const env = loadEnv("development", process.cwd(), 'MONGO');

class Database {
    static instance;

    constructor() {
        if (!Database.instance) {
            this.client = new MongoClient(env.MONGO_CONNECT);
            Database.instance = this;
        }
        return Database.instance;
    }

    async connect() {
        if (!this.client.isConnected) {
            await this.client.connect();
        }
        return this.client.db();
    }
}

export const collectionGen = async (collectionName) => {
    const dbInstance = new Database();
    const db = await dbInstance.connect();
    return db.collection(collectionName);
};