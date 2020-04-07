<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Dashboard</h1>
    <p>Only authenticated users should see this page</p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
  data () {
    return {
      title: 'App',
      user: (this.$route.params.user) ? this.$route.params.user : null
    }
  }
}
</script>
