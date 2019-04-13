import app from './app.js'



const port = process.env.PORT || 8080; 
const host = 'localhost'
app.listen(port,host, () => console.log(`App listen: ${port}`));