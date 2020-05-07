<template>
  <v-data-table
    :headers="headers"
    :items="lives"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      Sem lives de acordo com os critérios escolhidos
    </template>
  </v-data-table>
</template>


<script>

  export default {
    name: 'LivesList',
    components: {
    },
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Lives',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Artista', value: 'artist' },
        { text: 'Categoria', value: 'categories' },
        { text: 'Data', value: 'eventDate' },
        { text: 'Beneficent', value: 'beneficent' },
      ],
    }),
    mounted() {

    },
    computed: {
      lives() {
        return this.$store.getters["lives/getLives"] || []
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  };
</script>

