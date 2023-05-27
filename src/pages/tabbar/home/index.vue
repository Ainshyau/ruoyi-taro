<template>
  <view class="home-page">
    <view :class="$style.system_setting">
      <nut-cell title="系统管理" :round-radius="0" size="large" />
      <nut-grid clickable :border="false" :column-num="5">
        <nut-grid-item v-for="(item, index) in gridItemList" :key="index" :text="item.text">
          <component :is="item.icon" size="20px" />
        </nut-grid-item>
      </nut-grid>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { People, Category, My, Horizontal } from '@nutui/icons-vue-taro';

const gridItemList = [
  {
    text: '用户管理',
    icon: My
  },
  {
    text: '角色管理',
    icon: People
  },
  {
    text: '菜单管理',
    icon: Horizontal
  },
  {
    text: '部门管理',
    icon: Category
  },
  {
    text: '用户管理',
    icon: My
  },
  {
    text: '角色管理',
    icon: People
  },
  {
    text: '菜单管理',
    icon: Horizontal
  },
  {
    text: '部门管理',
    icon: Category
  },
  {
    text: '部门管理',
    icon: Category
  },
  {
    text: '部门管理',
    icon: Category
  }
];
</script>

<style lang="scss" module>
.system_setting {
  margin: 0 16px;

  :global(.nut-cell) {
    margin: 0;
    box-shadow: none;
    background: none;
    padding: 8px 0;
  }

  :global(.nut-grid) {
    border-radius: 16px;
    overflow: hidden;
  }
}
</style>
