<script setup lang="ts">
import Menubar from "primevue/menubar";
</script>
<script lang="ts">
export default {
  data() {
    return {
      menuItems: [
        {
          label: "Add",
          icon: "pi pi-fw pi-plus-circle",
          to: { name: "empresa-new" },
        },
        {
          label: "Lista",
          icon: "pi pi-fw pi-list",
          to: { name: "empresa" },
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <header>
      <Menubar :model="menuItems" />
    </header>

    <router-view></router-view>
  </main>
</template>
