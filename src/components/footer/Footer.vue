<template>
  <div>
    <h2>{{ nameFooter }} footer</h2>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      nameFooter: ''
    }
  },
  mounted() {
    this.updateName()
  },
  methods: {
    updateName() {
      this.nameFooter = this.$route.path.split('/')[1].toUpperCase()
    }
  },
  watch: {
    $route() {
      this.updateName()
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>