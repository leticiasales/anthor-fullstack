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
      movies: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/movies')
      .then(response => (this.movies = response.data))
  }
}
</script>
