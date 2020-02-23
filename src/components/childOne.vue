<template>
  <div>
    <div>我是第1个子组件</div>
    <div>我接受到的父组件消息是:{{msg}}</div>
    我要给我第二个兄弟发信息，内容是:
    <input type="text" v-model="to">
    <button @click="toBrother">点我给我兄弟传值</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {
        to:'hello,老二'
    };
  },
  methods:{
      toBrother(){
          this.bus.$emit('toBrother111',this.to)
      }
  }
};
</script>

<style>
</style>