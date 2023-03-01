import * as dotenv from 'dotenv'
dotenv.config()
import app from './app'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = parseInt(process.env.PORT) || 3001 

app.listen(PORT,`${HOST}`, () => console.log(`listening host ${HOST} and port ${PORT}`))