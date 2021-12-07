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
  user_email: {
    type: "String",
    unique: true,
    required: true,
  },
  user_password: String,
  user_nationality: String,
  user_country: String,
  user_datebirth: Date,
  phone: String,
  user_gender: String,
  user_volunteer: String,
  
});

var mycontact = new Schema({
  user_namecontact: String,
  user_emailcontact: {
    type: "String",
    required: true,
  },
  user_message: String,
  
});
var userapply = new Schema({
  
  apply_destination: String,
  apply_program: String,
  apply_datebirth: Date,
  apply_duration: String,
  apply_paymentdate: Date,
  apply_timepayment:  String,
  apply_amountpay:String,
 
  
});

var feature = new Schema({
  discover_program: String,
  place_program: String,
  name: String,
  country: String,
  price: String,
  image: String,
  coverimage: String,
  detail: String,
  topic: String,
  topic2: String,
})


// สร้างและส่งออกโมเดล
exports.Users = mongoose.model("users", myuser);
exports.Contact = mongoose.model("contactus", mycontact);
exports.Apply = mongoose.model("applyuser", userapply);
exports.Feature = mongoose.model("featureprogram", feature )
//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
exports.saveProduct = function (model, data) {
  model.save(data);
};