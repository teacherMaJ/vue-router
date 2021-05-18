## router
## 1.<router-view></router-view>编译后映射成a 标签，并且可以给 该标签添加样式
## 2.如果想设置点击之后的样式，可以通过 router-view-active类进行设置，可以在index.html中添加
## 3.使用方法
    1.npm i vue-router安装包
    2.创建router文件夹，index.js
    3.引入vue,vueRouter,注册vueRouter
    4.默认暴漏vueRouter实例对象
    5.配置routes
    6.main.js注册路由器
    7.通过router-view的方式，设置将组件显示的位置
## 4.子路由
    1.子路由也是一个组件
    2.在父级组件李写一个router-link标签，子组件的名字，单击跳转到子组件显示
## 5.子组件的使用方法
## 6.关于路由组件的死亡创建
    1.路由组件对象是在第一次请求对应路径时才创建
    2.从一个路由组件离开，路由组件死亡，再进入路由组件重新创建
    3.同一个路由组件的mounted()只执行一次
    4.当在同一个路由路径上进行切换(只是修改参数),当前路由组件对象不会进行销毁和创建过程，只是复用组件。
## 7.路由去掉#号
    1.vue-router默认是hash模式(路由中带#)
    2.可以在路由器(router)中配置mode:'history'去掉#
    3.需要进行配置，否则会出现history404问题( 脚手架 默认配置好了)
## 8.history404原因
    1.hash模式
        路径中带#:http://localhost:8080/#/home/news
        发请求的路径：http://localhost:8000 项目路径
        响应：返回的总是index页面==> path被解析为前台路径
    2.history模式
        路径中不带#:http://localhost:8080/home/news
        发请求路径:http://localhost:8080/home/news
        响应的是:404错误
        希望：没对应的资源则返回的是index页面，path部分解析为前台路由
        解决:配置webpack.config.js  module.exports={devServer:{historyApiFallback:true}}
## 9.keep-alive:进行路由缓存
    1.语法包裹着需要缓存的router-view
       (1)<keep-alive><router-view></router-view></keep-alive>  
    #   v u e - r o u t e r  
 