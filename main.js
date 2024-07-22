/** 
 * 
 * 
 * FOR API  
 * 
 *      S E A S O N A L 
 *          PRODUCTS
 * 
 * 
 * 
 * 
*/



async function standardProductListingFiveItems() {

    fiveItemsListedURL = 'https://fakestoreapi.com/products?limit=5'

}
fetch(fiveItemsListedURL)
            .then(res=>res.json())
            