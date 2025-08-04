Hooks.once('pbtaSheetConfig', () => {
  console.log('Spirit of 77 | Configuring PbtA system for Spirit of 77');
  
  // Disable the sheet config form since we're providing our own
  game.settings.set('pbta', 'sheetConfigOverride', true);
  
  // Clear any existing configuration
  game.pbta.sheetConfig = null;
  
  // Configure the PbtA system for Spirit of '77
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
            "value": 0,
            "toggle": false
          },
          "hustle": {
            "label": "Hustle", 
            "value": 0,
            "toggle": false
          },
          "brains": {
            "label": "Brains",
            "value": 0,
            "toggle": false
          },
          "smooth": {
            "label": "Smooth",
            "value": 0,
            "toggle": false
          },
          "soul": {
            "label": "Soul",
            "value": 0,
            "toggle": false
          }
        },
        "attrTop": {
          "role": {
            "label": "Role",
            "description": "Your character's occupation or archetype",
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "story": {
            "label": "Story", 
            "description": "Your character's background or special nature",
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "buzz": {
            "label": "Buzz",
            "description": "Your character's motivation (one word)",
            "customLabel": false,
            "userLabel": false,
            "type": "Text",
            "value": ""
          },
          "harm": {
            "label": "Harm",
            "description": "Physical damage and injury (0-8 wound levels)",
            "customLabel": false,
            "userLabel": false,
            "type": "Resource",
            "value": 0,
            "max": 8
          },
          "stress": {
            "label": "Stress",
            "description": "Mental and emotional pressure",
            "customLabel": false,
            "userLabel": false,
            "type": "Clock",
            "value": 0,
            "max": 5,
            "steps": [false, false, false, false, false]
          }
        },
        "attrLeft": {
          "hook": {
            "label": "Hook",
            "description": "Connection to other characters",
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "thang": {
            "label": "Thang", 
            "description": "Your signature item or companion",
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "harmLevels": {
            "label": "Wound Levels",
            "description": "Track specific wound conditions",
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": "0: Healthy\n1: Bruised\n2: Bloodied\n3: Bruised and Bloodied\n4: Broken (Something Less)\n5: Down (bleeding out)\n6: Dying\n7: Dead\n8: Destroyed"
          },
          "notes": {
            "label": "Notes",
            "description": "Additional character details",
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          }
        },
        "moveTypes": {
          "basic": {
            "label": "Basic Moves",
            "moves": []
          },
          "role": {
            "label": "Role Moves", 
            "moves": []
          },
          "story": {
            "label": "Story Moves",
            "moves": []
          }
        },
        "equipmentTypes": {
          "gear": {
            "label": "Gear",
            "moves": []
          }
        }
      },
      "npc": {
        "attrTop": {
          "harm": {
            "label": "Harm",
            "description": "NPCs typically have 5 wound levels",
            "customLabel": false,
            "userLabel": false,
            "type": "Resource",
            "value": 0,
            "max": 5
          }
        },
        "attrLeft": {
          "description": {
            "label": "Description",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          },
          "threat": {
            "label": "Threat Type",
            "description": null,
            "customLabel": false,
            "userLabel": false,
            "type": "LongText",
            "value": ""
          }
        },
        "moveTypes": {
          "gm": {
            "label": "GM Moves",
            "moves": []
          }
        }
      }
    }
  };
  
  // Force refresh any open sheets
  game.actors.forEach(actor => {
    if (actor.sheet.rendered) {
      actor.sheet.render(true);
    }
  });
  
  console.log('Spirit of 77 | Configuration complete');
});
/**
 * Spirit of '77 Module for PbtA System
 * 
 * Built on the PbtA system by asacolips-projects
 * https://github.com/asacolips-projects/pbta
 * 
 * Implementation patterns inspired by Monsters of the Week module by Rangertheman
 * https://github.com/Rangertheman/motw-for-pbta
 * 
 * Licensed under MIT License
 */
