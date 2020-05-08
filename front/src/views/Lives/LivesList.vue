<template>
  <v-card>
    <v-card-title>
      Lives
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="lives"
      :search="search"
      sort-by="eventDate"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-checkbox v-model="searchBeneficent">
          <template v-slot:label>
            <div>
              Beneficent?
            </div>
          </template>
        </v-checkbox>
        <!--<v-switch
          v-model="searchBeneficent"
          label="Beneficent"
        >
        </v-switch>-->
      </template>
      <template v-slot:item.eventDate="{ item }">
        <span>{{new Date(item.eventDate).toLocaleString()}}</span>
      </template>
      <template v-slot:item.beneficent="{ item }">
        <span>
          <i
            v-if="item.beneficent"
            class="pe-7s-diamond icon-gradient bg-tempting-azure"
          ></i>
        </span>
      </template>
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
  </v-card>
</template>

<script>

  export default {
    name: 'LivesList',
    components: {
    },
    data () {
      return {
        dialog: false,
        search: '',
        searchBeneficent: false
      }
    },
    computed: {
      lives() {
        return this.$store.getters["lives/getLives"] || []
      },
      headers() {
        return [
          {
            text: 'Lives',
            align: 'start',
            sortable: true,
            value: 'title',
          },
          { text: 'Artista', value: 'artist_id' },
          { text: 'Categoria',
            sortable: true,
            value: 'categories'
          },
          { text: 'Beneficent',
            value: 'beneficent',
            align: 'center',
            filter: value => {

              console.log('value is ', value); //eslint-disable-line
              console.log('this.searchBeneficent', this.searchBeneficent); //eslint-disable-line
              return value == this.searchBeneficent
            },
          },
          { text: 'Data',
            sortable: true,
            filterable: true,
            align: 'center',
            value: 'eventDate'
          },
        ]
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

