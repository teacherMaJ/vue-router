<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body"><h3>router</h3></div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 指定路由链接 -->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
          <!-- <a href="/about" class="list-group-item router-link-exact-active router-link-active">About</a>
          <a href="/home" class="list-group-item">Home</a> -->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 显示当前组件链接 -->
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style >
</style>
