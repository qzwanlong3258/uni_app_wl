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
		_self.web=options.id
		// this.$forceUpdate()
	}
};
</script>

<style>
	
</style>
