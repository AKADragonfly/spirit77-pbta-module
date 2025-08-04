// Intercept the PbtA sheet configuration much earlier
Hooks.once('init', () => {
  console.log('Spirit of 77 | Intercepting PbtA init');
  
  // Override the PbtA template loading
  Hooks.once('pbtaSheetConfig', () => {
    console.log('Spirit of 77 | Configuring for Spirit of 77');
    
    // Disable the sheet config form
    game.settings.set('pbta', 'sheetConfigOverride', true);
    
    // Replace the entire configuration
    game.pbta.sheetConfig = {
      "rollFormula": "2d6",
      "statToggle": {
        "label": "Debuff",
        "modifier": -1
      },
      "rollResults": {
        "failure": {
          "start": null,
          "end": 6,
          "label": "Miss - GM makes a move"
        },
        "partial": {
          "start": 7,
          "end": 9,
          "label": "Partial Success"
        },
        "success": {
          "start": 10,
          "end": null,
          "label": "Success!"
        }
      },
      "actorTypes": {
        "character": {
          "stats": {
            "might": {
              "label": "Might",
              "value": 0
            },
            "hustle": {
              "label": "Hustle", 
              "value": 0
            },
            "brains": {
              "label": "Brains",
              "value": 0
            },
            "smooth": {
              "label": "Smooth",
              "value": 0
            },
            "soul": {
              "label": "Soul",
              "value": 0
            }
          },
          "attrTop": {
            "role": {
              "label": "Role",
              "description": "Your character's occupation",
              "customLabel": false,
              "userLabel": false,
              "type": "Text",
              "value": ""
            },
            "story": {
              "label": "Story", 
              "description": "Your character's background",
              "customLabel": false,
              "userLabel": false,
              "type": "Text",
              "value": ""
            },
            "buzz": {
              "label": "Buzz",
              "description": "Your character's motivation",
              "customLabel": false,
              "userLabel": false,
              "type": "Text", 
              "value": ""
            },
            "harm": {
              "label": "Harm",
              "description": "Wound levels (0-8)",
              "customLabel": false,
              "userLabel": false,
              "type": "Resource",
              "value": 0,
              "max": 8
            }
          },
          "attrLeft": {},
          "moveTypes": {
            "basic": {
              "label": "Basic Moves",
              "moves": []
            }
          },
          "equipmentTypes": {
            "gear": {
              "label": "Gear",
              "moves": []
            }
          }
        }
      }
    };
    
    console.log('Spirit of 77 | Complete configuration loaded');
  });
});
