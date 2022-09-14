<script setup lang="ts">
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
</script>

<script lang="ts">
export default defineComponent({
  name: "EditColaborador",
  data() {
    return {
      colaboradorData: {},
      route: useRoute(),
      empresas: [],
    };
  },
  async mounted() {
    const { data } = await this.axios.get(
      `colaborador/${this.route.params.id}`
    );
    this.colaboradorData = data;

    const { data: dataEmpresas } = await this.axios.get("empresa");
    this.empresas = dataEmpresas;
  },
  methods: {
    async save() {
      const { status } = await this.axios.patch(
        `colaborador/${this.route.params.id}`,
        this.colaboradorData
      );

      if (status == 200) {
        this.$router.push({ name: "colaborador" });
      }
    },
  },
});
</script>

<template>
  <form>
    <div class="p-inputtext-sm">
      <InputText
        type="text"
        placeholder="Nome"
        v-model="colaboradorData.nome"
      />
    </div>

    <div class="p-inputtext-sm">
      <InputText
        type="email"
        placeholder="Email"
        v-model="colaboradorData.email"
      />
    </div>

    <div class="p-inputtext-sm">
      <Dropdown
        v-model="colaboradorData.empresa_id"
        :options="empresas"
        optionLabel="nome"
        optionValue="codigo"
        placeholder="Select a Empresa"
      />
    </div>

    <div class="p-inputtext-sm">
      <InputText type="text" placeholder="Cpf" v-model="colaboradorData.cpf" />
    </div>

    <div class="p-inputtext-sm">
      <InputText
        type="text"
        placeholder="Telefone"
        v-model="colaboradorData.telefone"
      />
    </div>

    <div class="p-inputtext-sm">
      <Textarea
        v-model="colaboradorData.endereco"
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
      >Salvar
    </Button>
  </form>
</template>

<style lang="scss" scoped></style>
