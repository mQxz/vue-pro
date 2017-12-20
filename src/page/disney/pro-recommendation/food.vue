<template>
  <div class="food">
    <div class="food-title-img">
      <img src="//img1.qunarzz.com/piao/fusion/1705/b5/c264b5bf38581802.png" alt="">
    </div>
    <div class="food-package-list clearfix">
      <div class="food-package-item" v-for="nameandimg in mealPackage" :key="nameandimg.id">
        <div class="food-package-item-info">
          <div class="food-package-imgcon">
            <img :src="nameandimg.imgUrl" alt="">
          </div>
          <p class="ellipsis">{{nameandimg.name}}</p>
        </div>
        <ul class="package-type-list">
          <li v-for="item in nameandimg.mealPackageInfo" class="package-type-item" :key="item.id">
            <a href="#">
              <p class="package-type ellipsis">{{item.type}}</p>
              <div class="package-price">
                <span>&yen;
                  <span class="package-price-num">{{item.price}}</span>
                  <span class="package-price-start">起</span>
                </span>
                <span class="package-book">预订</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['mealPackage']
  }
</script>

<style scoped>
  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .ellipsis{
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .food-title-img img{
    width: 100%;
  }
  .food-package-list{
    padding: 0 0.14rem;
  }
  .food-package-item{
    overflow: hidden;
    float: left;
    width: 100%;
  }
  .food-package-item-info{
    overflow: hidden;
    margin: 0 .04rem;
    border-top-left-radius: .04rem;
    border-top-right-radius: .04rem;
  }
  .food-package-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .food-package-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 44.205%;
  }
  .food-package-imgcon img{
    width: 100%;
  }
  .package-type-list{
    width: 100%;
  }
  .package-type-item{
    border-bottom: .02rem dashed #e3e3e3;
    margin: 0  0.04rem;
    padding: .08rem 0;
    background: #fff;
  }
  .package-type{
    height: .3rem;
    color: #000;
    font-size: .28rem;
    line-height: .32rem;
    margin-bottom: 0.2rem;
    margin-left: 0.1rem;
  }
  .package-price{
    position: relative;
    color: #fe2e1e;
    font-size: .18rem;
    margin-left: 0.1rem;
  }
  .package-price-num{
    font-size: .34rem;
  }
  .package-price-start{
    color: #666;
  }
  .package-book{
    display: inline-block;
    width: .86rem;
    height: .36rem;
    background: #fe2e1e;
    color: #fff;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
    border-radius: .04rem;
    margin: 0 0.1rem;
  }
  .package-type-list .package-book{
    position: absolute;
    right:0.04rem;
    width: 1.16rem;
  }
</style>