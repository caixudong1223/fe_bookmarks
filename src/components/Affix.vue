
<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix">固定在距离顶部 100px 的位置</span>
    </Affix>
</template>


<script>
    export default {
    	data(){
    		return {

    		}
    	},
    	methods: {
            change (status) {
                // this.$Message.info(`当前状态：${status}`);
                this.$Message.info(`当前状态：${status}`);
            }
        }
    }
</script>

<style>

</style>