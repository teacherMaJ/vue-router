<template>
  <div>
      <ul>
          <li>Id:{{$route.params.id}}</li>
          <li >Title:{{datail.title}}</li>
          <li >Content:{{datail.Content}}</li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
       const allMessages = [
                  {id:1,title:'message001',Content:'message001 Content001'},
                  {id:2,title:'message002',Content:'message002 Content002'},
                  {id:3,title:'message003',Content:'message003 Content003'}
              ]
  export default {
    data(){
      return{
       datail:{}
      }
    },
    mounted(){
     const id  = this.$route.params.id*1;
     const detail = allMessages.find(detail => detail.id ===id);
     this.detail = detail
    },
    watch:{
      '$route'(to,from){
        setTimeout(()=>{
          const id = to.params.id*1;
         const datail = allMessages.find(datail=>datail.id === id)
         this.datail = datail
        },1000)
      }
    }
  }
</script>

<style scoped>

 
</style>
