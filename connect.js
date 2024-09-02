// DEPENDENCIES
import mongoose from "mongoose"

mongoose.set('strictQuery', true)
async function connectToMongoDB(url){
    return mongoose.connect(url)
}

// EXPORTS
export { connectToMongoDB };