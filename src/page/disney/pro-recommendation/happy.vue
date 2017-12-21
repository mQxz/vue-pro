<template>
  <div class="happy">
    <div class="happy-title-img">
      <img src="//img1.qunarzz.com/piao/fusion/1705/1b/3ecc7df173c43d02.png" alt="">
    </div>
    <div class="happy-list clearfix">
      <div class="happy-item" v-for="nameandimg in ticketType" :key="nameandimg.id">
        <div class="happy-item-info">
          <div class="happy-imgcon">
            <img :src="nameandimg.imgUrl" alt="">
          </div>
          <p class="ellipsis">{{nameandimg.name}}</p>
        </div>
        <ul class="ticket-type-list">
          <li v-for="item in nameandimg.ticketInfo" class="ticket-type-item" :key="item.id">
            <a href="#">
              <span class="ticket-type ellipsis">{{item.type}}</span>
              <div class="ticket-price">
                <span>&yen;
                  <span class="ticket-price-num">{{item.price}}</span>
                  <span class="ticket-price-start">起</span>
                </span>
                <span class="ticket-arrow-btn"></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="package-item">
      <div class="package-item-info">
        <div class="package-imgcon">
          <img :src="disneyPackage.imgUrl" alt="">
        </div>
        <p class="ellipsis">{{disneyPackage.name}}</p>
      </div>
      <ul class="package-type-list">
        <li v-for="item in disneyPackageList" class="ticket-type-item package-type-item" :key="item.id">
          <a href="#">
            <p class="package-type ticket-type ellipsis">{{item.type}}</p>
            <div class="package-price">
              <span>&yen;
                <span class="ticket-price-num">{{item.price}}</span>
                <span class="ticket-price-start">起</span>
              </span>
              <span class="ticket-book">预订</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['ticketType', 'disneyPackage', 'disneyPackageList']
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
  .happy{
    padding-bottom: .26rem;
    background-color: #ffb300;
    position: relative;
  }
  .happy-title-img{
    height: 0;
    padding-bottom: 6.66%;
    top: -0.48rem;
    position: relative;
  }
  .happy-title-img img{
    width: 100%;
  }
  .happy-list{
    padding: 0 0.14rem;
    margin-bottom: 0.1rem;
  }
  .happy-item{
    overflow: hidden;
    float: left;
    width: 50%;
  }
  .happy-item-info{
    overflow: hidden;
    margin: 0 .04rem;
    border-top-left-radius: .04rem;
    border-top-right-radius: .04rem;
  }
  .happy-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .happy-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 78.8%;
  }
  .happy-imgcon img{
    width: 100%;
  }
  .ticket-type-list{
    width: 100%;
  }
  .ticket-type-item{
    border-bottom: .02rem dashed #e3e3e3;
    margin: 0  0.08rem;
    padding: .16rem 0;
    background: #fff;
  }
  .ticket-type{
    margin-left: 0.1rem;
  }
  .ticket-type{
    height: .3rem;
    color: #000;
    font-size: .26rem;
    line-height: .32rem;
    margin-bottom: 0.1rem;
  }
  .ticket-price{
    position: relative;
    display: inline-block;
    float: right;
    color: #fe2e1e;
    font-size: .18rem;
    text-align: right;
  }
  .ticket-price-num{
    font-size: .34rem;
  }
  .ticket-price-start{
    color: #666;
  }
  .ticket-arrow-btn{
    overflow: hidden;
    display: inline-block;
    width: .1rem;
    height: .22rem;
  	background: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QOLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDMxY2RkZTktZTA2My00N2I3LWJmNDktNmE3NDNmNzE3ZGFhIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUyNEUxRkQ1MzYzNDExRTdBMjY2RTMzMTg4NDYzRTM4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNEUxRkQ0MzYzNDExRTdBMjY2RTMzMTg4NDYzRTM4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDA0Q0M4NDA2QTM1RTcxMUI3QzVEM0FFMjkyRkQyRjYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MGU0M2EwNy03NDkwLTExN2EtOTNiNS1lNTEyNjM1MDViNTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAWAAoDAREAAhEBAxEB/8QAhQABAAMAAAAAAAAAAAAAAAAABgMFCAEBAQEBAQAAAAAAAAAAAAAABQQCAwYQAAADBQYCCwAAAAAAAAAAAAECAxETBAUGACFhEjIUMxUxQXGhInIjNFRVFhEAAAMECAMJAAAAAAAAAAAAAAECEUESAyExcVITBBQFUaHh8GGBwSIyQlMk/9oADAMBAAIRAxEAPwDQUjqyJNNlJDUCBIGcgJjQopiO3ikm3HQMa9oBqKN/eyWVPOKBdCuR2BjN7akpRT5BmuU+8g+CvI+xp7VAcAK3XTqeMLS8mRLETGGUKrEzVogSXiUWtKcogIqixgFAe3A/MninhppMn3eo9NtKDyaNTOOGWomEh8zwP494VcomH2q/sdnpJxvl9HEw02rwzvHUzqBtTL+tPvifVcs5iGkfy3Kh/Nu9i8O8d5sz1viePPUzebqwtnL4cPoqG9z1OL+hsbCr4OYyhlgu7dweP//Z) no-repeat;
  	background-size: .1rem .22rem;
    text-indent: .1rem;
    margin-right: .1rem;
  }
  .ticket-book{
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
  .package-item{
    padding: 0 .18rem;
  }
  .package-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 44.205%;
  }
  .package-imgcon img{
    width: 100%;
  }
  .package-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .package-type{
    margin-bottom: .1rem;
    height: .34rem;
    font-size: .28rem;
    color: #000;
  }
  .package-price{
    position: relative;
    color: #fe2e1e;
    font-size: .18rem;
    margin-left: 0.1rem;
  }
  .package-type-list .ticket-book{
    position: absolute;
    right:0.04rem;
    width: 1.16rem;
  }
</style>