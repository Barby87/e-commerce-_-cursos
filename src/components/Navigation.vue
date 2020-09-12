<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 ">
        <div class="container">
            <!-- Logo que redirige a 'Home' -->
            <router-link class="navbar-brand font-weigth-bold" to='/'><b><span class="plus">+</span>Cursos</b></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                   <li>
                       <!-- Búsqueda curso -->
                       <!-- <form class="form-inline my-2 my-lg-0">
                        <input class="form-control input-group mr-sm-2" type="search" placeholder="Búsqueda" aria-label="Search" v-model="searching">
                       </form> -->
                   </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold" to='/favorites'>Favoritos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link font-weight-bold" to='/cart'><font-awesome-icon class="icon" :icon="[ 'fas', 'cart-plus' ]"/> <span>(0)</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'Navigation',

    computed: {
        // bringFav() {
        //     return this.$store.getters.sendingFavorites.length;
        // }
    }
}
</script>

<style>
.plus {
    color: red;
}
</style>