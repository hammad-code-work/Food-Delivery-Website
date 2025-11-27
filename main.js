var swiper = new Swiper(".mySwiper", {
  loop: true, /*loop for slider*/
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});
/*...................(1st STEP)*/
/*1st step for cart :when clicked on cart/bag icon then it shows up carts*/
const cartIcon = document.querySelector('.cart-icon'); /*(1)this is bag icon so when click on bag icon*/
const cartTab = document.querySelector('.cart-tab');   /*(2) it will show all cards*/
/*2nd step: we are gonna close cart from close button we have already make in html*/
const CloseBtn = document.querySelector('.close-btn');
/*3rd step:store it in variable here*/
const cardList = document.querySelector('.card-list');
/*1ststep:we are gonna make event on cart/bag icon because user click on cart icon*/
cartIcon.addEventListener('click', () => cartTab.classList.add('cart-tab-active'));
/*2nd step:For close cart*/
CloseBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));
/*Explanation: cartIcon.addEventListener(): This method attaches an event handler to the cartIcon element. It listens for a specific type of user interaction.
'click': This is the type of event we are listening for. When the user clicks the cartIcon, the function provided as the second argument is executed.
()=> cartTab.classList.add('cart-tab-active'): This is an arrow function that runs when the click event occurs.
cartTab.classList: This accesses the list of CSS classes currently applied to the cartTab element.
.add('cart-tab-active'): This dynamically adds the CSS class cart-tab-active to the cartTab element's list of classes.*/
/*......................(2nd STEP)*/
/*We have to show our Data/cards on screen/website through javascript so we have to fetch data from our jason file we already create*/
let productList = []; /*a variable and empty array is here, so we will fillup this array with productjason data*/
const showCards = () => {/*After getting data in array we will show cards*/
 productList.forEach(product => {
  const orderCard = document.createElement('div');
          orderCard.classList.add('order-card')
          orderCard.innerHTML = `
                      <div class="card-image">
                            <img src="${product.image}">
                        </div>
                        <h4>${product.name}</h4> 
                        <h4 class="price">${product.price}</h4>
                        <a href="#" class="btn">Add to Cart</a>
                        `;
/*Appnd here*/
cardList.appendChild(orderCard)

})
}

const initApp = () => {  /*this is arrow function so 1st we fetch data here in the function */
  fetch('products.json').then /*fetch data in function & .then for chaining*/
    (Response => Response.json()).then
    (data => {       /*then we take arrow fucntion here in which we pass parameter of data & all are store here n the data*/

      productList = data;
      /*console.log(productList); *//*for checking array is working or not from google inspect*/
      showCards();
        
         
        })
      }
initApp();                      /*we call arrow function here*/
