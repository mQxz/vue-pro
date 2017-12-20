<template>
  <div class="hotel">
    <div class="hotel-title-img">
      <img src="//img1.qunarzz.com/piao/fusion/1712/d4/f8cf91f0b7cb902.png" alt="">
  	</div>
  	<div class="hotel-list clearfix">
      <div class="hotel-item" v-for="nameandimg in hotelName" :key="nameandimg.id">
        <div class="hotel-item-info">
          <div class="hotel-imgcon">
            <img :src="nameandimg.imgUrl" alt="">
          </div>
          <p class="ellipsis">{{nameandimg.name}}</p>
        </div>
        <ul class="room-type-list">
          <li v-for="item in nameandimg.hotelInfo" class="room-type-item" :key="item.id">
            <a href="#">
              <p class="room-type ellipsis">{{item.type}}</p>
              <div class="room-price">
                <span>&yen;
                  <span class="room-price-num">{{item.price}}</span>
                  <span class="room-price-start">起</span>
                </span>
                <span class="room-book">预订</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="land-item">
      <div class="land-item-info">
        <div class="land-imgcon">
          <img :src="disneylandHotelName.imgUrl" alt="">
        </div>
        <p class="ellipsis">{{disneylandHotelName.name}}</p>
      </div>
      <ul class="landroom-type-list">
        <li v-for="item in disneylandHotelInfo" class="room-type-item landroom-type-item" :key="item.id">
          <a href="#">
            <p class="landroom-type room-type ellipsis">{{item.type}}</p>
            <div class="landroom-price">
              <span>&yen;
                <span class="room-price-num">{{item.price}}</span>
                <span class="room-price-start">起</span>
              </span>
              <span class="room-book">预订</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hotelName', 'disneylandHotelInfo', 'disneylandHotelName']
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
  .hotel{
    padding-bottom: .68rem;
  }
  .hotel-title-img img{
    width: 100%;
  }
  .hotel-list{
    padding: 0 0.14rem;
    margin-bottom: 0.1rem;
  }
  .hotel-item{
    overflow: hidden;
    float: left;
    width: 50%;
  }
  .hotel-item-info{
    overflow: hidden;
    margin: 0 .04rem;
    border-top-left-radius: .04rem;
    border-top-right-radius: .04rem;
  }
  .hotel-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .hotel-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 78.8%;
  }
  .hotel-imgcon img{
    width: 100%;
  }
  .room-type-list{
    width: 100%;
  }
  .room-type-item{
    border-bottom: .02rem dashed #e3e3e3;
    margin: 0  0.04rem;
    padding: .08rem 0;
    background: #fff;
  }
  .room-type{
    margin-left: 0.1rem;
  }
  .room-type{
    height: .3rem;
    color: #000;
    font-size: .26rem;
    line-height: .32rem;
    margin-bottom: 0.1rem;
  }
  .room-price{
    position: relative;
    color: #fe2e1e;
    font-size: .18rem;
    text-align: right;
  }
  .room-price-num{
    font-size: .34rem;
  }
  .room-price-start{
    color: #666;
  }
  .room-book{
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
  .land-item{
    padding: 0 .18rem;
  }
  .land-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 44.205%;
  }
  .land-imgcon img{
    width: 100%;
  }
  .land-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .landroom-type{
    margin-bottom: .1rem;
    height: .34rem;
    font-size: .28rem;
    color: #000;
  }
  .landroom-price{
    position: relative;
    color: #fe2e1e;
    font-size: .18rem;
    margin-left: 0.1rem;
  }
  .landroom-type-list .room-book{
    position: absolute;
    right:0.04rem;
    width: 1.16rem;
  }
</style>