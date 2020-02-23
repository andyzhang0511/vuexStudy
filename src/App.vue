<template>
  <div>
    <list-one />
    <list-two />
    <p>-------组件传值案例-------</p>
    <div>我是父组件</div>
    <div>我发送给第一个组件的消息是:{{msg}}</div>
    <div>我即将接收第二组件传值是：{{childTwoMes}}</div>
    <hr />
    <childOne :msg="msg" />
    <hr>
    <childTwo @toParent="getMessage" />
  </div>
</template>

<script>
import listOne from "./components/listOne.vue";
import listTwo from "./components/listTwo.vue";

import childOne from "./components/childOne.vue";
import childTwo from "./components/childTwo.vue";

export default {
  name: "App",
  components: {
    listOne,
    listTwo,

    childOne,
    childTwo
  },
  data() {
    return {
      msg: "我是父组件，我给你发消息",
      childTwoMes: ""
    };
  },
  methods: {
    getMessage(msg111) {
      this.childTwoMes = msg111;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
