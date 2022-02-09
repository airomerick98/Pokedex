<template>
  <div class="home">
     <loading
        v-if="loadingVisible"
        :visible="loadingVisible"
    />
    <section v-else>
       <div class="home-content-image">
        <img
        class="home-image-pikachu"
        src="../assets/images/pikachu-icon.svg"
        alt="pikachu">
      </div>
      <h1 class="home-title">Welcome to Pokédex</h1>
      <p class="home-subtitle">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <app-button
        class="home-button"
        @send-button="goToHome"
        text="Get Started"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import loading from '../components/loading.vue';

function created() {
   setTimeout(() => {
      	this.loadingVisible = false;
    }, 3000);
}

function goToHome() {
  this.goTo('pokemon-list');
}

function data() {
  return {
    loadingVisible: true,
  }
}

export default {
  name: 'Home',
  created,
  data,
  components: {
    HelloWorld,
    loading,
  },
  methods: {
    goToHome,
  },
}
</script>

<style lang="scss">
.home {
  @include content-center;
  background-color: color(background);
  min-height: 700px;
  padding: 83px 32px;

  &-content-image {
    background-image: url('../assets/images/circle-red.svg');
    background-size: cover;
    background-position: center;
    height: 206px;
    margin: 0 auto 60px auto;
    position: relative;
    width: 206px;
  } 

  &-image-pikachu {
    bottom: -11px;
    position: absolute;
    right: -70px;
  }

  &-title {
    font-size: 26px;
    text-align: center;
  }

  &-subtitle {
    font-size: 18px;
    margin-top: 30px;
    text-align: center;
  }

  &-button {
    @include content-center;
    margin-top: 50px;
  }
}
</style>