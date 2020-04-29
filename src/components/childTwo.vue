<template>
  <div>
    <div>我是第2个子组件</div>
    <div>我发送给父组件消息是:{{msg}}</div>
    <button @click="toFather">向父组件发送消息</button>
    <div>我得到的兄弟组件信息是:{{getMsg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是子组件2发给父组件的值",
      getMsg: ""
    };
  },
  beforeCreate() {
    this.bus.$on("toBrother111", val => {
      this.getMsg = val;
    });
  },
  methods: {
    // 利用vue中的$emit将想要传递的值通过函数的形式传出，在父组件接收
    // this.$emit(arg1,arg2) arg1:方法名字，arg2:要传出的值
    toFather() {
      this.$emit("toParent", this.msg);
    }
  }
};
</script>

<style>
</style>
