<template>
	<div class="vueDemos">
        <div class="demoList">
            <a :href="item.url" v-for="item in demoList" :key="item.index">
                <Card style="width: 320px; min-height: 150px;float: left;">
                    <p slot="title">
                        <Icon type="flag"></Icon>
                        {{item.title}}
                    </p>
                    <div class="cardContent">
                        <p>{{item.desc}}</p>
                    </div>
                </Card>
            </a>
        </div>
	</div>
</template>

<script>
    import demoList from '../data/vueDemo.json'
    export default {
    	data(){
    		return {
                demoList: []
    		}
    	},
    	created(){
            this.demoList = demoList;
    	},
    	methods: {

    	}
    }
</script>

<style lang="less" scoped>
	.vueDemos{
        .demoList{
           /*  .cardBlock{
                width: 320px;
                float: left; */
                .cardContent{
                    font-size: 12px;
                    text-align: center;
                }
            /* } */
        }
	}
</style>