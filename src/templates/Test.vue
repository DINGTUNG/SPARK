<script setup>

</script>

<template>
  <div class="container">

    <button class="test_btn">呼叫狸貓</button>

    <p>狸貓，星龜</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/buttons/_buttons-mixin';

.container {
  position: relative;
  top: 300px;
  width: 1200px;
  height: 500px;
  margin:auto;
  padding: 50px;
  border: 1px solid #000;
}

button.test_btn {
  @include smallGoldBtn_PC;

}
</style>
