 function init(){
        console.log("initilised init function");
        // Call the add event listener functions connected each of the form elements
        addfirstNameListener();
        addfamilyNameListener();
        addAgeListener();
        addGenderListener();
        addEmailListener();
        addConfirmEmailListener();
        addStateListener();
        addpostCodeListener();
        addmedicareNumberListener();
        addmedicareDigitListener();
        addpassportNumberListener();
        initialiseInputs(); // Initialize all input styles
    }
    // Added a event listener which checks the details the field of the first name and displays it in the console
    //and  it check data inputs in the field of  first name
    function addfirstNameListener(){
        let firstNameInput = document.getElementById('firstName');
        firstNameInput.addEventListener('change',checkfirstName);
        console.log("Added First Name Listener")
    };
    // Added a function where  it checks first name field and checks if it meets the requirements of field
    // & displays it in the console log
    //When data is incorrect it provides user a message when user enters less than 2 characters
    // In the console it show what the user has typed in the first name field
    function checkfirstName(event){
        let field=event.target;
        console.log("Check First Name Entered:",field.value);
        if(field.value.length< 2){
            alert("First Name Must be 2 Characters or Longer");
            field.focus();
        }
    }
    // Added a event listener which checks the details the field of the Family Name
    // and it check data inputs in the field of  family name

    function addfamilyNameListener(){
        let familyNameInput= document.getElementById('familyName');
        familyNameInput.addEventListener('change',checkfamilyName);
        console.log("Added Family Name Listener");
    }
    // Added a function where  it checks family name field and checks if it meets the requirements of field & displays it in the console
    // When data is incorrect it provides user a message when user enters less than 2 characters
    // In the console it show what the user has typed in the family name field
    function checkfamilyName(event){
        let field= event.target;
        console.log("Check Family Name Entered:",field.value);
        if(field.value.length< 2){
            alert("Family Name Must be 2 Characters or Longer");
            field.focus();
        }
    }
    // Added a event listener which checks the details og the field of Age and displays
    //it  on the console
    function addAgeListener(){
        let ageInput= document.getElementById('age');
        ageInput.addEventListener('change',checkAge);
        console.log("Added Age Listener");
    }
    // Added a function where it checks requirements of the field and shows it in the console log
    // It will alert user if incorrect when the age is under 16
    // In the console it will show the age the user has typed
    function checkAge(event){
        let field= event.target;
        console.log("Age Entered:",field.value);
        if(field.value < 16){
            alert("Mininum Age is 16");
            field.focus();
        } 
    }
    // Added an event listener where it checks details of the gender drop down menu and displays it in the console log
    function addGenderListener(){
        let genderInput= document.getElementById('gender');
        genderInput.addEventListener('change',checkGender);
        console.log("Added Gender Listener");
    }
    // This function checks when user selects a gender and when they click select a gender it will alert user to select one of the three options
    // When the user selects a valid option it gets recorded on the console log
    function checkGender(event){
        let field= event.target;
        console.log("Gender: ",field.value);
        if(field.value ==="0"){
            alert("Select a Gender");
            
        }
        field.focus();
    }
    // Added email listener that will check the field of email and will display on the console
    function addEmailListener(){
        let email=document.getElementById('email');
        email.addEventListener('change',checkEmail);
        console.log("Added Email Listener");
    }
    // This function checks the format of the email
    // When it typed incorrectly,it will tell the user it has been typed in an incorrect format
    // In the console it will show what the user has typed in the email field
    function checkEmail(event){
            let field=event.target;
            console.log("Check Email entered",field.value);
            let emailTxt=field.value;
            let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let result = pattern.test(emailTxt);
            console.log("This is the result of the test",result);
            if (result){
                console.log("Correct Email Format");
                field.focus()
            }else if(!result) {
                alert("Email entered incorrectly");
            }
    }

    // Added confirm email listener that will check the field of confirm email and will display on the console
    function addConfirmEmailListener(){
        let email=document.getElementById('confirmEmail');
        email.addEventListener('change',checkconfirmEmail);
        console.log("Added Confirm Email Listener");
    }

    // This function checks the confirm email is in same as previous field
    // When it typed incorrectly,it will tell the user it has been typed in an email doesnt match previously typed email
    // In the console it will show what the user has typed in the Confirm email field
    function checkconfirmEmail(event){
        let field=event.target;
        console.log("Check Confirm Email entered",field.value);
        let confirmemailTxt=field.value;
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let result = pattern.test(confirmemailTxt);
        console.log("This is the result of the test",result);
        if (result){
            console.log("Confirm Email matches email Format");
            field.focus()
        }else if(!result) {
            alert("Confirm Email does not match the previous entered");
        }
    }

    // Get references to the email input fields
const emailInput = document.querySelector('#email');
const confirmEmailInput = document.querySelector('#confirmEmail');
// Get reference to the error message container
const errorMessage = document.querySelector('#emailMatchError');
// Get reference to the email description element
const emailDescription = document.querySelector('#emailDescription');

