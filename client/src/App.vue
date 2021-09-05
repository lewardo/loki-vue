<template>
  <div id="main">
    <!-- <div id="cursor"></div> -->

    <navigator ref="menu"> loki </navigator>

    <section id="preview">
      <router-view id="view" v-slot="{ Component }">
        <transition :name="transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>

    <content ref="content">
      <router-view id="stuff" name="content"></router-view>
    </content>
  </div>
</template>

<script>
import navigator from '@/components/Menu'
import content from '@/components/Contentainer'

export default {
  name: 'app',
  components: {
    navigator,
    content
  },
  data () {
    return {
      transition: 'nothing',
      title: undefined,
      firstload: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.menu.begin()
      this.$refs.content.begin()
    })
  },
  watch: {
    $route (to, from) {
      if (this.firstload) {
        this.firstload = false
        return
      }

      document.getElementById('view').style.animation = 'none'

      if (to.name === 'Home' || (to.name === 'About' && from.name === 'Contact')) this.transition = 'change-left'
      else this.transition = 'change-right'
    }
  }
}
</script>

<style lang="sass">
  @import '@/styling/transitions.sass'

  *
    margin: 0
    padding: 0
    user-select: none
    font-family: 'Roboto Mono'

  #main
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0

  #cursor
    width: 24px
    height: 24px
    border: 1px solid #222
    border-radius: 100%
    position: absolute
    z-index: 1000

  #preview
    width: 72vw
    height: 72vh
    position: fixed
    top: 14vh
    left: 14vw

  #view
    width: 100%
    height: 100%
    position: absolute
    top: 0
    display: grid
    place-items: center
    border-radius: 4px
    overflow: hidden
    transition: left 1.2s
    animation: grow-right 1.2s cubic-bezier(0, 0.85, 0.5, 1) forwards

  .container
    width: 70vw
    height: 70vh
    left: 1vw
    position: absolute
</style>
