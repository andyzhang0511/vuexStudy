const getters = {
    getProductList: state => {
        return state.productList;
    },
    getShopList: state => {
        return state.shopList;
    },
    getSaledPrice: state => {
        let saleProduct = state.productList.map(item => {
            return {
                name: "**" + item.name + "**",
                price: item.price / 2
            };
        });
        return saleProduct;
    }
}

export default getters