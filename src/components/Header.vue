<template>
    <div class="top-nav">
        <Menu mode="horizontal" :theme="theme" active-name="1">
            <MenuItem name="1">
                <Icon type="grid"></Icon>
                <router-link to="/ui">UI框架</router-link>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                <router-link to="/vue">Vue</router-link>
                
            </MenuItem>
            <MenuItem name="3">
                <Icon type="settings"></Icon>
                <router-link to="/node">Node</router-link>
            </MenuItem>
        </Menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme: 'dark'
        }
    }
}
</script>

<style lang="less" scoped>
 @import url('../assets/less/header.less');
</style>