const 	express = require('express')
		app = express()



app.get('/', (req, res) => {
	res.sendFile(__dirname+"/index.html")
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server has started')
})
