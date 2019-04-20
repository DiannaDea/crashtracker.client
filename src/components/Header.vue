<template>
  <a-layout-header>
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <router-link to="/devices"><a-icon type="tool" />My devices</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/add-device"><a-icon type="plus-circle" />Add device</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="logout" />Logout
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
  .logo {
    position: absolute;
  }
</style>
