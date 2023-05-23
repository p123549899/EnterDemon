<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  created(){
    axios({
      url:'http://www.kangliuyong.com:10002/banner',
      method:'get',
      params:{
        appkey:'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1ive6BeNA='
      },
    }).then(res=>{
      console.log(res);
    })
  }
}
</script>
