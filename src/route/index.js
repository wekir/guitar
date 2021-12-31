// import { createRouter,createWebHashHistory} from "vue-router";

import { createRouter,createWebHistory} from "vue-router";
const routerHistorys = createWebHistory()
 
  const router = createRouter({
    history: routerHistorys,
    routes: [
      {
        path: '/', 
        component: ()=>import ('../views/login.vue')
      },
      {
        path: '/login',
        component: ()=>import ('../views/login.vue')
      },
      {
        path: '/music',
        component: () =>import ('../views/index.vue'),
        children: [
          {
            path: '', 
              component: ()=>import ('../views/child/home.vue')
          },
            {
              path: 'home', 
              component: ()=>import ('../views/child/home.vue')
            },
            {
              path: 'score', 
              component: ()=>import('../views/child/score.vue')
            },
            {
              path: 'musicpage', 
              component: ()=>import('../views/child/music.vue')
            },
            {
              path: 'mine', 
              component: ()=>import('../views/child/mine.vue')
            },
        ]
      },
      // {
      //   path: '/home', 
      //   component: ()=>import('../views/home.vue')
      // },
      // {
      //   path: '/score', 
      //   component: ()=>import('../views/score.vue')
      // },
      // {
      //   path: '/music', 
      //   component: ()=>import('../views/music.vue')
      // },
      // {
      //   path: '/mine', 
      //   component: ()=>import('../views/mine.vue')
      // },
      {
        path: '/text', 
        component: ()=>import('../views/text.vue')
      }
    ]
  })
 
export default router