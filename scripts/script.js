document.addEventListener('DOMContentLoaded', function() {
    
    //Date and time inputs
    $( "#date" ).datepicker({ minDate: 0 });
    $('#timepicker').wickedpicker();


    //Form validation
    //Form is not valid at start
    var isFormValid = false;

    //input variables
    var fieldsAll = document.querySelectorAll('input');
    var name = fieldsAll[0];
    var email = fieldsAll[1];
    var subject = fieldsAll[2];
    var message = document.querySelector('textarea');
    var date = fieldsAll[3];
    var time = fieldsAll[4];
    var submitBtn = fieldsAll[5];
    var resetBtn = fieldsAll[6];

    var isNameValid = function() {
        var nameVal = name.value;
        return nameVal.length > 0 && nameVal.length <= 200;
    };

    var isEmailValid = function() {
        var emailVal = email.value;
        return emailVal.indexOf('@') > -1 && emailVal.length <= 200;
    }

    var isSubValid = function() {
        var subjectVal = subject.value;
        return subjectVal.length > 0 && subjectVal.length <= 200;
    }

    var isMessageValid = function() {
        var messageVal = message.value;
        return messageVal.length > 0 && messageVal.length <= 200;
    }

    var isDateValid = function() {
        var dateVal = date.value;
        return dateVal.length > 0;
    }

    var isTimeValid = function() {
        var timeVal = time.value;
        return timeVal.length > 0;
    }

    //Submit button event
    submitBtn.addEventListener('click', function(event) {
        var isFormValid = isNameValid() && isEmailValid() && isSubValid() && isMessageValid() && isDateValid() && isTimeValid();

        event.preventDefault();

        if (isFormValid === false) {
            alert('error');
        }

        else {
            alert('succes');
        }
    });

});