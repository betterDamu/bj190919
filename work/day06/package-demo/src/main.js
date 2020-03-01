// 当前这个import并不是es6的import
// 当前这个import是webpack自己的语法
// 它有着更强大的功能;它具有引入es6模块的能力 也要引入commonjs模块的能力
// 也具备引入AMD模块的能力
// 引入图片 引入Vue组件 引入css(需要loader的转化)
import Vue from 'vue/index2'

console.log(Vue)


/*
  node这门技术可以做两件事情:
    1. node可以写我们前端需要的工程化工具
        webpack整个源码都是使用node完成的
    2. 可以进行服务器开发

  webpack的包查找机制(和node很像):
      有别名
        直接找别名所对应的文件
        有$:
          支持 import vue from "vue/index2.js"


      没有别名的规则:
        1.循环resolve.modules配置的数组;在其的每一个子项中查找对应的第三方包
        2.查看这个包的package.json文件
        3.去找resolve.mainFields这个配置中指定的字段
          如果这个字段指向的是一个文件;则使用该文件

        如果上述规则失效
        1. 去找当前目录下的一个文件 文件名由resolve.mainFiles这个配置决定
            后缀由resolve.extensions决定

        如果上述规则全部失效
          webpack会选择报错

*/



