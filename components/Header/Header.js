class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(couter) {
        const html = `
            <div class="header-conteiner">
                <div class="header-couter" onclick="headerPage.handlerOpenShoppingPage();">
                    🛒 ${couter}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);