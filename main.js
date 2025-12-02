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
    const orderCard = document.createElement('div');  /*making element in java script*/
    orderCard.classList.add('order-card') /*this is class*/
    orderCard.innerHTML = `
                      <div class="card-image">
                            <img src="${product.image}"> 
                        </div>
                        <h4>${product.name}</h4> 
                        <h4 class="price">${product.price}</h4>
                        <a href="#" class="btn card-btn">Add to Cart</a> /*(2)after this we are gonna add list in card so we have already give btn too so much classes we will give them different name here*/
                        `;
    /*Append here*/
    cardList.appendChild(orderCard)
    const cardBtn = orderCard.querySelector('.card-btn') /*select=(1) means cardbtn is in the order card (2)select the class="card-btn" here so CardBtn is constant here*/
    cardBtn.addEventListener('click', (e)=>{            /*event=after select here  is an event*/
      e.preventDefault(); /*prevent from extra loading*/
      addTCart();                     /*call the function= after click this will perfom*/
    });                           
  });
};
const addToCart = () =>{           /*Functin=during click, this function wil perfom*/
 const cartItem = document.createElement('div')         /*(imp)go to index.html, see cart-list, then create items of this card via javascript(1) create element first, make div*/
cartItem.classList.add('item');          /*give div a class name like item(is it in index), so finally we create div with the class*/
                                   /*after creating parent div, we copy all data*/

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
