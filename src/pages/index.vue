<template>
  <main>
    <van-tabbar v-model="active" transparent :border="false">
      <van-tabbar-item icon="wap-home-o">{{ $t('nav_server') }}</van-tabbar-item>
      <van-tabbar-item icon="search">{{ $t('nav_about') }}</van-tabbar-item>
      <van-tabbar-item icon="location-o">{{ $t('nav_user') }}</van-tabbar-item>
    </van-tabbar>
  </main>
</template>
<style>
main {
  height: 100vh;
  width: 100vw;
}
</style>