<template>
  <footer class="d-none d-lg-block">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          data-target="#my-nav"
          data-toggle="collapse"
          aria-controls="my-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" class="collapse navbar-collapse ps-4">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                &copy; {{ new Date().getFullYear() }} | All Rights Reserved | Weedborn
                County
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><span class="me-1">|</span> Powered by Blockchain Solutions VAT:
                02679240065</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://codnocrats.com/"
                ><span class="me-1">|</span> Developed by Codnocrats
                <span class="ms-1">|</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/imprint">
                Imprint
                <span class="ms-1">|</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link ps-0" to="/copy-rights"
                >Copyright Policy</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/policy">Privacy Policy</router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://weedborn-county.gitbook.io/weedborn-county/"
                >Weedpaper</a
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/terms">Terms & Condition</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.navbar-brand {
  font-size: 13px;
}
.nav-link {
  font-size: 13px;
  font-weight: bold;
}
/* .nav-item {
  margin-left: 10px;
} */
footer {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
.navbar {
  margin: 0;
}
</style>
