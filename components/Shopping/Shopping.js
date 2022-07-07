class Shopping {
    handleclear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0
    
        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element_name">${name}</td>
                        <td class="shopping-element_price">${price.toLocaleString()} р</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html =`
            <div class="shopping-container">
                <div class="shopping-close" onclick="shoppingPage.handleclear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element_name">💲  Сумма:</td>
                        <td class="shopping-element_price">${sumCatalog.toLocaleString()} р</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }    
}

const shoppingPage = new Shopping();