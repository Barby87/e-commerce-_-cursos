<template>
  <div>
    <CardCourse/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardCourse from '@/components/CardCourse.vue';
import { conectionApi } from '@/config/configApi';


export default {
  name: 'Home',
  components: {
    CardCourse
  },

  mounted() {
    conectionApi();
  }
}
</script>
