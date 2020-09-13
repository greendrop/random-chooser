import { v4 as uuidv4 } from 'uuid'
import Choice from '~/models/Choice'

export default class ChoiceGroup {
  key: string = ''
  name: string = ''
  choices: Choice[] = []

  constructor(init?: Partial<ChoiceGroup>) {
    this.key = uuidv4()
    if (init) {
      const attributes = ['key', 'name']
      for (const attribute of attributes) {
        // @ts-ignore
        if (init[attribute]) {
          // @ts-ignore
          this[attribute] = init[attribute]
        }
      }
      if (init.choices) {
        this.choices = init.choices.map((item) => new Choice(item))
      }
    }
  }
}
