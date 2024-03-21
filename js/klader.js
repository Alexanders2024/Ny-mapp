function buildMenu()
{
    var links=[
        ["Nyheter", "index.html"],
        ["kläder", "klader.html"],
        ["Designer", "designer.html"],
        ["Kontanta oss", "kontaktaoss.html"],
          

    ]
    var content = ""
    for(var i = 0; i < links.length; i++)
    {
        var text = links[i][0]
        var adress = links[i][1]
        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"
        // <li><a href="index.html">Startsidan</a></li>
    }

    document.getElementById("menu").innerHTML = content

}

function sayHello(theName)
{
    document.getElementById("mytext").innerHTML = "Hejsan, " + theName
}

function sayHelloPopUp(theText)
{
    window.alert(theText)
}


function calculate()
{
    var tal1 = document.getElementById("tal1").value
    var tal2 = document.getElementById("tal2").value

    var result = parseInt(tal1) + parseInt(tal2)

    document.getElementById("resultat").innerHTML = result
}

function multiplytable(factor)
{
   var showtable = document.getElementById("showtable")
   var content = ""
   for(var i = 1; i < 101; i++)
   {
       content = content + i + "x" + factor + "=" + i*7 + "<br>"
   }

   showtable.innerHTML = content
}

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
