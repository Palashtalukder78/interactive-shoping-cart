function giveProductQuantity(product,isIncreasing,price){
    const previousProductQuantityField = document.getElementById(product+'-number');
    let productQuantity  = previousProductQuantityField.value;
    if(isIncreasing == true){
        productQuantity = parseInt(productQuantity) + 1;
    }else if(productQuantity > 0){
        productQuantity = parseInt(productQuantity) - 1;
    }
    previousProductQuantityField.value = productQuantity;

    //Get product price
    const currentProductPriceField = document.getElementById(product+'-total');

    //Set product Price
    const totalProductPrice = productQuantity * price;

    //Update Product field
    currentProductPriceField.innerText = totalProductPrice;
    calculation();
}
function getProduct(product,price){
    const productPrice = price;
    const quantity = document.getElementById(product+'-number').value;
    const totalProductPrice = productPrice * quantity;
    return totalProductPrice;
}
function calculation(){
    /* const phonePrice = 1219;
    const phoneQuantity = document.getElementById('phone-number').value;
    const totalPhonePrice = phonePrice * phoneQuantity;

    const caseprice = 59;
    const caseQuantity = document.getElementById('case-number').value;
    const totalCasePrice = caseprice * caseQuantity; */
    const totalPhonePrice = getProduct('phone',1219);
    const totalCasePrice = getProduct('case',59);

    const subTotal  = totalPhonePrice + totalCasePrice;
    const tax       = subTotal / 10;
    const total     = subTotal + tax;

    // Updated Amount Field
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;

}
document.getElementById('phone-plus').addEventListener('click',function(){
    giveProductQuantity('phone',true,1219);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    giveProductQuantity('phone',false,1219);
});
document.getElementById('case-plus').addEventListener('click',function(){
    giveProductQuantity('case',true,59);
});
document.getElementById('case-minus').addEventListener('click',function(){
    giveProductQuantity('case',false,59);
});