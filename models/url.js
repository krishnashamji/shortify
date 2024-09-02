// DEPENDENCIES
import mongoose from "mongoose";

// DEFINE SCHEMA
const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  redirectUrl: {
    type: String,
    required: true 
  }
});

// CREATE MODEL BASED ON DEFINED SCHEMA
const URL = mongoose.model('URL', urlSchema);

// EXPORTS
export { URL };