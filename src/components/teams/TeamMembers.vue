<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
          v-for="member in members"
          :key="member.id"
          :name="member.fullName"
          :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t3">User team №3</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: 'Test',
      members: [],
    };
  },
  created() {
    this.getMembers(this.teamId)
  },
  methods: {
    getMembers(teamId) {
      const team = this.teams.find(t => t.id === teamId)
      this.teamName = team.name

      const newMembers = []

      team.members.forEach(m => {
        newMembers.push(this.users.find(u => u.id === m))
      })

      this.members = newMembers
    }
  },
  watch: {
    teamId(newTeamId) {
      this.getMembers(newTeamId)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>