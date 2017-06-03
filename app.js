const 	express = require('express')
		app = express()



app.get('/', (req, res) => {
	res.sendFile(__dirname+"/index.html")
})

app.listen(80, '127.0.0.1', () => {
    console.log('Server has started')
})