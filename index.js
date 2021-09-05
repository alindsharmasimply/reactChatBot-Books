import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send({'Hi': 'There'});
})


app.listen(PORT, () => {
    console.log(`Listening to PORT = ${PORT}`);
    //PORT on which the app is running
});