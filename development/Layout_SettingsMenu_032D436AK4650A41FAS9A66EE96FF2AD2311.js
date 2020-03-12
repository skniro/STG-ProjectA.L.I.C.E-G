ui.UiFactory.layouts.settingsMenuLayout = {
  "type": "ui.FreeLayout",
  "frame": [0, 0, Graphics.width, Graphics.height],
  "preload": {
    graphics: [
      {
        name: $(function() {
          return $dataFields.database.system.menuBackground.name || 'bg-generic';
        })
      }
    ],
    "sounds": [
      {
        "name": $(function() {
          var ref;
          return (ref = $dataFields.database.system.menuSelectSound) != null ? ref.name : void 0;
        })
      }
    ]
  },
  "controls": [
    {
      "executeFieldFormulas": true,
      "type": "ui.Image",
      "image": function() {
        return $dataFields.database.system.menuBackground.name || 'bg-generic';
      },
      "frame": [0, 0, Graphics.width, Graphics.height]
    }, {
      "type": "ui.StackLayout",
      "orientation": "vertical",
      "sizeToFit": true,
      "alignmentX": "center",
      "alignmentY": "center",
      "controls": [
        {
          "type": "ui.Button",
          "params": {
            "text": {
              "lcId": "149D0E4B8AF8574E5A8BF574FD9A9590B69A",
              "defaultText": "General"
            },
            "action": {
              "name": "switchLayout",
              "params": {
                "name": "settingsGeneral",
                "savePrevious": true
              }
            }
          },
          "frame": [0, 0, 300, 55],
          "margin": [0, 0, 0, 20]
        }, {
          "type": "ui.Button",
          "id": "message",
          "params": {
            "text": {
              "lcId": "6683560332F9274AEE1B5D96FCA020F57DDE",
              "defaultText": "Message"
            },
            "action": {
              "event": "onMouseClick",
              "name": "switchLayout",
              "params": {
                "name": "settingsMessage",
                "savePrevious": true
              }
            }
          },
          "frame": [0, 0, 300, 55],
          "margin": [0, 0, 0, 20]
        }, {
          "type": "ui.Button",
          "params": {
            "text": {
              "lcId": "92FDB732611153400B595AD7D92206CDC592",
              "defaultText": "Audio"
            },
            "action": {
              "event": "onMouseClick",
              "name": "switchLayout",
              "params": {
                "name": "settingsAudio",
                "savePrevious": true
              }
            }
          },
          "frame": [0, 0, 300, 55],
          "margin": [0, 0, 0, 20]
        }, {
          "type": "ui.Button",
          "formulas": [
            $(function() {
              return o.visible = $tempFields.inGame;
            })
          ],
          "params": {
            "text": {
              "lcId": "A6EE5D6732DD454DDE988B569929C5F2DA62",
              "defaultText": "Back to Title"
            },
            "action": {
              "name": "createControl",
              "params": {
                "descriptor": {
                  "id": "confirmationDialog",
                  "type": "ui.ConfirmationDialog",
                  "zIndex": 90000,
                  "params": {
                    "message": {
                      "lcId": "ABC85CC3669B83481309BDF44B98EF11B59B",
                      "defaultText": "Do you really want to exit?"
                    },
                    "acceptActions": [
                      {
                        "name": "exitGame"
                      }, {
                        "name": "switchLayout",
                        "params": {
                          "name": "titleLayout",
                          "clear": true
                        }
                      }
                    ],
                    "rejectActions": [
                      {
                        "name": "disposeControl",
                        "params": $(function() {
                          return 'confirmationDialog';
                        })
                      }
                    ]
                  }
                }
              }
            }
          },
          "frame": [0, 0, 300, 55],
          "margin": [0, 0, 0, 20]
        }
      ]
    }, {
      "type": "ui.BackButton",
      "frame": [Graphics.width - 170, Graphics.height - 65, 150, 45]
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFyQixHQUEwQztFQUN0QyxNQUFBLEVBQVEsZUFEOEI7RUFFdEMsT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFRLENBQUMsS0FBaEIsRUFBdUIsUUFBUSxDQUFDLE1BQWhDLENBRjZCO0VBR3RDLFNBQUEsRUFBVztJQUNQLFFBQUEsRUFBVTtNQUFDO1FBQUEsSUFBQSxFQUFNLENBQUEsQ0FBRSxTQUFBO2lCQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUEzQyxJQUFtRDtRQUF0RCxDQUFGLENBQU47T0FBRDtLQURIO0lBRVAsUUFBQSxFQUFVO01BQUM7UUFBRSxNQUFBLEVBQVEsQ0FBQSxDQUFFLFNBQUE7QUFBRyxjQUFBO2tGQUEyQyxDQUFFO1FBQWhELENBQUYsQ0FBVjtPQUFEO0tBRkg7R0FIMkI7RUFPdEMsVUFBQSxFQUFZO0lBQ1I7TUFDSSxzQkFBQSxFQUF3QixJQUQ1QjtNQUVJLE1BQUEsRUFBUSxVQUZaO01BR0ksT0FBQSxFQUFTLFNBQUE7ZUFBRyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBM0MsSUFBbUQ7TUFBdEQsQ0FIYjtNQUlJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUSxDQUFDLEtBQWhCLEVBQXVCLFFBQVEsQ0FBQyxNQUFoQyxDQUpiO0tBRFEsRUFPUjtNQUNJLE1BQUEsRUFBUSxnQkFEWjtNQUVJLGFBQUEsRUFBZSxVQUZuQjtNQUdJLFdBQUEsRUFBYSxJQUhqQjtNQUlJLFlBQUEsRUFBYyxRQUpsQjtNQUtJLFlBQUEsRUFBYyxRQUxsQjtNQU1JLFVBQUEsRUFBWTtRQUNSO1VBQ0ksTUFBQSxFQUFRLFdBRFo7VUFFSSxRQUFBLEVBQVU7WUFBRSxNQUFB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QU8sR0FBUCxFQUFZLEVBQVosQ0FmYjtVQWdCSSxRQUFBLEVBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxFQUFWLENBaEJkO1NBcEJRO09BTmhCO0tBUFEsRUFxRFI7TUFDSSxNQUFBLEVBQVEsZUFEWjtNQUVJLE9BQUEsRUFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFULEdBQWlCLEdBQWxCLEVBQXVCLFFBQVEsQ0FBQyxNQUFULEdBQWtCLEVBQXpDLEVBQTZDLEdBQTdDLEVBQWtELEVBQWxELENBRmI7S0FyRFE7R0FQMEIiLCJzb3VyY2VzQ29udGVudCI6WyJ1aS5VaUZhY3RvcnkubGF5b3V0cy5zZXR0aW5nc01lbnVMYXlvdXQgPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdLFxuICAgIFwicHJlbG9hZFwiOiB7IFxuICAgICAgICBncmFwaGljczogW25hbWU6ICQgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVCYWNrZ3JvdW5kLm5hbWUgb3IgJ2JnLWdlbmVyaWMnXSxcbiAgICAgICAgXCJzb3VuZHNcIjogW3sgXCJuYW1lXCI6ICQgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2Uuc3lzdGVtLm1lbnVTZWxlY3RTb3VuZD8ubmFtZSB9XVxuICAgIH0sXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZXhlY3V0ZUZpZWxkRm9ybXVsYXNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkltYWdlXCIsXG4gICAgICAgICAgICBcImltYWdlXCI6IC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51QmFja2dyb3VuZC5uYW1lIG9yICdiZy1nZW5lcmljJyxcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBcIm9yaWVudGF0aW9uXCI6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICBcImFsaWdubWVudFhcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIFwiYWxpZ25tZW50WVwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5CdXR0b25cIiwgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwidGV4dFwiOiB7IFwibGNJZFwiOiBcIjE0OUQwRTRCOEFGODU3NEU1QThCRjU3NEZEOUE5NTkwQjY5QVwiLCBcImRlZmF1bHRUZXh0XCI6IFwiR2VuZXJhbFwiIH0sIFwiYWN0aW9uXCI6IHsgXCJuYW1lXCI6IFwic3dpdGNoTGF5b3V0XCIsIFwicGFyYW1zXCI6IHsgXCJuYW1lXCI6IFwic2V0dGluZ3NHZW5lcmFsXCIsIFwic2F2ZVByZXZpb3VzXCI6IHRydWUgfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIDMwMCwgNTVdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbMCwgMCwgMCwgMjBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwidGV4dFwiOiB7IFwibGNJZFwiOiBcIjY2ODM1NjAzMzJGOTI3NEFFRTFCNUQ5NkZDQTAyMEY1N0RERVwiLCBcImRlZmF1bHRUZXh0XCI6IFwiTWVzc2FnZVwiIH0sIFwiYWN0aW9uXCI6IHsgXCJldmVudFwiOiBcIm9uTW91c2VDbGlja1wiLCBcIm5hbWVcIjogXCJzd2l0Y2hMYXlvdXRcIiwgXCJwYXJhbXNcIjogeyBcIm5hbWVcIjogXCJzZXR0aW5nc01lc3NhZ2VcIiwgXCJzYXZlUHJldmlvdXNcIjogdHJ1ZSB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMCwgMzAwLCA1NV0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luXCI6IFswLCAwLCAwLCAyMF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHsgXCJ0ZXh0XCI6IHsgXCJsY0lkXCI6IFwiOTJGREI3MzI2MTExNTM0MDBCNTk1QUQ3RDkyMjA2Q0RDNTkyXCIsIFwiZGVmYXVsdFRleHRcIjogXCJBdWRpb1wiIH0sIFwiYWN0aW9uXCI6IHsgXCJldmVudFwiOiBcIm9uTW91c2VDbGlja1wiLCBcIm5hbWVcIjogXCJzd2l0Y2hMYXlvdXRcIiwgXCJwYXJhbXNcIjogeyBcIm5hbWVcIjogXCJzZXR0aW5nc0F1ZGlvXCIsIFwic2F2ZVByZXZpb3VzXCI6IHRydWUgfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIDMwMCwgNTVdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBbMCwgMCwgMCwgMjBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvcm11bGFzXCI6IFskIC0+IG8udmlzaWJsZSA9ICR0ZW1wRmllbGRzLmluR2FtZV1cbiAgICAgICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiB7IFwibGNJZFwiOiBcIkE2RUU1RDY3MzJERDQ1NERERTk4OEI1Njk5MjlDNUYyREE2MlwiLCBcImRlZmF1bHRUZXh0XCI6IFwiQmFjayB0byBUaXRsZVwiIH0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogeyBcIm5hbWVcIjogXCJjcmVhdGVDb250cm9sXCIsIFwicGFyYW1zXCI6IHsgXCJkZXNjcmlwdG9yXCI6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImNvbmZpcm1hdGlvbkRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkNvbmZpcm1hdGlvbkRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiekluZGV4XCI6IDkwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiB7IFwibGNJZFwiOiBcIkFCQzg1Q0MzNjY5QjgzNDgxMzA5QkRGNDRCOThFRjExQjU5QlwiLCBcImRlZmF1bHRUZXh0XCI6IFwiRG8geW91IHJlYWxseSB3YW50IHRvIGV4aXQ/XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHRBY3Rpb25zXCI6IFt7XCJuYW1lXCI6XCJleGl0R2FtZVwifSx7XCJuYW1lXCI6IFwic3dpdGNoTGF5b3V0XCIsIFwicGFyYW1zXCI6IHsgXCJuYW1lXCI6IFwidGl0bGVMYXlvdXRcIiwgXCJjbGVhclwiOiB0cnVlIH0gfV0gLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWplY3RBY3Rpb25zXCI6IFt7XCJuYW1lXCI6XCJkaXNwb3NlQ29udHJvbFwiLFwicGFyYW1zXCI6KCQgLT4gJ2NvbmZpcm1hdGlvbkRpYWxvZycpfV19XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCAzMDAsIDU1XSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogWzAsIDAsIDAsIDIwXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuQmFja0J1dHRvblwiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbR3JhcGhpY3Mud2lkdGggLSAxNzAsIEdyYXBoaWNzLmhlaWdodCAtIDY1LCAxNTAsIDQ1XVxuICAgICAgICB9XG4gICAgXVxufSJdfQ==
//# sourceURL=Layout_SettingsMenu_64.js