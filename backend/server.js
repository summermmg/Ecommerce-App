import express from 'express';

const app = express();

//Body Parser Middleware(use for Post method)
app.use(express.json());
app.use(express.urlencoded( {extended: false} )); 

//Products Api routes
app.use('/api/products',require('./routes/productsRoute'))

//Cart Api routes
app.use('/api/cart',require('./routes/cartRouter'))

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})