<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="choice.name"></v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn>削除</v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Choice from '~/models/Choice'

@Component
export default class ChoiceListItem extends Vue {
  @Prop({ type: Object, required: true })
  choice!: Choice
}
</script>
