<template>
	<div class="history">
		<button v-on:click="change()">历史收入 <span>{{status}}</span></button>
		<ul v-show="show">
		<li v-for="(i, index) in incomes" :key="i.time">
			{{i.money}} || {{i.description}} || {{i.time}}
          </li>	
		</ul>
	</div>
</template>

<script>
export default {
  data: function() {
    return {
      incomes: [1,2,3,3],
      show: false,
      status: '>'
    }
  },
  methods :{
  	change: function() {
  		this.show = !this.show
  		this.show==true ? this.status = '<':this.status = '>'
  	}
  },
  props: ['incomes']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
