<template>
  <div class="home">
    <!-- <Navbar /> -->
    <Search />
    <Categories />
    <MainCard />
    <AboutServise />
    <Footer />
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import Categories from '@/components/Catigories.vue'
import MainCard from '@/components/MainCards.vue'
import  AboutServise from '@/components/AboutServis.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components:{
    // Navbar,
    Search,
    MainCard,
    Categories,
    AboutServise,
    Footer
  }
}
</script>
