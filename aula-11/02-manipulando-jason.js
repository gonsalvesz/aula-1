// import products from './produtos.json'
import fs from "node:fs";
import path from "node:path";
const productJson = JSON.stringify([
    {
        "name": "Pair of Socks",
        "amountInStock": 100,
        "unitValue": 5
    },
    {
        "name": "T-shirt",
        "amountInStock": 500,
        "unitValue": 45,
    }
], null, 2);
const fileOutPath = path.join(__dirname, 'generated-products.json');
const products = JSON.parse(productJson);
fs.writeFileSync(fileOutPath, productJson);
console.log(productJson);
console.log(products);
// products.forEach(product => console.log(product.name))
//# sourceMappingURL=02-manipulando-jason.js.map