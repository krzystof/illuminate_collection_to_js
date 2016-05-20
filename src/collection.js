export function collect(items = []) {
  return new Collection(items)
}

export class Collection extends Array {
  constructor(items = []) {
    super(items)
  }
}
