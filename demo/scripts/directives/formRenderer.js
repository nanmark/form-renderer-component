'use strict';

var formRendererComponent = angular.module('formRenderer', ['formRendererTemplates']);
formRendererComponent.directive('formFieldRenderer', function() {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/partials/form/formGenerator.html',
        replace: true,
        transclude: true,
        require: '?^form',
        link: function (scope, elem, attrs, formController) {
            scope.form = formController;
            scope.save = function () {
                scope.submitFunction();
            }; 
        }
    };
});
formRendererComponent.directive('formulate', ['$http', '$compile', '$parse', '$templateCache', function ($http, $compile, $parse,$templateCache) {
    /**
    *   renders a form field
    **/
    var getTemplateUrl = function (field) {
        var type = field.type;
        var templateUrl = '';
        switch (type) {
            case 'text': 
                templateUrl = 'scripts/directives/partials/field/textfield.html'
                break;
            case 'email':
                templateUrl = 'scripts/directives/partials/field/email.html';
                break;
            case 'url':
                templateUrl = 'scripts/directives/partials/field/url.html';
                break;
            case 'textarea':
                templateUrl = 'scripts/directives/partials/field/textarea.html';
                break;
            case 'checkbox':
                templateUrl = 'scripts/directives/partials/field/checkbox.html';
                break;
            case 'dropdown':
                templateUrl = 'scripts/directives/partials/field/dropdown.html';
                break;
            case 'hidden':
                templateUrl = 'scripts/directives/partials/field/hidden.html';
                break;
            case 'password':
                templateUrl = 'scripts/directives/partials/field/password.html';
                break;
            case 'radio':
                templateUrl = 'scripts/directives/partials/field/radio.html';
                break;
            case 'rte':
                templateUrl = 'scripts/directives/partials/field/rte.html';
                break;
            case 'date':
                templateUrl = 'scripts/directives/partials/field/date.html';
                break;
            default:
                templateUrl = 'scripts/directives/partials/field/textfield.html';
                break;
        }
        return templateUrl;
    };

    var linker = function (originalScope, element, attrs, ctrl) {
        
        var scope = originalScope.$new();
        
        // eval the field object to local scope
        scope.field = scope.$eval(attrs.field);
        
        // create the regular expression object for ng-pattern validation
        scope.field.pattern = new RegExp(scope.field.pattern);

        var type = scope.field.type;

        if (type === 'textarea') {
            if (!scope.field.rows)
                scope.field.rows = 5;
        }
        if (type === 'date') {
            if (!scope.field.datepickerOptions)
                scope.field.datepickerOptions = {
                    format: 'dd/mm/yyyy',
                    endDate: new Date()
                };
        }

        if (scope.field.pattern) {
            if (!scope.field.patternMsg) {
                scope.field.patternMsg = 'This field should contain only digits';
            }
        }
        
        if(scope.field.onChange){
            scope.onChange = $parse(scope.field.onChange);
        }

        // parse the model string and perform two way binding with parent scope
        scope.parentModel = $parse(scope.field.model);

        scope.disabled = $parse(scope.field.disabled)(originalScope) || false;
        scope.isvisible = $parse(scope.field.isvisible)(originalScope) || true;

        scope.$watch(function () {
            return $parse(scope.field.model)(originalScope);
        }, function (newVal) {
            scope.localModel = scope.parentModel(originalScope);
           
        });

        scope.$watch(function () {
            return $parse(scope.field.isvisible)(originalScope);
        }, function (newVal) {
            if (angular.isDefined(newVal)) {
                scope.isvisible = newVal;
            }

        });

        scope.$watch(function () {
            return $parse(scope.field.disabled)(originalScope);
        }, function (newVal) {
            if (angular.isDefined(newVal)) {
                scope.disabled = newVal;
            }
        });

        var initialValue = null;

        if (scope.parentModel) {
            
            // get the value of model and set it to a local property
            scope.localModel = scope.parentModel(originalScope);
            initialValue = scope.localModel;
            
            // watch for changes in local object
            if(angular.isDefined(scope.configuration)){
                if (scope.configuration.updateOnChange) {
                    scope.$watch('localModel', function () {
                        // assign changes to parent scope
                        if (typeof scope.parentModel.assign === 'function') scope.parentModel.assign(originalScope, scope.localModel);
                        if (angular.isDefined(scope.onChange)) scope.onChange();
                    });
                }
            }
        }

        // GET template content according to field type
        var templateUrl = getTemplateUrl(scope.field);
        $http.get(templateUrl, { cache: $templateCache }).success(function (data) {
            element.html(data);
            $compile(element.contents())(scope);
            
            if (scope.$last) {
                scope.$emit('form:ready');
            }
        });

        scope.$on('form:reset', function () {
            scope.localModel = initialValue;
            if (typeof scope.parentModel.assign === 'function') scope.parentModel.assign(originalScope, scope.localModel);

        });

        scope.$on('form:submit', function () {
            if (typeof scope.parentModel.assign === 'function') scope.parentModel.assign(originalScope, scope.localModel);
        });

        originalScope.$on('$destroy', function () {
            scope.$destroy();
        });        
        
    };

    return {
        template: '<div></div>',
        restrict: 'E',
        //link: linker,
        replace: true,
        require: 'ngModel',
        compile : function(){
            return {
                pre: linker,
                post: function(originalScope, element, attrs, ctrl){
                    var scope = originalScope.$new();
                    scope.field = scope.$eval(attrs.field);
                    var leftColumn = $('div.left-column');
                    var rightColumn = $('div.right-column');
                    
                    if(scope.field.template === 'right'){
                         rightColumn.append(element);
                    }                    
                    if(scope.field.template === 'left'){
                        leftColumn.append(element);
                    }                    
                }
            }
        }   
    };
}]);
formRendererComponent.directive('formRenderer', ['$http', '$compile', '$parse', '$templateCache', '$timeout', function ($http, $compile, $parse, $templateCache, $timeout) {
    return {
        restrict: "E",
        replace: true,
        template: '<div></div>',
        transclude: true,
        require: '?^form',
        scope: {
            configuration: '=',
            submitFunction: '&',
            templateConfiguration: '@'
        },              
       link: function(scope, element, attrs, formController) { 
            //in case configuration is not defined
            if(!scope.configuration)
                return;
            
            scope.reEval = function () {
                scope.model = scope.$parent.$eval(scope.configuration.model);
            };
            scope.reEval();
            scope.isReady = false;

            scope.$on('form:ready', function () {
                scope.isReady = true;
            });
            
            //TODO: this assignment maybe should be remove, scope.form is undefined
            scope.form = formController;
            
            var getTemplateUrl = function (form) {
                var template = form.template.type || 'oneColumn';
                var templateUrl = '';

                switch (template) {
                    case 'oneColumn':
                        templateUrl = 'scripts/directives/partials/form/formSingleColumn.html';
                        break;
                    case 'twoColumns':
                        templateUrl = 'scripts/directives/partials/form/formTwoColumn.html';
                        break;
                    default:
                        templateUrl = 'scripts/directives/partials/form/formSingleColumn.html';
                        break;
                }
                return templateUrl;
            };

            // GET template content from path
            var templateUrl = getTemplateUrl(scope.configuration);
            
            $http.get(templateUrl, { cache: $templateCache }).success(function (_data) {
                element.html(_data);
                $compile(element.contents())(scope);
            });          

            scope.close = function () {
                scope.closeMsg = 'I was closed at: ' + new Date();
                scope.shouldBeOpen = false;
                //scope.form.$setPristine();
                //scope.$broadcast('form:reset');
            };

            scope.cancel = function () {
                scope.close();
                scope.reset();
            };

            scope.reset = function () {
                scope.form.$setPristine();
                scope.$broadcast('form:reset');
            };

            scope.showSubmit = (scope.configuration.actions && scope.configuration.actions.submit) ? scope.configuration.actions.submit : true;
            scope.showCancel = (scope.configuration.actions && scope.configuration.actions.cancel) ? scope.configuration.actions.cancel : true;
            scope.showClose = (scope.configuration.actions && scope.configuration.actions.close) ? scope.configuration.actions.close : false;

            scope.hideFormActions = scope.configuration.hideFormActions ? scope.configuration.hideFormActions : false;                   
        },
        controller: FormRendererController
    };
}]);
  
