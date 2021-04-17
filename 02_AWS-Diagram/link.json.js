let list = [
  {
    "OBJECT": "NONE",
      "TYPE": "INIT",
      "MaxLayer": 10,
      "BaseWidth": 2,
      "CellWidth": 20,
      "OFFICE" : ["office.png",     "#000000","0.1","#000000","HEAD"],
      "VPC" : ["vpc.png",           "none"   ,"0.0","#000000","HEAD"],
      "AZ"  : ["az.png",            "none"   ,"0.0","#5b9cd5","HEAD"],
      "PUB" : ["subnet-public.png", "#1f860f","0.2","#1f860f","HEAD"],
      "PRI" : ["subnet-private.png","#147eba","0.2","#147eba","HEAD"],
      "ALB" : ["alb.png",           "#d86613","0.3","#d86613","CENTER"],
      "SG"  : ["sg.png",            "none"   ,"0.0","#df3312","HEAD"],
      "EC2" : ["ec2.png",           "none"   ,"0.3","none","CENTER"],
      "CW" : ["cw.png",           "none"   ,"0.3","none","CENTER"],
      "SNS" : ["sns.png",           "none"   ,"0.3","none","CENTER"],
      "S3"  : ["s3.png",           "#000000" ,"0.5","none","CENTER"],
      "RDS" : ["rds.png",           "none"   ,"0.3","none","CENTER"],
      "USERS":["users.png",         "none"   ,"0.3","none","CENTER"],
      "PC":["pc.png",               "#000000","0.5","none","CENTER"],
      "ALARM":["alarm.png",         "none","0.5","none","CENTER"],
  },

  {"OBJECT": "USERS","TYPE": "FIG",    "SET": "USERS","LAYER": 1,"TopX": "1","TopY": "1","BtmX": "1","BtmY": "2","Width" : 0,"Height": 0,},

  {"OBJECT": "VPC-1", "TYPE": "FIG", "SET": "VPC","LAYER": 5,"TopX": "2","TopY": "1","BtmX": "4","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "AZ-1",  "TYPE": "FIG", "SET": "AZ","LAYER": 4,"TopX": "2","TopY": "1","BtmX": "4","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "AZ-2",  "TYPE": "FIG", "SET": "AZ","LAYER": 4,"TopX": "2","TopY": "2","BtmX": "4","BtmY": "2","Width" : 0,"Height": 0,},

  {"OBJECT": "Subnet-01","TYPE": "FIG", "SET": "PUB","LAYER": 3,"TopX": "2","TopY": "1","BtmX": "2","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-02","TYPE": "FIG", "SET": "PUB","LAYER": 3,"TopX": "2","TopY": "2","BtmX": "2","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-11","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "3","TopY": "1","BtmX": "3","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-12","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "3","TopY": "2","BtmX": "3","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-21","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "4","TopY": "1","BtmX": "4","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-22","TYPE": "FIG", "SET": "PRI","LAYER": 3,"TopX": "4","TopY": "2","BtmX": "4","BtmY": "2","Width" : 0,"Height": 0,},
  
  {"OBJECT": "ALB-01","TYPE": "FIG",    "SET": "ALB","LAYER": 1,"TopX": "2","TopY": "1","BtmX": "2","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "SG-01","TYPE": "FIG",     "SET": "SG","LAYER": 2,"TopX": "2","TopY": "1","BtmX": "2","BtmY": "2","Width" : 0,"Height": 0,},

  {"OBJECT": "S3-01","TYPE": "FIG",    "SET": "S3","LAYER": 1,"TopX": "2","TopY": "3","BtmX": "2","BtmY": "3","Width" : 0,"Height": 0,},



  {"OBJECT": "EC2-11","TYPE": "FIG",    "SET": "EC2","LAYER": 1,"TopX": "3","TopY": "1","BtmX": "3","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "EC2-12","TYPE": "FIG",    "SET": "EC2","LAYER": 1,"TopX": "3","TopY": "2","BtmX": "3","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "SG-11","TYPE": "FIG",     "SET": "SG","LAYER": 2,"TopX": "3","TopY": "1","BtmX": "3","BtmY": "2","Width" : 0,"Height": 0,},

  {"OBJECT": "CW-11","TYPE": "FIG",    "SET": "CW","LAYER": 1,"TopX": "3","TopY": "3","BtmX": "3","BtmY": "3","Width" : 0,"Height": 0,},


  {"OBJECT": "RDS-21","TYPE": "FIG", "SET": "RDS","LAYER": 1,"TopX": "4","TopY": "1","BtmX": "4","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "RDS-22","TYPE": "FIG", "SET": "RDS","LAYER": 1,"TopX": "4","TopY": "2","BtmX": "4","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "SG-21", "TYPE": "FIG", "SET": "SG","LAYER": 2,"TopX": "4","TopY": "1","BtmX": "4","BtmY": "2","Width" : 0,"Height": 0,},

  {"OBJECT": "ALARM-01","TYPE": "FIG",    "SET": "ALARM","LAYER": 1,"TopX": "4","TopY": "3","BtmX": "4","BtmY": "3","Width" : 0,"Height": 0,},
  {"OBJECT": "SNS-01","TYPE": "FIG",    "SET": "SNS","LAYER": 1,"TopX": "5","TopY": "3","BtmX": "5","BtmY": "3","Width" : 0,"Height": 0,},


  {"OBJECT": "VPC-2", "TYPE": "FIG", "SET": "VPC","LAYER": 5,"TopX": "5","TopY": "1","BtmX": "5","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "Subnet-31","TYPE": "FIG", "SET": "PUB","LAYER": 3,"TopX": "5","TopY": "1","BtmX": "5","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "EC2-31","TYPE": "FIG",    "SET": "EC2","LAYER": 1,"TopX": "5","TopY": "1","BtmX": "5","BtmY": "1","Width" : 0,"Height": 0,},
  {"OBJECT": "SG-31","TYPE": "FIG",     "SET": "SG","LAYER": 2,"TopX": "5","TopY": "1","BtmX": "5","BtmY": "1","Width" : 0,"Height": 0,},

  {"OBJECT": "OFFICE","TYPE": "FIG", "SET": "OFFICE","LAYER": 5,"TopX": "6","TopY": "1","BtmX": "6","BtmY": "2","Width" : 0,"Height": 0,},
  {"OBJECT": "PC-01","TYPE": "FIG",  "SET": "PC","LAYER": 1,"TopX": "6","TopY": "1","BtmX": "6","BtmY": "1","Width" : 0,"Height": 0,},


  {"TYPE": "LINE","OBJECT": "LINE-A1","LINE": ["ALB-01","EC2-11","RDS-21"],},
  {"TYPE": "LINE","OBJECT": "LINE-A2","LINE": ["ALB-01","EC2-12","RDS-21"],},
  {"TYPE": "LINE","OBJECT": "LINE-B1","LINE": ["RDS-21","RDS-22"],},
  {"TYPE": "LINE","OBJECT": "LINE-A0","LINE": ["USERS","ALB-01"],},

  {"TYPE": "LINE","OBJECT": "LINE-M0","LINE": ["PC-01","EC2-31","RDS-21"],},
  {"TYPE": "LINE","OBJECT": "LINE-M1","LINE": ["EC2-31","RDS-22"],},
  {"TYPE": "LINE","OBJECT": "LINE-M2","LINE": ["EC2-31","EC2-11"],},
  {"TYPE": "LINE","OBJECT": "LINE-M3","LINE": ["EC2-31","EC2-12"],},

  {"TYPE": "LINE","OBJECT": "LOG-01","LINE": ["ALB-01","S3-01"],},
  {"TYPE": "LINE","OBJECT": "LOG-02","LINE": ["EC2-11","CW-11","S3-01"],},
  {"TYPE": "LINE","OBJECT": "LOG-03","LINE": ["EC2-12","CW-11"],},
  {"TYPE": "LINE","OBJECT": "LOG-04","LINE": ["RDS-21","CW-11"],},
  {"TYPE": "LINE","OBJECT": "ALARM-01","LINE": ["CW-11","ALARM-01","SNS-01","PC-01"],},


  {"TYPE": "LINE-GRP","LAVEL": "処理経路","STROKE": "#000080","LINES": ["LINE-A0","LINE-A1","LINE-A2"],},
  {"TYPE": "LINE-GRP","LAVEL": "冗長化","STROKE": "#800000","LINES": ["LINE-B1"],},
  {"TYPE": "LINE-GRP","LAVEL": "管理経路","STROKE": "#800000","LINES": ["LINE-M0","LINE-M1","LINE-M2","LINE-M3"],},
  {"TYPE": "LINE-GRP","LAVEL": "ログ収集","STROKE": "#800000","LINES": ["LOG-01","LOG-02","LOG-03","LOG-04"],},
  {"TYPE": "LINE-GRP","LAVEL": "障害通知","STROKE": "#800000","LINES": ["ALARM-01"],},

];
