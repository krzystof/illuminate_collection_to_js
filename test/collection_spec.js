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
  // TODO it collects hashes as well
})

describe('a collection has illuminates API', function() {
  it('implements all', function() {
    collect().all().should.be.an('array')
    collect(['stuff']).all().length.should.equal(1)
  })
  it('implements count', function() {
    collect().count().should.equal(0)
    collect([1, 2]).count().should.equal(2)
  })
})
