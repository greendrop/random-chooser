<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">選択対象</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn @click="deleteAllChoices">全削除</v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-card-text>
      <choice-list-item
        v-for="choice in choices"
        :key="choice.key"
        :choice="choice"
        @deleteChoice="deleteChoiceHandler"
      />
      <v-divider v-if="choices.length > 0" />
      <add-choice-form @addChoice="addChoiceHandler" />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ChoiceListItem from '~/components/molecules/ChoiceListItem.vue'
import AddChoiceForm from '~/components/molecules/AddChoiceForm.vue'
import Choice from '~/models/Choice'

@Component({
  components: { ChoiceListItem, AddChoiceForm },
})
export default class ChoiceList extends Vue {
  @Prop({ type: Array, required: true })
  choices!: typeof Choice[]

  deleteAllChoices() {
    this.$emit('deleteAllChoices')
  }

  addChoiceHandler(payload: { [key: string]: any }) {
    this.$emit('addChoice', payload)
  }

  deleteChoiceHandler(payload: { [key: string]: any }) {
    this.$emit('deleteChoice', payload)
  }
}
</script>
