
 let sum = 0;
function bodyClick(idOne,idTwo ,idThree){
    

    // first step : show product name in card
    const selectedItemContainer = document.getElementById(idTwo)
    const productName= document.getElementById(idOne).innerText;
    const itemSelected = document.createElement("li");
      itemSelected.innerText=productName;
      selectedItemContainer.appendChild(itemSelected)
    //   second step : findout sum
      const price =document.getElementById(idThree)
      const priceString = price.innerText
      const priceNumber = parseFloat(priceString)
      const sumNumber =parseFloat(sum);
      sum= sumNumber+priceNumber;
      console.log(sum)

    //   set the sum into total
    const setTotal = document.getElementById('total-price');
    setTotal.innerText = sum;




   
    // if(setTotal<= 0){
        
    //     btnPurchase.disabled = true;

    // }else{
    //     btnPurchase.disabled = false;
        
    // }
       
}

document.getElementById('apply-btn').addEventListener('click', function() {
    const setTotal = parseFloat(document.getElementById('total-price').innerText);
    const btnPurchase = document.getElementById('Purchase-btn');
    const getCouponField = document.getElementById('coupon-field');
    const couponValue = getCouponField.value.toUpperCase();
    console.log(couponValue);

    if (setTotal < 200) {
        btnPurchase.disabled = true;
    } else {
        btnPurchase.disabled = false;
    }

    let discount = 0; 
    if (couponValue === 'SELL200') {
        const discountPercentage = 20; 
        discount = (setTotal * discountPercentage) / 100;
        
    }

    const getDiscountElement = document.getElementById('total-discount');
    getDiscountElement.innerText = discount; 
    const grandTotal = setTotal-discount;
    const getTotal= document.getElementById('get-Total');
    getTotal.innerText = grandTotal;

    
});

const setTotal = parseFloat(document.getElementById('total-price').innerText);
const btnPurchase = document.getElementById('Purchase-btn');

if (setTotal > 0) {
    btnPurchase.addEventListener('click', function(){
        console.log('Button enabled.');
    });
} else {
    btnPurchase.disabled = true;
    console.log('Button disabled.');
}


// document.getElementById('Purchase-btn').addEventListener('click', function(){
  
//     const setTotal = parseFloat(document.getElementById('total-price').innerText);
//     const btnPurchase = document.getElementById('Purchase-btn');

//     if(setTotal <= 0){
//             btnPurchase.disabled = true;
//     }else{
//         btnPurchase.disabled = false;
//         console.log('yesWorking')
//     }

// })

// document.getElementById('apply-btn').addEventListener('click', function(){
//     const setTotal = document.getElementById('total-price');
//     const btnPurchase = document.getElementById('Purchase-btn')
//     const getCouponField = document.getElementById('coupon-field')
//     const couponValue = getCouponField.value;
//     console.log(couponValue)
//     if( setTotal < 200){
//         btnPurchase.disabled = true;
//     }else{
//         btnPurchase.disabled = false;

//     }
//     if (couponValue.toUpperCase = 'SELL200'){
//         const discount = setTotal * 20 %
//         const discountAmount = discount;
//         console.log(discountAmount)
//     }      
// })
// function bodyClick(){
//     const selectedItemContainer = document.getElementById('selected-item')
//     const productName= document.getElementById('first-product-Name').innerText;
//     const itemSelected = document.createElement("li");
//       itemSelected.innerText=productName;
//       selectedItemContainer.appendChild(itemSelected)
// }
   