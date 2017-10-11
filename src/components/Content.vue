<template>
    <div class="card-list">
        <Row :gutter="10">
            <Col span="6" v-for="item in data" :key="item.index">
                <a :href="item.siteurl">
                    <div class="card">
                        <Card>
                            <div class="card-pic">
                                <img :src="item.picurl">
                            </div>
                            <h3>{{item.name}}</h3>
                            <div class="card-tags" v-if="item.tags && item.tags.length > 0">
                                <Tag v-for="(tag,index) in item.tags" :color="colors[index % 4]" :key="index">{{tag}}</Tag>
                            </div>
                        </Card>
                    </div>
                </a>
            </Col>

        </Row>
    </div>
</template>


<script>
    import uidata from '../data/ui.json';
    import colors from '../data/colors.json'
    export default {
        data() {
            return {
                data: [],
                colors: []
            }
        },
        created() {
            this.data = uidata;
            this.colors = colors;
        }
    }

</script>

<style lang="less" scoped>
    @import url('../assets/less/content.less');
</style>