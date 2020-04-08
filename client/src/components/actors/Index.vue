<template>
  <v-container>
    <b-row>
      <b-col>
        <b-link to="new" append>New Actor</b-link>
      </b-col>
    </b-row>
    <b-table striped hover :items="actors" :fields="fields" :busy="loading">
      <template v-slot:table-busy>
        <div class="text-center text-danger mt-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(actions)="data">
        <b-row>
          <b-btn variant="outline-primary" class="mr-1" @click.prevent="showActor(data.item._id)">
            <b-icon icon="eye" size="is-small"></b-icon>
          </b-btn>
          <b-btn variant="outline-secondary" class="mr-1" @click.prevent="editActor(data.item._id)">
            <b-icon icon="pencil-square" size="is-small"></b-icon>
          </b-btn>
          <b-btn variant="outline-danger" @click.prevent="deleteActor(data.item._id)">
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
  name: 'ActorsIndex',
  components: {},
  data () {
    return {
      loading: true,
      fields: [{ key: 'name' }, { key: 'actions' }],
      actors: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/actors')
      .then(response => {
        this.actors = response.data
        this.loading = false
      })
  },
  methods: {
    showActor (id) {
      this.$router.push({
        name: 'Actor',
        params: { id: id }
      })
    },
    editActor (id) {
      this.$router.push({
        name: 'Edit Actor',
        params: { id: id }
      })
    },
    deleteActor (id) {
      axios
        .delete('http://localhost:8081/actors/' + id)
        .then(
          this.$router.push({
            name: 'Actors'
          })
        )
    }
  }
}
</script>
