require('dotenv')
    .config()
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes'));


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`Server started listening on PORT ${PORT}`);
});
