<template>
  <section class="top">
    <div class="container">
      <div class="block-title">
        <h1 class="title">Nadezhda Trofimova</h1>
        <h2 class="subtitle">Frontend developer</h2>
      </div>
      <div class="technologies">
        <p class="technologies__title">Стек технологий:</p>
        <div class="technologies__row">
          <p class="technologies__name">Frontend</p>
          <div class="technologies__items">
            <p
                class="technologies__item"
                v-for="fr in frontendItems"
            >
              {{fr}}
            </p>
          </div>
        </div>
        <div class="technologies__row">
          <p class="technologies__name">Backend</p>
          <div class="technologies__items">
            <p
                class="technologies__item"
                v-for="bc in backendItems"
            >
              {{bc}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const frontendItemsStore = useFrontendItemsStore();
const backendItemsStore  = useBackendItemsStore();
const {frontendItems} = storeToRefs(frontendItemsStore);
const {backendItems} = storeToRefs(backendItemsStore);
</script>


<style scoped>

</style>