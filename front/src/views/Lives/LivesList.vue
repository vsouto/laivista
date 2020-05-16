<template>
  <v-card class="mb-4">
    <v-data-table
      :headers="headers"
      :items="lives"
      :search="search"
      sort-by="eventDate"
      class="elevation-1 lives-data-table"
    >
      <!-- Headers -->
      <template v-slot:top>
        <v-toolbar dense>
          <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->

          <v-toolbar-title>Lives</v-toolbar-title>

          <v-spacer></v-spacer>

          <!--<v-btn
            v-if="!usingSearch"
            icon
            @click="toggleSearch"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>-->
          <div class="filter-box filter-search-text">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </div>

          <!--<div class="filter-box filter-beneficent">
            <v-checkbox v-model="searchBeneficent" class="filter-checkbox">
              <template v-slot:label>
                <div class="filter-box">
                  Beneficente
                </div>
              </template>
            </v-checkbox>
          </div>
          <v-switch
            v-model="searchBeneficent"
            label="Beneficent"
          >
          </v-switch>-->

        </v-toolbar>
      </template>

      <!-- Columns Data -->
      <template v-slot:item.eventDate="{ item }">
        <span>{{new Date(item.eventDate).toLocaleString()}}</span>
      </template>
      <template v-slot:item.artist="{ item }">
        <span>
          {{ item.artist }}
        </span>
      </template>
      <template v-slot:item.categories="{ item }">
        <span
          v-for="category in item.categories"
        >
          <category-chip :category="category"></category-chip>
        </span>
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

  import CategoryChip from "@/views/Categories/CategoryChip";

  export default {
    name: 'LivesList',
    components: {
      CategoryChip
    },
    data () {
      return {
        dialog: false,
        search: '',
        searchBeneficent: false,
        initiated: false
      }
    },
    computed: {
      lives: {
        // getter
        get: function () {

          const storedLives = this.$store.getters["live/getLives"]
          console.log('getting lives from ', storedLives); //eslint-disable-line

          if (storedLives) {
            this.initiated = true
            console.log('initiated now true'); //eslint-disable-line
          }

          return storedLives || []
        }
      },
      headers() {
        return [
          {
            text: 'Lives',
            align: 'start',
            sortable: true,
            value: 'title',
          },
          { text: 'Artista', value: 'artist' },
          { text: 'Categoria',
            sortable: true,
            value: 'categories'
          },
          { text: 'Beneficent',
            value: 'beneficent',
            align: 'center',
            filterable: false,
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
      },
      isFilterFilterable() {
        return this.initiated
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      lives(val) {
        console.log('lives is ', val); //eslint-disable-line
      }
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
      submit () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      /*
      toggleSearch() {
        this.usingSearch = !this.usingSearch
      }*/
    },
  };
</script>

<style>
  .lives-data-table{

  }

  .filter-box{
    min-width: 10%;
  }

  .filter-search-text{
    width: 30%;
  }

  .filter-beneficent{
    margin-top: 2%;
    margin-left: 1%;
    margin-right: 1%;
  }

  .filter-checkbox label{
    padding: 4px;
    padding-top: 8px;
  }
</style>
