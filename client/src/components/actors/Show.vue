<template>
  <v-card
    class="mx-auto mt-4"
    max-width="500"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">ACTOR</div>
        <div class="d-flex">
          <v-list-item-title class="headline mb-1">
            {{ actor.name }}
          </v-list-item-title>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <b-list-group>
        <b-list-group-item v-for="movie in actor.movies" :key="movie._id">{{ movie.title }}</b-list-group-item>
      </b-list-group>
    </v-card-text>

    <div>
      <v-btn text @click="editActor">Edit</v-btn>
      <v-btn text @click="deleteActor">Delete</v-btn>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ActorsShow',
  components: {},
  data () {
    return {
      actor: {}
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/actors/' + this.$route.params.id)
      .then(response => (this.actor = response.data))
      .catch(errors => console.log(errors))
  },
  methods: {
    editActor () {
      this.$router.push({
        name: 'Edit Actor',
        params: { id: this.actor._id }
      })
    },
    deleteActor () {
      axios
        .delete('http://localhost:8081/actors/' + this.actor._id)
        .then(
          this.$router.push({
            name: 'Actors'
          })
        )
    }
  }
}
</script>
