<template>
	<view>
		<view class="itemStyle active" v-for="(item, index) in itemList" :key="index" @tap="openWin(item.path)" :style="item.style||''">
			<view>{{item.name}}</view>
			<uniIcons type="arrowright" color="#999999" :size="14"/>
		</view>
	</view>
</template>

<script>
	import uniIcons from './QuShe-inputs/uni-icons/uni-icons.vue';
	export default {
		components: { uniIcons },
		props: {
			itemList: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		methods: {
			openWin(path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style>
</style>
