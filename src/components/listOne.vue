<template>
    <div class="list-one">
        <h1>list one</h1>
        <ul>
            <li v-for="(product, index) in getSaledPrice" :key=index>
                <p>名称：{{product.name}}</p>
                <p>价格：{{product.price}}</p>
            </li>
        </ul>
        <button @click="reducePrice(4)">降价</button>
        <button @click="reducePriceAsync(4)">异步降价</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, commit, mapState } from 'vuex'
export default {
    // data(){
    //   return {
    //     getSaledPrice: this.$store.getters.getSaledPrice
    //   }
    // },
    computed: {
        ...mapState([
            'productList'
        ]),
        ...mapGetters([
            'getProductList',
            'getShopList',
            'getSaledPrice'
        ])
    },
    methods: {
        // reducePrice(){
        //     this.$store.commit('reducePrice', 2)
        // },
        // reducePriceAsync(){
        //     this.$store.dispatch('reducePriceAsync', 2)
        // },
        ...mapMutations([
            'reducePrice'
        ]),
        ...mapActions([
            'reducePriceAsync'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
.list-one {
    margin: 5px;
    padding: 8px;
    background: rgb(236, 199, 199);
}
ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 5px;
}
li {
    cursor: pointer;
    margin: 5px;
    width: 100%;
    flex: 1;
    text-align: center;
    color: #fff;
    background: rgb(107, 179, 207);
}
button {
    padding: 5px 15px;
    border: none;
    font-size: 14px;
}
</style>
