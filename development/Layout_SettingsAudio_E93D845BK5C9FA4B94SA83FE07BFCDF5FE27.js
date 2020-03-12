ui.UiFactory.layouts.settingsAudio = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "preload": {
    graphics: [
      {
        name: $(function() {
          return $dataFields.database.system.menuBackground.name || 'bg-generic';
        })
      }
    ]
  },
  "controls": [
    {
      "type": "ui.Image",
      "executeFieldFormulas": true,
      "image": function() {
        return $dataFields.database.system.menuBackground.name || 'bg-generic';
      },
      "components": [
        {
          "type": "Component_HotspotBehavior",
          "params": {
            "actionButton": "right"
          }
        }
      ],
      "frame": [0, 0, Graphics.width, Graphics.height],
      "actions": [
        {
          "event": "onCancel",
          "name": "saveSettings",
          "params": {}
        }, {
          "event": "onCancel",
          "name": "previousLayout",
          "params": {}
        }
      ]
    }, {
      "type": "ui.BackButton",
      "frame": [Graphics.width - 170, Graphics.height - 65, 150, 45]
    }, {
      "type": "ui.TitledWindow",
      "frame": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X, 0, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W, Graphics.height],
      "params": {
        "title": {
          "lcId": "9EDC6A1760DE464C3469A5B77772305ACB56",
          "defaultText": "Audio Settings"
        }
      }
    }, {
      "type": "ui.VerticalScrollView",
      "id": "settingsScrollView",
      "frame": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X, 45, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W, Graphics.height - 45 - 10],
      "params": {
        "dataField": 1,
        "template": {
          "type": "ui.StackLayout",
          "orientation": "vertical",
          "sizeToFit": true,
          "controls": [
            {
              "type": "ui.Text",
              "styles": ["windowCategoryUIText"],
              "margin": [10, 5, 0, 0],
              "text": {
                "lcId": "26260DB310D5D540721AF635B495750C03A5",
                "defaultText": "Audio"
              },
              "sizeToFit": true,
              "frame": [0, 0]
            }, {
              "type": "ui.StackLayout",
              "orientation": "vertical",
              "margin": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W, 0, 0, 0],
              "sizeToFit": true,
              "id": "volumeControl",
              "controls": [
                {
                  "type": "ui.SettingsMenuSlider",
                  "params": {
                    "id": "bgmVolume",
                    "label": {
                      "lcId": "DBE389A484EE65464E583082C1A3A9410B6C",
                      "defaultText": "Music"
                    },
                    "write": $(function(v) {
                      return $dataFields.settings.bgmVolume = v;
                    }),
                    "read": $(function() {
                      return $dataFields.settings.bgmVolume;
                    })
                  }
                }, {
                  "type": "ui.SettingsMenuSlider",
                  "params": {
                    "id": "seVolume",
                    "label": {
                      "lcId": "64F490CD4547394ADA4B4D67693D24289F4B",
                      "defaultText": "Sound Effects"
                    },
                    "write": $(function(v) {
                      return $dataFields.settings.seVolume = v;
                    }),
                    "read": $(function() {
                      return $dataFields.settings.seVolume;
                    })
                  }
                }, {
                  "type": "ui.SettingsMenuSlider",
                  "params": {
                    "id": "voiceVolume",
                    "label": {
                      "lcId": "4BA0665E3B4D05412D4B81373A88DB3543EB",
                      "defaultText": "Voice"
                    },
                    "write": $(function(v) {
                      return $dataFields.settings.voiceVolume = v;
                    }),
                    "read": $(function() {
                      return $dataFields.settings.voiceVolume;
                    })
                  }
                }
              ]
            }, {
              "type": "ui.Text",
              "styles": ["windowCategoryUIText"],
              "margin": [10, 5, 0, 0],
              "text": {
                "lcId": "DD4C5C8987E8B7493A2B4139B342CA461DC9",
                "defaultText": "Voices"
              },
              "sizeToFit": true,
              "frame": [0, 0]
            }, {
              "type": "ui.StackLayout",
              "orientation": "vertical",
              "margin": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W, 0, 0, 0],
              "sizeToFit": true,
              "dataField": $(function() {
                return $dataFields.database.charactersArray;
              }),
              "template": {
                "type": "ui.StackLayout",
                "orientation": "vertical",
                "sizeToFit": true,
                "controls": [
                  {
                    "type": "ui.Text",
                    "frame": [0, 0],
                    "sizeToFit": true,
                    "text": "Anna",
                    "styles": ["regularUIText"],
                    "margin": [10, 0, 0, 0],
                    "formulas": [
                      $(function() {
                        return o.text = lcs($dataFields.database.charactersArray[o.parent.index].name);
                      })
                    ]
                  }, {
                    "type": "ui.Slider",
                    "margin": [10, 0, 0, 0],
                    "frame": [100, 0, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_W - gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W - 30, gs.UIConstants.OPTION_BUTTON_H],
                    "params": {
                      "actions": [],
                      "max": 100,
                      "write": $(function(v) {
                        return $dataFields.settings.voicesByCharacter[$dataFields.database.charactersArray[o.parent.parent.index].index] = v;
                      }),
                      "read": $(function() {
                        return $dataFields.settings.voicesByCharacter[$dataFields.database.charactersArray[o.parent.parent.index].index];
                      })
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }, {
      "type": "ui.Panel",
      "frame": [gs.UIConstants.LAYOUT_SETTINGS_WINDOW_X, 45, gs.UIConstants.LAYOUT_SETTINGS_WINDOW_LABEL_W, Graphics.height - 45],
      "style": "windowSubPanel"
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQXJCLEdBQXFDO0VBQ2pDLE1BQUEsRUFBUSxlQUR5QjtFQUVqQyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVEsQ0FBQyxLQUFoQixFQUF1QixRQUFRLENBQUMsTUFBaEMsQ0FGd0I7RUFHakMsU0FBQSxFQUFXO0lBQUUsUUFBQSxFQUFVO01BQUM7UUFBQSxJQUFBLEVBQU0sQ0FBQSxDQUFFLFNBQUE7aUJBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQTNDLElBQW1EO1FBQXRELENBQUYsQ0FBTjtPQUFEO0tBQVo7R0FIc0I7RUFJakMsVUFBQSxFQUFZO0lBQ1I7TUFDSSxNQUFBLEVBQVEsVUFEWjtNQUVJLHNCQUFBLEVBQXdCLElBRjVCO01BR0ksT0FBQSxFQUFTLFNBQUE7ZUFBRyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBM0MsSUFBaUQ7TUFBcEQsQ0FIYjtNQUlJLFlBQUEsRUFBYztRQUFDO1VBQUUsTUFBQSxFQUFRLDJCQUFWO1VBQXVDLFFBQUEsRUFBVTtZQUFFLGNBQUEsRUFBZ0IsT0FBbEI7V0FBakQ7U0FBRDtPQUpsQjtNQUtJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUSxDQUFDLEtBQWhCLEVBQXVCLFFBQVEsQ0FBQyxNQUFoQyxDQUxiO01BTUksU0FBQSxFQUFXO1FBQ1A7VUFBRSxPQUFBLEVBQVMsVUFBWDtVQUF1QixNQUFBLEVBQVEsY0FBL0I7VUFBK0MsUUFBQSxFQUFVLEVBQXpEO1NBRE8sRUFFUDtVQUFFLE9BQUEsRUFBUyxVQUFYO1VBQXVCLE1BQUEsRUFBUSxnQkFBL0I7VUFBaUQsUUFBQSxFQUFVLEVBQTNEO1NBRk87T0FOZjtLQURRLEVBWVI7TUFD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Q0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFoQixDQUFzQixDQUFDLEtBQTVEO3NCQUExQyxDQUFGLENBQXpLO3FCQUpkO21CQVZRO2lCQUpKO2VBTmhCO2FBN0JRO1dBSko7U0FGTjtPQVRkO0tBMUJRLEVBdUdSO01BQ0ksTUFBQSxFQUFRLFVBRFo7TUFFSSxPQUFBLEVBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLHdCQUFoQixFQUEwQyxFQUExQyxFQUE4QyxFQUFFLENBQUMsV0FBVyxDQUFDLDhCQUE3RCxFQUE2RixRQUFRLENBQUMsTUFBVCxHQUFrQixFQUEvRyxDQUZiO01BR0ksT0FBQSxFQUFTLGdCQUhiO0tBdkdRO0dBSnFCIiwic291cmNlc0NvbnRlbnQiOlsidWkuVWlGYWN0b3J5LmxheW91dHMuc2V0dGluZ3NBdWRpbyA9IHtcbiAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgXCJmcmFtZVwiOiBbMCwgMCwgR3JhcGhpY3Mud2lkdGgsIEdyYXBoaWNzLmhlaWdodF0sXG4gICAgXCJwcmVsb2FkXCI6IHsgZ3JhcGhpY3M6IFtuYW1lOiAkIC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51QmFja2dyb3VuZC5uYW1lIG9yICdiZy1nZW5lcmljJ10gfSxcbiAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuSW1hZ2VcIixcbiAgICAgICAgICAgIFwiZXhlY3V0ZUZpZWxkRm9ybXVsYXNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVCYWNrZ3JvdW5kLm5hbWV8fCdiZy1nZW5lcmljJyxcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBbeyBcInR5cGVcIjogXCJDb21wb25lbnRfSG90c3BvdEJlaGF2aW9yXCIsIFwicGFyYW1zXCI6IHsgXCJhY3Rpb25CdXR0b25cIjogXCJyaWdodFwiIH0gfV0sXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBHcmFwaGljcy53aWR0aCwgR3JhcGhpY3MuaGVpZ2h0XSxcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgeyBcImV2ZW50XCI6IFwib25DYW5jZWxcIiwgXCJuYW1lXCI6IFwic2F2ZVNldHRpbmdzXCIsIFwicGFyYW1zXCI6IHsgfSB9LFxuICAgICAgICAgICAgICAgIHsgXCJldmVudFwiOiBcIm9uQ2FuY2VsXCIsIFwibmFtZVwiOiBcInByZXZpb3VzTGF5b3V0XCIsIFwicGFyYW1zXCI6IHsgfSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkJhY2tCdXR0b25cIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogW0dyYXBoaWNzLndpZHRoIC0gMTcwLCBHcmFwaGljcy5oZWlnaHQgLSA2NSwgMTUwLCA0NV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGl0bGVkV2luZG93XCIsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFtcbiAgICAgICAgICAgICAgICBncy5VSUNvbnN0YW50cy5MQVlPVVRfU0VUVElOR1NfV0lORE9XX1gsIFxuICAgICAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgICAgIGdzLlVJQ29uc3RhbnRzLkxBWU9VVF9TRVRUSU5HU19XSU5ET1dfVywgXG4gICAgICAgICAgICAgICAgR3JhcGhpY3MuaGVpZ2h0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJwYXJhbXNcIjogeyBcInRpdGxlXCI6IHsgXCJsY0lkXCI6IFwiOUVEQzZBMTc2MERFNDY0QzM0NjlBNUI3Nzc3MjMwNUFDQjU2XCIsIFwiZGVmYXVsdFRleHRcIjogXCJBdWRpbyBTZXR0aW5nc1wiIH0gfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5WZXJ0aWNhbFNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJzZXR0aW5nc1Njcm9sbFZpZXdcIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICAgICAgICAgIGdzLlVJQ29uc3RhbnRzLkxBWU9VVF9TRVRUSU5HU19XSU5ET1dfWCwgXG4gICAgICAgICAgICAgICAgNDUsIFxuICAgICAgICAgICAgICAgIGdzLlVJQ29uc3RhbnRzLkxBWU9VVF9TRVRUSU5HU19XSU5ET1dfVywgXG4gICAgICAgICAgICAgICAgR3JhcGhpY3MuaGVpZ2h0IC0gNDUgLSAxMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICBcImRhdGFGaWVsZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9yaWVudGF0aW9uXCI6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVzXCI6IFtcIndpbmRvd0NhdGVnb3J5VUlUZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFsxMCwgNSwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHsgXCJsY0lkXCI6IFwiMjYyNjBEQjMxMEQ1RDU0MDcyMUFGNjM1QjQ5NTc1MEMwM0E1XCIsIFwiZGVmYXVsdFRleHRcIjogXCJBdWRpb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZW50YXRpb25cIjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFtncy5VSUNvbnN0YW50cy5MQVlPVVRfU0VUVElOR1NfV0lORE9XX0xBQkVMX1csIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcInZvbHVtZUNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcInR5cGVcIjogXCJ1aS5TZXR0aW5nc01lbnVTbGlkZXJcIiwgXCJwYXJhbXNcIjogeyBcImlkXCI6IFwiYmdtVm9sdW1lXCIsIFwibGFiZWxcIjogeyBcImxjSWRcIjogXCJEQkUzODlBNDg0RUU2NTQ2NEU1ODMwODJDMUEzQTk0MTBCNkNcIiwgXCJkZWZhdWx0VGV4dFwiOiBcIk11c2ljXCIgfSwgXCJ3cml0ZVwiOiAoJCAodikgLT4gJGRhdGFGaWVsZHMuc2V0dGluZ3MuYmdtVm9sdW1lID0gdiksIFwicmVhZFwiOiAoJCAtPiAkZGF0YUZpZWxkcy5zZXR0aW5ncy5iZ21Wb2x1bWUpIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcInVpLlNldHRpbmdzTWVudVNsaWRlclwiLCBcInBhcmFtc1wiOiB7IFwiaWRcIjogXCJzZVZvbHVtZVwiLCAgXCJsYWJlbFwiOiB7IFwibGNJZFwiOiBcIjY0RjQ5MENENDU0NzM5NEFEQTRCNEQ2NzY5M0QyNDI4OUY0QlwiLCBcImRlZmF1bHRUZXh0XCI6IFwiU291bmQgRWZmZWN0c1wiIH0sIFwid3JpdGVcIjogKCQgKHYpIC0+ICRkYXRhRmllbGRzLnNldHRpbmdzLnNlVm9sdW1lID0gdiksIFwicmVhZFwiOiAoJCAtPiAkZGF0YUZpZWxkcy5zZXR0aW5ncy5zZVZvbHVtZSkgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJ0eXBlXCI6IFwidWkuU2V0dGluZ3NNZW51U2xpZGVyXCIsIFwicGFyYW1zXCI6IHsgXCJpZFwiOiBcInZvaWNlVm9sdW1lXCIsIFwibGFiZWxcIjogeyBcImxjSWRcIjogXCI0QkEwNjY1RTNCNEQwNTQxMkQ0QjgxMzczQTg4REIzNTQzRUJcIiwgXCJkZWZhdWx0VGV4dFwiOiBcIlZvaWNlXCIgfSwgXCJ3cml0ZVwiOiAoJCAodikgLT4gJGRhdGFGaWVsZHMuc2V0dGluZ3Mudm9pY2VWb2x1bWUgPSB2KSwgXCJyZWFkXCI6ICgkIC0+ICRkYXRhRmllbGRzLnNldHRpbmdzLnZvaWNlVm9sdW1lKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlc1wiOiBbXCJ3aW5kb3dDYXRlZ29yeVVJVGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbMTAsIDUsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiB7IFwibGNJZFwiOiBcIkRENEM1Qzg5ODdFOEI3NDkzQTJCNDEzOUIzNDJDQTQ2MURDOVwiLCBcImRlZmF1bHRUZXh0XCI6IFwiVm9pY2VzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmllbnRhdGlvblwiOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogW2dzLlVJQ29uc3RhbnRzLkxBWU9VVF9TRVRUSU5HU19XSU5ET1dfTEFCRUxfVywgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFGaWVsZFwiOiAoJCAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5jaGFyYWN0ZXJzQXJyYXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5TdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWVudGF0aW9uXCI6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQW5uYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVzXCI6IFtcInJlZ3VsYXJVSVRleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogWzEwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm11bGFzXCI6IFskIC0+IG8udGV4dCA9IGxjcygkZGF0YUZpZWxkcy5kYXRhYmFzZS5jaGFyYWN0ZXJzQXJyYXlbby5wYXJlbnQuaW5kZXhdLm5hbWUpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlNsaWRlclwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbMTAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzEwMCwgMCwgZ3MuVUlDb25zdGFudHMuTEFZT1VUX1NFVFRJTkdTX1dJTkRPV19XIC0gZ3MuVUlDb25zdGFudHMuTEFZT1VUX1NFVFRJTkdTX1dJTkRPV19MQUJFTF9XIC0gMzAsIGdzLlVJQ29uc3RhbnRzLk9QVElPTl9CVVRUT05fSF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHsgXCJhY3Rpb25zXCI6IFtdLCBcIm1heFwiOiAxMDAsIFwid3JpdGVcIjogKCQgKHYpIC0+ICRkYXRhRmllbGRzLnNldHRpbmdzLnZvaWNlc0J5Q2hhcmFjdGVyWyRkYXRhRmllbGRzLmRhdGFiYXNlLmNoYXJhY3RlcnNBcnJheVtvLnBhcmVudC5wYXJlbnQuaW5kZXhdLmluZGV4XSA9IHYpLCBcInJlYWRcIjogKCQgLT4gJGRhdGFGaWVsZHMuc2V0dGluZ3Mudm9pY2VzQnlDaGFyYWN0ZXJbJGRhdGFGaWVsZHMuZGF0YWJhc2UuY2hhcmFjdGVyc0FycmF5W28ucGFyZW50LnBhcmVudC5pbmRleF0uaW5kZXhdKSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5QYW5lbFwiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbZ3MuVUlDb25zdGFudHMuTEFZT1VUX1NFVFRJTkdTX1dJTkRPV19YLCA0NSwgZ3MuVUlDb25zdGFudHMuTEFZT1VUX1NFVFRJTkdTX1dJTkRPV19MQUJFTF9XLCBHcmFwaGljcy5oZWlnaHQgLSA0NV0sXG4gICAgICAgICAgICBcInN0eWxlXCI6IFwid2luZG93U3ViUGFuZWxcIlxuICAgICAgICB9XG4gICAgXVxufSJdfQ==
//# sourceURL=Layout_SettingsAudio_50.js