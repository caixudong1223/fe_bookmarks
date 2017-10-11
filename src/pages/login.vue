<template>
	<div class="login">
		<div class="login-form">
			<h3>欢迎登录</h3>
			<div class="form-item">
				<Input v-model="userName" placeholder="用户名" style="width: 300px"></Input>
			</div>
			<div class="form-item">
				<Input v-model="password" placeholder="密码" style="width: 300px"></Input>
			</div>
			<div class="btn-content">
				<Button type="primary" @click="userLogin">登录</Button>
			</div>
		</div>
	</div>
</template>

<script>

    export default {
    	data(){
    		return {
    			userName: '',
    			password: ''
    		}
    	},
    	created(){

    	},
    	methods: {
    		userLogin(){

    		}
    	}
    }
</script>

<style lang="less" scoped>
	.login{
		width: 100%;

		.login-form{
			width: 500px;
			height: 300px;
			border: 1px solid #ccc;
			border-radius: 10px;
			text-align: center;
			margin: 0 auto;

			.form-item{
				height: 80px;
				line-height: 80px;
			}

			.btn-content{
				height: 100px;
				line-height: 100px;
			}
		}
	}

</style>