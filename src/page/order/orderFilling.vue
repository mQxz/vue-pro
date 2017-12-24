<template>
  <div>
    <div class="main-bg">
      <orderheader></orderheader>
	  <orderinfo></orderinfo>
	  <ordernumber></ordernumber>
	  <touristinfo></touristinfo>
	  <selection></selection>
	  <div class="note-outer">
		<a href="#" class="note-side">咨询电话</a>
	  </div>
	  <ordersubmit></ordersubmit>
    </div>
  </div>
</template>

<script>
  import Orderheader from './header'
  import Orderinfo from './orderinfo'
  import Ordersubmit from './submit'
  import Ordernumber from './ordernumber'
  import Touristinfo from './Touristinfo'
  import Selection from './selection'

  export default {
    name: 'Order',

    components: {
      Orderheader,
      Orderinfo,
      Ordersubmit,
      Ordernumber,
      Touristinfo,
      Selection
    }
  }
</script>

<style scoped>
  .main-bg{
    background: #f5f5f5;
    padding-bottom: 1.4rem;
  }
  .note-outer {
    margin: .2rem .2rem 0 .2rem;
    color: #616161;
    font-size: .24rem;
    line-height: .4rem;
  }
  .note-side{
    float: right;
  }
</style>