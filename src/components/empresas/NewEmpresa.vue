<script setup lang="ts">
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
</script>

<script lang="ts">
export default defineComponent({
  name: "NewEmpresa",
  data() {
    return {
      empresaData: {},
      route: useRoute(),
    };
  },
  async mounted() {},
  methods: {
    async save() {
      const { status } = await this.axios.post(`empresa`, this.empresaData);

      if (status == 201) {
        this.$router.push({ name: "empresa" });
      }
    },
  },
});
</script>

<template>
  <form>
    <div class="p-inputtext-sm">
      <InputText type="text" placeholder="Nome" v-model="empresaData.nome" />
    </div>

    <div class="p-inputtext-sm">
      <InputText type="email" placeholder="Email" v-model="empresaData.email" />
    </div>

    <div class="p-inputtext-sm">
      <InputText type="text" placeholder="Cnpj" v-model="empresaData.cnpj" />
    </div>

    <div class="p-inputtext-sm">
      <InputText
        type="text"
        placeholder="Telefone"
        v-model="empresaData.telefone"
      />
    </div>

    <div class="p-inputtext-sm">
      <Textarea
        v-model="empresaData.endereco"
        placeholder="Endereco"
        rows="5"
        cols="30"
      />
    </div>
    <Button
      @click="save"
      @keypress.enter="save"
      role="link"
      icon="pi pi-pencil"
      label="Salvar"
      >Cadastrar
    </Button>
  </form>
</template>

<style lang="scss" scoped></style>
