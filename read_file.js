var fs = require('fs');
const express = require('express')
const app = express()

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/:id', function(request, response) {
	console.log('Input -> '+request.params.id);
	var contents = fs.readFileSync(request.params.id, 'utf8');
	response.send(contents);
 
});

