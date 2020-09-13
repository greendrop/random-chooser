<template>
  <!-- eslint-disable-next-line vue/no-unused-vars -->
  <validation-observer ref="observer" v-slot="{ validate, reset }">
    <form>
      <v-container>
        <v-row>
          <v-col>
            <validation-provider
              v-slot="{ errors }"
              name="名前"
              rules="required"
            >
              <v-text-field
                v-model="currentName"
                :error-messages="errors"
                label="名前"
                required
              />
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="mr-1" @click="addChoice">追加</v-btn>
            <v-btn @click="clearForm">クリア</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import Choice from '~/models/Choice'

@Component
export default class AddChoiceForm extends Vue {
  currentName: string = ''
  observer!: InstanceType<typeof ValidationObserver>

  mounted() {
    this.observer = this.$refs.observer as InstanceType<
      typeof ValidationObserver
    >
  }

  addChoice() {
    this.observer.validate().then((result) => {
      if (result) {
        const payload = { choice: new Choice({ name: this.currentName }) }
        this.$emit('addChoice', payload)
        this.clearForm()
      }
    })
  }

  clearForm() {
    this.currentName = ''
    this.observer.reset()
  }
}
</script>
