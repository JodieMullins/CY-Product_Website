/** 
 * 
 * 
 * FOR API  
 * 
 *      
 *          P R O D U C T S
 * 
 * 
 *      make Images Display. 
 * 
*/

/*
async function standardProductListingFiveItems() {


    const fiveItemsListedURL = 'https://fakestoreapi.com/products?limit=5';

    try {
        const responseForFiveItems = await fetch(fiveItemsListedURL);

        let response = responseForFiveItems

        const data = await response.json();
        console.log(data);

//        data.forEach((title) => {

//        })


    } catch (err) {
        console.log(" E R R ")
    }
    
};
*/

/*
fetch(fiveItemsListedURL)
            .then(res=>res.json())



const apiContainer = document.getElementById('')
*/

/*

        // error handling
        if (!response == 200) {
            // log " E R R " if response isn't OK / 200
            console.log("E R R")
            // otherwise, response is 200 and OK
        } else {
            // Grab all the images of the products
            // display images of the products

            const prodOne = 
        }
*/


//    standardProductListingFiveItems();

/*
function productPageImages(data) {

    let productImageWholePage = ['prodONEimg', 'prodTWOimg', 'prodTHREEimg', 'prodFOURimg', 'prodFIVEimg'];

// for each loop to move through the array 
    data.forEach(image => {
        const parentdiv = document.createElement('div');
        parentdiv.className = 'div-product-images'
    })

};*/


/**
 * This gets 5 products
 * @returns {}
 */
async function getAllProducts() {

    const fiveItemsListedURL = 'https://fakestoreapi.com/products?limit=5';

    try {
        const response = await fetch(fiveItemsListedURL);

        if (response.status !== 200 || !response.body) {
            console.warn(' DID NOT REACH API ');
            return null;
        };
        
        const data = await response.json();

        console.log(data);

        return data


    } catch (error) {
        console.error(' E  R  R  O  R');
    }
};

(async () => {
    // Get all products from database.
    const products = await getAllProducts();
    // render all products on product listings page.
  
  //  Get the product-list DOM Node
   
    const productList = document.querySelector('#product-list');

    return products.forEach((product) => {
        const productListItem = document.createElement('li');
        const productLink = document.createElement('a');
        const productID = product.id;

        productLink.setAttribute('href',  `product.html?pid=${productID}`);
        productLink.innerText = product.title;

        productListItem.appendChild(productLink);
        productList.appendChild(productListItem);
    })
})();