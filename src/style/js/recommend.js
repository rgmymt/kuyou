import Vue from 'vue'

import {

  Swipe,

  SwipeItem

} from 'vant'

Vue.use(Swipe).use(SwipeItem)

export default {

  name: 'videoChild',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
}
