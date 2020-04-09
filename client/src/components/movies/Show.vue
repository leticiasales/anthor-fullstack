<template>
  <v-card
    class="mx-auto mt-4"
    max-width="500"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4 uppercase">{{ movie.genre }} MOVIE</div>
        <div class="d-flex">
          <v-list-item-title class="headline mb-1">
            {{ movie.title }}
          </v-list-item-title>
          <v-spacer></v-spacer>
          <v-list-item-title class="text-right">
            {{ movie.release_date | formatDate }}
          </v-list-item-title>
        </div>
        <v-list-item-subtitle>{{ movie.summarized_plot }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <b-list-group>
        <b-list-group-item v-for="actor in movie.actors" :key="actor._id">{{ actor.name }}</b-list-group-item>
      </b-list-group>
    </v-card-text>

    <div>
      <v-btn text @click="editMovie">Edit</v-btn>
      <v-btn text @click="deleteMovie">Delete</v-btn>
    </div>
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
      .catch(errors => console.log(errors))
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
