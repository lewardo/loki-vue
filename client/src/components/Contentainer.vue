<template>
  <div>
    <div id="content" data-active="false">
      <div id="othertitle"></div>
      <slot/>
    </div>
    <div id="enter">
      <div id="button" data-open="false" @click="toggle"></div>
    </div>
  </div>
</template>

<script>
import revealer from 'circular-revealer'

export default {
  name: 'content',
  methods: {
    begin () {
      const animation = {
        opacity: [0, 1],
        translateX: ['-65%', '-50%']
      }

      document.getElementById('othertitle').innerText = this.$parent.title

      this.anime({
        targets: '#enter',
        delay: 100,
        ...animation,
        ...this.animparam
      })

      this.revealer = revealer({
        revealElementSelector: '#content',
        options: {
          anchorSelector: '#button'
        }
      })
    },
    toggle () {
      if (!this.revealer.isRevealed()) {
        this.revealer.reveal()
        document.getElementById('button').setAttribute('data-open', 'true')
        document.addEventListener('keyup', this.handleEsc)
      } else {
        this.revealer.hide()
        document.getElementById('button').setAttribute('data-open', 'false')
        document.removeEventListener('keyup', this.handleEsc)
      }
    },
    handleEsc (key) {
      if (key.key === 'Escape') this.toggle()
    }
  },
  data () {
    return {
      revealer: null
    }
  }
}
</script>

<style lang="sass" scoped>
  #enter
    position: absolute
    width: 20vw
    height: 10vh
    bottom: 0
    left: 50%
    display: grid
    place-items: center
    opacity: 0
    transform: translateX(-65%)

  #button
    background: #222
    z-index: 10
    width: 12px
    height: 12px
    border-radius: 100%
    cursor: pointer
    transition: 0.25s

    &:hover
      width: 14px
      height: 14px

    &[data-open='true']
      background: #ede9e8
      animation: scale 0.25s linear

  #content
    width: 100vw
    height: 100vh
    position: absolute
    top: 0
    left: 0
    background: #222
    box-sizing: border-box
    padding: 25vh 25vw
    color: #ede9e8
    visibility: hidden
    clip-path: circle(var(--radius) at 50vw 95vh)

    &[data-active='true']
      visibility: visible

  #othertitle
    width: 16vw
    height: 10vh
    position: absolute
    left: 0
    top: 0
    font-size: 3vw
    font-weight: bolder
    z-index: 1000
    letter-spacing: 12px
    color: #ede9e8
    display: grid
    place-items: center
</style>
