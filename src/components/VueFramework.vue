<template>
    <div class="framework">
        <Collapse v-model="value">
            <Panel name="1">
                Vue框架
                <div slot="content" style="text-align:center">
                    <a href="https://cn.vuejs.org/">
                        <img src="../../static/images/vue.png" width="200" height="200" alt="">
                    </a>
                    <h3 style="text-align:center">Vue.js</h3>
                </div>
            </Panel>
            <Panel name="2">
                Vue技术栈
                <div slot="content">
                    <Steps :current="current">
                        <Step title="Vue" content="Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。"></Step>
                        <Step title="vue-router" content="路由"></Step>
                        <Step title="vuex" content="Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化"></Step>
                        <Step title="webpack" content="webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。"></Step>
                    </Steps>
                </div>
            </Panel>
            <Panel name="3">
                教程
                <div slot="content">
                    <Row>
                        <Col span="6">
                            <a href="https://vuex.vuejs.org/zh-cn/">vuex</a>
                        </Col>
                        <Col span="6">
                            <a href="https://router.vuejs.org/zh-cn/">vue-router</a>
                        </Col>
                        <Col span="6">
                            <a href="https://doc.webpack-china.org/">webpack</a>
                        </Col>
                    </Row>
                    
                </div>
            </Panel>
        </Collapse>


    </div>

</template>

<script>
    export default {
        data(){
            return {
                value: "1",
                current: 4
            }
        }
    }

</script>

<style type="less" scoped>
    @import url('../assets/less/vueframework.less');
</style>