import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/pages/message/message.vue'
import User from '@/pages/user/user.vue'
import Test from '@/pages/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/message',
      component: Message
    },
		{
			path: '/user',
			component: User
		},
		{
			path: '/test',
			component: Test
		}
  ]
})
