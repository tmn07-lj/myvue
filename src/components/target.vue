<template>
	<div class="target">
	人生在世，目标三十而立，三十岁前赚够100W吧！<br/>
		距离目标还差：{{dist}}<br/>
		倒计时：{{dhour}} hours
	</div>
</template>

<script>
export default {
  data: function() {
    return {
      incomes: [1,2,3,3],
      show: false
    }
  },
  props: ['dist','dhour']
}
</script>