<template>
  <div id="app">
    <a-layout id="components-layout-demo-top" class="layout">
      <Header />
      <a-layout-content style="padding: 0 50px">
        <div style="margin-top: 40px" :style="{ background: '#fff', padding: '24px', minHeight: '610px' }">
          <router-view/>
          <notifications group="user-notifications" />
        </div>
      </a-layout-content>
      <Footer />
    </a-layout>
    <div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
