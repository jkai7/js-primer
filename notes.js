// CALLBACK FUNCTION - delaying execution of your code and giving that responsibility to other code 

    // function displayFilip() {
    //     console.log('filip')
    // }

    // function displayName(callBackFunction) {
    //     callBackFunction();
    // }

    // displayName(displayFilip);

    // displayName()
    // displayName()
    // displayName()

// ARROW FUNCTION 

    function getName() {
        return 'filip';
    };

    const getName2 = () => 'james'; // returns automatically, doesnt need curly brackets. 

    console.log(getName());
    console.log(getName2()); 

    function getTheName(name) {
        return name;
    };

    const getTheName2 = name => name; // doesnt need parentheses

    console.log(getTheName('rodrigo'));
    console.log(getTheName2('diago'));