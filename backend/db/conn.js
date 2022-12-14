const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://kroozeck:51p0UmxntsvudvVy@cluster0.n0ko6pi.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("--> Conectado ao banco!");
    } catch (error) {
        console.log(`--> Erro: ${error}`);
    }
}

module.exports = main