<template>
    <view>
        <web-view  :src="web"></web-view>
    </view>
</template>


<script>
'use strict';
var _self;
export default {
	data() {
		return{
			web:''
		}
	},
	methods:{},
	 onLoad(options) {
		 _self=this
		       let a = options.id.replace("*", ":")
		_self.web= a.replace(/!/g,"/")
		console.log(_self.web)
		// this.$forceUpdate()
	}
};
</script>

<style>
	
</style>
