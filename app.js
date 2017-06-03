const 	express = require('express')
		app = express()



app.get('/', (req, res) => {
	res.send('index.html')
})

app.listen(3000, '127.0.0.1', () => {
    console.log('Server has started on port:', port)
})