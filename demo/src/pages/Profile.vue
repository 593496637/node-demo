<template>
  <div class="profile">{{ message }}</div>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      message: 'profile'
    }
  },
  computed: {},
  created() {

  },
  mounted() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },

}
</script>

<style lang='scss' scoped>
.profile {
  background: #fff;
}
</style>