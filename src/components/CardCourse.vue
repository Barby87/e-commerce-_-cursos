<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex" v-for="(item, index) in gettingCourses" :key="index"> 
        <div class="card mb-4" style="width: 18rem;">
          <img :src="item.img" class="card-img-top p-2 imgCourse" alt="item.name">
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-center py-3">{{item.nombreCurso}}</h5>
            <h6 class="text-center">{{item.duracion}} horas</h6>
           <div class="d-flex align-items-end justify-content-around mt-4">
              <!-- Botón Agregar a favoritos-->
              <button type="button" class="btn btn-outline-danger" @click="addFavorite(item)">
                <font-awesome-icon class="icon" :icon="[ 'fas', 'heart' ]"/>
              </button>
              <!-- Botón Agregar al carrito -->
              <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="`#modal-${item.codigo}`" @click="buyCourse(item)">Comprar</button>
           </div>
          </div>
        </div>

        <!-- Modal 'Producto agregado al carro' -->
        <div class="modal fade" :id="`modal-${item.codigo}`" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">{{item.nombreCurso}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                El producto fue agregado al carro satisfactoriamente
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Seguir comprando</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="goToCart">Ir al carro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCourse',

  computed: {
    gettingCourses() {
      return this.$store.getters.sendingCourses;
    }
  },

  methods: {
    addFavorite(item) {
      // Envío la info de favorito a store
      this.$store.dispatch('saveFavAction', item);
    },

    buyCourse(item) {
      // Envío la info de compra a store
      this.$store.dispatch('saveBuyAction', item);
    },

    goToCart() {
      // Redireccionando al carro
      this.$router.push('/cart');
    }
  }
}
</script>

<style scoped>
.imgCourse {
  height: 10em;
}
</style>
