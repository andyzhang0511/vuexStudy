const mutations = {
    reducePrice: (state, payload) => {
        return state.productList.forEach((product, index) => {
            localStorage.setItem('ceshi' + index, product.price)
            product.price -= payload;
        });
    }
}
export default mutations

