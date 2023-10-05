<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg main-navbar">
      <a href="#" class="navbar-brand">
        <img src="/images/banner-logo.png" class="img-fluid" alt="logo" />
      </a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="mobileShow = !mobileShow"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between w-100"
        :class="mobileShow ? 'show' : ''"
        id="collapsibleNavId"
      >
        <ul class="navbar-nav ms-auto navbar-text-wrapper">
          <li class="nav-item active">
            <a href="#">Create Funds</a>
          </li>
          <li class="nav-item">
            <a href="#">Performance</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#" class="notification-wrapper">
              <img src="/images/icons_bell.png" alt="" />
            </a>
          </li>
          <li class="nav-item profile-wrapper d-flex align-items-center">
            <a href="#" class="profile_pic">
              <img src="/images/user-profile-pic.png" alt="profile-pic" />
            </a>
            <a href="#">
              <span class="pro-title"> John Doe</span>
              <span
                ><i class="fa fa-chevron-down text-white" aria-hidden="true"></i
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <RpcModal
    :isShow="showModal"
    v-if="showModal"
    v-on:hide-modal="showModal = false"
  />
</template>

<script>
import { reactive } from "vue";
import RpcModal from "../components/RpcModal.vue";
import ApiService from "../services";
var audio = new Audio("/audio/game_bg.mp3");
export default {
  name: "Navbar",
  components: {
    RpcModal,
  },
  data() {
    return {
      played: false,
      isShow: false,
      showModal: false,
      mobileShow: false,
      wbxLoaded: false,
      wbcLoaded: false,
      waxBalance: 0,
      wbc: 0,
      wbx: 0,
    };
  },
  setup() {
    const authentication = reactive({
      user_name: localStorage.getItem("wax_user"),
    });
    return {
      authentication,
    };
  },
  mounted() {
    ApiService.getBalance(process.env.VUE_APP_WBX_CONTRACT, "WBX", (res) => {
      if (res.data.length > 0) {
        this.wbx = res.data[0];
      }
      this.wbxLoaded = true;
    });
    ApiService.getBalance(process.env.VUE_APP_WBC_CONTRACT, "WBC", (res) => {
      if (res.data.length > 0) {
        this.wbc = res.data[0];
      }
      this.wbcLoaded = true;
    });
    ApiService.getAccount((res) => {
      if (res.data) {
        this.$store.commit("addBalance", res.data.core_liquid_balance);
        this.waxBalance = res.data.core_liquid_balance;
      }
      this.waxLoaded = true;
    });
  },
  methods: {
    playSound(start) {
      if (start) {
        // alert("hiii");
        audio.play();
        audio.loop = true;
      } else {
        audio.pause();
      }
      this.played = start;
    },
    showRvcModal() {
      this.showModal = true;
      this.isShow = false;
    },
    logout() {
      this.$router.push("/login");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* .navbar-text-wrapper {
  flex: 1;
  justify-content: center;
} */

.notification-wrapper {
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #393939 0%, #1d1e22 100%);
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}
.notification-wrapper img {
  width: 20px;
}

.profile_pic {
  width: 40px;
  height: 40px;
  display: block;
}
.profile_pic img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

.navbar-text-wrapper .nav-item a:last-child {
  margin-left: 40px;
}
.navbar-text-wrapper .nav-item.active a {
  font-weight: 800;
  color: #00b9ae;
  position: relative;
}
.navbar-text-wrapper .nav-item.active a::after {
  content: "";
  position: absolute;
  display: block;
  width: 110px;
  height: 3px;
  top: 25px;
  left: 0;
  background: #00b9ae;
  border-radius: 50px;
}
.navbar-text-wrapper .nav-item a {
  color: #f9f9f9;
  font-family: var(--LatoFont);
  font-size: 18px;
  font-weight: 400;
  line-height: 100%; /* 21.666px */
}

.profile-wrapper a .pro-title {
  color: #fff;
  font-family: var(--LatoFont);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 20px;
}

.dropdown-menu {
  min-width: 100%;
}
.dropdown-menu .dropdown-item:hover {
  background: transparent !important;
  color: rgb(145, 134, 134);
  transition: color 0.4s;
}

.navbar-collapse {
  flex-grow: unset;
}
</style>
