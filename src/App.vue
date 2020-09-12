<template>
  <div>
    <Navigation class="pb-5"/>
    <router-view class="my-5 pt-5"/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
