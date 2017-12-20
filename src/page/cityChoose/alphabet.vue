<template>
  <ul class="alphabet" ref="alphabetCon">
    <li class="alphabet-item" v-for="item of cityLetterIndex" :key="item" @touchstart="handleTouchstart" @touchmove.prevent.stop="handleTouchMove">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'alphabet',
    props: {
      cityIndex: {
        type: Array,
        require: true
      }
    },
    computed: {
      cityLetterIndex () {
        return this.cityIndex
      }
    },
    methods: {
      handleTouchstart (e) {
        this.$emit('touchCityIndex', this.getIndex(e.target))
      },
      getIndex (element) {
        let elements = element.parentNode.childNodes
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === element) {
            return i
          }
        }
      },
      handleTouchMove (e) {
        let step = Math.floor((e.touches[0].clientY - this.alphabetTop) / 16)
        step = step < 0 ? 0 : step
        step = step > this.$refs.alphabetCon.length - 1 ? this.$refs.alphabetCon.length - 1 : step
        this.$emit('touchMoveCityIndex', step)
      }
    },

    updated () {
      this.alphabetTop = this.$refs.alphabetCon.offsetTop
    }
  }
</script>
<style scoped>
  .alphabet {
    position: fixed;
    top: 165px;
    right: 0;
  }
  .alphabet-item {
    width: .32rem;
    line-height: .32rem;
    padding-left: .2rem;
    color: #00afc7;
    font-size: .24rem;
    text-align: center;
  }
</style>