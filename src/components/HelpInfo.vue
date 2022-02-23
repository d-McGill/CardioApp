/* eslint-disable max-len */

<template>
  <div class="information-wrapper">
    <div class="information-content"></div>
    <div>
      <h2>{{ post.title }}</h2>
      <h2>{{ post.description }}</h2>
      <div>
        <router-link v-if="!post.IntroSection" :to="{name: post.link}">Go there now</router-link>
      </div>
    </div>
    <!-- <div class="bg-photo">
      <img :src="require('../../assets/imgs/' + post.photo + '.jpg').default">
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    props: ['post']
  };
</script>
