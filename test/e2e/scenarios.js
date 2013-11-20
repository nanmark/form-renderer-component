'use strict';

describe('formRendererDirectiveApp', function() {
    
	beforeEach(function() {
		browser().navigateTo('/');
	});

	describe('Homepage', function() {
		it('should display the correct route', function() {
			expect(browser().location().path()).toBe('/');
		});
        
        it('should enable submit button if input modified', function() {
            
            expect(element('#firstName').count()).toBe(1);
            expect(element('button.save:disabled').count()).toBe(2);
            
            using('#firstName').input('localModel').enter('Bees');
                
            expect(using('#firstName').input('localModel').val()).toBe("Bees");     
            expect(element('button.save:disabled').count()).toBe(1);

		});
	});

});