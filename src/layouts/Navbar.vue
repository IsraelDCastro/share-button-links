<template>
  <div class="wrap-navbar">
    <nav class="navbar is-underline">
      <div class="logo">
        <router-link to="/">Share Button Links</router-link>
      </div>
      <ul class="menu">
        <li><router-link to="/" class="nav-link" active-class="is-active">Home</router-link></li>
        <li><router-link to="/buttons" class="nav-link" active-class="is-active">Buttons</router-link></li>
        <li><router-link to="/buttons-icons" class="nav-link" active-class="is-active">Icon Buttons</router-link></li>
        <li><router-link to="/button-group" class="nav-link" active-class="is-active">Button Group</router-link></li>
        <li><router-link to="/styles" class="nav-link" active-class="is-active">Styles</router-link></li>
        <li>
          <a class="text-xl menu-icon" href="https://github.com/IsraelDCastro/share-button-links" rel="nofollow noopener" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </li>
      </ul>
      <span class="burger-menu" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </nav>
  </div>
</template>

<script setup>
function openMenu() {
  document.querySelector(".menu").classList.toggle("is-opened");
  document.querySelector(".burger-menu").classList.toggle("is-active");
}
</script>
