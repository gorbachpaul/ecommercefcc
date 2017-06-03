const 	express = require('express')
		app = express()



app.get('/', (req, res) => {
	res.sendFile(__dirname+"/index.html")
})

app.listen(80, '0.0.0.0', () => {
    console.log('Server has started')
})
