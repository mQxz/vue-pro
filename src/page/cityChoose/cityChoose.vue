<template>
  <div class="page-main">
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="header-title">
        <div class="header-city-con">
          <span id="local" class="land inland" @click="handleCityTabClick" :class="{active: spanIsActive}">国内</span><span id="foreign" class="land outland" @click="handleCityTabClick" :class="{active: !spanIsActive}">海外</span>
        </div>
      </div>
    </header>

    <div class="main">
      <div class="header-search">
        <input type="text" :placeholder="placeholder" class="city-keyword" @focus="handleInputFocus" @blur="handleInputBlur" :class="{active: inputIsActive}">
      </div>
      <div class="mainContent">
        <div class="cityarea-group">
          <div class="cityarea-title border-bottom">您的位置</div>
            <div class="cityarea-content city-now border-bottom">
            <div class="cityitem-light">
              <span class="cityitem-name ellipsis cityitem-seleted">北京</span>
            </div>
          </div>
        </div>
        <city-local v-show="cityFlag" :localHotCityList="localHotCityList" :localCityList="localCityList"></city-local>
        <city-foreign v-show="!cityFlag" :foreignHotCityList="foreignHotCityList" :foreignCityList="foreignCityList"></city-foreign>
        <alphabet></alphabet>
      </div>
    </div>
  </div>
</template>

<script>
  import cityLocal from './cityLocal.vue'
  import cityForeign from './cityForeign.vue'
  import alphabet from './alphabet.vue'
  export default {
    name: 'cityChoose',
    created () {
      this.getPageData()
    },
    data () {
      return {
        cityFlag: true,
        spanIsActive: true,
        placeholder: '输入城市名或拼音',
        inputIsActive: false,
        localHotCityList: [],
        foreignHotCityList: [],
        localCityList: [],
        foreignCityList: []
      }
    },
    components: {
      cityLocal,
      cityForeign,
      alphabet
    },
    methods: {
      handleCityTabClick (e) {
        const cityType = e.target.id
        if (cityType === 'foreign') {
          this.cityFlag = false
          this.spanIsActive = false
        } else {
          this.cityFlag = true
          this.spanIsActive = true
        }
      },
      handleInputFocus () {
        this.placeholder = ''
        this.inputIsActive = true
      },
      handleInputBlur () {
        this.placeholder = '输入城市名或拼音'
        this.inputIsActive = false
      },
      getPageData () {
        this.$http.get('/static/cityChoose.json')
        .then(this.handleGetPageDateSucc.bind(this))
      },
      handleGetPageDateSucc (res) {
        const body = res.body
        if (body.data) {
          this.localHotCityList = body.data.local.hotCity
          this.localCityList = body.data.local.cityList
          this.foreignHotCityList = body.data.foreign.hotCity
          this.foreignCityList = body.data.foreign.cityList
        }
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
  .page-main {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    background: #05bad5;
    color: #fff;
    z-index: 100;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    line-height: 0.86rem;
    text-align: center;
  }
  .header-title {
    width: 100%;
    line-height: .86rem;
    text-align: center;
  }
  .header-city-con {
    display: inline-block;
  }
  .land {
    display: inline-block;
    width: 2rem;
    height: .56rem;
    line-height: .56rem;
    border: .02rem solid #fff;
  }
  .land.active {
    background: #fff;
    color: #00afc7;
  }
  .inland {
    border-radius: .06rem 0 0 .06rem;
  }
  .outland {
    border-radius: 0 .06rem .06rem 0;
  }
  .header-search {
    margin-top: .86rem;
    padding: .1rem .2rem .1rem .2rem;
    background: #05bad5;
    font-size: .26rem;
    color: #9e9e9e;
  }
  .city-keyword {
    display: block;
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    padding: .16rem 0 .16rem .1rem;
    background: #fff;
    border: 0;
    border-radius: .06rem;
    text-align: center;
  }
  .city-keyword.active {
    text-align: left;
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
  .cityitem-seleted {
    border-color: #00afc7;
    color: #00afc7;
  }
</style>