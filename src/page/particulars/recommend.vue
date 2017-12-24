<template>
  <div class='recommend'>
       <h1 class='recommend-h1'>
         <i class='iconfont recommend-icon'>&#xe600;</i>
         去哪儿推荐
       </h1>

       <div class='recommend-box' v-for='item in recommend' :key="item.id">
         <div class='recommend-Left'>
            <div class='recommend-Left-Top'>
              {{item.title}}
            </div>
            <div class='recommend-Left-Bottom'>
              <span class='iconfont'>&#xe600;可定明日</span>
              <span class='iconfont'>&#xe600;无购物</span>
              <span class='iconfont'>&#xe600;无自费</span>
            </div>
         </div>
         <div class='recommend-Right'>
           <div class='recommend-Right-box'>
             <div class='recommend-Right-Top'>
              &yen; 
              <em>{{item.price}}</em>
              <span class='Right-Top-text'>起</span>
             </div>
             <div class='recommend-Right-Bottom'>
               <a href="#">查看</a>
             </div>
           </div> 
         </div>
       </div>
       
     </div>
</template>

<script>
export default {
  props: [
    'recommend'
  ]
}
</script>

<style scoped>
  .recommend {
    margin-top: .2rem;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #fff;
    padding-top : .2rem;
 }
 .recommend-icon {
    color: pink;
    padding: .2rem 0 0 .2rem;
 }

 .recommend-h1 {
   display: block;
   width: 100%;
   height: .5rem;
   position: relative;
 }
 .recommend-h1::before { 
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dadada; 
 }
 .recommend-Left {
    float: left;
    white-space: normal;
    width: 60%;
    padding: .2rem 0 .2rem .2rem;
    line-height: .52rem;
    font-size: .3rem;
 }
 .recommend-Left-Top {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
 }
 .recommend-Left-Bottom>span {
    display: inline-block;
    margin-right: .1rem;
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    white-space: nowrap;
 }
 .recommend-Right {
    margin-top: .27rem;
    float: left;
    white-space: normal;
    height: 1.6rem;
    flex: 1;
    line-height: .52rem;
    font-size: .3rem;
    border-left: 1px solid #ccc;
    display: flex;
    justify-content: center;
 }
 
 .recommend-Right-Top {
    color: #ff9800;
    height: .4rem;
    padding-left: .2rem;
    width: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 }
 .recommend-Right-Top>em {
    margin-left: .04rem;
    font-size: .32rem;
    line-height: .3rem;
 }
 .Right-Top-text {
    display: inline-block;
    color: #9e9e9e;
    font-size: .24rem; 
 }
 .recommend-Right-Bottom {
    width: 1.5rem;
    height: .6rem;
    margin: .1rem .2rem 0 0;
    background: #ff9800;
    color: #fff;
    font-size: .28rem;
    line-height: .6rem;
    text-align: center;
    border-radius: .1rem;
 }
 .recommend-box {
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid #dadada; 
    display: flex;
 }
 .recommend-Right-box {
    width: 1.5rem;
    height: 1.5rem;
 }
 
</style>