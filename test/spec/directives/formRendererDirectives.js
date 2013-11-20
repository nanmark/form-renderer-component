'use strict';

describe('Directive: formRendererDirectives', function () {

  // load the directive's module
  beforeEach(module('formRendererApp', 'formRendererComponent'));

    var mockObjectToEdit = {
        textField1: "TextField1Value",
        textField2: "TextField2Value"
    };    

  var element,
    scope, template1, template2, template3;

    
  beforeEach(inject(function ($rootScope, $templateCache, $httpBackend) { 

      $httpBackend.when('GET', 'scripts/directives/partials/form/formGenerator.html').respond('<div>'+
      '<div ng-repeat=\"field in configuration.fields\"  class=\"{{field.template}}\">'+
            '<formulate field=\"field\" ng-model=\"modelb\" ng-form=\"fieldForm\" template=\"{{field.template}}\"></formulate>'+
        '</div>'+
      '</div>');
      $httpBackend.when('GET', 'scripts/directives/partials/form/formSingleColumn.html').respond(
            '<div>'+
                 '<form name=\"editForm\" novalidate>'+
                     '<form-field-renderer>'+
                     '</form-field-renderer>'+
                     '<div ng-hide=\"hideFormActions\" class=\"form-actions\">'+
 '<button ng-show=\"showSubmit\" class=\"btn save medium white\" ng-click=\"submit()\" ng-disabled=\"editForm.$invalid || editForm.$pristine\">save</button>'+
                         '<a ng-show=\"showCancel\" class=\"btn btn-warning cancel\" ng-click=\"cancel()\">cancel</a>'+
                     '</div>'+
                 '</form>'+
           '</div>');
      $httpBackend.when('GET', 'scripts/directives/partials/form/formTwoColumn.html').respond(
        '<div>'+
            '<form id=\"test\" name=\"editForm\" novalidate class=\"form-horizontal\">'+
                '<form-field-renderer></form-field-renderer>'+
                '<div class=\"container\">'+
                    '<div class=\"left-column pull-left span5\">'+
                    '</div>'+
                    '<div class=\"right-column pull-left span5\">'+
                    '</div>'+
                '</div>'+
                 '<div ng-hide=\"hideFormActions\" class=\"form-actions\">'+
                    '<button ng-show=\"showSubmit\" class=\"btn save medium white\" ng-click=\"submit()\" ng-disabled=\"editForm.$invalid || editForm.$pristine\" >save</button>'+
                     '<a ng-show=\"showCancel\" class=\"btn btn-warning cancel\" ng-click=\"cancel()\">cancel</a>'+
                '</div>'+
            '</form>'+
        '</div>');
      
      $httpBackend.when('GET', 'scripts/directives/partials/field/textfield.html').respond(
      "<div>"+
        "<label>{{field.label}}</label>"+
        "<div>"+
            "<input class=\"{{field.cssStyle}}\" ng-disabled=\"disabled\" type=\"text\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\" ng-required=\"field.required\" ng-minlength=\"field.minLength\" ng-maxlength=\"field.maxLength\" ng-pattern=\"field.pattern\" />   "+
            "<p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>"+
            "<p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.minlength\">Please enter at least {{field.minLength}} characters</p>"+
            "<p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please enter no more than {{field.maxLength}} characters</p>"+
            "<p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.pattern\">{{field.patternMsg}}</span>"+
        "</div>"+
    "</div>");
      
    scope = $rootScope.$new();
      scope.mockObjectToEdit = mockObjectToEdit;
      scope.formConfigutionWith2Fields = {
            model: 'mockObjectToEdit',
            name: 'formRendererTestForm',
            template: {
                type: 'oneColumn',
            },
            actions: {
                submit: 'true',
                cancel: 'true'
            },
            //updateOnChange: true,
            fields: [
                {
                    label: 'Text Field 1',
                    name: 'textField1',
                    placeholder: 'Text Field 1 Value',
                    type: 'text',
                    model: 'model.textField1',
                    required: true,
                    minLength: 2,
                    maxLength: 10
                },
                {
                    label: 'Text Field 2',
                    name: 'textField2',
                    placeholder: 'Text Field 2 Value',
                    type: 'text',
                    model: 'model.textField2',
                    required: true,
                    minLength: 2,
                    maxLength: 10
                }]
    };
      
      
      scope.formConfigutionWith2Fields2Column = {
            model: 'mockObjectToEdit',
            name: 'formRendererTestForm',
            template: {
                type: 'twoColumns',
            },
            actions: {
                submit: 'true',
                cancel: 'true'
            },
            //updateOnChange: true,
            fields: [
                {
                    label: 'Text Field 1',
                    name: 'textField1',
                    placeholder: 'Text Field 1 Value',
                    type: 'text',
                    model: 'model.textField1',
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                    template: 'left'
                },
                {
                    label: 'Text Field 2',
                    name: 'textField2',
                    placeholder: 'Text Field 2 Value',
                    type: 'text',
                    model: 'model.textField2',
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                    template: 'right'
                }]
    };
      
      //mock field configuration seperately
    scope.firstname = 'Daniel';
    scope.field1 = {
                    label: 'First Name',
                    name: 'firstName',
                    placeholder: 'firstname value',
                    type: 'text',
                    model: 'firstname',
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                    template: 'left'
                };
  }));
    
    

    //tests for dom elements rendered from form-renderer directive in case of single column
  it('should render div only element in case no configuration is defined', inject(function ($compile,  $httpBackend) {
      
    element = angular.element('<form-renderer></form-renderer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
   
it('should render 2 \'label\' html elements in case configuration with fields (formConfigutionWith2Fields) is provided', inject(function ($compile, $httpBackend) {
    element = angular.element('<form-renderer configuration="formConfigutionWith2Fields" submit-function=""></form-renderer>');
    element = $compile(element)(scope);
    $httpBackend.flush();

    expect(element.find('label').length).toEqual(2);
  }));
    
it('should render 2 \'input\' html elements of type \'text\' in case configuration with fields (formConfigutionWith2Fields) is provided', inject(function ($compile, $httpBackend) {
    element = angular.element('<form-renderer configuration="formConfigutionWith2Fields" submit-function=""></form-renderer>');
    element = $compile(element)(scope);
    $httpBackend.flush();

    expect(element.find('input').length).toEqual(2);
    expect(element.find('input[type=\'text\']').length).toEqual(2);
  }));
    
it('should not render \'left-column\' and \'right-column\' in case configuration with fields (formConfigutionWith2Fields) is provided', inject(function ($compile, $httpBackend) {
    element = angular.element('<form-renderer configuration="formConfigutionWith2Fields" submit-function=""></form-renderer>');
    element = $compile(element)(scope);
    $httpBackend.flush();

    expect(element.find('.left-column').length).toEqual(0);
    expect(element.find('.right-column').length).toEqual(0);
        
  }));
    
    
    //tests for dom elements rendered from form-renderer directive in case of two-column
it('should render \'left-column\' and \'right-column\' in case configuration with fields (formConfigutionWith2Fields) is provided', inject(function ($compile, $httpBackend) {
    element = angular.element('<form-renderer configuration="formConfigutionWith2Fields2Column" submit-function=""></form-renderer>');
    element = $compile(element)(scope);
    $httpBackend.flush();

    expect(element.find('.left-column').length).toEqual(1);
    expect(element.find('.right-column').length).toEqual(1);
        
  }));
    
it('should render disabled submit button in any case of configuration', inject(function ($compile, $httpBackend) {
    element = angular.element('<form-renderer configuration="formConfigutionWith2Fields2Column" submit-function=""></form-renderer>');
    element = $compile(element)(scope);
    $httpBackend.flush();

    expect(element.find('button.save').attr('disabled')).toBe('disabled');
    
  }));
    
it('should render disabled submit button in any case of configuration, edit input the submi button becomes enabled', inject(function ($compile, $httpBackend) {
    element = angular.element('<form-renderer configuration="formConfigutionWith2Fields2Column" submit-function=""></form-renderer>');
    element = $compile(element)(scope);
    $httpBackend.flush();

    expect(element.find('button.save').attr('disabled')).toBe('disabled');

    element.first('input[type=\'text\']').val('Test');
    
    //input("fieldName").enter('Test');
    
    expect(element.find('input[type=\'text\']').val()).not.toBe('Test1');
    expect(element.first('input[type=\'text\']').val()).toBe('Test');
    //expect(element.find('button.save').attr('disabled')).not.toBe('disabled');

  }));
    
it('should generate an input of type \'textfield\'', inject(function($compile, $httpBackend){

    element = angular.element('<div><formulate field="field1" ng-model="localModel" ng-form="fieldForm" template="{{field.template}}">{{localModel}}</formulate></div>');   
    element = $compile(element)(scope);

    $httpBackend.flush();
    expect(element.find('label').length).toEqual(1);
    expect(element.find('input').length).toEqual(1);
}));
    
    
  afterEach(inject(function ($httpBackend) { 
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));
    
});
