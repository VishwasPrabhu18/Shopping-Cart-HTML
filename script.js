var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
var error_trw = document.getElementById('error_trw');
let count = 1;

const decreaseNumber = (incdec, itemVal) =>{
    var item1 = document.getElementById(incdec);
    var itemVal1 = document.getElementById(itemVal);

    if(item1.value <= 0){
        item1.value = 0;
    }
    else{
        item1.style.background = '#fff';
        item1.style.color = '#000';
        item1.value = parseInt(item1.value) - 1;
        itemVal1.innerHTML = parseInt(itemVal1.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
};

const increaseNumber = (incdec, itemVal) =>{
    var item2 = document.getElementById(incdec);
    var itemVal2 = document.getElementById(itemVal);

    if(item2.value >= 5){
        item2.value = 5;
        alert("Maximum 5 Items Allowed....! :)");
        item2.style.background = 'red';
        item2.style.color = '#fff';
    }
    else{
        item2.value = parseInt(item2.value) + 1;
        itemVal2.innerHTML = parseInt(itemVal2.innerHTML) + 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
};

const discount_code = () =>{
    let totalCurAmt = parseInt(total_cart_amt.innerHTML);

    if(count === 1){
        if(discountCode.value === 'Phoenix1810'){
            let newTotalAmt = totalCurAmt - 18;
            total_cart_amt.innerHTML = newTotalAmt;
            count++;
            error_trw.innerHTML = "Hurrey, Code is Correct 👍👌";
        }
        else{
            error_trw.innerHTML = "Wrong Code Entered, Sorry 🙁😢";
        }
    }
};