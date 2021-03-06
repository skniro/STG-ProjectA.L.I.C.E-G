/**
 * [FS] Cell Phone UI\Templates\Template_Slider
 * Edits to the original Templates\Template_Slider
 */
 
 ui.UiFactory.customTypes["ui.Slider"] = {
    "type": "ui.FreeLayout",
    "sizeToFit": true,
    "controls": [
        {
            "color": [131, 131, 131, 131],
            "type": "ui.Panel",
            "frame": [0, 0, "100% - 50", gs.UIConstants.SLIDER_TRACK_H],
            "alignmentY": "center"
        },
        {
            "style": "sliderKnob",
            "focusable": true,
            "type": "ui.Image",
            "frame": [0, 0],
            "alignmentY": "center",
            "draggable": { "rect": [0, 0, 100, gs.UIConstants.OPTION_BUTTON_H], "axisX": true, "axisY": false },
            "formulas": [
                ($(() => o.draggable.rect.width = o.parent.subObjects[0].dstRect.width)),
                ($(function() { if (this.onChange(o.parent.params.read.exec())) { return o.parent.controls[1].dstRect.x = Math.round((((o.parent.controls[1].draggable.rect.width-o.parent.controls[1].dstRect.width) / o.parent.params.max) * o.parent.params.read.exec()) + o.parent.controls[1].draggable.rect.x); } })),
                ($(function() { if (this.onChange(o.parent.controls[1].dstRect.x)) { return o.parent.params.write.exec(Math.round((o.parent.params.max / (o.parent.controls[1].draggable.rect.width-o.parent.controls[1].dstRect.width)) * (o.parent.controls[1].dstRect.x-o.parent.controls[1].draggable.rect.x))); } })),
                ($((() => o.parent.subObjects[2].text = o.parent.params.read.exec())))
            ]
        },
        {
            "type": "ui.Text",
            //"color": [255, 255, 255],
            "frame": [0, 0],
            "style": "smallUIText",
            "alignmentX": "right",
            "alignmentY": "center",
            "format": "%s%",
            "text": "Hello",
            "sizeToFit": true
        }
    ]
};