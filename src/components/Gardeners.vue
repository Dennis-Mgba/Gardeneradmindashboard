<template>
        <div class="column is-10" style="outline: 1px solid black;">
        <h3>GARDENERS</h3>
        <a class="button is-white ">Add gardeners</a>
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
            <td> <a href="">Opeyemi Bello</a></td>
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
export default {
    name: 'Gardeners',
}
</script>

<style scoped>

</style>
