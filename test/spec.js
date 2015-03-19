describe('weatherApp homepage', function() {
  
  beforeEach(function() {
    browser.get('http://localhost:3000');
    //ptor = protractor.getInstance();
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Weather App');
  });

  it('should have an input form', function() {
    expect(browser.isElementPresent(by.id('inputForm'))).toBe(true);
  });
  

});
