const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const db = process.env.DB;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connection Successful");
}).catch((err) => {
    console.error("Database Connection Error:", err.message);
});
