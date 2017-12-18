<template>
  <div class="alphabet">
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">B</div>
    <div class="alphabet-item">C</div>
    <div class="alphabet-item">D</div>
    <div class="alphabet-item">E</div>
    <div class="alphabet-item">F</div>
    <div class="alphabet-item">G</div>
    <div class="alphabet-item">H</div>
    <div class="alphabet-item">J</div>
    <div class="alphabet-item">K</div>
    <div class="alphabet-item">L</div>
    <div class="alphabet-item">M</div>
    <div class="alphabet-item">N</div>
    <div class="alphabet-item">P</div>
    <div class="alphabet-item">Q</div>
    <div class="alphabet-item">R</div>
    <div class="alphabet-item">S</div>
    <div class="alphabet-item">T</div>
    <div class="alphabet-item">W</div>
    <div class="alphabet-item">X</div>
    <div class="alphabet-item">Y</div>
    <div class="alphabet-item">Z</div>
  </div>
</template>

<script>
  export default {
    name: 'alphabet'
  }
</script>
<style scoped>
  .alphabet {
    position: fixed;
    top: 157.5px;
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