(function (w) {
    w.myPlugin = Object.create(null);

    w.myPlugin.install=function (Vue) {
        Vue.component("v-damu",{
            template:"<div>v-damu</div>"
        })

        Vue.directive('focus', {
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        })

        Vue.filter('filterDate', function (value) {
            //做很复杂的格式化处理
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
        })
    }

})(window)