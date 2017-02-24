<template>
    <div class="wrapper">
      <div class="block-center mt-xl wd-xl">
         <!-- START panel-->
         <div class="panel panel-dark panel-flat">
            <div class="panel-heading text-center">
               <a href="#">
                  <img src="../../assets/img/logo.png" alt="Image" class="block-center img-rounded">
               </a>
            </div>
            <div class="panel-body">
               <p class="text-center pv">SIGN IN TO CONTINUE.</p>
               <form role="form" data-parsley-validate="" novalidate="" class="mb-lg">
                  <div class="form-group has-feedback">
                     <input id="exampleInputEmail1" v-model="email" name="email" type="email" placeholder="Enter email" autocomplete="off" required class="form-control">
                     <span class="fa fa-envelope form-control-feedback text-muted" style="line-height: 35px"></span>
                  </div>
                  <div class="form-group has-feedback">
                     <input id="exampleInputPassword1" v-model="password" name="password" type="password" placeholder="Password" required class="form-control">
                     <span class="fa fa-lock form-control-feedback text-muted" style="line-height: 35px"></span>
                  </div>
                  <div class="clearfix">
                     <div class="checkbox c-checkbox pull-left mt0">
                        <label>
                           <input type="checkbox" value="" name="remember">
                           <span class="fa fa-check"></span>Remember Me</label>
                     </div>
                     <div class="pull-right"><a href="recover.html" class="text-muted">Forgot your password?</a>
                     </div>
                  </div>
                  <button @click="login" class="btn btn-block btn-primary mt-lg">Login</button>
               </form>
               <a href="register.html">Register Now</a>
            </div>
         </div>
</template>

<script>
    export default{
      data(){
        return{
          email: '',
          password: ''
        }
      },

      methods:{
        login(){
          var data = {
            client_id: 2,
            client_secret: 'Gkl8ITBoGArCfMpLq5vN8wl3g8IfOtRciacWTS6X',
            grant_type: 'password',
            username: this.email,
            password: this.password
          }

          this.$http.post("http://localhost/angular/public/oauth/token", data).then(response =>{ 
            console.log(response.body.expires_in);
              // this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now()); 
          })
        }
      }
    }
</script>

<style>
    
</style>