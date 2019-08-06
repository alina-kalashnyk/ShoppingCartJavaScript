class ServiceProducts {
    constructor(containerProducts, productsCatalog) {
        this.container = document.querySelector(containerProducts);
        this.productsCatalog = productsCatalog;
        this.create();
    }

    create() {
        let wrapper = document.createElement('slot');
        for (let i = 0; i < this.productsCatalog.length; i++) {
            let item  = this.getElement({tagName: 'div', className: 'item'});
            let name  = this.getElement({tagName: 'div', className: 'name', innerText: this.productsCatalog[i].name});
            let img   = this.getElement({tagName: 'div', className:'img', backgroundImage: `url(${this.productsCatalog[i].img})`});
            let price = this.getElement({tagName: 'div', className: 'price', innerText: this.productsCatalog[i].price.toLocaleString()});
            let btn   = this.getElement({tagName: 'button', className: 'btn', innerText: `Add to cart`});

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
        return element;
    }

    actions() {
    }
}

let serviceProducts = new ServiceProducts('.container-products', productsCatalog);