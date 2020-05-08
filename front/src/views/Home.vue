<template>
  <div class="home">
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-micro icon-gradient bg-tempting-azure"></i>
          </div>
          <div>
            Lista de Lives
            <div class="page-title-subheading">
              Você pode adicionar a sua live e divulgar em todas as plataformas
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <!-- Favorite button
          <button type="button" class="btn-shadow mr-3 btn btn-dark">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                 class="svg-inline&#45;&#45;fa fa-star fa-w-18">
              <path fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    class=""></path>
            </svg>
          </button>-->
          <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                 class="mr-2 svg-inline--fa fa-plus fa-w-14">
              <path fill="currentColor"
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    class=""></path>
            </svg>
            Criar nova
          </button>
        </div>
      </div>
    </div>
    <lives-list />
  </div>
</template>

<script>

import LivesList from "@/views/Lives/LivesList";

export default {
  name: 'Home',
  components: {
    LivesList
  }
};
</script>
