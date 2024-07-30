/** 
 * 
 * 
 * FOR API  
 * 
 *      
 *          P R O D U C T S
 * 
 * 
 *      make Images Display
 * 
*/


const parentList = document.getElementById('product-list');


//async function standardProductListingFiveItems() {

document.addEventListener('DOMContentLoaded', () => {

    const fiveProducts = 'https://fakestoreapi.com/products?limit=5'

    try {


      fetch(fiveProducts)
        // .then is to signify "Okay once you're done with that do this..."
            .then(response => response.json())

        // data from the response.json here
            .then(data => {
                    // double-checking in development
                console.log(data);
                
                // the data is returned as an array -- time for built in .forEach function
                data.forEach(item => {
                    
                    // an unordered list as list items!
                    const product = document.createElement('li');
                    
                    // The image can be added dynamically here
                    const productImg = document.createElement('img');

                    
                    
                    // set the image source here
                    productImg.src = item.image;
                    
                    // set the alt text for the image
                    productImg.alt = item.description;
                    
                    // adding a class to the product which will make for easier styling
                    product.classList.add('product');
                    
                    // We will need the title for the hover effect
                    let title = item.title;
                    let productPrice = item.price;
                    
                    // click behavior to show the name & price
                    // It passes the item.title to the show product info, 
                    // created second event listener on the same click to simultaneously display price
                    product.addEventListener('click', () => showTitleInfo(title));

                    product.addEventListener('click', () => showPriceInfo(productPrice));
                    
                    // the img element inside the li element
                    product.appendChild(productImg);

                    // put the li element inside the ul element
                    parentList.appendChild(product);









                });
            })

        // error handling >> console and alert
        } catch (err) {
            console.log(" E R R ")
            window.alert(" API -- E R R O R ")
        }        
});

function showTitleInfo(title) {
    console.log(`The item: ${title} was clicked!`);
    }