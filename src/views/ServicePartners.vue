<template>
  <div class="">
    <MainSideHeader> </MainSideHeader>
    <router-link class="button is-white  btn" to=" ">Add Service Partners</router-link>
    <p class=""> Showing 3 services partners</p>
    <p><i class="fas fa-search" aria-hidden="true"></i> search</p>

    <div class="">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Order</th>
          <th>Category</th>
          <th>Cluster</th>
          <th>Action</th>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="">The Place</router-link></td>
          <td>83</td>
          <td>Food</td>
          <td>All</td>
          <td><a href=""><p>Edit</p></a></td>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="">Dios Delite</router-link></td>
          <td>37</td>
          <td>Food</td>
          <td>Ajah</td>
          <td><a href=""><p>Edit</p></a></td>
        </tr>
        <tr>
          <td><img src="" alt=""> <router-link class="" to="">Laundromart</router-link></td>
          <td>15</td>
          <td>Laundry</td>
          <td>Yaba</td>
          <td><a href=""><p>Edit</p></a></td>
        </tr>

      </table>
    </div>

  </div>
</template>

<script>
import MainSideHeader from '../components/MainSideHeader.vue';

export default {
    name: 'ServicesPartners',
    components: {
      MainSideHeader,
    }
}
</script>

<style scope>

</style>
