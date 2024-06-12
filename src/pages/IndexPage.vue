<template>
  <div>
    <PresentationComponent />
    <GeneralSkill />
    <ExperienceTimeline />
    <ProjectShowcase />
  </div>
</template>
<script setup lang="ts">
import PresentationComponent from 'src/components/PresentationComponent.vue';
import GeneralSkill from 'src/components/GeneralSkill.vue';
import ExperienceTimeline from 'src/components/ExperienceTimeline.vue';
import ProjectShowcase from 'src/components/ProjectShowcase.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* #331832 */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
