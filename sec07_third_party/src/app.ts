import _ from "lodash";
import {Product} from "./product.model";
// import {plainToClass} from "class-transformer";
import {validate} from "class-validator";

declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

// const products = [
//     {title: 'A Carpet', price: 30000}, {title: 'A Book', price: 12000}
// ];

// const loadedProducts = plainToClass(Product, products);
//
// loadedProducts.forEach(p => {
//     console.log(p.getInformation());
// });

const p1 = new Product("A Book", 12000);

console.log(p1.getInformation());

const newProd = new Product("", -1000);
validate(newProd).then(error => {
  if (error.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(error);
  } else {
    console.log(newProd.getInformation());
  }
});
