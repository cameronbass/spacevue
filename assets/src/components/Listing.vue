<template>
  <div>
    <h1>{{ listingHeader }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'listing',
    data () {
      return {
        listingHeader: "Listing Header",
        msg: 'View the listing page with vue'
      }
    }
  }
</script>
