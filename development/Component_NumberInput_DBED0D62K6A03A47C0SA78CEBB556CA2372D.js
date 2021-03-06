// Generated by CoffeeScript 1.12.7
(function() {
  var Component_NumberInput,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_NumberInput = (function(superClass) {
    extend(Component_NumberInput, superClass);


    /**
    * The number-input component defines the logic for the number-input window
    * of the default In-Game UI. 
    *
    * @module gs
    * @class Component_NumberInput
    * @extends gs.Component
    * @memberof gs
    * @constructor
     */

    function Component_NumberInput(params) {

      /**
      * The max. number of digits of the number.
      * @property digits
      * @type number
       */
      this.digits = ui.Component_FormulaHandler.fieldValue(this, params.digits);

      /**
      * The number-cursor position.
      * @property digits
      * @type number
      * @protected
       */
      this.cursor = 0;

      /**
      * The current number as text.
      * @property number
      * @type string
       */
      this.number = "";
    }


    /**
    * Initializes the number-input component.
    *
    * @method setup
     */

    Component_NumberInput.prototype.setup = function() {
      var text;
      text = "".fill("0", this.digits);
      return null;
    };


    /**
    * An action-method to add a single number/digit.
    *
    * @method action_addNumber
    * @param {gs.Object_Base} sender The sender of the action.
    * @param {Object} params The params-object which need a number-property containing the digit/number to add.
     */

    Component_NumberInput.prototype.action_addNumber = function(sender, params) {
      var number;
      number = ui.Component_FormulaHandler.fieldValue(sender, params.number);
      if (this.number.length === 0 && number === 0) {
        return;
      }
      if (this.number.length < this.digits) {
        this.number += number.toString();
      } else {
        this.number = this.number.replaceAt(this.number.length - 1, number.toString());
      }
      return this.setNumber(this.number);
    };


    /**
    * An action-method to clear the number at the current cursor position.
    *
    * @method action_removeNumber
    * @param {gs.Object_Base} sender The sender of the action.
    * @param {Object} [params=null] The params-object. Can be <b>null</b>.
     */

    Component_NumberInput.prototype.action_removeNumber = function(sender, params) {
      if (this.number.length > 0) {
        this.number = this.number.substring(0, this.number.length - 1);
      }
      this.setNumber(this.number);
      return this.setNumber(this.number);
    };


    /**
    * Puts the specified number into the UI label-objects to make it visible
    * on screen.
    *
    * @method setNumber
    * @param {string} number The number to set.
     */

    Component_NumberInput.prototype.setNumber = function(number) {
      var c, i, j, len, text;
      text = number.lfill("0", this.digits);
      for (i = j = 0, len = text.length; j < len; i = ++j) {
        c = text[i];
        this.object.controls[i].controls[1].text = c;
        this.object.controls[i].controls[1].update();
      }
      return null;
    };

    return Component_NumberInput;

  })(gs.Component);

  gs.Component_NumberInput = Component_NumberInput;

}).call(this);
