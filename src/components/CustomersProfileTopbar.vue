<template>
  <div class="">
    <div class="">
      <img src="../assets/agusto.png" alt="Jennifer's picture">
      <ul>
        <li>Nadayar Enegesi</li>
        <li>Yaba Axis</li>
      </ul>
    </div>

    <div class="tabs">
      <ul>
        <li class="is-active"><router-link to="/customersprofile">Profile</router-link></li>
        <li><router-link to="/customersorder">Order</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CustomersProfileTopbar',
}
</script>

<style scoped>
.header-text{

}
</style>
