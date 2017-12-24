<template>
  <div class="touristinfo">
    <div class="group border-top">
      <div class="row">
        <label class="row-field" for="tourist-info-name_0">游客1</label>
        <div class="row-value row-error">
          <label class="textinput-note" id="traveler_info_name_0_label" for="traveler_info_name_0" style="display: none; top: 1px; left: 0px;">游客姓名</label>
          <input value="" class="textinput" type="text" id="traveler_info_name_0" data-validate="name" placeholder="游客姓名" name="name" data-label="traveler_info_name_0_label">
        </div>
      </div>
      <div class="row" role="passengerRow">
        <label class="row-field" for="traveler_info_pinyin_0">拼音</label>
        <div class="row-value row-error">
          <label class="textinput-note" id="traveler_info_pinyin_0_label" for="traveler_info_pinyin_0" style="display: none; top: 1px; left: 0px;">拼音（姓名拼音）</label>
          <input value="" class="textinput" type="text" id="traveler_info_pinyin_0" data-validate="pinyin" placeholder="拼音（姓名拼音）" name="namePinyin" data-label="traveler_info_pinyin_0_label">
        </div>
      </div>
      <div class="row" role="passengerRow">
        <label class="row-field" for="traveler_info_phone_0">手机号</label>
        <div class="row-value country-code phone-filed row-error">
          <div id="pSelectCountryCode0">
            <span class="field-menu" id="pMobileCountryCodeLabel0">+86</span>
            <input type="hidden" value="86" id="pMobileCountryCode0" name="passengerMobileCountryCode">
          </div>
          <label class="textinput-note" id="traveler_info_phone_0_label" for="traveler_info_phone_0" style="display: none; top: 1px; left: 0px;">请填写手机号</label>
          <input value="" class="textinput" type="text" id="traveler_info_phone_0" data-validate="numbers" placeholder="请填写手机号" name="mobile" data-label="traveler_info_phone_0_label">
        </div>
      </div>
      <div class="row" role="passengerRow">
        <label class="row-field" for="traveler_info_id_0">
          <span class="field-menu" role="selectcardtype" data-idtype="0">身份证</span>
        </label>
        <div class="row-value row-error">
          <label class="textinput-note" id="traveler_info_id_0_label" for="traveler_info_id_0" style="display: none; top: 1px; left: 0px;">请填写正确的身份证号码</label>
          <input value="" class="textinput" type="text" id="traveler_info_id_0" data-validate="idcard" placeholder="请填写正确的身份证号码" name="idNo" data-idtype="0" data-label="traveler_info_id_0_label">
          <input type="hidden" name="idType" value="0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .group{
    margin: .2rem 0;
  }
  .touristinfo{
    background: #fff;
  }
  .row {
    overflow: hidden;
    min-height: .5rem;
    padding: .24rem;
  }
  .row-field {
    float: left;
    width: 1.6rem;
    color: #616161;
    font-size: .3rem;
    line-height: .5rem;
  }
  .row-value {
    margin-left: 1.7rem;
    line-height: .5rem;
  }
  .textinput{
    width: 100%;
    height: .38rem;
    padding: .06rem 0;
    border: 0;
    color: #212121;
    background: 0;
    -webkit-appearance: none;
  }
</style>