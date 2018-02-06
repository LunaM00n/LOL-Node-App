const express = require('express')
const app = express()

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/:id', function(request, response) {
	console.log('Input -> '+request.params.id);
  response.send('user ' + eval(request.params.id));
});