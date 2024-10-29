let items = [];
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
    if (localStorage.getItem("wiz"))
    {
        items = JSON.parse(localStorage.getItem("wiz"));
    }
}
function addCart(x, y)
{
    var saving =
        {
            name: x, price: y
        }
    items.push(saving);
    localStorage.setItem("wiz", JSON.stringify(items));
}
function addCart2(x, y, z)
{
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