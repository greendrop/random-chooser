<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">選択結果</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <random-result-choice-list
        v-for="(randomResult, index) in randomResults"
        :key="index"
        class="mb-1"
        :name="randomResult.name"
        :choices="randomResult.choices"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RandomResultChoiceList from '~/components/organisms/RandomResultChoiceList.vue'
import ChoiceGroup from '~/models/ChoiceGroup'

@Component({
  components: { RandomResultChoiceList },
})
export default class RandomResult extends Vue {
  @Prop({ type: Array, required: true })
  randomResults!: typeof ChoiceGroup[]
}
</script>
