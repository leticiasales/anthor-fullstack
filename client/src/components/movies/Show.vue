<template>
  <v-card
    class="mx-auto mt-4"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ movie.release_date | formatDate }}</div>
        <v-list-item-title class="headline mb-1">{{ movie.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ movie.summarized_plot }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="editMovie">Edit</v-btn>
      <v-btn text @click="deleteMovie">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MoviesShow',
  components: {},
  data () {
    return {
      movie: {}
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/movies/' + this.$route.params.id)
      .then(response => (this.movie = response.data))
  },
  methods: {
    editMovie () {
      this.$router.push({
        name: 'Edit Movie',
        params: { id: this.movie._id }
      })
    },
    deleteMovie () {
      axios
        .delete('http://localhost:8081/movies/' + this.movie._id)
        .then(
          this.$router.push({
            name: 'Movies'
          })
        )
    }
  }
}
</script>
