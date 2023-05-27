<template>
  <view :class="$style.layout_page">
    <nut-navbar :title="navbarTitle" v-if="Taro_Env === 'h5'" />
    <view>
      <router-view />
    </view>
    <nut-tabbar v-if="!showIcon" v-model="selectedTab" bottom safe-area-inset-bottom @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" href="/home" name="home" :icon="Home" />
      <nut-tabbar-item tab-title="我的" href="/user" name="user" :icon="My" />
    </nut-tabbar>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import { useRoute, useRouter } from 'vue-router';
import { Home, My } from '@nutui/icons-vue-taro';

const route = useRoute();
const router = useRouter();

const navbarTitle = ref('');
const showIcon = ref(false);
const selectedTab = ref('home');
const Taro_Env = process.env.TARO_ENV;

watch(
  () => route.meta,
  () => getRouteMeta()
);

function tabSwitch(item) {
  router.replace(item.href);
}

const getRouteMeta = () => {
  const { title } = route.meta;
  navbarTitle.value = title as string;
  selectedTab.value = route.name as string;
  showIcon.value = !['home', 'user'].includes(route.name as string);
};

getRouteMeta();
</script>

<style lang="scss" module>
.layout_page {
  height: 100vh;
  background-color: #f3f5f7;
}
</style>
