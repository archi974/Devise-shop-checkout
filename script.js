const cartItems = [
    {
        name: "iPhone 12 Pro",
        color: "Golden",
        price: 999.00,
        quantity: 1,
        img: "./resources/Gold.png",
    },
    {
        name: "Apple Watch",
        color: "Blue",
        price: 399.00,
        quantity: 1,
        img: "./resources/Apple-watch.png",
    },
    {
        name: "iMac",
        color: "Green",
        price: 1199.00,
        quantity: 1,
        img: "./resources/iMac.png",
    }
];

const container = document.getElementById("cart-items");

cartItems.forEach(item => {
    const article = document.createElement("article");
    article.classList.add("article-history");
    article.innerHTML = `
    <div class="img-wrapper">
        <img src="${item.img}" alt="${item.name}">
    </div>
    <div class="article-history_info">
        <div class="article-history_info-text">
            <div>
                <h3>${item.name}</h3>
                <p>${item.color}</p>
            </div>
            <data value="${item.price}">$${item.price.toFixed(2)}</data>
        </div>
        <div class="article-history_info-quantity">
            <p>x${item.quantity}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" role="img"
                aria-label="Remove item">
                <path fill="currentColor"
                    d="m8.401 16.333l-.734-.727L11.266 12L7.667 8.42l.734-.728L12 11.29l3.574-3.597l.734.727L12.709 12l3.599 3.606l-.734.727L12 12.737z" />
            </svg>
        </div>
    </div>`
    container.appendChild(article);
});
