const mongoos = require('mongoose')

mongoos.connect('mongodb+srv://dbUser:071002@cluster0.genft.mongodb.net/MONEY-TRACKER', {useNewUrlParser : true, useUnifiedTopology: true })

const connection = mongoos.connection

connection.on('error', err => console.log(err))

connection.on('connected', () => console.log('Mongo DB Connection Successful'))