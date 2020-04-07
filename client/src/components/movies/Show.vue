<template>
  <div>
    <b-card
      :title="movie.title"
      :sub-title="movie.release_date | formatDate"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ movie.summarized_plot }}
      </b-card-text>

      <b-button :href="movie.trailer" variant="primary">Watch trailer</b-button>
    </b-card>
  </div>
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
  }
}
</script>
