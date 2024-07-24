/** 
 * 
 * 
 * FOR API  
 * 
 *      
 *          P R O D U C T S
 * 
 * 
 * 
 * 
*/


async function standardProductListingFiveItems() {


    const fiveItemsListedURL = 'https://fakestoreapi.com/products?limit=5';

    try {
        const responseForFiveItems = await fetch(fiveItemsListedURL);

        let response = responseForFiveItems

        const data = await response.json();
        console.log(data);

//        data.forEach((title) => {

//        })

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


    } catch (err) {
        console.log(" E R R ")
    }

    
};


/*
fetch(fiveItemsListedURL)
            .then(res=>res.json())



const apiContainer = document.getElementById('')
*/
standardProductListingFiveItems();


function productPageImages(data) {

    let productImageWholePage = ['prodONEimg', 'prodTWOimg', 'prodTHREEimg', 'prodFOURimg', 'prodFIVEimg'];

// for each loop to move through the array 
    data.forEach(image => {
        const parentdiv = document.createElement('div');
        parentdiv.className = 'div-product-images'
    })

};