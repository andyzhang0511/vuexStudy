const getters = {
    getProductList: state => {
        return state.productList;
    },
    getShopList: state => {
        return state.shopList;
    },
    getSaledPrice: state => {
        let saleProduct = state.productList.map((item,index) => {
            // item.price = localStorage.getItem('ceshi'+index)
            console.log(item.price)
            return {
                name: "**" + item.name + "**",
                price: localStorage.getItem('ceshi'+index) / 2
            };
        });
        return saleProduct;
    }
}

export default getters