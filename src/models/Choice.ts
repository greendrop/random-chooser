import { v4 as uuidv4 } from 'uuid'

export default class Choice {
  key: string = ''
  name: string = ''

  constructor(init?: Partial<Choice>) {
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
    }
  }
}
