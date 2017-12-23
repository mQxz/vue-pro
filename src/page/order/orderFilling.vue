<template>
  <div>
    <div class="main-bg">
      <orderheader></orderheader>
	  <orderinfo></orderinfo>
	  <ordersubmit></ordersubmit>
    </div>
  </div>
</template>

<script>
  import Orderheader from './header'
  import Orderinfo from './orderinfo'
  import Ordersubmit from './submit'

  export default {
    name: 'Order',

    components: {
      Orderheader,
      Orderinfo,
      Ordersubmit
    }
  }
</script>

<style scoped>
  .main-bg{
    background: #f5f5f5;
    padding-bottom: 1.4rem;
  }
</style>