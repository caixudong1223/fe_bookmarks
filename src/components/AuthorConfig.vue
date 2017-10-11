<template>

	<div class="configContent clearfix">

		<div class="operateConfig">
			<Tree :data="baseData" show-checkbox></Tree>
		</div>

		<div class="menuShow">
			<Menu :theme="theme">
                <Submenu :name="item.privilegeId" v-for="item in baseData.children" :key="item.privilegeId">
                    <template slot="title">
                        {{item.title}}
                    </template>
                    <MenuItem :name="childItem.privilegeId" v-for="childItem in item.children" :key="childItem.privilegeId">{{childItem.title}}</MenuItem>
                </Submenu>
            </Menu>
		</div>
	</div>


</template>

<script>
    export default {
    	data(){
    		return {
    			baseData: [{
    				expand: true,
    				title: '菜单配置',
    				children: [{
    					title: '订单管理',
    					expand: true,
    					checked: true,
    					privilegeId: 1,
    					children: [{
    						title: '我的订单',
	    					expand: true,
	    					checked: true,
	    					privilegeId: 1001,
    					}]
    				},{
    					title: '任务管理',
    					expand: true,
    					checked: true,
    					privilegeId: 2,
    					children: [{
    						title: '我的任务',
	    					expand: true,
	    					checked: true,
	    					privilegeId: 2001,
    					}]
    				},{
    					title: '用户管理',
    					expand: true,
    					checked: true,
    					privilegeId: 3,
    					children: [{
    						title: '用户管理',
	    					expand: true,
	    					checked: true,
	    					privilegeId: 3001,
    					},{
    						title: '权限管理',
	    					expand: true,
	    					checked: true,
	    					privilegeId: 3002,
    					},{
    						title: '角色管理',
	    					expand: true,
	    					checked: true,
	    					privilegeId: 3003,
    					},{
    						title: '组织管理',
	    					expand: true,
	    					checked: true,
	    					privilegeId: 3004,
    					}]
    				}]
    			}],
    			theme: 'dark'
    		}
    	}
    }
</script>

<style lang="less" scoped>
	.clearfix{
		overflow:hidden;
		_zoom:1;
	}
	.configContent{
		width: 100%;


		.operateConfig{
			width: 50%;
			float: left;
		}

		.menuShow{
			width: 50%;
			float: left;
		}
	}

</style>