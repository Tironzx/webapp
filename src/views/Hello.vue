<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>{{obj}}</div>
    <div>{{hello}}</div>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <!--<hello-from></hello-from>-->
    <!--<footers></footers>-->
  </div>
</template>

<script>

import HttpUtil from '../utils/HttpUtil'
import HelloService from '../service/hello'
import HelloFrom from '../components/HelloFromVux.vue'
//import Footers from '../components/Footer.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:'HttpUtil的类型：'+(typeof HttpUtil.post),
      hello:'hello'
    }
  },
  components:{
    HelloFrom,
//    Footers
 },
  created(){
  	HttpUtil.get('/api/msg',{},function(response){
  		console.log(response);
  	},function(error){
  		console.log(error);
  	});
  	this.sayHello();
  },
  methods:{
  	sayHello(){
  		var msg= HelloService.sayHello();
  		this.hello=msg;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
