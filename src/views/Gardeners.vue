<template>
    <div class="sm">
      <MainSideHeader> </MainSideHeader>
        <!-- <router-link class="button is-white  btn" to="">Add Gardeners</router-link> -->

        <p>Showing 3 gardeners</p>

        <p><i class="fas fa-search" aria-hidden="true"></i> search</p>

        <table class="table">
          <tr>
            <th>Name</th>
            <th>Customers</th>
            <th>Role</th>
            <th>Clusters</th>
          </tr>
          <tr>
            <td><img src="" alt=""> <router-link class="" to="/gardenerscustom">Ope Bello</router-link></td>
            <td><progress class="progress is-smalls is-success" value="60" max="100"></progress> 25</td>
            <td>Lead Gardener</td>
            <td>Ajah</td>
          </tr>
          <tr>
            <td>Jennifer Omage</td>
            <td><progress class="progress is-smalls is-success" value="60" max="100"></progress> 25</td>
            <td>Gardener</td>
            <td>Lekki</td>
          </tr>
          <tr>
            <td>Micheal Obasesan</td>
            <td><progress class="progress is-smalls is-success" value="60" max="100"></progress> 25</td>
            <td>Gardener</td>
            <td>Yaba</td>
          </tr>
        </table>
    </div>
</template>

<script>
import MainSideHeader from '../components/MainSideHeader.vue';
export default {
    name: 'Gardeners',
    components: {
      MainSideHeader,
    }
}
</script>

<style scoped>

</style>
