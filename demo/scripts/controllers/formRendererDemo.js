'use strict';

angular.module('formRendererDemo',[]).controller('DemoCtrl',['$scope','RteOptions', function ($scope, RteOptions) {
    
      
    $scope.person = {
        firstName: 'Nadia',
        lastName: 'Mark',
        dateBirth: '1986-05-17T00:00:00.000Z',
        graduationYear: '2010',
        gender: 'female',
        adult: false,
        email: 'test@test.com',
        url: 'http://www.test.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis ut nibh vitae mollis. Cras eu diam ut ante venenatis tincidunt. Sed dui justo, tempor vitae enim ornare, aliquam pellentesque ligula. Etiam vestibulum rutrum purus vitae lobortis. Praesent at mattis libero.' ,
        detailedDescription: '<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><p>Aliquam lobortis ut nibh vitae mollis. Cras eu diam ut ante venenatis tincidunt. Sed dui justo, tempor vitae enim ornare, aliquam pellentesque ligula. Etiam vestibulum rutrum purus vitae lobortis. Praesent at mattis libero.</p>',
        password: 'nadia',
        hiddenValue: 'hello world'
    };
    
    $scope.personDublicated = angular.copy($scope.person);
    
    //rte field
    $scope.rteOptionsCustomHeight = _.extend(angular.copy(RteOptions), { height: 120 });
    $scope.rteOptionsCustomAvailableElements = _.extend(angular.copy(RteOptions), {valid_elements: "p,h1,h2,h3,br,ul,li,strong/b,em/i",block_formats: "Paragraph=p;Header 3=h3;Header 2=h2;Header 1=h1"});
    
    
    //dropdown field
    $scope.availableGenders = [{id:'female', name: 'Female'}, 
                               {id:'male', name: 'Male'}];
    
    $scope.dublicatedAvailableGenders = [{id:'female', name: 'Female'}, 
                               {id:'male', name: 'Male'}];
    
    
    $scope.person.gender = _.first(_.where($scope.availableGenders, { id: $scope.person.gender }));
    
    
    $scope.formConfigurationSingleCol = {
            model: 'person',
            name: 'formRenderDemo',
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
                    label: 'First Name',
                    name: 'firstName',
                    placeholder: 'First Name',
                    type: 'text',
                    model: 'model.firstName',
                    required: true,
                    minLength: 2,
                    maxLength: 5
                },
                {
                    label: 'Last Name',
                    name: 'lastName',
                    placeholder: 'Last Name',
                    type: 'text',
                    model: 'model.lastName',
                    required: true,
                    minLength: 2,
                    maxLength: 5
                },
                {
                    label: 'Date of birth',
                    name: 'dateBirth',
                    //placeholder: 'Last Name',
                    type: 'date',
                    model: 'model.dateBirth',
                    required: true
                },
                {
                    label: 'Graduation Year',
                    name: 'graduationYear',
                    //placeholder: 'Last Name',
                    type: 'date',
                    model: 'model.graduationYear',
                    required: true,
                    datepickerOptions: {
                        format: 'yyyy', 
                        minViewMode: 'years', 
                        startView: 'year',
                        endDate: new Date()
                    }
                },
                {
                    label: 'Email',
                    name: 'email',
                    placeholder: 'test@yourdomain.com',
                    type: 'email',
                    model: 'model.email',
                    required: true,
                    minLength: 2,
                    maxLength: 5
                },
                {
                    label: 'Email Disabled',
                    name: 'email',
                    placeholder: '',
                    type: 'email',
                    model: 'model.email',
                    disabled: 'true',
                    minLength: 2,
                    maxLength: 5
                },
                {
                    label: 'Url',
                    name: 'url',
                    hint: 'please fill in your url',
                    placeholder: 'http://www.yourdomain.com',
                    type: 'url',
                    model: 'model.url',
                    required: true
                },
                {
                    label: 'Adult?',
                    name: 'Adult',
                    placeholder: '',
                    type: 'checkbox',
                    model: 'model.adult'
                },
                {
                    label: 'Gender',
                    name: 'Gender',
                    placeholder: '',
                    type: 'dropdown',
                    model: 'model.gender',
                    required: true,
                    //disabled: 'false',
                    options: $scope.availableGenders,
                    ngOptions: 'option as option.name for option in field.options track by option.id'
                },
//                {
//                    label: 'Description with default number of rows (5)',
//                    name: 'description',
//                    placeholder: 'Description',
//                    type: 'textarea',
//                    model: 'model.description',
//                    required: true,
//                    maxLength: 300
//                },
//                {
//                    label: 'Description with number of rows (10)',
//                    name: 'description',
//                    hint: 'please fill in your personal description',
//                    placeholder: 'Description',
//                    type: 'textarea',
//                    model: 'model.description',
//                    required: true,
//                    maxLength: 300,
//                    rows: 10
//                },
                {
                    label: 'Detailed description with default rte options',
                    name: 'detailedDescription',
                    placeholder: 'Detailed description',
                    type: 'rte',
                    model: 'model.detailedDescription',
                    required: true,
                    maxLength: 300
                }//,
//                {
//                    label: 'Detailed description with custom rte options defined on a constant',
//                    name: 'detailedDescription',
//                    placeholder: 'Detailed description',
//                    type: 'rte',
//                    model: 'model.detailedDescription',
//                    required: true,
//                    maxLength: 150
//                    
//                },
//                {
//                    label: 'Detailed description with custom rte options (only height)  defined explicit on form renderer configuration',
//                    name: 'detailedDescription',
//                    placeholder: 'Detailed description',
//                    type: 'rte',
//                    tinymceOptions: $scope.rteOptionsCustomHeight,
//                    model: 'model.detailedDescription',
//                    required: true,
//                    maxLength: 150,
//                    
//                },
//                {
//                    label: 'Detailed description with custom rte options (only availableElements in this case: {valid_elements: "p,h1,h2,h3,br,ul,li,strong/b,em/i",block_formats: "Paragraph=p;Header 3=h3;Header 2=h2;Header 1=h1"} ) defined explicit on form renderer configuration',
//                    name: 'detailedDescription',
//                    placeholder: 'Detailed description',
//                    type: 'rte',
//                    tinymceOptions: $scope.rteOptionsCustomAvailableElements,
//                    model: 'model.detailedDescription',
//                    required: true,
//                    maxLength: 150,
//                    
//                }
            ]
      };
    
    
    $scope.personDublicated.gender = _.first(_.where($scope.dublicatedAvailableGenders, { id: $scope.personDublicated.gender }));
    $scope.personDublicated.female = {label: 'female', isSelected: false};
    
    $scope.availableEyeColors = ['Brown', 'Green', 'Blue'];
    $scope.personDublicated.eyeColor = 'Brown';
    //$scope.availableEyeColors = [{name: 'Brown', value: 'brown'}, {name: 'Green', value: 'green'}, {name: 'Blue', value: 'blue'}];
    //$scope.personDublicated.eyeColor = {name: 'Brown', value: 'brown'};
    
    $scope.formConfigurationTwoCol = {
            model: 'personDublicated',
            name: 'formRenderDemo',
            template: {
                type: 'twoColumns'
            },
            actions: {
                submit: 'true',
                cancel: 'true'
            },
            //updateOnChange: true,
            fields: [
                {
                    label: 'First Name1',
                    name: 'firstName1',
                    placeholder: 'First Name1',
                    type: 'text',
                    model: 'model.firstName',
                    required: true,
                    minLength: 2,
                    maxLength: 5,
                    template: 'left'
                },
                {
                    label: 'Last Name1',
                    name: 'lastName1',
                    placeholder: 'Last Name1',
                    type: 'text',
                    model: 'model.lastName',
                    required: true,
                    minLength: 2,
                    maxLength: 5,
                    template: 'right'
                },
                {
                    label: 'Email1',
                    name: 'email1',
                    placeholder: 'test@yourdomain.com',
                    type: 'email',
                    model: 'model.email',
                    required: true,
                    minLength: 2,
                    maxLength: 5,
                    template: 'left'
                },
                {
                    label: 'Url1',
                    name: 'url1',
                    placeholder: 'http://www.yourdomain.com',
                    type: 'url',
                    model: 'model.url',
                    required: true,
                    template: 'right'
                },
//                {
//                    label: 'Gender',
//                    name: 'gender',
//                    placeholder: '',
//                    type: 'radio',
//                    model: 'model.gender',
//                    required: true,
//                    //disabled: 'false',
//                    options: $scope.availableGenders,
//                    template: 'right'
//                },
                {
                    label: 'Are you female?',
                    name: 'isFemale',
                    placeholder: '',
                    type: 'checkbox',
                    model: 'model.female.isSelected',
                    required: true,
                    //disabled: 'false',
                    template: 'left'
                },
                {
                    label: 'Eye color',
                    name: 'eyeColor',
                    placeholder: '',
                    type: 'radio',
                    model: 'model.eyeColor',
                    required: true,
                    //disabled: 'false',
                    options: $scope.availableEyeColors,
                    template: 'left'
                },
                {
                    label: 'Password1',
                    name: 'password1',
                    placeholder: '',
                    type: 'password',
                    model: 'model.password',
                    required: true,
                    //disabled: 'false',
                    template: 'left'
                },
                {
                    label: 'Hidden1',
                    name: 'hiddenDemo1',
                    placeholder: '',
                    type: 'hidden',
                    model: 'model.hiddenValue',
                    template: 'right'
                }                              
            ]
      };
       
      $scope.submitFormInfo = function(){
         
              console.log('submitted updated model: ');
              console.log($scope.person);
              console.log('dublicated person object: ')
              console.log($scope.personDublicated);
                    
          
      };
    
  }]);