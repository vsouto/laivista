<template>
  <v-card class="mb-4">
    <v-toolbar flat color="grey">
      <v-btn icon>
        <v-icon>mdi-alert-circle-outline</v-icon>
      </v-btn>

      <v-toolbar-title>Informações</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <div class="card-body">
      <div class="mb-3">
        <h4>Como Funciona?</h4>
        <div>
          <div class="text-xs-center">O Laivista é um site que quer ajudar tanto para facilitar a
            busca, quanto para ajudar a divulgar as lives.</div>
        </div>
      </div>
      <div class="mb-3">
        <h4>Quem divulga?</h4>
        <div>
          <div class="text-xs-center">Qualquer usuário registrado pode postar uma live
            <strong>gratuitamente</strong>.</div>
        </div>
      </div>
      <div class="mb-3">
        <h4>De onde tiram o dinheiro?</h4>
        <div>
          <div class="text-xs-center">Apesar de estar ajudando dezenas de pessoas e artistas com as
            divulgações das lives, nossa comunidade ainda não gera dinheiro suficiente para
            re-investirmos em nossas ferramentas. <br>
            Para isso, precisamos da ajuda de cada um de vocês,
            divulgando a comunidade, seguindo nossas redes sociais e ajudando a divulgar as lives.
          </div>
        </div>
      </div>
      <div class="mb-3">
        <h4>Redes Sociais</h4>
        <v-card
          class="d-flex flex-row mb-6"
          color="grey lighten-2"
          flat
          tile
        >
          <v-card
            class="ma-5 pa-5 social-network-button text-center"
          >
            <v-btn icon class="social-network-item">
              <v-icon>mdi-instagram</v-icon> Instagram
            </v-btn>
          </v-card>
          <v-card
            class="ma-5 pa-5 social-network-button text-center"
          >
            <v-btn icon class="social-network-item">
              <v-icon>mdi-instagram</v-icon> Instagram
            </v-btn>
          </v-card>
          <v-card
            class="pa-2 social-network-button text-center"
          >
            <v-btn icon class="social-network-item">
              <v-icon>mdi-instagram</v-icon> Instagram
            </v-btn>
          </v-card>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<script>

  export default {
    name: 'LivesInfo'
  };
</script>

<style>
  .social-network-buttons{
    float: left;
    position: relative;
  }
  .social-network-button{
    min-width: 12%;
    min-height: 80px;
    margin: 8px;
  }
  .social-network-item{
    top: 25%;
  }
</style>
