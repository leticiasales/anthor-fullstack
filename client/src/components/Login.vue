<template>
<div class='tab-pane fade show active' id='pills-login' role='tabpanel' aria-labelledby='pills-login-tab'>
  <div class='row'>
    <div class='col-md-12'>
      <b-form @submit="login">
        <b-form-group>
          <b-form-input
            id="input-1"
            v-model="model.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      model: {
        email: '',
        password: ''
      },
      loading: '',
      status: ''
    }
  },
  methods: {
    login () {
      const formData = new FormData()
      formData.append('email', this.model.email)
      formData.append('password', this.model.password)
      this.loading = 'Signing in'
      // Post to server
      axios.post('http://localhost:3128/login', formData).then(res => {
        // Post a status message
        this.loading = ''
        if (res.data.status === true) {
          // now send the user to the next route
          this.$router.push({
            name: 'Dashboard',
            params: { user: res.data.user }
          })
        } else {
          this.status = res.data.message
        }
      })
    }
  }
}
</script>
