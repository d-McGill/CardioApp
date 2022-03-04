<template>
  <div class="information-wrapper innerCar">
    <div class="information-content"></div>
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <div>
        <router-link v-if="!post.IntroSection" :to="{name: post.link}">Go there now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    props: ['post']
  };
</script>
<style scoped>
.information-wrapper{
  padding: 30px 70px;
  /* background-color: lightgray; */
  margin: 5px 50px;
  border-radius: 15px;
}

h2 {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 24px;
}

p {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.7;
}

a {
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  padding-bottom: 4px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
