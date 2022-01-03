<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
  @import url('./styles/global.css');
  @import url('./styles/scrollbar.css');
  @import url('./styles/accessibility.css');
  @import url('./styles/titles.css');
  @import url('./styles/links.css');
  @import url('./styles/buttons.css');
</style>
