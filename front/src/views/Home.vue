<template>
  <div class="home">
    <h2>Laivista</h2>
    <lives-list />
  </div>
</template>

<script>

import LivesList from "@/components/LivesList";
export default {
  name: 'Home',
  components: {
    LivesList
  },
};
</script>
