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

    var saving = {
        name: "Pizza (" + x + ")",
        price: y,
        toppings: toppings
    };
    items.push(saving);
    localStorage.setItem("wiz", JSON.stringify(items));
    update();
    loadCart();
}
function loadCart()
{
    load();
    let x = "";
    for (let i = 0; i < items.length; i++)
    {
        x += "<p>" + items[i].name + " - $" + items[i].price;

        if (items[i].toppings && items[i].toppings.length > 0)
        {
            x += " (Toppings: ";
            for (let j = 0; j < items[i].toppings.length; j++)
            {
                x += items[i].toppings[j];
                if (j < items[i].toppings.length - 1)
                {
                    x += ", ";
                }
            }
            x += ")";
        }
    }
    x += "</p>";
    document.getElementById("wiz").innerHTML = x;
    update();
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
function getSelectedToppings()
{
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
    return toppings;
}