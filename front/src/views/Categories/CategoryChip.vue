<template>
  <button
    class="mb-2 mr-2 mt-2 btn"
    :class="getClass"
  >
    {{ getName() }}
    <!--<span class="badge badge-pill badge-light">6</span>-->
  </button>
</template>

<script>

  export default {
    name: 'CategoryChip',
    props: {
      category: {
        type: String,
        required: true
      }
    },
    methods: {
      getName() {
        return this.category
      },
      getInitial() {
        return "R"
      },
      isCategory(categoryName) {
        return this.getName() === categoryName
      }
    },
    computed: {
      getClass() {
        return {
          "btn-info" : this.isCategory('rock'),
          "btn-primary" : this.isCategory('mpb'),
          "btn-secondary" : this.isCategory('sertanejo'),
          "btn-success" : this.isCategory(''),
          "btn-warning" : this.isCategory(''),
          "btn-danger" : this.isCategory(''),
          "btn-focus" : this.isCategory(''),
          "btn-alternate" : this.isCategory('games'),
          "btn-light" : this.isCategory('fitness'),
          "btn-dark" : this.isCategory(''),
        }
      }
    }
  };
</script>
