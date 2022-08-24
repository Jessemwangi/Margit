CalculateGas=()=>

{
    let reader =document.getElementById("Results");
    let price=+document.querySelector('#price').value;

    let money=+document.querySelector('#money').value;
    let ltrs=money/price;
 if (price=='' || price==null)
 {
    alert("HI, Seems that we are missing the price!, input price..");
    document.getElementById("price").focus();
    return false;
 }
 if (money=='' || money==null)
 {
    alert("HI, Seems that we are missing Money!, input money..");
    document.getElementById("money").focus();
    return false;
 }
    if (ltrs>=10){
        reader.textContent="Welcome: with the cash at hands, you can buy "+ ltrs+"L, its good, you can escape now";
        reader.style.color="#8ebf42"
    }
    else{
        reader.textContent="Welcome: with the cash at you can not buy any gasoline, "+ ltrs+"L, is below required L:  Upppss!, you have to stay here.";
    reader.style.color="#e75d07"
    }
}

