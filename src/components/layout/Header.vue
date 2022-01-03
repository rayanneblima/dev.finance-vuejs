<template>
  <header>
    <img src="../../assets/logo.png" alt="Logo - Dev.Finance$" />
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background: linear-gradient(90deg, var(--light-blue) 0%, var(--light-purple) 60%);
  padding: 2rem 0 8rem;
  text-align: center;
}

header img {
  margin-top: 2rem;
  width: 200px;
}
</style>
