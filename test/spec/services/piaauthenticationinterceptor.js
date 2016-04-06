'use strict';

describe('Service: piaAuthenticationInterceptor', function () {

  // load the service's module
  beforeEach(module('vaccRecApp'));

  // instantiate service
  var piaAuthenticationInterceptor;
  beforeEach(inject(function (_piaAuthenticationInterceptor_) {
    piaAuthenticationInterceptor = _piaAuthenticationInterceptor_;
  }));

  it('should do something', function () {
    expect(!!piaAuthenticationInterceptor).toBe(true);
  });

});
