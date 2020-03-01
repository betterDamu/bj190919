var colors = require('colors');

console.log(colors.green);
/*
    console.log(module.paths)
    module.paths
        [ 'D:\\code\\BaseCode\\北京_19_0919\\work\\day06\\node-package\\node_modules',
          'D:\\code\\BaseCode\\北京_19_0919\\work\\day06\\node_modules',
          'D:\\code\\BaseCode\\北京_19_0919\\work\\node_modules',
          'D:\\code\\BaseCode\\北京_19_0919\\node_modules',
          'D:\\code\\BaseCode\\node_modules',
          'D:\\code\\node_modules',
          'D:\\node_modules' ]

    node 的包查找机制:
        require(参数)
            参数: 系统包
            参数: 用户自定义的路径(相对定位 绝对定位)
            参数: 第三方包

        第三方包:
            1. node会循环module.paths这个数组;去数组中的每一个子项去找对应的第三方包
            2. 找到第三方包之后;node会读取第三方包的描述文件package.json
            3. 找到package.json中的main字段  "main": "lib/index2.js",

            如果以上机制失效

            1. 没有package.json文件
            2. package.json文件的main字段不存在
            3. package.json文件的main字段并没有指向一个合法的js文件
            node会选择命中当前目录下的index.js文件

            如果以上两种机制全部失效

            node会选择报错:Cannot find module 'colors'
*/
