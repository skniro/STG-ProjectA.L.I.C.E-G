// Generated by CoffeeScript 1.12.7

/**
* An enumeration of different UI object update behaviors.
*
* @module ui
* @class UpdateBehavior
* @memberof ui
* @constructor
* @static
* @final
 */

(function() {
  var UpdateBehavior;

  UpdateBehavior = (function() {
    function UpdateBehavior() {}

    UpdateBehavior.initialize = function() {

      /**
      * The UI object is only updated if necessary. However, there are cases where
      * a necessary update is not detected.
      * @property NORMAL
      * @type number
      * @static
      * @final
       */
      this.NORMAL = 0;

      /**
      * The UI object is updated on every frame.
      * @property CONTINUOUS
      * @type number
      * @static
      * @final
       */
      return this.CONTINUOUS = 1;
    };

    return UpdateBehavior;

  })();

  UpdateBehavior.initialize();

  ui.UpdateBehavior = UpdateBehavior;

}).call(this);
