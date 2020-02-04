const actions = {
    // 提交的是mutation，可以包含异步操作
    reducePriceAsync: (context, payload) => {
        setTimeout(() => {
            context.commit("reducePrice", payload);
        }, 2000);
    }
}
export default actions