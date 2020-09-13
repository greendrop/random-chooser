<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <random-result-choice-list-item
        v-for="choice in choices"
        :key="choice.key"
        :choice="choice"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RandomResultChoiceListItem from '~/components/molecules/RandomResultChoiceListItem.vue'
import Choice from '~/models/Choice'

@Component({
  components: { RandomResultChoiceListItem },
})
export default class RandomResultChoiceList extends Vue {
  @Prop({ type: String, required: true })
  name!: string

  @Prop({ type: Array, required: true })
  choices!: typeof Choice[]
}
</script>
