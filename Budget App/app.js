//BUDGET CONTROLLER
var budgetController = (function() {

    // Some code later

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    };

    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exc
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMsStrings: function(){
            return DOMstrings;
        },
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMsStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };   

    var ctrlAddItem = function() {
        // 1. Get the filed input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();