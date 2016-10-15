<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png">
        <hello></hello>
        <h1 v-html="subtitle"></h1>
        <input v-model="newTodo" v-on:keyup.enter="addTodo">
        <ul>
          <li v-for="(todo, index) in todos" 
          v-bind:class="{finish: todo.isfinish}">
            {{todo.text}}
            <button v-on:click="cfinish(todo)">√</button>
            <button v-on:click="removeTodo(index)">X</button>
          </li>
        </ul>
    </div>
</template>

<script>
import Store from './store'
import Hello from './components/Hello'
export default {
    components: {
        Hello
    },
    data: function () {
        return {
            subtitle: '<i>This is the TodoLists</i>',
            todos: Store.fetch(),
            newTodo: '',
            alltask: 0
        }
    },
    methods : {
      addTodo: function() {
        var text = this.newTodo.trim()
        if (text) {
          this.todos.push({ text : text , isfinish : false})
          this.newTodo = ''
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index,1)
      },
      cfinish: function (todo) {
        todo.isfinish = !todo.isfinish
      }
    },
    watch : {
        todos :{
            handler: function(val) {
                Store.save(val)
            },
            deep: true
        }
    }
}
</script>

<style>
    .finish {
        text-decoration: underline;
    }
    html {
        height: 100%;
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
