<template>
  <div>
      <ul>
          <li v-for="(item,index) in messages" :key="index">
              <!-- <router-link :to="`/home/message/detail/${item.id}`">{{item.title}}</router-link> -->
              <router-link :to="`/home/message/detail/${item.id}`">{{item.title}}</router-link>
              ---<button @click="pushShow(item.id)">push查看</button>
              ---<button @click="replaceShow(item.id)">replace查看</button>
          </li>
         
      </ul>

      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
      data(){
          return{
              messages:[]
          }
      },
      mounted(){
          //模拟发生ajax
          setTimeout(()=>{
              const messages = [
                  {id:1,title:'message001'},
                  {id:2,title:'message002'},
                  {id:3,title:'message003'}
              ]
              this.messages = messages
          },1000)
      },
      methods:{
          pushShow(id){
              this.$router.push({
                  path:`/home/message/detail/${id}`
              },()=>{})
          },
          replaceShow(id){
              this.$router.replace({
                  path:`/home/message/detail/${id}`
              },()=>{})
          }
      }
     
      
  }
</script>

<style scoped>

 
</style>
