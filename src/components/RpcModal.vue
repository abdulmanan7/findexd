<template>
  <div class="modal main_rpc_modal" :class="isShow ? 'show' : ''" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0 d-inline-block w-100 text-center">
          <h5 class="modal-title rpc_title"> Change RPC</h5>
          <a href="JavaScript:void(0)" class="btn-cross text-right close-modal" @click.prevent="hideModal()">&times;</a>
        </div>
        <div class="modal-body rpcbody">
          <div class="modal-bd">
            <RpcServer />
            <a href="JavaScript:void(0)" class="position-relative theme_btn btn_hover" @click.prevent="hideModal()">
              <img src="/images/buttons.png" alt="" class="btn_img">
              <h3 class="btn_title" data-v-41458b80="">Switch</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import RpcServer from "../components/RpcServer.vue";
export default {
  name: "RpcModal",
  components: {
    RpcServer,
  },
  props: ["isShow"],
  data() {
    return {
    };
  },
  methods: {
    setRpc(producers) {
      localStorage.setItem("rpc", producers);
      this.link = producers;
      this.showDropDownMenu = !this.showDropDownMenu;
    },
    hideModal(e) {
      this.$emit("hide-modal", e);
    },
  },
};
</script>

<style scoped>
.show {
  background-color: rgba(0, 0, 0, 0.6) !important;
  display: flex;
  justify-content: center;
}
.main_rpc_modal .modal-content{
    background: var(--primaryColor) !important;
    width: 500px;
    opacity: 0.9;
    border-radius: 46px !important;
    border: none !important;
    margin: auto;
    min-height: 300px;
}
.modal-bd{
  width: 305px;
    margin: 0 auto;
}
.close-modal {
  font-size: 42px !important;
  position: absolute;
  top: 0px;
  right: 20px;
  color: #ffffff;
  z-index: 1;
  line-height: 58px;
}
.rpcbody .dropdown{
  text-align: center;
}
.rpc_title{
  color: #ffffff;
}
.theme_btn{
  text-align: center;
  margin: 30px auto;
  display: block;
  width: 120px;
}
.theme_btn img{
  width: 120px;
  margin: 0 auto;
}
.theme_btn .btn_title{
  position: absolute;
  top: 12px;
  text-align: center;
  width: 100%;
  font-size: 20px;
  display: inline-block;
  left: 0;
}
</style>