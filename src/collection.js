import _ from 'lodash'

export function collect(items = []) {
  return new Collection(items)
}

export class Collection {
  constructor(items = []) {
    this.items = items
  }
  all() {
    return this.items
  }
  count() {
    return this.items.length
  }
  map( callback) {
    return _.map(this.items, callback)
  }
}
