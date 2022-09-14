<script setup lang="ts">
import DataView from "primevue/dataview";
import Button from "primevue/button";

import { defineComponent } from "vue";
</script>

<script lang="ts">
export default defineComponent({
  name: "ListaEmpresa",
  data() {
    return {
      empresas: [],
      layout: "list",
    };
  },
  async mounted() {
    const { data } = await this.axios.get("/empresa");
    this.empresas = data;
  },
});
</script>

<template>
  <DataView :value="empresas" :layout="layout">
    <!-- <template #list="slotProps">
      <div>
        Vin: <b>{{ slotProps.data.nome }}</b>
      </div>
    </template>-->

    <template #list="slotProps">
      <div class="col-12">
        <div class="empresa-list-item">
          <div class="empresa-list-detail">
            <div class="empresa-name">{{ slotProps.data.nome }}</div>
          </div>
          <div class="empresa-list-action">
            <router-link
              :to="{
                name: 'empresa-editar',
                params: { id: slotProps.data.codigo },
              }"
              custom
              v-slot="{ navigate }"
            >
              <Button
                @click="navigate"
                @keypress.enter="navigate"
                role="link"
                icon="pi pi-pencil"
                label="Editar Empresa"
                >Editar
              </Button>
            </router-link>

            <router-link
              :to="{
                name: 'empresa-delete',
                params: { id: slotProps.data.codigo },
              }"
              custom
              v-slot="{ navigate }"
            >
              <Button
                @click="navigate"
                @keypress.enter="navigate"
                class="p-button-danger"
                role="link"
                icon="pi pi-pencil"
                label="Excluir Empresa"
                >Delete
              </Button>
            </router-link>
          </div>
        </div>
      </div>
    </template>

    <template #empty>No records found.</template>
  </DataView>
</template>

<style lang="scss" scoped>
::v-deep(.empresa-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .empresa-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 0.5rem 0;
  }

  .empresa-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }

  .empresa-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: 0.5rem;
  }
}
</style>
