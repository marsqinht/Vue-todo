<template>
  <div id="app">
    <h1>{{aa}}</h1>
    <input type="text" v-model='newItem' @keyup.enter="addItem">
    <ul>
      <li v-for='item in items' :class="{finished:item.isF}" @click="go(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data (){
    return {
      aa:'This is a todo-list',
      items:[
        {
          label:'coding',
          isF:true
        },
        {
          label:'working',
          isF:false
        }
      ],
      newItem:''
    }
  },
  methods:{
      go(a){
        a.isF=!a.isF
      },
      addItem(){
        this.items.push({
            label:this.newItem,
            isF:false
          })
        this.newItem = '';
      }
  }
}
</script>

<style>
html {
  height: 100%;
}
.finished {
  text-decoration: underline;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
