<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex" v-for="(item, index) in gettingCourses" :key="index"> 
        <div class="card mb-4" style="width: 18rem;">
          <img :src="item.img" class="card-img-top p-2 imgCourse" alt="item.name">
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-center py-3">{{item.nombreCurso}}</h5>
           <div class="d-flex align-items-end justify-content-around">
              <!-- Botón Agregar a favoritos-->
              <button type="button" class="btn btn-outline-danger">
                <font-awesome-icon class="icon" :icon="[ 'fas', 'heart' ]"/>
              </button>
             
              <!-- Botón Agregar al carrito -->
              <button type="button" class="btn btn-primary">Comprar</button>
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
  }
}
</script>

<style scoped>
.imgCourse {
  height: 10em;
}
</style>
