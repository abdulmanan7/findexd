<template>
  <img
    class="card-img-top img-fluid nftImg"
    alt="nft image"
    v-show="isImageLoaded && !imageFailed"
    :src="getImgUrl(img)"
    @load="loaded"
    @error="replaceByDefault(index)"
  />
  <img
    v-if="!isImageLoaded && !imageFailed"
    class="loading w-100"
    :src="'/images/loader.gif'"
  />
  <img v-if="imageFailed" class="img-fluid" :src="getDefault()" />
</template>

<script>
import ApiService from "@/services";
export default {
  name: "ImgBlock",
  props: ["img", "local", "defaultLink"],
  data() {
    return {
      isImageLoaded: false,
      imageFailed: false,
    };
  },
  methods: {
    replaceByDefault() {
      this.imageFailed = true;
    },
    getDefault() {
      if (this.defaultLink) {
        return this.defaultLink;
      } else {
        return "/images/loader.gif";
      }
    },
    loaded() {
      this.isImageLoaded = true;
    },
    getImgUrl(imgHash) {
      if (!this.local) return ApiService.getImgUrl(imgHash);
      else return imgHash;
    },
  },
};
</script>
<style>
.nftImg{
  width: 95px !important;
}
</style>
