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
            description: 'The home page presents you with information which may peak your interests, relating to cardiomyopathy. at the top right there is a button which allows you to switch to the dark theme/light theme to suit your personal preferance. in the center you have two butons one which is intended for returning users which is the login button and the other which is the register button. if you are a user who is logged in you may press the log out button on the navigation bar or at the center of the home page',
            link: 'Home' 
          }, 
          {
            title: 'The Dashboard page',
            description: 'The dashboard page has two main buttons the first being visualise data which allows you to create a bar chart, line chart, area chart, radar chart and scatter chart. information such as the gene data and the cardio data is inputted into the X and Y axis to create data for these graphs. Additionally you are able to submit your own data. ',
            link: 'Dashboard'
          },
          {
            title: 'The Learning page',
            description: 'The learning page teaches you about Cardiomyopathy, Hypertrophic Cardiomyopathy, Noncompaction Cardiomyopathy, restrictive Cardiomyopathy, Atrial Cardiomyopathy, Dilated Cardiomyopathy, Taotsubo Cardiomyopathy and right ventricular Cardiomyopathy. this comes in very detailed clinical synopsis. ',
            link: 'QuerySearch'
          },
          {
            title: 'The Profile page',
            description: 'The profile page allows you to view your own profile with details such as your Name, email, Address, phone number and insitute name as well as this you are additionally able to delete your profile details.',
            link: 'Profile'
          },
        ]
      };
    }
  };
</script>