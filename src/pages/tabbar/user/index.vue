<template>
  <view :class="$style.index">
    {{ msg }}
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const msg = ref('Hello User');
</script>

<style lang="scss" module>
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
