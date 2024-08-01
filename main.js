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

        // easily change URL to fetch from
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

                    product.id = item.id
                    

                    product.id = item.id
                    
                    // We will need the title for the hover effect
                    //let title = item.title;
                    //let productPrice = item.price;




                    
                    // click behavior to show the name & price
                    // established to produce information ONLY ONE TIME upon click 
                    product.addEventListener('click', () => showInfo(item), { once: true });

                    
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

function showInfo(item) {
    // console.log(`The item: ${title} was clicked!`);
   // document.getElementsByClassName('product').innerText = item.title
    product2 = document.getElementById(item.id)

    // create element to put title in
    productTitle = document.createElement('p')

    // create class for title elements
    productTitle.classList.add('titleOfProducts')
    
    productTitle.innerText = item.title

    productPrice = document.createElement('p')
    productPrice.classList.add('priceOFProduct')

    // change element to display item specified from API 
    productPrice.innerText = item.price

    // create child element with product2 parent element
    product2.appendChild(productTitle)
    product2.appendChild(productPrice)

};