export function getTotals(){
    let cartTotalElement:HTMLElement = <HTMLElement> document.getElementById("totalPrice"); 
    let cartItems =  document.querySelectorAll(".cartItem");
    let cartTotal:number = 0;
    cartItems.forEach(element => {
        let priceElement:HTMLElement = element.querySelector(".cartItemPrice");
        let amountElement:HTMLElement = element.querySelector(".itemQuantity");
        let totalElement:HTMLElement = element.querySelector(".totalPrice");
        
        let priceText:string = priceElement.innerHTML;
        let price:number = parseInt(priceText.replace(/[^0-9]/g,''));
        
        let amount:number = parseInt(amountElement.innerHTML);

        let total:number = price * amount;
        cartTotal += total;
        totalElement.innerHTML = `Total: ${total} :-`;
    });

    cartTotalElement.innerHTML = `Total ${cartTotal} :-`
}