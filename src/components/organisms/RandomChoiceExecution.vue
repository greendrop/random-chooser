<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">選択</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <random-choice-execution-form
        @execChoice="execChoiceHandler"
        @execSplitGroup="execSplitGroupHandler"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import RandomChoiceExecutionForm from '~/components/molecules/RandomChoiceExecutionForm.vue'
import RandomResult from '~/components/organisms/RandomResult.vue'
import Choice from '~/models/Choice'

@Component({
  components: { RandomResult, RandomChoiceExecutionForm },
})
export default class RandomChoiceExecution extends Vue {
  @Prop({ type: Array, required: true })
  choices!: typeof Choice[]

  execChoiceHandler(payload: { [key: string]: any }) {
    this.$emit('execChoice', payload)
  }

  execSplitGroupHandler(payload: { [key: string]: any }) {
    this.$emit('execSplitGroup', payload)
  }
}
</script>
