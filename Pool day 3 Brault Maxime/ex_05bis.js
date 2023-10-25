function getBasketContent(){
    const fruits = ["strawberries","strawberries","strawberries","apples","apples","limes","limes","peach","pears","pears"]
    if(fruits.length > 10){
    console.log("too many fruits selected")
    }else{
    showMyBasket(fruits)
    console.log((fruits.length) + " fruit(s) selected")
    }
    }