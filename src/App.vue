<template>
  <div id="app">
    <div class="columns">
    <SideBarNav> </SideBarNav>
    <component v-bind:is="component"></component>
  </div>
  </div>
</template>

<script>
import SideBarNav from '@/components/SideBarNav.vue';
import Empty from '@/components/Empty.vue';
import Gardeners from '@/components/Gardeners.vue';
import GardenersCustom from '@/components/GardenersCustom.vue'
export default {
  name: 'app',
  components: {
    'SideBarNav': SideBarNav,
    'Empty': Empty,
    'Gardeners': Gardeners,

  },
  data() {
    return{
      component: 'Empty'
    }
  },
  methods: {

  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f9fffb;
  padding:3px;
}

</style>
