<template>
  <div class="container">
      <ul class="list-group" v-for="(item, index) in buyArr" :key="index">
        <li class="list-group-item font-weight-bold">
            {{item.nombreCurso}}
            <button type="button" class="btn btn-link" @click="deleteProduct(index)">Eliminar
            </button>
        </li>
    </ul>
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
                    this.$store.dispatch('deleteProductAction', index);
                    Swal.fire(
                        'Producto eliminado!',
                        'Tu producto ha sido eliminado de la lista de compras',
                        'success'
                    )
                }
            })
        }
    }
}
</script>

<style>
.btn-link {
    color: red;
    text-decoration: none;
}

</style>