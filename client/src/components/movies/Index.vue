<template>
  <div>
    <b-table striped hover :items="movies"></b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MoviesIndex',
  components: {},
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/movies')
      .then(response => (this.movies = response.data))
  }
}
</script>
