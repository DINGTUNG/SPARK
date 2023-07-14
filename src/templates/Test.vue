<script setup>

</script>

<template>
  <div>
    <RouterLink to="/test" class="link test">測試頁面</RouterLink>

    <button class="test_btn">呼叫狸貓</button>

    <p>狸貓，星龜</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/buttons/_buttons-mixin';

button.test_btn {
  @include smallGoldBtn_PC;

}
</style>
