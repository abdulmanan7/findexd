<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import router from "../router";
export default {
  name: "LoginLayout",
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
