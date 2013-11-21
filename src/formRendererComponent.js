angular.module('formRendererTemplates', ['scripts/directives/partials/field/checkbox.html', 'scripts/directives/partials/field/date.html', 'scripts/directives/partials/field/dropdown.html', 'scripts/directives/partials/field/email.html', 'scripts/directives/partials/field/hidden.html', 'scripts/directives/partials/field/password.html', 'scripts/directives/partials/field/radio.html', 'scripts/directives/partials/field/rte.html', 'scripts/directives/partials/field/tags.html', 'scripts/directives/partials/field/textarea.html', 'scripts/directives/partials/field/textfield.html', 'scripts/directives/partials/field/url.html', 'scripts/directives/partials/form/formGenerator.html', 'scripts/directives/partials/form/formSingleColumn.html', 'scripts/directives/partials/form/formTwoColumn.html']);

angular.module("scripts/directives/partials/field/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/checkbox.html",
    "<div class=\"field-editor\" ng-show=\"isvisible\">\n" +
    "    <label>\n" +
    "        {{field.label}}\n" +
    "    </label>\n" +
    "    <input ng-model=\"localModel\" type=\"checkbox\"/>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/date.html",
    "<div>\n" +
    "    <label>\n" +
    "        {{field.label}}\n" +
    "    </label>\n" +
    "  <input type=\"text\" ng-disabled=\"disabled\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\" ng-required=\"field.required\" data-date-format=\"{{field.datepickerOptions.format}}\" data-date-end-date=\"{{field.datepickerOptions.endDate}}\" min-view-mode=\"{{field.datepickerOptions.minViewMode}}\" start-view=\"{{field.datepickerOptions.startView}}\"  bs-datepicker>\n" +
    "    <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "</div>");
}]);

