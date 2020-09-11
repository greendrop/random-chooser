<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <drawer-content />
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DrawerContent from '~/components/organisms/DrawerContent.vue'

@Component
export default class DefaultLayout extends Vue {
  clipped: boolean = true
  drawer: boolean | null = null
  fixed: boolean = false
  miniVariant: boolean = false
  title: string = 'ランダム選択'
}
</script>
