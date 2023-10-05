<template>
  <div class="dropdown">
    <button class="btn select-option" @click="showMenu">
      <span class="inner-text">{{ link }}</span>
      <span class="down-arrow"><i class="fas fa-arrow-down"></i></span>
    </button>
    <div
      class="dropdown-menu w-100"
      :class="showDropDownMenu ? 'show' : ''"
      aria-labelledby="dropdownMenuButton"
    >
      <a class="dropdown-item" href="#" @click.prevent="setRpc('pink.gg')">pink.gg</a>
      <a class="dropdown-item" href="#" @click.prevent="setRpc('greymass')">Greymass</a>
      <a class="dropdown-item" href="#" @click.prevent="setRpc('EOS Rio')">EOS Rio</a>
      <a class="dropdown-item" href="#" @click.prevent="setRpc('eosdacserver')"
        >Eosdac Server</a
      >
      <a class="dropdown-item" href="#" @click.prevent="setRpc('eosriobrazil')"
        >Eosrio Brazil</a
      >
      <a class="dropdown-item" href="#" @click.prevent="setRpc('nation.wax')"
        >Nation.wax</a
      >
      <a class="dropdown-item" href="#" @click.prevent="setRpc('GreenEOSIO')"
        >Green EOSIO</a
      >
      <a class="dropdown-item" href="#" @click.prevent="setRpc('test')">Test</a>
    </div>
  </div>
</template>

<script>
export default {
  nam: "RpcServe",
  data() {
    return {
      showDropDownMenu: false,
      link: "Please select RPC Server",
    };
  },
  mounted() {
    this.setRpc("pink.gg");
    this.showDropDownMenu = !this.showDropDownMenu;
  },
  methods: {
    showMenu() {
      this.showDropDownMenu = !this.showDropDownMenu;
    },
    setRpc(producers) {
      localStorage.setItem("rpc", producers);
      this.link = producers;
      this.showDropDownMenu = !this.showDropDownMenu;
    },
  },
};
</script>

<style scoped>
.btn:hover {
  color: #fff;
}
.dropdown-menu a:hover {
  color: rgba(57, 51, 51, 0.4);
  background: transparent !important;
  border-color: #fff !important;
  transition: color 0.4s linear;
}

.select-option {
  border: 2px solid white !important;
  color: #fff;
  padding: 0;
  background: rgba(40, 37, 37, 0.4);
  border-radius: 20px !important;
  font-size: 0.9rem !important;
}
.inner-text {
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: bold;
  width: 265px !important;
  display: inline-block;
}
.down-arrow {
  display: inline-block;
  border-left: 1px solid #fff;
  padding: 14px 10px;
}
</style>
