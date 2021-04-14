<template>
	<view>
		<view style="padding: 20px 10px;">
			<text style="font-size: 12px;color: #999999;">
				{{content}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			content: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>

</style>
