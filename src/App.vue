

<template>
  <div class="wrapper">
    <MainNav />
    <TheHero />
    <!-- <MainNav /> -->
  </div>
</template>


<script>
import MainNav from '@/components/navigation/MainNav.vue';
import TheHero from '@/components/job-search/TheHero.vue';

export default {
  name: 'App',
  components: {
    MainNav,
    TheHero,
  }
}
</script>


