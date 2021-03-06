/**
 * [FS] Cell Phone UI\Templates\Template_MessageBoxMenu
 * Edits to the original Templates\Template_MessageBoxMenu
 */
 
 ui.UiFactory.customTypes["ui.MessageBoxMenu"] = {
    "type": "ui.FreeLayout",
    "order": 85000,
    "id": "msgmenu",
    "sizeToFit": true,
    "controls": [
        {
           "type": "ui.Window",
           "color": [0, 0, 0, 128],
           "frame": [0, 0, 140, 270],
           "order": 0,
           "params": { "zIndex": 5000 },
           "zIndex": 85000
        },
        {
            "type": "ui.StackLayout",
            "orientation": "vertical",
            "order": 10,
            "frame": [0, 20, 128, 230],
            "controls": [
                {
                   "type": "ui.MessageOptionButton",
                   "formulas": [$(() => o.ui.enabled = $dataFields.settings.allowSkip)],
                   "params": { "label": { "lcId": "3A58B0DB84DB0549FD09EDF6F0FF0730D8DE", "defaultText": "Skip" }, "write": $(() => $dataFields.tempSettings.skip = !$dataFields.tempSettings.skip) },
                   "margin": [10, 5, 0, 0],
                   "order": 80001,
                },
                {
                   "type": "ui.MessageOptionButton",
                   "formulas": [$(() => o.ui.enabled = $dataFields.tempSettings.backlogAccess)],
                   "id": "logButton",
                   "margin": [10, 10, 0, 0],
                   "params": { 
                        "label": { "lcId": "BF92F3296C66164227197FB3BF1E1B09E0D8", "defaultText": "Log" }, 
                        "write": $(() => $dataFields.tempSettings.logOpened = !$dataFields.tempSettings.logOpened),
                        "action2": { 
                           "condition": { "field": ($(() => !$dataFields.tempSettings.logOpened)), "equalTo": true }, "name": "disposeControl", "params": ($(() => 'backlog')) 
                        }, 
                        "action1":  { 
                           "condition": { "field": ($(() => $dataFields.tempSettings.logOpened)), "equalTo": true },
                           "name": "createControl", 
                           "params": { 
                               "parent"() { return p.messageBox.parent; },
                               "descriptor": "ui.MessageBacklogBox"
                            }
                        }
                    }
                },
                {
                   "type": "ui.Text",
                   "formulas": [$(() => o.ui.enabled = $dataFields.tempSettings.saveMenuAccess)],
                   "id": "saveButton",
                   //"components": [{ "type": "Component_HotspotBehavior", "params": {"sound": "$dataFields.database.system.menuSelectSound"} }],
                   "style": "regularUIText",
                   "actions": [
                       { "name": "prepareSaveGame", "params": { "snapshot": true } },
                       { "name": "switchLayout", "params": { "name": "saveMenuLayout", "savePrevious": true } }
                    ],
                   "text": { "lcId": "5316D6C90CB9924AE64A39889235D22D5FEE", "defaultText": "Save" },
                   "sizeToFit": true,
                   "margin": [60, 16, 0, 0]
                },
                {
                   "type": "ui.Text",
                   "formulas": [$(() => o.ui.enabled = $dataFields.tempSettings.loadMenuAccess)],
                   "styles": ["regularUIText"],
                   "action": { "name": "switchLayout", "params": { "name": "loadMenuLayout", "savePrevious": true }},
                   "text": { "lcId": "9622E9805409534DB8381610238C95564F30", "defaultText": "Load" },
                   "sizeToFit": true,
                   "margin": [60, 16, 0, 0]
                },
                {
                   "type": "ui.Text",
                   "styles": ["regularUIText"],
                   "text": { "lcId": "D2632CD54402D8462F597DD75E51050ED0C3", "defaultText": "Title" },
                   "sizeToFit": true,
                   "actions": [
                       { "name": "createControl", "params": { "descriptor": { 
                            "id": "confirmationDialog",
                            "type": "ui.ConfirmationDialog",
                            "zIndex": 90000,
                            "params": { 
                                "message": { "lcId": "ABC85CC3669B83481309BDF44B98EF11B59B", "defaultText": "Do you really want to exit?" },
                                "acceptActions": [{"name":"exitGame"},{"name": "switchLayout", "params": { "name": "titleLayout" } }] , 
                                "rejectActions": [{"name":"disposeControl","params":($(() => 'confirmationDialog'))}]}
                        } } }
                   ],    
                   "margin": [60, 16, 0, 0]
                }
            ],
            "zIndex": 86000
        }
    ]
};