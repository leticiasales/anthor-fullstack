<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">My Vue App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/movies">Movies</b-nav-item>
          <b-nav-item to="/actors">Actors</b-nav-item>
          <b-nav-item to="/genres">Genres</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user: null
    }
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.user = {}
    },
    async logout () {
      this.user = null
      this.$router.push('/')
    }
  }
}
</script>
