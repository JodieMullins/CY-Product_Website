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

/*
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
*/

let URLArray = [ "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" ]

/*
function fetchImage() {
    
    fetch("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        const container = document.getElementById("image-container");
        container.appendChild(imageElement);
      })
      .catch((error) => console.error(error));
  };



  function fetchImageTwo() {
    
    fetch("https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg")
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        const container = document.getElementById("image-container");
        container.appendChild(imageElement);
      })
      .catch((error) => console.error(error));
  };

*/



  function fetchImageTwo() {
    
// use map() to perform a fetch and handle the response for each url
Promise.all(URLArray.map(url =>
    fetch(url)
      .then(checkStatus)                 
      .then(parseJSON)
      .catch(logError)
  ))
    .then(data =>
        (response) => response.blob()
        .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        const container = document.getElementById("image-container");
        container.appendChild(imageElement);
  })
)};





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
