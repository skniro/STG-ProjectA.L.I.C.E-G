/**
 * [FS] Cell Phone UI\Templates\Template_MessageBox
 * Edits to the original Templates\Template_MessageBox
 */
 
 ui.UiFactory.customTypes["ui.MessageBox"] = {
    "type": "ui.FreeLayout",
    "controls": [
        {
           "type": "ui.Window",
           "frame": [0, "100% - 220", "100%", 220],
           "zIndex": 5000
        },
        {
            "type": "ui.MessageBoxMenu",
            "params": { "messageBox": ($(() => $messageBox)) },
            "order": 81000,
            "frame": ["100% - 140", "100% - 270"]
        },
        {
            "type": "ui.Text",
            "updateBehavior": "continuous",
            "text": "",
            "style": "messageBoxNameText",  
            "formulas": [
                $(() => o.text = $dataFields.scene.currentCharacter.name),
                $(function() { if (this.onTextChange($dataFields.scene.currentCharacter.name)) { return o.font.color.setFromObject($dataFields.scene.currentCharacter.textColor || Color.WHITE); } })
            ],
            "zIndex": 5005,
            "sizeToFit": true,
            "frame": [148, "100% - 210", 128, 30]
        }
    ]
};

ui.UiFactory.customTypes["ui.CustomGameMessage"] = {
    "type": "ui.FreeLayout",
    "controls": [
        {
            "type": "ui.Message",
            "zIndex": 10000,
            "id"() { return p.id + "_message"; },
            "style": "customMessageText",
            "frame": [0, 0, "100%", "100%"]
        },
        {
            "type": "ui.Image",
            "formulas": [
                $(() => o.dstRect.x = o.parent.controls[0].message.caretPosition.x),
                $(() => o.dstRect.y = o.parent.controls[0].message.caretPosition.y - 20),
                $(() => o.visible = o.parent.controls[0].visible && (o.parent.controls[0].message.isRunning || o.parent.controls[0].message.isWaiting))
            ],
            "animations": [
                {
                    "event": "onAlways",
                    "flow": [
                        { "type": "playAnimation", "repeat": false, "animationId": "40133382KC7B4A4C97S81F0E7D539A513261" }
                    ]
                }
            ],
            "image": "message_caret",
            "zIndex": 10000,
            "frame": [0, 0, 0, 0]
        }
    ]
};

ui.UiFactory.customTypes["ui.GameMessage"] = {
    "type": "ui.FreeLayout",
    "sizeToFit": true,
    "controls": [
        {
            "type": "ui.Message",
            "zIndex": 10000,
            "id"() { return p.id + "_message"; },
            "frame": [0, 10, Graphics.width - 136 - 220, 200],
            "style": "advMessageText"
        },
        {
            "type": "ui.Image",
            "formulas": [
                $(() => o.dstRect.x = o.parent.controls[0].message.caretPosition.x),
                $(() => o.dstRect.y = o.parent.controls[0].message.caretPosition.y - 10),
                $(() => o.visible = o.parent.controls[0].visible && (o.parent.controls[0].message.isRunning || o.parent.controls[0].message.isWaiting))
            ],
            "animations": [
                {
                    "event": "onAlways",
                    "flow": [
                        { "type": "playAnimation", "repeat": false, "animationId": "40133382KC7B4A4C97S81F0E7D539A513261" }
                    ]
                }
            ],
            "image": "message_caret",
            "zIndex": 10000,
            "frame": [0, 0]
        }
    ]
};

ui.UiFactory.customTypes["ui.GameMessageNVL"] = {
    "type": "ui.FreeLayout",
    "sizeToFit": true,
    "controls": [
        {
            "type": "ui.Message",
            "zIndex": 10000,
            "id"() { return p.id + "_message"; },
            "style": "nvlMessageText",
            "frame": [((Graphics.width / 100) * 12.5) + 8, 8, ((Graphics.width / 100) * 75) - 16, Graphics.height - 16]
        }
    ]
};

ui.UiFactory.customTypes["ui.MessageBoxNVL"] = {
    "type": "ui.FreeLayout",
    "sizeToFit": true,
    "controls": [
        {
            "type": "ui.MessageBoxMenu",
            "params": { "messageBox": ($(() => $nvlMessageBox)) },
            "order": 81000,
            "frame": [0, Graphics.height - 270]
        },
        {
            "type": "ui.Window",
            "params": { "backgroundOpacity": 128
            },
            "frame": [(Graphics.width / 100) * 12.5, 0, (Graphics.width / 100) * 75, Graphics.height],
            "zIndex": 4999
        }
    ]
};

ui.UiFactory.customTypes["ui.MessageMenu"] = {
    "type": "ui.FreeLayout",
    "sizeToFit": true,
    "controls": [
        {
            "type": "ui.MessageBoxMenu",
            "params": { "messageBox": ($(() => $messageMenu)) },
            "order": 81000,
            "frame": [0, Graphics.height - 270]
        }
    ]
};

