const express = require('express')
const cors = require('cors')
const { getHouses, createHouse, deleteHouse, updateHouse } = require('./controller')
const { rmSync } = require('fs')
const app = express()
app.use(express.json())
app.use(cors())


//endpoints
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)



app.listen(4004, () => console.log('Server is listening on 4004'))