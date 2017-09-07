
<template>
    <div class="actor">
        <Table style="margin: 10px auto 20px;" :columns="columns" :data="actors"></Table>
        <div style="text-align: center;margin: 10px auto 20px;">
            <Page ref="page" :total="total" :page-size="page.pageNumber" @on-change="getUser" @on-page-size-change="setPageNumber" show-elevator show-sizer show-total></Page>
        </div>

    </div>
</template>
<script>
var url = 'http://localhost:3000';
export default {
    data() {
        return {
            total: 40,
            columns: [
                {
                    title: '演员编号',
                    key: 'actor_id'
                },
                {
                    title: '姓',
                    key: 'first_name'
                },
                {
                    title: '名',
                    key: 'last_name'
                }
            ],
            actors: [],
            page: {
                currentPage: 1,
                pageNumber: 0
            }
        }
    },
    created() {
        this.page.pageNumber = 10;
        this.getUser(1)
    },
    methods: {
        getUser(curPage) {
            console.log(curPage);
            let _this = this;
            $.ajax({
                url: url + '/users/selectusers',
                type: 'get',
                dataType: 'json',
                data: {
                    currentPage: curPage,
                    pageNumber: _this.page.pageNumber
                },
                success: function(res) {
                    if (res.code == 200) {
                        _this.actors = res.users;
                        _this.total = res.actorNum;
                    }

                }
            })
        },
        setPageNumber(size) {
            let _this = this;
            _this.page.pageNumber = size;
            _this.getUser(1);
        }
    }
}
</script>

<style scoped type="less">
@import url('../assets/less/hello.less');
</style>
