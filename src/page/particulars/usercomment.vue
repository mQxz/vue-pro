<template>
  <div>
    <div class="UserComment" >
       <div class="CommentTitle">
       用户评论
       </div>
       <div class="CommentList" v-for="item in usercomment" :key="item.id">
         <div class="List-box">
             <div class="comment-stardate">
               <span class="iconfont comment-icon" >&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</span>
               <span class="user-info">{{item.userName}}</span>
               <span class="user-logo">
                <img src="//s.qunarzz.com/piao/image/touch/sight/highQualityComment1.png">
               </span>
             </div>
           </div>
           <div class="comment-drc">
             <span class="comment-drc-text">
               {{item.userDesc}}
             </span>
           </div>
           <div class="comment-img">
             <div class="comment-box">
               <div class="img-box">
                 <img :src="item.img1">
               </div>
                <div class="img-box">
                 <img :src="item.img2">
               </div>
                <div class="img-box">
                  <img :src="item.img3">
               </div>
                <div class="img-box">
                 <img :src="item.img4">
               </div>
                <div class="img-box">
                 <img :src="item.img5">
               </div>
                <div class="img-box">
                  <img :src="item.img6">
               </div>
             </div>
           </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  props: [
    'usercomment'
  ]
}
</script>

<style scoped>
     .UserComment {
    margin-top: .2rem;
    background: #fff;
  }
  .CommentTitle {
    padding: .2rem .35rem;
    background: #fff;
    position: relative;

  }
  .CommentTitle::after {
    content: " ";
    position: absolute;
    top: .22rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    border-radius: .04rem;
  }
  .comment-stardate {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    background: #fff;
    border-top: 1px solid #ccc; 
  }
  .user-logo {
    position: absolute;
    z-index: 2;
    top: .1rem;
    right: .2rem;
    width: 1.42rem;
    height: .96rem;
  }
  .user-logo>img {
    width: 100%;
    height: 100%;
  }
  .comment-icon {
    padding-left: .1rem;
    color: #ffb436;
  }
  .user-info {
    padding-right: .2rem;
  }
  .comment-drc {
    padding: 0 .2rem;
  }
  .comment-drc-text {
    line-height: .42rem;
    font-size: .26rem;
    color: #616161;
  }
  .comment-img {
    display: flex; 
  }
  .img-box {
    float: left;
    width: 31%;
    margin-bottom: .1rem;
    margin-left: .1rem;
  }
  .img-box>img {
    width: 100%;
    height: 100%;
  }
</style>