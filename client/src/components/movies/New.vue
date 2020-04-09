<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Movies Manager</h1>
    <b-row>
      <b-col>
        <b-card :title="(model._id ? 'Edit Movie' : 'New Movie')">
          <form @submit.prevent="save">
            <b-form-group label="Title">
              <b-form-input type="text" v-model="model.title"></b-form-input>
            </b-form-group>
            <b-form-group label="Release date">
              <b-form-datepicker
                v-model="model.release_date"
                :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
                locale="pt"
              ></b-form-datepicker>
            </b-form-group>
            <b-form-group label="Genre">
              <b-form-select v-model="model.genre" >
                <option v-for="(genre, i) in genres"
                  :key="i"
                  :value="genre"
                >
                  {{ genre.name }}
                </option>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Summarized Plot">
              <b-form-textarea rows="3" v-model="model.summarized_plot"></b-form-textarea>
            </b-form-group>
            <b-form-group label="Trailer">
              <b-form-input type="text" v-model="model.trailer"></b-form-input>
            </b-form-group>
            <b-form-group label="Actors">
              <b-form-select multiple v-model="model.actors">
                <option v-for="(actor, i) in actors"
                  :key="i"
                  :value="actor"
                >
                  {{ actor.name }}
                </option>
              </b-form-select>
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
  name: 'MoviesNew',
  components: {},
  data () {
    return {
      loading: false,
      model: {
        actors: []
      },
      actors: [],
      genres: []
    }
  },
  mounted () {
    if (this.$route.params.id) {
      axios
        .get('http://localhost:8081/movies/' + this.$route.params.id)
        .then(response => (this.model = response.data))
        .catch(errors => console.log(errors))
    }

    const actors = axios.get('http://localhost:8081/actors/')
    const genres = axios.get('http://localhost:8081/genres/')

    axios.all([actors, genres])
      .then(axios.spread((respAct, respGen) => {
        this.actors = respAct.data
        this.genres = respGen.data
      }))
      .catch(errors => console.log(errors))
  },
  methods: {
    save () {
      if (this.$route.params.id) {
        // Put to server
        axios.put('http://localhost:8081/movies/' + this.$route.params.id, this.model).then(res => {
          // Post a status message
          this.loading = true
          if (res.status === 200) {
            // now send the user to the next route
            this.$router.push({
              name: 'Movie',
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
        axios.post('http://localhost:8081/movies', this.model).then(res => {
          // Post a status message
          this.loading = true
          if (res.status === 200) {
            // now send the user to the next route
            this.$router.push({
              name: 'Movie',
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
