<template>
	<view class="recommend-box">
		<ljl-states :infor="states" @change="stateChange" />
		<view
			class="activity"
			v-if="states.index === 0 ? item.applyCount !== item.count : item.applyCount === item.count"
			v-for="(item, index) in activityList"
			:key="index"
			@click="linkToRoute(item)"
		>
			<ljl-activity :infor="item" />
		</view>
	</view>
</template>

<script>
'use scrict';

import LjlActivity from './components/LjlActivity.vue';
import LjlStates from '@/components/LjlStates';
import { RECOMMENDED_MEMBER } from '@/config/router.js';
import { loadActivity, completeActivity } from '@/api/activity.js';

export default {
	data() {
		return {
			states: {
				index: 0,
				list: [{ title: '进行中的活动' }, { title: '已结束的活动' }]
			},
			activityList: [
				{ title: '推荐会员', descript: '还差1人，可获得10积分' },
				{ title: '推荐设计师', descript: '还差1人，可获得50积分' },
				{ title: '推荐客户', descript: '成交后，可获得500积分' }
			]
		};
	},
	onLoad() {
		this.loadListForActivity();
	},
	methods: {
		/**
		 * 加载活动列表
		 */
		loadListForActivity() {
			loadActivity().then(res => {
				this.activityList = res.list;
			});
		},

		/**
		 * 切换状态
		 */
		stateChange({ index }) {
			this.states.index = index;
		},

		/**
		 * 链接到路由
		 */
		linkToRoute(item) {
			uni.navigateTo({
				url: RECOMMENDED_MEMBER
			});
		}
	},
	components: {
		LjlActivity,
		LjlStates
	}
};
</script>

<style lang="scss"></style>
