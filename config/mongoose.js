const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/.env' });

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/placement-cell');
  console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));

