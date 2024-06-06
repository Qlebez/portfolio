<template>
  <div>
    <PresentationComponent />
    <GeneralSkill />
  </div>
</template>
<script setup lang="ts">
import PresentationComponent from 'src/components/PresentationComponent.vue';
import GeneralSkill from 'src/components/GeneralSkill.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
