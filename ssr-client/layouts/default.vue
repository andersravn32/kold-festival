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
/* 640px smaller */
@media only screen and (max-width: 40em) {
  html {
    font-size: 4.5vw;
  }
}
/* 640px bigger */
@media screen and (min-width: 40em) {
  html {
    font-size: 2.4vw;
  }
}

@media screen and (min-width: 50em) {
  html {
    font-size: 1.9vw;
  }
}
@media screen and (min-width: 62em) {
  html {
    font-size: 1.05em;
  }
}
</style>