<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">選択対象</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <choice-list-item
        v-for="choice in choices"
        :key="choice.key"
        :choice="choice"
      />
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ChoiceListItem from '~/components/molecules/ChoiceListItem.vue'
import Choice from '~/models/Choice'

@Component({
  components: { ChoiceListItem },
})
export default class ChoiceList extends Vue {
  @Prop({ type: Array, required: true })
  choices!: typeof Choice[]
}
</script>
