<template>
  <div id="menu">
    <span id="title" ref="slot">
      <slot/>
    </span>
    <div id="aesthetics">
      <div class="bar" id="one" style="--offset: 20%"></div>
      <div class="bar" id="two" style="--offset: 40%"></div>
      <div class="bar" id="three" style="--offset: 75%"></div>
    </div>
    <div class="links">
      <router-link to="/" class="link">home.</router-link>
      <router-link to="/about" class="link">about.</router-link>
      <router-link to="/contact" class="link">contact.</router-link>
    </div>
    <div id="media">
      <span id="dk" style="--color: #0db7ed"><a href="https://hub.docker.com">dk</a></span>
      <span id="gh" style="--color: #333"><a href="https://www.github.com">gh</a></span>
      <span id="bb" style="--color: #2684ff"><a href="https://www.bitbucket.org">bb</a></span>
      <span id="yt" style="--color: #c4302b"><a href="https://www.youtube.com">yt</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  methods: {
    begin () {
      this.$parent.title = this.$refs.slot.innerText

      const animation = {
        opacity: [0, 1],
        translateX: ['-48px', '0']
      }

      this.anime({
        targets: '#title',
        delay: 100,
        ...animation,
        ...this.animparam
      })

      this.anime({
        targets: '.link',
        delay: this.anime.stagger(150),
        ...animation,
        ...this.animparam
      })

      this.anime({
        targets: '#media span',
        delay: this.anime.stagger(100),
        ...animation,
        ...this.animparam
      })

      this.anime({
        targets: '.bar',
        delay: this.anime.stagger(150),
        height: ['0', '100%'],
        easing: 'easeInOutCubic',
        duration: 1000
      })
    },
    leave () {
      const animation = {
        opacity: [1, 0],
        translateX: ['0', '48px']
      }

      this.anime({
        targets: '.media span',
        delay: this.anime.stagger(100),
        ...animation,
        ...this.animparam
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  #menu
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    position: fixed

  #title
    width: 16vw
    height: 10vh
    position: absolute
    left: 0
    top: 0
    font-size: 3vw
    opacity: 0
    font-weight: bolder
    letter-spacing: 12px
    color: #222
    display: grid
    place-items: center
    transform: translateX(-48px)

  .links
    right: 10vw
    position: absolute
    top: 0
    width: 40vw
    height: 10vh
    display: flex

  .link
    width: 100%
    font-size: 18px
    margin: 0 12px
    font-weight: bolder
    opacity: 0
    display: grid
    place-items: center
    text-decoration: none
    position: relative
    color: #222

    &::after
      content: ''
      transition: 0.5s cubic-bezier(0, 0.85, 0.5, 1)
      position: absolute
      bottom: 0
      left: 50%
      transform: translateX(-50%)
      width: 0
      height: 5px
      background: #222

  .router-link-active::after
    content: ''
    width: 100%

  #media
    bottom: 0
    right: 10vw
    position: absolute
    display: inline-flex
    justify-content: space-between
    align-items: center
    width: 20%
    height: 10%

    span
      opacity: 0

      a
        font-size: 18px
        font-weight: bolder
        text-decoration: none
        color: #222

      &::after
        display: inline-block
        content: ''
        border-radius: 100%
        position: relative
        left: 2px
        width: 4px
        height: 4px
        background: var(--color)

  #aesthetics
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0

    .bar
      height: 0
      width: 1px
      position: absolute
      top: 0
      left: var(--offset)
      background: #888
</style>
