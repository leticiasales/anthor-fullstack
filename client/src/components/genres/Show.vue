<template>
  <v-card
    class="mx-auto mt-4"
    max-width="500"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">GENRE</div>
        <div class="d-flex">
          <v-list-item-title class="headline mb-1">
            {{ genre.name }}
          </v-list-item-title>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <b-list-group>
        <b-list-group-item v-for="movie in genre.movies" :key="movie._id">{{ movie.title }}</b-list-group-item>
      </b-list-group>
    </v-card-text>

    <div>
      <v-btn text @click="editGenre">Edit</v-btn>
      <v-btn text @click="deleteGenre">Delete</v-btn>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GenresShow',
  components: {},
  data () {
    return {
      genre: {}
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/genres/' + this.$route.params.id)
      .then(response => (this.genre = response.data))
      .catch(errors => console.log(errors))
  },
  methods: {
    editGenre () {
      this.$router.push({
        name: 'Edit Genre',
        params: { id: this.genre._id }
      })
    },
    deleteGenre () {
      axios
        .delete('http://localhost:8081/genres/' + this.genre._id)
        .then(
          this.$router.push({
            name: 'Genres'
          })
        )
    }
  }
}
</script>