angular.module("scripts/directives/partials/field/dropdown.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/dropdown.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <select ng-disabled=\"disabled\" ng-model=\"localModel\" name=\"fieldName\" ng-options=\"{{field.ngOptions}}\" ng-required=\"field.required\">\n" +
    "        </select>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/email.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <input ng-disabled=\"disabled\" type=\"email\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\"  ng-required=\"field.required\" />\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.email.$dirty\">This field is required</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.email\">This is not a valid email.</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please enter no more than 254 characters.</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/hidden.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/hidden.html",
    "<input type=\"hidden\" name=\"fieldName\" ng-model=\"localModel\" />\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/password.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <input ng-disabled=\"disabled\" type=\"password\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\" ng-required=\"{{field.required}}\" ng-minlength=\"{{field.minLength}}\" ng-maxlength=\"{{field.maxLength}}\" />\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.minlength\">Please enter at least {{field.minLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please max {{field.maxLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$dirty && fieldForm.fieldName.$error.dontMatch\">Passwords don't match!</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/radio.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <div ng-repeat=\"option in field.options\">\n" +
    "            <label>\n" +
    "                <input type=\"radio\" ng-model=\"$parent.localModel\" value=\"{{option}}\" name=\"fieldName\"  ng-required=\"field.required\" />\n" +
    "                {{option}}\n" +
    "            </label>\n" +
    "           \n" +
    "        </div>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/rte.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/rte.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <textarea ng-disabled=\"disabled\" placeholder=\"{{field.placeholder}}\" ui-tinymce=\"tinymceOptions\" tinymce-options=\"field.tinymceOptions\" ng-model=\"localModel\" ng-bind=\"field.validation\" name=\"fieldName\" ng-required=\"field.required\"></textarea>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("scripts/directives/partials/field/tags.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/tags.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <p ng-show=\"field.description\" ng-bind-html-unsafe=\"field.description\"></p>\n" +
    "    <div id=\"custom-autocomplete\">\n" +
    "        <tags-selection tags=\"localModel\" tags-type=\"field.tagsType\" save=\"updateTagsModel()\" tags-theme=\"{{field.cssStyle}}\"></tags-selection>\n" +
    "\n" +
    "\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.minlength\">Please enter at least {{field.minLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please max {{field.maxLength}} characters</p>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("scripts/directives/partials/field/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/textarea.html",
    "<div class=\"field-editor\">\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <textarea rows=\"{{field.rows}}\" class=\"{{field.cssStyle}}\" ng-disabled=\"disabled\" type=\"text\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\" ng-minlength=\"field.minLength\" ng-maxlength=\"field.maxLength\" ng-required=\"field.required\"></textarea>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.minlength\">Please enter at least {{field.minLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please enter no more than {{field.maxLength}} characters</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/textfield.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/textfield.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div  id=\"{{field.name}}\"> \n" +
    "        <input class=\"{{field.cssStyle}}\" ng-disabled=\"disabled\" type=\"text\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\" ng-required=\"field.required\" ng-minlength=\"{{field.minLength}}\" ng-maxlength=\"{{field.maxLength}}\" ng-pattern=\"field.pattern\" />   \n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.minlength\">Please enter at least {{field.minLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please enter no more than {{field.maxLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.pattern\">{{field.patternMsg}}</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/field/url.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/field/url.html",
    "<div>\n" +
    "    <label>{{field.label}}</label>\n" +
    "    <div>\n" +
    "        <input class=\"{{field.cssStyle}}\" ng-disabled=\"disabled\" type=\"url\" placeholder=\"{{field.placeholder}}\" ng-model=\"localModel\" name=\"fieldName\" ng-required=\"field.required\" ng-minlength=\"{{field.minLength}}\" ng-maxlength=\"{{field.maxLength}}\" />\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.required && fieldForm.fieldName.$dirty\">This field is required</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.url\">Please provide a valid url with http:// or https:// (e.g. http://www.mycompanyname.com)</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.minlength\">Please enter at least {{field.minLength}} characters</p>\n" +
    "        <p class=\"text-error\" ng-show=\"fieldForm.fieldName.$error.maxlength\">Please enter no more than {{field.maxLength}} characters</p>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("scripts/directives/partials/form/formGenerator.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/form/formGenerator.html",
    "<div>\n" +
    "    <div ng-repeat=\"field in configuration.fields\"  class=\"{{field.template}}\">   \n" +
    "        <formulate field=\"field\" ng-model=\"modelb\" ng-form=\"fieldForm\" template=\"{{field.template}}\"></formulate>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/directives/partials/form/formSingleColumn.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/form/formSingleColumn.html",
    "<div>\n" +
    "     <form name=\"editForm\" novalidate>\n" +
    "         <form-field-renderer>           \n" +
    "         </form-field-renderer>\n" +
    "         <div ng-hide=\"hideFormActions\" class=\"form-actions\">\n" +
    "             <button ng-show=\"showSubmit\" class=\"btn save medium white\" ng-click=\"submit()\" ng-disabled=\"(isSubmitting == 'true') || editForm.$invalid || editForm.$pristine\" >save</button>\n" +
    "             <a ng-show=\"showCancel\" class=\"btn btn-warning cancel\" ng-click=\"cancel()\">cancel</a>\n" +
    "         </div> \n" +
    "     </form>\n" +
    "</div>");
}]);

angular.module("scripts/directives/partials/form/formTwoColumn.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/directives/partials/form/formTwoColumn.html",
    "<div>\n" +
    "    <form name=\"editForm\" novalidate class=\"form-horizontal\">\n" +
    "        <form-field-renderer></form-field-renderer>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"left-column pull-left span5\">\n" +
    "            </div>\n" +
    "            <div class=\"right-column pull-left span5\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "         <div ng-hide=\"hideFormActions\" class=\"form-actions\">\n" +
    "            <button ng-show=\"showSubmit\" class=\"btn save medium white\" ng-click=\"submit()\" ng-disabled=\"(isSubmitting == 'true') || editForm.$invalid || editForm.$pristine\" >save</button>\n" +
    "             <a ng-show=\"showCancel\" class=\"btn btn-warning cancel\" ng-click=\"cancel()\">cancel</a>\n" +
    "        </div>\n" +
    "    </form> \n" +
    "</div>\n" +
    "");
}]);

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
