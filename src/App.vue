<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  background-color: color(background);
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
}

button, input {
  border: none;
}

.capitalize {
  text-transform: capitalize;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
	margin: 0px;
  width: 100%;
}

p {
  margin: 0;
}

h1 {
  margin: 0;
}

.button-star {
  background-color: color(white-secondary);
  border-radius: 50%;
  padding: 9px;
}
</style>
