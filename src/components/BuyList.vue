<template>
  <div class="container">
      <div class="jumbotron text-center" v-if="buyArr.length == 0">
            <h1 class="display-4"><font-awesome-icon class="icon" :icon="[ 'fas', 'cart-plus' ]"/>!</h1>
            <p class="lead">Tu cesta está vacía</p>
            <hr class="my-4">
            <p>Revisa nuestro catálogo de cursos.</p>
            <router-link class="btn btn-primary btn-lg" to='/' role="button">Ver cursos</router-link>
        </div>

        <div v-else>
            <div class="row">
                <div class="col-lg-9">
                    <ul class="list-group" v-for="(item, index) in buyArr" :key="index">
                        <li class="list-group-item font-weight-bold">
                            <img :src="item.img" :alt="item.img" class="imgCourseList mr-3">
                            <span class="mr-2">{{item.nombreCurso}}</span>
                            <button type="button" class="btn btn-link" @click="deleteProduct(index)">Eliminar
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-header">
                            Total:
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">{{buyArr.length*10}} US$</h3>
                            <p>Elige método de pago:</p>
                            
                            <!-- Radio buttons métodos de pago -->
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                    <label class="form-check-label" for="exampleRadios1">
                                        Crédito
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                    <label class="form-check-label" for="exampleRadios2">
                                        Débito
                                    </label>
                                </div>
                            </div>
                            
                            <!-- Botones -->
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-danger mr-3" @click="restartCart">Vaciar carro</button>
                                <button class="btn btn-primary">Pagar</button>
                            </div>
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
    name: 'BuyList',

    computed: {
        buyArr() {
            return this.$store.getters.sendingBuy;
        }
    },

    methods: {
        deleteProduct(index) {
            this.$store.dispatch('deleteProductAction', index);
        },

        restartCart() {
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
                    this.$store.state.buyArr = [];
                    Swal.fire(
                        'Productos eliminados!',
                        'Su cesta se ha vaciado',
                        'success'
                    )
                }
            })
        }
    }
}
</script>

<style scoped>
.imgCourseList {
    height: 4em;
    width: 4em;
}

.btn-link {
    color: red;
    text-decoration: none;
}

</style>