// Example of updating the description dynamically if needed
emailInput.addEventListener('focus', function() {
    emailDescription.textContent = 'Please enter your email address accurately for access to account.';
});
emailInput.addEventListener('blur', function() {
    // Clear description when field loses focus, or leave it persistent
    emailDescription.textContent = '';
});

/* Validate email matching in real-time as user types in confirmation field. This provides immediate
 feedback to users  */
confirmEmailInput.addEventListener('input', function() {
    // Check if the confirmation email matches the original email
    if (confirmEmailInput.value !== emailInput.value) {
        // Set custom validation error
        confirmEmailInput.setCustomValidity('Emails do not match.');
        // Update ARIA attributes for accessibility
        confirmEmailInput.setAttribute('aria-invalid', 'true');
        // Display error message for screen readers and visual users
        errorMessage.textContent = 'Emails do not match. Please ensure both email addresses match.';
    } else {
        // Clear the error when emails match
        confirmEmailInput.setCustomValidity('');
        // Update ARIA attributes to indicate valid state
        confirmEmailInput.setAttribute('aria-invalid', 'false');
        // Clear error message
        errorMessage.textContent = '';
    }
    // Force the field to re-validate based on our custom rule
    confirmEmailInput.checkValidity();
});

/**
 * Also validate when the main email field changes
 * This ensures the confirmation field re-validates if the original email is edited
 */
emailInput.addEventListener('input', () => {
    // Only check if confirmation field already has a value
    if (confirmEmailInput.value) {
        confirmEmailInput.checkValidity();
        /*The code below is to force the re-validatation of the confirmation field whenever the user changes 
        the first email field. If you only check when the confirmation field is typed in, the error message 
        ("Emails do not match") would remain even after the user corrected the first email to make them match.*/
        confirmEmailInput.dispatchEvent(new Event('input'));
    }
});

/**
 * Additional enhancement: Validate on form submission for final check
 */
document.getElementById('contactForm').addEventListener('submit', (event) => {
    // This ensures one final validation before form submission
    if (confirmEmailInput.value !== emailInput.value) {
        event.preventDefault(); // Prevent form submission
        // Focus on the confirmation field for correction
        confirmEmailInput.focus();
    }
});


    // Added an event listener where it checks the dropdown menu and displays added state event listener in the console log
    function addStateListener(){
        let state= document.getElementById('state');
        state.addEventListener('change',checkState);
        console.log("Added State Event Listener ");
    }
    // This function checks when user selects select a state and  it will alert user to select one of the seven options
    //whe clicking back to select state option
    // When user goes back to select state it alerts user to select a state
    // In the console it shows the option the user has selected
    function checkState(event){
        let field=event.target;
        console.log("State: ",field.value);
        if(field.value =="0"){
            alert("Select a State")
        }
    }

    // Added an event listner to check the post code field and displayed in the  console log
    function addpostCodeListener(){
            let postCode=document.getElementById('postCode');
            postCode.addEventListener('change',checkpostCode);
            console.log(" Added Postcode  Listener ");
    };
    // This function checks user input of their postcodes
    // When the user types less than 4 digits in the field. it reminds the user that the postcode is 4 digits
    // In the console it show the postcode the user has typed

    function checkpostCode(event){
            let field=event.target;
            console.log("check postcode entered",field.value);
            let postCodeTxt=field.value;
            let pattern= /[0-9]{4}/;
            let result = pattern.test(postCodeTxt);
            console.log("This the result of the test",result);
            if (!result){
                alert("Postcode Must be 4 Digits ");                
            }
                field.focus();
        };
        // Added an event listener to check medicare number field and displays it has been added to the  console log
        function addmedicareNumberListener(){
            let medicareNumber=document.getElementById('medicareNumber');
            medicareNumber.addEventListener('change',checkmedicareNumber);
            console.log("Added medicareNumber Listener");
        }
