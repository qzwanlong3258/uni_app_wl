<template>
	<view class="customer-list-box">
		<ljl-states :infor="states" @change="stateChange" />
		<template v-if="list.length">
			<ljl-customer-infor v-for="(item, index) in list" :key="index" :infor="item" />
		</template>
		<template v-else>
			<null-data :content="states.list[states.index].nullContent" />
			<view class="page_view-bottomMenu"><ljl-menu :infor="menu" /></view>
		</template>
	</view>
</template>

<script>
'use scrict';
import LjlMenu from '@/components/LjlMenu';
import LjlStates from '@/components/LjlStates';
import LjlCustomerInfor from './components/LjlCustomerInfor';
import NullData from '@/components/NullData.vue';
import * as imgs from '@/config/image.js';
import { loadCustomer } from '@/api/todoChild/customerList.js';
import { HOME, CUSTOMER_LIST, PROMOTE_GOODS, WITHDRAW, POSTER } from '@/config/router.js';

export default {
	data() {
		return {
			list: [],
			buffer: [],
			states: {
				index: 0,
				list: [{ title: '全部', nullContent: "暂无数据" }, { title: '会员', nullContent: "暂无会员" }, { title: '客户', nullContent: "暂无客户" }, { title: '设计师', nullContent: "暂无设计师" }]
			},
			menu: {
				title: '推广工具',
				center: 'center',
				list: [
					{ title: '专属海报', icon: imgs.POSTER, href: POSTER },
					{ title: '推广商品', icon: imgs.GOODS, href: PROMOTE_GOODS },
					{ title: '邀请会员', icon: imgs.INVITE_MEMBER, href: POSTER },
					{ title: '邀请设计师', icon: imgs.INVITE_DESIGNER, href: POSTER },
					{ title: '邀请客户', icon: imgs.INVITE_CLIENT, href: POSTER }
				]
			}
		};
	},
	onLoad(options) {
		this.states.index = Number(options.index) + 1;
		this.loadList();
	},
	methods: {
		
		loadList: async function() {
			this.buffer = (await loadCustomer()).list;
			this.stateTo0();
		},
		
		/**
		 * 切换到状态0(全部)
		 */
		stateTo0() {
			this.states.index = 0;
			this.list = [...this.buffer];
		},
		
		/**
		 * 切换到状态1(会员)
		 */
		stateTo1() {
			this.states.index = 1;
			this.list = this.buffer.filter(item => item.roleName.indexOf('会员') !== -1);
		},
		
		/**
		 * 切换到状态2(客户)
		 */
		stateTo2() {
			this.states.index = 2;
			this.list = this.buffer.filter(item => item.roleName.indexOf('客户') !== -1);
		},
		
		/**
		 * 切换到状态3(设计师)
		 */
		stateTo3() {
			this.states.index = 3;
			this.list = this.buffer.filter(item => item.roleName.indexOf('设计师') !== -1);
		},
		
		/**
		 * 切换状态
		 */
		stateChange: async function({ index }) {
			this.states.index = index;
			this[`stateTo${index}`] && this[`stateTo${index}`]();
		}
	},
	components: {
		LjlMenu,
		LjlStates,
		LjlCustomerInfor,
		NullData
	}
};
</script>

<style lang="scss" scoped>

</style>
