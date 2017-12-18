<template>
  <div class="city-local">
    <div class="cityarea-group">
      <div class="cityarea-title border-bottom">热门城市</div>
      <div class="cityarea-content city-now border-bottom">
        <div class="cityitem-light"  v-for="(item, index) of hotCityList" :key="item.id">
          <span class="cityitem-name ellipsis">{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="cityarea-group" v-for="(cityItem, index) of cityList" :key="cityItem.title">
      <div class="cityarea-title border-bottom">{{cityItem.title}}</div>
      <div class="cityarea-content citynormal-content" v-for="(item, index) of cityItem.cityInfo">
        <span class="cityitem-normal border-bottom ellipsis">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cityLocal',
    props: {
      localHotCityList: {
        type: Array
      },
      localCityList: {
        type: Array
      }
    },
    computed: {
      hotCityList () {
        return this.localHotCityList
      },
      cityList () {
        return this.localCityList
      }
    }
  }
</script>

<style scoped>
  .border-bottom:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    background: #c9cccd;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
  }
  .cityarea-title {
    position: relative;
    line-height: .54rem;
    padding-left: .3rem;
    color: #616161;
    font-size: .26rem;
  }
  .cityarea-content {
    position: relative;
    overflow: hidden;
    padding-right: .5rem;
    padding-left: .2rem;
    background: #fff;
  }
  .city-now {
    padding-top: .04rem;
    padding-bottom: .26rem;
  }
  .cityitem-light {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding: .2rem .14rem 0 .1rem;
  }
  .cityitem-name {
    display: block;
    box-sizing: border-box;
    line-height: 28px;
    text-align: center;
    color: #212121;
    border: .02rem solid #c9cccd;
    border-radius: .06rem;
  }
  .ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cityitem-normal {
    display: block;
    position: relative;
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
  }
  .citynormal-content {
    padding: 0;
  }
</style>