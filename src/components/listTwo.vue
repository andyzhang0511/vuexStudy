<template>
  <div class="list-two">
    <h1>list two</h1>
    <ul>
      <li v-for="(product, index) in getProductList" :key=index>
        <p>名称：{{product.name}}</p>
        <p>价格：{{product.price}}</p> 
      </li>
  </ul>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getProductList',
      'getShopList'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.list-two {
  margin: 5px;
  padding: 8px;
  background: rgb(252, 242, 199);
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 5px;
}
li {
  cursor: pointer;
  margin:7px 0;
  width: 100%;
  flex: 1;
  background: #ccc;
}

</style>
