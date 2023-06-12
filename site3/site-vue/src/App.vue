
<template>
  <div>
    <HeaderCont attr="header__wrap bg-blue gmarket5"/>sdf
    <router-view/>
    <FooterCont attr="footer__wrap bg-blue gmarket5 section"/>
  </div>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'

export default ((await import('vue')).defineComponent({
  components: {
    HeaderCont,
    FooterCont
  }
}))
</script>

<style lang="scss">
@import"index.scss"
</style>
