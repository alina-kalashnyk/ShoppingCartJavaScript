class ServiceCart {
    constructor(containerCounter, containerCart, productCatalog) {
        this.containerCounter = document.querySelector(containerCounter);
        this.containerCart = document.querySelector(containerCart);
        this.productCatalog = productCatalog;
        this.create();
    }

    create() {
        this.containerCounter.addEventListener('click', function () {
            serviceCart.containerCart.style.display = 'flex';
            let productCart = serviceCart.getProductCart();
            let wrapper = document.createElement('slot');

            for (let i = 0; i < productCart.length; i++) {
                let item = serviceCreateElement.getElement({tagName: 'div', className: 'item'});
                let name = serviceCreateElement.getElement({
                    tagName: 'div',
                    className: 'name',
                    innerText: productCart[i].name
                });
                let img = serviceCreateElement.getElement({
                    tagName: 'div',
                    className: 'img',
                    backgroundImage: `url(${productCart[i].img})`
                });
                let price = serviceCreateElement.getElement({
                    tagName: 'div',
                    className: 'price',
                    innerText: productCart[i].price.toLocaleString()
                });

                item.appendChild(name);
                item.appendChild(img);
                item.appendChild(price);
                wrapper.appendChild(item);
            }

            let close = serviceCreateElement.getElement({tagName: 'div', className: 'cart-close'});
            close.addEventListener('click', function () {
                serviceCart.containerCart.innerHTML = '';
                serviceCart.containerCart.style.display = 'none';
            });
            serviceCart.containerCart.appendChild(wrapper);
            serviceCart.containerCart.appendChild(close);
        });
    }

    getProductCart() {
        let products = serviceStore.getProducts();
        let productCart = [];
        for (let i = 0; i < this.productCatalog.length; i++) {
            if (products.indexOf(this.productCatalog[i].id) !== -1) {
                productCart.push(this.productCatalog[i]);
            }
        }
        return productCart;
    }
}

let serviceCart = new ServiceCart('.container-counter', '.container-cart', productsCatalog);