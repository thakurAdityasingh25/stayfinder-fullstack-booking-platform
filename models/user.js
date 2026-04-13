const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

console.log("DEBUG: Type of passportLocalMongoose is:", typeof passportLocalMongoose);

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// Agar upar wala console 'function' dikhaye, tabhi ye line chalegi
userSchema.plugin(passportLocalMongoose, { usernameField: "username" });

module.exports = mongoose.model("User", userSchema);
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// // .default add karke dekho
// const passportLocalMongoose = require("passport-local-mongoose").default || require("passport-local-mongoose");

// console.log("DEBUG: Type now is:", typeof passportLocalMongoose);
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose").default || require("passport-local-mongoose");

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     }
// });

// // Plugin lagne ke baad hi authenticate() function banta hai
// userSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model("User", userSchema);