###普通路由
    5步:
        a. 定义路由组件 : 建议定义一个叫pages的目录下
        b. 定义路由 : 就是将路由 和 一个路径进行一一绑定
        c. 定义路由器: 在路由器的配置中注册路由
        e. 给路由器通电: 在vue的配置中注册路由器
        f. 将vue-router注册成插件: Vue.use(vue-router)

###嵌套路由
    children中的path属性千万不能加/
    {
        path:"/Home",
        component:Home,
        children:[
          {path:"News",component:News},
          {path:"Message",component:Message}
        ]
    }

    千万不要使用子路由的命名方式;来定义一级路由
        {path:"/Home",component:Home}
        {path:"/Home/News",component:News}

###动态路由
    使用一个path 可以映射多个路径 到一个组件上去
        { path:"/User",component:User}
        { path:"/User/:id",component:UserDetail}

        { path:"/User",component:User,children:[{path:":id",component:UserDetail}]}
            /User/1 --> User
            /User/2 --> User
            /User/3 --> User

    如何将url上的数据传递到组件内部去?
        当使用上vue-router之后: 所有的组件内部都可以通过 $route的属性来访问当前路由对象
            /User/1?name=damu&age=18#123 --> User
            {
                path:"/User/1",
                params:{
                    id:"1"
                },
                query:{
                    name:"damu",
                    age:"18"
                },
                hash:"#123"
            }

            组件内部如何访问:  {{$route.params.id}}   {{$route.query.name}}

            上述形式很不友好;会使我们的组件与我们的vue-router产生高度的耦合;

            解耦:
                props:布尔值   路由url上的params会自动传递给对应的路由组件
                    组件内部如何访问:
                        props:["id"]  {{id}}

                props:对象     当前这个对象会自动传递给对应的路由组件
                    对象:{key:val}
                    组件内部如何访问:
                        props:["key"]  {{key}}

                props:函数    当前这个函数的返回值(对象)会自动传递给对应的路由组件
                    当前函数的第一个参数就是$route对象
                    当前这个函数的返回值:{key:val}
                    组件内部如何访问:
                        props:["key"]  {{key}}


###编程式路由
    当使用上vue-router之后: 所有的组件内部都可以通过
                $route 属性来访问当前路由对象
                $router 属性来访问当前路由器对象

    通过路由器对象的push方法 来代替<router-link>


###路由配置
    path
    component
    children
    props
    redirect

###路由器配置
    routes
    mode
    linkActiveClass
    linkExactActiveClass

###vue配置
    router

### 注意点
    <router-view></router-view>
        一级路由肯定是在APP.vue中<router-view></router-view>上进行渲染的
        子路由一定是在父父路由对应的路由组件的<router-view></router-view>上渲染

    在路由中进行动态路由匹配;那么匹配到的那个路由组件;整个生命周期只会被执行一次!!!

### 高级特性
    路由懒加载
    路由元信息
    路由守卫