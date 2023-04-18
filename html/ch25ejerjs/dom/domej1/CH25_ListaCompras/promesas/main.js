let producto = [
    {
    "id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{
        "rate":3.9,
        "count":120
        } },
    {
        "id": 2,
        "title": "Fjallraven - Kanken Backpack, Fits 13\" Laptops",
        "price": 80.00,
        "description": "A classic backpack made from durable, water-resistant material. Fits laptops up to 13 inches.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 500
        } },
    {
        "id": 3,
        "title": "Herschel Supply Co. Little America Backpack",
        "price": 100.00,
        "description": "A spacious backpack with a classic mountaineering style. Features a padded laptop sleeve and adjustable drawstring closure.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_SL1500_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 200
        } },
    {
        "id": 4,
        "title": "Nike Sportswear Hayward Futura 2.0 Backpack",
        "price": 55.00,
        "description": "A lightweight backpack with a padded back panel and adjustable straps. Features a large main compartment and a front zippered pocket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81NAkzBw2xL._AC_SL1500_.jpg",
        "rating": {
          "rate": 4.2,
          "count": 150
        } },
   {
        "id": 5,
        "title": "Under Armour Hustle 5.0 Backpack",
        "price": 55.00,
        "description": "A durable backpack with a water-resistant finish. Features a padded laptop sleeve and multiple pockets for organization.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81gHb82mXWL._AC_SL1500_.jpg",
        "rating": {
        "rate": 4.6,
        "count": 300
         } },
    {
        "id": 6,
        "title": "Herschel Supply Co. Retreat Backpack",
        "price": 80.00,
        "description": "A stylish backpack with a durable exterior and plenty of storage space. Features a fleece-lined laptop sleeve and magnetic strap closures.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81aFkxvD2xL._AC_SL1500_.jpg",
        "rating": {
        "rate": 4.7,
        "count": 800
        } },
    {
        "id": 7,
        "title": "Carhartt Legacy Standard Work Backpack",
        "price": 69.99,
        "description": "A rugged backpack built to withstand tough work conditions. Features a padded laptop sleeve and multiple pockets for organization.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81eeBYqo0GL._AC_SL1500_.jpg",
        "rating": {
        "rate": 4.7,
        "count": 1200
        } },
    {
        "id": 8,
        "title": "Amazon Basics Classic Backpack",
        "price": 17.99,
        "description": "A simple and affordable backpack that is perfect for everyday use. Features multiple pockets for organization and adjustable straps for a comfortable fit.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81ZHl42voHL._AC_SL1500_.jpg",
        "rating": {
        "rate": 4.4,
        "count": 1900
        } },
    {
        "id": 9,
        "title": "JanSport SuperBreak One Backpack",
        "price": 36.00,
        "description": "A classic backpack that is perfect for school or everyday use. Features a large main compartment and a front pocket for organization.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
        "rate": 4.6,
        "count": 4000
        } },
    {
        "id": 10,
        "title": "adidas Alliance II Sackpack",
        "price": 18.00,
        "description": "A lightweight and compact backpack that is perfect for carrying gym clothes or a small amount of gear. Features a drawstring closure and a zippered pocket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UL640_QL65_ML3_.jpg",
        "rating": {
        "rate": 4.5,
        "count": 1500
        } },    
    ];

function getProducto() {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((prods) => {
        if (prods) {
          resolve(prods);
        } else {
          reject(new Error("Producto no existe"));
        }
      })
      .catch((err) => {
        console.error("Error en la respuesta" + err.message);
        reject(err);
      }); // new promise
  }); // catch promise
}// Get Producto


getProducto()
        .then((prod)=> console.log(prod))
        .catch((err)=> console.log(err.message));

