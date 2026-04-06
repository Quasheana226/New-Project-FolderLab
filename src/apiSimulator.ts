// I think of Inteface as in a bluprint 
// For any Product objet must have these properties 
interface Product {
    id: number;  // Products Id Number 
    name: string;  // Name of the product 
    price: number; // Product price 
}

interface Review {
    productId: number;  // What product Thats being reviewed
    rating: number;
    comment: string; // What the review said 
}


interface SalesReport {
    totalSales: number; // How much money was made 
    unitsSold: number; // Hoe many Units was sold 
    averagePrice: number; // Average price per unit 
}



export function fetchProductCatalog(): Promise<{ id: number; name: string; price: number; }[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000); // 1 second delay
    });
}


export function fetchProductReviews(productId: number): Promise<Review[]> {
    //New Promise 
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId, rating: 3, comment: "This Product is Amazing" },
                    { productId, rating: 4, comment: "Great value" },
                ]);
            } else {
                reject(`Failed to fetch product reviews for product ID ${productId}`);
            }
        }, 1500); // 1.5 seconds delay
    });
}




export function fetchSalesReport(): Promise<SalesReport> {
    //New Promise 
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    totalSales: 300000, // Revenue Made 
                    unitsSold: 300, // Total  items sold 
                    averagePrice: 450, // Average Price 
                });
            } else {
                reject("Failed to fetch sales report");
            }
        }, 1000); // 1 seconds delay
    });
}

