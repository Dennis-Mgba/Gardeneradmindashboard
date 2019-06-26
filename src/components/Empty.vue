<template>
  <div class="column is-table is-10 sm">
    <MainSideHeader> </MainSideHeader>
    <router-link class="button is-white  btn" v-onclick="component='Gardeners'">Add Gardener</router-link>
  </div>
</template>

<script>
import MainSideHeader from './MainSideHeader.vue';

export default {
    name: 'Empty',
    components: {
      MainSideHeader,
    }
}
</script>

<style scope>
.sm {
    padding-top: 20px;
}

.btn {
  margin-top: 100px;
}
</style>
