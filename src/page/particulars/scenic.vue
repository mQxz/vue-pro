<template>
  <div class='scenic-info'>
       <ul class='scenic-info-ul' v-for="item in scenic" :key="item.id">
         <li class='info-ul-adss'>
           <span class='iconfont info-ul-adss-info'>&#xe629;</span>
           <span class='adss-des'>{{item.adres}}</span>
           <span class='iconfont info-ul-icon'>&#xe600;</span>
         </li>
           
         <li class='info-ul-intro'>
            <span class='iconfont info-ul-adss-infoo'>&#xe629;</span>
            <span class='adss-des-time'>{{item.des}}</span>
          <span class='iconfont info-ul-iconn'>&#xe600;</span>
         </li>
       </ul>
     </div>
</template>

<script>
export default {
  props: [
    'scenic'
  ]
}
</script>

<style scoped>
   .scenic-info {
    width: 100%;
    background: #fff;
    border-radius: .1rem .1rem 0 0;
  }
 
  .adss-des {
    padding-left: .6rem;
    display: inline-block;
    width: 4.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .adss-des-time {
    padding-left: .6rem;
    display: inline-block;
    width: 4.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info-ul-adss-info {
    position: absolute;
  }
  .info-ul-adss-infoo {
    position: absolute;
  }
  .info-ul-intro {
    position: relative;
    height: .88rem;
    color: #212121;
    line-height: .88rem;
    padding-left: .2rem;
  }
    .info-ul-iconn {
    position: absolute;
    right: .5rem;
  }
   .info-ul-icon {
    position: absolute;
    right: .5rem;
  }
  .info-ul-adss {
    position: relative;
    height: .88rem;
    color: #212121;
    line-height: .88rem;
    padding-left: .2rem;
  }
</style>