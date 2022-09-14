<script setup lang="ts">
import Button from "primevue/button";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
</script>

<script lang="ts">
export default defineComponent({
  name: "DeleteColaborador",
  data() {
    return {
      dataColaborador: {},
      route: useRoute(),
    };
  },
  async mounted() {
    const { data } = await this.axios.get(
      `colaborador/${this.route.params.id}`
    );
    this.dataColaborador = data;
  },
  methods: {
    async remove() {
      const { status } = await this.axios.delete(
        `colaborador/${this.route.params.id}`
      );

      if (status == 200) {
        this.$router.push({ name: "colaborador" });
      }
    },
    cancel() {
      this.$router.push({ name: "colaborador" });
    },
  },
});
</script>

<template>
  <h2>Teseja remover a colaborador "{{ dataColaborador.nome }}" ?</h2>

  <Button
    @click="remove"
    @keypress.enter="remove"
    role="link"
    icon="pi pi-pencil"
    label="Excluir"
    class="p-button-danger"
    >Excluir
  </Button>

  <Button
    @click="cancel"
    @keypress.enter="cancel"
    role="link"
    icon="pi pi-pencil"
    label="Cancelar"
    >Cancelar
  </Button>
</template>

<style lang="scss" scoped></style>
