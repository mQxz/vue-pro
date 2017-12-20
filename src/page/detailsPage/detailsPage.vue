<template>
	<div class="container">
	  <div class="header">
	    <img :src="bigImg" class="bigImg"/>
      <div class="imgCharacter">
        <span class="startPlace">出地点:北京</span>
        <span class="CITS">蓝森国旅</span>
      </div>
	  </div>
    <div></div>
	</div>
</template>

<script>
  export default {
    name: 'detailsPage',
    data () {
      return {
        bigImg: []
      }
    },

    methods: {
      getIndexData () {
        this.$http.get('/static/detailsPage.json').then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        this.bigImg = body.bigImg[0].imgUrl
        console.log(this.bigImg)
      }
    },

    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped>
  .container {
    background: #f5f5f5;
  }
  .header {
    height: 4.2rem;
    width: 100%;
    position: relative;
    background: #fff;
  }
  .bigImg {
    width: 100%;
  }
  .imgCharacter {
    display: flex;
    position: absolute;
    height: .28rem;
    width: 100%;
    line-height: .28rem;
    bottom: .14rem;
    justify-content: space-between;
  }
  .startPlace {
    font-size: .24rem;
    color: #fff;
    padding-left: .2rem;
  }
  .CITS {
    font-size: .24rem;
    color: #fff;
    padding-right: .2rem;
  }
</style>