<template>
  <div class="container-fluid" style="padding: 0px;">
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
