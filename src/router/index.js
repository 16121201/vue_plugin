import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ImageDragTest from '@/components/imageDragTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/imageDragTest'
    },
    // 图片上传拖动框测试
    {
      path: '/imageDragTest',
      name: 'imageDragTest',
      component: ImageDragTest
    }
  ]
})
