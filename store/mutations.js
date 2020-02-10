const mutations = {
    // reducePrice: (state, payload) => {
    //     return state.productList.forEach((product, index) => {
    //         localStorage.setItem('ceshi' + index, product.price)
    //         product.price -= payload;
    //     });
    // }
    reducePrice: (state, payload) => {
        state.productList.forEach((product, index) => {
            product.price -= payload;
        });
        localStorage.setItem('ceshi', JSON.stringify(state.productList))
        return state.productList
    }
}
export default mutations

