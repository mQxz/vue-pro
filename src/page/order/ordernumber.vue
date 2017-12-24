<template>
  <div>
    <div class="data-and-number">
      <div class="number-limit">
        <label class="row-field">购买数量</label>
        <span class="limit-note ellipsis">
        <span id="limit-desc"></span>
        <span id="limit-phoneiddesc">每个手机号限购30张<br>每个身份证限购1张</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .number-limit{
    overflow: hidden;
    min-height: .5rem;
    padding:.3rem .2rem .3rem .2rem;
    position: relative;
    background: #fff;
  }  
  .row-field {
    position: relative;
    top: .12rem;
    float: left;
    width: 1.6rem;
    color: #616161;
    font-size: .3rem;
    line-height: .5rem;
  }
  .limit-note{
    color: #ccc;
    font-size: .28rem;
  }
  .data-and-number{
    margin: 0.2rem 0;
  }
</style>