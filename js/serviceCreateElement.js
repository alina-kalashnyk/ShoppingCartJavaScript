class ServiceCreateElement {
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
}

let serviceCreateElement = new ServiceCreateElement();