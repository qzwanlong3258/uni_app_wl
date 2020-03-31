<template>
	<view class="nav-list">
		<view v-for='(item,index) in navList' :key='index' class="nav-clomun" @click="linkToRouter({item,index})">
			<image class="show-icon" :src="item.icon" />
			<text class="nav-name content-font page_text-single-omit">{{item.bname}}</text>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { formatHomeRoute } from '@/config/filter.js';
	import { NAV_ONE,NAV_TWO,NAV_THREE,NAV_FOUR} from '@/config/image.js';
	
	export default {
		props: {
			// navList: {
			// 	type: Array,
			// }
		},
		data(){
			return{
				navList:[
					{
						icon:NAV_ONE,
						bname:'邀请有礼'
					},
					{
						icon:NAV_TWO,
						bname:'约量房'
					},
					{
						icon:NAV_THREE,
						bname:'装修分期'
					},
					{
						icon:NAV_FOUR,
						bname:'好店入住'
					}
				]
			}
			
		},
		methods: {
			linkToRouter({item}) {
				uni.navigateTo({
					url: formatHomeRoute(item.bname)
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.nav-clomun {
			width:16%;
			margin-left:7%;
			margin-top: 46upx;
			.show-icon {
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				line-height: 120upx;
				text-align: center;
				i {
					font-size: 50upx;
					color: #e8be2e;
				}
			}
			.nav-name {
				width: 100%;
				text-align: center;
				margin-top: 16upx;
			}
		}
	}
</style>
