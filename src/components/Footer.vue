<template>
    <footer class="bg-dark text-white pt-5 py-3">
        <div class="px-5">
            <ul class="navlist">
                <li><a href="" class="navlink">¿Quiénes somos?</a></li>
                <li><a href="" class="navlink">Trabaja con nosotros</a></li>
                <li><a href="" class="navlink">Política de privacidad</a></li>
                <li><a href="" class="navlink">Mapa del sitio</a></li>
            </ul>
            <div class="mb-2 d-flex justify-content-between">
                <p class="font-weight-bold"><span class="plus">+</span>Cursos</p>
                <span>© 2020 +Cursos, Inc. </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    width: 100vw;
}

.plus {
    color: red;
}

p {
    font-size: 1.5rem;
}

.navlist {
    list-style: none;
}

.navlink {
    color: white;
    text-decoration: none;
}

.navlink:hover {
    color: rgb(169, 245, 250);
}
</style>