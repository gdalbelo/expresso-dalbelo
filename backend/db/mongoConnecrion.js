const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
    console.log("Conectado ao MongoDB");
});
