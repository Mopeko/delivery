    function getBasketContent(){
        const fruits = ["strawberries","strawberries","strawberries","apples","apples","limes","limes","peach","pears","pears"]
        showMyBasket(fruits)
        console.log((fruits.length) + " fruit(s) selected")
        }
        
        
        // DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
        if (typeof getBasketContent === "function") {
            const fruits = getBasketContent()
            showMyBasket(fruits)
        }