<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="choice.name"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Choice from '~/models/Choice'

@Component
export default class RandomResultChoiceListItem extends Vue {
  @Prop({ type: Object, required: true })
  choice!: Choice
}
</script>
