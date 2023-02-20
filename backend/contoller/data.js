const Product = require("../Model/Schema");
const ApiFeatures = require("../utils/apifeature");

const getAllProduct = async (req, res, next) => {
  const resultPerPage = 5;
  const ProductCount = await Product.countDocuments();
  const apifeture = await new ApiFeatures(Product.find(), req.query)
    // .search()
    .filter()
    .pagination(resultPerPage);
  let products = await apifeture.query;

  res
    .status(200)
    .json({ success: true, products, ProductCount, resultPerPage });
};

// const topic = async (req, res) => {
//   const topic = await Product.find();
//   function top(x) {
//     return x.country;
//   }
//   var b = topic.map(top);
//   let country = [...new Set(b)];
//   country.forEach((e)=>{
//     country[e]
//   })
//   res.json(country, countryCount);
// };

const topic = async (req, res) => {
  const topic = await Product.find();
  function top(x) {
    return x.country;
  }
  var b = topic.map(top);
  let country = [...new Set(b)];
  let count = {};
  b.forEach((e) => {
    count[e] = (count[e] || 0) + 1;
  });
  res.json({count :count ,country: country});
  
  
};
module.exports = {
  getAllProduct,
  topic,
};
