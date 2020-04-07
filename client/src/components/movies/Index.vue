<template>
  <v-container>
    <b-table striped hover :items="movies" :fields="fields" :busy="loading">
      <template v-slot:table-busy>
        <div class="text-center text-danger mt-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(release_date)="data">
        {{ data.item.release_date | formatDate }}
      </template>
      <template v-slot:cell(trailer)="data">
        <a :href="data.item.trailer" target="_blank">Watch trailer</a>
     </template>
      <template v-slot:cell(actions)="data">
        <b-row>
          <b-btn class="mr-1" @click.prevent="showMovie(data.item._id)">
            <b-icon icon="eye" size="is-small"></b-icon>
          </b-btn>
          <b-btn class="mr-1" @click.prevent="editMovie(data.item._id)">
            <b-icon icon="pencil-square" size="is-small"></b-icon>
          </b-btn>
          <b-btn @click.prevent="deleteMovie(data.item._id)">
            <b-icon icon="trash" size="is-small"></b-icon>
          </b-btn>
        </b-row>
     </template>
    </b-table>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MoviesIndex',
  components: {},
  data () {
    return {
      loading: true,
      fields: [{ key: 'title' }, { key: 'release_date', sortable: true, formatter: 'formatDate' }, { key: 'summarized_plot' }, { key: 'trailer' }, { key: 'actions' }],
      movies: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/movies')
      .then(response => {
        this.movies = response.data
        this.loading = false
      })
  },
  methods: {
    showMovie (id) {
      this.$router.push({
        name: 'Movie',
        params: { id: id }
      })
    },
    editMovie (id) {
      this.$router.push({
        name: 'Edit Movie',
        params: { id: id }
      })
    },
    deleteMovie (id) {
      axios
        .delete('http://localhost:8081/movies/' + id)
        .then(
          this.$router.push({
            name: 'Movies'
          })
        )
    }
  }
}
</script>
