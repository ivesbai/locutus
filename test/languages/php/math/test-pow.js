// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var pow = require('../../../../src/php/math/pow.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/pow.js (tested in test/languages/php/math/test-pow.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 3.8439091680779e+48
    var result = pow(8723321.4, 7)
    expect(result).to.deep.equal(expected)
    done()
  })
})