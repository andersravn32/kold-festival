<script>
export default {
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  watch: {
    $route(to, from) {
      useHead({
        titleTemplate: `Kold Festival - ${this.pageName}`
      });
    }
  }
};
</script>
<template>
<BaseNavbar />
  <main>
    <slot />
  </main>
  <BaseSocialTabs />
  <BaseCTA />
  <BaseCancelled />
  <BaseFooter />
</template>

<style>
body{
  @apply overflow-x-hidden ;
}
/* 640px smaller */
/* 640px smaller */
@media screen and (max-width: 31em) {
  html {
    font-size: 4.2vw;
  }
}
    @media screen and (max-width: 23em) {
      html {
        font-size: 5vw;
      }
    }
/* 640px bigger */
@media screen and (min-width: 31em) {
  html {
    font-size: 3vw;
  }
}
@media screen and (min-width: 40em) {
  html {
    font-size: 2.5vw;
  }
}
@media screen and (min-width: 50em) {
  html {
    font-size: 1.05em;
  }
}
    /* About 2nd img padding, hero img ani fix */
</style>