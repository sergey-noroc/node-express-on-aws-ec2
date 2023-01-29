const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
    resp.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.0</p>');
})

app.get('/products', (req, resp) => {
    resp.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }
    ])
})

app.listen(port, () => {
    console.log(`Demo app is running on port: ${port}`);
})