<template>
  <v-container>
    <b-row>
      <b-col>
        <b-link to="new" append>New Genre</b-link>
      </b-col>
    </b-row>
    <b-table striped hover :items="genres" :fields="fields" :busy="loading">
      <template v-slot:table-busy>
        <div class="text-center text-danger mt-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(actions)="data">
        <b-row>
          <b-btn variant="outline-primary" class="mr-1" @click.prevent="showGenre(data.item._id)">
            <b-icon icon="eye" size="is-small"></b-icon>
          </b-btn>
          <b-btn variant="outline-secondary" class="mr-1" @click.prevent="editGenre(data.item._id)">
            <b-icon icon="pencil-square" size="is-small"></b-icon>
          </b-btn>
          <b-btn variant="outline-danger" @click.prevent="deleteGenre(data.item._id)">
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
  name: 'GenresIndex',
  components: {},
  data () {
    return {
      loading: true,
      fields: [{ key: 'name' }, { key: 'actions' }],
      genres: []
    }
  },
  mounted () {
    this.setGenres()
  },
  methods: {
    showGenre (id) {
      this.$router.push({
        name: 'Genre',
        params: { id: id }
      })
    },
    editGenre (id) {
      this.$router.push({
        name: 'Edit Genre',
        params: { id: id }
      })
    },
    deleteGenre (id) {
      axios
        .delete('http://localhost:8081/genres/' + id)
        .then(this.setGenres())
    },
    setGenres () {
      this.loading = true
      axios
        .get('http://localhost:8081/genres')
        .then(response => {
          this.genres = response.data
          this.loading = false
        })
    }
  }
}
</script>
