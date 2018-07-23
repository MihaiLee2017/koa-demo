const port = process.env.NODE_ENV === 'production' ? '80' : '3002'
const mongodb = {
  username: 'root',
  pwd: 'root',
  address: '127.0.0.1:27017',
  db: 'mongo_start'
}
export default {
  port,
  mongodb
}
