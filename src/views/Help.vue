<template>
  <div>
    <HelpInfo :post="Welcome" />
    <HelpInfo :post="post" v-for="(post, index) in Sections" :key="index"/>
  </div>
</template>

<script>
  import HelpInfo from '../components/HelpInfo.vue';
  export default {
    components: {
      HelpInfo
    },
    data(){
      return {
        Welcome: {
          title: 'Help Page',
          description: 'Stuck on something?',
          IntroSection: true,
        },
        Sections: [
          {
            title: 'The Home page',
            description: 'What it does. (more detail on what it does)',
            link: 'Home'
          },
          {
            title: 'The Dashboard page',
            description: 'What it does. (more detail on what it does)',
            link: 'Dashboard'
          },
          {
            title: 'The Learning page',
            description: 'What it does. (more detail on what it does)',
            link: 'QuerySearch'
          },
          {
            title: 'The Profile page',
            description: 'What it does. (more detail on what it does)',
            link: 'Profile'
          },
        ]
      };
    }
  };
</script>