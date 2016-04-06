'use strict';

describe('Service: Vaccination', function () {

  // load the service's module
  beforeEach(module('vaccRecApp'));

  // instantiate service
  var Vaccination;
  beforeEach(inject(function (_Vaccination_) {
    Vaccination = _Vaccination_;
  }));

  it('should do something', function () {
    expect(!!Vaccination).toBe(true);
  });

});
