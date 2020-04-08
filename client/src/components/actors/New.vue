<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Actors Manager</h1>
    <b-row>
      <b-col>
        <b-card :name="(model._id ? 'Edit Actor' : 'New Actor')">
          <form @submit.prevent="save">
            <b-form-group label="Name">
              <b-form-input type="text" v-model="model.name"></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit">Save</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ActorsNew',
  components: {},
  data () {
    return {
      loading: false,
      model: {
        movies: []
      },
      movies: []
    }
  },
  mounted () {
    if (this.$route.params.id) {
      axios
        .get('http://localhost:8081/actors/' + this.$route.params.id)
        .then(response => (this.model = response.data))
        .catch(errors => console.log(errors))
    }
  },
  methods: {
    save () {
      if (this.$route.params.id) {
        // Post to server
        axios.put('http://localhost:8081/actors/' + this.$route.params.id, this.model).then(res => {
          // Post a status message
          this.loading = true
          if (res.status === 200) {
            // now send the user to the next route
            this.$router.push({
              name: 'Actor',
              params: {
                id: res.data._id
              }
            })
          } else {
            this.status = res.data.message
          }
        })
      } else {
        // Post to server
        axios.post('http://localhost:8081/actors', this.model).then(res => {
          // Post a status message
          this.loading = true
          if (res.status === 200) {
            // now send the user to the next route
            this.$router.push({
              name: 'Actor',
              params: {
                id: res.data._id
              }
            })
          } else {
            this.status = res.data.message
          }
        })
      }
    }
  }
}
</script>
