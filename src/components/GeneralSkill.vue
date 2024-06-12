<template>
  <div class="generalskill">
    <h1>
      I've learned a lot of different things throughout my short journey in IT :
    </h1>
    <div v-for="(category, index) in json.data" :key="index">
      <div class="skill-Header">
        <h2>{{ index }}</h2>
        <q-separator />
      </div>
      <div class="skillsList">
        <span v-for="(language, index) in category" :key="index">
          <div class="skill">
            <img :src="language.img" />
            <p>{{ language.name }}</p>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import json with data
import json from '../assets/skills.json';

console.log(json);
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

div {
  background-color: #9FC2CC;
  color: white;
}

.skill-Header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  padding-top: 5%;
  margin: 0;
}

h2 {
  padding-top: 5%;
  font-size: 4em;
  text-align: center;
  font-weight: bold;
}

.q-separator {
  width: 75%;
  margin: 0;
  margin-bottom: 5%;
  background-color: white;
}

.skillsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill {
  padding: 2vw;
  text-align: center;
}

.skill p {
  font-size: 1.5em;
}
</style>
