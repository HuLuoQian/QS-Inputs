<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	page{
		background: #FCFCFC;
	}
	.defaultFontSize{
		font-size: 3vw;
	}
	.itemStyle{
		margin: 2vw 3vw;
		padding: 2vw 3vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #FFF;
		border-radius: 4px;
		color: #666;
		font-size: 4vw;
	}
	.active:active {
		background-color: #F2F2F2;
	}
</style>
