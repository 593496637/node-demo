< !--普通加载路由 -->
< !-- import Profile from './Profile.vue' -- >

< !--路由懒加载 -->
const Profile= ()=> import('./Profile.vue')
export default {
  path: '/profile',
  name: 'Profile',
  component:Profile,
  children: [
  ]
}