import { createRouter, createWebHistory } from "vue-router";
import EmpresaView from "../views/EmpresaView.vue";
import ListEmpresa from "../components/empresas/ListEmpresa.vue";
import EditEmpresa from "../components/empresas/EditEmpresa.vue";
import NewEmpresa from "../components/empresas/NewEmpresa.vue";
import DeleteEmpresa from "../components/empresas/DeleteEmpresa.vue";

import ColaboradorView from "../views/ColaboradorView.vue"
import ListColaborador from "../components/colaboradores/ListColaborador.vue"
import EditColaborador from "../components/colaboradores/EditColaborador.vue";
import NewColaborador from "../components/colaboradores/NewColaborador.vue";
import DeleteColaborador from "../components/colaboradores/DeleteColaborador.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/empresas",
      component: EmpresaView,
      children: [
        {
          path: '',
          component: ListEmpresa,
          name: "empresa",
        },
        {
          path:'/:id/delete',
          component: DeleteEmpresa,
          name:'empresa-delete'
        },
        {
          path:'/:id/edit',
          component: EditEmpresa,
          name:'empresa-editar'
        },
        {
          path:'/new',
          component: NewEmpresa,
          name:'empresa-new'
        },
      ]
    },
    {
      path: "/colaboradores",
      component: ColaboradorView,
      children: [
        {
          path: '',
          component: ListColaborador,
          name: "colaborador",
        },
        {
          path:'/:id/delete',
          component: DeleteColaborador,
          name:'colaborador-delete'
        },
        {
          path:'/:id/edit',
          component: EditColaborador,
          name:'colaborador-editar'
        },
        {
          path:'/new',
          component: NewColaborador,
          name:'colaborador-new'
        },
      ]
    },
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
