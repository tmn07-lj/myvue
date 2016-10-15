<template>
    <div id="app">
        <target v-bind:dist="dist" v-bind:dhour="d30"></target>
        <history v-bind:incomes="all_incomes"></history>
        <h1 v-html="subtitle"></h1>
        <div class="main">
            收入：<input v-model="money">
            描述：<input v-model="description" v-on:keyup.enter="submit">
            <button v-on:click="submit()">√</button>
        </div>
    </div>
</template>

<script>
import Store from './storemoney'
import target from './components/target'
import history from './components/history'

function dist30(birthday) {
    var now = Date.parse(new Date());
    var d30 = birthday + 946684800000;
    return ((d30 - now)/3600000).toFixed(2)
}

export default {
    components: {
        target,history
    },
    data: function () {
        return {
            subtitle: '<i>又赚钱了吗？</i>',
            money: '',
            description: '',
            name: 'tmn07',
            d30: dist30(Date.parse(new Date('1996-08-18'))),
            all_incomes: Store.load(),
            dist: Store.geto()
        }
    },
    methods : {
        submit: function () {
            this.all_incomes.unshift({money: this.money , description: this.description , time: Date.parse(new Date())})
            this.money = ''
            this.description = ''
            Store.save(this.all_incomes)
        }
    },
    watch : {
        all_incomes :{
            handler: function(val) {
                // Store.save(val)
                console.log(this.all_incomes)
                var dist = 1000000
                for (var i = this.all_incomes.length - 1; i >= 0; i--) {
                    dist -= parseFloat(this.all_incomes[i].money)
                }
                this.dist = dist
                Store.seto(dist)
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
