### 静态组件的拆分
    app
        header
        list
            item
        footer

### 设计数据
    因为header;list;footer都要使用到待办任务那个数据
    所以我们将待办任务的那个数据(数组 list)放到了app.vue中

### header
    在header的输入框输入数据时;最终将数据添加到app的list数组中
        涉及到一个子向父的传值: vue自定义事件的方式的完成的(最推荐)
                              也可以 函数 & props 进行完成
                              也可以使用总线
                              也可以使用pubsub

### list
    app 将数据传给 list;
    list拿到之后进行循环
    将循环出来的每一项再交给item
        涉及到父向子传值;传了两层: props技术

    v-model脏数据的问题:
        v-model本身是数据双向绑定;如果你给v-model绑定的是一个来至于父组件的数据;
        那么就会出现脏数据! 我们在子组件就直接修改了来至于父组件的数据

        解决方案:
            1. 将v-model使用到的数据转存一份进行操作;
                可是在todolist中 app中的数据不光list用;footer也用;list中对app数据进行操作;
                list也要的到同步;
                所以我们不能只转存;每一次数据改变的时候;还是得修改父组件的数据(不能直接修改;
                而是通过vue自定义事件的形式;主动通知父组件;让父组件进行修改)
                    涉及到数据转存;涉及到子向父进行数据传递

            2. 将v-model使用到的数据定义成一个计算属性(推荐)
                get 拿父组件的数据
                set 通知父组件去修改数据
                    涉及到计算属性;涉及到子向父进行数据传递

    动画:
        熟悉在vue中class的使用

    删除:
        子向父传值;通知父组件对数据进行修改


### footer
    统计全部: 父向子传值
    统计已完成: 父向子传值&计算属性(依赖的是父组件的数据)
    清除已完成任务: 子向父传值
    全选按钮的同步: 计算属性(依赖的是footer组件本身的数据)
        checkAll:{
            //app中的每一项复选框的状态决定当前全选按钮是否要选中
            get(){
              let flag = this.computedCount!==0 && this.listArr.length!==0;
              return this.computedCount === this.listArr.length && flag;
            },
            //全选按钮自身的状态 决定app中的每一项的复选框要不要选中
            set(val){
              //根据val的取值 去操作app中的listArr数据
              this.$emit("checkAll",val)
            }
        }

### 数据的持久化
    JSON规范:(ECMA404规范; ECMA262规范:ECMAScript的规范)
        {
            "key":val,     //对象的key必须是字符串形式
            "key2":val2    //最后一个键值对的逗号是不能存在的
        }
    序列化
        对象转成其字符串的表达形式
            JSON.stringify(obj)
    反序列化
        将一个对象的字符串表达形式转成一个对象
            JSON.parse(jsonStr)

    缓存相关
        localStorage.getItem(key)      : 读取缓存的数据
        localStorage.setItem(key,val)  : 设置缓存的数据