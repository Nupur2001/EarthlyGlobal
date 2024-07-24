// Navigation Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.header .navbar');
const closeBtn = document.getElementById('close-navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

closeBtn.onclick = () => {
    navbar.classList.remove('active');
}

window.onclick = (event) => {
    if (!event.target.matches('#menu-btn') && !event.target.matches('.navbar a')) {
        navbar.classList.remove('active');
    }
}
// Pop-Up Content
document.addEventListener('DOMContentLoaded', function() {
    var popupTerms = document.getElementById('popupTerms');
    var popupRefund = document.getElementById('popupRefund');
    var popupLinkTerms = document.getElementById('popupLinkTerms');
    var popupLinkRefund = document.getElementById('popupLinkRefund');
    var closeButtons = document.querySelectorAll('.close');

    if (popupLinkTerms) {
        popupLinkTerms.addEventListener('click', function(e) {
            e.preventDefault();
            popupTerms.style.display = 'block';
        });
    }

    if (popupLinkRefund) {
        popupLinkRefund.addEventListener('click', function(e) {
            e.preventDefault();
            popupRefund.style.display = 'block';
        });
    }

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === popupTerms) {
            popupTerms.style.display = 'none';
        }
        if (event.target === popupRefund) {
            popupRefund.style.display = 'none';
        }
    });
});


// Product Images Switch
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    if (allHoverImages.length > 0) {
        allHoverImages[0].parentElement.classList.add('active');
    }
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

// Add to Cart Button Functioning
const productPrice = 300;
let quantity = 0;
let gstAmount = 0;

function updateBill() {
    const gstRate = 0.15;
    const priceElement = document.getElementById('price');
    const gstElement = document.getElementById('gst');
    const totalElement = document.getElementById('total');
    const billPriceElement = document.getElementById('bill-price');

    const totalPrice = productPrice * quantity;
    
    if (quantity > 0 && gstAmount === 0) {
        gstAmount = totalPrice * gstRate;
    }
    
    priceElement.textContent = `Price: ₹${totalPrice}`;
    gstElement.textContent = quantity > 0 ? `GST (15%): ₹${gstAmount.toFixed(2)}` : '';
    totalElement.textContent = `Total Price: ₹${(totalPrice + gstAmount).toFixed(2)}`;
    billPriceElement.textContent = `₹${totalPrice}`;
}

function addToCart() {
    quantity++;
    updateBill();
}

function subtractFromCart() {
    if (quantity > 0) {
        quantity--;
        updateBill();
    }
}

// Payment Portal
let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');


function doFun(){
 tColorA.style.color = "#654321";
 tColorB.style.color = "#444";
 tColorC.style.color = "#444";
 iconA.style.color = "#654321";
 iconB.style.color = "#aaa";
 iconC.style.color = "#aaa";
 cDetails.style.display = "block";
}
function doFunA(){
 tColorA.style.color = "#444";
 tColorB.style.color = "#654321";
 tColorC.style.color = "#444";
 iconA.style.color = "#aaa";
 iconB.style.color = "#654321";
 iconC.style.color = "#aaa";
 cDetails.style.display = "none";
}
function doFunB(){
 tColorA.style.color = "#444";
 tColorB.style.color = "#444";
 tColorC.style.color = "#654321";
 iconA.style.color = "#aaa";
 iconB.style.color = "#aaa";
 iconC.style.color = "#654321";
 cDetails.style.display = "none";
}
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e){
 let num = cNumber.value;

 let newValue = '';
 num = num.replace(/\s/g, '');
 for(var i = 0; i < num.length; i++) {
  if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
  newValue = newValue.concat(num[i]);
  cNumber.value = newValue;
 }

 let ccNum = document.getElementById('c-number');
 if(num.length<16){
  ccNum.style.border="1px solid red";
 }else{
  ccNum.style.border="1px solid greenyellow";
 }
});

let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function( e ){

 let newInput = eDate.value;

 if(e.which !== 8) {
  var numChars = e.target.value.length;
  if(numChars == 2){
   var thisVal = e.target.value;
   thisVal += '/';
   e.target.value = thisVal;
   console.log(thisVal.length)
  }
 }

 if(newInput.length<5){
  eDate.style.border="1px solid red";
 }else{
  eDate.style.border="1px solid greenyellow";
 }
});

let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){

 let elen = cvv.value;
 let cvvBox = document.getElementById('cvv-box');
 if(elen.length<3){
  cvvBox.style.border="1px solid red";
 }else{
  cvvBox.style.border="1px solid greenyellow";
 }
})