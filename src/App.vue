<template>
  <div id="app" class="columns">

    <div id="nav" class="column is-2">
        <img src="./assets/logo.png" width="70px" height="70px" alt="">
        <div class="select is-rounded">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <div class-="buttons">
          <router-link class="button is-white is-fullwidth nav-btn" to="/">Gardeners</router-link>
          <router-link class="button is-white is-fullwidth nav-btn" to="/customers">Customers</router-link>
          <router-link class="button is-white is-fullwidth nav-btn" to="/servicepartners">Service Partners</router-link>

          <a href=""><b-button class="button is-white is-fullwidth nav-btn">Orders</b-button></a>
          <a href=""><b-button class="button is-white is-fullwidth nav-btn">Users</b-button></a>
        </div>
    </div>

    <div class="column is-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
    name: '#app',
    components: {

    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0px !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav-btn {
  font-weight: bold;
  color: #2c3e50;
}

#nav-btn.router-link-exact-active {
  color: #42b983;
}

.is-2, .is-10{
    border: 1px solid red;
}

</style>
