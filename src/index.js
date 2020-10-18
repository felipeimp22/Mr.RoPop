import express from 'express';
import routes from './routes/routes'
const App = express()

App.use(express.json())
App.use(routes)


App.listen(3333, ()=> console.log('App is runing on port 3333'))
