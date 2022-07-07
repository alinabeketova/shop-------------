class Products {
    constructor() {
        this.classnameActive = 'products-element__button_active';
        this.ladelAdd = 'добавить в корзину';
        this.labelRemove = 'удалить из корзины';
    }
    
    hendleSetLocationStorege(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classnameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classnameActive);
            element.innerHTML = this.ladelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.ladelAdd;
            } else {
                activeClass = ' '+this.classnameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                        💵 ${price.toLocaleString()}р
                    </span>
                    <button class="products-element__button${activeClass}" onclick="productsPage.hendleSetLocationStorege(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });
        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();