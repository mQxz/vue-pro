<template>
  <div>
    <div class="data-and-number">
      <div class="data"></div>
      <div class="number">
        <div class="mpw-row mp-extend-outer mp-number-limit">
          <label class="mpw-row-field">购买数量</label>
          <span class="mp-limit-note mpg-ellipsis2">
          <span id="mp-limit-desc"></span>
          <span style="" id="mp-limit-phoneiddesc">每个手机号限购30张<br>每个身份证限购1张</span>
          </span>
          <span class="mp-stock-note" id="mp-available-count"></span>
          <div class="mpw-row-value clrfix">
          <div class="mpw-input-number"><span class="mpw-input-number-minus"><span class="mpw-input-number-horizontal"></span></span><input type="tel" max="30" min="1" value="0" class="mpw-input-number-input"><span class="mpw-input-number-plus"><span class="mpw-input-number-horizontal"><span class="mpw-input-number-vertical"></span></span></span></div><input type="number" min="1" max="30" class="mpw-input-number-input" name="adultCount" value="1" id="number" style="display: none;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
</style>