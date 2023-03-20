let items = document.getElementById("ordered-items");
const itemsTotal = [];
const redShirt = {
    name: `Puma Cat's Men Logo`,
    price: 50
};
const blackShoes = {
    name: `Running Rubber Shoes`,
    price: 100
};
const fitTrousers = {
    name: `Slim Fit Trousers`,
    price: 30
};
const blueShirt = {
    name: `Picque Men's Polo Shirt`,
    price: 40
};
const grayShoes = {
    name: `Grey Woven Sneakers`,
    price: 60
};

const redshirt = () => {
    const list = document.createElement("li");
    list.innerHTML = `Puma Cat's Men Logo`;
    items.appendChild(list);
    itemsTotal.push(redShirt);
    const totalItems = document.getElementById("total-items");
    totalItems.innerHTML = itemsTotal.length;


};
const blackshoes = () => {
    const list = document.createElement("li");
    list.innerHTML = `Running Rubber Shoes`;
    items.appendChild(list);
    itemsTotal.push(blackShoes);
    const totalItems = document.getElementById("total-items");
    totalItems.innerHTML = itemsTotal.length;
};
const trousers = () => {
    const list = document.createElement("li");
    list.innerHTML = `Slim Fit Trousers`;
    items.appendChild(list);
    itemsTotal.push(fitTrousers);
    const totalItems = document.getElementById("total-items");
    totalItems.innerHTML = itemsTotal.length;
};
const poloshirt = () => {
    const list = document.createElement("li");
    list.innerHTML = `Picque Men's Polo Shirt`;
    items.appendChild(list);
    itemsTotal.push(blueShirt);
    const totalItems = document.getElementById("total-items");
    totalItems.innerHTML = itemsTotal.length;
};
const grayshoes = () => {
    const list = document.createElement("li");
    list.innerHTML = `Grey Woven Sneakers`;
    items.appendChild(list);
    itemsTotal.push(grayShoes);
    const totalItems = document.getElementById("total-items");
    totalItems.innerHTML = itemsTotal.length;
};
const showTotal = () =>{
    let total = 0;
    const totalCart = document.getElementById("totalcart");
    for(let i=0; i<itemsTotal.length; i++){
        total = total + itemsTotal[i].price;
    }
    totalCart.innerHTML += `Total: $ ${total}`;
};

