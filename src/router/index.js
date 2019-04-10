import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import Message from '@/pages/message/message.vue'
import User from '@/pages/user/user.vue'
import Test from '@/pages/test.vue'
import Activity from '@/pages/activity/activity.vue'

import Biaoqian from '@/pages/biaoqian.vue'
Vue.use(Router)

export default new Router({
  routes: [
		{
		path: '/home',
		component: Home
		},
		{
		path: '/biaoqian',
		component: Biaoqian
		},
   {
   	path: '/activity',
   	component: Activity
   },
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
		},
		
  ]
})
