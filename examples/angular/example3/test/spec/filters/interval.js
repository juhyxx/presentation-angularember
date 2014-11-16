'use strict';

describe('Filter: interval', function () {

  // load the filter's module
  beforeEach(module('timetrackerApp'));

  // initialize a new instance of the filter before each test
  var interval;
  beforeEach(inject(function ($filter) {
    interval = $filter('interval');
  }));

  it('should return the input prefixed with "interval filter:"', function () {
    var text = 'angularjs';
    expect(interval(text)).toBe('interval filter: ' + text);
  });

});
