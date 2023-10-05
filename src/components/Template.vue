<template>
<div class="col-md-6">
    <div class="small-text">
        <h6 class="grey-color">Collocation name</h6>
        <h2>{{collection_name}}</h2>
    </div>
    <div class="small-text">
        <h6 class="grey-color mb-0 pb-0">Schema name</h6>
        <h5 class="font-weight-bold light-red">{{schema_name}}</h5>
    </div>
    <div class="small-text">
        <h6 class="grey-color mb-0 pb-0">Template ID</h6>
        <h5 class="owner-name font-weight-bold light-red">
            #{{this.info.template.template_id}}
        </h5>
    </div>
    <div class="small-text">
        <h6 class="grey-color mb-0 pb-0">Property</h6>
        <div class="d-flex align-items-center" v-if="this.info.is_transferable">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <h5 class="text-white font-weight-bold">Transferable</h5>
        </div>
    </div>
    <div class="small-text" v-if="this.info.is_burnable">
        <div class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
            </svg>

            <h5 class="text-white font-weight-bold">Burnable</h5>
        </div>
    </div>
    <div class="bg-color rounded px-4 py-3 text-center" v-if="this.info.sales.length">
        <span class="font-weight-bold">Seller:</span>
        <span class="accountName">
            <img src="/images/wax.png" alt="" />
            <a href="javaScript:void(0)" class="light-red">{{this.info.sales.seller}}</a>
        </span>
        <div class="text-center">
            <span class="font-weight-bold text-capitalize">Trade offer ID:</span>
            <a href="javaScript:void(0)" class="light-red mx-3">#{{this.info.sales.offer_id}}</a>
        </div>
    </div>
    <div class="text-center mt-2" v-if="this.info.sales.length">
        <button class="btn btn-block btn-primary w-100">Buy</button>
        <a href="javaScript:void(0)" class="text-white font-weight-bold my-3">Make Offer</a>
    </div>
</div>
</template>

<script>
export default {
 name: "Template",
 props: ["schema_name", "collection_name"],
};
</script>

<style>
</style>
