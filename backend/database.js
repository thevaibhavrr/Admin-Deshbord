const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connnetDatabase =()=>{
    mongoose
      .connect("mongodb://localhost:27017/deshbord", {
        usenewurlparser: true,
        useunifiedtopology: true,
      })
      .then(() => {
        console.log("mongodb connected with server ");
      })
   
}

module.exports =  connnetDatabase