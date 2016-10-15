var key = 'gom'
export default {
	load: function () {
		return JSON.parse(window.localStorage.getItem(key) || "[]")
	},
	save: function (items) {
		window.localStorage.setItem(key,JSON.stringify(items))
	},
	geto: function () {
		var dist = JSON.parse(window.localStorage.getItem('dist') || 1000000)
		return dist
	},
	seto: function (dist) {
		window.localStorage.setItem('dist',dist)
	}
}