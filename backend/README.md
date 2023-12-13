# Welcome to PaulStore Made By Sanjay Paul
# Backed Note

## (1) Backend: Set Up Backend
    - npm init
    - npm i express
    - Simple express app create

    - Script Create in package.json "start": "nodemon ./index.js"
    - npm start (node ./index.js)

    - git init
    - .gitignore FILE ADD
    - .env FILE ADD
    - README.md FILE ADD

## (2) Backend: Router Create 
    - const router = express.Router();

## (3) Backend: Mongoose connection create between node js and mongodb
    - npm i mongoose

## (4) Backend: Model and Schem Created
    - const userSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        }
    }, {timestamps : true});
    - const Users = new mongoose.model("user", userSchema);

## (5) Backend: Multer used for uploading photo or image
    - npm i multer

## (6) Backend: RestAPI create - CreateAccount, LogIn, GetUser || FetchUser middle ware create || Validation || Password Hashing

    - npm i express-validator
    - npm i bcryptjs
    - npm i doenv
    - npm i jsonwebtoken

    - please watch the file for better understand.

## (7) Backend: RestAPI create - Add Product
    - In "addproduct" RestAPI we define and save two schema one is only "producs" and "singleProduct"
