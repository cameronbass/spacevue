<template>
  <div>
    <navigation></navigation>

    <router-view></router-view>
  </div>
</template>

<script>
  import About from "./components/About"
  import Listing from "./components/Listing"
  import Navigation from "./components/Navigation"

  export default {
    name: 'index',
    components: {
      Navigation
    },
    data () {
      return {
        msg: 'Viewing this from Vue'
      }
    }
  }
</script>
