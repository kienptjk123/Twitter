/* eslint-disable @typescript-eslint/no-unused-vars */
import { Collection, Db, MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import User from '~/models/schemas/User.schema'

dotenv.config()
//muốn lấy được env cài npm i dotenv
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.uodtv.mongodb.net/?retryWrites=true&w=majority&appName=Twitter`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (err) {
      console.log(err)
      throw err
    }
  }
  get users(): Collection<User> {
    //users is name database
    //as string for sure is a string
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }
}

const databaseService = new DatabaseService()
export default databaseService
