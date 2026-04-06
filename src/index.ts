// Importing the functions from the api.ts

import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";
console.log("Grabbing product catalog.")

 fetchProductCatalog()

    .then((products) => {
        console.log("Congrats! Here are the products:");

        //The products parameter has the data we resolved 
        console.log(products);
    })

    // .catch() Basically when promise fails
    // ERROR paramater contains the error message
    .catch((error) => {
        console.log("Error! sorry something is wrong")
        console.log(error)
    })
    .finally(() => {
        console.log("Product fetch completed.")
    });

// Test the log sales report 

console.log("Fetching sales report")
 fetchSalesReport()

    .then((report) => {
        console.log("Congrats! Here are the sales report");

        //The products parameter has the data we resolved 
        console.log(report);
    })

    // .catch() Basically when promise fails
    // ERROR paramater contains the error message
    .catch((error) => {
        console.log("Error! sorry something is wrong")
        console.log(error)
    })
    .finally(() => {
        console.log("Sales report fetch completed.")
    });

// Product Reviews

console.log("Fetching Product  ID 1 Reviews ")

fetchProductReviews(1)

    .then((reviews) => {
        console.log("Congrats! Here are the Reviews");

        //The products parameter has the data we resolved 
        console.log(reviews);
    })

    // .catch() Basically when promise fails
    // ERROR paramater contains the error message
    .catch((error) => {
        console.log("Error! sorry something is wrong")
        console.log(error)
    })
    .finally(() => {
        console.log("Product Reviews fetch completed.")
    });