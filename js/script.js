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

