<template>
  <div class="xp">
    <q-timeline layout="loose" color="secondary">
      <q-timeline-entry heading>2023</q-timeline-entry>

      <q-timeline-entry title="Alternance" subtitle="21 August, 2023" side="left">
        <div>
          Joined Watsoft as an apprentice FullStack Developer
          Maintain and develop new features for the company's website using C#, .NET Core,
          VueJS, Quasar and Microsoft SQL Server
        </div>  
      </q-timeline-entry>

      <q-timeline-entry title="Internship in Germany" subtitle="April - June 2023" side="right" icon="delete">
        <div>
          Joined a team of mechanical engineers to develop a webapp to help Premium Aerotec
          to manage their milling machines with real-time data and statistics using
          Laravel, PHP, ReactJS, Tailwind, MongoDB, Kafka, Docker.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>2021</q-timeline-entry>

      <q-timeline-entry title="IUT" subtitle="September 2021" side="left">
        <div>
          Joined the IUT of Gradignan in the Computed Science department, Also take
          part of the International option to improve my English skills. I learned
          the basics of computer science and web development.
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="BAC STI2D SIN" subtitle="2021" side="right">
        <div>
          Graduating from high school with a Baccalauréat STI2D SIN (Science and Technology for Industry and Sustainable
          Development) with honors.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.xp {
  // padding-top: 5%;
  background-color: #1B5299;
  color: white;
  // min-height: 100vh;
  // padding-bottom: 5%;
}

div {
  // font-size: 1.2em;
  // padding-bottom: 1rem;
  // text-align: center;
}

h1 {
  margin:0;
  padding: 0;
}
</style>
