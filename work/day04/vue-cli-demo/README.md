build: webpack的配置
config: webpack的配置
node_modules: 安装完的依赖包
src: 源码目录
static: 静态资源的存放目录
.babelrc: babel的配置文件
.editorconfig: 统一所有编辑器风格的文件
.gitignore: git忽略文件
.postcssrc.js: css后置处理器
index.html  : 首页
package.json : 依赖的记录
package-lock.json : 依赖的记录
README.md : 介绍文件


注意!!!
  记住 所有的静态资源(图片 reset.css)只能放在static目录下;
  因为在生产环境打包的时候
    我们只会将目录中的static带走
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: config.build.assetsSubDirectory,
          ignore: ['.*']
        }
      ])
