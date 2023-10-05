<template>
  <div class="bg-color wrapper">
    <div class="top-nav">
      <div class="container">
        <div class="logo">
          <img src="/images/banner-logo.png" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="login-left-content">
            <div class="top-left-img">
              <img src="/images/top-banner_bg.png" class="top-left-icon" alt="" />
              <img src="/images/banner-ring1.png" class="" alt="" />
            </div>
            <div class="left-wallet-img">
              <img src="/images/wallet.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="login-right-wrapper">
            <div class="login-text">
              <h3 class="login-title">Login</h3>
              <p class="my-4">Welcome onboard with us!</p>
            </div>
            <div class="login-button">
              <h4 class="mt-4 btn btn-success">CONNECT A WALLET</h4>
            </div>
            <p class="register-link">New to Findexd? <a href="#">Register</a> Here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      ual: null,
      showPopup: false,
    };
  },
  inheritAttrs: false,
  mounted() {},
  methods: {},
};
</script>

<style scoped>
#ual-modal #ual-modal-get-authenticator,
#ual-modal-selection-content,
#ual-modal-input-content {
  background: transparent !important;
}

.top-left-img {
  position: relative;
  top: 35px;
}
.wrapper {
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  /* padding-bottom: 50px; */
}
.bg-color {
  /* border-radius: 1401.686px; */
  background: rgba(6, 125, 113, 0.65);
}

.wrapper::before {
  content: "";
  width: 300px;
  height: 300px;
  position: absolute;
  top: -108px;
  right: -27px;
  border-radius: 50%;
  border: 1px solid #ddd;
  z-index: -1;
}
/* .wrapper::after {
  content: "";
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -10%;
  right: 0;
  border-radius: 50%;
  border: 1px solid #ddd;
  z-index: -1;
} */
</style>
