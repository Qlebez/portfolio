<template>
  <div>
    <h1>Hi ! I'm Quentin</h1>
    <h4>
      I am a 20 year old french student at the IUT of Gradignan. I am currently
      in my third and last year of computer science degree.
    </h4>
    <h4>I'm also currently an apprentice with the company Watsoft</h4>
    <ArrowDown />
  </div>
</template>
<script setup lang="ts">
import ArrowDown from 'src/components/general/ArrowDown.vue';
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #183642;
  color: white;
}

h1 {
  font-size: 5em;
  margin-bottom: 1rem;
  font-weight: bold;
}

h4 {
  font-size: 2em;
  margin-bottom: 1rem;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
