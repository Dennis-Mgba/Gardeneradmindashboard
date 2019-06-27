<template>
  <div class="">
    <MainSideHeader> </MainSideHeader>
    <router-link class="button is-white  btn" to=" ">Add Gardener</router-link>
    <CustomersProfileTopbar></CustomersProfileTopbar><br>
<!-- form below -->
    <div class="form">
        <p class="">Subscription</p><br>
        <div class="field">   <!-- subscription plan-->
          <label class="label">Subscription plan</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
        </div><br> <!-- end of subscription plan-->

        <p class="">Daily Food Specification</p><br>
        <div class="tabs">
          <ul>
            <li class="is-active"><a>Mon</a></li>
            <li><a>Tues</a></li>
            <li><a>wed</a></li>
            <li><a>Thurs</a></li>
            <li><a>Fri</a></li>
            <li><a>Sat</a></li>
          </ul>
        </div><br>
        <div class="field">      <!-- Food subscription -->
          <label class="label">Soups</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div><br>
            <label class="label">Carbs</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div><br>
              <label class="label">Juice</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div><br>  <!-- End of Food subscription -->

              <div class="field">     <!-- Delivery -->
                <label class="label">Delivery Day</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div><br> <!--End of delivery selection-->

                <label class="label">Delivery Period</label>
                <div class="field is-horizontal"> <!-- Time selection-->
                  <div class="field-label is-normal">
                    <label class="label">From:</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-narrow">
                      <div class="control">
                        <div class="select is-fullwidth">
                          <select>
                            <option>12:30 pm</option>
                            <option>1:00 pm</option>
                            <option>9:00 am</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  <!-- end of from -->
                <div class="field is-horizontal"> <!-- Time selection-->
                  <div class="field-label is-normal">
                    <label class="label">To:</label>
                  </div>
                  <div class="field-body">
                    <div class="field is-narrow">
                      <div class="control">
                        <div class="select is-fullwidth">
                          <select>
                            <option>12:30 pm</option>
                            <option>1:00 pm</option>
                            <option>9:00 am</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><br>  <!-- end of To -->

          <!-- Laundry-->
                <div class="field">     <!-- Laundry specification-->
                  <p class="">Laundry specification</p><br>
                  <label class="label">pickup day</label>
                    <div class="control">
                      <div class="select">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                    </div>
                  </div><br>      <!-- End of Laundry specification-->

                  <label class="label">Pickup period</label>
                  <div class="field is-horizontal"> <!-- Time selection-->
                    <div class="field-label is-normal">
                      <label class="label">From:</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-narrow">
                        <div class="control">
                          <div class="select is-fullwidth">
                            <select>
                              <option>12:30 pm</option>
                              <option>1:00 pm</option>
                              <option>9:00 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  <!-- end of from -->
                  <div class="field is-horizontal"> <!-- Time selection-->
                    <div class="field-label is-normal">
                      <label class="label">To:</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-narrow">
                        <div class="control">
                          <div class="select is-fullwidth">
                            <select>
                              <option>12:30 pm</option>
                              <option>1:00 pm</option>
                              <option>9:00 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div><br>  <!-- end of To -->

                  <label class="label">Drop of period</label>
                  <div class="field is-horizontal"> <!-- Time selection-->
                    <div class="field-label is-normal">
                      <label class="label">From:</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-narrow">
                        <div class="control">
                          <div class="select is-fullwidth">
                            <select>
                              <option>12:30 pm</option>
                              <option>1:00 pm</option>
                              <option>9:00 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  <!-- end of from -->
                  <div class="field is-horizontal"> <!-- Time selection-->
                    <div class="field-label is-normal">
                      <label class="label">To:</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-narrow">
                        <div class="control">
                          <div class="select is-fullwidth">
                            <select>
                              <option>12:30 pm</option>
                              <option>1:00 pm</option>
                              <option>9:00 am</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div><br>  <!-- end of To -->

      <!-- Form footer buttons -->
              <div class="field is-grouped">
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
