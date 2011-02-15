var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 5452, "sl" : 14, "el" : 157, "name" : "RecordStateInvalidUsageTest",
    "methods" : [
              {"sl" : 20, "el" : 24, "sc" : 5},  {"sl" : 26, "el" : 36, "sc" : 5},  {"sl" : 38, "el" : 48, "sc" : 5},  {"sl" : 50, "el" : 60, "sc" : 5},  {"sl" : 62, "el" : 72, "sc" : 5},  {"sl" : 74, "el" : 84, "sc" : 5},  {"sl" : 86, "el" : 96, "sc" : 5},  {"sl" : 98, "el" : 108, "sc" : 5},  {"sl" : 110, "el" : 120, "sc" : 5},  {"sl" : 122, "el" : 132, "sc" : 5},  {"sl" : 134, "el" : 144, "sc" : 5},  {"sl" : 146, "el" : 156, "sc" : 5}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_5" : {
					  "name" : "setExpectedVoidCallCountWithoutMethodCall",
					  "pass" : true ,
					  "methods" : [{"sl": 38 },],
					  "statements" : [{"sl": 40 },{"sl": 41 },{"sl": 44 },]
					  },
		"test_17" : {
					  "name" : "setWrongReturnValueChar",
					  "pass" : true ,
					  "methods" : [{"sl": 86 },],
					  "statements" : [{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 93 },]
					  },
		"test_160" : {
					  "name" : "setWrongReturnValueObject",
					  "pass" : true ,
					  "methods" : [{"sl": 146 },],
					  "statements" : [{"sl": 148 },{"sl": 149 },{"sl": 150 },{"sl": 153 },]
					  },
		"test_1" : {
					  "name" : "openVoidCallCountWithoutMethodCall",
					  "pass" : true ,
					  "methods" : [{"sl": 50 },],
					  "statements" : [{"sl": 52 },{"sl": 53 },{"sl": 56 },]
					  },
		"test_2" : {
					  "name" : "setWrongReturnValueBoolean",
					  "pass" : true ,
					  "methods" : [{"sl": 62 },],
					  "statements" : [{"sl": 64 },{"sl": 65 },{"sl": 66 },{"sl": 69 },]
					  },
		"test_7" : {
					  "name" : "setReturnValueWithoutMethodCall",
					  "pass" : true ,
					  "methods" : [{"sl": 26 },],
					  "statements" : [{"sl": 28 },{"sl": 29 },{"sl": 32 },]
					  },
		"test_11" : {
					  "name" : "setWrongReturnValueFloat",
					  "pass" : true ,
					  "methods" : [{"sl": 122 },],
					  "statements" : [{"sl": 124 },{"sl": 125 },{"sl": 126 },{"sl": 129 },]
					  },
		"test_29" : {
					  "name" : "setWrongReturnValueShort",
					  "pass" : true ,
					  "methods" : [{"sl": 74 },],
					  "statements" : [{"sl": 76 },{"sl": 77 },{"sl": 78 },{"sl": 81 },]
					  },
		"test_13" : {
					  "name" : "setWrongReturnValueInt",
					  "pass" : true ,
					  "methods" : [{"sl": 98 },],
					  "statements" : [{"sl": 100 },{"sl": 101 },{"sl": 102 },{"sl": 105 },]
					  },
		"test_15" : {
					  "name" : "setWrongReturnValueLong",
					  "pass" : true ,
					  "methods" : [{"sl": 110 },],
					  "statements" : [{"sl": 112 },{"sl": 113 },{"sl": 114 },{"sl": 117 },]
					  },
		"test_154" : {
					  "name" : "setWrongReturnValueDouble",
					  "pass" : true ,
					  "methods" : [{"sl": 134 },],
					  "statements" : [{"sl": 136 },{"sl": 137 },{"sl": 138 },{"sl": 141 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 7   ] ,
  [  ] ,
  [ 7   ] ,
  [ 7   ] ,
  [  ] ,
  [  ] ,
  [ 7   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 5   ] ,
  [  ] ,
  [ 5   ] ,
  [ 5   ] ,
  [  ] ,
  [  ] ,
  [ 5   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 2   ] ,
  [  ] ,
  [ 2   ] ,
  [ 2   ] ,
  [ 2   ] ,
  [  ] ,
  [  ] ,
  [ 2   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 29   ] ,
  [  ] ,
  [ 29   ] ,
  [ 29   ] ,
  [ 29   ] ,
  [  ] ,
  [  ] ,
  [ 29   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 17   ] ,
  [  ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [  ] ,
  [  ] ,
  [ 17   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 13   ] ,
  [  ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [  ] ,
  [  ] ,
  [ 13   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 15   ] ,
  [  ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [  ] ,
  [  ] ,
  [ 15   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 11   ] ,
  [  ] ,
  [ 11   ] ,
  [ 11   ] ,
  [ 11   ] ,
  [  ] ,
  [  ] ,
  [ 11   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 154   ] ,
  [  ] ,
  [ 154   ] ,
  [ 154   ] ,
  [ 154   ] ,
  [  ] ,
  [  ] ,
  [ 154   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 160   ] ,
  [  ] ,
  [ 160   ] ,
  [ 160   ] ,
  [ 160   ] ,
  [  ] ,
  [  ] ,
  [ 160   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] 
];
