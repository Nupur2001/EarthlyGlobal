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

// // Add to Cart Button Functioning
// document.addEventListener("DOMContentLoaded", function() {
// const productPrice = 300;
// let quantity = 0;
// let gstAmount = 0;

// function updateBill() {
//     const gstRate = 0.15;
//     const priceElement = document.getElementById('price');
//     const gstElement = document.getElementById('gst');
//     const totalElement = document.getElementById('total');
//     const billPriceElement = document.getElementById('bill-price');

//     const totalPrice = productPrice * quantity;
    
//     if (quantity > 0 && gstAmount === 0) {
//         gstAmount = totalPrice * gstRate;
//     }
    
//     priceElement.textContent = `Price: ₹${totalPrice}`;
//     gstElement.textContent = quantity > 0 ? `GST (15%): ₹${gstAmount.toFixed(2)}` : '';
//     totalElement.textContent = `Total Price: ₹${(totalPrice + gstAmount).toFixed(2)}`;
//     billPriceElement.textContent = `₹${totalPrice}`;
// }

// function addToCart() {
//     quantity++;
//     updateBill();
// }

// function subtractFromCart() {
//     if (quantity > 0) {
//         quantity--;
//         updateBill();
//     }
// };
// });


// // Address Form 
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('payment-form');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         // Example form data handling
//         const formData = new FormData(form);
        
//         // Process form data (e.g., send to server or show a confirmation message)
//         console.log('Form Submitted');
//         console.log('Name:', formData.get('name'));
//         console.log('Email:', formData.get('email'));
//         console.log('Country:', formData.get('country'));
//         console.log('City:', formData.get('city'));
//         console.log('Pincode:', formData.get('pincode'));
//         console.log('Address:', formData.get('address'));
//         console.log('Price:', formData.get('price'));
//         console.log('Quantity:', formData.get('quantity'));
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const productPrice = 300;
    let quantity = 0;
    let gstAmount = 0;
    let gstRate = 0.15;
    let totalGST = 0;

    function updateBill() {
        const priceElement = document.getElementById('price');
        const gstElement = document.getElementById('gst');
        const totalElement = document.getElementById('total');
        const billPriceElement = document.getElementById('bill-price');

        const totalPrice = productPrice * quantity;
        
        // Only add GST once
        if (quantity >= 1) {
            totalGST = productPrice * gstRate;
        }

        priceElement.textContent = `Price: ₹${totalPrice}`;
        gstElement.textContent = `GST (15%): ₹${totalGST.toFixed(2)}`;
        totalElement.textContent = `Total Price: ₹${(totalPrice + totalGST).toFixed(2)}`;
        billPriceElement.textContent = `₹${totalPrice}`;

        // Store values in localStorage
        localStorage.setItem("totalPrice", (totalPrice + totalGST).toFixed(2));
        localStorage.setItem("quantity", quantity);
    }

    window.addToCart = function() {
        quantity++;
        updateBill();
    };

    window.subtractFromCart = function() {
        if (quantity > 0) {
            quantity--;
            updateBill();
        }
    };

    window.proceedToCheckout = function() {
        window.location.href = "paymentPortal.html"; // Redirect to the checkout page
    };
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the values from localStorage
    const totalPrice = localStorage.getItem("totalPrice");
    const quantity = localStorage.getItem("quantity");

    // Set the values in the form
    const priceInput = document.getElementById('price-input');
    const quantityInput = document.getElementById('quantity-input');

    if (priceInput) {
        priceInput.value = totalPrice || 0;
    }
    if (quantityInput) {
        quantityInput.value = quantity || 1;
    }
});

