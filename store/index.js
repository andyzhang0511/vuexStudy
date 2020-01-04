import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Store大写!
  state: {
    productList: [
      {
        name: "goods 1",
        price: 100
      },
      {
        name: "goods 2",
        price: 200
      },
      {
        name: "goods 3",
        price: 300
      },
      {
        name: "goods 3",
        price: 400
      }
    ],
    shopList: [
      { name: "shop 1", address: "aaaaa" },
      { name: "shop 2", address: "bbbbb" },
      { name: "shop 3", address: "ccccc" },
      { name: "shop 4", address: "ddddd" }
    ]
  },
  getters: {
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
  },
  mutations: {
    reducePrice: (state, payload) => {
      return state.productList.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    // 提交的是mutation，可以包含异步操作
    reducePriceAsync: (context, payload) => {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 2000);
    }
  }
});
