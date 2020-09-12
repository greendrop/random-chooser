<template>
  <div>
    <choice-list
      :choices="choices"
      @addChoice="addChoiceHandler"
      @deleteChoice="deleteChoiceHandler"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ChoiceList from '@/components/organisms/ChoiceList.vue'
import Choice from '@/models/Choice'

@Component({
  components: {
    ChoiceList,
  },
})
export default class IndexPage extends Vue {
  choices: Choice[] = []

  addChoiceHandler(choice: Choice) {
    this.choices.push(choice)
  }

  deleteChoiceHandler(choice: Choice) {
    const index = this.choices.findIndex((item) => item.key === choice.key)

    if (index >= 0) {
      this.choices.splice(index, 1)
    }
  }
}
</script>
