const getters = {
    // 为listTwo服务
    getProductList: state => {
        return state.productList;
    },
    getShopList: state => {
        return state.shopList;
    },
    // 为listOne服务
    getSaledPrice: state => {
        localStorage.getItem('ceshi') ? 
        state.productList = JSON.parse(localStorage.getItem('ceshi')) : ''
        let saleProduct = state.productList.map(item => {
            // item.price = localStorage.getItem('ceshi'+index)
            console.log(item.price)
            return {
                name: "**" + item.name + "**",
                price: item.price / 2
            };
        });
        return saleProduct;
    }
}

export default getters