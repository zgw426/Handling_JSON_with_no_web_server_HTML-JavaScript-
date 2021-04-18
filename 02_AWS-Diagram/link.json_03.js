let list = [
  {
    "OBJECT": "NONE",
      "TYPE": "INIT",
      "MaxLayer": 6,
      "BaseWidth": 2,
      "CellWidth": 20,
      "VPC" : ["vpc.png",           "none"   ,"0.0","#000000","HEAD"],
      "AZ"  : ["az.png",            "none"   ,"0.0","#5b9cd5","HEAD"],
      "PUB" : ["subnet-public.png", "#1f860f","0.2","#1f860f","HEAD"],
      "PRI" : ["subnet-private.png","#147eba","0.2","#147eba","HEAD"],
  },
  {"OBJECT": "Subnet-01","TYPE": "FIG", "SET": "PUB","LAYER": 3,"TopX": "2","TopY": "1","BtmX": "2","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-02","TYPE": "FIG", "SET": "PUB","LAYER": 3,"TopX": "2","TopY": "2","BtmX": "2","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-11","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "3","TopY": "1","BtmX": "3","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-12","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "3","TopY": "2","BtmX": "3","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-21","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "4","TopY": "1","BtmX": "4","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-22","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "4","TopY": "2","BtmX": "4","BtmY": "2","Width" : 0,"Height": 0,},
  {"TYPE": "LINE","OBJECT": "LINE-01","LINE": ["Subnet-01","Subnet-11","Subnet-21"],},
  {"TYPE": "LINE","OBJECT": "LINE-02","LINE": ["Subnet-01","Subnet-11","Subnet-21","Subnet-22","Subnet-12","Subnet-02","Subnet-01"],},
  {"TYPE": "LINE","OBJECT": "LINE-03","LINE": ["Subnet-01","Subnet-22"],},
  {"TYPE": "LINE","OBJECT": "LINE-04","LINE": ["Subnet-02","Subnet-21"],},
  {"TYPE": "LINE-GRP","LAVEL": "ライン（１）","STROKE": "#000080","LINES": ["LINE-01"],},
  {"TYPE": "LINE-GRP","LAVEL": "ライン（２）","STROKE": "#FF8FFF","LINES": ["LINE-02","LINE-03","LINE-04"],},
];
