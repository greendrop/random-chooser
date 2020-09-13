<template>
  <!-- eslint-disable-next-line vue/no-unused-vars -->
  <validation-observer ref="observer" v-slot="{ validate, reset }">
    <form>
      <v-container>
        <v-row>
          <v-col>
            <v-radio-group v-model="choiceType" row>
              <v-radio label="選択" value="choice"></v-radio>
              <v-radio label="グループ分け" value="splitGroup"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row v-if="choiceType === 'choice'">
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="選択数"
              rules="required|numeric"
            >
              <v-text-field
                v-model="choiceCount"
                :error-messages="errors"
                label="選択数"
                required
              />
            </validation-provider>
          </v-col>
        </v-row>
        <v-row v-if="choiceType === 'splitGroup'">
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="グループ数"
              rules="required|numeric"
            >
              <v-text-field
                v-model="splitGroupCount"
                :error-messages="errors"
                label="グループ数"
                required
              />
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="submitChoice">選択</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'

@Component
export default class RandomChoiceExecutionForm extends Vue {
  choiceType: string = 'choice' // choice, splitGroup
  choiceCount: string = '1'
  splitGroupCount: string = '3'
  observer!: InstanceType<typeof ValidationObserver>

  mounted() {
    this.observer = this.$refs.observer as InstanceType<
      typeof ValidationObserver
    >
  }

  submitChoice() {
    this.observer.validate().then((result) => {
      let payload = null
      if (result) {
        switch (this.choiceType) {
          case 'choice':
            payload = { choiceCount: this.choiceCount }
            this.$emit('execChoice', payload)
            break
          case 'splitGroup':
            payload = { splitGroupCount: this.splitGroupCount }
            this.$emit('execSplitGroup', payload)
            break
        }
      }
    })
  }
}
</script>
