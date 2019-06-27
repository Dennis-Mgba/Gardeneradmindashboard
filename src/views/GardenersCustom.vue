<template>
      <div class="">
        <MainSideHeader> </MainSideHeader>
        <!-- <router-link class="button is-white  btn" to=" ">Add Gardener</router-link> -->
        <div class="select">
          <select>
            <option id="">New Customer</option>
            <option>Existing Customer</option>
          </select>
        </div>


        <div class="">
          <img src="../assets/agusto.png" alt="Jennifer's picture">
          <ul>
            <li>Ope Bello</li>
            <li>Lekki Axis</li>
            <li>28 Customer</li>
          </ul>
        </div>

        <div class="tabs">
          <ul>
            <li class="is-active"><a>CUSTOMERS</a></li>
            <li><a>SCHEDULE</a></li>
          </ul>
        </div>

        <table class="table">
          <tr>
            <th>Name</th>
            <th>Subscription</th>
            <th>Contact preference</th>
          </tr>
          <tr>
            <td> <a href="">Ope Bello</a></td>
            <td>Ojoro bundle</td>
            <td>Sms, What's app, Call</td>
          </tr>
          <tr>
            <td> <a href="">Prosper Otemuyiwa</a></td>
            <td>Gallant bundle</td>
            <td>Sms, Call</td>
          </tr>
          <tr>
            <td> <a href="">Nadayar Enegesi</a></td>
            <td>Foodie bundle</td>
            <td>Sms, What's app, Call</td>
          </tr>
          <tr>
            <td> <a href="gardenerscustom.html">Ope Bello</a></td>
            <td>Ojoro bundle</td>
            <td>Sms, What's app, Call</td>
          </tr>
        </table>
      </div>
</template>


<script>
import MainSideHeader from '../components/MainSideHeader.vue';

export default {
    name: 'GardenersCustom',
    components: {
      MainSideHeader,
    }
}
</script>


<style scoped>

</style>
