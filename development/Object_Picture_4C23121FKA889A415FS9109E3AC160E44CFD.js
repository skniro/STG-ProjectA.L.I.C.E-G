// Generated by CoffeeScript 1.12.7
(function() {
  var Object_Picture,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Object_Picture = (function(superClass) {
    extend(Object_Picture, superClass);

    Object_Picture.objectCodecBlackList = ["parent"];


    /**
    * A game object used for pictures in a scene.
    *
    * @module gs
    * @class Object_Picture
    * @extends gs.Object_Visual
    * @memberof gs
    * @constructor
     */

    function Object_Picture(parent, data, type) {
      Object_Picture.__super__.constructor.call(this, data);

      /**
      * The object's source rectangle. It controls which part of the object's image is used
      * for visual presentation.
      * @property srcRect
      * @type gs.Rect
       */
      this.srcRect = new Rect();

      /**
      * The object's mask to execute masking-effects on it.
      * @property mask
      * @type gs.Mask
       */
      this.mask = new gs.Mask();

      /**
      * The domain the object belongs to.
      * @property domain
      * @type string
       */
      this.domain = "com.degica.vnm.default";

      /**
      
      * Indicates if the object's visual presentation should be mirrored horizontally.
      * @property mirror
      * @type boolean
       */
      this.mirror = false;

      /**
      * The object's image used for visual presentation.
      * @property image
      * @type string
       */
      this.image = "";

      /**
      * The rotation-angle of the picture in degrees. The rotation center depends on the
      * anchor-point.
      * @property angle
      * @type number
       */
      this.angle = 0;

      /**
      * The color tone of the object used for the visual presentation.
      * @property tone
      * @type gs.Tone
       */
      this.tone = new Tone(0, 0, 0, 0);

      /**
      * The color of the object used for the visual presentation.
      * @property color
      * @type gs.Color
       */
      this.color = new Color(255, 255, 255, 0);

      /**
      * Contains different kinds of effects which can be activated for the object.
      * @property effects
      * @type Object
       */
      this.effects = new gs.EffectCollection();

      /**
      * The object's animator-component to execute different kind of animations like move, rotate, etc. on it.
      * @property animator
      * @type vn.Component_Animator
       */
      this.animator = new gs.Component_Animator();

      /**
      * The object's visual-component to display the game object on screen.
      * @property visual
      * @type gs.Component_Sprite|gs.Component_TilingSprite|gs.Component_Frame|gs.Component_ThreePartImage|gs.Component_Quad
       */
      switch (type) {
        case 0:
          this.visual = new gs.Component_Sprite();
          break;
        case 1:
          this.visual = new gs.Component_TilingSprite();
          break;
        case 2:
          this.visual = new gs.Component_Frame();
          break;
        case 3:
          this.visual = new gs.Component_ThreePartImage();
          break;
        case 4:
          this.visual = new gs.Component_Quad();
          break;
        default:
          this.visual = new gs.Component_Sprite();
      }
      this.frameThickness = 16;
      this.frameCornerSize = 16;
      this.firstPartSize = 7;
      this.middlePartSize = 1;
      this.lastPartSize = 7;
      this.addComponent(this.visual);
      this.addComponent(this.animator);
      this.componentsFromDataBundle(data);
    }


    /**
    * Restores the game object from a data-bundle.
    *
    * @method restore
    * @param {Object} data - The data-bundle.
     */

    Object_Picture.prototype.restore = function(data) {
      Object_Picture.__super__.restore.call(this, data);
      this.srcRect = gs.Rect.fromObject(data.srcRect);
      this.mask = gs.Mask.fromObject(data.mask);
      return this.motionBlur = gs.MotionBlur.fromObject(data.motionBlur);
    };


    /**
    * Serializes the object into a data-bundle.
    *
    * @method toDataBundle
    * @return {Object} The data-bundle.
     */

    Object_Picture.prototype.toDataBundle = function() {
      var components, result;
      components = this.componentsToDataBundle(gs.Component_Animation);
      result = {
        dstRect: this.dstRect,
        srcRect: this.srcRect,
        opacity: this.opacity,
        origin: this.origin,
        zIndex: this.zIndex,
        mask: this.mask.toDataBundle(),
        motionBlur: this.motionBlur,
        zoom: this.zoom,
        angle: this.angle,
        anchor: this.anchor,
        offset: this.offset,
        mirror: this.mirror,
        image: this.image,
        components: components
      };
      return result;
    };

    return Object_Picture;

  })(gs.Object_Visual);

  gs.Object_Picture = Object_Picture;

}).call(this);
