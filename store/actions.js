const actions = {
    // 提交的是mutation，可以包含异步操作
    // 这里我在两个方法中使用了两个不同的参数，一个是context，它是一个和store对象具有相同对象属性的参数
    reducePriceAsync: (context, payload) => {
        setTimeout(() => {
            context.commit("reducePrice", payload);
        }, 2000);
    }
    // 也可以这么写
    // reducePriceAsync: ( {commit}, payload) => {
    //     setTimeout(() => {
    //         commit("reducePrice", payload);
    //     }, 2000);
    // }
}
export default actions
