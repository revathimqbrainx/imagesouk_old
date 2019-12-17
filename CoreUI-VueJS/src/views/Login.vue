<template>
<body class="c-app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group">
            <div class="card p-4">
              <div class="card-body">
                  <form @submit="formSubmit">
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend"><span class="input-group-text">
                      <svg class="c-icon">
                        <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
                      </svg></span></div>
                  <input class="form-control" type="text" v-model="email" placeholder="Username">
                </div>
                <div class="input-group mb-4">
                  <div class="input-group-prepend"><span class="input-group-text">
                      <svg class="c-icon">
                        <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>
                      </svg></span></div>
                  <input class="form-control" v-model="password" type="password" placeholder="Password">
                </div>
                <div class="row">
                  <div class="col-4">
                    <button class="btn btn-primary px-4" type="submit">Login</button>
                  </div>
                  <div class="col-4 text-right">
                    <button class="btn btn-link px-0" type="button">Forgot password?</button>
                  </div>
                </div>
                </form>
              </div>
              
            </div>
          
          </div>
        </div>
      </div>
    </div>
   </body>
   </template>
   <script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
              email: '',
              password: '',
              output: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://localhost:8000/api/login', {
                    email: this.email,
                    password: this.password
                }, {
                    headers: { 'Access-Control-Allow-Origin': '*' }
                })
                .then(function (response) {
                    console.log(response);
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
    }
</script>