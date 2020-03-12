// Generated by CoffeeScript 1.12.7
(function() {
  var Component_RotateAnimation,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_RotateAnimation = (function(superClass) {
    extend(Component_RotateAnimation, superClass);


    /**
    * Executes a rotate-animation on a game-object.
    *
    * @module gs
    * @class Component_RotateAnimation
    * @extends gs.Component_Animation
    * @memberof gs
    * @constructor
     */

    function Component_RotateAnimation(data) {
      Component_RotateAnimation.__super__.constructor.apply(this, arguments);
      this.easing = new gs.Easing(null, data != null ? data.easing : void 0);
      this.callback = null;
    }


    /**
    * Serializes the rotate-animation into a data-bundle.
    *
    * @method toDataBundle
     */

    Component_RotateAnimation.prototype.toDataBundle = function() {
      return {
        easing: this.easing
      };
    };


    /**
    * Updates the rotate-animation.
    *
    * @method update
     */

    Component_RotateAnimation.prototype.update = function() {
      Component_RotateAnimation.__super__.update.call(this);
      if (!this.easing.isRunning) {
        return;
      }
      this.object.angle = this.easing.value;
      this.easing.updateValue();
      if (!this.easing.isRunning && !this.easing.isEndless) {
        this.object.angle = Math.round(this.object.angle);
        return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
      }
    };


    /**
    * Starts the rotate-animation.
    *
    * @method rotateTo
    * @param {number} angle The target angle
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback called if the animation is finished.
     */

    Component_RotateAnimation.prototype.rotateTo = function(angle, duration, easingType, callback) {
      this.easing.type = easingType || gs.Easings.EASE_LINEAR[gs.EasingTypes.EASE_IN];
      this.callback = callback;
      if (duration === 0 || GameManager.tempSettings.skip) {
        this.object.angle = angle;
        return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
      } else {
        return this.easing.startValue(this.object.angle, angle - this.object.angle, duration);
      }
    };


    /**
    * Starts the rotate-animation.
    *
    * @method start
    * @param {gs.RotationDirection} direction The rotation direction.
    * @param {number} speed The rotation speed in degrees per frame.
    * @param {number} duration The duration in frames.
    * @param {Object} easingType The easing-type.
    * @param {function} [callback] An optional callback called if the animation is finished.
     */

    Component_RotateAnimation.prototype.rotate = function(direction, speed, duration, easingType, callback) {
      this.easing.type = easingType || gs.Easings.EASE_LINEAR[gs.EasingTypes.EASE_IN];
      this.callback = callback;
      this.speed = speed;
      this.orgAngle = this.object.angle;
      if (direction === 1) {
        speed = -speed;
      }
      if (duration === 0 || GameManager.tempSettings.skip) {
        this.object.angle += speed * duration;
        return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
      } else {
        return this.easing.startValue(this.object.angle, (this.object.angle + speed * duration) - this.object.angle, duration);
      }
    };


    /**
    * Skips the animation. That is used to skip an animation if the user
    * wants to skip very fast through a visual novel scene.
    *
    * @method skip
     */

    Component_RotateAnimation.prototype.skip = function() {
      var ref;
      if (((ref = this.easing) != null ? ref.duration : void 0) >= GameManager.tempSettings.skipTime) {
        this.object.angle = this.orgAngle + this.speed * this.easing.duration;
        return this.easing.isRunning = false;
      }
    };

    return Component_RotateAnimation;

  })(gs.Component_Animation);

  gs.Component_RotateAnimation = Component_RotateAnimation;

}).call(this);
