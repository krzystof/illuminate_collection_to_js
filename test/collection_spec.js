import chai from 'chai'
chai.should()

import { collect, Collection } from '../src/collection'

describe('instantiate a collection with collect', function() {
  it('collects nothing to an empty collection', function() {
    collect().should.be.an.instanceof(Collection)
  })
  it('collects an array to a collection', function() {
    collect([1, 2]).should.be.an.instanceof(Collection)
  })
})

describe('a collection behaves like an array', function() {
  // it('has a length', function() {
  //   collect([1, 2]).length.should.equal(2)

  // })
  it('can access items', function() {
    let aCollection = collect(['one', 'two'])
    aCollection[1].should.equal('two')
  })
})
// it has array access
// it has a length
