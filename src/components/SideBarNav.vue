<template>
  <div class="column is-tablet is-2">
    <img src="../assets/logo.png" width="70px" height="70px" alt="">
    <div class="select is-rounded">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>

    <div class-="buttons">
      <a href=""><b-button class="button is-white is-fullwidth nav-btn">Gardeners</b-button></a>
      <a href=""><b-button class="button is-white is-fullwidth nav-btn">Customers</b-button></a>
      <a href=""><b-button class="button is-white is-fullwidth nav-btn">Service Partners</b-button></a>
      <a href=""><b-button class="button is-white is-fullwidth nav-btn">Orders</b-button></a>
      <a href=""><b-button class="button is-white is-fullwidth nav-btn">Users</b-button></a>
    </div>
 </div>
</template>

<script>
export default {
    name: 'SideBarNav',
}
</script>

<style scope>
.is-2 {
  background: #f9fffb;
  text-align: center;
}

.select {
  margin: 20px 0px 50px 25px;
  width: 150px;
}

.nav-btn {
  background: #f9fffb;
}

.nav-btn:hover {
  color: #ff8533;
  background-color: #f9f9ed;
  border-left: 5px solid #ff8533;
}
</style>
