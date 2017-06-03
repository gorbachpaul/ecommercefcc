const 	express = require('express')
		app = express()



app.get('/', (req, res) => {
	res.sendFile(__dirname+"/index.html")
})

app.listen(5000, () => {
    console.log('Server has started')
})
