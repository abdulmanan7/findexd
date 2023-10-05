<template>
  <!-- <div class="overlay"></div> -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <div>
        <component :is="slotProps.Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dropdownItem: [
        {
          title: "Logout",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style>
.overlay {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* opacity: 0; */
  z-index: -1;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 6px !important;
}
.ual-modal-content-description {
  display: none;
}
.ual-open-learnMoreButton,
.ual-close-learnMoreButton {
  display: none !important;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
