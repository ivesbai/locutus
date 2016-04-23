XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var rawurldecode = require('/Users/kvz/code/phpjs/src/php/url/rawurldecode.js')

describe('php.url.rawurldecode.js', function () {
  it('should pass example 1', function (done) {
    rawurldecode('Kevin+van+Zonneveld%21')
    var expected = 'Kevin+van+Zonneveld!'
    var result = rawurldecode('Kevin+van+Zonneveld%21')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    rawurldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F')
    var expected = 'http://kevin.vanzonneveld.net/'
    var result = rawurldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    rawurldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a')
    var expected = 'http://www.google.nl/search?q=Locutus&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
    var result = rawurldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3DLocutus%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a')
    expect(result).to.deep.equal(expected)
    done()
  })
})