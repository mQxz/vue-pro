<template>
  <div class="city-local">
    <div class="cityarea-group">
      <div class="cityarea-title border-bottom">热门城市</div>
      <div class="cityarea-content city-now border-bottom">
        <div class="cityitem-light"  v-for="(item, index) of hotCityList" :key="item.id">
          <span class="cityitem-name ellipsis" @click="changeCity(item.name)">{{item.name}}</span>
        </div>
      </div>
    </div>

    <div ref="cityareaCon" class="cityarea-group" v-for="(cityItem, key) of cityList" :key="key">
      <div ref="cityareaIndex" class="cityarea-title border-bottom">{{key}}</div>
      <div class="cityarea-content citynormal-content" v-for="item of cityItem" :key="item.id">
        <span class="cityitem-normal border-bottom ellipsis" @click="changeCity(item.name)">{{item.name}}</span>
      </div>
    </div>

    <alphabet :cityIndex="cityIndex" @touchCityIndex="handleTouchCityIndex" @touchMoveCityIndex="handleTouchMove"></alphabet>
  </div>
</template>

<script>
  import alphabet from './alphabet.vue'
  import { mapMutations } from 'vuex'
  export default {
    name: 'cityLocal',
    props: {
      localHotCityList: {
        type: Array,
        required: true
      },
      localCityList: {
        type: Object,
        required: true
      }
    },
    components: {
      alphabet
    },
    computed: {
      hotCityList () {
        return this.localHotCityList
      },
      cityList () {
        return this.localCityList
      },
      cityIndex () {
        const cityIndexArr = []
        for (const key in this.cityList) {
          cityIndexArr.push(key)
        }
        return cityIndexArr
      }
    },
    methods: {
      handleTouchCityIndex (index) {
        const sTop = this.$refs.cityareaCon[index].offsetTop - 44
        this.$emit('changeScrollTop', sTop)
      },
      handleTouchMove (step) {
        const sTop = this.$refs.cityareaCon[step].offsetTop - 44
        this.$emit('changeScrollTop', sTop)
      },
      ...mapMutations({
        changeCity: 'changeCity'
      })
      // handleCityChange (city) {
        // this.$store.commit('changeCity', city)
      // }
    }
  }
</script>

<style scoped>
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