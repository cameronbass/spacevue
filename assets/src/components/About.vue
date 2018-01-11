<template>
  <div>
    <h1>{{ headerMessage }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        headerMessage: "About Header",
        msg: 'View the about page with Vue'
      }
    }
  }
</script>
