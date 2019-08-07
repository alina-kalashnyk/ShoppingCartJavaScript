class ServiceProducts {
    constructor(containerProducts, containerCounter, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.productsCatalog = productsCatalog;
        this.create();
    }

    create() {
        let wrapper = document.createElement('slot');

        let products = serviceStore.getProducts();
        this.containerCounter.innerText = products.length;

        for (let i = 0; i < this.productsCatalog.length; i++) {
            let index = products.indexOf(this.productsCatalog[i].id);
            if (index === -1) {
                var activeClass = '';
                var activeText = 'Add to cart';
            } else {
                var activeClass = ' btn-active';
                var activeText = 'Remove from cart';
            }

            let item  = this.getElement({tagName: 'div', className: 'item'});
            let name  = this.getElement({tagName: 'div', className: 'name', innerText: this.productsCatalog[i].name});
            let img   = this.getElement({tagName: 'div', className:'img', backgroundImage: `url(${this.productsCatalog[i].img})`});
            let price = this.getElement({tagName: 'div', className: 'price', innerText: this.productsCatalog[i].price.toLocaleString()});
            let btn   = this.getElement({tagName: 'button', className: 'btn'+activeClass, innerText: activeText, id: this.productsCatalog[i].id});

            btn.addEventListener('click', function () {
                let id = this.getAttribute('data-id');
                let result = serviceStore.putProducts(id);

                serviceProducts.containerCounter.innerText = result.products.length;

                if (result.pushProduct) {
                    this.classList.add('btn-active');
                    this.innerText = 'Remove from cart';
                } else {
                    this.classList.remove('btn-active');
                    this.innerText = 'Add to cart';
                }
            });
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);

            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    getElement(options) {
        let element = document.createElement(options.tagName);
        if ('className' in options) {
            element.setAttribute('class', options.className);
        }
        if('innerText' in options) {
            element.innerText = options.innerText;
        }
        if('backgroundImage' in options) {
            element.style.backgroundImage = options.backgroundImage;
        }
        if('id' in options) {
            element.setAttribute('data-id', options.id );
        }
        return element;
    }

    actions() {
    }
}

let serviceProducts = new ServiceProducts('.container-products', '.container-counter', productsCatalog);