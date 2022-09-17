<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        {id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2']},
        {id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3']},
        {id: 't3', name: 'Client Consulting', members: ['u4', 'u5']},
      ],
      users: [
        {id: 'u1', fullName: 'Andrei Karalevich', role: 'Engineer'},
        {id: 'u2', fullName: 'Andrew Karalevich', role: 'Engineer'},
        {id: 'u3', fullName: 'Andrei Korolevich', role: 'Engineer'},
        {id: 'u4', fullName: 'Andrej Koralevich', role: 'Consultant'},
        {id: 'u5', fullName: 'Andrew Korolevich', role: 'Consultant'},
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  position: relative;
  min-height: 100vh;
}

body {
  margin: 0;
}

footer {
  position: fixed;
  bottom: 0;
  background-color: olive;
  width: 100%;
  height: 5rem;
}
</style>