// Created a function to check user has entered correct medicare number
// If User it incorrect it tell the user to re-enter
//  In the console it will display medicare number the user has typed
        function checkmedicareNumber(event){
            let field= event.target;
            console.log("Check medicareNumber entered",field.value);
            let medicareNumberTxt=field.value;
            let pattern= /^[0-9]{10}$/;
            let result = pattern.test(medicareNumberTxt);
            console.log("This the result of the test",result);
            if (!result){
                alert("Please enter a valid medicareNumber");
            }

        }

        // Added an event listener to the medicare digit field which checks the medicare digit field and displays it in the
        // console log
        function addmedicareDigitListener(){
            let medicareDigit=document.getElementById('medicareDigit');
            medicareDigit.addEventListener('input',checkmedicareDigit);
            console.log("Added medicare digit Listener");
        }
         // this function checks if length of the medicare digit is not 1
         // Any length less or more than 1 it reminds user through an alert please add medicare Identifier
         // In the console it shows the the medicare digit the user has typed
         function checkmedicareDigit(event){
            let field= event.target;
            if (field.value.length!==1){
                alert("Please Add medicare unique identifier");
            }
                field.focus();

        }
    // Added a event listener for passport number and displays message in console log
    // and it check the passport number field
    function addpassportNumberListener(){
            let passportNumber=document.getElementById('passportNumber');
            passportNumber.addEventListener('change',checkpassportNumber);
            console.log("Added Passport Number Listener");
    }
    // This functions checks value inputed in the field and if incorrect an alert will pop up for the user
    // That to enter a valid passport number including 2 letters and 6 numbers
    // In the console it will show the passport number the user has typed
    function checkpassportNumber(event){
            let field= event.target;
            console.log("Check passport Number entered",field.value);
            let passportNumberTxt=field.value;
            let pattern=/^[a-zA-Z]{1,2}\d{6}$/
            let result=pattern.test(passportNumberTxt);
            if(!result){
                alert("Please enter a valid passport number Starting with 2 letters and ending with 6 numbers");
                field.focus();
            }
            // else{
            //     alert("Passport Number Entered Sucessfully");
            // }

    }
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        // checkValidity() checks against the browsers built in validation attributes - fires the inValid event
        // returns false if an element validation attribute requirements has not been met
        if (!form.checkValidity()) {
            //prevents submitting the form - testing environment only
            event.preventDefault();
            // querySelectorAll returns a node list of all the "input" elements and "select" elements on the page.
            const inputs = form.querySelectorAll('input, select');
            // a node list can use a built in forEach method (not a for loop) to access each element/node
            inputs.forEach(input => {
                // CLEARS any invalid status that may have been set by a previous custom message/s
                // where setCustomValidity() contained a non empty string i.e. a custom message
                input.setCustomValidity('')
                // validity.valid returns false if an elements validation attributes requirements have not been met
                if (!input.validity.valid) {
                    // Set custom message function created below based on validity state being false !false == true
                    setCustomMessage(input);
                    // Change border colour as a custom error display for the element/s
                    // whose validation criteria have not been met
                    input.style.borderColor = '#ff4444';
                    // The reportValidity() method returns true if the element value is valid, false if not valid
                    // if false this displays any custom or built in validation message and triggers an "invalid" event
                    input.reportValidity();
                    console.log("Invalid event fired.",event.type);
                }
            });
        } else {
            alert('Form submitted successfully! (This would normally process the reservation)');
            //prevents submitting the form - testing environment only
            event.preventDefault();
        }
    });

    // This functions set unique custom messages to test validity of values entered for first name, family name and email through
    // these unqiue messages
    function setCustomMessage(input) {
        const validity = input.validity;
        console.log("The input is ", input.name);
        input.setCustomValidity('');
        if (validity.valueMissing) {
            input.setCustomValidity('This data field is required');
        } else if (validity.patternMismatch) {
            if (input.name=="firstName") {
                input.setCustomValidity(`Please provide your first name details as text with a minimum of two characters`);
            } else if (input.name=="familyName") {
                input.setCustomValidity(`Please provide your family name details as text with a minimum of two characters`);
            }else if(input.name=="email") {
                const regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
                //console.log('Test email against a regular expression',regEx.test(field.value));
                if (regEx.test(input.value)){
                    input.setCustomValidity('Please enter a valid email address e.g. a@b.com');
                }
            }else{
                input.setCustomValidity('Please enter required data');
            }
        }

    }

    // Update input style based on validity for every input or selector type element
    function updateInputStyle(input) {
        if (input.value.trim() === '') {
            // Empty input element - neutral state
            input.style.borderColor = '';
        } else if (input.validity.valid) {
            // Valid input element - green border
            input.style.borderColor = '#00C851';
        } else {
            // Invalid input element - red border
            input.style.borderColor = '#ff4444';
        }
    }
    // Validate a single input elements data values - field refers to the input field
    function validateField(input) {
        // CLEARS previous custom messages and therefore RESETS invalid status - validity.valid initialised to true //
        input.setCustomValidity('');

        // The value in the field is checked against constraints - if it is invalid -
        // and there is values in the field, set custom message
        if (!input.validity.valid && input.value.trim() !== '') {
            setCustomMessage(input);
        }
        // Update visual style
        updateInputStyle(input);
        // returns true if data entered is valid, false if data entered is invalid
        return input.validity.valid;
    }

    // For Real-time validation feedback elicited by every key stroke - triggers "input" event //////
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        // clears invalid status set be previous custom messages where setCustomValidity()
        // contained a non empty string i.e. initialise each input
        input.setCustomValidity('')
        updateInputStyle(input);
        // validate on "input: i.e. every key stroke
        input.addEventListener('input', function() {
            validateField(this);
            // Report validity only if field has a value and is invalid
            if (this.value.trim() !== '' && !this.validity.valid) {
                this.reportValidity();
            }
        });
        // validate on blur - user leaves a field by tabbing away, or clicking somewhere else
        input.addEventListener('blur', function() {
            validateField(this);
            // Report validity only if field has a value and is invalid
            if (this.value.trim() !== '' && !this.validity.valid) {
                this.reportValidity();
            }
        });
    });
    // Initialise all inputs with proper validation state
    function initialiseInputs() {
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            // clears invalid status set be previous custom messages where
            // setCustomValidity() contained a non empty string
            input.setCustomValidity('');
            updateInputStyle(input);  // see below
        });
    }
    
    
    
    





    document.addEventListener('DOMContentLoaded',init);