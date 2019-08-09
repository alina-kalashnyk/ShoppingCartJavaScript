class ServiceStore {
    constructor() {
    }

    getProducts() {
        let products = [];
        let productsLocalStorage = localStorage.getItem('products');
        if (productsLocalStorage !== null) {
            products = JSON.parse(productsLocalStorage);
        }
        return products;
    }

    putProducts(id) {
        let products = this.getProducts();
        let index = products.indexOf(id);
        if (index === -1) {
            products.push(id);
            var pushProduct = true;
        } else {
            products.splice(index, 1);
            var pushProduct = false;
        }

        localStorage.setItem('products', JSON.stringify(products));

        return {
            pushProduct: pushProduct,
            products: products
        }
    }
}

let serviceStore = new ServiceStore();