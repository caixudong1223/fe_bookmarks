<template>
    <div>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="grid"></Icon>
                UI框架
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </MenuItem>
            <!-- <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu> -->
            <MenuItem name="3">
                <Icon type="settings"></Icon>
                综合设置
            </MenuItem>
        </Menu>

    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'dark'
        }
    }
}
</script>

<style lang="less" scoped>
// @import url('../assets/less/header.less');
</style>