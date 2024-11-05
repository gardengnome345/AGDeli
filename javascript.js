let items = [];
let total = 0;
function tpBurger()
{
    window.location.href = "Burger";
}
function tpHotdog()
{
    window.location.href = "HotDog";
}
function tpPizza()
{
    window.location.href = "Pizza";
}
function load()
{
    const savedItems = localStorage.getItem("wiz");
    if (savedItems)
    {
        items = JSON.parse(savedItems);
    }
    else
    {
        items = [];
    }
}
function update()
{
    total = 0;
    for (let i = 0; i < items.length; i++)
    {
        total += items[i].price;
    }
    document.getElementById("totalcost").innerHTML = total;
}
function addCart(x, y, type)
{
    load();
    var saving =
        {
            name: type + " (" + x + ")", price: y
        }
    items.push(saving);
    localStorage.setItem("wiz", JSON.stringify(items));
    update();
}
function addCart2(x, y)
{
    load();
    let toppings = [];
    if (document.getElementById("pineapples").checked)
    {
        toppings.push("Pineapples");
    }
    if (document.getElementById("artichokes").checked)
    {
        toppings.push("Artichokes");
    }
    if (document.getElementById("tomatoes").checked)
    {
        toppings.push("Tomatoes");
    }


    var saving =
        {
            name: x, price: y, toppings: z
        }
    items.push(saving);
    localStorage.setItem("wiz", JSON.stringify(items));



}
function loadCart()
{
    load()
    let x = "";
    for (let y = items.length - 1; y >= 0; y--)
    {
        x += "<p>" + items[y].price + "</p>"
    }
    document.getElementById("wiz").innerHTML = x;
    document.getElementById("totalcost").innerHTML= total;
}
function burgerSort()
{
    let arr = ["With lettuce and onions", "No lettuce", "No onions"]
    for (let i = arr.length - 1; i >=0; i--)
    {
        if (document.getElementById(arr[i]).checked)
        {
            return arr[i];
        }
    }
}
function hotdogSort()
{
    let arr = ["Normal (Mustard)", "Just hot dog", "ketchup and mustard"]
    for (let i = arr.length - 1; i >=0; i--)
    {
        if (document.getElementById(arr[i]).checked)
        {
            return arr[i];
        }
    }
}
function pizzaSort()
{
    let arr = ["Normal (pepperoni)", "Plain", "margarita"]
    for (let i = arr.length - 1; i >=0; i--)
    {
        if (document.getElementById(arr[i]).checked)
        {
            return arr[i];
        }
    }
}