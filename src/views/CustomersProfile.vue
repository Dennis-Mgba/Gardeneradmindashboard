<template>
  <div class="">
    <MainSideHeader> </MainSideHeader>
    <router-link class="button is-white  btn" to=" ">Add Gardener</router-link>
    <CustomersProfileTopbar></CustomersProfileTopbar><br>
<!-- form below -->
    <div class="form">

      <div class="field">
          <label class="label">Full Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Enter Full Name">
          </div>
      </div><br>

      <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" placeholder="Enter E-mail Address">
          </div>
      </div><br>

      <div class="field">
          <label class="label">Contact Number</label>
          <div class="control">
            <input class="input" type="text" placeholder="Enter Phone number">
          </div>
      </div><br>

      <p class="">Preferred means of communication</p>
      <div class="field">
        <div class="control">
            <label class="checkbox">
              <input type="checkbox"> Call
        	 </label>
        	 <label class="checkbox">
             <input type="checkbox"> Sms
        	</label>
        	<label class="checkbox">
            <input type="checkbox"> Whatsapp
        	</label>
        </div>
      </div><br>

      <div class="field">
        <label class="label">Location/Cluster</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
      </div><br>

      <div class="field">
        <label class="label">Address</label>
          <div class="control">
            <input class="input" type="text" placeholder="Enter address">
          </div>
      </div><br>

      <div class="field">
        <label class="label">Access note</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter access note for this address">
        </div>
      </div><br>

      <div class="field">
        <label class="label">Food notes</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter spec notes regarding Silm's food">
        </div>
      </div><br>

      <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a class="button is-primary">
              Submit
            </a>
          </p>
          <p class="control">
            <a class="button is-light">
              Cancel
            </a>
          </p>
        </div>
    </div>
  </div>
</template>


<script>
import MainSideHeader from '../components/MainSideHeader.vue';
import CustomersProfileTopbar from '../components/CustomersProfileTopbar.vue';

export default {
    name: 'GardenersCustom',
    components: {
      MainSideHeader,
      CustomersProfileTopbar
    }
}
</script>


<style scoped>

</style>
