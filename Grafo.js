let vs =[
    { id: 0 , cx: '472', cy: '233'}, 
    { id: 1 , cx: '69', cy: '445'},  
    { id: 2 , cx: '179', cy: '139'}, 
    { id: 3 , cx: '362', cy: '288'}, 
    { id: 4 , cx: '274', cy: '76'},  
    { id: 5 , cx: '263', cy: '348'}, 
    { id: 6 , cx: '122', cy: '169'}, 
    { id: 7 , cx: '416', cy: '505'}, 
    { id: 8 , cx: '452', cy: '92'},  
    { id: 9 , cx: '88', cy: '301'},  
    { id: 10 , cx: '230', cy: '248'},
    { id: 11 , cx: '311', cy: '395'},
    { id: 12 , cx: '380', cy: '186'},
    { id: 13 , cx: '158', cy: '461'},
    { id: 14 , cx: '47', cy: '30'},  
    { id: 15 , cx: '489', cy: '367'},
    { id: 16 , cx: '515', cy: '49'}, 
    { id: 17 , cx: '26', cy: '386'}, 
    { id: 18 , cx: '168', cy: '206'},
    { id: 19 , cx: '374', cy: '480'},
    { id: 20 , cx: '317', cy: '267'},
    { id: 21 , cx: '220', cy: '415'},
    { id: 22 , cx: '110', cy: '110'},
    { id: 23 , cx: '427', cy: '321'},
    { id: 24 , cx: '410', cy: '158'},
    { id: 25 , cx: '132', cy: '492'},
    { id: 26 , cx: '241', cy: '64'},
    { id: 27 , cx: '299', cy: '336'},
    { id: 28 , cx: '336', cy: '127'},
    { id: 29 , cx: '200', cy: '277'},
    { id: 30 , cx: '59', cy: '221'},
    { id: 31 , cx: '478', cy: '433'},
    ]
    
    let as =[
    { source: 0, target: 3, value: 122.98373876248843},
    { source: 0, target: 8, value: 142.41137595009747},
    { source: 0, target: 12, value: 103.31021246711285},
    { source: 0, target: 15, value: 135.07405376311175},
    { source: 0, target: 16, value: 188.95766721676048},
    { source: 0, target: 23, value: 98.8382517044894},
    { source: 0, target: 24, value: 97.30878685915265},
    { source: 1, target: 9, value: 145.24806367039804},
    { source: 1, target: 13, value: 90.4267659490264},
    { source: 1, target: 17, value: 73.00684899377592},
    { source: 1, target: 25, value: 78.60025445251433},
    { source: 2, target: 4, value: 113.9912277326637},
    { source: 2, target: 6, value: 64.41273166075166},
    { source: 2, target: 10, value: 120.34118164618461},
    { source: 2, target: 18, value: 67.89698078707183},
    { source: 2, target: 22, value: 74.84650960465692},
    { source: 2, target: 26, value: 97.30878685915265},
    { source: 2, target: 28, value: 157.45793088949188},
    { source: 3, target: 11, value: 118.53269591129698},
    { source: 3, target: 12, value: 103.57605900979242},
    { source: 3, target: 20, value: 49.658836071740545},
    { source: 3, target: 23, value: 72.89718787443039},
    { source: 3, target: 27, value: 79.20227269466452},
    { source: 4, target: 8, value: 178.71765441612084},
    { source: 4, target: 16, value: 242.5077318355025},
    { source: 4, target: 26, value: 35.11409973215888},
    { source: 4, target: 28, value: 80.2807573457052},
    { source: 5, target: 10, value: 105.30432089900205},
    { source: 5, target: 11, value: 67.17886572427373},
    { source: 5, target: 21, value: 79.61155694998057},
    { source: 5, target: 27, value: 37.94733192202055},
    { source: 5, target: 29, value: 94.92101980067429},
    { source: 6, target: 18, value: 59.033888572581766},
    { source: 6, target: 22, value: 60.207972893961475},
    { source: 6, target: 30, value: 81.68843247363729},
    { source: 7, target: 19, value: 48.877397639399746},
    { source: 7, target: 25, value: 284.29737951659},
    { source: 7, target: 31, value: 95.01578816175763},
    { source: 8, target: 16, value: 76.27581530209953},
    { source: 8, target: 24, value: 78.23042886243178},
    { source: 8, target: 28, value: 121.16517651536682},
    { source: 9, target: 13, value: 174.64249196572982},
    { source: 9, target: 17, value: 105.20931517693668},
    { source: 9, target: 18, value: 124.19742348374221},
    { source: 9, target: 21, value: 174.41330224498358},
    { source: 9, target: 29, value: 114.54256850621083},
    { source: 9, target: 30, value: 85.09406559801923},
    { source: 10, target: 18, value: 74.88658090739622},
    { source: 10, target: 20, value: 89.05054744357274},
    { source: 10, target: 27, value: 111.8257573191436},
    { source: 10, target: 28, value: 160.86329600005092},
    { source: 10, target: 29, value: 41.72529209005013},
    { source: 11, target: 19, value: 105.80170130957252},
    { source: 11, target: 21, value: 93.17188417113823},
    { source: 11, target: 23, value: 137.59360450253493},
    { source: 11, target: 27, value: 60.207972893961475},
    { source: 12, target: 20, value: 102.61578825892242},
    { source: 12, target: 24, value: 41.036569057366385},
    { source: 12, target: 28, value: 73.60027173862879},
    { source: 13, target: 19, value: 216.8340379184043},
    { source: 13, target: 21, value: 77.20103626247513},
    { source: 13, target: 25, value: 40.45985664828782},
    { source: 14, target: 16, value: 468.3855249684815},
    { source: 14, target: 17, value: 356.61884414595926},
    { source: 14, target: 22, value: 101.82828683622247},
    { source: 14, target: 26, value: 196.95684806576287},
    { source: 14, target: 30, value: 191.3765920900464},
    { source: 15, target: 16, value: 319.06112267087633},
    { source: 15, target: 23, value: 77.20103626247513},
    { source: 15, target: 31, value: 66.91038783328041},
    { source: 16, target: 26, value: 274.4102767754881},
    { source: 17, target: 30, value: 168.2676439485619},
    { source: 18, target: 29, value: 77.87810988975015},
    { source: 18, target: 30, value: 110.0272693471941},
    { source: 19, target: 21, value: 167.1556161186336},
    { source: 19, target: 23, value: 167.6007159889241},
    { source: 19, target: 25, value: 242.2973379961076},
    { source: 19, target: 31, value: 114.12712210513327},
    { source: 20, target: 27, value: 71.30918594402827},
    { source: 20, target: 28, value: 141.2834031300209},
    { source: 21, target: 29, value: 139.44174410842686},
    { source: 22, target: 26, value: 138.84163640637487},
    { source: 22, target: 30, value: 122.15563842901399},
    { source: 23, target: 31, value: 123.06502346320826},
    { source: 24, target: 28, value: 80.23091673413684},
    ]
    
    grafo1_lista =
     [[[3, 122.98373876248843], [8, 142.41137595009747], [12, 103.31021246711285], [15, 135.07405376311175], [16, 188.95766721676048], [23, 98.8382517044894], [24, 97.30878685915265]], [[9, 145.24806367039804], [13, 90.4267659490264], [17, 73.00684899377592], [25, 78.60025445251433]], [[4, 113.9912277326637], [6, 64.41273166075166], [10, 120.34118164618461], [18, 67.89698078707183], [22, 74.84650960465692], [26, 97.30878685915265], [28, 157.45793088949188]], [[0, 122.98373876248843], [11, 118.53269591129698], [12, 103.57605900979242], [20, 49.658836071740545], [23, 72.89718787443039], [27, 79.20227269466452]], [[2, 113.9912277326637], [8, 178.71765441612084], [16, 242.5077318355025], [26, 35.11409973215888], [28, 80.2807573457052]], [[10, 105.30432089900205], [11, 67.17886572427373], [21, 79.61155694998057], [27, 37.94733192202055], [29, 94.92101980067429]], [[2, 64.41273166075166], [18, 59.033888572581766], [22, 60.207972893961475], [30, 81.68843247363729]], [[19, 48.877397639399746], [25, 284.29737951659], [31, 95.01578816175763]], [[0, 142.41137595009747], [4, 178.71765441612084], [16, 76.27581530209953], [24, 78.23042886243178], [28, 121.16517651536682]], [[1, 145.24806367039804], [13, 174.64249196572982], [17, 105.20931517693668], [18, 124.19742348374221], [21, 174.41330224498358], [29, 114.54256850621083], [30, 85.09406559801923]], [[2, 120.34118164618461], [5, 105.30432089900205], [18, 74.88658090739622], [20, 89.05054744357274], [27, 111.8257573191436], [28, 160.86329600005092], [29, 41.72529209005013]], [[3, 118.53269591129698], [5, 67.17886572427373], [19, 105.80170130957252], [21, 93.17188417113823], [23, 137.59360450253493], [27, 60.207972893961475]], [[0, 103.31021246711285], [3, 103.57605900979242], [20, 102.61578825892242], [24, 41.036569057366385], [28, 73.60027173862879]], [[1, 90.4267659490264], [9, 174.64249196572982], [19, 216.8340379184043], [21, 77.20103626247513], [25, 40.45985664828782]], [[16, 468.3855249684815], [17, 356.61884414595926], [22, 101.82828683622247], [26, 
    196.95684806576287], [30, 191.3765920900464]], [[0, 135.07405376311175], [16, 319.06112267087633], [23, 77.20103626247513], [31, 66.91038783328041]], [[0, 188.95766721676048], [4, 242.5077318355025], [8, 76.27581530209953], [14, 468.3855249684815], [15, 319.06112267087633], [26, 274.4102767754881]], [[1, 73.00684899377592], [9, 105.20931517693668], [14, 356.61884414595926], [30, 168.2676439485619]], [[2, 67.89698078707183], [6, 59.033888572581766], [9, 124.19742348374221], [10, 74.88658090739622], [29, 77.87810988975015], [30, 110.0272693471941]], [[7, 48.877397639399746], [11, 105.80170130957252], [13, 216.8340379184043], [21, 167.1556161186336], [23, 167.6007159889241], [25, 242.2973379961076], [31, 114.12712210513327]], [[3, 49.658836071740545], [10, 89.05054744357274], [12, 102.61578825892242], 
    [27, 71.30918594402827], [28, 141.2834031300209]], [[5, 79.61155694998057], [9, 174.41330224498358], [11, 93.17188417113823], [13, 77.20103626247513], [19, 167.1556161186336], [29, 139.44174410842686]], [[2, 74.84650960465692], [6, 60.207972893961475], [14, 101.82828683622247], [26, 138.84163640637487], [30, 122.15563842901399]], [[0, 98.8382517044894], [3, 72.89718787443039], [11, 137.59360450253493], [15, 77.20103626247513], [19, 167.6007159889241], [31, 123.06502346320826]], [[0, 97.30878685915265], [8, 78.23042886243178], [12, 41.036569057366385], [28, 80.23091673413684]], [[1, 78.60025445251433], [7, 284.29737951659], [13, 40.45985664828782], [19, 242.2973379961076]], [[2, 97.30878685915265], [4, 35.11409973215888], [14, 196.95684806576287], [16, 274.4102767754881], [22, 138.84163640637487]], [[3, 79.20227269466452], [5, 37.94733192202055], [10, 111.8257573191436], [11, 60.207972893961475], [20, 71.30918594402827]], [[2, 157.45793088949188], [4, 80.2807573457052], [8, 121.16517651536682], [10, 160.86329600005092], [12, 73.60027173862879], [20, 141.2834031300209], [24, 80.23091673413684]], [[5, 94.92101980067429], [9, 114.54256850621083], [10, 41.72529209005013], [18, 77.87810988975015], [21, 139.44174410842686]], [[6, 81.68843247363729], [9, 85.09406559801923], [14, 191.3765920900464], [17, 168.2676439485619], [18, 110.0272693471941], [22, 122.15563842901399]], [[7, 95.01578816175763], [15, 66.91038783328041], [19, 114.12712210513327], [23, 123.06502346320826]]]
    
    grafo1_edges =
     [[122.98373876248843, 0, 3], [142.41137595009747, 0, 8], [103.31021246711285, 0, 12], [135.07405376311175, 0, 15], [188.95766721676048, 0, 16], [98.8382517044894, 0, 23], [97.30878685915265, 0, 24], [145.24806367039804, 1, 9], [90.4267659490264, 1, 13], [73.00684899377592, 1, 17], [78.60025445251433, 1, 25], [113.9912277326637, 2, 4], [64.41273166075166, 2, 6], [120.34118164618461, 2, 10], [67.89698078707183, 2, 18], [74.84650960465692, 2, 22], [97.30878685915265, 2, 26], [157.45793088949188, 2, 28], [118.53269591129698, 3, 11], [103.57605900979242, 3, 12], [49.658836071740545, 3, 20], [72.89718787443039, 3, 23], [79.20227269466452, 3, 27], [178.71765441612084, 4, 8], [242.5077318355025, 4, 16], [35.11409973215888, 4, 26], [80.2807573457052, 4, 28], [105.30432089900205, 5, 10], [67.17886572427373, 
    5, 11], [79.61155694998057, 5, 21], [37.94733192202055, 5, 27], [94.92101980067429, 5, 29], [59.033888572581766, 6, 18], [60.207972893961475, 6, 22], [81.68843247363729, 6, 30], [48.877397639399746, 7, 19], [284.29737951659, 7, 25], [95.01578816175763, 7, 31], [76.27581530209953, 8, 16], [78.23042886243178, 8, 24], [121.16517651536682, 8, 28], [174.64249196572982, 9, 13], [105.20931517693668, 9, 17], [124.19742348374221, 9, 18], [174.41330224498358, 9, 21], [114.54256850621083, 9, 29], [85.09406559801923, 9, 30], [74.88658090739622, 10, 18], [89.05054744357274, 10, 20], [111.8257573191436, 10, 27], [160.86329600005092, 10, 28], [41.72529209005013, 10, 29], [105.80170130957252, 11, 19], [93.17188417113823, 11, 21], [137.59360450253493, 11, 23], [60.207972893961475, 11, 27], [102.61578825892242, 12, 20], [41.036569057366385, 12, 24], [73.60027173862879, 12, 28], [216.8340379184043, 13, 19], [77.20103626247513, 13, 21], [40.45985664828782, 13, 25], [468.3855249684815, 14, 16], [356.61884414595926, 14, 17], [101.82828683622247, 14, 22], [196.95684806576287, 14, 26], [191.3765920900464, 14, 30], [319.06112267087633, 15, 16], [77.20103626247513, 15, 23], [66.91038783328041, 15, 31], [274.4102767754881, 16, 26], [168.2676439485619, 17, 30], [77.87810988975015, 18, 29], [110.0272693471941, 18, 30], [167.1556161186336, 19, 21], [167.6007159889241, 19, 23], [242.2973379961076, 19, 25], [114.12712210513327, 19, 31], [71.30918594402827, 20, 27], [141.2834031300209, 20, 28], [139.44174410842686, 21, 29], [138.84163640637487, 22, 26], [122.15563842901399, 22, 30], [123.06502346320826, 23, 31], [80.23091673413684, 24, 28]]