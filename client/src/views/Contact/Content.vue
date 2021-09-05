<template>
  <transition name="fade-up">
    <section v-if="shown">
      <input type="email" id="mail" v-model="mail" autocomplete="off" title="your email here" required>
      <input @click.prevent="submit" type="button" id="submit" value="→">
    </section>
  </transition>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      shown: false,
      mail: '',
      emails: []
    }
  },
  mounted () {
    if (localStorage.getItem('emails')) {
      this.emails = JSON.parse(localStorage.getItem('emails'))
    }
  },
  watch: {
    emails: function () {
      localStorage.setItem('emails', JSON.stringify(this.emails))
      alert(this.emails)
    }
  },
  methods: {
    submit () {
      const mailex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/

      if (mailex.test(this.mail)) {
        this.emails = [...this.emails, this.mail]
      } else {
        alert('invalid email ):')
      }
    },
    reveal () {
      this.shown = true
    },
    hide () {
      this.shown = false
    }
  }
}
</script>

<style lang="sass" scoped>
  @import url('http://fonts.cdnfonts.com/css/menlo')

  *
    font-family: 'Menlo'
    color: #eee

  #mail
    background: #333
    border: 1px solid #eee
    padding: 1px 8px
    width: 20vw
    height: 5vh
    font-size: 1em
    margin-right: 10px
    border-radius: 4px
    outline: none

    &:invalid
      border: 1px solid #f00

  #submit
    background: #333
    border: 1px solid #eee
    padding: 1px 8px
    margin-left: 10px
    border-radius: 4px
    outline: none

    &:active
      background: deeppink
</style>
