<template>
  <div>
    <choice-list
      class="mb-4"
      :choices="choices"
      @addChoice="addChoiceHandler"
      @deleteChoice="deleteChoiceHandler"
      @deleteAllChoices="deleteAllChoicesHandler"
    />
    <random-choice-execution
      class="mb-4"
      :choices="choices"
      @execChoice="execChoiceHandler"
      @execSplitGroup="execSplitGroupHandler"
    />
    <random-result
      v-if="randomResults.length > 0"
      :random-results="randomResults"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ChoiceList from '@/components/organisms/ChoiceList.vue'
import Choice from '@/models/Choice'
import RandomChoiceExecution from '~/components/organisms/RandomChoiceExecution.vue'
import ChoiceGroup from '~/models/ChoiceGroup'

@Component({
  components: {
    ChoiceList,
    RandomChoiceExecution,
  },
})
export default class IndexPage extends Vue {
  choices: Choice[] = []
  randomResults: ChoiceGroup[] = []

  addChoiceHandler(payload: { [key: string]: any }) {
    const choice = payload.choice as Choice
    this.choices.push(choice)
  }

  deleteChoiceHandler(payload: { [key: string]: any }) {
    const choice = payload.choice as Choice
    const index = this.choices.findIndex((item) => item.key === choice.key)

    if (index >= 0) {
      this.choices.splice(index, 1)
    }
  }

  deleteAllChoicesHandler() {
    this.choices = []
  }

  execChoiceHandler(payload: { [key: string]: any }) {
    const choiceCount = parseInt(payload.choiceCount)
    const choices = this.shuffleChoice()

    this.randomResults = [
      new ChoiceGroup({
        name: '選択',
        choices: choices.slice(0, choiceCount),
      }),
    ]
  }

  execSplitGroupHandler(payload: { [key: string]: any }) {
    const splitGroupCount = parseInt(payload.splitGroupCount)
    const choices = this.shuffleChoice()
    const randomResults: ChoiceGroup[] = []

    for (let i = 0; i < splitGroupCount; i++) {
      randomResults.push(new ChoiceGroup({ name: `グループ${i + 1}` }))
    }

    let index = 0
    for (const choice of choices) {
      randomResults[index].choices.push(choice)
      index++
      if (index >= splitGroupCount) {
        index = 0
      }
    }
    this.randomResults = randomResults
  }

  shuffleChoice(): Choice[] {
    const choices = [...this.choices]
    for (let i = choices.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1))
      const temp = choices[i]
      choices[i] = choices[r]
      choices[r] = temp
    }
    return choices
  }
}
</script>
