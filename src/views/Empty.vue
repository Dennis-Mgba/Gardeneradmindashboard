<template>
  <div class="sm">
    <MainSideHeader> </MainSideHeader>
    <router-link class="button is-white  btn" to="/gardeners">Add Gardeners</router-link>
  </div>
</template>

<script>
import MainSideHeader from '../components/MainSideHeader.vue';

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