// Populate Cities based on Country
function populateCities() {
    const country = document.getElementById("country").value;
    const cityGroup = document.getElementById("city-group");
    const cityDropdown = document.getElementById("city");

    cityGroup.style.display = "block"; // Show city dropdown

    let cities = [];

    if (country === "India") {
        cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"];
    } else if (country === "USA") {
        cities = ["New York", "Los Angeles", "Chicago", "Houston"];
    } else if (country === "UK") {
        cities = ["London", "Manchester", "Birmingham", "Leeds"];
    }

    // Clear existing options
    cityDropdown.innerHTML = '<option value="" disabled selected>Select your city</option>';

    // Add new city options
    cities.forEach(function(city) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
}

// Populate Cities based on Country
function populateCities() {
    const country = document.getElementById("country").value;
    const cityGroup = document.getElementById("city-group");
    const cityDropdown = document.getElementById("city");

    cityGroup.style.display = "block"; // Show city dropdown

    let cities = [];

    if (country === "India") {
        cities = ["Delhi", "Mumbai", "Bangalore", "Chennai"];
    } else if (country === "USA") {
        cities = ["New York", "Los Angeles", "Chicago", "Houston"];
    } else if (country === "UK") {
        cities = ["London", "Manchester", "Birmingham", "Leeds"];
    }

    // Clear existing options
    cityDropdown.innerHTML = '<option value="" disabled selected>Select your city</option>';

    // Add new city options
    cities.forEach(function(city) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
}

    // Payment Portal
    // let tColorA = document.getElementById('tColorA'),
    // tColorB = document.getElementById('tColorB'),
    // tColorC = document.getElementById('tColorC'),
    // iconA = document.querySelector('.fa-credit-card'),
    // iconB = document.querySelector('.fa-building-columns'),
    // iconC = document.querySelector('.fa-wallet'),
    // cDetails = document.querySelector('.card-details');
    
    
    // function doFun(){
    //  tColorA.style.color = "#654321";
    //  tColorB.style.color = "#444";
    //  tColorC.style.color = "#444";
    //  iconA.style.color = "#654321";
    //  iconB.style.color = "#aaa";
    //  iconC.style.color = "#aaa";
    //  cDetails.style.display = "block";
    // }
    // function doFunA(){
    //  tColorA.style.color = "#444";
    //  tColorB.style.color = "#654321";
    //  tColorC.style.color = "#444";
    //  iconA.style.color = "#aaa";
    //  iconB.style.color = "#654321";
    //  iconC.style.color = "#aaa";
    //  cDetails.style.display = "none";
    // }
    // function doFunB(){
    //  tColorA.style.color = "#444";
    //  tColorB.style.color = "#444";
    //  tColorC.style.color = "#654321";
    //  iconA.style.color = "#aaa";
    //  iconB.style.color = "#aaa";
    //  iconC.style.color = "#654321";
    //  cDetails.style.display = "none";
    // }
    // let cNumber = document.getElementById('number');
    // cNumber.addEventListener('keyup', function(e){
    //  let num = cNumber.value;
    
    //  let newValue = '';
    //  num = num.replace(/\s/g, '');
    //  for(var i = 0; i < num.length; i++) {
    //   if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
    //   newValue = newValue.concat(num[i]);
    //   cNumber.value = newValue;
    //  }
    
    //  let ccNum = document.getElementById('c-number');
    //  if(num.length<16){
    //   ccNum.style.border="1px solid red";
    //  }else{
    //   ccNum.style.border="1px solid greenyellow";
    //  }
    // });
    
    // let eDate = document.getElementById('e-date');
    // eDate.addEventListener('keyup', function( e ){
    
    //  let newInput = eDate.value;
    
    //  if(e.which !== 8) {
    //   var numChars = e.target.value.length;
    //   if(numChars == 2){
    //    var thisVal = e.target.value;
    //    thisVal += '/';
    //    e.target.value = thisVal;
    //    console.log(thisVal.length)
    //   }
    //  }
    
    //  if(newInput.length<5){
    //   eDate.style.border="1px solid red";
    //  }else{
    //   eDate.style.border="1px solid greenyellow";
    //  }
    // });
    
    // let cvv = document.getElementById('cvv');
    // cvv.addEventListener('keyup', function(e){
    
    //  let elen = cvv.value;
    //  let cvvBox = document.getElementById('cvv-box');
    //  if(elen.length<3){
    //   cvvBox.style.border="1px solid red";
    //  }else{
    //   cvvBox.style.border="1px solid greenyellow";
    //  }
    // })
