<template>
    <div class="container">
        <div class="jumbotron text-center" v-if="bringFavorites.length == 0">
            <h1 class="display-4"><font-awesome-icon class="icon" :icon="[ 'fas', 'heart' ]"/>!</h1>
            <p class="lead">Aún no tienes cursos favoritos</p>
            <hr class="my-4">
            <p>Sigue navegando en nuestro sitio para descubrir cursos de tu interés.</p>
            <router-link class="btn btn-primary btn-lg" to='/' role="button">Ver cursos</router-link>
        </div>

        <div class="row pt-3" v-else>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-between" v-for="(item, index) in bringFavorites" :key="index">
                <div class="card p-3" style="width: 18rem;">
                    <img :src="item.img" class="card-img-top imgFav" :alt="item.nombreCurso">
                    <div>
                        <div class="card-body">
                            <p class="card-text font-weight-bold text-center">{{item.nombreCurso}}</p>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-dark" @click="deleteFavorite(index)">
                                <font-awesome-icon class="icon" :icon="[ 'fas', 'trash' ]"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'CardFavorite',

    computed: {
        bringFavorites() {
            return this.$store.getters.sendingFavorites;
        }
    },

    methods: {
    deleteFavorite(index) {
      Swal.fire({
        title: '¿Desea eliminar?',
        text: "Esta acción no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.value) {
        this.$store.dispatch('deleteFavAction', index);
          Swal.fire(
            'Curso eliminado!',
            'Tu curso ha sido eliminado de favoritos.',
            'success'
          )
        }
      })
    }
  }
}
</script>

<style scoped>
.imgFav {
  height: 10em;
}
</style>