const mutations = {
    reducePrice: (state, payload) => {
        return state.productList.forEach(product => {
            product.price -= payload;
        });
    }
}
export default mutations