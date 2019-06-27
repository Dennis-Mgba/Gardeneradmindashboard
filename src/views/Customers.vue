<template>
  <div class="">
    <MainSideHeader> </MainSideHeader>
    <router-link class="button is-white  btn" to=" ">Add New Customers</router-link>
    <p class=""> Showing 38 customers</p>
    <p><i class="fas fa-search" aria-hidden="true"></i> search</p>

    <div class="">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Gardener</th>
          <th>Cluster</th>
          <th>Action</th>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="/customersprofile">Silm Momoh</router-link></td>
          <td><p>Jennifer Omage</p></td>
          <td>Lekki</td>
          <td><a href=""><p>Pause</p></a></td>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="">Senator Coco</router-link></td>
          <td><p>Opeyemi Bello</p></td>
          <td>Ajah</td>
          <td><a href=""><p>Pause</p></a></td>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="">Nadayah Enegesi</router-link></td>
          <td><p>Micheal Obasesan</p></td>
          <td>Yaba</td>
          <td><a href=""><p>resume</p></a></td>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="">Ivan Young</router-link></td>
          <td><p>opeyemi Bello</p></td>
          <td>ikeja</td>
          <td><a href=""><p>resume</p></a></td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import MainSideHeader from '../components/MainSideHeader.vue';

export default {
    name: 'customers',
    components: {
      MainSideHeader,
    }
}
</script>

<style scope>

</style>
