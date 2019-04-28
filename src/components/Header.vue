<template>
  <a-layout-header>
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :selectedKeys="getSelectedItem"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1" v-if="!token">
        <router-link to="/sign-in"><a-icon type="login" />{{ $lang.header.signIn }}</router-link>
      </a-menu-item>
      <a-menu-item key="2" v-if="!token">
        <router-link to="/sign-up"><a-icon type="plus-circle" />{{ $lang.header.signUp }}</router-link>
      </a-menu-item>
      <a-menu-item key="3" v-if="token">
        <router-link to="/devices"><a-icon type="tool" />{{ $lang.header.myDevices }}</router-link>
      </a-menu-item>
      <a-menu-item key="4" v-if="token">
        <router-link to="/add-device"><a-icon type="plus-circle" />{{ $lang.header.addDevice }}</router-link>
      </a-menu-item>
      <a-menu-item key="5" @click="logout" v-if="token">
        <a-icon type="logout" />{{ $lang.header.logout }}
      </a-menu-item>
    </a-menu>
    <a-select defaultValue="en" @change="handleChange" class="language-selector">
      <a-select-option value="en">EN</a-select-option>
      <a-select-option value="ua">UA</a-select-option>
    </a-select>
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
    getSelectedItem() {
      const path = this.$route.path.slice(1);
      const items = {
        'sign-in': ['1'],
        'sign-up': ['2'],
        'devices': ['3'],
        'add-device': ['4'],
      };

      return items[path];
    }
  },
  methods: {
    ...mapActions('auth', {
      signOut: actionTypes.SIGN_OUT,
    }),
    logout() {
      this.signOut().then(() => {
        this.$router.push({ path: `/sign-in` });
      });
    },
    handleChange(langValue) {
      this.$lang.setLang(langValue);
    }
  }
}
</script>

<style>
  .logo {
    position: absolute;
  }
  .language-selector {
    width: 90px;
    position: absolute;
    top: 15px;
    right: 30px;
  }
</style>
