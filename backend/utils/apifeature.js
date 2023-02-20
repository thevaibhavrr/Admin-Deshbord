
/*


class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  //   search
  // search() {
  //   const queryCopy = { ...this.queryStr };
  //   this.query = this.query.find(this.queryStr);
  //   return this;
  // }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          // like -({name:"samosa 1.25"})
          name: {
            $regex: this.queryStr.keyword,
            // search in all case
            $options: "i",
          },
        }
      : {};
    // like - product.find({keyword 1.25"})

    this.query = this.query.find({ ...keyword });
    return this;
  }

  // pagination(resultPerPage) {
  //   const cureentPage = Number(this.queryStr.page) || 1;
  //   const skip = resultPerPage * (cureentPage - 1);
  //   this.query = this.query.limit(resultPerPage).skip(skip);
  //   return this;
  // }

  pagination(resultPerPage) {
    const cureentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (cureentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;


class ApiFeatures {
  constructor(query, queryStr) {
    // like - product.find()
    this.query = query;
    // product/filter name
    this.queryStr = queryStr;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    this.query = this.query.find(this.queryStr);
    return this;
  }

  //   search
  // search() {
  //   const keyword = this.queryStr.keyword
  //     ? {
  //         // like -({name:"samosa 1.25"})
  //         name: {
  //           $regex: this.queryStr.keyword,
  //           // search in all case
  //           $options: "i",
  //         },
  //       }
  //     : {};
  //   // like - product.find({keyword 1.25"})

  //   this.query = this.query.find({ ...keyword });
  //   return this;
  // }

  search() {
    const queryCopy = { ...this.queryStr };
    this.query = this.query.find(this.queryStr);
    return this;
  }

  // filter for categry
  // filter() {
  //   const querycopy = { ...this.queryStr };
  //   const removeField = ["keyword", "page", "limit"];
  //   removeField.forEach((key) => delete querycopy[key]);
  //   let queryStr = JSON.stringify(querycopy);
  //   // queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
  //   this.query = this.query.find(JSON.parse(queryStr));

  //   return this;
  // }
  // pagination(resultPerPage) {
  //   const cureentPage = Number(this.queryStr.page) || 1;
  //   const skip = resultPerPage * (cureentPage - 1);
  //   this.query = this.query.limit(resultPerPage).skip(skip);
  //   return this;
  // }
}

module.exports = ApiFeatures;

*/


class ApiFeatures {
  constructor(query, queryStr) {
    // like - product.find()
    this.query = query;
    // product/filter name
    this.queryStr = queryStr;
  }
  //   search
  search() {
    const keyword = this.queryStr.keyword
      ? {
          // like -({name:"samosa 1.25"})
          name: {
            $regex: this.queryStr.keyword,
            // search in all case
            $options: "i",
          },
        }
      : {};
    // like - product.find({keyword 1.25"})

    this.query = this.query.find({ ...keyword });
    return this;
  }
  // filter for categry
  filter() {
    const querycopy = { ...this.queryStr };
    // Removing filed from url
    const removeField = ["keyword", "page", "limit"];
    removeField.forEach((key) => delete querycopy[key]);
    // Fliter for price
    // changing req object in string { } to ____
    let queryStr = JSON.stringify(querycopy);
    // /\b()\b/g this is reguler expression and key for foreach
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // like - Product.find({})
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }
  pagination(resultPerPage) {
    const cureentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (cureentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
