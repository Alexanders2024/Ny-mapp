var cart = [];

function addToCart(productquantity, productname, productprice)
{
    var product = {name: productname, price: productprice, quantity: productquantity}
    cart.push(product)
    showCart()
}
function removeFromCart(index)
{
    cart.splice(index, 1); 
    showCart()
}

function addQuantity(index)
{
    cart[index].quantity++
    showCart()
}

function subtractQuantity(index)
{
    if(cart[index].quantity > 1)
    {
        cart[index].quantity--
    }
    else
    {
        cart.splice(index, 1);
    }
    showCart()
}



function showCart()
{
    let cartHTML = "<h2>Varukorg</h2><ul>"
    let sum = 0; 
    for(let i = 0; i < cart.length; i++)
    {
        
        cartHTML += "<li><a href='#' class='cartbutton' onclick='removeFromCart(" + i + ")'>X</a>"
        cartHTML += "<a href='#' class='cartbutton' onclick='subtractQuantity(" + i + ")'>-</a>"
        cartHTML += "<a href='#' class='cartbutton' onclick='addQuantity(" + i + ")'>+</a>"  
        cartHTML += cart[i].quantity + " st " + cart[i].name + " - " + cart[i].price * cart[i].quantity
        cartHTML += "</li>"
        sum += cart[i].price * cart[i].quantity
    }
    document.getElementById("cart").innerHTML = cartHTML + "<li>" + "Summa: " + sum + " kr </li></ul>"

}