//separation of controller for testing reasons
  var FormRendererController = function($scope, $element, $attrs, $transclude){
       $scope.isSubmitting = false;

            $scope.submit = function () {
                $scope.isSubmitting = true;
                $scope.$broadcast('form:submit');
                var q = $scope.submitFunction($scope.configuration.name);;
                if (q.success) {
                    q.success(function () {postSubmit(true) });
                } else if (q.then) {
                    q.then(function () { postSubmit(true); });
                } else {
                    q.error(postSubmit(false));
                    console.log('WARNING: submit() did not return a promise!! ChangeTracking state will not be updated');
                }
            };

            $scope.delete = function () {
                var q = $scope.deleteFunction();
                if (q.success) {
                    q.error();
                } else if (q.then) {
                    q.then();
                } else {
                    q.error();
                    console.log('WARNING: submit() did not return a promise!! ChangeTracking state will not be updated');
                }
            };

            $scope.$on('form:submitted', function() {
                postSubmit(true);
            });
  };
FormRendererController.$inject = ['$scope', '$element', '$attrs', '$transclude'];
//helper directive for setting custom tinyMCE options either by global constant 'RteOptions' either set by field configuration
formRendererComponent.directive('uiTinymce', ['RteOptions', function (RteOptions) {
    return {  
        require: 'ngModel',        
        compile : function(){
            return {
                pre: function(scope, element, attrs, ngModel){
                    var tinymceOptions = scope.$eval(attrs.tinymceOptions);
                    if (tinymceOptions)
                        scope.tinymceOptions = angular.copy(tinymceOptions);
                    else if(RteOptions){
                        scope.tinymceOptions = angular.copy(RteOptions);
                    }               
                }
            }
        }
    };
}]);
