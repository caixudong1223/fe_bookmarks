
<template>
    <!-- <div class="actor">
            <Table style="margin: 10px auto 20px;" :columns="columns" :data="actors"></Table>
            <div style="text-align: center;margin: 10px auto 20px;">
                <Page ref="page" :total="total" :page-size="page.pageNumber" @on-change="getUser" @on-page-size-change="setPageNumber" show-elevator show-sizer show-total></Page>
            </div>
        </div> -->
    <div class="uploadFiles">
        <form action="http://localhost:3000/upload" method="post" enctype="multipart/form-data">
            <h2>单图上传</h2>
            <input type="file" name="logo">
            <input type="file" multiple="multiple" name="test">
            <input type="submit" value="提交">
        </form>
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
            _this.$loading.start();
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
                        _this.$loading.finish();
                        _this.actors = res.users;
                        _this.total = res.actorNum;
                    }else{
                        _this.$loading.error();
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
