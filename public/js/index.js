const form = document.getElementById('create-product');
const ul = document.getElementById('products');

 const appendItem = (item) => {
     const li = document.createElement('li');
     li.textContent = `${item.itemName} - ${item.itemPrice}`
     ul.appendChild(li);
 };

 form.addEventListener('submit', (event) => {
     event.preventDefault();
     const data = new FormData(form);
    console.log(data);
     fetch('http://localhost:7890/api/v1/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemId: Math.round((Math.random() * 20)),
            itemName: data.get('itemName'),
            itemPrice: data.get('itemPrice'),
            quantity: data.get('quantity'),
        }),
      })

        .then((res) => res.json())
        .then(appendItem);
 });

 fetch('http://localhost:7890/api/v1/orders/')
    .then((res) => res.json())
    .then((items) => {
    items.forEach(appendItem);
 });
