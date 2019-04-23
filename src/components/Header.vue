<template>
  <a-layout-header>
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1" v-if="!token">
        <router-link to="/sign-in"><a-icon type="login" />Sign in</router-link>
      </a-menu-item>
      <a-menu-item key="2" v-if="!token">
        <router-link to="/sign-up"><a-icon type="plus-circle" />Sign up</router-link>
      </a-menu-item>
      <a-menu-item key="3" v-if="token">
        <router-link to="/devices"><a-icon type="tool" />My devices</router-link>
      </a-menu-item>
      <a-menu-item key="4" v-if="token">
        <router-link to="/add-device"><a-icon type="plus-circle" />Add device</router-link>
      </a-menu-item>
      <a-menu-item key="5" @click="logout" v-if="token">
        <a-icon type="logout" />Logout
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'Header',
  computed: {
    ...mapState({
      token: state => state.auth.token,
    }),
  },
  methods: {
    ...mapActions('auth', {
      signOut: actionTypes.SIGN_OUT,
    }),
    logout() {
      this.signOut().then(() => {
        this.$router.push({ path: `/sign-in` });
      });
    }
  }
}
</script>

<style>
  .logo {
    position: absolute;
  }
</style>
