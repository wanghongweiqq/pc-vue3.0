export default {
  path: '/demo',
  component: () => import('@/layout/index'),
  icon: 'el-icon-document',
  meta: {
    title: 'Demo',
  },
  children: [
    {
      path: 'index',
      name: 'demoIndex',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        keepAlive: true,
        title: '测试页',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: '测试页',
          },
        ]
      },
    },
    {
      path: 'test01/detail',
      name: 'test01Detail',
      component: () => import('@/views/demo/about.vue'),
      meta: {
        title: '测试详情页',
        key: 'MENU_HAWK_DEMO',
        hidden: true,
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: '测试页',
            href: 'ui'
          },
          {
            name: '测试详情页'
          },
        ]
      }
    },
    {
      path: 'utils',
      name: 'utils',
      component: () => import('@/views/demo/utils.vue'),
      meta: {
        title: 'utils&mixins',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'Utils&Mixins&RegExp',
            href: 'utils'
          },
        ]
      }
    },
    {
      path: 'goods',
      name: 'goods',
      component: () => import('@/views/demo/goods.vue'),
      meta: {
        title: '新特性',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'goods',
          },
        ]
      }
    },
    {
      path: 'vuex',
      name: 'vuex',
      component: () => import('@/views/demo/vuex.vue'),
      meta: {
        title: 'vuex',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'vuex',
          },
        ]
      }
    },
    {
      path: 'css',
      name: 'css',
      component: () => import('@/views/demo/css.vue'),
      meta: {
        title: 'css',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'css',
          },
        ]
      }
    },
    {
      path: 'function',
      name: 'function',
      component: () => import('@/views/demo/function.vue'),
      meta: {
        title: 'function',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'function和原型',
          },
        ]
      }
    },
    {
      path: 'promise',
      name: 'promise',
      component: () => import('@/views/demo/promise.vue'),
      meta: {
        title: 'promise',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'promise',
          },
        ]
      }
    },
    {
      path: 'event-loop',
      name: 'event-loop',
      component: () => import('@/views/demo/event-loop.vue'),
      meta: {
        title: 'event-loop',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'event-loop',
          },
        ]
      }
    },
    {
      path: 'async-await',
      name: 'async-await',
      component: () => import('@/views/demo/async-await.vue'),
      meta: {
        title: 'async-await',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: 'async-await',
          },
        ]
      }
    },
    {
      path: '/novue/call.html',
      meta: {
        title: 'call',
        key: 'MENU_HAWK_DEMO',
        notvue: true

      }
    },
    {
      // path: '/novue/copy.html',
      path: 'copy',
      name: 'copy',
      component: () => import('@/views/demo/copy.vue'),
      meta: {
        title: 'copy',
        key: 'MENU_HAWK_DEMO',
        crumb: [
          {
            name: 'Demo',
          },
          {
            name: '深拷贝',
          },
        ]
      }
    },
    {
      path: 'https://jd.com',
      meta: {
        title: '老页面',
        key: 'MENU_HAWK_DEMO',
        notvue: true
      }
    }
  ]
}
