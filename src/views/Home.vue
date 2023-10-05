<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-md-8">
        <section class="crypto-content-wrapper">
          <div class="top-bar">
            <div class="top-bar__search-bar">
              <span>
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
              <input type="text" placeholder="Search anything..." />
            </div>
            <div class="top-bar__filter-btn ms-2">
              <button>
                <span class="me-2">
                  <img src="/images/option.png" alt="" class="img-fluid" />
                </span>
                filter Order
              </button>
            </div>
          </div>

          <div class="table-wrapper table-responsive mt-4 pe-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <label for="myCheckbox01" class="checkbox">
                      <input
                        class="checkbox__input"
                        type="checkbox"
                        id="myCheckbox01"
                      />
                      <svg
                        class="checkbox__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                      >
                        <rect
                          width="18"
                          height="18"
                          x=".5"
                          y=".5"
                          fill="#0c3835"
                          stroke="#fff"
                          rx="3"
                        />
                        <path
                          class="tick"
                          stroke="#6EA340"
                          fill="none"
                          stroke-linecap="round"
                          stroke-width="2"
                          d="M3 10l5 5 8-8"
                        />
                      </svg>
                    </label>
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">30%d</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">24 H Volume</th>
                </tr>
              </thead>
              <tbody>
                <tr class="" v-for="i in 10" :key="i">
                  <td>
                    <div class="add-row-wrapper">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                      <!-- {{ i + 1 }} -->
                    </div>
                  </td>
                  <td scope="row">
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <img
                        src="/images/Bitcoin-3.svg"
                        alt=""
                        class="img-fluid"
                      />
                      <span>Bitcoin</span>
                    </div>
                    <!-- <span> </span> -->
                  </td>
                  <td>$39660.66</td>
                  <td class="text-warning-50">
                    <span>
                      <!-- <i class="fa fa-triangle up-vol" aria-hidden="true"></i> -->
                      <img src="/images/polygon.png" alt="" />
                    </span>
                    <span class="ms-1">2.5%</span>
                  </td>
                  <td>$757,571,445</td>
                  <td class="h-volume">
                    <p class="mb-0">$757,571,44,834</p>
                    <small>$757,571 BTC</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div class="col-md-4">
        <div class="nft-voucher-wrapper bg-dark-50">
          <h4 class="voucher-title">NFT vouchers</h4>
          <ul class="nft-voucher__list">
            <li class="d-flex align-items-center mb-4">
              <div class="nft-voucher__pic">
                <img src="/images/content-image-4.png" alt="" />
              </div>
              <div class="nft-voucher__title ms-3">
                <h5>Bored Ape Yacht Club NFT</h5>
                <p>3000 NFT LEFT. Coupon:CPR</p>
              </div>
              <div class="nft-voucher-add">
                <a href="#">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li class="d-flex align-items-center mb-3">
              <div class="nft-voucher__pic">
                <img src="/images/content-image-4.png" alt="" />
              </div>
              <div class="nft-voucher__title ms-3">
                <h5>Bored Ape Yacht Club NFT</h5>
                <p>3000 NFT LEFT. Coupon:CPR</p>
              </div>
              <div class="nft-voucher-add">
                <a href="#">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li class="d-flex align-items-center mb-4">
              <div class="nft-voucher__pic">
                <img src="/images/content-image-4.png" alt="" />
              </div>
              <div class="nft-voucher__title ms-3">
                <h5>Bored Ape Yacht Club NFT</h5>
                <p>3000 NFT LEFT. Coupon:CPR</p>
              </div>
              <div class="nft-voucher-add">
                <a href="#">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li class="d-flex align-items-center mb-4">
              <div class="nft-voucher__pic">
                <img src="/images/content-image-4.png" alt="" />
              </div>
              <div class="nft-voucher__title ms-3">
                <h5>Bored Ape Yacht Club NFT</h5>
                <p>3000 NFT LEFT. Coupon:CPR</p>
              </div>
              <div class="nft-voucher-add">
                <a href="#">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="selected-token-wrapper bg-dark-50 mt-3">
          <h4 class="title pb-3">Tokens You Selected</h4>
          <div class="row">
            <div class="col-md-6">
              <ul class="selected-token__list p-0 mt-3">
                <li class="d-flex">
                  <div class="bg-pink active-token me-2"></div>
                  <div class="selected-token__name">
                    <h5>Bitcoin</h5>
                    <span class="text-uppercase">BYC nft token</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="selected-token__list p-0 mt-3">
                <li class="d-flex">
                  <div class="bg-violet-blue active-token me-2"></div>
                  <div class="selected-token__name">
                    <h5>Monera</h5>
                    <span>200 vouchers</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="bottom-wrapper">
      <div class="row">
        <div class="col-md-8">
          <div class="bottom-content__list">
            <div class="fund-list">
              <span
                >Fund Name:
                <span class="ms-2">My First Index Fund.docs</span></span
              >
            </div>
            <div class="fund-list ms-md-3">
              <div class="credit-balance-list">
                <span>Credits Balance:</span>
                <span class="ms-2">1000</span>
              </div>
              <div class="amounts-invest-list">
                <span>Amounts to invest:</span>
                <span class="ms-2">1000</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="button-list w-100">
            <button class="bg-red cos-btn d-block">Save As Draft</button>
            <button class="bg-caribbean-green cos-btn">Create Fund</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// <a href="https://codnocrats.com">Codnocrats</a>
import router from "../router";
export default {
  name: "home",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    myFun: function () {
      router.push("/floor");
    },
  },
};
</script>

<style scoped>
.bg-caribbean-green {
  background: #00dbaa;
}
.bg-red {
  background: #db0000;
}
.table-wrapper .table tr {
  border-bottom: 1px solid #393c49;
}
.table th,
td {
  color: var(--whiteColor);
  text-align: center;
  font-family: var(--BarlowFont);
}
.table th {
  font-size: 17px;
  font-weight: 600;
  padding: 20px 0;
}

.table td {
  padding: 30px 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  vertical-align: middle;
}

.bottom-content__list {
  display: flex;
  align-items: self-start;
}
</style>
