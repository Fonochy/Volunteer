var mongoose = require("mongoose");

mongoose.set("autoIndex", true);
mongoose
  .connect(
    "mongodb+srv://dbFon:nattinee44@volunteer.sbtb4.mongodb.net/volunteer",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB Connected!"));

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open");
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});


var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var myuser = new Schema({
  user_firstname: String,
  user_lastname: String,
  user_email: String,
  user_confirmemail: String,
  user_password: String,
  user_confirmpassword: String,
  user_country: String,
});
// สร้างโมเดล
let Users = mongoose.model("users",myuser)

// ส่งออกโมเดล
module.exports = Users

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
  model.save(data)
}