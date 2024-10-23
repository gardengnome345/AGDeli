let items = [];
function addCart1()
{
    window.location.href = "Burger";
}
function addCart2()
{
    window.location.href = "HotDog";
}
function addCart3()
{
    window.location.href = "Pizza";
}
function addCart4()
{
    window.location.href = "../Cart";
}
function addCart5()
{
    window.location.href = "../Cart";
}
function addCart6()
{
    window.location.href = "../Cart";
}
function addCart()
{
    if(localStorage.getItem("wiz"))
    {
        items.push(JSON.parse(localStorage.getItem("wiz")));
    }
    var saving =
        {
            name: "burger", price: 5
        }
    items.push(saving);
    localStorage.setItem("wiz", JSON.stringify(items));
    load();
}
function load()
{
    if(localStorage.getItem("wiz"))
    {
        items = JSON.parse(localStorage.getItem("wiz"));
    }
    let x = "";
    for (let y = items.length - 1; y >= 0; y--)
    {
        x += "<p>" + items[y].price + "</p>"
    }
    document.getElementById("wiz").innerHTML = x;
}