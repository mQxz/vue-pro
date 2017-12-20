<template>
  <div>
    <div class="footer clearfix">
      <p class="footer-item"> 适用于迪士尼设计、标志及产物： </p>
      <p class="footer-item"> ©Disney/Pixar ©Mattel, Inc. ©Hasbro, Inc. </p>
      <p class="footer-item"> ©Disney/Lucasfilm Ltd. © &amp; TM Lucasfilm Ltd. </p>
      <p class="footer-item"> ©2017 MARVEL </p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .ellipsis{
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .footer{
    padding: .28rem .18rem .44rem;
    background: #ffdb5c;
    margin-top: -0.04rem;
  }
  .footer-item{
    min-height: .3rem;
    color: #5d390b;
    text-align: center;
    font-size: 0.24rem;
  }
</style>