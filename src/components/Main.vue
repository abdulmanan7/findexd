<template>
  <div>
    <Navbar />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <div>
          <component :is="slotProps.Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import router from "../router";
import Navbar from "./Navbar.vue";
export default {
  name: "mainView",
  components: {
    Navbar,
  },
  data() {
    return {
      gameOver: null,
      hoursLeft: null,
      account: null,
      currentRoute: null,
      expiredDate: null,
      winningToken: 0,
    };
  },
  mounted() {
    if (!localStorage.getItem("connectedAccount")) {
      router.push("/login");
    }
  },
  methods: {
    logout: function () {
      router.push("/login");
    },
  },
};
</script>
