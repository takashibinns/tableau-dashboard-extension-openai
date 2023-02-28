import React from "react";
import { Pill, TextLink } from '@tableau/tableau-ui';
import TableauHelper from './TableauHelper';

/* global tableau */

//  Narrative Science variables
const user_key = 'eyJvcmciOiI1YjYwZWRlZjIyNjk2OTAwMDFlZjdmYzMiLCJpZCI6IjNlZjQ5OTgwZDliNjQwNjI5YjZhNmY4NDhmMmVjMTVmIiwiaCI6Im11cm11cjY0In0=';
const api_url = `https://stg-viz-saas-api.n-s.us/v2/stories/barchart?user_key=${user_key}`;
const sample_payload = {
  "api_version": 2,
  "configuration": {
    "authoring": {
      "format": "paragraph",
      "verbosity": "high",
      "is_linked_to_chart": false,
      "run_support_story": false,
      "selection_made": true,
      "use_derived_measure_order": true,
      "num_drilldown_sections": 3,
      "custom_content": {
        "header": {
          "content": []
        },
        "footer": {
          "content": []
        },
        "summaries": {
          "content": []
        },
        "summary0": {
          "content": []
        },
        "summary1": {
          "content": []
        },
        "summary2": {
          "content": []
        },
        "drilldowns": {
          "content": []
        },
        "drilldown0": {
          "content": []
        },
        "drilldown1": {
          "content": []
        },
        "drilldown2": {
          "content": []
        }
      }
    },
    "analytics": {
      "distribution": {
        "id": "distribution",
        "index": 0,
        "enabled": true,
        "label": "Distribution",
        "requiresMulti": "none"
      },
      "correlation": {
        "id": "correlation",
        "index": 1,
        "enabled": true,
        "label": "Correlation",
        "requiresMulti": "measure"
      },
      "clustering": {
        "id": "clustering",
        "index": 2,
        "enabled": true,
        "label": "Clustering",
        "requiresMulti": "none"
      }
    },
    "relationships": {},
    "contributors": {
      "drivers": [
        {
          "threshold": 3,
          "threshold_type": "static_max_number"
        }
      ],
      "offsetters": [
        {
          "threshold": 3,
          "threshold_type": "static_max_number"
        }
      ],
      "detail_secondary_dimensions": false
    },
    "drivers": {},
    "derived_measures": {}
  },
  "metadata": {
    "valueType": "discrete",
    "platform": "tableau",
    "apiKey": "eyJvcmciOiI1YjYwZWRlZjIyNjk2OTAwMDFlZjdmYzMiLCJpZCI6IjNlZjQ5OTgwZDliNjQwNjI5YjZhNmY4NDhmMmVjMTVmIiwiaCI6Im11cm11cjY0In0=",
    "flags": {
      "useFunctions": true,
      "useConditionals": true
    }
  },
  "data": {
    "dimensions": [
      {
        "dataType": "string",
        "name": "County",
        "id": "col:0",
        "labels": [
          {
            "singular": "entity",
            "plural": "entities",
            "id": "phf8"
          }
        ]
      },
      {
        "dataType": "string",
        "name": "ATTR(Above or Below?)",
        "id": "col:3",
        "labels": [
          {
            "singular": "subcategory",
            "plural": "subcategories",
            "id": "3ddo"
          }
        ]
      }
    ],
    "measures": [
      {
        "name": "AVG(Adult Obesity (% of pop))",
        "id": "col:4",
        "format": "number",
        "is_percentage": false,
        "format_options": {
          "decimal_places": "dynamic",
          "label": "US Dollar ($1,234.00)",
          "money_locale": "USD",
          "negative": "minus",
          "spell_out": true,
          "suffix": "_word"
        },
        "up_sentiment": "neutral",
        "cumulative": "add_values"
      },
      {
        "name": "AVG(Adult Smokers (% of pop))",
        "id": "col:5",
        "format": "number",
        "is_percentage": false,
        "format_options": {
          "decimal_places": "dynamic",
          "label": "US Dollar ($1,234.00)",
          "money_locale": "USD",
          "negative": "minus",
          "spell_out": true,
          "suffix": "_word"
        },
        "up_sentiment": "neutral",
        "cumulative": "add_values"
      },
      {
        "name": "AVG(Food Insecure (% of pop))",
        "id": "col:6",
        "format": "number",
        "is_percentage": false,
        "format_options": {
          "decimal_places": "dynamic",
          "label": "US Dollar ($1,234.00)",
          "money_locale": "USD",
          "negative": "minus",
          "spell_out": true,
          "suffix": "_word"
        },
        "up_sentiment": "neutral",
        "cumulative": "add_values"
      },
      {
        "name": "AVG(Physically Inactive (% of pop))",
        "id": "col:7",
        "format": "number",
        "is_percentage": false,
        "format_options": {
          "decimal_places": "dynamic",
          "label": "US Dollar ($1,234.00)",
          "money_locale": "USD",
          "negative": "minus",
          "spell_out": true,
          "suffix": "_word"
        },
        "up_sentiment": "neutral",
        "cumulative": "add_values"
      },
      {
        "name": "AVG(Regional Obesity Rate)",
        "id": "col:8",
        "format": "number",
        "is_percentage": false,
        "format_options": {
          "decimal_places": "dynamic",
          "label": "US Dollar ($1,234.00)",
          "money_locale": "USD",
          "negative": "minus",
          "spell_out": true,
          "suffix": "_word"
        },
        "up_sentiment": "neutral",
        "cumulative": "add_values"
      }
    ],
    "rows": [
      [
        {
          "value": "Ziebach",
          "id": 0
        },
        {
          "value": "11% above",
          "id": 1
        },
        {
          "value": 0.433,
          "id": 2
        },
        {
          "value": 0.36,
          "id": 3
        },
        {
          "value": 0.203,
          "id": 4
        },
        {
          "value": 0.279,
          "id": 5
        },
        {
          "value": 0.315626006904488,
          "id": 6
        }
      ],
      [
        {
          "value": "York",
          "id": 7
        },
        {
          "value": "on par with",
          "id": 8
        },
        {
          "value": 0.321,
          "id": 9
        },
        {
          "value": 0.159,
          "id": 10
        },
        {
          "value": 0.122,
          "id": 11
        },
        {
          "value": 0.247,
          "id": 12
        },
        {
          "value": 0.315626006904488,
          "id": 13
        }
      ],
      [
        {
          "value": "Yellow Medicine",
          "id": 14
        },
        {
          "value": "4% below",
          "id": 15
        },
        {
          "value": 0.283,
          "id": 16
        },
        {
          "value": 0.154,
          "id": 17
        },
        {
          "value": 0.096,
          "id": 18
        },
        {
          "value": 0.224,
          "id": 19
        },
        {
          "value": 0.315626006904488,
          "id": 20
        }
      ],
      [
        {
          "value": "Yankton",
          "id": 21
        },
        {
          "value": "4% below",
          "id": 22
        },
        {
          "value": 0.285,
          "id": 23
        },
        {
          "value": 0.154,
          "id": 24
        },
        {
          "value": 0.115,
          "id": 25
        },
        {
          "value": 0.209,
          "id": 26
        },
        {
          "value": 0.315626006904488,
          "id": 27
        }
      ],
      [
        {
          "value": "Wyandotte",
          "id": 28
        },
        {
          "value": "6% above",
          "id": 29
        },
        {
          "value": 0.378,
          "id": 30
        },
        {
          "value": 0.229,
          "id": 31
        },
        {
          "value": 0.179,
          "id": 32
        },
        {
          "value": 0.327,
          "id": 33
        },
        {
          "value": 0.315626006904488,
          "id": 34
        }
      ],
      [
        {
          "value": "Wright",
          "id": 35
        },
        {
          "value": "4% above",
          "id": 36
        },
        {
          "value": 0.356,
          "id": 37
        },
        {
          "value": 0.253,
          "id": 38
        },
        {
          "value": 0.183,
          "id": 39
        },
        {
          "value": 0.31,
          "id": 40
        },
        {
          "value": 0.315626006904488,
          "id": 41
        }
      ],
      [
        {
          "value": "Wright",
          "id": 42
        },
        {
          "value": "4% below",
          "id": 43
        },
        {
          "value": 0.284,
          "id": 44
        },
        {
          "value": 0.163,
          "id": 45
        },
        {
          "value": 0.081,
          "id": 46
        },
        {
          "value": 0.188,
          "id": 47
        },
        {
          "value": 0.315626006904488,
          "id": 48
        }
      ],
      [
        {
          "value": "Wright",
          "id": 49
        },
        {
          "value": "2% above",
          "id": 50
        },
        {
          "value": 0.343,
          "id": 51
        },
        {
          "value": 0.162,
          "id": 52
        },
        {
          "value": 0.108,
          "id": 53
        },
        {
          "value": 0.297,
          "id": 54
        },
        {
          "value": 0.315626006904488,
          "id": 55
        }
      ],
      [
        {
          "value": "Worth",
          "id": 56
        },
        {
          "value": "1% below",
          "id": 57
        },
        {
          "value": 0.312,
          "id": 58
        },
        {
          "value": 0.187,
          "id": 59
        },
        {
          "value": 0.135,
          "id": 60
        },
        {
          "value": 0.295,
          "id": 61
        },
        {
          "value": 0.315626006904488,
          "id": 62
        }
      ],
      [
        {
          "value": "Worth",
          "id": 63
        },
        {
          "value": "2% above",
          "id": 64
        },
        {
          "value": 0.337,
          "id": 65
        },
        {
          "value": 0.167,
          "id": 66
        },
        {
          "value": 0.117,
          "id": 67
        },
        {
          "value": 0.31,
          "id": 68
        },
        {
          "value": 0.315626006904488,
          "id": 69
        }
      ],
      [
        {
          "value": "Woodward",
          "id": 70
        },
        {
          "value": "7% above",
          "id": 71
        },
        {
          "value": 0.386,
          "id": 72
        },
        {
          "value": 0.189,
          "id": 73
        },
        {
          "value": 0.134,
          "id": 74
        },
        {
          "value": 0.29,
          "id": 75
        },
        {
          "value": 0.315626006904488,
          "id": 76
        }
      ],
      [
        {
          "value": "Woodson",
          "id": 77
        },
        {
          "value": "2% below",
          "id": 78
        },
        {
          "value": 0.304,
          "id": 79
        },
        {
          "value": 0.186,
          "id": 80
        },
        {
          "value": 0.156,
          "id": 81
        },
        {
          "value": 0.288,
          "id": 82
        },
        {
          "value": 0.315626006904488,
          "id": 83
        }
      ],
      [
        {
          "value": "Woods",
          "id": 84
        },
        {
          "value": "on par with",
          "id": 85
        },
        {
          "value": 0.323,
          "id": 86
        },
        {
          "value": 0.186,
          "id": 87
        },
        {
          "value": 0.152,
          "id": 88
        },
        {
          "value": 0.367,
          "id": 89
        },
        {
          "value": 0.315626006904488,
          "id": 90
        }
      ],
      [
        {
          "value": "Woodford",
          "id": 91
        },
        {
          "value": "on par with",
          "id": 92
        },
        {
          "value": 0.319,
          "id": 93
        },
        {
          "value": 0.148,
          "id": 94
        },
        {
          "value": 0.106,
          "id": 95
        },
        {
          "value": 0.221,
          "id": 96
        },
        {
          "value": 0.315626006904488,
          "id": 97
        }
      ],
      [
        {
          "value": "Woodbury",
          "id": 98
        },
        {
          "value": "2% above",
          "id": 99
        },
        {
          "value": 0.337,
          "id": 100
        },
        {
          "value": 0.198,
          "id": 101
        },
        {
          "value": 0.122,
          "id": 102
        },
        {
          "value": 0.267,
          "id": 103
        },
        {
          "value": 0.315626006904488,
          "id": 104
        }
      ],
      [
        {
          "value": "Wood",
          "id": 105
        },
        {
          "value": "2% above",
          "id": 106
        },
        {
          "value": 0.342,
          "id": 107
        },
        {
          "value": 0.154,
          "id": 108
        },
        {
          "value": 0.116,
          "id": 109
        },
        {
          "value": 0.23,
          "id": 110
        },
        {
          "value": 0.315626006904488,
          "id": 111
        }
      ],
      [
        {
          "value": "Winona",
          "id": 112
        },
        {
          "value": "5% below",
          "id": 113
        },
        {
          "value": 0.271,
          "id": 114
        },
        {
          "value": 0.171,
          "id": 115
        },
        {
          "value": 0.112,
          "id": 116
        },
        {
          "value": 0.213,
          "id": 117
        },
        {
          "value": 0.315626006904488,
          "id": 118
        }
      ],
      [
        {
          "value": "Winneshiek",
          "id": 119
        },
        {
          "value": "7% below",
          "id": 120
        },
        {
          "value": 0.252,
          "id": 121
        },
        {
          "value": 0.145,
          "id": 122
        },
        {
          "value": 0.112,
          "id": 123
        },
        {
          "value": 0.205,
          "id": 124
        },
        {
          "value": 0.315626006904488,
          "id": 125
        }
      ],
      [
        {
          "value": "Winnebago",
          "id": 126
        },
        {
          "value": "4% below",
          "id": 127
        },
        {
          "value": 0.281,
          "id": 128
        },
        {
          "value": 0.15,
          "id": 129
        },
        {
          "value": 0.121,
          "id": 130
        },
        {
          "value": 0.234,
          "id": 131
        },
        {
          "value": 0.315626006904488,
          "id": 132
        }
      ],
      [
        {
          "value": "Winnebago",
          "id": 133
        },
        {
          "value": "on par with",
          "id": 134
        },
        {
          "value": 0.633,
          "id": 135
        },
        {
          "value": 0.326,
          "id": 136
        },
        {
          "value": 0.28,
          "id": 137
        },
        {
          "value": 0.569,
          "id": 138
        },
        {
          "value": 0.631252013808976,
          "id": 139
        }
      ],
      [
        {
          "value": "Wilson",
          "id": 147
        },
        {
          "value": "1% below",
          "id": 148
        },
        {
          "value": 0.312,
          "id": 149
        },
        {
          "value": 0.185,
          "id": 150
        },
        {
          "value": 0.164,
          "id": 151
        },
        {
          "value": 0.265,
          "id": 152
        },
        {
          "value": 0.315626006904488,
          "id": 153
        }
      ],
      [
        {
          "value": "Williamson",
          "id": 154
        },
        {
          "value": "on par with",
          "id": 155
        },
        {
          "value": 0.316,
          "id": 156
        },
        {
          "value": 0.168,
          "id": 157
        },
        {
          "value": 0.144,
          "id": 158
        },
        {
          "value": 0.267,
          "id": 159
        },
        {
          "value": 0.315626006904488,
          "id": 160
        }
      ],
      [
        {
          "value": "Williams",
          "id": 161
        },
        {
          "value": "3% above",
          "id": 162
        },
        {
          "value": 0.348,
          "id": 163
        },
        {
          "value": 0.207,
          "id": 164
        },
        {
          "value": 0.051,
          "id": 165
        },
        {
          "value": 0.299,
          "id": 166
        },
        {
          "value": 0.315626006904488,
          "id": 167
        }
      ],
      [
        {
          "value": "Will",
          "id": 168
        },
        {
          "value": "4% below",
          "id": 169
        },
        {
          "value": 0.281,
          "id": 170
        },
        {
          "value": 0.148,
          "id": 171
        },
        {
          "value": 0.099,
          "id": 172
        },
        {
          "value": 0.24,
          "id": 173
        },
        {
          "value": 0.315626006904488,
          "id": 174
        }
      ],
      [
        {
          "value": "Wilkin",
          "id": 175
        },
        {
          "value": "2% below",
          "id": 176
        },
        {
          "value": 0.298,
          "id": 177
        },
        {
          "value": 0.162,
          "id": 178
        },
        {
          "value": 0.09,
          "id": 179
        },
        {
          "value": 0.255,
          "id": 180
        },
        {
          "value": 0.315626006904488,
          "id": 181
        }
      ],
      [
        {
          "value": "Wichita",
          "id": 182
        },
        {
          "value": "1% below",
          "id": 183
        },
        {
          "value": 0.305,
          "id": 184
        },
        {
          "value": 0.166,
          "id": 185
        },
        {
          "value": 0.09,
          "id": 186
        },
        {
          "value": 0.27,
          "id": 187
        },
        {
          "value": 0.315626006904488,
          "id": 188
        }
      ],
      [
        {
          "value": "Whiteside",
          "id": 189
        },
        {
          "value": "5% below",
          "id": 190
        },
        {
          "value": 0.268,
          "id": 191
        },
        {
          "value": 0.155,
          "id": 192
        },
        {
          "value": 0.121,
          "id": 193
        },
        {
          "value": 0.262,
          "id": 194
        },
        {
          "value": 0.315626006904488,
          "id": 195
        }
      ],
      [
        {
          "value": "White",
          "id": 196
        },
        {
          "value": "1% below",
          "id": 197
        },
        {
          "value": 0.314,
          "id": 198
        },
        {
          "value": 0.154,
          "id": 199
        },
        {
          "value": 0.132,
          "id": 200
        },
        {
          "value": 0.253,
          "id": 201
        },
        {
          "value": 0.315626006904488,
          "id": 202
        }
      ],
      [
        {
          "value": "Wheeler",
          "id": 203
        },
        {
          "value": "4% below",
          "id": 204
        },
        {
          "value": 0.278,
          "id": 205
        },
        {
          "value": 0.166,
          "id": 206
        },
        {
          "value": 0.136,
          "id": 207
        },
        {
          "value": 0.286,
          "id": 208
        },
        {
          "value": 0.315626006904488,
          "id": 209
        }
      ],
      [
        {
          "value": "Wells",
          "id": 210
        },
        {
          "value": "on par with",
          "id": 211
        },
        {
          "value": 0.321,
          "id": 212
        },
        {
          "value": 0.159,
          "id": 213
        },
        {
          "value": 0.078,
          "id": 214
        },
        {
          "value": 0.33,
          "id": 215
        },
        {
          "value": 0.315626006904488,
          "id": 216
        }
      ],
      [
        {
          "value": "Webster",
          "id": 217
        },
        {
          "value": "on par with",
          "id": 218
        },
        {
          "value": 0.318,
          "id": 219
        },
        {
          "value": 0.145,
          "id": 220
        },
        {
          "value": 0.125,
          "id": 221
        },
        {
          "value": 0.33,
          "id": 222
        },
        {
          "value": 0.315626006904488,
          "id": 223
        }
      ],
      [
        {
          "value": "Webster",
          "id": 224
        },
        {
          "value": "1% above",
          "id": 225
        },
        {
          "value": 0.329,
          "id": 226
        },
        {
          "value": 0.214,
          "id": 227
        },
        {
          "value": 0.156,
          "id": 228
        },
        {
          "value": 0.273,
          "id": 229
        },
        {
          "value": 0.315626006904488,
          "id": 230
        }
      ],
      [
        {
          "value": "Webster",
          "id": 231
        },
        {
          "value": "1% below",
          "id": 232
        },
        {
          "value": 0.305,
          "id": 233
        },
        {
          "value": 0.2,
          "id": 234
        },
        {
          "value": 0.144,
          "id": 235
        },
        {
          "value": 0.27,
          "id": 236
        },
        {
          "value": 0.315626006904488,
          "id": 237
        }
      ],
      [
        {
          "value": "Wayne",
          "id": 238
        },
        {
          "value": "2% below",
          "id": 239
        },
        {
          "value": 0.296,
          "id": 240
        },
        {
          "value": 0.158,
          "id": 241
        },
        {
          "value": 0.135,
          "id": 242
        },
        {
          "value": 0.263,
          "id": 243
        },
        {
          "value": 0.315626006904488,
          "id": 244
        }
      ],
      [
        {
          "value": "Wayne",
          "id": 245
        },
        {
          "value": "3% above",
          "id": 246
        },
        {
          "value": 0.347,
          "id": 247
        },
        {
          "value": 0.238,
          "id": 248
        },
        {
          "value": 0.171,
          "id": 249
        },
        {
          "value": 0.349,
          "id": 250
        },
        {
          "value": 0.315626006904488,
          "id": 251
        }
      ],
      [
        {
          "value": "Wayne",
          "id": 252
        },
        {
          "value": "1% below",
          "id": 253
        },
        {
          "value": 0.615,
          "id": 254
        },
        {
          "value": 0.335,
          "id": 255
        },
        {
          "value": 0.251,
          "id": 256
        },
        {
          "value": 0.546,
          "id": 257
        },
        {
          "value": 0.631252013808976,
          "id": 258
        }
      ],
      [
        {
          "value": "Waushara",
          "id": 266
        },
        {
          "value": "on par with",
          "id": 267
        },
        {
          "value": 0.32,
          "id": 268
        },
        {
          "value": 0.167,
          "id": 269
        },
        {
          "value": 0.114,
          "id": 270
        },
        {
          "value": 0.273,
          "id": 271
        },
        {
          "value": 0.315626006904488,
          "id": 272
        }
      ],
      [
        {
          "value": "Waupaca",
          "id": 273
        },
        {
          "value": "6% below",
          "id": 274
        },
        {
          "value": 0.258,
          "id": 275
        },
        {
          "value": 0.155,
          "id": 276
        },
        {
          "value": 0.114,
          "id": 277
        },
        {
          "value": 0.249,
          "id": 278
        },
        {
          "value": 0.315626006904488,
          "id": 279
        }
      ],
      [
        {
          "value": "Waukesha",
          "id": 280
        },
        {
          "value": "5% below",
          "id": 281
        },
        {
          "value": 0.27,
          "id": 282
        },
        {
          "value": 0.133,
          "id": 283
        },
        {
          "value": 0.088,
          "id": 284
        },
        {
          "value": 0.169,
          "id": 285
        },
        {
          "value": 0.315626006904488,
          "id": 286
        }
      ],
      [
        {
          "value": "Watonwan",
          "id": 287
        },
        {
          "value": "2% below",
          "id": 288
        },
        {
          "value": 0.302,
          "id": 289
        },
        {
          "value": 0.145,
          "id": 290
        },
        {
          "value": 0.079,
          "id": 291
        },
        {
          "value": 0.25,
          "id": 292
        },
        {
          "value": 0.315626006904488,
          "id": 293
        }
      ],
      [
        {
          "value": "Washita",
          "id": 294
        },
        {
          "value": "9% above",
          "id": 295
        },
        {
          "value": 0.414,
          "id": 296
        },
        {
          "value": 0.189,
          "id": 297
        },
        {
          "value": 0.147,
          "id": 298
        },
        {
          "value": 0.338,
          "id": 299
        },
        {
          "value": 0.315626006904488,
          "id": 300
        }
      ],
      [
        {
          "value": "Washington",
          "id": 301
        },
        {
          "value": "2% below",
          "id": 302
        },
        {
          "value": 0.295,
          "id": 303
        },
        {
          "value": 0.135,
          "id": 304
        },
        {
          "value": 0.095,
          "id": 305
        },
        {
          "value": 0.204,
          "id": 306
        },
        {
          "value": 0.315626006904488,
          "id": 307
        }
      ],
      [
        {
          "value": "Washington",
          "id": 308
        },
        {
          "value": "3% below",
          "id": 309
        },
        {
          "value": 0.293,
          "id": 310
        },
        {
          "value": 0.184,
          "id": 311
        },
        {
          "value": 0.15,
          "id": 312
        },
        {
          "value": 0.287,
          "id": 313
        },
        {
          "value": 0.315626006904488,
          "id": 314
        }
      ],
      [
        {
          "value": "Washington",
          "id": 315
        },
        {
          "value": "1% below",
          "id": 316
        },
        {
          "value": 0.9299999999999999,
          "id": 317
        },
        {
          "value": 0.43600000000000005,
          "id": 318
        },
        {
          "value": 0.327,
          "id": 319
        },
        {
          "value": 0.754,
          "id": 320
        },
        {
          "value": 0.9468780207134639,
          "id": 321
        }
      ],
      [
        {
          "value": "Washington",
          "id": 322
        },
        {
          "value": "5% above",
          "id": 323
        },
        {
          "value": 0.367,
          "id": 324
        },
        {
          "value": 0.245,
          "id": 325
        },
        {
          "value": 0.184,
          "id": 326
        },
        {
          "value": 0.33,
          "id": 327
        },
        {
          "value": 0.315626006904488,
          "id": 328
        }
      ],
      [
        {
          "value": "Washington",
          "id": 329
        },
        {
          "value": "6% below",
          "id": 330
        },
        {
          "value": 0.257,
          "id": 331
        },
        {
          "value": 0.131,
          "id": 332
        },
        {
          "value": 0.076,
          "id": 333
        },
        {
          "value": 0.175,
          "id": 334
        },
        {
          "value": 0.315626006904488,
          "id": 335
        }
      ],
      [
        {
          "value": "Washington",
          "id": 336
        },
        {
          "value": "on par with",
          "id": 337
        },
        {
          "value": 0.32,
          "id": 338
        },
        {
          "value": 0.153,
          "id": 339
        },
        {
          "value": 0.123,
          "id": 340
        },
        {
          "value": 0.306,
          "id": 341
        },
        {
          "value": 0.315626006904488,
          "id": 342
        }
      ],
      [
        {
          "value": "Washburn",
          "id": 357
        },
        {
          "value": "4% below",
          "id": 358
        },
        {
          "value": 0.285,
          "id": 359
        },
        {
          "value": 0.16,
          "id": 360
        },
        {
          "value": 0.122,
          "id": 361
        },
        {
          "value": 0.25,
          "id": 362
        },
        {
          "value": 0.315626006904488,
          "id": 363
        }
      ],
      [
        {
          "value": "Waseca",
          "id": 364
        },
        {
          "value": "2% below",
          "id": 365
        },
        {
          "value": 0.3,
          "id": 366
        },
        {
          "value": 0.158,
          "id": 367
        },
        {
          "value": 0.096,
          "id": 368
        },
        {
          "value": 0.228,
          "id": 369
        },
        {
          "value": 0.315626006904488,
          "id": 370
        }
      ],
      [
        {
          "value": "Warren",
          "id": 371
        },
        {
          "value": "3% below",
          "id": 372
        },
        {
          "value": 0.292,
          "id": 373
        },
        {
          "value": 0.189,
          "id": 374
        },
        {
          "value": 0.143,
          "id": 375
        },
        {
          "value": 0.312,
          "id": 376
        },
        {
          "value": 0.315626006904488,
          "id": 377
        }
      ],
      [
        {
          "value": "Warren",
          "id": 378
        },
        {
          "value": "1% below",
          "id": 379
        },
        {
          "value": 0.305,
          "id": 380
        },
        {
          "value": 0.148,
          "id": 381
        },
        {
          "value": 0.105,
          "id": 382
        },
        {
          "value": 0.291,
          "id": 383
        },
        {
          "value": 0.315626006904488,
          "id": 384
        }
      ],
      [
        {
          "value": "Warren",
          "id": 385
        },
        {
          "value": "2% above",
          "id": 386
        },
        {
          "value": 0.338,
          "id": 387
        },
        {
          "value": 0.165,
          "id": 388
        },
        {
          "value": 0.127,
          "id": 389
        },
        {
          "value": 0.286,
          "id": 390
        },
        {
          "value": 0.315626006904488,
          "id": 391
        }
      ],
      [
        {
          "value": "Ward",
          "id": 392
        },
        {
          "value": "2% below",
          "id": 393
        },
        {
          "value": 0.297,
          "id": 394
        },
        {
          "value": 0.208,
          "id": 395
        },
        {
          "value": 0.075,
          "id": 396
        },
        {
          "value": 0.265,
          "id": 397
        },
        {
          "value": 0.315626006904488,
          "id": 398
        }
      ],
      [
        {
          "value": "Wapello",
          "id": 399
        },
        {
          "value": "1% above",
          "id": 400
        },
        {
          "value": 0.329,
          "id": 401
        },
        {
          "value": 0.209,
          "id": 402
        },
        {
          "value": 0.138,
          "id": 403
        },
        {
          "value": 0.315,
          "id": 404
        },
        {
          "value": 0.315626006904488,
          "id": 405
        }
      ],
      [
        {
          "value": "Walworth",
          "id": 406
        },
        {
          "value": "5% below",
          "id": 407
        },
        {
          "value": 0.269,
          "id": 408
        },
        {
          "value": 0.169,
          "id": 409
        },
        {
          "value": 0.113,
          "id": 410
        },
        {
          "value": 0.257,
          "id": 411
        },
        {
          "value": 0.315626006904488,
          "id": 412
        }
      ],
      [
        {
          "value": "Walworth",
          "id": 413
        },
        {
          "value": "4% below",
          "id": 414
        },
        {
          "value": 0.285,
          "id": 415
        },
        {
          "value": 0.154,
          "id": 416
        },
        {
          "value": 0.127,
          "id": 417
        },
        {
          "value": 0.297,
          "id": 418
        },
        {
          "value": 0.315626006904488,
          "id": 419
        }
      ],
      [
        {
          "value": "Walsh",
          "id": 420
        },
        {
          "value": "2% below",
          "id": 421
        },
        {
          "value": 0.302,
          "id": 422
        },
        {
          "value": 0.154,
          "id": 423
        },
        {
          "value": 0.068,
          "id": 424
        },
        {
          "value": 0.316,
          "id": 425
        },
        {
          "value": 0.315626006904488,
          "id": 426
        }
      ],
      [
        {
          "value": "Wallace",
          "id": 427
        },
        {
          "value": "1% above",
          "id": 428
        },
        {
          "value": 0.326,
          "id": 429
        },
        {
          "value": 0.15,
          "id": 430
        },
        {
          "value": 0.11,
          "id": 431
        },
        {
          "value": 0.255,
          "id": 432
        },
        {
          "value": 0.315626006904488,
          "id": 433
        }
      ],
      [
        {
          "value": "Wagoner",
          "id": 434
        },
        {
          "value": "2% above",
          "id": 435
        },
        {
          "value": 0.343,
          "id": 436
        },
        {
          "value": 0.175,
          "id": 437
        },
        {
          "value": 0.138,
          "id": 438
        },
        {
          "value": 0.313,
          "id": 439
        },
        {
          "value": 0.315626006904488,
          "id": 440
        }
      ],
      [
        {
          "value": "Wadena",
          "id": 441
        },
        {
          "value": "4% below",
          "id": 442
        },
        {
          "value": 0.281,
          "id": 443
        },
        {
          "value": 0.17,
          "id": 444
        },
        {
          "value": 0.128,
          "id": 445
        },
        {
          "value": 0.21,
          "id": 446
        },
        {
          "value": 0.315626006904488,
          "id": 447
        }
      ],
      [
        {
          "value": "Wabaunsee",
          "id": 448
        },
        {
          "value": "on par with",
          "id": 449
        },
        {
          "value": 0.32,
          "id": 450
        },
        {
          "value": 0.151,
          "id": 451
        },
        {
          "value": 0.116,
          "id": 452
        },
        {
          "value": 0.256,
          "id": 453
        },
        {
          "value": 0.315626006904488,
          "id": 454
        }
      ],
      [
        {
          "value": "Wabasha",
          "id": 455
        },
        {
          "value": "2% below",
          "id": 456
        },
        {
          "value": 0.303,
          "id": 457
        },
        {
          "value": 0.141,
          "id": 458
        },
        {
          "value": 0.086,
          "id": 459
        },
        {
          "value": 0.189,
          "id": 460
        },
        {
          "value": 0.315626006904488,
          "id": 461
        }
      ],
      [
        {
          "value": "Wabash",
          "id": 462
        },
        {
          "value": "1% above",
          "id": 463
        },
        {
          "value": 0.326,
          "id": 464
        },
        {
          "value": 0.158,
          "id": 465
        },
        {
          "value": 0.124,
          "id": 466
        },
        {
          "value": 0.279,
          "id": 467
        },
        {
          "value": 0.315626006904488,
          "id": 468
        }
      ],
      [
        {
          "value": "Vilas",
          "id": 469
        },
        {
          "value": "5% below",
          "id": 470
        },
        {
          "value": 0.274,
          "id": 471
        },
        {
          "value": 0.167,
          "id": 472
        },
        {
          "value": 0.136,
          "id": 473
        },
        {
          "value": 0.196,
          "id": 474
        },
        {
          "value": 0.315626006904488,
          "id": 475
        }
      ],
      [
        {
          "value": "Vernon",
          "id": 476
        },
        {
          "value": "2% above",
          "id": 477
        },
        {
          "value": 0.341,
          "id": 478
        },
        {
          "value": 0.177,
          "id": 479
        },
        {
          "value": 0.116,
          "id": 480
        },
        {
          "value": 0.266,
          "id": 481
        },
        {
          "value": 0.315626006904488,
          "id": 482
        }
      ],
      [
        {
          "value": "Vernon",
          "id": 483
        },
        {
          "value": "1% below",
          "id": 484
        },
        {
          "value": 0.311,
          "id": 485
        },
        {
          "value": 0.219,
          "id": 486
        },
        {
          "value": 0.162,
          "id": 487
        },
        {
          "value": 0.269,
          "id": 488
        },
        {
          "value": 0.315626006904488,
          "id": 489
        }
      ],
      [
        {
          "value": "Vermilion",
          "id": 490
        },
        {
          "value": "5% above",
          "id": 491
        },
        {
          "value": 0.373,
          "id": 492
        },
        {
          "value": 0.177,
          "id": 493
        },
        {
          "value": 0.172,
          "id": 494
        },
        {
          "value": 0.266,
          "id": 495
        },
        {
          "value": 0.315626006904488,
          "id": 496
        }
      ],
      [
        {
          "value": "Van Buren",
          "id": 497
        },
        {
          "value": "on par with",
          "id": 498
        },
        {
          "value": 0.322,
          "id": 499
        },
        {
          "value": 0.175,
          "id": 500
        },
        {
          "value": 0.128,
          "id": 501
        },
        {
          "value": 0.3,
          "id": 502
        },
        {
          "value": 0.315626006904488,
          "id": 503
        }
      ],
      [
        {
          "value": "Valley",
          "id": 504
        },
        {
          "value": "1% below",
          "id": 505
        },
        {
          "value": 0.314,
          "id": 506
        },
        {
          "value": 0.148,
          "id": 507
        },
        {
          "value": 0.128,
          "id": 508
        },
        {
          "value": 0.258,
          "id": 509
        },
        {
          "value": 0.315626006904488,
          "id": 510
        }
      ],
      [
        {
          "value": "Union",
          "id": 511
        },
        {
          "value": "1% below",
          "id": 512
        },
        {
          "value": 0.618,
          "id": 513
        },
        {
          "value": 0.30700000000000005,
          "id": 514
        },
        {
          "value": 0.251,
          "id": 515
        },
        {
          "value": 0.513,
          "id": 516
        },
        {
          "value": 0.631252013808976,
          "id": 517
        }
      ],
      [
        {
          "value": "Union",
          "id": 518
        },
        {
          "value": "5% above",
          "id": 519
        },
        {
          "value": 0.371,
          "id": 520
        },
        {
          "value": 0.18,
          "id": 521
        },
        {
          "value": 0.134,
          "id": 522
        },
        {
          "value": 0.273,
          "id": 523
        },
        {
          "value": 0.315626006904488,
          "id": 524
        }
      ],
      [
        {
          "value": "Turner",
          "id": 532
        },
        {
          "value": "1% above",
          "id": 533
        },
        {
          "value": 0.328,
          "id": 534
        },
        {
          "value": 0.144,
          "id": 535
        },
        {
          "value": 0.101,
          "id": 536
        },
        {
          "value": 0.335,
          "id": 537
        },
        {
          "value": 0.315626006904488,
          "id": 538
        }
      ],
      [
        {
          "value": "Tulsa",
          "id": 539
        },
        {
          "value": "2% below",
          "id": 540
        },
        {
          "value": 0.302,
          "id": 541
        },
        {
          "value": 0.182,
          "id": 542
        },
        {
          "value": 0.169,
          "id": 543
        },
        {
          "value": 0.287,
          "id": 544
        },
        {
          "value": 0.315626006904488,
          "id": 545
        }
      ],
      [
        {
          "value": "Tripp",
          "id": 546
        },
        {
          "value": "2% below",
          "id": 547
        },
        {
          "value": 0.301,
          "id": 548
        },
        {
          "value": 0.182,
          "id": 549
        },
        {
          "value": 0.138,
          "id": 550
        },
        {
          "value": 0.264,
          "id": 551
        },
        {
          "value": 0.315626006904488,
          "id": 552
        }
      ],
      [
        {
          "value": "Trempealeau",
          "id": 553
        },
        {
          "value": "1% below",
          "id": 554
        },
        {
          "value": 0.314,
          "id": 555
        },
        {
          "value": 0.158,
          "id": 556
        },
        {
          "value": 0.104,
          "id": 557
        },
        {
          "value": 0.242,
          "id": 558
        },
        {
          "value": 0.315626006904488,
          "id": 559
        }
      ],
      [
        {
          "value": "Trego",
          "id": 560
        },
        {
          "value": "2% below",
          "id": 561
        },
        {
          "value": 0.299,
          "id": 562
        },
        {
          "value": 0.145,
          "id": 563
        },
        {
          "value": 0.118,
          "id": 564
        },
        {
          "value": 0.273,
          "id": 565
        },
        {
          "value": 0.315626006904488,
          "id": 566
        }
      ],
      [
        {
          "value": "Traverse",
          "id": 567
        },
        {
          "value": "2% below",
          "id": 568
        },
        {
          "value": 0.299,
          "id": 569
        },
        {
          "value": 0.155,
          "id": 570
        },
        {
          "value": 0.092,
          "id": 571
        },
        {
          "value": 0.259,
          "id": 572
        },
        {
          "value": 0.315626006904488,
          "id": 573
        }
      ],
      [
        {
          "value": "Traill",
          "id": 574
        },
        {
          "value": "4% above",
          "id": 575
        },
        {
          "value": 0.362,
          "id": 576
        },
        {
          "value": 0.167,
          "id": 577
        },
        {
          "value": 0.07,
          "id": 578
        },
        {
          "value": 0.255,
          "id": 579
        },
        {
          "value": 0.315626006904488,
          "id": 580
        }
      ],
      [
        {
          "value": "Towner",
          "id": 581
        },
        {
          "value": "1% below",
          "id": 582
        },
        {
          "value": 0.307,
          "id": 583
        },
        {
          "value": 0.159,
          "id": 584
        },
        {
          "value": 0.066,
          "id": 585
        },
        {
          "value": 0.29,
          "id": 586
        },
        {
          "value": 0.315626006904488,
          "id": 587
        }
      ],
      [
        {
          "value": "Todd",
          "id": 588
        },
        {
          "value": "6% above",
          "id": 589
        },
        {
          "value": 0.375,
          "id": 590
        },
        {
          "value": 0.382,
          "id": 591
        },
        {
          "value": 0.228,
          "id": 592
        },
        {
          "value": 0.285,
          "id": 593
        },
        {
          "value": 0.315626006904488,
          "id": 594
        }
      ],
      [
        {
          "value": "Todd",
          "id": 595
        },
        {
          "value": "3% below",
          "id": 596
        },
        {
          "value": 0.292,
          "id": 597
        },
        {
          "value": 0.165,
          "id": 598
        },
        {
          "value": 0.102,
          "id": 599
        },
        {
          "value": 0.262,
          "id": 600
        },
        {
          "value": 0.315626006904488,
          "id": 601
        }
      ],
      [
        {
          "value": "Tillman",
          "id": 602
        },
        {
          "value": "2% above",
          "id": 603
        },
        {
          "value": 0.343,
          "id": 604
        },
        {
          "value": 0.209,
          "id": 605
        },
        {
          "value": 0.149,
          "id": 606
        },
        {
          "value": 0.362,
          "id": 607
        },
        {
          "value": 0.315626006904488,
          "id": 608
        }
      ],
      [
        {
          "value": "Thurston",
          "id": 609
        },
        {
          "value": "9% above",
          "id": 610
        },
        {
          "value": 0.408,
          "id": 611
        },
        {
          "value": 0.312,
          "id": 612
        },
        {
          "value": 0.178,
          "id": 613
        },
        {
          "value": 0.304,
          "id": 614
        },
        {
          "value": 0.315626006904488,
          "id": 615
        }
      ],
      [
        {
          "value": "Thomas",
          "id": 616
        },
        {
          "value": "1% below",
          "id": 617
        },
        {
          "value": 0.308,
          "id": 618
        },
        {
          "value": 0.149,
          "id": 619
        },
        {
          "value": 0.122,
          "id": 620
        },
        {
          "value": 0.313,
          "id": 621
        },
        {
          "value": 0.315626006904488,
          "id": 622
        }
      ],
      [
        {
          "value": "Thomas",
          "id": 623
        },
        {
          "value": "on par with",
          "id": 624
        },
        {
          "value": 0.323,
          "id": 625
        },
        {
          "value": 0.16,
          "id": 626
        },
        {
          "value": 0.131,
          "id": 627
        },
        {
          "value": 0.26,
          "id": 628
        },
        {
          "value": 0.315626006904488,
          "id": 629
        }
      ],
      [
        {
          "value": "Thayer",
          "id": 630
        },
        {
          "value": "2% below",
          "id": 631
        },
        {
          "value": 0.301,
          "id": 632
        },
        {
          "value": 0.152,
          "id": 633
        },
        {
          "value": 0.12,
          "id": 634
        },
        {
          "value": 0.301,
          "id": 635
        },
        {
          "value": 0.315626006904488,
          "id": 636
        }
      ],
      [
        {
          "value": "Texas",
          "id": 637
        },
        {
          "value": "1% below",
          "id": 638
        },
        {
          "value": 0.62,
          "id": 639
        },
        {
          "value": 0.416,
          "id": 640
        },
        {
          "value": 0.27,
          "id": 641
        },
        {
          "value": 0.626,
          "id": 642
        },
        {
          "value": 0.631252013808976,
          "id": 643
        }
      ],
      [
        {
          "value": "Tazewell",
          "id": 651
        },
        {
          "value": "3% below",
          "id": 652
        },
        {
          "value": 0.29,
          "id": 653
        },
        {
          "value": 0.151,
          "id": 654
        },
        {
          "value": 0.123,
          "id": 655
        },
        {
          "value": 0.26,
          "id": 656
        },
        {
          "value": 0.315626006904488,
          "id": 657
        }
      ],
      [
        {
          "value": "Taylor",
          "id": 658
        },
        {
          "value": "2% above",
          "id": 659
        },
        {
          "value": 0.342,
          "id": 660
        },
        {
          "value": 0.164,
          "id": 661
        },
        {
          "value": 0.121,
          "id": 662
        },
        {
          "value": 0.268,
          "id": 663
        },
        {
          "value": 0.315626006904488,
          "id": 664
        }
      ],
      [
        {
          "value": "Taylor",
          "id": 665
        },
        {
          "value": "2% below",
          "id": 666
        },
        {
          "value": 0.301,
          "id": 667
        },
        {
          "value": 0.174,
          "id": 668
        },
        {
          "value": 0.115,
          "id": 669
        },
        {
          "value": 0.24,
          "id": 670
        },
        {
          "value": 0.315626006904488,
          "id": 671
        }
      ],
      [
        {
          "value": "Taney",
          "id": 672
        },
        {
          "value": "1% below",
          "id": 673
        },
        {
          "value": 0.308,
          "id": 674
        },
        {
          "value": 0.225,
          "id": 675
        },
        {
          "value": 0.179,
          "id": 676
        },
        {
          "value": 0.308,
          "id": 677
        },
        {
          "value": 0.315626006904488,
          "id": 678
        }
      ],
      [
        {
          "value": "Tama",
          "id": 679
        },
        {
          "value": "1% above",
          "id": 680
        },
        {
          "value": 0.326,
          "id": 681
        },
        {
          "value": 0.175,
          "id": 682
        },
        {
          "value": 0.119,
          "id": 683
        },
        {
          "value": 0.332,
          "id": 684
        },
        {
          "value": 0.315626006904488,
          "id": 685
        }
      ],
      [
        {
          "value": "Swift",
          "id": 686
        },
        {
          "value": "4% below",
          "id": 687
        },
        {
          "value": 0.28,
          "id": 688
        },
        {
          "value": 0.16,
          "id": 689
        },
        {
          "value": 0.103,
          "id": 690
        },
        {
          "value": 0.276,
          "id": 691
        },
        {
          "value": 0.315626006904488,
          "id": 692
        }
      ],
      [
        {
          "value": "Sumner",
          "id": 693
        },
        {
          "value": "2% above",
          "id": 694
        },
        {
          "value": 0.343,
          "id": 695
        },
        {
          "value": 0.159,
          "id": 696
        },
        {
          "value": 0.138,
          "id": 697
        },
        {
          "value": 0.303,
          "id": 698
        },
        {
          "value": 0.315626006904488,
          "id": 699
        }
      ],
      [
        {
          "value": "Sully",
          "id": 700
        },
        {
          "value": "on par with",
          "id": 701
        },
        {
          "value": 0.321,
          "id": 702
        },
        {
          "value": 0.13,
          "id": 703
        },
        {
          "value": 0.096,
          "id": 704
        },
        {
          "value": 0.285,
          "id": 705
        },
        {
          "value": 0.315626006904488,
          "id": 706
        }
      ],
      [
        {
          "value": "Sullivan",
          "id": 707
        },
        {
          "value": "2% above",
          "id": 708
        },
        {
          "value": 0.341,
          "id": 709
        },
        {
          "value": 0.215,
          "id": 710
        },
        {
          "value": 0.132,
          "id": 711
        },
        {
          "value": 0.319,
          "id": 712
        },
        {
          "value": 0.315626006904488,
          "id": 713
        }
      ],
      [
        {
          "value": "Stutsman",
          "id": 714
        },
        {
          "value": "2% below",
          "id": 715
        },
        {
          "value": 0.302,
          "id": 716
        },
        {
          "value": 0.167,
          "id": 717
        },
        {
          "value": 0.076,
          "id": 718
        },
        {
          "value": 0.289,
          "id": 719
        },
        {
          "value": 0.315626006904488,
          "id": 720
        }
      ],
      [
        {
          "value": "Story",
          "id": 721
        },
        {
          "value": "6% below",
          "id": 722
        },
        {
          "value": 0.256,
          "id": 723
        },
        {
          "value": 0.167,
          "id": 724
        },
        {
          "value": 0.153,
          "id": 725
        },
        {
          "value": 0.195,
          "id": 726
        },
        {
          "value": 0.315626006904488,
          "id": 727
        }
      ],
      [
        {
          "value": "Stone",
          "id": 728
        },
        {
          "value": "on par with",
          "id": 729
        },
        {
          "value": 0.322,
          "id": 730
        },
        {
          "value": 0.197,
          "id": 731
        },
        {
          "value": 0.163,
          "id": 732
        },
        {
          "value": 0.281,
          "id": 733
        },
        {
          "value": 0.315626006904488,
          "id": 734
        }
      ],
      [
        {
          "value": "Stoddard",
          "id": 735
        },
        {
          "value": "2% above",
          "id": 736
        },
        {
          "value": 0.341,
          "id": 737
        },
        {
          "value": 0.199,
          "id": 738
        },
        {
          "value": 0.16,
          "id": 739
        },
        {
          "value": 0.321,
          "id": 740
        },
        {
          "value": 0.315626006904488,
          "id": 741
        }
      ],
      [
        {
          "value": "Stevens",
          "id": 742
        },
        {
          "value": "3% below",
          "id": 743
        },
        {
          "value": 0.292,
          "id": 744
        },
        {
          "value": 0.166,
          "id": 745
        },
        {
          "value": 0.103,
          "id": 746
        },
        {
          "value": 0.215,
          "id": 747
        },
        {
          "value": 0.315626006904488,
          "id": 748
        }
      ],
      [
        {
          "value": "Stevens",
          "id": 749
        },
        {
          "value": "2% above",
          "id": 750
        },
        {
          "value": 0.343,
          "id": 751
        },
        {
          "value": 0.16,
          "id": 752
        },
        {
          "value": 0.089,
          "id": 753
        },
        {
          "value": 0.293,
          "id": 754
        },
        {
          "value": 0.315626006904488,
          "id": 755
        }
      ],
      [
        {
          "value": "Stephenson",
          "id": 756
        },
        {
          "value": "3% below",
          "id": 757
        },
        {
          "value": 0.288,
          "id": 758
        },
        {
          "value": 0.161,
          "id": 759
        },
        {
          "value": 0.155,
          "id": 760
        },
        {
          "value": 0.264,
          "id": 761
        },
        {
          "value": 0.315626006904488,
          "id": 762
        }
      ],
      [
        {
          "value": "Stephens",
          "id": 763
        },
        {
          "value": "1% above",
          "id": 764
        },
        {
          "value": 0.328,
          "id": 765
        },
        {
          "value": 0.197,
          "id": 766
        },
        {
          "value": 0.154,
          "id": 767
        },
        {
          "value": 0.354,
          "id": 768
        },
        {
          "value": 0.315626006904488,
          "id": 769
        }
      ],
      [
        {
          "value": "Steele",
          "id": 770
        },
        {
          "value": "1% below",
          "id": 771
        },
        {
          "value": 0.312,
          "id": 772
        },
        {
          "value": 0.153,
          "id": 773
        },
        {
          "value": 0.053,
          "id": 774
        },
        {
          "value": 0.285,
          "id": 775
        },
        {
          "value": 0.315626006904488,
          "id": 776
        }
      ],
      [
        {
          "value": "Steele",
          "id": 777
        },
        {
          "value": "4% below",
          "id": 778
        },
        {
          "value": 0.283,
          "id": 779
        },
        {
          "value": 0.161,
          "id": 780
        },
        {
          "value": 0.091,
          "id": 781
        },
        {
          "value": 0.194,
          "id": 782
        },
        {
          "value": 0.315626006904488,
          "id": 783
        }
      ],
      [
        {
          "value": "Stearns",
          "id": 784
        },
        {
          "value": "5% below",
          "id": 785
        },
        {
          "value": 0.272,
          "id": 786
        },
        {
          "value": 0.147,
          "id": 787
        },
        {
          "value": 0.109,
          "id": 788
        },
        {
          "value": 0.208,
          "id": 789
        },
        {
          "value": 0.315626006904488,
          "id": 790
        }
      ],
      [
        {
          "value": "Ste. Genevieve",
          "id": 791
        },
        {
          "value": "3% below",
          "id": 792
        },
        {
          "value": 0.288,
          "id": 793
        },
        {
          "value": 0.195,
          "id": 794
        },
        {
          "value": 0.137,
          "id": 795
        },
        {
          "value": 0.286,
          "id": 796
        },
        {
          "value": 0.315626006904488,
          "id": 797
        }
      ],
      [
        {
          "value": "Stark",
          "id": 798
        },
        {
          "value": "3% below",
          "id": 799
        },
        {
          "value": 0.288,
          "id": 800
        },
        {
          "value": 0.171,
          "id": 801
        },
        {
          "value": 0.054,
          "id": 802
        },
        {
          "value": 0.263,
          "id": 803
        },
        {
          "value": 0.315626006904488,
          "id": 804
        }
      ],
      [
        {
          "value": "Stark",
          "id": 805
        },
        {
          "value": "on par with",
          "id": 806
        },
        {
          "value": 0.32,
          "id": 807
        },
        {
          "value": 0.14,
          "id": 808
        },
        {
          "value": 0.13,
          "id": 809
        },
        {
          "value": 0.281,
          "id": 810
        },
        {
          "value": 0.315626006904488,
          "id": 811
        }
      ],
      [
        {
          "value": "Stanton",
          "id": 812
        },
        {
          "value": "1% above",
          "id": 813
        },
        {
          "value": 0.332,
          "id": 814
        },
        {
          "value": 0.168,
          "id": 815
        },
        {
          "value": 0.105,
          "id": 816
        },
        {
          "value": 0.249,
          "id": 817
        },
        {
          "value": 0.315626006904488,
          "id": 818
        }
      ],
      [
        {
          "value": "Stanton",
          "id": 819
        },
        {
          "value": "2% below",
          "id": 820
        },
        {
          "value": 0.297,
          "id": 821
        },
        {
          "value": 0.165,
          "id": 822
        },
        {
          "value": 0.059,
          "id": 823
        },
        {
          "value": 0.323,
          "id": 824
        },
        {
          "value": 0.315626006904488,
          "id": 825
        }
      ],
      [
        {
          "value": "Stanley",
          "id": 826
        },
        {
          "value": "1% above",
          "id": 827
        },
        {
          "value": 0.328,
          "id": 828
        },
        {
          "value": 0.148,
          "id": 829
        },
        {
          "value": 0.098,
          "id": 830
        },
        {
          "value": 0.267,
          "id": 831
        },
        {
          "value": 0.315626006904488,
          "id": 832
        }
      ],
      [
        {
          "value": "Stafford",
          "id": 833
        },
        {
          "value": "1% above",
          "id": 834
        },
        {
          "value": 0.331,
          "id": 835
        },
        {
          "value": 0.17,
          "id": 836
        },
        {
          "value": 0.119,
          "id": 837
        },
        {
          "value": 0.326,
          "id": 838
        },
        {
          "value": 0.315626006904488,
          "id": 839
        }
      ],
      [
        {
          "value": "St. Louis City",
          "id": 840
        },
        {
          "value": "on par with",
          "id": 841
        },
        {
          "value": 0.318,
          "id": 842
        },
        {
          "value": 0.255,
          "id": 843
        },
        {
          "value": 0.258,
          "id": 844
        },
        {
          "value": 0.252,
          "id": 845
        },
        {
          "value": 0.315626006904488,
          "id": 846
        }
      ],
      [
        {
          "value": "St. Louis",
          "id": 847
        },
        {
          "value": "4% below",
          "id": 848
        },
        {
          "value": 0.276,
          "id": 849
        },
        {
          "value": 0.166,
          "id": 850
        },
        {
          "value": 0.161,
          "id": 851
        },
        {
          "value": 0.234,
          "id": 852
        },
        {
          "value": 0.315626006904488,
          "id": 853
        }
      ],
      [
        {
          "value": "St. Louis",
          "id": 854
        },
        {
          "value": "6% below",
          "id": 855
        },
        {
          "value": 0.255,
          "id": 856
        },
        {
          "value": 0.193,
          "id": 857
        },
        {
          "value": 0.126,
          "id": 858
        },
        {
          "value": 0.189,
          "id": 859
        },
        {
          "value": 0.315626006904488,
          "id": 860
        }
      ],
      [
        {
          "value": "St. Francois",
          "id": 861
        },
        {
          "value": "2% above",
          "id": 862
        },
        {
          "value": 0.336,
          "id": 863
        },
        {
          "value": 0.229,
          "id": 864
        },
        {
          "value": 0.176,
          "id": 865
        },
        {
          "value": 0.323,
          "id": 866
        },
        {
          "value": 0.315626006904488,
          "id": 867
        }
      ],
      [
        {
          "value": "St. Croix",
          "id": 868
        },
        {
          "value": "4% below",
          "id": 869
        },
        {
          "value": 0.284,
          "id": 870
        },
        {
          "value": 0.146,
          "id": 871
        },
        {
          "value": 0.09,
          "id": 872
        },
        {
          "value": 0.225,
          "id": 873
        },
        {
          "value": 0.315626006904488,
          "id": 874
        }
      ],
      [
        {
          "value": "St. Clair",
          "id": 875
        },
        {
          "value": "1% below",
          "id": 876
        },
        {
          "value": 0.308,
          "id": 877
        },
        {
          "value": 0.201,
          "id": 878
        },
        {
          "value": 0.168,
          "id": 879
        },
        {
          "value": 0.344,
          "id": 880
        },
        {
          "value": 0.315626006904488,
          "id": 881
        }
      ],
      [
        {
          "value": "St. Clair",
          "id": 882
        },
        {
          "value": "on par with",
          "id": 883
        },
        {
          "value": 0.322,
          "id": 884
        },
        {
          "value": 0.174,
          "id": 885
        },
        {
          "value": 0.174,
          "id": 886
        },
        {
          "value": 0.282,
          "id": 887
        },
        {
          "value": 0.315626006904488,
          "id": 888
        }
      ],
      [
        {
          "value": "St. Charles",
          "id": 889
        },
        {
          "value": "4% below",
          "id": 890
        },
        {
          "value": 0.283,
          "id": 891
        },
        {
          "value": 0.164,
          "id": 892
        },
        {
          "value": 0.118,
          "id": 893
        },
        {
          "value": 0.211,
          "id": 894
        },
        {
          "value": 0.315626006904488,
          "id": 895
        }
      ],
      [
        {
          "value": "Spink",
          "id": 896
        },
        {
          "value": "1% below",
          "id": 897
        },
        {
          "value": 0.305,
          "id": 898
        },
        {
          "value": 0.152,
          "id": 899
        },
        {
          "value": 0.116,
          "id": 900
        },
        {
          "value": 0.251,
          "id": 901
        },
        {
          "value": 0.315626006904488,
          "id": 902
        }
      ],
      [
        {
          "value": "Smith",
          "id": 903
        },
        {
          "value": "1% above",
          "id": 904
        },
        {
          "value": 0.327,
          "id": 905
        },
        {
          "value": 0.17,
          "id": 906
        },
        {
          "value": 0.134,
          "id": 907
        },
        {
          "value": 0.274,
          "id": 908
        },
        {
          "value": 0.315626006904488,
          "id": 909
        }
      ],
      [
        {
          "value": "Slope",
          "id": 910
        },
        {
          "value": "4% below",
          "id": 911
        },
        {
          "value": 0.282,
          "id": 912
        },
        {
          "value": 0.16,
          "id": 913
        },
        {
          "value": 0.042,
          "id": 914
        },
        {
          "value": 0.288,
          "id": 915
        },
        {
          "value": 0.315626006904488,
          "id": 916
        }
      ],
      [
        {
          "value": "Sioux",
          "id": 917
        },
        {
          "value": "7% above",
          "id": 918
        },
        {
          "value": 0.391,
          "id": 919
        },
        {
          "value": 0.4,
          "id": 920
        },
        {
          "value": 0.164,
          "id": 921
        },
        {
          "value": 0.31,
          "id": 922
        },
        {
          "value": 0.315626006904488,
          "id": 923
        }
      ],
      [
        {
          "value": "Sioux",
          "id": 924
        },
        {
          "value": "1% below",
          "id": 925
        },
        {
          "value": 0.308,
          "id": 926
        },
        {
          "value": 0.156,
          "id": 927
        },
        {
          "value": 0.115,
          "id": 928
        },
        {
          "value": 0.314,
          "id": 929
        },
        {
          "value": 0.315626006904488,
          "id": 930
        }
      ],
      [
        {
          "value": "Sioux",
          "id": 931
        },
        {
          "value": "4% below",
          "id": 932
        },
        {
          "value": 0.277,
          "id": 933
        },
        {
          "value": 0.152,
          "id": 934
        },
        {
          "value": 0.091,
          "id": 935
        },
        {
          "value": 0.252,
          "id": 936
        },
        {
          "value": 0.315626006904488,
          "id": 937
        }
      ],
      [
        {
          "value": "Sibley",
          "id": 938
        },
        {
          "value": "1% below",
          "id": 939
        },
        {
          "value": 0.314,
          "id": 940
        },
        {
          "value": 0.152,
          "id": 941
        },
        {
          "value": 0.089,
          "id": 942
        },
        {
          "value": 0.276,
          "id": 943
        },
        {
          "value": 0.315626006904488,
          "id": 944
        }
      ],
      [
        {
          "value": "Sherman",
          "id": 945
        },
        {
          "value": "2% above",
          "id": 946
        },
        {
          "value": 0.344,
          "id": 947
        },
        {
          "value": 0.15,
          "id": 948
        },
        {
          "value": 0.121,
          "id": 949
        },
        {
          "value": 0.304,
          "id": 950
        },
        {
          "value": 0.315626006904488,
          "id": 951
        }
      ],
      [
        {
          "value": "Sherman",
          "id": 952
        },
        {
          "value": "on par with",
          "id": 953
        },
        {
          "value": 0.315,
          "id": 954
        },
        {
          "value": 0.177,
          "id": 955
        },
        {
          "value": 0.148,
          "id": 956
        },
        {
          "value": 0.296,
          "id": 957
        },
        {
          "value": 0.315626006904488,
          "id": 958
        }
      ],
      [
        {
          "value": "Sheridan",
          "id": 959
        },
        {
          "value": "on par with",
          "id": 960
        },
        {
          "value": 0.632,
          "id": 961
        },
        {
          "value": 0.323,
          "id": 962
        },
        {
          "value": 0.197,
          "id": 963
        },
        {
          "value": 0.625,
          "id": 964
        },
        {
          "value": 0.631252013808976,
          "id": 965
        }
      ],
      [
        {
          "value": "Sheridan",
          "id": 966
        },
        {
          "value": "2% below",
          "id": 967
        },
        {
          "value": 0.301,
          "id": 968
        },
        {
          "value": 0.184,
          "id": 969
        },
        {
          "value": 0.137,
          "id": 970
        },
        {
          "value": 0.318,
          "id": 971
        },
        {
          "value": 0.315626006904488,
          "id": 972
        }
      ],
      [
        {
          "value": "Sherburne",
          "id": 980
        },
        {
          "value": "5% below",
          "id": 981
        },
        {
          "value": 0.273,
          "id": 982
        },
        {
          "value": 0.16,
          "id": 983
        },
        {
          "value": 0.087,
          "id": 984
        },
        {
          "value": 0.222,
          "id": 985
        },
        {
          "value": 0.315626006904488,
          "id": 986
        }
      ],
      [
        {
          "value": "Shelby",
          "id": 987
        },
        {
          "value": "1% above",
          "id": 988
        },
        {
          "value": 0.328,
          "id": 989
        },
        {
          "value": 0.206,
          "id": 990
        },
        {
          "value": 0.158,
          "id": 991
        },
        {
          "value": 0.279,
          "id": 992
        },
        {
          "value": 0.315626006904488,
          "id": 993
        }
      ],
      [
        {
          "value": "Shelby",
          "id": 994
        },
        {
          "value": "1% below",
          "id": 995
        },
        {
          "value": 0.308,
          "id": 996
        },
        {
          "value": 0.164,
          "id": 997
        },
        {
          "value": 0.11,
          "id": 998
        },
        {
          "value": 0.325,
          "id": 999
        },
        {
          "value": 0.315626006904488,
          "id": 1000
        }
      ],
      [
        {
          "value": "Shelby",
          "id": 1001
        },
        {
          "value": "on par with",
          "id": 1002
        },
        {
          "value": 0.324,
          "id": 1003
        },
        {
          "value": 0.154,
          "id": 1004
        },
        {
          "value": 0.127,
          "id": 1005
        },
        {
          "value": 0.309,
          "id": 1006
        },
        {
          "value": 0.315626006904488,
          "id": 1007
        }
      ],
      [
        {
          "value": "Sheboygan",
          "id": 1008
        },
        {
          "value": "4% below",
          "id": 1009
        },
        {
          "value": 0.275,
          "id": 1010
        },
        {
          "value": 0.151,
          "id": 1011
        },
        {
          "value": 0.106,
          "id": 1012
        },
        {
          "value": 0.24,
          "id": 1013
        },
        {
          "value": 0.315626006904488,
          "id": 1014
        }
      ],
      [
        {
          "value": "Shawnee",
          "id": 1015
        },
        {
          "value": "on par with",
          "id": 1016
        },
        {
          "value": 0.323,
          "id": 1017
        },
        {
          "value": 0.203,
          "id": 1018
        },
        {
          "value": 0.156,
          "id": 1019
        },
        {
          "value": 0.241,
          "id": 1020
        },
        {
          "value": 0.315626006904488,
          "id": 1021
        }
      ],
      [
        {
          "value": "Shawano",
          "id": 1022
        },
        {
          "value": "1% above",
          "id": 1023
        },
        {
          "value": 0.334,
          "id": 1024
        },
        {
          "value": 0.169,
          "id": 1025
        },
        {
          "value": 0.118,
          "id": 1026
        },
        {
          "value": 0.237,
          "id": 1027
        },
        {
          "value": 0.315626006904488,
          "id": 1028
        }
      ],
      [
        {
          "value": "Shannon",
          "id": 1029
        },
        {
          "value": "13% above",
          "id": 1030
        },
        {
          "value": 0.445,
          "id": 1031
        },
        {
          "value": 0.412,
          "id": 1032
        },
        {
          "value": 0.262,
          "id": 1033
        },
        {
          "value": 0.238,
          "id": 1034
        },
        {
          "value": 0.315626006904488,
          "id": 1035
        }
      ],
      [
        {
          "value": "Shannon",
          "id": 1036
        },
        {
          "value": "1% above",
          "id": 1037
        },
        {
          "value": 0.333,
          "id": 1038
        },
        {
          "value": 0.23,
          "id": 1039
        },
        {
          "value": 0.179,
          "id": 1040
        },
        {
          "value": 0.286,
          "id": 1041
        },
        {
          "value": 0.315626006904488,
          "id": 1042
        }
      ],
      [
        {
          "value": "Seward",
          "id": 1043
        },
        {
          "value": "3% below",
          "id": 1044
        },
        {
          "value": 0.291,
          "id": 1045
        },
        {
          "value": 0.136,
          "id": 1046
        },
        {
          "value": 0.117,
          "id": 1047
        },
        {
          "value": 0.234,
          "id": 1048
        },
        {
          "value": 0.315626006904488,
          "id": 1049
        }
      ],
      [
        {
          "value": "Seward",
          "id": 1050
        },
        {
          "value": "3% above",
          "id": 1051
        },
        {
          "value": 0.349,
          "id": 1052
        },
        {
          "value": 0.18,
          "id": 1053
        },
        {
          "value": 0.08,
          "id": 1054
        },
        {
          "value": 0.27,
          "id": 1055
        },
        {
          "value": 0.315626006904488,
          "id": 1056
        }
      ],
      [
        {
          "value": "Sequoyah",
          "id": 1057
        },
        {
          "value": "5% above",
          "id": 1058
        },
        {
          "value": 0.374,
          "id": 1059
        },
        {
          "value": 0.238,
          "id": 1060
        },
        {
          "value": 0.192,
          "id": 1061
        },
        {
          "value": 0.341,
          "id": 1062
        },
        {
          "value": 0.315626006904488,
          "id": 1063
        }
      ],
      [
        {
          "value": "Seminole",
          "id": 1064
        },
        {
          "value": "4% above",
          "id": 1065
        },
        {
          "value": 0.36,
          "id": 1066
        },
        {
          "value": 0.255,
          "id": 1067
        },
        {
          "value": 0.188,
          "id": 1068
        },
        {
          "value": 0.387,
          "id": 1069
        },
        {
          "value": 0.315626006904488,
          "id": 1070
        }
      ],
      [
        {
          "value": "Sedgwick",
          "id": 1071
        },
        {
          "value": "1% below",
          "id": 1072
        },
        {
          "value": 0.305,
          "id": 1073
        },
        {
          "value": 0.176,
          "id": 1074
        },
        {
          "value": 0.152,
          "id": 1075
        },
        {
          "value": 0.248,
          "id": 1076
        },
        {
          "value": 0.315626006904488,
          "id": 1077
        }
      ],
      [
        {
          "value": "Scotts Bluff",
          "id": 1078
        },
        {
          "value": "2% above",
          "id": 1079
        },
        {
          "value": 0.342,
          "id": 1080
        },
        {
          "value": 0.192,
          "id": 1081
        },
        {
          "value": 0.111,
          "id": 1082
        },
        {
          "value": 0.252,
          "id": 1083
        },
        {
          "value": 0.315626006904488,
          "id": 1084
        }
      ],
      [
        {
          "value": "Scott",
          "id": 1085
        },
        {
          "value": "4% above",
          "id": 1086
        },
        {
          "value": 0.363,
          "id": 1087
        },
        {
          "value": 0.233,
          "id": 1088
        },
        {
          "value": 0.173,
          "id": 1089
        },
        {
          "value": 0.34,
          "id": 1090
        },
        {
          "value": 0.315626006904488,
          "id": 1091
        }
      ],
      [
        {
          "value": "Scott",
          "id": 1092
        },
        {
          "value": "7% below",
          "id": 1093
        },
        {
          "value": 0.246,
          "id": 1094
        },
        {
          "value": 0.14,
          "id": 1095
        },
        {
          "value": 0.069,
          "id": 1096
        },
        {
          "value": 0.165,
          "id": 1097
        },
        {
          "value": 0.315626006904488,
          "id": 1098
        }
      ],
      [
        {
          "value": "Scott",
          "id": 1099
        },
        {
          "value": "1% below",
          "id": 1100
        },
        {
          "value": 0.937,
          "id": 1101
        },
        {
          "value": 0.502,
          "id": 1102
        },
        {
          "value": 0.38,
          "id": 1103
        },
        {
          "value": 0.773,
          "id": 1104
        },
        {
          "value": 0.9468780207134639,
          "id": 1105
        }
      ],
      [
        {
          "value": "Scotland",
          "id": 1120
        },
        {
          "value": "3% above",
          "id": 1121
        },
        {
          "value": 0.346,
          "id": 1122
        },
        {
          "value": 0.205,
          "id": 1123
        },
        {
          "value": 0.144,
          "id": 1124
        },
        {
          "value": 0.309,
          "id": 1125
        },
        {
          "value": 0.315626006904488,
          "id": 1126
        }
      ],
      [
        {
          "value": "Schuyler",
          "id": 1127
        },
        {
          "value": "on par with",
          "id": 1128
        },
        {
          "value": 0.319,
          "id": 1129
        },
        {
          "value": 0.224,
          "id": 1130
        },
        {
          "value": 0.175,
          "id": 1131
        },
        {
          "value": 0.298,
          "id": 1132
        },
        {
          "value": 0.315626006904488,
          "id": 1133
        }
      ],
      [
        {
          "value": "Schuyler",
          "id": 1134
        },
        {
          "value": "1% below",
          "id": 1135
        },
        {
          "value": 0.307,
          "id": 1136
        },
        {
          "value": 0.157,
          "id": 1137
        },
        {
          "value": 0.124,
          "id": 1138
        },
        {
          "value": 0.258,
          "id": 1139
        },
        {
          "value": 0.315626006904488,
          "id": 1140
        }
      ],
      [
        {
          "value": "Sawyer",
          "id": 1141
        },
        {
          "value": "4% below",
          "id": 1142
        },
        {
          "value": 0.284,
          "id": 1143
        },
        {
          "value": 0.197,
          "id": 1144
        },
        {
          "value": 0.148,
          "id": 1145
        },
        {
          "value": 0.266,
          "id": 1146
        },
        {
          "value": 0.315626006904488,
          "id": 1147
        }
      ],
      [
        {
          "value": "Saunders",
          "id": 1148
        },
        {
          "value": "5% below",
          "id": 1149
        },
        {
          "value": 0.273,
          "id": 1150
        },
        {
          "value": 0.159,
          "id": 1151
        },
        {
          "value": 0.112,
          "id": 1152
        },
        {
          "value": 0.272,
          "id": 1153
        },
        {
          "value": 0.315626006904488,
          "id": 1154
        }
      ],
      [
        {
          "value": "Sauk",
          "id": 1155
        },
        {
          "value": "2% below",
          "id": 1156
        },
        {
          "value": 0.303,
          "id": 1157
        },
        {
          "value": 0.159,
          "id": 1158
        },
        {
          "value": 0.113,
          "id": 1159
        },
        {
          "value": 0.27,
          "id": 1160
        },
        {
          "value": 0.315626006904488,
          "id": 1161
        }
      ],
      [
        {
          "value": "Sarpy",
          "id": 1162
        },
        {
          "value": "3% below",
          "id": 1163
        },
        {
          "value": 0.289,
          "id": 1164
        },
        {
          "value": 0.145,
          "id": 1165
        },
        {
          "value": 0.11,
          "id": 1166
        },
        {
          "value": 0.204,
          "id": 1167
        },
        {
          "value": 0.315626006904488,
          "id": 1168
        }
      ],
      [
        {
          "value": "Sargent",
          "id": 1169
        },
        {
          "value": "on par with",
          "id": 1170
        },
        {
          "value": 0.317,
          "id": 1171
        },
        {
          "value": 0.154,
          "id": 1172
        },
        {
          "value": 0.057,
          "id": 1173
        },
        {
          "value": 0.33,
          "id": 1174
        },
        {
          "value": 0.315626006904488,
          "id": 1175
        }
      ],
      [
        {
          "value": "Sangamon",
          "id": 1176
        },
        {
          "value": "2% below",
          "id": 1177
        },
        {
          "value": 0.299,
          "id": 1178
        },
        {
          "value": 0.164,
          "id": 1179
        },
        {
          "value": 0.142,
          "id": 1180
        },
        {
          "value": 0.252,
          "id": 1181
        },
        {
          "value": 0.315626006904488,
          "id": 1182
        }
      ],
      [
        {
          "value": "Sanborn",
          "id": 1183
        },
        {
          "value": "2% below",
          "id": 1184
        },
        {
          "value": 0.304,
          "id": 1185
        },
        {
          "value": 0.154,
          "id": 1186
        },
        {
          "value": 0.109,
          "id": 1187
        },
        {
          "value": 0.283,
          "id": 1188
        },
        {
          "value": 0.315626006904488,
          "id": 1189
        }
      ],
      [
        {
          "value": "Saline",
          "id": 1190
        },
        {
          "value": "1% above",
          "id": 1191
        },
        {
          "value": 0.656,
          "id": 1192
        },
        {
          "value": 0.354,
          "id": 1193
        },
        {
          "value": 0.265,
          "id": 1194
        },
        {
          "value": 0.5680000000000001,
          "id": 1195
        },
        {
          "value": 0.631252013808976,
          "id": 1196
        }
      ],
      [
        {
          "value": "Saline",
          "id": 1197
        },
        {
          "value": "6% above",
          "id": 1198
        },
        {
          "value": 0.38,
          "id": 1199
        },
        {
          "value": 0.225,
          "id": 1200
        },
        {
          "value": 0.155,
          "id": 1201
        },
        {
          "value": 0.29,
          "id": 1202
        },
        {
          "value": 0.315626006904488,
          "id": 1203
        }
      ],
      [
        {
          "value": "Saline",
          "id": 1211
        },
        {
          "value": "on par with",
          "id": 1212
        },
        {
          "value": 0.321,
          "id": 1213
        },
        {
          "value": 0.184,
          "id": 1214
        },
        {
          "value": 0.161,
          "id": 1215
        },
        {
          "value": 0.26,
          "id": 1216
        },
        {
          "value": 0.315626006904488,
          "id": 1217
        }
      ],
      [
        {
          "value": "Sac",
          "id": 1218
        },
        {
          "value": "1% below",
          "id": 1219
        },
        {
          "value": 0.312,
          "id": 1220
        },
        {
          "value": 0.149,
          "id": 1221
        },
        {
          "value": 0.107,
          "id": 1222
        },
        {
          "value": 0.257,
          "id": 1223
        },
        {
          "value": 0.315626006904488,
          "id": 1224
        }
      ],
      [
        {
          "value": "Russell",
          "id": 1225
        },
        {
          "value": "2% below",
          "id": 1226
        },
        {
          "value": 0.299,
          "id": 1227
        },
        {
          "value": 0.171,
          "id": 1228
        },
        {
          "value": 0.142,
          "id": 1229
        },
        {
          "value": 0.234,
          "id": 1230
        },
        {
          "value": 0.315626006904488,
          "id": 1231
        }
      ],
      [
        {
          "value": "Rusk",
          "id": 1232
        },
        {
          "value": "on par with",
          "id": 1233
        },
        {
          "value": 0.316,
          "id": 1234
        },
        {
          "value": 0.182,
          "id": 1235
        },
        {
          "value": 0.14,
          "id": 1236
        },
        {
          "value": 0.284,
          "id": 1237
        },
        {
          "value": 0.315626006904488,
          "id": 1238
        }
      ],
      [
        {
          "value": "Rush",
          "id": 1239
        },
        {
          "value": "1% below",
          "id": 1240
        },
        {
          "value": 0.311,
          "id": 1241
        },
        {
          "value": 0.161,
          "id": 1242
        },
        {
          "value": 0.139,
          "id": 1243
        },
        {
          "value": 0.296,
          "id": 1244
        },
        {
          "value": 0.315626006904488,
          "id": 1245
        }
      ],
      [
        {
          "value": "Roseau",
          "id": 1246
        },
        {
          "value": "1% above",
          "id": 1247
        },
        {
          "value": 0.332,
          "id": 1248
        },
        {
          "value": 0.162,
          "id": 1249
        },
        {
          "value": 0.094,
          "id": 1250
        },
        {
          "value": 0.26,
          "id": 1251
        },
        {
          "value": 0.315626006904488,
          "id": 1252
        }
      ],
      [
        {
          "value": "Rooks",
          "id": 1253
        },
        {
          "value": "on par with",
          "id": 1254
        },
        {
          "value": 0.315,
          "id": 1255
        },
        {
          "value": 0.166,
          "id": 1256
        },
        {
          "value": 0.148,
          "id": 1257
        },
        {
          "value": 0.295,
          "id": 1258
        },
        {
          "value": 0.315626006904488,
          "id": 1259
        }
      ],
      [
        {
          "value": "Rolette",
          "id": 1260
        },
        {
          "value": "9% above",
          "id": 1261
        },
        {
          "value": 0.411,
          "id": 1262
        },
        {
          "value": 0.375,
          "id": 1263
        },
        {
          "value": 0.176,
          "id": 1264
        },
        {
          "value": 0.341,
          "id": 1265
        },
        {
          "value": 0.315626006904488,
          "id": 1266
        }
      ],
      [
        {
          "value": "Rogers",
          "id": 1267
        },
        {
          "value": "on par with",
          "id": 1268
        },
        {
          "value": 0.32,
          "id": 1269
        },
        {
          "value": 0.178,
          "id": 1270
        },
        {
          "value": 0.138,
          "id": 1271
        },
        {
          "value": 0.3,
          "id": 1272
        },
        {
          "value": 0.315626006904488,
          "id": 1273
        }
      ],
      [
        {
          "value": "Roger Mills",
          "id": 1274
        },
        {
          "value": "1% below",
          "id": 1275
        },
        {
          "value": 0.313,
          "id": 1276
        },
        {
          "value": 0.177,
          "id": 1277
        },
        {
          "value": 0.129,
          "id": 1278
        },
        {
          "value": 0.373,
          "id": 1279
        },
        {
          "value": 0.315626006904488,
          "id": 1280
        }
      ],
      [
        {
          "value": "Rock Island",
          "id": 1281
        },
        {
          "value": "1% below",
          "id": 1282
        },
        {
          "value": 0.308,
          "id": 1283
        },
        {
          "value": 0.155,
          "id": 1284
        },
        {
          "value": 0.126,
          "id": 1285
        },
        {
          "value": 0.246,
          "id": 1286
        },
        {
          "value": 0.315626006904488,
          "id": 1287
        }
      ],
      [
        {
          "value": "Rock",
          "id": 1288
        },
        {
          "value": "2% above",
          "id": 1289
        },
        {
          "value": 0.337,
          "id": 1290
        },
        {
          "value": 0.18,
          "id": 1291
        },
        {
          "value": 0.125,
          "id": 1292
        },
        {
          "value": 0.238,
          "id": 1293
        },
        {
          "value": 0.315626006904488,
          "id": 1294
        }
      ],
      [
        {
          "value": "Rock",
          "id": 1295
        },
        {
          "value": "on par with",
          "id": 1296
        },
        {
          "value": 0.315,
          "id": 1297
        },
        {
          "value": 0.155,
          "id": 1298
        },
        {
          "value": 0.113,
          "id": 1299
        },
        {
          "value": 0.331,
          "id": 1300
        },
        {
          "value": 0.315626006904488,
          "id": 1301
        }
      ],
      [
        {
          "value": "Rock",
          "id": 1302
        },
        {
          "value": "4% below",
          "id": 1303
        },
        {
          "value": 0.281,
          "id": 1304
        },
        {
          "value": 0.15,
          "id": 1305
        },
        {
          "value": 0.097,
          "id": 1306
        },
        {
          "value": 0.217,
          "id": 1307
        },
        {
          "value": 0.315626006904488,
          "id": 1308
        }
      ],
      [
        {
          "value": "Roberts",
          "id": 1309
        },
        {
          "value": "2% above",
          "id": 1310
        },
        {
          "value": 0.339,
          "id": 1311
        },
        {
          "value": 0.208,
          "id": 1312
        },
        {
          "value": 0.139,
          "id": 1313
        },
        {
          "value": 0.254,
          "id": 1314
        },
        {
          "value": 0.315626006904488,
          "id": 1315
        }
      ],
      [
        {
          "value": "Ripley",
          "id": 1316
        },
        {
          "value": "2% above",
          "id": 1317
        },
        {
          "value": 0.342,
          "id": 1318
        },
        {
          "value": 0.243,
          "id": 1319
        },
        {
          "value": 0.177,
          "id": 1320
        },
        {
          "value": 0.31,
          "id": 1321
        },
        {
          "value": 0.315626006904488,
          "id": 1322
        }
      ],
      [
        {
          "value": "Ringgold",
          "id": 1323
        },
        {
          "value": "3% above",
          "id": 1324
        },
        {
          "value": 0.351,
          "id": 1325
        },
        {
          "value": 0.169,
          "id": 1326
        },
        {
          "value": 0.125,
          "id": 1327
        },
        {
          "value": 0.3,
          "id": 1328
        },
        {
          "value": 0.315626006904488,
          "id": 1329
        }
      ],
      [
        {
          "value": "Riley",
          "id": 1330
        },
        {
          "value": "8% below",
          "id": 1331
        },
        {
          "value": 0.243,
          "id": 1332
        },
        {
          "value": 0.171,
          "id": 1333
        },
        {
          "value": 0.187,
          "id": 1334
        },
        {
          "value": 0.171,
          "id": 1335
        },
        {
          "value": 0.315626006904488,
          "id": 1336
        }
      ],
      [
        {
          "value": "Richland",
          "id": 1337
        },
        {
          "value": "1% above",
          "id": 1338
        },
        {
          "value": 0.655,
          "id": 1339
        },
        {
          "value": 0.327,
          "id": 1340
        },
        {
          "value": 0.189,
          "id": 1341
        },
        {
          "value": 0.452,
          "id": 1342
        },
        {
          "value": 0.631252013808976,
          "id": 1343
        }
      ],
      [
        {
          "value": "Richland",
          "id": 1351
        },
        {
          "value": "1% below",
          "id": 1352
        },
        {
          "value": 0.307,
          "id": 1353
        },
        {
          "value": 0.162,
          "id": 1354
        },
        {
          "value": 0.142,
          "id": 1355
        },
        {
          "value": 0.293,
          "id": 1356
        },
        {
          "value": 0.315626006904488,
          "id": 1357
        }
      ],
      [
        {
          "value": "Richardson",
          "id": 1358
        },
        {
          "value": "4% above",
          "id": 1359
        },
        {
          "value": 0.357,
          "id": 1360
        },
        {
          "value": 0.169,
          "id": 1361
        },
        {
          "value": 0.143,
          "id": 1362
        },
        {
          "value": 0.329,
          "id": 1363
        },
        {
          "value": 0.315626006904488,
          "id": 1364
        }
      ],
      [
        {
          "value": "Rice",
          "id": 1365
        },
        {
          "value": "5% below",
          "id": 1366
        },
        {
          "value": 0.27,
          "id": 1367
        },
        {
          "value": 0.156,
          "id": 1368
        },
        {
          "value": 0.097,
          "id": 1369
        },
        {
          "value": 0.218,
          "id": 1370
        },
        {
          "value": 0.315626006904488,
          "id": 1371
        }
      ],
      [
        {
          "value": "Rice",
          "id": 1372
        },
        {
          "value": "1% below",
          "id": 1373
        },
        {
          "value": 0.311,
          "id": 1374
        },
        {
          "value": 0.168,
          "id": 1375
        },
        {
          "value": 0.127,
          "id": 1376
        },
        {
          "value": 0.257,
          "id": 1377
        },
        {
          "value": 0.315626006904488,
          "id": 1378
        }
      ],
      [
        {
          "value": "Reynolds",
          "id": 1379
        },
        {
          "value": "1% above",
          "id": 1380
        },
        {
          "value": 0.327,
          "id": 1381
        },
        {
          "value": 0.224,
          "id": 1382
        },
        {
          "value": 0.18,
          "id": 1383
        },
        {
          "value": 0.347,
          "id": 1384
        },
        {
          "value": 0.315626006904488,
          "id": 1385
        }
      ],
      [
        {
          "value": "Republic",
          "id": 1386
        },
        {
          "value": "3% below",
          "id": 1387
        },
        {
          "value": 0.287,
          "id": 1388
        },
        {
          "value": 0.164,
          "id": 1389
        },
        {
          "value": 0.127,
          "id": 1390
        },
        {
          "value": 0.351,
          "id": 1391
        },
        {
          "value": 0.315626006904488,
          "id": 1392
        }
      ],
      [
        {
          "value": "Renville",
          "id": 1393
        },
        {
          "value": "2% below",
          "id": 1394
        },
        {
          "value": 0.302,
          "id": 1395
        },
        {
          "value": 0.156,
          "id": 1396
        },
        {
          "value": 0.056,
          "id": 1397
        },
        {
          "value": 0.312,
          "id": 1398
        },
        {
          "value": 0.315626006904488,
          "id": 1399
        }
      ],
      [
        {
          "value": "Renville",
          "id": 1400
        },
        {
          "value": "1% below",
          "id": 1401
        },
        {
          "value": 0.313,
          "id": 1402
        },
        {
          "value": 0.153,
          "id": 1403
        },
        {
          "value": 0.097,
          "id": 1404
        },
        {
          "value": 0.226,
          "id": 1405
        },
        {
          "value": 0.315626006904488,
          "id": 1406
        }
      ],
      [
        {
          "value": "Reno",
          "id": 1407
        },
        {
          "value": "1% above",
          "id": 1408
        },
        {
          "value": 0.333,
          "id": 1409
        },
        {
          "value": 0.172,
          "id": 1410
        },
        {
          "value": 0.14,
          "id": 1411
        },
        {
          "value": 0.27,
          "id": 1412
        },
        {
          "value": 0.315626006904488,
          "id": 1413
        }
      ],
      [
        {
          "value": "Redwood",
          "id": 1414
        },
        {
          "value": "1% above",
          "id": 1415
        },
        {
          "value": 0.327,
          "id": 1416
        },
        {
          "value": 0.169,
          "id": 1417
        },
        {
          "value": 0.101,
          "id": 1418
        },
        {
          "value": 0.235,
          "id": 1419
        },
        {
          "value": 0.315626006904488,
          "id": 1420
        }
      ],
      [
        {
          "value": "Red Willow",
          "id": 1421
        },
        {
          "value": "2% below",
          "id": 1422
        },
        {
          "value": 0.299,
          "id": 1423
        },
        {
          "value": 0.167,
          "id": 1424
        },
        {
          "value": 0.125,
          "id": 1425
        },
        {
          "value": 0.244,
          "id": 1426
        },
        {
          "value": 0.315626006904488,
          "id": 1427
        }
      ],
      [
        {
          "value": "Red Lake",
          "id": 1428
        },
        {
          "value": "1% below",
          "id": 1429
        },
        {
          "value": 0.307,
          "id": 1430
        },
        {
          "value": 0.158,
          "id": 1431
        },
        {
          "value": 0.106,
          "id": 1432
        },
        {
          "value": 0.238,
          "id": 1433
        },
        {
          "value": 0.315626006904488,
          "id": 1434
        }
      ],
      [
        {
          "value": "Ray",
          "id": 1435
        },
        {
          "value": "3% above",
          "id": 1436
        },
        {
          "value": 0.354,
          "id": 1437
        },
        {
          "value": 0.194,
          "id": 1438
        },
        {
          "value": 0.145,
          "id": 1439
        },
        {
          "value": 0.327,
          "id": 1440
        },
        {
          "value": 0.315626006904488,
          "id": 1441
        }
      ],
      [
        {
          "value": "Rawlins",
          "id": 1442
        },
        {
          "value": "1% above",
          "id": 1443
        },
        {
          "value": 0.325,
          "id": 1444
        },
        {
          "value": 0.16,
          "id": 1445
        },
        {
          "value": 0.13,
          "id": 1446
        },
        {
          "value": 0.323,
          "id": 1447
        },
        {
          "value": 0.315626006904488,
          "id": 1448
        }
      ],
      [
        {
          "value": "Ransom",
          "id": 1449
        },
        {
          "value": "on par with",
          "id": 1450
        },
        {
          "value": 0.324,
          "id": 1451
        },
        {
          "value": 0.177,
          "id": 1452
        },
        {
          "value": 0.073,
          "id": 1453
        },
        {
          "value": 0.303,
          "id": 1454
        },
        {
          "value": 0.315626006904488,
          "id": 1455
        }
      ],
      [
        {
          "value": "Randolph",
          "id": 1456
        },
        {
          "value": "1% above",
          "id": 1457
        },
        {
          "value": 0.326,
          "id": 1458
        },
        {
          "value": 0.23,
          "id": 1459
        },
        {
          "value": 0.169,
          "id": 1460
        },
        {
          "value": 0.271,
          "id": 1461
        },
        {
          "value": 0.315626006904488,
          "id": 1462
        }
      ],
      [
        {
          "value": "Randolph",
          "id": 1463
        },
        {
          "value": "2% below",
          "id": 1464
        },
        {
          "value": 0.303,
          "id": 1465
        },
        {
          "value": 0.17,
          "id": 1466
        },
        {
          "value": 0.136,
          "id": 1467
        },
        {
          "value": 0.246,
          "id": 1468
        },
        {
          "value": 0.315626006904488,
          "id": 1469
        }
      ],
      [
        {
          "value": "Ramsey",
          "id": 1470
        },
        {
          "value": "1% below",
          "id": 1471
        },
        {
          "value": 0.312,
          "id": 1472
        },
        {
          "value": 0.187,
          "id": 1473
        },
        {
          "value": 0.088,
          "id": 1474
        },
        {
          "value": 0.24,
          "id": 1475
        },
        {
          "value": 0.315626006904488,
          "id": 1476
        }
      ],
      [
        {
          "value": "Ramsey",
          "id": 1477
        },
        {
          "value": "7% below",
          "id": 1478
        },
        {
          "value": 0.251,
          "id": 1479
        },
        {
          "value": 0.161,
          "id": 1480
        },
        {
          "value": 0.13,
          "id": 1481
        },
        {
          "value": 0.184,
          "id": 1482
        },
        {
          "value": 0.315626006904488,
          "id": 1483
        }
      ],
      [
        {
          "value": "Ralls",
          "id": 1484
        },
        {
          "value": "3% above",
          "id": 1485
        },
        {
          "value": 0.345,
          "id": 1486
        },
        {
          "value": 0.186,
          "id": 1487
        },
        {
          "value": 0.127,
          "id": 1488
        },
        {
          "value": 0.286,
          "id": 1489
        },
        {
          "value": 0.315626006904488,
          "id": 1490
        }
      ],
      [
        {
          "value": "Racine",
          "id": 1491
        },
        {
          "value": "on par with",
          "id": 1492
        },
        {
          "value": 0.318,
          "id": 1493
        },
        {
          "value": 0.165,
          "id": 1494
        },
        {
          "value": 0.128,
          "id": 1495
        },
        {
          "value": 0.233,
          "id": 1496
        },
        {
          "value": 0.315626006904488,
          "id": 1497
        }
      ],
      [
        {
          "value": "Putnam",
          "id": 1498
        },
        {
          "value": "on par with",
          "id": 1499
        },
        {
          "value": 0.324,
          "id": 1500
        },
        {
          "value": 0.204,
          "id": 1501
        },
        {
          "value": 0.157,
          "id": 1502
        },
        {
          "value": 0.353,
          "id": 1503
        },
        {
          "value": 0.315626006904488,
          "id": 1504
        }
      ],
      [
        {
          "value": "Putnam",
          "id": 1505
        },
        {
          "value": "1% below",
          "id": 1506
        },
        {
          "value": 0.314,
          "id": 1507
        },
        {
          "value": 0.142,
          "id": 1508
        },
        {
          "value": 0.135,
          "id": 1509
        },
        {
          "value": 0.253,
          "id": 1510
        },
        {
          "value": 0.315626006904488,
          "id": 1511
        }
      ],
      [
        {
          "value": "Pushmataha",
          "id": 1512
        },
        {
          "value": "1% below",
          "id": 1513
        },
        {
          "value": 0.312,
          "id": 1514
        },
        {
          "value": 0.217,
          "id": 1515
        },
        {
          "value": 0.194,
          "id": 1516
        },
        {
          "value": 0.333,
          "id": 1517
        },
        {
          "value": 0.315626006904488,
          "id": 1518
        }
      ],
      [
        {
          "value": "Pulaski",
          "id": 1519
        },
        {
          "value": "1% above",
          "id": 1520
        },
        {
          "value": 0.332,
          "id": 1521
        },
        {
          "value": 0.211,
          "id": 1522
        },
        {
          "value": 0.172,
          "id": 1523
        },
        {
          "value": 0.291,
          "id": 1524
        },
        {
          "value": 0.315626006904488,
          "id": 1525
        }
      ],
      [
        {
          "value": "Pulaski",
          "id": 1526
        },
        {
          "value": "on par with",
          "id": 1527
        },
        {
          "value": 0.321,
          "id": 1528
        },
        {
          "value": 0.187,
          "id": 1529
        },
        {
          "value": 0.184,
          "id": 1530
        },
        {
          "value": 0.282,
          "id": 1531
        },
        {
          "value": 0.315626006904488,
          "id": 1532
        }
      ],
      [
        {
          "value": "Price",
          "id": 1533
        },
        {
          "value": "on par with",
          "id": 1534
        },
        {
          "value": 0.322,
          "id": 1535
        },
        {
          "value": 0.162,
          "id": 1536
        },
        {
          "value": 0.121,
          "id": 1537
        },
        {
          "value": 0.187,
          "id": 1538
        },
        {
          "value": 0.315626006904488,
          "id": 1539
        }
      ],
      [
        {
          "value": "Pratt",
          "id": 1540
        },
        {
          "value": "1% above",
          "id": 1541
        },
        {
          "value": 0.329,
          "id": 1542
        },
        {
          "value": 0.158,
          "id": 1543
        },
        {
          "value": 0.13,
          "id": 1544
        },
        {
          "value": 0.244,
          "id": 1545
        },
        {
          "value": 0.315626006904488,
          "id": 1546
        }
      ],
      [
        {
          "value": "Poweshiek",
          "id": 1547
        },
        {
          "value": "1% below",
          "id": 1548
        },
        {
          "value": 0.305,
          "id": 1549
        },
        {
          "value": 0.166,
          "id": 1550
        },
        {
          "value": 0.126,
          "id": 1551
        },
        {
          "value": 0.232,
          "id": 1552
        },
        {
          "value": 0.315626006904488,
          "id": 1553
        }
      ],
      [
        {
          "value": "Potter",
          "id": 1554
        },
        {
          "value": "2% below",
          "id": 1555
        },
        {
          "value": 0.296,
          "id": 1556
        },
        {
          "value": 0.137,
          "id": 1557
        },
        {
          "value": 0.111,
          "id": 1558
        },
        {
          "value": 0.318,
          "id": 1559
        },
        {
          "value": 0.315626006904488,
          "id": 1560
        }
      ],
      [
        {
          "value": "Pottawattamie",
          "id": 1561
        },
        {
          "value": "5% above",
          "id": 1562
        },
        {
          "value": 0.374,
          "id": 1563
        },
        {
          "value": 0.193,
          "id": 1564
        },
        {
          "value": 0.121,
          "id": 1565
        },
        {
          "value": 0.299,
          "id": 1566
        },
        {
          "value": 0.315626006904488,
          "id": 1567
        }
      ],
      [
        {
          "value": "Pottawatomie",
          "id": 1568
        },
        {
          "value": "4% above",
          "id": 1569
        },
        {
          "value": 0.364,
          "id": 1570
        },
        {
          "value": 0.214,
          "id": 1571
        },
        {
          "value": 0.166,
          "id": 1572
        },
        {
          "value": 0.299,
          "id": 1573
        },
        {
          "value": 0.315626006904488,
          "id": 1574
        }
      ],
      [
        {
          "value": "Pottawatomie",
          "id": 1575
        },
        {
          "value": "on par with",
          "id": 1576
        },
        {
          "value": 0.316,
          "id": 1577
        },
        {
          "value": 0.149,
          "id": 1578
        },
        {
          "value": 0.123,
          "id": 1579
        },
        {
          "value": 0.247,
          "id": 1580
        },
        {
          "value": 0.315626006904488,
          "id": 1581
        }
      ],
      [
        {
          "value": "Portage",
          "id": 1582
        },
        {
          "value": "3% above",
          "id": 1583
        },
        {
          "value": 0.346,
          "id": 1584
        },
        {
          "value": 0.164,
          "id": 1585
        },
        {
          "value": 0.123,
          "id": 1586
        },
        {
          "value": 0.203,
          "id": 1587
        },
        {
          "value": 0.315626006904488,
          "id": 1588
        }
      ],
      [
        {
          "value": "Pope",
          "id": 1589
        },
        {
          "value": "2% below",
          "id": 1590
        },
        {
          "value": 0.296,
          "id": 1591
        },
        {
          "value": 0.145,
          "id": 1592
        },
        {
          "value": 0.09,
          "id": 1593
        },
        {
          "value": 0.276,
          "id": 1594
        },
        {
          "value": 0.315626006904488,
          "id": 1595
        }
      ],
      [
        {
          "value": "Pope",
          "id": 1596
        },
        {
          "value": "1% below",
          "id": 1597
        },
        {
          "value": 0.308,
          "id": 1598
        },
        {
          "value": 0.161,
          "id": 1599
        },
        {
          "value": 0.146,
          "id": 1600
        },
        {
          "value": 0.272,
          "id": 1601
        },
        {
          "value": 0.315626006904488,
          "id": 1602
        }
      ],
      [
        {
          "value": "Pontotoc",
          "id": 1603
        },
        {
          "value": "4% above",
          "id": 1604
        },
        {
          "value": 0.364,
          "id": 1605
        },
        {
          "value": 0.215,
          "id": 1606
        },
        {
          "value": 0.17,
          "id": 1607
        },
        {
          "value": 0.336,
          "id": 1608
        },
        {
          "value": 0.315626006904488,
          "id": 1609
        }
      ],
      [
        {
          "value": "Polk",
          "id": 1610
        },
        {
          "value": "2% below",
          "id": 1611
        },
        {
          "value": 0.597,
          "id": 1612
        },
        {
          "value": 0.305,
          "id": 1613
        },
        {
          "value": 0.229,
          "id": 1614
        },
        {
          "value": 0.512,
          "id": 1615
        },
        {
          "value": 0.631252013808976,
          "id": 1616
        }
      ],
      [
        {
          "value": "Polk",
          "id": 1624
        },
        {
          "value": "on par with",
          "id": 1625
        },
        {
          "value": 0.322,
          "id": 1626
        },
        {
          "value": 0.214,
          "id": 1627
        },
        {
          "value": 0.173,
          "id": 1628
        },
        {
          "value": 0.288,
          "id": 1629
        },
        {
          "value": 0.315626006904488,
          "id": 1630
        }
      ],
      [
        {
          "value": "Polk",
          "id": 1631
        },
        {
          "value": "1% below",
          "id": 1632
        },
        {
          "value": 0.313,
          "id": 1633
        },
        {
          "value": 0.175,
          "id": 1634
        },
        {
          "value": 0.104,
          "id": 1635
        },
        {
          "value": 0.246,
          "id": 1636
        },
        {
          "value": 0.315626006904488,
          "id": 1637
        }
      ],
      [
        {
          "value": "Polk",
          "id": 1638
        },
        {
          "value": "3% below",
          "id": 1639
        },
        {
          "value": 0.292,
          "id": 1640
        },
        {
          "value": 0.185,
          "id": 1641
        },
        {
          "value": 0.123,
          "id": 1642
        },
        {
          "value": 0.215,
          "id": 1643
        },
        {
          "value": 0.315626006904488,
          "id": 1644
        }
      ],
      [
        {
          "value": "Pocahontas",
          "id": 1645
        },
        {
          "value": "1% below",
          "id": 1646
        },
        {
          "value": 0.305,
          "id": 1647
        },
        {
          "value": 0.168,
          "id": 1648
        },
        {
          "value": 0.118,
          "id": 1649
        },
        {
          "value": 0.312,
          "id": 1650
        },
        {
          "value": 0.315626006904488,
          "id": 1651
        }
      ],
      [
        {
          "value": "Plymouth",
          "id": 1652
        },
        {
          "value": "1% above",
          "id": 1653
        },
        {
          "value": 0.333,
          "id": 1654
        },
        {
          "value": 0.16,
          "id": 1655
        },
        {
          "value": 0.099,
          "id": 1656
        },
        {
          "value": 0.249,
          "id": 1657
        },
        {
          "value": 0.315626006904488,
          "id": 1658
        }
      ],
      [
        {
          "value": "Platte",
          "id": 1659
        },
        {
          "value": "2% below",
          "id": 1660
        },
        {
          "value": 0.3,
          "id": 1661
        },
        {
          "value": 0.155,
          "id": 1662
        },
        {
          "value": 0.105,
          "id": 1663
        },
        {
          "value": 0.252,
          "id": 1664
        },
        {
          "value": 0.315626006904488,
          "id": 1665
        }
      ],
      [
        {
          "value": "Platte",
          "id": 1666
        },
        {
          "value": "1% below",
          "id": 1667
        },
        {
          "value": 0.311,
          "id": 1668
        },
        {
          "value": 0.18,
          "id": 1669
        },
        {
          "value": 0.138,
          "id": 1670
        },
        {
          "value": 0.22,
          "id": 1671
        },
        {
          "value": 0.315626006904488,
          "id": 1672
        }
      ],
      [
        {
          "value": "Pittsburg",
          "id": 1673
        },
        {
          "value": "1% above",
          "id": 1674
        },
        {
          "value": 0.326,
          "id": 1675
        },
        {
          "value": 0.223,
          "id": 1676
        },
        {
          "value": 0.17,
          "id": 1677
        },
        {
          "value": 0.363,
          "id": 1678
        },
        {
          "value": 0.315626006904488,
          "id": 1679
        }
      ],
      [
        {
          "value": "Pipestone",
          "id": 1680
        },
        {
          "value": "4% below",
          "id": 1681
        },
        {
          "value": 0.275,
          "id": 1682
        },
        {
          "value": 0.157,
          "id": 1683
        },
        {
          "value": 0.097,
          "id": 1684
        },
        {
          "value": 0.254,
          "id": 1685
        },
        {
          "value": 0.315626006904488,
          "id": 1686
        }
      ],
      [
        {
          "value": "Pine",
          "id": 1687
        },
        {
          "value": "1% below",
          "id": 1688
        },
        {
          "value": 0.31,
          "id": 1689
        },
        {
          "value": 0.187,
          "id": 1690
        },
        {
          "value": 0.12,
          "id": 1691
        },
        {
          "value": 0.26,
          "id": 1692
        },
        {
          "value": 0.315626006904488,
          "id": 1693
        }
      ],
      [
        {
          "value": "Pike",
          "id": 1694
        },
        {
          "value": "1% below",
          "id": 1695
        },
        {
          "value": 0.312,
          "id": 1696
        },
        {
          "value": 0.22,
          "id": 1697
        },
        {
          "value": 0.155,
          "id": 1698
        },
        {
          "value": 0.301,
          "id": 1699
        },
        {
          "value": 0.315626006904488,
          "id": 1700
        }
      ],
      [
        {
          "value": "Pike",
          "id": 1701
        },
        {
          "value": "on par with",
          "id": 1702
        },
        {
          "value": 0.322,
          "id": 1703
        },
        {
          "value": 0.164,
          "id": 1704
        },
        {
          "value": 0.133,
          "id": 1705
        },
        {
          "value": 0.295,
          "id": 1706
        },
        {
          "value": 0.315626006904488,
          "id": 1707
        }
      ],
      [
        {
          "value": "Pierce",
          "id": 1708
        },
        {
          "value": "1% below",
          "id": 1709
        },
        {
          "value": 0.305,
          "id": 1710
        },
        {
          "value": 0.159,
          "id": 1711
        },
        {
          "value": 0.107,
          "id": 1712
        },
        {
          "value": 0.23,
          "id": 1713
        },
        {
          "value": 0.315626006904488,
          "id": 1714
        }
      ],
      [
        {
          "value": "Pierce",
          "id": 1715
        },
        {
          "value": "1% above",
          "id": 1716
        },
        {
          "value": 0.325,
          "id": 1717
        },
        {
          "value": 0.171,
          "id": 1718
        },
        {
          "value": 0.088,
          "id": 1719
        },
        {
          "value": 0.283,
          "id": 1720
        },
        {
          "value": 0.315626006904488,
          "id": 1721
        }
      ],
      [
        {
          "value": "Pierce",
          "id": 1722
        },
        {
          "value": "3% above",
          "id": 1723
        },
        {
          "value": 0.353,
          "id": 1724
        },
        {
          "value": 0.148,
          "id": 1725
        },
        {
          "value": 0.106,
          "id": 1726
        },
        {
          "value": 0.301,
          "id": 1727
        },
        {
          "value": 0.315626006904488,
          "id": 1728
        }
      ],
      [
        {
          "value": "Piatt",
          "id": 1729
        },
        {
          "value": "2% below",
          "id": 1730
        },
        {
          "value": 0.304,
          "id": 1731
        },
        {
          "value": 0.138,
          "id": 1732
        },
        {
          "value": 0.106,
          "id": 1733
        },
        {
          "value": 0.247,
          "id": 1734
        },
        {
          "value": 0.315626006904488,
          "id": 1735
        }
      ],
      [
        {
          "value": "Phillips",
          "id": 1736
        },
        {
          "value": "4% below",
          "id": 1737
        },
        {
          "value": 0.281,
          "id": 1738
        },
        {
          "value": 0.157,
          "id": 1739
        },
        {
          "value": 0.127,
          "id": 1740
        },
        {
          "value": 0.309,
          "id": 1741
        },
        {
          "value": 0.315626006904488,
          "id": 1742
        }
      ],
      [
        {
          "value": "Phelps",
          "id": 1743
        },
        {
          "value": "3% above",
          "id": 1744
        },
        {
          "value": 0.35,
          "id": 1745
        },
        {
          "value": 0.15,
          "id": 1746
        },
        {
          "value": 0.114,
          "id": 1747
        },
        {
          "value": 0.268,
          "id": 1748
        },
        {
          "value": 0.315626006904488,
          "id": 1749
        }
      ],
      [
        {
          "value": "Phelps",
          "id": 1750
        },
        {
          "value": "2% below",
          "id": 1751
        },
        {
          "value": 0.301,
          "id": 1752
        },
        {
          "value": 0.213,
          "id": 1753
        },
        {
          "value": 0.168,
          "id": 1754
        },
        {
          "value": 0.31,
          "id": 1755
        },
        {
          "value": 0.315626006904488,
          "id": 1756
        }
      ],
      [
        {
          "value": "Pettis",
          "id": 1757
        },
        {
          "value": "3% above",
          "id": 1758
        },
        {
          "value": 0.352,
          "id": 1759
        },
        {
          "value": 0.225,
          "id": 1760
        },
        {
          "value": 0.155,
          "id": 1761
        },
        {
          "value": 0.314,
          "id": 1762
        },
        {
          "value": 0.315626006904488,
          "id": 1763
        }
      ],
      [
        {
          "value": "Perry",
          "id": 1764
        },
        {
          "value": "on par with",
          "id": 1765
        },
        {
          "value": 0.317,
          "id": 1766
        },
        {
          "value": 0.193,
          "id": 1767
        },
        {
          "value": 0.131,
          "id": 1768
        },
        {
          "value": 0.264,
          "id": 1769
        },
        {
          "value": 0.315626006904488,
          "id": 1770
        }
      ],
      [
        {
          "value": "Perry",
          "id": 1771
        },
        {
          "value": "2% below",
          "id": 1772
        },
        {
          "value": 0.304,
          "id": 1773
        },
        {
          "value": 0.169,
          "id": 1774
        },
        {
          "value": 0.163,
          "id": 1775
        },
        {
          "value": 0.244,
          "id": 1776
        },
        {
          "value": 0.315626006904488,
          "id": 1777
        }
      ],
      [
        {
          "value": "Perkins",
          "id": 1778
        },
        {
          "value": "2% above",
          "id": 1779
        },
        {
          "value": 0.341,
          "id": 1780
        },
        {
          "value": 0.15,
          "id": 1781
        },
        {
          "value": 0.122,
          "id": 1782
        },
        {
          "value": 0.325,
          "id": 1783
        },
        {
          "value": 0.315626006904488,
          "id": 1784
        }
      ],
      [
        {
          "value": "Perkins",
          "id": 1785
        },
        {
          "value": "6% below",
          "id": 1786
        },
        {
          "value": 0.264,
          "id": 1787
        },
        {
          "value": 0.142,
          "id": 1788
        },
        {
          "value": 0.103,
          "id": 1789
        },
        {
          "value": 0.235,
          "id": 1790
        },
        {
          "value": 0.315626006904488,
          "id": 1791
        }
      ],
      [
        {
          "value": "Pepin",
          "id": 1792
        },
        {
          "value": "on par with",
          "id": 1793
        },
        {
          "value": 0.324,
          "id": 1794
        },
        {
          "value": 0.151,
          "id": 1795
        },
        {
          "value": 0.111,
          "id": 1796
        },
        {
          "value": 0.261,
          "id": 1797
        },
        {
          "value": 0.315626006904488,
          "id": 1798
        }
      ],
      [
        {
          "value": "Peoria",
          "id": 1799
        },
        {
          "value": "3% below",
          "id": 1800
        },
        {
          "value": 0.286,
          "id": 1801
        },
        {
          "value": 0.162,
          "id": 1802
        },
        {
          "value": 0.166,
          "id": 1803
        },
        {
          "value": 0.247,
          "id": 1804
        },
        {
          "value": 0.315626006904488,
          "id": 1805
        }
      ],
      [
        {
          "value": "Pennington",
          "id": 1806
        },
        {
          "value": "4% below",
          "id": 1807
        },
        {
          "value": 0.276,
          "id": 1808
        },
        {
          "value": 0.184,
          "id": 1809
        },
        {
          "value": 0.122,
          "id": 1810
        },
        {
          "value": 0.214,
          "id": 1811
        },
        {
          "value": 0.315626006904488,
          "id": 1812
        }
      ],
      [
        {
          "value": "Pennington",
          "id": 1813
        },
        {
          "value": "5% below",
          "id": 1814
        },
        {
          "value": 0.265,
          "id": 1815
        },
        {
          "value": 0.164,
          "id": 1816
        },
        {
          "value": 0.106,
          "id": 1817
        },
        {
          "value": 0.217,
          "id": 1818
        },
        {
          "value": 0.315626006904488,
          "id": 1819
        }
      ],
      [
        {
          "value": "Pemiscot",
          "id": 1820
        },
        {
          "value": "2% above",
          "id": 1821
        },
        {
          "value": 0.338,
          "id": 1822
        },
        {
          "value": 0.255,
          "id": 1823
        },
        {
          "value": 0.231,
          "id": 1824
        },
        {
          "value": 0.296,
          "id": 1825
        },
        {
          "value": 0.315626006904488,
          "id": 1826
        }
      ],
      [
        {
          "value": "Pembina",
          "id": 1827
        },
        {
          "value": "on par with",
          "id": 1828
        },
        {
          "value": 0.32,
          "id": 1829
        },
        {
          "value": 0.162,
          "id": 1830
        },
        {
          "value": 0.078,
          "id": 1831
        },
        {
          "value": 0.286,
          "id": 1832
        },
        {
          "value": 0.315626006904488,
          "id": 1833
        }
      ],
      [
        {
          "value": "Payne",
          "id": 1834
        },
        {
          "value": "2% below",
          "id": 1835
        },
        {
          "value": 0.296,
          "id": 1836
        },
        {
          "value": 0.22,
          "id": 1837
        },
        {
          "value": 0.2,
          "id": 1838
        },
        {
          "value": 0.263,
          "id": 1839
        },
        {
          "value": 0.315626006904488,
          "id": 1840
        }
      ],
      [
        {
          "value": "Pawnee",
          "id": 1841
        },
        {
          "value": "2% above",
          "id": 1842
        },
        {
          "value": 0.339,
          "id": 1843
        },
        {
          "value": 0.195,
          "id": 1844
        },
        {
          "value": 0.158,
          "id": 1845
        },
        {
          "value": 0.361,
          "id": 1846
        },
        {
          "value": 0.315626006904488,
          "id": 1847
        }
      ],
      [
        {
          "value": "Pawnee",
          "id": 1848
        },
        {
          "value": "on par with",
          "id": 1849
        },
        {
          "value": 0.317,
          "id": 1850
        },
        {
          "value": 0.151,
          "id": 1851
        },
        {
          "value": 0.142,
          "id": 1852
        },
        {
          "value": 0.309,
          "id": 1853
        },
        {
          "value": 0.315626006904488,
          "id": 1854
        }
      ],
      [
        {
          "value": "Pawnee",
          "id": 1855
        },
        {
          "value": "1% below",
          "id": 1856
        },
        {
          "value": 0.311,
          "id": 1857
        },
        {
          "value": 0.172,
          "id": 1858
        },
        {
          "value": 0.125,
          "id": 1859
        },
        {
          "value": 0.248,
          "id": 1860
        },
        {
          "value": 0.315626006904488,
          "id": 1861
        }
      ],
      [
        {
          "value": "Palo Alto",
          "id": 1862
        },
        {
          "value": "1% above",
          "id": 1863
        },
        {
          "value": 0.332,
          "id": 1864
        },
        {
          "value": 0.163,
          "id": 1865
        },
        {
          "value": 0.111,
          "id": 1866
        },
        {
          "value": 0.281,
          "id": 1867
        },
        {
          "value": 0.315626006904488,
          "id": 1868
        }
      ],
      [
        {
          "value": "Page",
          "id": 1869
        },
        {
          "value": "1% above",
          "id": 1870
        },
        {
          "value": 0.328,
          "id": 1871
        },
        {
          "value": 0.167,
          "id": 1872
        },
        {
          "value": 0.131,
          "id": 1873
        },
        {
          "value": 0.28,
          "id": 1874
        },
        {
          "value": 0.315626006904488,
          "id": 1875
        }
      ],
      [
        {
          "value": "Ozaukee",
          "id": 1876
        },
        {
          "value": "5% below",
          "id": 1877
        },
        {
          "value": 0.273,
          "id": 1878
        },
        {
          "value": 0.129,
          "id": 1879
        },
        {
          "value": 0.087,
          "id": 1880
        },
        {
          "value": 0.206,
          "id": 1881
        },
        {
          "value": 0.315626006904488,
          "id": 1882
        }
      ],
      [
        {
          "value": "Ozark",
          "id": 1883
        },
        {
          "value": "1% above",
          "id": 1884
        },
        {
          "value": 0.332,
          "id": 1885
        },
        {
          "value": 0.216,
          "id": 1886
        },
        {
          "value": 0.164,
          "id": 1887
        },
        {
          "value": 0.339,
          "id": 1888
        },
        {
          "value": 0.315626006904488,
          "id": 1889
        }
      ],
      [
        {
          "value": "Outagamie",
          "id": 1890
        },
        {
          "value": "on par with",
          "id": 1891
        },
        {
          "value": 0.32,
          "id": 1892
        },
        {
          "value": 0.14,
          "id": 1893
        },
        {
          "value": 0.107,
          "id": 1894
        },
        {
          "value": 0.203,
          "id": 1895
        },
        {
          "value": 0.315626006904488,
          "id": 1896
        }
      ],
      [
        {
          "value": "Otter Tail",
          "id": 1897
        },
        {
          "value": "5% below",
          "id": 1898
        },
        {
          "value": 0.274,
          "id": 1899
        },
        {
          "value": 0.148,
          "id": 1900
        },
        {
          "value": 0.101,
          "id": 1901
        },
        {
          "value": 0.223,
          "id": 1902
        },
        {
          "value": 0.315626006904488,
          "id": 1903
        }
      ],
      [
        {
          "value": "Ottawa",
          "id": 1904
        },
        {
          "value": "1% above",
          "id": 1905
        },
        {
          "value": 0.328,
          "id": 1906
        },
        {
          "value": 0.227,
          "id": 1907
        },
        {
          "value": 0.176,
          "id": 1908
        },
        {
          "value": 0.344,
          "id": 1909
        },
        {
          "value": 0.315626006904488,
          "id": 1910
        }
      ],
      [
        {
          "value": "Ottawa",
          "id": 1911
        },
        {
          "value": "5% above",
          "id": 1912
        },
        {
          "value": 0.37,
          "id": 1913
        },
        {
          "value": 0.163,
          "id": 1914
        },
        {
          "value": 0.12,
          "id": 1915
        },
        {
          "value": 0.297,
          "id": 1916
        },
        {
          "value": 0.315626006904488,
          "id": 1917
        }
      ],
      [
        {
          "value": "Otoe",
          "id": 1918
        },
        {
          "value": "2% above",
          "id": 1919
        },
        {
          "value": 0.337,
          "id": 1920
        },
        {
          "value": 0.151,
          "id": 1921
        },
        {
          "value": 0.12,
          "id": 1922
        },
        {
          "value": 0.301,
          "id": 1923
        },
        {
          "value": 0.315626006904488,
          "id": 1924
        }
      ],
      [
        {
          "value": "Osceola",
          "id": 1925
        },
        {
          "value": "on par with",
          "id": 1926
        },
        {
          "value": 0.322,
          "id": 1927
        },
        {
          "value": 0.155,
          "id": 1928
        },
        {
          "value": 0.108,
          "id": 1929
        },
        {
          "value": 0.301,
          "id": 1930
        },
        {
          "value": 0.315626006904488,
          "id": 1931
        }
      ],
      [
        {
          "value": "Osborne",
          "id": 1932
        },
        {
          "value": "2% above",
          "id": 1933
        },
        {
          "value": 0.335,
          "id": 1934
        },
        {
          "value": 0.161,
          "id": 1935
        },
        {
          "value": 0.142,
          "id": 1936
        },
        {
          "value": 0.296,
          "id": 1937
        },
        {
          "value": 0.315626006904488,
          "id": 1938
        }
      ],
      [
        {
          "value": "Osage",
          "id": 1939
        },
        {
          "value": "5% above",
          "id": 1940
        },
        {
          "value": 0.365,
          "id": 1941
        },
        {
          "value": 0.206,
          "id": 1942
        },
        {
          "value": 0.165,
          "id": 1943
        },
        {
          "value": 0.314,
          "id": 1944
        },
        {
          "value": 0.315626006904488,
          "id": 1945
        }
      ],
      [
        {
          "value": "Osage",
          "id": 1946
        },
        {
          "value": "1% above",
          "id": 1947
        },
        {
          "value": 0.326,
          "id": 1948
        },
        {
          "value": 0.175,
          "id": 1949
        },
        {
          "value": 0.123,
          "id": 1950
        },
        {
          "value": 0.258,
          "id": 1951
        },
        {
          "value": 0.315626006904488,
          "id": 1952
        }
      ],
      [
        {
          "value": "Osage",
          "id": 1953
        },
        {
          "value": "4% above",
          "id": 1954
        },
        {
          "value": 0.362,
          "id": 1955
        },
        {
          "value": 0.167,
          "id": 1956
        },
        {
          "value": 0.14,
          "id": 1957
        },
        {
          "value": 0.293,
          "id": 1958
        },
        {
          "value": 0.315626006904488,
          "id": 1959
        }
      ],
      [
        {
          "value": "Oregon",
          "id": 1960
        },
        {
          "value": "2% above",
          "id": 1961
        },
        {
          "value": 0.336,
          "id": 1962
        },
        {
          "value": 0.242,
          "id": 1963
        },
        {
          "value": 0.177,
          "id": 1964
        },
        {
          "value": 0.301,
          "id": 1965
        },
        {
          "value": 0.315626006904488,
          "id": 1966
        }
      ],
      [
        {
          "value": "Oneida",
          "id": 1967
        },
        {
          "value": "2% below",
          "id": 1968
        },
        {
          "value": 0.302,
          "id": 1969
        },
        {
          "value": 0.149,
          "id": 1970
        },
        {
          "value": 0.12,
          "id": 1971
        },
        {
          "value": 0.237,
          "id": 1972
        },
        {
          "value": 0.315626006904488,
          "id": 1973
        }
      ],
      [
        {
          "value": "Olmsted",
          "id": 1974
        },
        {
          "value": "8% below",
          "id": 1975
        },
        {
          "value": 0.237,
          "id": 1976
        },
        {
          "value": 0.132,
          "id": 1977
        },
        {
          "value": 0.089,
          "id": 1978
        },
        {
          "value": 0.197,
          "id": 1979
        },
        {
          "value": 0.315626006904488,
          "id": 1980
        }
      ],
      [
        {
          "value": "Oliver",
          "id": 1981
        },
        {
          "value": "1% below",
          "id": 1982
        },
        {
          "value": 0.307,
          "id": 1983
        },
        {
          "value": 0.16,
          "id": 1984
        },
        {
          "value": 0.053,
          "id": 1985
        },
        {
          "value": 0.278,
          "id": 1986
        },
        {
          "value": 0.315626006904488,
          "id": 1987
        }
      ],
      [
        {
          "value": "Okmulgee",
          "id": 1988
        },
        {
          "value": "5% above",
          "id": 1989
        },
        {
          "value": 0.374,
          "id": 1990
        },
        {
          "value": 0.229,
          "id": 1991
        },
        {
          "value": 0.19,
          "id": 1992
        },
        {
          "value": 0.348,
          "id": 1993
        },
        {
          "value": 0.315626006904488,
          "id": 1994
        }
      ],
      [
        {
          "value": "Oklahoma",
          "id": 1995
        },
        {
          "value": "2% below",
          "id": 1996
        },
        {
          "value": 0.301,
          "id": 1997
        },
        {
          "value": 0.182,
          "id": 1998
        },
        {
          "value": 0.173,
          "id": 1999
        },
        {
          "value": 0.288,
          "id": 2000
        },
        {
          "value": 0.315626006904488,
          "id": 2001
        }
      ],
      [
        {
          "value": "Okfuskee",
          "id": 2002
        },
        {
          "value": "on par with",
          "id": 2003
        },
        {
          "value": 0.317,
          "id": 2004
        },
        {
          "value": 0.258,
          "id": 2005
        },
        {
          "value": 0.199,
          "id": 2006
        },
        {
          "value": 0.278,
          "id": 2007
        },
        {
          "value": 0.315626006904488,
          "id": 2008
        }
      ],
      [
        {
          "value": "Ogle",
          "id": 2009
        },
        {
          "value": "3% below",
          "id": 2010
        },
        {
          "value": 0.286,
          "id": 2011
        },
        {
          "value": 0.156,
          "id": 2012
        },
        {
          "value": 0.126,
          "id": 2013
        },
        {
          "value": 0.229,
          "id": 2014
        },
        {
          "value": 0.315626006904488,
          "id": 2015
        }
      ],
      [
        {
          "value": "Oconto",
          "id": 2016
        },
        {
          "value": "3% below",
          "id": 2017
        },
        {
          "value": 0.286,
          "id": 2018
        },
        {
          "value": 0.16,
          "id": 2019
        },
        {
          "value": 0.108,
          "id": 2020
        },
        {
          "value": 0.252,
          "id": 2021
        },
        {
          "value": 0.315626006904488,
          "id": 2022
        }
      ],
      [
        {
          "value": "O'Brien",
          "id": 2023
        },
        {
          "value": "1% below",
          "id": 2024
        },
        {
          "value": 0.309,
          "id": 2025
        },
        {
          "value": 0.162,
          "id": 2026
        },
        {
          "value": 0.114,
          "id": 2027
        },
        {
          "value": 0.22,
          "id": 2028
        },
        {
          "value": 0.315626006904488,
          "id": 2029
        }
      ],
      [
        {
          "value": "Nuckolls",
          "id": 2030
        },
        {
          "value": "1% below",
          "id": 2031
        },
        {
          "value": 0.309,
          "id": 2032
        },
        {
          "value": 0.139,
          "id": 2033
        },
        {
          "value": 0.123,
          "id": 2034
        },
        {
          "value": 0.31,
          "id": 2035
        },
        {
          "value": 0.315626006904488,
          "id": 2036
        }
      ],
      [
        {
          "value": "Nowata",
          "id": 2037
        },
        {
          "value": "3% above",
          "id": 2038
        },
        {
          "value": 0.351,
          "id": 2039
        },
        {
          "value": 0.223,
          "id": 2040
        },
        {
          "value": 0.163,
          "id": 2041
        },
        {
          "value": 0.298,
          "id": 2042
        },
        {
          "value": 0.315626006904488,
          "id": 2043
        }
      ],
      [
        {
          "value": "Norton",
          "id": 2044
        },
        {
          "value": "2% above",
          "id": 2045
        },
        {
          "value": 0.339,
          "id": 2046
        },
        {
          "value": 0.172,
          "id": 2047
        },
        {
          "value": 0.127,
          "id": 2048
        },
        {
          "value": 0.255,
          "id": 2049
        },
        {
          "value": 0.315626006904488,
          "id": 2050
        }
      ],
      [
        {
          "value": "Norman",
          "id": 2051
        },
        {
          "value": "1% below",
          "id": 2052
        },
        {
          "value": 0.308,
          "id": 2053
        },
        {
          "value": 0.167,
          "id": 2054
        },
        {
          "value": 0.099,
          "id": 2055
        },
        {
          "value": 0.313,
          "id": 2056
        },
        {
          "value": 0.315626006904488,
          "id": 2057
        }
      ],
      [
        {
          "value": "Nodaway",
          "id": 2058
        },
        {
          "value": "4% below",
          "id": 2059
        },
        {
          "value": 0.284,
          "id": 2060
        },
        {
          "value": 0.219,
          "id": 2061
        },
        {
          "value": 0.194,
          "id": 2062
        },
        {
          "value": 0.298,
          "id": 2063
        },
        {
          "value": 0.315626006904488,
          "id": 2064
        }
      ],
      [
        {
          "value": "Nobles",
          "id": 2065
        },
        {
          "value": "3% below",
          "id": 2066
        },
        {
          "value": 0.286,
          "id": 2067
        },
        {
          "value": 0.167,
          "id": 2068
        },
        {
          "value": 0.081,
          "id": 2069
        },
        {
          "value": 0.284,
          "id": 2070
        },
        {
          "value": 0.315626006904488,
          "id": 2071
        }
      ],
      [
        {
          "value": "Noble",
          "id": 2072
        },
        {
          "value": "2% above",
          "id": 2073
        },
        {
          "value": 0.335,
          "id": 2074
        },
        {
          "value": 0.191,
          "id": 2075
        },
        {
          "value": 0.152,
          "id": 2076
        },
        {
          "value": 0.322,
          "id": 2077
        },
        {
          "value": 0.315626006904488,
          "id": 2078
        }
      ],
      [
        {
          "value": "Nicollet",
          "id": 2079
        },
        {
          "value": "2% below",
          "id": 2080
        },
        {
          "value": 0.302,
          "id": 2081
        },
        {
          "value": 0.155,
          "id": 2082
        },
        {
          "value": 0.093,
          "id": 2083
        },
        {
          "value": 0.17,
          "id": 2084
        },
        {
          "value": 0.315626006904488,
          "id": 2085
        }
      ],
      [
        {
          "value": "Newton",
          "id": 2086
        },
        {
          "value": "on par with",
          "id": 2087
        },
        {
          "value": 0.317,
          "id": 2088
        },
        {
          "value": 0.205,
          "id": 2089
        },
        {
          "value": 0.142,
          "id": 2090
        },
        {
          "value": 0.284,
          "id": 2091
        },
        {
          "value": 0.315626006904488,
          "id": 2092
        }
      ],
      [
        {
          "value": "New Madrid",
          "id": 2093
        },
        {
          "value": "2% above",
          "id": 2094
        },
        {
          "value": 0.34,
          "id": 2095
        },
        {
          "value": 0.24,
          "id": 2096
        },
        {
          "value": 0.194,
          "id": 2097
        },
        {
          "value": 0.376,
          "id": 2098
        },
        {
          "value": 0.315626006904488,
          "id": 2099
        }
      ],
      [
        {
          "value": "Ness",
          "id": 2100
        },
        {
          "value": "1% below",
          "id": 2101
        },
        {
          "value": 0.305,
          "id": 2102
        },
        {
          "value": 0.163,
          "id": 2103
        },
        {
          "value": 0.111,
          "id": 2104
        },
        {
          "value": 0.267,
          "id": 2105
        },
        {
          "value": 0.315626006904488,
          "id": 2106
        }
      ],
      [
        {
          "value": "Neosho",
          "id": 2107
        },
        {
          "value": "1% above",
          "id": 2108
        },
        {
          "value": 0.328,
          "id": 2109
        },
        {
          "value": 0.189,
          "id": 2110
        },
        {
          "value": 0.162,
          "id": 2111
        },
        {
          "value": 0.29,
          "id": 2112
        },
        {
          "value": 0.315626006904488,
          "id": 2113
        }
      ],
      [
        {
          "value": "Nemaha",
          "id": 2114
        },
        {
          "value": "3% above",
          "id": 2115
        },
        {
          "value": 0.346,
          "id": 2116
        },
        {
          "value": 0.16,
          "id": 2117
        },
        {
          "value": 0.141,
          "id": 2118
        },
        {
          "value": 0.258,
          "id": 2119
        },
        {
          "value": 0.315626006904488,
          "id": 2120
        }
      ],
      [
        {
          "value": "Nemaha",
          "id": 2121
        },
        {
          "value": "1% below",
          "id": 2122
        },
        {
          "value": 0.309,
          "id": 2123
        },
        {
          "value": 0.148,
          "id": 2124
        },
        {
          "value": 0.125,
          "id": 2125
        },
        {
          "value": 0.277,
          "id": 2126
        },
        {
          "value": 0.315626006904488,
          "id": 2127
        }
      ],
      [
        {
          "value": "Nelson",
          "id": 2128
        },
        {
          "value": "2% below",
          "id": 2129
        },
        {
          "value": 0.304,
          "id": 2130
        },
        {
          "value": 0.161,
          "id": 2131
        },
        {
          "value": 0.063,
          "id": 2132
        },
        {
          "value": 0.278,
          "id": 2133
        },
        {
          "value": 0.315626006904488,
          "id": 2134
        }
      ],
      [
        {
          "value": "Nance",
          "id": 2135
        },
        {
          "value": "1% below",
          "id": 2136
        },
        {
          "value": 0.305,
          "id": 2137
        },
        {
          "value": 0.159,
          "id": 2138
        },
        {
          "value": 0.122,
          "id": 2139
        },
        {
          "value": 0.226,
          "id": 2140
        },
        {
          "value": 0.315626006904488,
          "id": 2141
        }
      ],
      [
        {
          "value": "Muskogee",
          "id": 2142
        },
        {
          "value": "3% above",
          "id": 2143
        },
        {
          "value": 0.346,
          "id": 2144
        },
        {
          "value": 0.233,
          "id": 2145
        },
        {
          "value": 0.192,
          "id": 2146
        },
        {
          "value": 0.311,
          "id": 2147
        },
        {
          "value": 0.315626006904488,
          "id": 2148
        }
      ],
      [
        {
          "value": "Muscatine",
          "id": 2149
        },
        {
          "value": "3% above",
          "id": 2150
        },
        {
          "value": 0.354,
          "id": 2151
        },
        {
          "value": 0.178,
          "id": 2152
        },
        {
          "value": 0.107,
          "id": 2153
        },
        {
          "value": 0.267,
          "id": 2154
        },
        {
          "value": 0.315626006904488,
          "id": 2155
        }
      ],
      [
        {
          "value": "Murray",
          "id": 2156
        },
        {
          "value": "6% above",
          "id": 2157
        },
        {
          "value": 0.383,
          "id": 2158
        },
        {
          "value": 0.206,
          "id": 2159
        },
        {
          "value": 0.147,
          "id": 2160
        },
        {
          "value": 0.334,
          "id": 2161
        },
        {
          "value": 0.315626006904488,
          "id": 2162
        }
      ],
      [
        {
          "value": "Murray",
          "id": 2163
        },
        {
          "value": "2% below",
          "id": 2164
        },
        {
          "value": 0.298,
          "id": 2165
        },
        {
          "value": 0.147,
          "id": 2166
        },
        {
          "value": 0.089,
          "id": 2167
        },
        {
          "value": 0.234,
          "id": 2168
        },
        {
          "value": 0.315626006904488,
          "id": 2169
        }
      ],
      [
        {
          "value": "Mower",
          "id": 2170
        },
        {
          "value": "2% below",
          "id": 2171
        },
        {
          "value": 0.295,
          "id": 2172
        },
        {
          "value": 0.169,
          "id": 2173
        },
        {
          "value": 0.103,
          "id": 2174
        },
        {
          "value": 0.259,
          "id": 2175
        },
        {
          "value": 0.315626006904488,
          "id": 2176
        }
      ],
      [
        {
          "value": "Mountrail",
          "id": 2177
        },
        {
          "value": "2% above",
          "id": 2178
        },
        {
          "value": 0.336,
          "id": 2179
        },
        {
          "value": 0.216,
          "id": 2180
        },
        {
          "value": 0.058,
          "id": 2181
        },
        {
          "value": 0.341,
          "id": 2182
        },
        {
          "value": 0.315626006904488,
          "id": 2183
        }
      ],
      [
        {
          "value": "Moultrie",
          "id": 2184
        },
        {
          "value": "1% below",
          "id": 2185
        },
        {
          "value": 0.307,
          "id": 2186
        },
        {
          "value": 0.167,
          "id": 2187
        },
        {
          "value": 0.121,
          "id": 2188
        },
        {
          "value": 0.272,
          "id": 2189
        },
        {
          "value": 0.315626006904488,
          "id": 2190
        }
      ],
      [
        {
          "value": "Morton",
          "id": 2191
        },
        {
          "value": "on par with",
          "id": 2192
        },
        {
          "value": 0.323,
          "id": 2193
        },
        {
          "value": 0.194,
          "id": 2194
        },
        {
          "value": 0.059,
          "id": 2195
        },
        {
          "value": 0.261,
          "id": 2196
        },
        {
          "value": 0.315626006904488,
          "id": 2197
        }
      ],
      [
        {
          "value": "Morton",
          "id": 2198
        },
        {
          "value": "1% below",
          "id": 2199
        },
        {
          "value": 0.305,
          "id": 2200
        },
        {
          "value": 0.166,
          "id": 2201
        },
        {
          "value": 0.112,
          "id": 2202
        },
        {
          "value": 0.326,
          "id": 2203
        },
        {
          "value": 0.315626006904488,
          "id": 2204
        }
      ],
      [
        {
          "value": "Morrison",
          "id": 2205
        },
        {
          "value": "3% below",
          "id": 2206
        },
        {
          "value": 0.293,
          "id": 2207
        },
        {
          "value": 0.172,
          "id": 2208
        },
        {
          "value": 0.112,
          "id": 2209
        },
        {
          "value": 0.234,
          "id": 2210
        },
        {
          "value": 0.315626006904488,
          "id": 2211
        }
      ],
      [
        {
          "value": "Morris",
          "id": 2212
        },
        {
          "value": "3% above",
          "id": 2213
        },
        {
          "value": 0.352,
          "id": 2214
        },
        {
          "value": 0.156,
          "id": 2215
        },
        {
          "value": 0.129,
          "id": 2216
        },
        {
          "value": 0.293,
          "id": 2217
        },
        {
          "value": 0.315626006904488,
          "id": 2218
        }
      ],
      [
        {
          "value": "Morrill",
          "id": 2219
        },
        {
          "value": "1% below",
          "id": 2220
        },
        {
          "value": 0.306,
          "id": 2221
        },
        {
          "value": 0.186,
          "id": 2222
        },
        {
          "value": 0.117,
          "id": 2223
        },
        {
          "value": 0.26,
          "id": 2224
        },
        {
          "value": 0.315626006904488,
          "id": 2225
        }
      ],
      [
        {
          "value": "Morgan",
          "id": 2226
        },
        {
          "value": "5% below",
          "id": 2227
        },
        {
          "value": 0.272,
          "id": 2228
        },
        {
          "value": 0.224,
          "id": 2229
        },
        {
          "value": 0.169,
          "id": 2230
        },
        {
          "value": 0.265,
          "id": 2231
        },
        {
          "value": 0.315626006904488,
          "id": 2232
        }
      ],
      [
        {
          "value": "Morgan",
          "id": 2233
        },
        {
          "value": "1% below",
          "id": 2234
        },
        {
          "value": 0.312,
          "id": 2235
        },
        {
          "value": 0.165,
          "id": 2236
        },
        {
          "value": 0.146,
          "id": 2237
        },
        {
          "value": 0.29,
          "id": 2238
        },
        {
          "value": 0.315626006904488,
          "id": 2239
        }
      ],
      [
        {
          "value": "Moody",
          "id": 2240
        },
        {
          "value": "2% above",
          "id": 2241
        },
        {
          "value": 0.335,
          "id": 2242
        },
        {
          "value": 0.182,
          "id": 2243
        },
        {
          "value": 0.12,
          "id": 2244
        },
        {
          "value": 0.262,
          "id": 2245
        },
        {
          "value": 0.315626006904488,
          "id": 2246
        }
      ],
      [
        {
          "value": "Montgomery",
          "id": 2247
        },
        {
          "value": "1% above",
          "id": 2248
        },
        {
          "value": 0.327,
          "id": 2249
        },
        {
          "value": 0.213,
          "id": 2250
        },
        {
          "value": 0.159,
          "id": 2251
        },
        {
          "value": 0.3,
          "id": 2252
        },
        {
          "value": 0.315626006904488,
          "id": 2253
        }
      ],
      [
        {
          "value": "Montgomery",
          "id": 2254
        },
        {
          "value": "3% above",
          "id": 2255
        },
        {
          "value": 0.351,
          "id": 2256
        },
        {
          "value": 0.196,
          "id": 2257
        },
        {
          "value": 0.167,
          "id": 2258
        },
        {
          "value": 0.274,
          "id": 2259
        },
        {
          "value": 0.315626006904488,
          "id": 2260
        }
      ],
      [
        {
          "value": "Montgomery",
          "id": 2261
        },
        {
          "value": "2% above",
          "id": 2262
        },
        {
          "value": 0.342,
          "id": 2263
        },
        {
          "value": 0.185,
          "id": 2264
        },
        {
          "value": 0.134,
          "id": 2265
        },
        {
          "value": 0.301,
          "id": 2266
        },
        {
          "value": 0.315626006904488,
          "id": 2267
        }
      ],
      [
        {
          "value": "Montgomery",
          "id": 2268
        },
        {
          "value": "3% below",
          "id": 2269
        },
        {
          "value": 0.29,
          "id": 2270
        },
        {
          "value": 0.161,
          "id": 2271
        },
        {
          "value": 0.156,
          "id": 2272
        },
        {
          "value": 0.249,
          "id": 2273
        },
        {
          "value": 0.315626006904488,
          "id": 2274
        }
      ],
      [
        {
          "value": "Monroe",
          "id": 2275
        },
        {
          "value": "on par with",
          "id": 2276
        },
        {
          "value": 0.316,
          "id": 2277
        },
        {
          "value": 0.174,
          "id": 2278
        },
        {
          "value": 0.124,
          "id": 2279
        },
        {
          "value": 0.267,
          "id": 2280
        },
        {
          "value": 0.315626006904488,
          "id": 2281
        }
      ],
      [
        {
          "value": "Monroe",
          "id": 2282
        },
        {
          "value": "1% below",
          "id": 2283
        },
        {
          "value": 0.314,
          "id": 2284
        },
        {
          "value": 0.198,
          "id": 2285
        },
        {
          "value": 0.158,
          "id": 2286
        },
        {
          "value": 0.297,
          "id": 2287
        },
        {
          "value": 0.315626006904488,
          "id": 2288
        }
      ],
      [
        {
          "value": "Monroe",
          "id": 2289
        },
        {
          "value": "1% above",
          "id": 2290
        },
        {
          "value": 0.655,
          "id": 2291
        },
        {
          "value": 0.303,
          "id": 2292
        },
        {
          "value": 0.22,
          "id": 2293
        },
        {
          "value": 0.585,
          "id": 2294
        },
        {
          "value": 0.631252013808976,
          "id": 2295
        }
      ],
      [
        {
          "value": "Monona",
          "id": 2303
        },
        {
          "value": "2% below",
          "id": 2304
        },
        {
          "value": 0.296,
          "id": 2305
        },
        {
          "value": 0.168,
          "id": 2306
        },
        {
          "value": 0.132,
          "id": 2307
        },
        {
          "value": 0.285,
          "id": 2308
        },
        {
          "value": 0.315626006904488,
          "id": 2309
        }
      ],
      [
        {
          "value": "Moniteau",
          "id": 2310
        },
        {
          "value": "2% below",
          "id": 2311
        },
        {
          "value": 0.304,
          "id": 2312
        },
        {
          "value": 0.196,
          "id": 2313
        },
        {
          "value": 0.141,
          "id": 2314
        },
        {
          "value": 0.263,
          "id": 2315
        },
        {
          "value": 0.315626006904488,
          "id": 2316
        }
      ],
      [
        {
          "value": "Mitchell",
          "id": 2317
        },
        {
          "value": "on par with",
          "id": 2318
        },
        {
          "value": 0.321,
          "id": 2319
        },
        {
          "value": 0.149,
          "id": 2320
        },
        {
          "value": 0.127,
          "id": 2321
        },
        {
          "value": 0.277,
          "id": 2322
        },
        {
          "value": 0.315626006904488,
          "id": 2323
        }
      ],
      [
        {
          "value": "Mitchell",
          "id": 2324
        },
        {
          "value": "1% below",
          "id": 2325
        },
        {
          "value": 0.305,
          "id": 2326
        },
        {
          "value": 0.153,
          "id": 2327
        },
        {
          "value": 0.106,
          "id": 2328
        },
        {
          "value": 0.245,
          "id": 2329
        },
        {
          "value": 0.315626006904488,
          "id": 2330
        }
      ],
      [
        {
          "value": "Mississippi",
          "id": 2331
        },
        {
          "value": "1% above",
          "id": 2332
        },
        {
          "value": 0.332,
          "id": 2333
        },
        {
          "value": 0.268,
          "id": 2334
        },
        {
          "value": 0.216,
          "id": 2335
        },
        {
          "value": 0.359,
          "id": 2336
        },
        {
          "value": 0.315626006904488,
          "id": 2337
        }
      ],
      [
        {
          "value": "Minnehaha",
          "id": 2338
        },
        {
          "value": "4% below",
          "id": 2339
        },
        {
          "value": 0.279,
          "id": 2340
        },
        {
          "value": 0.165,
          "id": 2341
        },
        {
          "value": 0.118,
          "id": 2342
        },
        {
          "value": 0.23,
          "id": 2343
        },
        {
          "value": 0.315626006904488,
          "id": 2344
        }
      ],
      [
        {
          "value": "Miner",
          "id": 2345
        },
        {
          "value": "1% below",
          "id": 2346
        },
        {
          "value": 0.314,
          "id": 2347
        },
        {
          "value": 0.146,
          "id": 2348
        },
        {
          "value": 0.108,
          "id": 2349
        },
        {
          "value": 0.27,
          "id": 2350
        },
        {
          "value": 0.315626006904488,
          "id": 2351
        }
      ],
      [
        {
          "value": "Milwaukee",
          "id": 2352
        },
        {
          "value": "1% below",
          "id": 2353
        },
        {
          "value": 0.31,
          "id": 2354
        },
        {
          "value": 0.201,
          "id": 2355
        },
        {
          "value": 0.174,
          "id": 2356
        },
        {
          "value": 0.225,
          "id": 2357
        },
        {
          "value": 0.315626006904488,
          "id": 2358
        }
      ],
      [
        {
          "value": "Mills",
          "id": 2359
        },
        {
          "value": "2% above",
          "id": 2360
        },
        {
          "value": 0.336,
          "id": 2361
        },
        {
          "value": 0.165,
          "id": 2362
        },
        {
          "value": 0.095,
          "id": 2363
        },
        {
          "value": 0.306,
          "id": 2364
        },
        {
          "value": 0.315626006904488,
          "id": 2365
        }
      ],
      [
        {
          "value": "Miller",
          "id": 2366
        },
        {
          "value": "3% above",
          "id": 2367
        },
        {
          "value": 0.346,
          "id": 2368
        },
        {
          "value": 0.233,
          "id": 2369
        },
        {
          "value": 0.168,
          "id": 2370
        },
        {
          "value": 0.288,
          "id": 2371
        },
        {
          "value": 0.315626006904488,
          "id": 2372
        }
      ],
      [
        {
          "value": "Mille Lacs",
          "id": 2373
        },
        {
          "value": "1% above",
          "id": 2374
        },
        {
          "value": 0.331,
          "id": 2375
        },
        {
          "value": 0.188,
          "id": 2376
        },
        {
          "value": 0.126,
          "id": 2377
        },
        {
          "value": 0.263,
          "id": 2378
        },
        {
          "value": 0.315626006904488,
          "id": 2379
        }
      ],
      [
        {
          "value": "Miami",
          "id": 2380
        },
        {
          "value": "1% above",
          "id": 2381
        },
        {
          "value": 0.326,
          "id": 2382
        },
        {
          "value": 0.161,
          "id": 2383
        },
        {
          "value": 0.128,
          "id": 2384
        },
        {
          "value": 0.261,
          "id": 2385
        },
        {
          "value": 0.315626006904488,
          "id": 2386
        }
      ],
      [
        {
          "value": "Merrick",
          "id": 2387
        },
        {
          "value": "2% above",
          "id": 2388
        },
        {
          "value": 0.344,
          "id": 2389
        },
        {
          "value": 0.161,
          "id": 2390
        },
        {
          "value": 0.124,
          "id": 2391
        },
        {
          "value": 0.281,
          "id": 2392
        },
        {
          "value": 0.315626006904488,
          "id": 2393
        }
      ],
      [
        {
          "value": "Mercer",
          "id": 2394
        },
        {
          "value": "1% below",
          "id": 2395
        },
        {
          "value": 0.616,
          "id": 2396
        },
        {
          "value": 0.31699999999999995,
          "id": 2397
        },
        {
          "value": 0.17400000000000002,
          "id": 2398
        },
        {
          "value": 0.5549999999999999,
          "id": 2399
        },
        {
          "value": 0.631252013808976,
          "id": 2400
        }
      ],
      [
        {
          "value": "Mercer",
          "id": 2401
        },
        {
          "value": "4% above",
          "id": 2402
        },
        {
          "value": 0.361,
          "id": 2403
        },
        {
          "value": 0.202,
          "id": 2404
        },
        {
          "value": 0.15,
          "id": 2405
        },
        {
          "value": 0.274,
          "id": 2406
        },
        {
          "value": 0.315626006904488,
          "id": 2407
        }
      ],
      [
        {
          "value": "Menominee",
          "id": 2415
        },
        {
          "value": "9% above",
          "id": 2416
        },
        {
          "value": 0.41,
          "id": 2417
        },
        {
          "value": 0.321,
          "id": 2418
        },
        {
          "value": 0.195,
          "id": 2419
        },
        {
          "value": 0.305,
          "id": 2420
        },
        {
          "value": 0.315626006904488,
          "id": 2421
        }
      ],
      [
        {
          "value": "Menard",
          "id": 2422
        },
        {
          "value": "1% below",
          "id": 2423
        },
        {
          "value": 0.309,
          "id": 2424
        },
        {
          "value": 0.147,
          "id": 2425
        },
        {
          "value": 0.112,
          "id": 2426
        },
        {
          "value": 0.248,
          "id": 2427
        },
        {
          "value": 0.315626006904488,
          "id": 2428
        }
      ],
      [
        {
          "value": "Mellette",
          "id": 2429
        },
        {
          "value": "on par with",
          "id": 2430
        },
        {
          "value": 0.321,
          "id": 2431
        },
        {
          "value": 0.275,
          "id": 2432
        },
        {
          "value": 0.182,
          "id": 2433
        },
        {
          "value": 0.297,
          "id": 2434
        },
        {
          "value": 0.315626006904488,
          "id": 2435
        }
      ],
      [
        {
          "value": "Meeker",
          "id": 2436
        },
        {
          "value": "4% below",
          "id": 2437
        },
        {
          "value": 0.284,
          "id": 2438
        },
        {
          "value": 0.156,
          "id": 2439
        },
        {
          "value": 0.095,
          "id": 2440
        },
        {
          "value": 0.247,
          "id": 2441
        },
        {
          "value": 0.315626006904488,
          "id": 2442
        }
      ],
      [
        {
          "value": "Meade",
          "id": 2443
        },
        {
          "value": "4% below",
          "id": 2444
        },
        {
          "value": 0.281,
          "id": 2445
        },
        {
          "value": 0.184,
          "id": 2446
        },
        {
          "value": 0.114,
          "id": 2447
        },
        {
          "value": 0.253,
          "id": 2448
        },
        {
          "value": 0.315626006904488,
          "id": 2449
        }
      ],
      [
        {
          "value": "Meade",
          "id": 2450
        },
        {
          "value": "6% below",
          "id": 2451
        },
        {
          "value": 0.256,
          "id": 2452
        },
        {
          "value": 0.15,
          "id": 2453
        },
        {
          "value": 0.11,
          "id": 2454
        },
        {
          "value": 0.264,
          "id": 2455
        },
        {
          "value": 0.315626006904488,
          "id": 2456
        }
      ],
      [
        {
          "value": "McPherson",
          "id": 2457
        },
        {
          "value": "2% below",
          "id": 2458
        },
        {
          "value": 0.602,
          "id": 2459
        },
        {
          "value": 0.3,
          "id": 2460
        },
        {
          "value": 0.248,
          "id": 2461
        },
        {
          "value": 0.528,
          "id": 2462
        },
        {
          "value": 0.631252013808976,
          "id": 2463
        }
      ],
      [
        {
          "value": "McPherson",
          "id": 2464
        },
        {
          "value": "1% below",
          "id": 2465
        },
        {
          "value": 0.31,
          "id": 2466
        },
        {
          "value": 0.151,
          "id": 2467
        },
        {
          "value": 0.128,
          "id": 2468
        },
        {
          "value": 0.321,
          "id": 2469
        },
        {
          "value": 0.315626006904488,
          "id": 2470
        }
      ],
      [
        {
          "value": "McLeod",
          "id": 2478
        },
        {
          "value": "2% above",
          "id": 2479
        },
        {
          "value": 0.336,
          "id": 2480
        },
        {
          "value": 0.152,
          "id": 2481
        },
        {
          "value": 0.095,
          "id": 2482
        },
        {
          "value": 0.21,
          "id": 2483
        },
        {
          "value": 0.315626006904488,
          "id": 2484
        }
      ],
      [
        {
          "value": "McLean",
          "id": 2485
        },
        {
          "value": "1% above",
          "id": 2486
        },
        {
          "value": 0.329,
          "id": 2487
        },
        {
          "value": 0.166,
          "id": 2488
        },
        {
          "value": 0.071,
          "id": 2489
        },
        {
          "value": 0.287,
          "id": 2490
        },
        {
          "value": 0.315626006904488,
          "id": 2491
        }
      ],
      [
        {
          "value": "McLean",
          "id": 2492
        },
        {
          "value": "3% below",
          "id": 2493
        },
        {
          "value": 0.29,
          "id": 2494
        },
        {
          "value": 0.157,
          "id": 2495
        },
        {
          "value": 0.132,
          "id": 2496
        },
        {
          "value": 0.223,
          "id": 2497
        },
        {
          "value": 0.315626006904488,
          "id": 2498
        }
      ],
      [
        {
          "value": "McKenzie",
          "id": 2499
        },
        {
          "value": "2% above",
          "id": 2500
        },
        {
          "value": 0.335,
          "id": 2501
        },
        {
          "value": 0.211,
          "id": 2502
        },
        {
          "value": 0.067,
          "id": 2503
        },
        {
          "value": 0.319,
          "id": 2504
        },
        {
          "value": 0.315626006904488,
          "id": 2505
        }
      ],
      [
        {
          "value": "McIntosh",
          "id": 2506
        },
        {
          "value": "4% above",
          "id": 2507
        },
        {
          "value": 0.355,
          "id": 2508
        },
        {
          "value": 0.224,
          "id": 2509
        },
        {
          "value": 0.181,
          "id": 2510
        },
        {
          "value": 0.382,
          "id": 2511
        },
        {
          "value": 0.315626006904488,
          "id": 2512
        }
      ],
      [
        {
          "value": "McIntosh",
          "id": 2513
        },
        {
          "value": "on par with",
          "id": 2514
        },
        {
          "value": 0.321,
          "id": 2515
        },
        {
          "value": 0.153,
          "id": 2516
        },
        {
          "value": 0.072,
          "id": 2517
        },
        {
          "value": 0.323,
          "id": 2518
        },
        {
          "value": 0.315626006904488,
          "id": 2519
        }
      ],
      [
        {
          "value": "McHenry",
          "id": 2520
        },
        {
          "value": "3% below",
          "id": 2521
        },
        {
          "value": 0.288,
          "id": 2522
        },
        {
          "value": 0.172,
          "id": 2523
        },
        {
          "value": 0.078,
          "id": 2524
        },
        {
          "value": 0.288,
          "id": 2525
        },
        {
          "value": 0.315626006904488,
          "id": 2526
        }
      ],
      [
        {
          "value": "McHenry",
          "id": 2527
        },
        {
          "value": "4% below",
          "id": 2528
        },
        {
          "value": 0.279,
          "id": 2529
        },
        {
          "value": 0.159,
          "id": 2530
        },
        {
          "value": 0.09,
          "id": 2531
        },
        {
          "value": 0.222,
          "id": 2532
        },
        {
          "value": 0.315626006904488,
          "id": 2533
        }
      ],
      [
        {
          "value": "McDonough",
          "id": 2534
        },
        {
          "value": "3% below",
          "id": 2535
        },
        {
          "value": 0.291,
          "id": 2536
        },
        {
          "value": 0.187,
          "id": 2537
        },
        {
          "value": 0.167,
          "id": 2538
        },
        {
          "value": 0.227,
          "id": 2539
        },
        {
          "value": 0.315626006904488,
          "id": 2540
        }
      ],
      [
        {
          "value": "McDonald",
          "id": 2541
        },
        {
          "value": "4% below",
          "id": 2542
        },
        {
          "value": 0.285,
          "id": 2543
        },
        {
          "value": 0.244,
          "id": 2544
        },
        {
          "value": 0.155,
          "id": 2545
        },
        {
          "value": 0.336,
          "id": 2546
        },
        {
          "value": 0.315626006904488,
          "id": 2547
        }
      ],
      [
        {
          "value": "McCurtain",
          "id": 2548
        },
        {
          "value": "2% above",
          "id": 2549
        },
        {
          "value": 0.341,
          "id": 2550
        },
        {
          "value": 0.232,
          "id": 2551
        },
        {
          "value": 0.21,
          "id": 2552
        },
        {
          "value": 0.374,
          "id": 2553
        },
        {
          "value": 0.315626006904488,
          "id": 2554
        }
      ],
      [
        {
          "value": "McCook",
          "id": 2555
        },
        {
          "value": "4% below",
          "id": 2556
        },
        {
          "value": 0.275,
          "id": 2557
        },
        {
          "value": 0.144,
          "id": 2558
        },
        {
          "value": 0.096,
          "id": 2559
        },
        {
          "value": 0.279,
          "id": 2560
        },
        {
          "value": 0.315626006904488,
          "id": 2561
        }
      ],
      [
        {
          "value": "McClain",
          "id": 2562
        },
        {
          "value": "2% below",
          "id": 2563
        },
        {
          "value": 0.304,
          "id": 2564
        },
        {
          "value": 0.167,
          "id": 2565
        },
        {
          "value": 0.131,
          "id": 2566
        },
        {
          "value": 0.278,
          "id": 2567
        },
        {
          "value": 0.315626006904488,
          "id": 2568
        }
      ],
      [
        {
          "value": "Mayes",
          "id": 2569
        },
        {
          "value": "3% above",
          "id": 2570
        },
        {
          "value": 0.354,
          "id": 2571
        },
        {
          "value": 0.225,
          "id": 2572
        },
        {
          "value": 0.168,
          "id": 2573
        },
        {
          "value": 0.353,
          "id": 2574
        },
        {
          "value": 0.315626006904488,
          "id": 2575
        }
      ],
      [
        {
          "value": "Massac",
          "id": 2576
        },
        {
          "value": "2% above",
          "id": 2577
        },
        {
          "value": 0.343,
          "id": 2578
        },
        {
          "value": 0.169,
          "id": 2579
        },
        {
          "value": 0.147,
          "id": 2580
        },
        {
          "value": 0.286,
          "id": 2581
        },
        {
          "value": 0.315626006904488,
          "id": 2582
        }
      ],
      [
        {
          "value": "Mason",
          "id": 2583
        },
        {
          "value": "1% above",
          "id": 2584
        },
        {
          "value": 0.331,
          "id": 2585
        },
        {
          "value": 0.168,
          "id": 2586
        },
        {
          "value": 0.15,
          "id": 2587
        },
        {
          "value": 0.271,
          "id": 2588
        },
        {
          "value": 0.315626006904488,
          "id": 2589
        }
      ],
      [
        {
          "value": "Martin",
          "id": 2590
        },
        {
          "value": "1% above",
          "id": 2591
        },
        {
          "value": 0.326,
          "id": 2592
        },
        {
          "value": 0.149,
          "id": 2593
        },
        {
          "value": 0.1,
          "id": 2594
        },
        {
          "value": 0.292,
          "id": 2595
        },
        {
          "value": 0.315626006904488,
          "id": 2596
        }
      ],
      [
        {
          "value": "Marshall",
          "id": 2597
        },
        {
          "value": "1% below",
          "id": 2598
        },
        {
          "value": 0.313,
          "id": 2599
        },
        {
          "value": 0.159,
          "id": 2600
        },
        {
          "value": 0.126,
          "id": 2601
        },
        {
          "value": 0.274,
          "id": 2602
        },
        {
          "value": 0.315626006904488,
          "id": 2603
        }
      ],
      [
        {
          "value": "Marshall",
          "id": 2604
        },
        {
          "value": "2% above",
          "id": 2605
        },
        {
          "value": 0.679,
          "id": 2606
        },
        {
          "value": 0.371,
          "id": 2607
        },
        {
          "value": 0.276,
          "id": 2608
        },
        {
          "value": 0.644,
          "id": 2609
        },
        {
          "value": 0.631252013808976,
          "id": 2610
        }
      ],
      [
        {
          "value": "Marshall",
          "id": 2611
        },
        {
          "value": "2% below",
          "id": 2612
        },
        {
          "value": 0.303,
          "id": 2613
        },
        {
          "value": 0.143,
          "id": 2614
        },
        {
          "value": 0.1,
          "id": 2615
        },
        {
          "value": 0.254,
          "id": 2616
        },
        {
          "value": 0.315626006904488,
          "id": 2617
        }
      ],
      [
        {
          "value": "Marshall",
          "id": 2625
        },
        {
          "value": "1% above",
          "id": 2626
        },
        {
          "value": 0.332,
          "id": 2627
        },
        {
          "value": 0.171,
          "id": 2628
        },
        {
          "value": 0.108,
          "id": 2629
        },
        {
          "value": 0.268,
          "id": 2630
        },
        {
          "value": 0.315626006904488,
          "id": 2631
        }
      ],
      [
        {
          "value": "Marshall",
          "id": 2632
        },
        {
          "value": "on par with",
          "id": 2633
        },
        {
          "value": 0.323,
          "id": 2634
        },
        {
          "value": 0.146,
          "id": 2635
        },
        {
          "value": 0.117,
          "id": 2636
        },
        {
          "value": 0.268,
          "id": 2637
        },
        {
          "value": 0.315626006904488,
          "id": 2638
        }
      ],
      [
        {
          "value": "Marquette",
          "id": 2639
        },
        {
          "value": "1% above",
          "id": 2640
        },
        {
          "value": 0.333,
          "id": 2641
        },
        {
          "value": 0.159,
          "id": 2642
        },
        {
          "value": 0.122,
          "id": 2643
        },
        {
          "value": 0.25,
          "id": 2644
        },
        {
          "value": 0.315626006904488,
          "id": 2645
        }
      ],
      [
        {
          "value": "Marion",
          "id": 2646
        },
        {
          "value": "4% above",
          "id": 2647
        },
        {
          "value": 0.716,
          "id": 2648
        },
        {
          "value": 0.393,
          "id": 2649
        },
        {
          "value": 0.322,
          "id": 2650
        },
        {
          "value": 0.624,
          "id": 2651
        },
        {
          "value": 0.631252013808976,
          "id": 2652
        }
      ],
      [
        {
          "value": "Marion",
          "id": 2653
        },
        {
          "value": "1% above",
          "id": 2654
        },
        {
          "value": 0.332,
          "id": 2655
        },
        {
          "value": 0.156,
          "id": 2656
        },
        {
          "value": 0.129,
          "id": 2657
        },
        {
          "value": 0.252,
          "id": 2658
        },
        {
          "value": 0.315626006904488,
          "id": 2659
        }
      ],
      [
        {
          "value": "Marion",
          "id": 2660
        },
        {
          "value": "1% below",
          "id": 2661
        },
        {
          "value": 0.309,
          "id": 2662
        },
        {
          "value": 0.163,
          "id": 2663
        },
        {
          "value": 0.115,
          "id": 2664
        },
        {
          "value": 0.228,
          "id": 2665
        },
        {
          "value": 0.315626006904488,
          "id": 2666
        }
      ],
      [
        {
          "value": "Marinette",
          "id": 2674
        },
        {
          "value": "1% above",
          "id": 2675
        },
        {
          "value": 0.327,
          "id": 2676
        },
        {
          "value": 0.161,
          "id": 2677
        },
        {
          "value": 0.125,
          "id": 2678
        },
        {
          "value": 0.244,
          "id": 2679
        },
        {
          "value": 0.315626006904488,
          "id": 2680
        }
      ],
      [
        {
          "value": "Maries",
          "id": 2681
        },
        {
          "value": "1% above",
          "id": 2682
        },
        {
          "value": 0.329,
          "id": 2683
        },
        {
          "value": 0.202,
          "id": 2684
        },
        {
          "value": 0.146,
          "id": 2685
        },
        {
          "value": 0.306,
          "id": 2686
        },
        {
          "value": 0.315626006904488,
          "id": 2687
        }
      ],
      [
        {
          "value": "Marathon",
          "id": 2688
        },
        {
          "value": "2% below",
          "id": 2689
        },
        {
          "value": 0.295,
          "id": 2690
        },
        {
          "value": 0.158,
          "id": 2691
        },
        {
          "value": 0.114,
          "id": 2692
        },
        {
          "value": 0.247,
          "id": 2693
        },
        {
          "value": 0.315626006904488,
          "id": 2694
        }
      ],
      [
        {
          "value": "Manitowoc",
          "id": 2695
        },
        {
          "value": "1% below",
          "id": 2696
        },
        {
          "value": 0.311,
          "id": 2697
        },
        {
          "value": 0.161,
          "id": 2698
        },
        {
          "value": 0.112,
          "id": 2699
        },
        {
          "value": 0.219,
          "id": 2700
        },
        {
          "value": 0.315626006904488,
          "id": 2701
        }
      ],
      [
        {
          "value": "Major",
          "id": 2702
        },
        {
          "value": "on par with",
          "id": 2703
        },
        {
          "value": 0.319,
          "id": 2704
        },
        {
          "value": 0.174,
          "id": 2705
        },
        {
          "value": 0.131,
          "id": 2706
        },
        {
          "value": 0.324,
          "id": 2707
        },
        {
          "value": 0.315626006904488,
          "id": 2708
        }
      ],
      [
        {
          "value": "Mahnomen",
          "id": 2709
        },
        {
          "value": "3% below",
          "id": 2710
        },
        {
          "value": 0.286,
          "id": 2711
        },
        {
          "value": 0.251,
          "id": 2712
        },
        {
          "value": 0.139,
          "id": 2713
        },
        {
          "value": 0.285,
          "id": 2714
        },
        {
          "value": 0.315626006904488,
          "id": 2715
        }
      ],
      [
        {
          "value": "Mahaska",
          "id": 2716
        },
        {
          "value": "1% below",
          "id": 2717
        },
        {
          "value": 0.307,
          "id": 2718
        },
        {
          "value": 0.187,
          "id": 2719
        },
        {
          "value": 0.136,
          "id": 2720
        },
        {
          "value": 0.259,
          "id": 2721
        },
        {
          "value": 0.315626006904488,
          "id": 2722
        }
      ],
      [
        {
          "value": "Madison",
          "id": 2723
        },
        {
          "value": "on par with",
          "id": 2724
        },
        {
          "value": 0.323,
          "id": 2725
        },
        {
          "value": 0.175,
          "id": 2726
        },
        {
          "value": 0.122,
          "id": 2727
        },
        {
          "value": 0.245,
          "id": 2728
        },
        {
          "value": 0.315626006904488,
          "id": 2729
        }
      ],
      [
        {
          "value": "Madison",
          "id": 2730
        },
        {
          "value": "4% above",
          "id": 2731
        },
        {
          "value": 0.361,
          "id": 2732
        },
        {
          "value": 0.223,
          "id": 2733
        },
        {
          "value": 0.16,
          "id": 2734
        },
        {
          "value": 0.331,
          "id": 2735
        },
        {
          "value": 0.315626006904488,
          "id": 2736
        }
      ],
      [
        {
          "value": "Madison",
          "id": 2737
        },
        {
          "value": "2% above",
          "id": 2738
        },
        {
          "value": 0.339,
          "id": 2739
        },
        {
          "value": 0.166,
          "id": 2740
        },
        {
          "value": 0.116,
          "id": 2741
        },
        {
          "value": 0.262,
          "id": 2742
        },
        {
          "value": 0.315626006904488,
          "id": 2743
        }
      ],
      [
        {
          "value": "Madison",
          "id": 2744
        },
        {
          "value": "1% above",
          "id": 2745
        },
        {
          "value": 0.329,
          "id": 2746
        },
        {
          "value": 0.169,
          "id": 2747
        },
        {
          "value": 0.138,
          "id": 2748
        },
        {
          "value": 0.272,
          "id": 2749
        },
        {
          "value": 0.315626006904488,
          "id": 2750
        }
      ],
      [
        {
          "value": "Macoupin",
          "id": 2751
        },
        {
          "value": "1% above",
          "id": 2752
        },
        {
          "value": 0.331,
          "id": 2753
        },
        {
          "value": 0.152,
          "id": 2754
        },
        {
          "value": 0.131,
          "id": 2755
        },
        {
          "value": 0.308,
          "id": 2756
        },
        {
          "value": 0.315626006904488,
          "id": 2757
        }
      ],
      [
        {
          "value": "Macon",
          "id": 2758
        },
        {
          "value": "1% below",
          "id": 2759
        },
        {
          "value": 0.615,
          "id": 2760
        },
        {
          "value": 0.366,
          "id": 2761
        },
        {
          "value": 0.32899999999999996,
          "id": 2762
        },
        {
          "value": 0.5589999999999999,
          "id": 2763
        },
        {
          "value": 0.631252013808976,
          "id": 2764
        }
      ],
      [
        {
          "value": "Lyon",
          "id": 2772
        },
        {
          "value": "3% below",
          "id": 2773
        },
        {
          "value": 0.292,
          "id": 2774
        },
        {
          "value": 0.152,
          "id": 2775
        },
        {
          "value": 0.108,
          "id": 2776
        },
        {
          "value": 0.166,
          "id": 2777
        },
        {
          "value": 0.315626006904488,
          "id": 2778
        }
      ],
      [
        {
          "value": "Lyon",
          "id": 2779
        },
        {
          "value": "2% above",
          "id": 2780
        },
        {
          "value": 0.341,
          "id": 2781
        },
        {
          "value": 0.205,
          "id": 2782
        },
        {
          "value": 0.158,
          "id": 2783
        },
        {
          "value": 0.23,
          "id": 2784
        },
        {
          "value": 0.315626006904488,
          "id": 2785
        }
      ],
      [
        {
          "value": "Lyon",
          "id": 2786
        },
        {
          "value": "2% below",
          "id": 2787
        },
        {
          "value": 0.304,
          "id": 2788
        },
        {
          "value": 0.152,
          "id": 2789
        },
        {
          "value": 0.096,
          "id": 2790
        },
        {
          "value": 0.269,
          "id": 2791
        },
        {
          "value": 0.315626006904488,
          "id": 2792
        }
      ],
      [
        {
          "value": "Lyman",
          "id": 2793
        },
        {
          "value": "1% above",
          "id": 2794
        },
        {
          "value": 0.326,
          "id": 2795
        },
        {
          "value": 0.223,
          "id": 2796
        },
        {
          "value": 0.136,
          "id": 2797
        },
        {
          "value": 0.239,
          "id": 2798
        },
        {
          "value": 0.315626006904488,
          "id": 2799
        }
      ],
      [
        {
          "value": "Lucas",
          "id": 2800
        },
        {
          "value": "on par with",
          "id": 2801
        },
        {
          "value": 0.318,
          "id": 2802
        },
        {
          "value": 0.174,
          "id": 2803
        },
        {
          "value": 0.13,
          "id": 2804
        },
        {
          "value": 0.304,
          "id": 2805
        },
        {
          "value": 0.315626006904488,
          "id": 2806
        }
      ],
      [
        {
          "value": "Love",
          "id": 2807
        },
        {
          "value": "3% above",
          "id": 2808
        },
        {
          "value": 0.346,
          "id": 2809
        },
        {
          "value": 0.183,
          "id": 2810
        },
        {
          "value": 0.14,
          "id": 2811
        },
        {
          "value": 0.332,
          "id": 2812
        },
        {
          "value": 0.315626006904488,
          "id": 2813
        }
      ],
      [
        {
          "value": "Loup",
          "id": 2814
        },
        {
          "value": "2% below",
          "id": 2815
        },
        {
          "value": 0.301,
          "id": 2816
        },
        {
          "value": 0.165,
          "id": 2817
        },
        {
          "value": 0.153,
          "id": 2818
        },
        {
          "value": 0.33,
          "id": 2819
        },
        {
          "value": 0.315626006904488,
          "id": 2820
        }
      ],
      [
        {
          "value": "Louisa",
          "id": 2821
        },
        {
          "value": "3% above",
          "id": 2822
        },
        {
          "value": 0.35,
          "id": 2823
        },
        {
          "value": 0.168,
          "id": 2824
        },
        {
          "value": 0.101,
          "id": 2825
        },
        {
          "value": 0.29,
          "id": 2826
        },
        {
          "value": 0.315626006904488,
          "id": 2827
        }
      ],
      [
        {
          "value": "Logan",
          "id": 2828
        },
        {
          "value": "on par with",
          "id": 2829
        },
        {
          "value": 0.644,
          "id": 2830
        },
        {
          "value": 0.33299999999999996,
          "id": 2831
        },
        {
          "value": 0.28300000000000003,
          "id": 2832
        },
        {
          "value": 0.5720000000000001,
          "id": 2833
        },
        {
          "value": 0.631252013808976,
          "id": 2834
        }
      ],
      [
        {
          "value": "Logan",
          "id": 2835
        },
        {
          "value": "2% above",
          "id": 2836
        },
        {
          "value": 0.335,
          "id": 2837
        },
        {
          "value": 0.156,
          "id": 2838
        },
        {
          "value": 0.06,
          "id": 2839
        },
        {
          "value": 0.293,
          "id": 2840
        },
        {
          "value": 0.315626006904488,
          "id": 2841
        }
      ],
      [
        {
          "value": "Logan",
          "id": 2842
        },
        {
          "value": "3% below",
          "id": 2843
        },
        {
          "value": 0.286,
          "id": 2844
        },
        {
          "value": 0.16,
          "id": 2845
        },
        {
          "value": 0.12,
          "id": 2846
        },
        {
          "value": 0.303,
          "id": 2847
        },
        {
          "value": 0.315626006904488,
          "id": 2848
        }
      ],
      [
        {
          "value": "Logan",
          "id": 2856
        },
        {
          "value": "1% below",
          "id": 2857
        },
        {
          "value": 0.309,
          "id": 2858
        },
        {
          "value": 0.165,
          "id": 2859
        },
        {
          "value": 0.148,
          "id": 2860
        },
        {
          "value": 0.25,
          "id": 2861
        },
        {
          "value": 0.315626006904488,
          "id": 2862
        }
      ],
      [
        {
          "value": "Livingston",
          "id": 2863
        },
        {
          "value": "4% below",
          "id": 2864
        },
        {
          "value": 0.283,
          "id": 2865
        },
        {
          "value": 0.196,
          "id": 2866
        },
        {
          "value": 0.158,
          "id": 2867
        },
        {
          "value": 0.293,
          "id": 2868
        },
        {
          "value": 0.315626006904488,
          "id": 2869
        }
      ],
      [
        {
          "value": "Livingston",
          "id": 2870
        },
        {
          "value": "1% below",
          "id": 2871
        },
        {
          "value": 0.314,
          "id": 2872
        },
        {
          "value": 0.153,
          "id": 2873
        },
        {
          "value": 0.126,
          "id": 2874
        },
        {
          "value": 0.313,
          "id": 2875
        },
        {
          "value": 0.315626006904488,
          "id": 2876
        }
      ],
      [
        {
          "value": "Linn",
          "id": 2877
        },
        {
          "value": "2% below",
          "id": 2878
        },
        {
          "value": 0.599,
          "id": 2879
        },
        {
          "value": 0.37,
          "id": 2880
        },
        {
          "value": 0.278,
          "id": 2881
        },
        {
          "value": 0.521,
          "id": 2882
        },
        {
          "value": 0.631252013808976,
          "id": 2883
        }
      ],
      [
        {
          "value": "Linn",
          "id": 2884
        },
        {
          "value": "on par with",
          "id": 2885
        },
        {
          "value": 0.317,
          "id": 2886
        },
        {
          "value": 0.171,
          "id": 2887
        },
        {
          "value": 0.146,
          "id": 2888
        },
        {
          "value": 0.293,
          "id": 2889
        },
        {
          "value": 0.315626006904488,
          "id": 2890
        }
      ],
      [
        {
          "value": "Lincoln",
          "id": 2898
        },
        {
          "value": "on par with",
          "id": 2899
        },
        {
          "value": 0.315,
          "id": 2900
        },
        {
          "value": 0.159,
          "id": 2901
        },
        {
          "value": 0.125,
          "id": 2902
        },
        {
          "value": 0.234,
          "id": 2903
        },
        {
          "value": 0.315626006904488,
          "id": 2904
        }
      ],
      [
        {
          "value": "Lincoln",
          "id": 2905
        },
        {
          "value": "4% below",
          "id": 2906
        },
        {
          "value": 0.283,
          "id": 2907
        },
        {
          "value": 0.147,
          "id": 2908
        },
        {
          "value": 0.086,
          "id": 2909
        },
        {
          "value": 0.219,
          "id": 2910
        },
        {
          "value": 0.315626006904488,
          "id": 2911
        }
      ],
      [
        {
          "value": "Lincoln",
          "id": 2912
        },
        {
          "value": "5% above",
          "id": 2913
        },
        {
          "value": 0.372,
          "id": 2914
        },
        {
          "value": 0.203,
          "id": 2915
        },
        {
          "value": 0.159,
          "id": 2916
        },
        {
          "value": 0.387,
          "id": 2917
        },
        {
          "value": 0.315626006904488,
          "id": 2918
        }
      ],
      [
        {
          "value": "Lincoln",
          "id": 2919
        },
        {
          "value": "1% above",
          "id": 2920
        },
        {
          "value": 0.664,
          "id": 2921
        },
        {
          "value": 0.40800000000000003,
          "id": 2922
        },
        {
          "value": 0.269,
          "id": 2923
        },
        {
          "value": 0.556,
          "id": 2924
        },
        {
          "value": 0.631252013808976,
          "id": 2925
        }
      ],
      [
        {
          "value": "Lincoln",
          "id": 2933
        },
        {
          "value": "3% below",
          "id": 2934
        },
        {
          "value": 0.289,
          "id": 2935
        },
        {
          "value": 0.147,
          "id": 2936
        },
        {
          "value": 0.089,
          "id": 2937
        },
        {
          "value": 0.248,
          "id": 2938
        },
        {
          "value": 0.315626006904488,
          "id": 2939
        }
      ],
      [
        {
          "value": "Lincoln",
          "id": 2940
        },
        {
          "value": "1% below",
          "id": 2941
        },
        {
          "value": 0.305,
          "id": 2942
        },
        {
          "value": 0.164,
          "id": 2943
        },
        {
          "value": 0.133,
          "id": 2944
        },
        {
          "value": 0.246,
          "id": 2945
        },
        {
          "value": 0.315626006904488,
          "id": 2946
        }
      ],
      [
        {
          "value": "Lewis",
          "id": 2947
        },
        {
          "value": "4% above",
          "id": 2948
        },
        {
          "value": 0.361,
          "id": 2949
        },
        {
          "value": 0.207,
          "id": 2950
        },
        {
          "value": 0.151,
          "id": 2951
        },
        {
          "value": 0.348,
          "id": 2952
        },
        {
          "value": 0.315626006904488,
          "id": 2953
        }
      ],
      [
        {
          "value": "Lee",
          "id": 2954
        },
        {
          "value": "on par with",
          "id": 2955
        },
        {
          "value": 0.316,
          "id": 2956
        },
        {
          "value": 0.181,
          "id": 2957
        },
        {
          "value": 0.147,
          "id": 2958
        },
        {
          "value": 0.283,
          "id": 2959
        },
        {
          "value": 0.315626006904488,
          "id": 2960
        }
      ],
      [
        {
          "value": "Lee",
          "id": 2961
        },
        {
          "value": "1% above",
          "id": 2962
        },
        {
          "value": 0.329,
          "id": 2963
        },
        {
          "value": 0.162,
          "id": 2964
        },
        {
          "value": 0.129,
          "id": 2965
        },
        {
          "value": 0.293,
          "id": 2966
        },
        {
          "value": 0.315626006904488,
          "id": 2967
        }
      ],
      [
        {
          "value": "Leavenworth",
          "id": 2968
        },
        {
          "value": "1% below",
          "id": 2969
        },
        {
          "value": 0.308,
          "id": 2970
        },
        {
          "value": 0.182,
          "id": 2971
        },
        {
          "value": 0.148,
          "id": 2972
        },
        {
          "value": 0.261,
          "id": 2973
        },
        {
          "value": 0.315626006904488,
          "id": 2974
        }
      ],
      [
        {
          "value": "Le Sueur",
          "id": 2975
        },
        {
          "value": "1% above",
          "id": 2976
        },
        {
          "value": 0.33,
          "id": 2977
        },
        {
          "value": 0.153,
          "id": 2978
        },
        {
          "value": 0.092,
          "id": 2979
        },
        {
          "value": 0.192,
          "id": 2980
        },
        {
          "value": 0.315626006904488,
          "id": 2981
        }
      ],
      [
        {
          "value": "Le Flore",
          "id": 2982
        },
        {
          "value": "7% above",
          "id": 2983
        },
        {
          "value": 0.393,
          "id": 2984
        },
        {
          "value": 0.235,
          "id": 2985
        },
        {
          "value": 0.186,
          "id": 2986
        },
        {
          "value": 0.327,
          "id": 2987
        },
        {
          "value": 0.315626006904488,
          "id": 2988
        }
      ],
      [
        {
          "value": "Lawrence",
          "id": 2989
        },
        {
          "value": "7% below",
          "id": 2990
        },
        {
          "value": 0.251,
          "id": 2991
        },
        {
          "value": 0.153,
          "id": 2992
        },
        {
          "value": 0.127,
          "id": 2993
        },
        {
          "value": 0.226,
          "id": 2994
        },
        {
          "value": 0.315626006904488,
          "id": 2995
        }
      ],
      [
        {
          "value": "Lawrence",
          "id": 2996
        },
        {
          "value": "2% below",
          "id": 2997
        },
        {
          "value": 0.304,
          "id": 2998
        },
        {
          "value": 0.213,
          "id": 2999
        },
        {
          "value": 0.149,
          "id": 3000
        },
        {
          "value": 0.248,
          "id": 3001
        },
        {
          "value": 0.315626006904488,
          "id": 3002
        }
      ],
      [
        {
          "value": "Lawrence",
          "id": 3003
        },
        {
          "value": "on par with",
          "id": 3004
        },
        {
          "value": 0.32,
          "id": 3005
        },
        {
          "value": 0.172,
          "id": 3006
        },
        {
          "value": 0.143,
          "id": 3007
        },
        {
          "value": 0.26,
          "id": 3008
        },
        {
          "value": 0.315626006904488,
          "id": 3009
        }
      ],
      [
        {
          "value": "Latimer",
          "id": 3010
        },
        {
          "value": "4% above",
          "id": 3011
        },
        {
          "value": 0.355,
          "id": 3012
        },
        {
          "value": 0.223,
          "id": 3013
        },
        {
          "value": 0.188,
          "id": 3014
        },
        {
          "value": 0.34,
          "id": 3015
        },
        {
          "value": 0.315626006904488,
          "id": 3016
        }
      ],
      [
        {
          "value": "LaSalle",
          "id": 3017
        },
        {
          "value": "4% below",
          "id": 3018
        },
        {
          "value": 0.285,
          "id": 3019
        },
        {
          "value": 0.159,
          "id": 3020
        },
        {
          "value": 0.134,
          "id": 3021
        },
        {
          "value": 0.256,
          "id": 3022
        },
        {
          "value": 0.315626006904488,
          "id": 3023
        }
      ],
      [
        {
          "value": "Langlade",
          "id": 3024
        },
        {
          "value": "3% below",
          "id": 3025
        },
        {
          "value": 0.286,
          "id": 3026
        },
        {
          "value": 0.161,
          "id": 3027
        },
        {
          "value": 0.131,
          "id": 3028
        },
        {
          "value": 0.23,
          "id": 3029
        },
        {
          "value": 0.315626006904488,
          "id": 3030
        }
      ],
      [
        {
          "value": "Lane",
          "id": 3031
        },
        {
          "value": "1% above",
          "id": 3032
        },
        {
          "value": 0.325,
          "id": 3033
        },
        {
          "value": 0.148,
          "id": 3034
        },
        {
          "value": 0.112,
          "id": 3035
        },
        {
          "value": 0.262,
          "id": 3036
        },
        {
          "value": 0.315626006904488,
          "id": 3037
        }
      ],
      [
        {
          "value": "Lancaster",
          "id": 3038
        },
        {
          "value": "6% below",
          "id": 3039
        },
        {
          "value": 0.261,
          "id": 3040
        },
        {
          "value": 0.163,
          "id": 3041
        },
        {
          "value": 0.141,
          "id": 3042
        },
        {
          "value": 0.191,
          "id": 3043
        },
        {
          "value": 0.315626006904488,
          "id": 3044
        }
      ],
      [
        {
          "value": "LaMoure",
          "id": 3045
        },
        {
          "value": "1% above",
          "id": 3046
        },
        {
          "value": 0.332,
          "id": 3047
        },
        {
          "value": 0.16,
          "id": 3048
        },
        {
          "value": 0.057,
          "id": 3049
        },
        {
          "value": 0.287,
          "id": 3050
        },
        {
          "value": 0.315626006904488,
          "id": 3051
        }
      ],
      [
        {
          "value": "Lake of the Woods",
          "id": 3052
        },
        {
          "value": "3% below",
          "id": 3053
        },
        {
          "value": 0.288,
          "id": 3054
        },
        {
          "value": 0.158,
          "id": 3055
        },
        {
          "value": 0.093,
          "id": 3056
        },
        {
          "value": 0.255,
          "id": 3057
        },
        {
          "value": 0.315626006904488,
          "id": 3058
        }
      ],
      [
        {
          "value": "Lake",
          "id": 3059
        },
        {
          "value": "3% below",
          "id": 3060
        },
        {
          "value": 0.584,
          "id": 3061
        },
        {
          "value": 0.29000000000000004,
          "id": 3062
        },
        {
          "value": 0.217,
          "id": 3063
        },
        {
          "value": 0.452,
          "id": 3064
        },
        {
          "value": 0.631252013808976,
          "id": 3065
        }
      ],
      [
        {
          "value": "Lake",
          "id": 3066
        },
        {
          "value": "4% below",
          "id": 3067
        },
        {
          "value": 0.283,
          "id": 3068
        },
        {
          "value": 0.148,
          "id": 3069
        },
        {
          "value": 0.106,
          "id": 3070
        },
        {
          "value": 0.197,
          "id": 3071
        },
        {
          "value": 0.315626006904488,
          "id": 3072
        }
      ],
      [
        {
          "value": "Lafayette",
          "id": 3080
        },
        {
          "value": "1% above",
          "id": 3081
        },
        {
          "value": 0.328,
          "id": 3082
        },
        {
          "value": 0.156,
          "id": 3083
        },
        {
          "value": 0.104,
          "id": 3084
        },
        {
          "value": 0.18,
          "id": 3085
        },
        {
          "value": 0.315626006904488,
          "id": 3086
        }
      ],
      [
        {
          "value": "Lafayette",
          "id": 3087
        },
        {
          "value": "1% below",
          "id": 3088
        },
        {
          "value": 0.309,
          "id": 3089
        },
        {
          "value": 0.188,
          "id": 3090
        },
        {
          "value": 0.141,
          "id": 3091
        },
        {
          "value": 0.322,
          "id": 3092
        },
        {
          "value": 0.315626006904488,
          "id": 3093
        }
      ],
      [
        {
          "value": "Laclede",
          "id": 3094
        },
        {
          "value": "on par with",
          "id": 3095
        },
        {
          "value": 0.32,
          "id": 3096
        },
        {
          "value": 0.232,
          "id": 3097
        },
        {
          "value": 0.176,
          "id": 3098
        },
        {
          "value": 0.321,
          "id": 3099
        },
        {
          "value": 0.315626006904488,
          "id": 3100
        }
      ],
      [
        {
          "value": "Lac qui Parle",
          "id": 3101
        },
        {
          "value": "3% below",
          "id": 3102
        },
        {
          "value": 0.293,
          "id": 3103
        },
        {
          "value": 0.143,
          "id": 3104
        },
        {
          "value": 0.09,
          "id": 3105
        },
        {
          "value": 0.268,
          "id": 3106
        },
        {
          "value": 0.315626006904488,
          "id": 3107
        }
      ],
      [
        {
          "value": "Labette",
          "id": 3108
        },
        {
          "value": "4% above",
          "id": 3109
        },
        {
          "value": 0.363,
          "id": 3110
        },
        {
          "value": 0.202,
          "id": 3111
        },
        {
          "value": 0.163,
          "id": 3112
        },
        {
          "value": 0.325,
          "id": 3113
        },
        {
          "value": 0.315626006904488,
          "id": 3114
        }
      ],
      [
        {
          "value": "La Crosse",
          "id": 3115
        },
        {
          "value": "7% below",
          "id": 3116
        },
        {
          "value": 0.252,
          "id": 3117
        },
        {
          "value": 0.164,
          "id": 3118
        },
        {
          "value": 0.123,
          "id": 3119
        },
        {
          "value": 0.211,
          "id": 3120
        },
        {
          "value": 0.315626006904488,
          "id": 3121
        }
      ],
      [
        {
          "value": "Kossuth",
          "id": 3122
        },
        {
          "value": "1% below",
          "id": 3123
        },
        {
          "value": 0.314,
          "id": 3124
        },
        {
          "value": 0.149,
          "id": 3125
        },
        {
          "value": 0.104,
          "id": 3126
        },
        {
          "value": 0.27,
          "id": 3127
        },
        {
          "value": 0.315626006904488,
          "id": 3128
        }
      ],
      [
        {
          "value": "Koochiching",
          "id": 3129
        },
        {
          "value": "7% below",
          "id": 3130
        },
        {
          "value": 0.249,
          "id": 3131
        },
        {
          "value": 0.171,
          "id": 3132
        },
        {
          "value": 0.13,
          "id": 3133
        },
        {
          "value": 0.27,
          "id": 3134
        },
        {
          "value": 0.315626006904488,
          "id": 3135
        }
      ],
      [
        {
          "value": "Knox",
          "id": 3136
        },
        {
          "value": "2% below",
          "id": 3137
        },
        {
          "value": 0.3,
          "id": 3138
        },
        {
          "value": 0.157,
          "id": 3139
        },
        {
          "value": 0.131,
          "id": 3140
        },
        {
          "value": 0.315,
          "id": 3141
        },
        {
          "value": 0.315626006904488,
          "id": 3142
        }
      ],
      [
        {
          "value": "Knox",
          "id": 3143
        },
        {
          "value": "on par with",
          "id": 3144
        },
        {
          "value": 0.323,
          "id": 3145
        },
        {
          "value": 0.215,
          "id": 3146
        },
        {
          "value": 0.165,
          "id": 3147
        },
        {
          "value": 0.252,
          "id": 3148
        },
        {
          "value": 0.315626006904488,
          "id": 3149
        }
      ],
      [
        {
          "value": "Knox",
          "id": 3150
        },
        {
          "value": "7% below",
          "id": 3151
        },
        {
          "value": 0.252,
          "id": 3152
        },
        {
          "value": 0.171,
          "id": 3153
        },
        {
          "value": 0.15,
          "id": 3154
        },
        {
          "value": 0.262,
          "id": 3155
        },
        {
          "value": 0.315626006904488,
          "id": 3156
        }
      ],
      [
        {
          "value": "Kittson",
          "id": 3157
        },
        {
          "value": "3% below",
          "id": 3158
        },
        {
          "value": 0.292,
          "id": 3159
        },
        {
          "value": 0.158,
          "id": 3160
        },
        {
          "value": 0.096,
          "id": 3161
        },
        {
          "value": 0.285,
          "id": 3162
        },
        {
          "value": 0.315626006904488,
          "id": 3163
        }
      ],
      [
        {
          "value": "Kiowa",
          "id": 3164
        },
        {
          "value": "2% below",
          "id": 3165
        },
        {
          "value": 0.303,
          "id": 3166
        },
        {
          "value": 0.225,
          "id": 3167
        },
        {
          "value": 0.174,
          "id": 3168
        },
        {
          "value": 0.331,
          "id": 3169
        },
        {
          "value": 0.315626006904488,
          "id": 3170
        }
      ],
      [
        {
          "value": "Kiowa",
          "id": 3171
        },
        {
          "value": "on par with",
          "id": 3172
        },
        {
          "value": 0.315,
          "id": 3173
        },
        {
          "value": 0.177,
          "id": 3174
        },
        {
          "value": 0.134,
          "id": 3175
        },
        {
          "value": 0.271,
          "id": 3176
        },
        {
          "value": 0.315626006904488,
          "id": 3177
        }
      ],
      [
        {
          "value": "Kingsbury",
          "id": 3178
        },
        {
          "value": "2% above",
          "id": 3179
        },
        {
          "value": 0.335,
          "id": 3180
        },
        {
          "value": 0.137,
          "id": 3181
        },
        {
          "value": 0.101,
          "id": 3182
        },
        {
          "value": 0.286,
          "id": 3183
        },
        {
          "value": 0.315626006904488,
          "id": 3184
        }
      ],
      [
        {
          "value": "Kingman",
          "id": 3185
        },
        {
          "value": "on par with",
          "id": 3186
        },
        {
          "value": 0.323,
          "id": 3187
        },
        {
          "value": 0.165,
          "id": 3188
        },
        {
          "value": 0.137,
          "id": 3189
        },
        {
          "value": 0.296,
          "id": 3190
        },
        {
          "value": 0.315626006904488,
          "id": 3191
        }
      ],
      [
        {
          "value": "Kingfisher",
          "id": 3192
        },
        {
          "value": "3% below",
          "id": 3193
        },
        {
          "value": 0.291,
          "id": 3194
        },
        {
          "value": 0.17,
          "id": 3195
        },
        {
          "value": 0.113,
          "id": 3196
        },
        {
          "value": 0.29,
          "id": 3197
        },
        {
          "value": 0.315626006904488,
          "id": 3198
        }
      ],
      [
        {
          "value": "Kimball",
          "id": 3199
        },
        {
          "value": "on par with",
          "id": 3200
        },
        {
          "value": 0.316,
          "id": 3201
        },
        {
          "value": 0.173,
          "id": 3202
        },
        {
          "value": 0.131,
          "id": 3203
        },
        {
          "value": 0.304,
          "id": 3204
        },
        {
          "value": 0.315626006904488,
          "id": 3205
        }
      ],
      [
        {
          "value": "Kidder",
          "id": 3206
        },
        {
          "value": "3% below",
          "id": 3207
        },
        {
          "value": 0.287,
          "id": 3208
        },
        {
          "value": 0.166,
          "id": 3209
        },
        {
          "value": 0.076,
          "id": 3210
        },
        {
          "value": 0.289,
          "id": 3211
        },
        {
          "value": 0.315626006904488,
          "id": 3212
        }
      ],
      [
        {
          "value": "Keya Paha",
          "id": 3213
        },
        {
          "value": "4% below",
          "id": 3214
        },
        {
          "value": 0.278,
          "id": 3215
        },
        {
          "value": 0.152,
          "id": 3216
        },
        {
          "value": 0.135,
          "id": 3217
        },
        {
          "value": 0.347,
          "id": 3218
        },
        {
          "value": 0.315626006904488,
          "id": 3219
        }
      ],
      [
        {
          "value": "Kewaunee",
          "id": 3220
        },
        {
          "value": "3% above",
          "id": 3221
        },
        {
          "value": 0.347,
          "id": 3222
        },
        {
          "value": 0.143,
          "id": 3223
        },
        {
          "value": 0.101,
          "id": 3224
        },
        {
          "value": 0.296,
          "id": 3225
        },
        {
          "value": 0.315626006904488,
          "id": 3226
        }
      ],
      [
        {
          "value": "Keokuk",
          "id": 3227
        },
        {
          "value": "3% below",
          "id": 3228
        },
        {
          "value": 0.288,
          "id": 3229
        },
        {
          "value": 0.17,
          "id": 3230
        },
        {
          "value": 0.124,
          "id": 3231
        },
        {
          "value": 0.299,
          "id": 3232
        },
        {
          "value": 0.315626006904488,
          "id": 3233
        }
      ],
      [
        {
          "value": "Kenosha",
          "id": 3234
        },
        {
          "value": "on par with",
          "id": 3235
        },
        {
          "value": 0.318,
          "id": 3236
        },
        {
          "value": 0.174,
          "id": 3237
        },
        {
          "value": 0.123,
          "id": 3238
        },
        {
          "value": 0.226,
          "id": 3239
        },
        {
          "value": 0.315626006904488,
          "id": 3240
        }
      ],
      [
        {
          "value": "Kendall",
          "id": 3241
        },
        {
          "value": "3% above",
          "id": 3242
        },
        {
          "value": 0.354,
          "id": 3243
        },
        {
          "value": 0.137,
          "id": 3244
        },
        {
          "value": 0.081,
          "id": 3245
        },
        {
          "value": 0.215,
          "id": 3246
        },
        {
          "value": 0.315626006904488,
          "id": 3247
        }
      ],
      [
        {
          "value": "Keith",
          "id": 3248
        },
        {
          "value": "4% below",
          "id": 3249
        },
        {
          "value": 0.28,
          "id": 3250
        },
        {
          "value": 0.173,
          "id": 3251
        },
        {
          "value": 0.124,
          "id": 3252
        },
        {
          "value": 0.288,
          "id": 3253
        },
        {
          "value": 0.315626006904488,
          "id": 3254
        }
      ],
      [
        {
          "value": "Kearny",
          "id": 3255
        },
        {
          "value": "2% below",
          "id": 3256
        },
        {
          "value": 0.303,
          "id": 3257
        },
        {
          "value": 0.166,
          "id": 3258
        },
        {
          "value": 0.088,
          "id": 3259
        },
        {
          "value": 0.265,
          "id": 3260
        },
        {
          "value": 0.315626006904488,
          "id": 3261
        }
      ],
      [
        {
          "value": "Kearney",
          "id": 3262
        },
        {
          "value": "on par with",
          "id": 3263
        },
        {
          "value": 0.323,
          "id": 3264
        },
        {
          "value": 0.156,
          "id": 3265
        },
        {
          "value": 0.104,
          "id": 3266
        },
        {
          "value": 0.258,
          "id": 3267
        },
        {
          "value": 0.315626006904488,
          "id": 3268
        }
      ],
      [
        {
          "value": "Kay",
          "id": 3269
        },
        {
          "value": "3% below",
          "id": 3270
        },
        {
          "value": 0.287,
          "id": 3271
        },
        {
          "value": 0.216,
          "id": 3272
        },
        {
          "value": 0.169,
          "id": 3273
        },
        {
          "value": 0.302,
          "id": 3274
        },
        {
          "value": 0.315626006904488,
          "id": 3275
        }
      ],
      [
        {
          "value": "Kankakee",
          "id": 3276
        },
        {
          "value": "2% above",
          "id": 3277
        },
        {
          "value": 0.338,
          "id": 3278
        },
        {
          "value": 0.173,
          "id": 3279
        },
        {
          "value": 0.159,
          "id": 3280
        },
        {
          "value": 0.248,
          "id": 3281
        },
        {
          "value": 0.315626006904488,
          "id": 3282
        }
      ],
      [
        {
          "value": "Kane",
          "id": 3283
        },
        {
          "value": "6% below",
          "id": 3284
        },
        {
          "value": 0.257,
          "id": 3285
        },
        {
          "value": 0.142,
          "id": 3286
        },
        {
          "value": 0.085,
          "id": 3287
        },
        {
          "value": 0.189,
          "id": 3288
        },
        {
          "value": 0.315626006904488,
          "id": 3289
        }
      ],
      [
        {
          "value": "Kandiyohi",
          "id": 3290
        },
        {
          "value": "5% below",
          "id": 3291
        },
        {
          "value": 0.274,
          "id": 3292
        },
        {
          "value": 0.156,
          "id": 3293
        },
        {
          "value": 0.095,
          "id": 3294
        },
        {
          "value": 0.227,
          "id": 3295
        },
        {
          "value": 0.315626006904488,
          "id": 3296
        }
      ],
      [
        {
          "value": "Kanabec",
          "id": 3297
        },
        {
          "value": "5% below",
          "id": 3298
        },
        {
          "value": 0.266,
          "id": 3299
        },
        {
          "value": 0.184,
          "id": 3300
        },
        {
          "value": 0.124,
          "id": 3301
        },
        {
          "value": 0.231,
          "id": 3302
        },
        {
          "value": 0.315626006904488,
          "id": 3303
        }
      ],
      [
        {
          "value": "Juneau",
          "id": 3304
        },
        {
          "value": "2% above",
          "id": 3305
        },
        {
          "value": 0.339,
          "id": 3306
        },
        {
          "value": 0.182,
          "id": 3307
        },
        {
          "value": 0.13,
          "id": 3308
        },
        {
          "value": 0.294,
          "id": 3309
        },
        {
          "value": 0.315626006904488,
          "id": 3310
        }
      ],
      [
        {
          "value": "Jones",
          "id": 3311
        },
        {
          "value": "2% below",
          "id": 3312
        },
        {
          "value": 0.302,
          "id": 3313
        },
        {
          "value": 0.146,
          "id": 3314
        },
        {
          "value": 0.118,
          "id": 3315
        },
        {
          "value": 0.28,
          "id": 3316
        },
        {
          "value": 0.315626006904488,
          "id": 3317
        }
      ],
      [
        {
          "value": "Jones",
          "id": 3318
        },
        {
          "value": "on par with",
          "id": 3319
        },
        {
          "value": 0.317,
          "id": 3320
        },
        {
          "value": 0.158,
          "id": 3321
        },
        {
          "value": 0.115,
          "id": 3322
        },
        {
          "value": 0.239,
          "id": 3323
        },
        {
          "value": 0.315626006904488,
          "id": 3324
        }
      ],
      [
        {
          "value": "Johnston",
          "id": 3325
        },
        {
          "value": "7% above",
          "id": 3326
        },
        {
          "value": 0.393,
          "id": 3327
        },
        {
          "value": 0.227,
          "id": 3328
        },
        {
          "value": 0.178,
          "id": 3329
        },
        {
          "value": 0.363,
          "id": 3330
        },
        {
          "value": 0.315626006904488,
          "id": 3331
        }
      ],
      [
        {
          "value": "Johnson",
          "id": 3332
        },
        {
          "value": "2% below",
          "id": 3333
        },
        {
          "value": 0.297,
          "id": 3334
        },
        {
          "value": 0.19,
          "id": 3335
        },
        {
          "value": 0.126,
          "id": 3336
        },
        {
          "value": 0.287,
          "id": 3337
        },
        {
          "value": 0.315626006904488,
          "id": 3338
        }
      ],
      [
        {
          "value": "Johnson",
          "id": 3339
        },
        {
          "value": "3% below",
          "id": 3340
        },
        {
          "value": 0.294,
          "id": 3341
        },
        {
          "value": 0.205,
          "id": 3342
        },
        {
          "value": 0.167,
          "id": 3343
        },
        {
          "value": 0.255,
          "id": 3344
        },
        {
          "value": 0.315626006904488,
          "id": 3345
        }
      ],
      [
        {
          "value": "Johnson",
          "id": 3346
        },
        {
          "value": "9% below",
          "id": 3347
        },
        {
          "value": 0.459,
          "id": 3348
        },
        {
          "value": 0.29000000000000004,
          "id": 3349
        },
        {
          "value": 0.259,
          "id": 3350
        },
        {
          "value": 0.33999999999999997,
          "id": 3351
        },
        {
          "value": 0.631252013808976,
          "id": 3352
        }
      ],
      [
        {
          "value": "Johnson",
          "id": 3360
        },
        {
          "value": "1% below",
          "id": 3361
        },
        {
          "value": 0.306,
          "id": 3362
        },
        {
          "value": 0.169,
          "id": 3363
        },
        {
          "value": 0.148,
          "id": 3364
        },
        {
          "value": 0.261,
          "id": 3365
        },
        {
          "value": 0.315626006904488,
          "id": 3366
        }
      ],
      [
        {
          "value": "Jo Daviess",
          "id": 3367
        },
        {
          "value": "3% below",
          "id": 3368
        },
        {
          "value": 0.291,
          "id": 3369
        },
        {
          "value": 0.135,
          "id": 3370
        },
        {
          "value": 0.114,
          "id": 3371
        },
        {
          "value": 0.281,
          "id": 3372
        },
        {
          "value": 0.315626006904488,
          "id": 3373
        }
      ],
      [
        {
          "value": "Jewell",
          "id": 3374
        },
        {
          "value": "2% below",
          "id": 3375
        },
        {
          "value": 0.301,
          "id": 3376
        },
        {
          "value": 0.157,
          "id": 3377
        },
        {
          "value": 0.125,
          "id": 3378
        },
        {
          "value": 0.301,
          "id": 3379
        },
        {
          "value": 0.315626006904488,
          "id": 3380
        }
      ],
      [
        {
          "value": "Jersey",
          "id": 3381
        },
        {
          "value": "on par with",
          "id": 3382
        },
        {
          "value": 0.317,
          "id": 3383
        },
        {
          "value": 0.148,
          "id": 3384
        },
        {
          "value": 0.113,
          "id": 3385
        },
        {
          "value": 0.281,
          "id": 3386
        },
        {
          "value": 0.315626006904488,
          "id": 3387
        }
      ],
      [
        {
          "value": "Jerauld",
          "id": 3388
        },
        {
          "value": "3% below",
          "id": 3389
        },
        {
          "value": 0.287,
          "id": 3390
        },
        {
          "value": 0.136,
          "id": 3391
        },
        {
          "value": 0.104,
          "id": 3392
        },
        {
          "value": 0.282,
          "id": 3393
        },
        {
          "value": 0.315626006904488,
          "id": 3394
        }
      ],
      [
        {
          "value": "Jefferson",
          "id": 3395
        },
        {
          "value": "3% below",
          "id": 3396
        },
        {
          "value": 0.292,
          "id": 3397
        },
        {
          "value": 0.159,
          "id": 3398
        },
        {
          "value": 0.113,
          "id": 3399
        },
        {
          "value": 0.168,
          "id": 3400
        },
        {
          "value": 0.315626006904488,
          "id": 3401
        }
      ],
      [
        {
          "value": "Jefferson",
          "id": 3402
        },
        {
          "value": "3% above",
          "id": 3403
        },
        {
          "value": 0.706,
          "id": 3404
        },
        {
          "value": 0.371,
          "id": 3405
        },
        {
          "value": 0.28800000000000003,
          "id": 3406
        },
        {
          "value": 0.658,
          "id": 3407
        },
        {
          "value": 0.631252013808976,
          "id": 3408
        }
      ],
      [
        {
          "value": "Jefferson",
          "id": 3416
        },
        {
          "value": "1% below",
          "id": 3417
        },
        {
          "value": 0.625,
          "id": 3418
        },
        {
          "value": 0.361,
          "id": 3419
        },
        {
          "value": 0.259,
          "id": 3420
        },
        {
          "value": 0.541,
          "id": 3421
        },
        {
          "value": 0.631252013808976,
          "id": 3422
        }
      ],
      [
        {
          "value": "Jefferson",
          "id": 3430
        },
        {
          "value": "4% below",
          "id": 3431
        },
        {
          "value": 0.277,
          "id": 3432
        },
        {
          "value": 0.165,
          "id": 3433
        },
        {
          "value": 0.131,
          "id": 3434
        },
        {
          "value": 0.228,
          "id": 3435
        },
        {
          "value": 0.315626006904488,
          "id": 3436
        }
      ],
      [
        {
          "value": "Jefferson",
          "id": 3437
        },
        {
          "value": "1% above",
          "id": 3438
        },
        {
          "value": 0.333,
          "id": 3439
        },
        {
          "value": 0.171,
          "id": 3440
        },
        {
          "value": 0.149,
          "id": 3441
        },
        {
          "value": 0.265,
          "id": 3442
        },
        {
          "value": 0.315626006904488,
          "id": 3443
        }
      ],
      [
        {
          "value": "Jasper",
          "id": 3444
        },
        {
          "value": "1% above",
          "id": 3445
        },
        {
          "value": 0.326,
          "id": 3446
        },
        {
          "value": 0.236,
          "id": 3447
        },
        {
          "value": 0.158,
          "id": 3448
        },
        {
          "value": 0.274,
          "id": 3449
        },
        {
          "value": 0.315626006904488,
          "id": 3450
        }
      ],
      [
        {
          "value": "Jasper",
          "id": 3451
        },
        {
          "value": "2% above",
          "id": 3452
        },
        {
          "value": 0.343,
          "id": 3453
        },
        {
          "value": 0.168,
          "id": 3454
        },
        {
          "value": 0.132,
          "id": 3455
        },
        {
          "value": 0.304,
          "id": 3456
        },
        {
          "value": 0.315626006904488,
          "id": 3457
        }
      ],
      [
        {
          "value": "Jasper",
          "id": 3458
        },
        {
          "value": "1% below",
          "id": 3459
        },
        {
          "value": 0.31,
          "id": 3460
        },
        {
          "value": 0.145,
          "id": 3461
        },
        {
          "value": 0.11,
          "id": 3462
        },
        {
          "value": 0.24,
          "id": 3463
        },
        {
          "value": 0.315626006904488,
          "id": 3464
        }
      ],
      [
        {
          "value": "Jackson",
          "id": 3465
        },
        {
          "value": "1% above",
          "id": 3466
        },
        {
          "value": 0.651,
          "id": 3467
        },
        {
          "value": 0.359,
          "id": 3468
        },
        {
          "value": 0.257,
          "id": 3469
        },
        {
          "value": 0.495,
          "id": 3470
        },
        {
          "value": 0.631252013808976,
          "id": 3471
        }
      ],
      [
        {
          "value": "Jackson",
          "id": 3472
        },
        {
          "value": "2% above",
          "id": 3473
        },
        {
          "value": 0.335,
          "id": 3474
        },
        {
          "value": 0.247,
          "id": 3475
        },
        {
          "value": 0.157,
          "id": 3476
        },
        {
          "value": 0.295,
          "id": 3477
        },
        {
          "value": 0.315626006904488,
          "id": 3478
        }
      ],
      [
        {
          "value": "Jackson",
          "id": 3479
        },
        {
          "value": "1% below",
          "id": 3480
        },
        {
          "value": 0.9279999999999999,
          "id": 3481
        },
        {
          "value": 0.5539999999999999,
          "id": 3482
        },
        {
          "value": 0.435,
          "id": 3483
        },
        {
          "value": 0.778,
          "id": 3484
        },
        {
          "value": 0.9468780207134639,
          "id": 3485
        }
      ],
      [
        {
          "value": "Jackson",
          "id": 3486
        },
        {
          "value": "2% below",
          "id": 3487
        },
        {
          "value": 0.304,
          "id": 3488
        },
        {
          "value": 0.207,
          "id": 3489
        },
        {
          "value": 0.184,
          "id": 3490
        },
        {
          "value": 0.244,
          "id": 3491
        },
        {
          "value": 0.315626006904488,
          "id": 3492
        }
      ],
      [
        {
          "value": "Jackson",
          "id": 3500
        },
        {
          "value": "3% above",
          "id": 3501
        },
        {
          "value": 0.345,
          "id": 3502
        },
        {
          "value": 0.16,
          "id": 3503
        },
        {
          "value": 0.13,
          "id": 3504
        },
        {
          "value": 0.3,
          "id": 3505
        },
        {
          "value": 0.315626006904488,
          "id": 3506
        }
      ],
      [
        {
          "value": "Itasca",
          "id": 3521
        },
        {
          "value": "1% below",
          "id": 3522
        },
        {
          "value": 0.314,
          "id": 3523
        },
        {
          "value": 0.175,
          "id": 3524
        },
        {
          "value": 0.114,
          "id": 3525
        },
        {
          "value": 0.233,
          "id": 3526
        },
        {
          "value": 0.315626006904488,
          "id": 3527
        }
      ],
      [
        {
          "value": "Isanti",
          "id": 3528
        },
        {
          "value": "4% below",
          "id": 3529
        },
        {
          "value": 0.276,
          "id": 3530
        },
        {
          "value": 0.167,
          "id": 3531
        },
        {
          "value": 0.095,
          "id": 3532
        },
        {
          "value": 0.2,
          "id": 3533
        },
        {
          "value": 0.315626006904488,
          "id": 3534
        }
      ],
      [
        {
          "value": "Iroquois",
          "id": 3535
        },
        {
          "value": "1% above",
          "id": 3536
        },
        {
          "value": 0.326,
          "id": 3537
        },
        {
          "value": 0.159,
          "id": 3538
        },
        {
          "value": 0.126,
          "id": 3539
        },
        {
          "value": 0.278,
          "id": 3540
        },
        {
          "value": 0.315626006904488,
          "id": 3541
        }
      ],
      [
        {
          "value": "Iron",
          "id": 3542
        },
        {
          "value": "3% below",
          "id": 3543
        },
        {
          "value": 0.289,
          "id": 3544
        },
        {
          "value": 0.166,
          "id": 3545
        },
        {
          "value": 0.152,
          "id": 3546
        },
        {
          "value": 0.209,
          "id": 3547
        },
        {
          "value": 0.315626006904488,
          "id": 3548
        }
      ],
      [
        {
          "value": "Iron",
          "id": 3549
        },
        {
          "value": "2% above",
          "id": 3550
        },
        {
          "value": 0.344,
          "id": 3551
        },
        {
          "value": 0.238,
          "id": 3552
        },
        {
          "value": 0.176,
          "id": 3553
        },
        {
          "value": 0.318,
          "id": 3554
        },
        {
          "value": 0.315626006904488,
          "id": 3555
        }
      ],
      [
        {
          "value": "Iowa",
          "id": 3556
        },
        {
          "value": "4% below",
          "id": 3557
        },
        {
          "value": 0.277,
          "id": 3558
        },
        {
          "value": 0.15,
          "id": 3559
        },
        {
          "value": 0.106,
          "id": 3560
        },
        {
          "value": 0.215,
          "id": 3561
        },
        {
          "value": 0.315626006904488,
          "id": 3562
        }
      ],
      [
        {
          "value": "Iowa",
          "id": 3563
        },
        {
          "value": "2% below",
          "id": 3564
        },
        {
          "value": 0.295,
          "id": 3565
        },
        {
          "value": 0.161,
          "id": 3566
        },
        {
          "value": 0.113,
          "id": 3567
        },
        {
          "value": 0.228,
          "id": 3568
        },
        {
          "value": 0.315626006904488,
          "id": 3569
        }
      ],
      [
        {
          "value": "Ida",
          "id": 3570
        },
        {
          "value": "1% below",
          "id": 3571
        },
        {
          "value": 0.305,
          "id": 3572
        },
        {
          "value": 0.168,
          "id": 3573
        },
        {
          "value": 0.126,
          "id": 3574
        },
        {
          "value": 0.293,
          "id": 3575
        },
        {
          "value": 0.315626006904488,
          "id": 3576
        }
      ],
      [
        {
          "value": "Hyde",
          "id": 3577
        },
        {
          "value": "1% below",
          "id": 3578
        },
        {
          "value": 0.314,
          "id": 3579
        },
        {
          "value": 0.136,
          "id": 3580
        },
        {
          "value": 0.102,
          "id": 3581
        },
        {
          "value": 0.287,
          "id": 3582
        },
        {
          "value": 0.315626006904488,
          "id": 3583
        }
      ],
      [
        {
          "value": "Hutchinson",
          "id": 3584
        },
        {
          "value": "on par with",
          "id": 3585
        },
        {
          "value": 0.315,
          "id": 3586
        },
        {
          "value": 0.14,
          "id": 3587
        },
        {
          "value": 0.111,
          "id": 3588
        },
        {
          "value": 0.314,
          "id": 3589
        },
        {
          "value": 0.315626006904488,
          "id": 3590
        }
      ],
      [
        {
          "value": "Humboldt",
          "id": 3591
        },
        {
          "value": "1% above",
          "id": 3592
        },
        {
          "value": 0.331,
          "id": 3593
        },
        {
          "value": 0.169,
          "id": 3594
        },
        {
          "value": 0.112,
          "id": 3595
        },
        {
          "value": 0.271,
          "id": 3596
        },
        {
          "value": 0.315626006904488,
          "id": 3597
        }
      ],
      [
        {
          "value": "Hughes",
          "id": 3598
        },
        {
          "value": "3% below",
          "id": 3599
        },
        {
          "value": 0.294,
          "id": 3600
        },
        {
          "value": 0.152,
          "id": 3601
        },
        {
          "value": 0.112,
          "id": 3602
        },
        {
          "value": 0.219,
          "id": 3603
        },
        {
          "value": 0.315626006904488,
          "id": 3604
        }
      ],
      [
        {
          "value": "Hughes",
          "id": 3605
        },
        {
          "value": "4% above",
          "id": 3606
        },
        {
          "value": 0.359,
          "id": 3607
        },
        {
          "value": 0.239,
          "id": 3608
        },
        {
          "value": 0.186,
          "id": 3609
        },
        {
          "value": 0.349,
          "id": 3610
        },
        {
          "value": 0.315626006904488,
          "id": 3611
        }
      ],
      [
        {
          "value": "Hubbard",
          "id": 3612
        },
        {
          "value": "4% below",
          "id": 3613
        },
        {
          "value": 0.276,
          "id": 3614
        },
        {
          "value": 0.167,
          "id": 3615
        },
        {
          "value": 0.114,
          "id": 3616
        },
        {
          "value": 0.227,
          "id": 3617
        },
        {
          "value": 0.315626006904488,
          "id": 3618
        }
      ],
      [
        {
          "value": "Howell",
          "id": 3619
        },
        {
          "value": "on par with",
          "id": 3620
        },
        {
          "value": 0.324,
          "id": 3621
        },
        {
          "value": 0.214,
          "id": 3622
        },
        {
          "value": 0.172,
          "id": 3623
        },
        {
          "value": 0.298,
          "id": 3624
        },
        {
          "value": 0.315626006904488,
          "id": 3625
        }
      ],
      [
        {
          "value": "Howard",
          "id": 3626
        },
        {
          "value": "1% below",
          "id": 3627
        },
        {
          "value": 0.309,
          "id": 3628
        },
        {
          "value": 0.156,
          "id": 3629
        },
        {
          "value": 0.115,
          "id": 3630
        },
        {
          "value": 0.32,
          "id": 3631
        },
        {
          "value": 0.315626006904488,
          "id": 3632
        }
      ],
      [
        {
          "value": "Howard",
          "id": 3633
        },
        {
          "value": "2% above",
          "id": 3634
        },
        {
          "value": 0.34,
          "id": 3635
        },
        {
          "value": 0.209,
          "id": 3636
        },
        {
          "value": 0.158,
          "id": 3637
        },
        {
          "value": 0.284,
          "id": 3638
        },
        {
          "value": 0.315626006904488,
          "id": 3639
        }
      ],
      [
        {
          "value": "Howard",
          "id": 3640
        },
        {
          "value": "on par with",
          "id": 3641
        },
        {
          "value": 0.322,
          "id": 3642
        },
        {
          "value": 0.168,
          "id": 3643
        },
        {
          "value": 0.12,
          "id": 3644
        },
        {
          "value": 0.287,
          "id": 3645
        },
        {
          "value": 0.315626006904488,
          "id": 3646
        }
      ],
      [
        {
          "value": "Houston",
          "id": 3647
        },
        {
          "value": "6% below",
          "id": 3648
        },
        {
          "value": 0.255,
          "id": 3649
        },
        {
          "value": 0.156,
          "id": 3650
        },
        {
          "value": 0.102,
          "id": 3651
        },
        {
          "value": 0.246,
          "id": 3652
        },
        {
          "value": 0.315626006904488,
          "id": 3653
        }
      ],
      [
        {
          "value": "Hooker",
          "id": 3654
        },
        {
          "value": "5% below",
          "id": 3655
        },
        {
          "value": 0.271,
          "id": 3656
        },
        {
          "value": 0.154,
          "id": 3657
        },
        {
          "value": 0.124,
          "id": 3658
        },
        {
          "value": 0.266,
          "id": 3659
        },
        {
          "value": 0.315626006904488,
          "id": 3660
        }
      ],
      [
        {
          "value": "Holt",
          "id": 3661
        },
        {
          "value": "on par with",
          "id": 3662
        },
        {
          "value": 0.319,
          "id": 3663
        },
        {
          "value": 0.147,
          "id": 3664
        },
        {
          "value": 0.117,
          "id": 3665
        },
        {
          "value": 0.307,
          "id": 3666
        },
        {
          "value": 0.315626006904488,
          "id": 3667
        }
      ],
      [
        {
          "value": "Holt",
          "id": 3668
        },
        {
          "value": "1% below",
          "id": 3669
        },
        {
          "value": 0.312,
          "id": 3670
        },
        {
          "value": 0.192,
          "id": 3671
        },
        {
          "value": 0.143,
          "id": 3672
        },
        {
          "value": 0.303,
          "id": 3673
        },
        {
          "value": 0.315626006904488,
          "id": 3674
        }
      ],
      [
        {
          "value": "Hodgeman",
          "id": 3675
        },
        {
          "value": "1% below",
          "id": 3676
        },
        {
          "value": 0.312,
          "id": 3677
        },
        {
          "value": 0.147,
          "id": 3678
        },
        {
          "value": 0.103,
          "id": 3679
        },
        {
          "value": 0.273,
          "id": 3680
        },
        {
          "value": 0.315626006904488,
          "id": 3681
        }
      ],
      [
        {
          "value": "Hitchcock",
          "id": 3682
        },
        {
          "value": "2% above",
          "id": 3683
        },
        {
          "value": 0.342,
          "id": 3684
        },
        {
          "value": 0.174,
          "id": 3685
        },
        {
          "value": 0.135,
          "id": 3686
        },
        {
          "value": 0.281,
          "id": 3687
        },
        {
          "value": 0.315626006904488,
          "id": 3688
        }
      ],
      [
        {
          "value": "Hickory",
          "id": 3689
        },
        {
          "value": "1% below",
          "id": 3690
        },
        {
          "value": 0.311,
          "id": 3691
        },
        {
          "value": 0.205,
          "id": 3692
        },
        {
          "value": 0.176,
          "id": 3693
        },
        {
          "value": 0.314,
          "id": 3694
        },
        {
          "value": 0.315626006904488,
          "id": 3695
        }
      ],
      [
        {
          "value": "Hettinger",
          "id": 3696
        },
        {
          "value": "1% below",
          "id": 3697
        },
        {
          "value": 0.31,
          "id": 3698
        },
        {
          "value": 0.173,
          "id": 3699
        },
        {
          "value": 0.065,
          "id": 3700
        },
        {
          "value": 0.301,
          "id": 3701
        },
        {
          "value": 0.315626006904488,
          "id": 3702
        }
      ],
      [
        {
          "value": "Henry",
          "id": 3703
        },
        {
          "value": "on par with",
          "id": 3704
        },
        {
          "value": 0.318,
          "id": 3705
        },
        {
          "value": 0.208,
          "id": 3706
        },
        {
          "value": 0.159,
          "id": 3707
        },
        {
          "value": 0.3,
          "id": 3708
        },
        {
          "value": 0.315626006904488,
          "id": 3709
        }
      ],
      [
        {
          "value": "Henry",
          "id": 3710
        },
        {
          "value": "1% above",
          "id": 3711
        },
        {
          "value": 0.332,
          "id": 3712
        },
        {
          "value": 0.173,
          "id": 3713
        },
        {
          "value": 0.138,
          "id": 3714
        },
        {
          "value": 0.279,
          "id": 3715
        },
        {
          "value": 0.315626006904488,
          "id": 3716
        }
      ],
      [
        {
          "value": "Henry",
          "id": 3717
        },
        {
          "value": "1% below",
          "id": 3718
        },
        {
          "value": 0.307,
          "id": 3719
        },
        {
          "value": 0.149,
          "id": 3720
        },
        {
          "value": 0.114,
          "id": 3721
        },
        {
          "value": 0.286,
          "id": 3722
        },
        {
          "value": 0.315626006904488,
          "id": 3723
        }
      ],
      [
        {
          "value": "Hennepin",
          "id": 3724
        },
        {
          "value": "9% below",
          "id": 3725
        },
        {
          "value": 0.227,
          "id": 3726
        },
        {
          "value": 0.137,
          "id": 3727
        },
        {
          "value": 0.115,
          "id": 3728
        },
        {
          "value": 0.168,
          "id": 3729
        },
        {
          "value": 0.315626006904488,
          "id": 3730
        }
      ],
      [
        {
          "value": "Henderson",
          "id": 3731
        },
        {
          "value": "on par with",
          "id": 3732
        },
        {
          "value": 0.324,
          "id": 3733
        },
        {
          "value": 0.145,
          "id": 3734
        },
        {
          "value": 0.118,
          "id": 3735
        },
        {
          "value": 0.28,
          "id": 3736
        },
        {
          "value": 0.315626006904488,
          "id": 3737
        }
      ],
      [
        {
          "value": "Hayes",
          "id": 3738
        },
        {
          "value": "2% below",
          "id": 3739
        },
        {
          "value": 0.303,
          "id": 3740
        },
        {
          "value": 0.15,
          "id": 3741
        },
        {
          "value": 0.118,
          "id": 3742
        },
        {
          "value": 0.321,
          "id": 3743
        },
        {
          "value": 0.315626006904488,
          "id": 3744
        }
      ],
      [
        {
          "value": "Haskell",
          "id": 3745
        },
        {
          "value": "4% above",
          "id": 3746
        },
        {
          "value": 0.356,
          "id": 3747
        },
        {
          "value": 0.22,
          "id": 3748
        },
        {
          "value": 0.172,
          "id": 3749
        },
        {
          "value": 0.382,
          "id": 3750
        },
        {
          "value": 0.315626006904488,
          "id": 3751
        }
      ],
      [
        {
          "value": "Haskell",
          "id": 3752
        },
        {
          "value": "2% above",
          "id": 3753
        },
        {
          "value": 0.335,
          "id": 3754
        },
        {
          "value": 0.174,
          "id": 3755
        },
        {
          "value": 0.086,
          "id": 3756
        },
        {
          "value": 0.279,
          "id": 3757
        },
        {
          "value": 0.315626006904488,
          "id": 3758
        }
      ],
      [
        {
          "value": "Harvey",
          "id": 3759
        },
        {
          "value": "on par with",
          "id": 3760
        },
        {
          "value": 0.324,
          "id": 3761
        },
        {
          "value": 0.157,
          "id": 3762
        },
        {
          "value": 0.129,
          "id": 3763
        },
        {
          "value": 0.266,
          "id": 3764
        },
        {
          "value": 0.315626006904488,
          "id": 3765
        }
      ],
      [
        {
          "value": "Harrison",
          "id": 3766
        },
        {
          "value": "1% above",
          "id": 3767
        },
        {
          "value": 0.333,
          "id": 3768
        },
        {
          "value": 0.203,
          "id": 3769
        },
        {
          "value": 0.154,
          "id": 3770
        },
        {
          "value": 0.302,
          "id": 3771
        },
        {
          "value": 0.315626006904488,
          "id": 3772
        }
      ],
      [
        {
          "value": "Harrison",
          "id": 3773
        },
        {
          "value": "on par with",
          "id": 3774
        },
        {
          "value": 0.32,
          "id": 3775
        },
        {
          "value": 0.171,
          "id": 3776
        },
        {
          "value": 0.112,
          "id": 3777
        },
        {
          "value": 0.283,
          "id": 3778
        },
        {
          "value": 0.315626006904488,
          "id": 3779
        }
      ],
      [
        {
          "value": "Harper",
          "id": 3780
        },
        {
          "value": "3% above",
          "id": 3781
        },
        {
          "value": 0.349,
          "id": 3782
        },
        {
          "value": 0.177,
          "id": 3783
        },
        {
          "value": 0.117,
          "id": 3784
        },
        {
          "value": 0.356,
          "id": 3785
        },
        {
          "value": 0.315626006904488,
          "id": 3786
        }
      ],
      [
        {
          "value": "Harper",
          "id": 3787
        },
        {
          "value": "2% above",
          "id": 3788
        },
        {
          "value": 0.34,
          "id": 3789
        },
        {
          "value": 0.177,
          "id": 3790
        },
        {
          "value": 0.137,
          "id": 3791
        },
        {
          "value": 0.35,
          "id": 3792
        },
        {
          "value": 0.315626006904488,
          "id": 3793
        }
      ],
      [
        {
          "value": "Harmon",
          "id": 3794
        },
        {
          "value": "5% above",
          "id": 3795
        },
        {
          "value": 0.368,
          "id": 3796
        },
        {
          "value": 0.203,
          "id": 3797
        },
        {
          "value": 0.164,
          "id": 3798
        },
        {
          "value": 0.364,
          "id": 3799
        },
        {
          "value": 0.315626006904488,
          "id": 3800
        }
      ],
      [
        {
          "value": "Harlan",
          "id": 3801
        },
        {
          "value": "1% below",
          "id": 3802
        },
        {
          "value": 0.314,
          "id": 3803
        },
        {
          "value": 0.148,
          "id": 3804
        },
        {
          "value": 0.121,
          "id": 3805
        },
        {
          "value": 0.265,
          "id": 3806
        },
        {
          "value": 0.315626006904488,
          "id": 3807
        }
      ],
      [
        {
          "value": "Harding",
          "id": 3808
        },
        {
          "value": "1% below",
          "id": 3809
        },
        {
          "value": 0.313,
          "id": 3810
        },
        {
          "value": 0.164,
          "id": 3811
        },
        {
          "value": 0.12,
          "id": 3812
        },
        {
          "value": 0.278,
          "id": 3813
        },
        {
          "value": 0.315626006904488,
          "id": 3814
        }
      ],
      [
        {
          "value": "Hardin",
          "id": 3815
        },
        {
          "value": "1% above",
          "id": 3816
        },
        {
          "value": 0.655,
          "id": 3817
        },
        {
          "value": 0.33199999999999996,
          "id": 3818
        },
        {
          "value": 0.28800000000000003,
          "id": 3819
        },
        {
          "value": 0.56,
          "id": 3820
        },
        {
          "value": 0.631252013808976,
          "id": 3821
        }
      ],
      [
        {
          "value": "Hanson",
          "id": 3829
        },
        {
          "value": "4% below",
          "id": 3830
        },
        {
          "value": 0.277,
          "id": 3831
        },
        {
          "value": 0.165,
          "id": 3832
        },
        {
          "value": 0.111,
          "id": 3833
        },
        {
          "value": 0.26,
          "id": 3834
        },
        {
          "value": 0.315626006904488,
          "id": 3835
        }
      ],
      [
        {
          "value": "Hand",
          "id": 3836
        },
        {
          "value": "2% below",
          "id": 3837
        },
        {
          "value": 0.303,
          "id": 3838
        },
        {
          "value": 0.14,
          "id": 3839
        },
        {
          "value": 0.11,
          "id": 3840
        },
        {
          "value": 0.29,
          "id": 3841
        },
        {
          "value": 0.315626006904488,
          "id": 3842
        }
      ],
      [
        {
          "value": "Hancock",
          "id": 3843
        },
        {
          "value": "1% above",
          "id": 3844
        },
        {
          "value": 0.326,
          "id": 3845
        },
        {
          "value": 0.153,
          "id": 3846
        },
        {
          "value": 0.109,
          "id": 3847
        },
        {
          "value": 0.261,
          "id": 3848
        },
        {
          "value": 0.315626006904488,
          "id": 3849
        }
      ],
      [
        {
          "value": "Hancock",
          "id": 3850
        },
        {
          "value": "3% below",
          "id": 3851
        },
        {
          "value": 0.291,
          "id": 3852
        },
        {
          "value": 0.153,
          "id": 3853
        },
        {
          "value": 0.136,
          "id": 3854
        },
        {
          "value": 0.289,
          "id": 3855
        },
        {
          "value": 0.315626006904488,
          "id": 3856
        }
      ],
      [
        {
          "value": "Hamlin",
          "id": 3857
        },
        {
          "value": "on par with",
          "id": 3858
        },
        {
          "value": 0.32,
          "id": 3859
        },
        {
          "value": 0.149,
          "id": 3860
        },
        {
          "value": 0.097,
          "id": 3861
        },
        {
          "value": 0.241,
          "id": 3862
        },
        {
          "value": 0.315626006904488,
          "id": 3863
        }
      ],
      [
        {
          "value": "Hamilton",
          "id": 3864
        },
        {
          "value": "2% below",
          "id": 3865
        },
        {
          "value": 0.6,
          "id": 3866
        },
        {
          "value": 0.316,
          "id": 3867
        },
        {
          "value": 0.242,
          "id": 3868
        },
        {
          "value": 0.501,
          "id": 3869
        },
        {
          "value": 0.631252013808976,
          "id": 3870
        }
      ],
      [
        {
          "value": "Hamilton",
          "id": 3871
        },
        {
          "value": "6% above",
          "id": 3872
        },
        {
          "value": 0.375,
          "id": 3873
        },
        {
          "value": 0.189,
          "id": 3874
        },
        {
          "value": 0.092,
          "id": 3875
        },
        {
          "value": 0.217,
          "id": 3876
        },
        {
          "value": 0.315626006904488,
          "id": 3877
        }
      ],
      [
        {
          "value": "Hamilton",
          "id": 3885
        },
        {
          "value": "3% below",
          "id": 3886
        },
        {
          "value": 0.293,
          "id": 3887
        },
        {
          "value": 0.165,
          "id": 3888
        },
        {
          "value": 0.138,
          "id": 3889
        },
        {
          "value": 0.268,
          "id": 3890
        },
        {
          "value": 0.315626006904488,
          "id": 3891
        }
      ],
      [
        {
          "value": "Hall",
          "id": 3892
        },
        {
          "value": "1% above",
          "id": 3893
        },
        {
          "value": 0.33,
          "id": 3894
        },
        {
          "value": 0.165,
          "id": 3895
        },
        {
          "value": 0.106,
          "id": 3896
        },
        {
          "value": 0.275,
          "id": 3897
        },
        {
          "value": 0.315626006904488,
          "id": 3898
        }
      ],
      [
        {
          "value": "Haakon",
          "id": 3899
        },
        {
          "value": "2% above",
          "id": 3900
        },
        {
          "value": 0.335,
          "id": 3901
        },
        {
          "value": 0.157,
          "id": 3902
        },
        {
          "value": 0.112,
          "id": 3903
        },
        {
          "value": 0.277,
          "id": 3904
        },
        {
          "value": 0.315626006904488,
          "id": 3905
        }
      ],
      [
        {
          "value": "Guthrie",
          "id": 3906
        },
        {
          "value": "3% above",
          "id": 3907
        },
        {
          "value": 0.349,
          "id": 3908
        },
        {
          "value": 0.163,
          "id": 3909
        },
        {
          "value": 0.115,
          "id": 3910
        },
        {
          "value": 0.306,
          "id": 3911
        },
        {
          "value": 0.315626006904488,
          "id": 3912
        }
      ],
      [
        {
          "value": "Grundy",
          "id": 3913
        },
        {
          "value": "2% above",
          "id": 3914
        },
        {
          "value": 0.339,
          "id": 3915
        },
        {
          "value": 0.211,
          "id": 3916
        },
        {
          "value": 0.152,
          "id": 3917
        },
        {
          "value": 0.309,
          "id": 3918
        },
        {
          "value": 0.315626006904488,
          "id": 3919
        }
      ],
      [
        {
          "value": "Grundy",
          "id": 3920
        },
        {
          "value": "3% below",
          "id": 3921
        },
        {
          "value": 0.291,
          "id": 3922
        },
        {
          "value": 0.15,
          "id": 3923
        },
        {
          "value": 0.103,
          "id": 3924
        },
        {
          "value": 0.273,
          "id": 3925
        },
        {
          "value": 0.315626006904488,
          "id": 3926
        }
      ],
      [
        {
          "value": "Grundy",
          "id": 3927
        },
        {
          "value": "1% below",
          "id": 3928
        },
        {
          "value": 0.314,
          "id": 3929
        },
        {
          "value": 0.15,
          "id": 3930
        },
        {
          "value": 0.12,
          "id": 3931
        },
        {
          "value": 0.247,
          "id": 3932
        },
        {
          "value": 0.315626006904488,
          "id": 3933
        }
      ],
      [
        {
          "value": "Griggs",
          "id": 3934
        },
        {
          "value": "2% below",
          "id": 3935
        },
        {
          "value": 0.297,
          "id": 3936
        },
        {
          "value": 0.137,
          "id": 3937
        },
        {
          "value": 0.061,
          "id": 3938
        },
        {
          "value": 0.304,
          "id": 3939
        },
        {
          "value": 0.315626006904488,
          "id": 3940
        }
      ],
      [
        {
          "value": "Gregory",
          "id": 3941
        },
        {
          "value": "1% above",
          "id": 3942
        },
        {
          "value": 0.326,
          "id": 3943
        },
        {
          "value": 0.17,
          "id": 3944
        },
        {
          "value": 0.133,
          "id": 3945
        },
        {
          "value": 0.297,
          "id": 3946
        },
        {
          "value": 0.315626006904488,
          "id": 3947
        }
      ],
      [
        {
          "value": "Greer",
          "id": 3948
        },
        {
          "value": "on par with",
          "id": 3949
        },
        {
          "value": 0.322,
          "id": 3950
        },
        {
          "value": 0.199,
          "id": 3951
        },
        {
          "value": 0.16,
          "id": 3952
        },
        {
          "value": 0.328,
          "id": 3953
        },
        {
          "value": 0.315626006904488,
          "id": 3954
        }
      ],
      [
        {
          "value": "Greenwood",
          "id": 3955
        },
        {
          "value": "on par with",
          "id": 3956
        },
        {
          "value": 0.319,
          "id": 3957
        },
        {
          "value": 0.188,
          "id": 3958
        },
        {
          "value": 0.145,
          "id": 3959
        },
        {
          "value": 0.286,
          "id": 3960
        },
        {
          "value": 0.315626006904488,
          "id": 3961
        }
      ],
      [
        {
          "value": "Greene",
          "id": 3962
        },
        {
          "value": "3% below",
          "id": 3963
        },
        {
          "value": 0.573,
          "id": 3964
        },
        {
          "value": 0.368,
          "id": 3965
        },
        {
          "value": 0.29200000000000004,
          "id": 3966
        },
        {
          "value": 0.522,
          "id": 3967
        },
        {
          "value": 0.631252013808976,
          "id": 3968
        }
      ],
      [
        {
          "value": "Greene",
          "id": 3976
        },
        {
          "value": "2% below",
          "id": 3977
        },
        {
          "value": 0.297,
          "id": 3978
        },
        {
          "value": 0.171,
          "id": 3979
        },
        {
          "value": 0.136,
          "id": 3980
        },
        {
          "value": 0.284,
          "id": 3981
        },
        {
          "value": 0.315626006904488,
          "id": 3982
        }
      ],
      [
        {
          "value": "Green Lake",
          "id": 3983
        },
        {
          "value": "1% below",
          "id": 3984
        },
        {
          "value": 0.311,
          "id": 3985
        },
        {
          "value": 0.161,
          "id": 3986
        },
        {
          "value": 0.12,
          "id": 3987
        },
        {
          "value": 0.226,
          "id": 3988
        },
        {
          "value": 0.315626006904488,
          "id": 3989
        }
      ],
      [
        {
          "value": "Green",
          "id": 3990
        },
        {
          "value": "1% below",
          "id": 3991
        },
        {
          "value": 0.309,
          "id": 3992
        },
        {
          "value": 0.145,
          "id": 3993
        },
        {
          "value": 0.106,
          "id": 3994
        },
        {
          "value": 0.237,
          "id": 3995
        },
        {
          "value": 0.315626006904488,
          "id": 3996
        }
      ],
      [
        {
          "value": "Greeley",
          "id": 3997
        },
        {
          "value": "1% above",
          "id": 3998
        },
        {
          "value": 0.334,
          "id": 3999
        },
        {
          "value": 0.154,
          "id": 4000
        },
        {
          "value": 0.118,
          "id": 4001
        },
        {
          "value": 0.351,
          "id": 4002
        },
        {
          "value": 0.315626006904488,
          "id": 4003
        }
      ],
      [
        {
          "value": "Greeley",
          "id": 4004
        },
        {
          "value": "1% below",
          "id": 4005
        },
        {
          "value": 0.314,
          "id": 4006
        },
        {
          "value": 0.154,
          "id": 4007
        },
        {
          "value": 0.089,
          "id": 4008
        },
        {
          "value": 0.273,
          "id": 4009
        },
        {
          "value": 0.315626006904488,
          "id": 4010
        }
      ],
      [
        {
          "value": "Gray",
          "id": 4011
        },
        {
          "value": "2% above",
          "id": 4012
        },
        {
          "value": 0.339,
          "id": 4013
        },
        {
          "value": 0.155,
          "id": 4014
        },
        {
          "value": 0.102,
          "id": 4015
        },
        {
          "value": 0.248,
          "id": 4016
        },
        {
          "value": 0.315626006904488,
          "id": 4017
        }
      ],
      [
        {
          "value": "Grant",
          "id": 4018
        },
        {
          "value": "2% below",
          "id": 4019
        },
        {
          "value": 0.597,
          "id": 4020
        },
        {
          "value": 0.319,
          "id": 4021
        },
        {
          "value": 0.225,
          "id": 4022
        },
        {
          "value": 0.5,
          "id": 4023
        },
        {
          "value": 0.631252013808976,
          "id": 4024
        }
      ],
      [
        {
          "value": "Grant",
          "id": 4025
        },
        {
          "value": "on par with",
          "id": 4026
        },
        {
          "value": 0.644,
          "id": 4027
        },
        {
          "value": 0.319,
          "id": 4028
        },
        {
          "value": 0.195,
          "id": 4029
        },
        {
          "value": 0.626,
          "id": 4030
        },
        {
          "value": 0.631252013808976,
          "id": 4031
        }
      ],
      [
        {
          "value": "Grant",
          "id": 4032
        },
        {
          "value": "5% above",
          "id": 4033
        },
        {
          "value": 0.367,
          "id": 4034
        },
        {
          "value": 0.162,
          "id": 4035
        },
        {
          "value": 0.132,
          "id": 4036
        },
        {
          "value": 0.411,
          "id": 4037
        },
        {
          "value": 0.315626006904488,
          "id": 4038
        }
      ],
      [
        {
          "value": "Grant",
          "id": 4046
        },
        {
          "value": "3% below",
          "id": 4047
        },
        {
          "value": 0.289,
          "id": 4048
        },
        {
          "value": 0.171,
          "id": 4049
        },
        {
          "value": 0.144,
          "id": 4050
        },
        {
          "value": 0.319,
          "id": 4051
        },
        {
          "value": 0.315626006904488,
          "id": 4052
        }
      ],
      [
        {
          "value": "Grant",
          "id": 4060
        },
        {
          "value": "1% above",
          "id": 4061
        },
        {
          "value": 0.333,
          "id": 4062
        },
        {
          "value": 0.178,
          "id": 4063
        },
        {
          "value": 0.069,
          "id": 4064
        },
        {
          "value": 0.264,
          "id": 4065
        },
        {
          "value": 0.315626006904488,
          "id": 4066
        }
      ],
      [
        {
          "value": "Grand Forks",
          "id": 4067
        },
        {
          "value": "3% below",
          "id": 4068
        },
        {
          "value": 0.29,
          "id": 4069
        },
        {
          "value": 0.187,
          "id": 4070
        },
        {
          "value": 0.104,
          "id": 4071
        },
        {
          "value": 0.221,
          "id": 4072
        },
        {
          "value": 0.315626006904488,
          "id": 4073
        }
      ],
      [
        {
          "value": "Graham",
          "id": 4074
        },
        {
          "value": "2% below",
          "id": 4075
        },
        {
          "value": 0.3,
          "id": 4076
        },
        {
          "value": 0.154,
          "id": 4077
        },
        {
          "value": 0.125,
          "id": 4078
        },
        {
          "value": 0.269,
          "id": 4079
        },
        {
          "value": 0.315626006904488,
          "id": 4080
        }
      ],
      [
        {
          "value": "Grady",
          "id": 4081
        },
        {
          "value": "1% above",
          "id": 4082
        },
        {
          "value": 0.332,
          "id": 4083
        },
        {
          "value": 0.204,
          "id": 4084
        },
        {
          "value": 0.15,
          "id": 4085
        },
        {
          "value": 0.293,
          "id": 4086
        },
        {
          "value": 0.315626006904488,
          "id": 4087
        }
      ],
      [
        {
          "value": "Gove",
          "id": 4088
        },
        {
          "value": "on par with",
          "id": 4089
        },
        {
          "value": 0.316,
          "id": 4090
        },
        {
          "value": 0.149,
          "id": 4091
        },
        {
          "value": 0.122,
          "id": 4092
        },
        {
          "value": 0.259,
          "id": 4093
        },
        {
          "value": 0.315626006904488,
          "id": 4094
        }
      ],
      [
        {
          "value": "Gosper",
          "id": 4095
        },
        {
          "value": "2% above",
          "id": 4096
        },
        {
          "value": 0.336,
          "id": 4097
        },
        {
          "value": 0.158,
          "id": 4098
        },
        {
          "value": 0.116,
          "id": 4099
        },
        {
          "value": 0.258,
          "id": 4100
        },
        {
          "value": 0.315626006904488,
          "id": 4101
        }
      ],
      [
        {
          "value": "Goodhue",
          "id": 4102
        },
        {
          "value": "1% below",
          "id": 4103
        },
        {
          "value": 0.308,
          "id": 4104
        },
        {
          "value": 0.166,
          "id": 4105
        },
        {
          "value": 0.096,
          "id": 4106
        },
        {
          "value": 0.222,
          "id": 4107
        },
        {
          "value": 0.315626006904488,
          "id": 4108
        }
      ],
      [
        {
          "value": "Golden Valley",
          "id": 4109
        },
        {
          "value": "3% below",
          "id": 4110
        },
        {
          "value": 0.291,
          "id": 4111
        },
        {
          "value": 0.177,
          "id": 4112
        },
        {
          "value": 0.078,
          "id": 4113
        },
        {
          "value": 0.325,
          "id": 4114
        },
        {
          "value": 0.315626006904488,
          "id": 4115
        }
      ],
      [
        {
          "value": "Gentry",
          "id": 4116
        },
        {
          "value": "on par with",
          "id": 4117
        },
        {
          "value": 0.315,
          "id": 4118
        },
        {
          "value": 0.197,
          "id": 4119
        },
        {
          "value": 0.151,
          "id": 4120
        },
        {
          "value": 0.287,
          "id": 4121
        },
        {
          "value": 0.315626006904488,
          "id": 4122
        }
      ],
      [
        {
          "value": "Geary",
          "id": 4123
        },
        {
          "value": "1% below",
          "id": 4124
        },
        {
          "value": 0.309,
          "id": 4125
        },
        {
          "value": 0.203,
          "id": 4126
        },
        {
          "value": 0.177,
          "id": 4127
        },
        {
          "value": 0.264,
          "id": 4128
        },
        {
          "value": 0.315626006904488,
          "id": 4129
        }
      ],
      [
        {
          "value": "Gasconade",
          "id": 4130
        },
        {
          "value": "1% above",
          "id": 4131
        },
        {
          "value": 0.328,
          "id": 4132
        },
        {
          "value": 0.191,
          "id": 4133
        },
        {
          "value": 0.147,
          "id": 4134
        },
        {
          "value": 0.326,
          "id": 4135
        },
        {
          "value": 0.315626006904488,
          "id": 4136
        }
      ],
      [
        {
          "value": "Garvin",
          "id": 4137
        },
        {
          "value": "4% above",
          "id": 4138
        },
        {
          "value": 0.356,
          "id": 4139
        },
        {
          "value": 0.213,
          "id": 4140
        },
        {
          "value": 0.158,
          "id": 4141
        },
        {
          "value": 0.346,
          "id": 4142
        },
        {
          "value": 0.315626006904488,
          "id": 4143
        }
      ],
      [
        {
          "value": "Garfield",
          "id": 4144
        },
        {
          "value": "4% above",
          "id": 4145
        },
        {
          "value": 0.358,
          "id": 4146
        },
        {
          "value": 0.193,
          "id": 4147
        },
        {
          "value": 0.147,
          "id": 4148
        },
        {
          "value": 0.326,
          "id": 4149
        },
        {
          "value": 0.315626006904488,
          "id": 4150
        }
      ],
      [
        {
          "value": "Garfield",
          "id": 4151
        },
        {
          "value": "4% below",
          "id": 4152
        },
        {
          "value": 0.276,
          "id": 4153
        },
        {
          "value": 0.151,
          "id": 4154
        },
        {
          "value": 0.13,
          "id": 4155
        },
        {
          "value": 0.283,
          "id": 4156
        },
        {
          "value": 0.315626006904488,
          "id": 4157
        }
      ],
      [
        {
          "value": "Garden",
          "id": 4158
        },
        {
          "value": "1% below",
          "id": 4159
        },
        {
          "value": 0.313,
          "id": 4160
        },
        {
          "value": 0.152,
          "id": 4161
        },
        {
          "value": 0.113,
          "id": 4162
        },
        {
          "value": 0.301,
          "id": 4163
        },
        {
          "value": 0.315626006904488,
          "id": 4164
        }
      ],
      [
        {
          "value": "Gallatin",
          "id": 4165
        },
        {
          "value": "1% below",
          "id": 4166
        },
        {
          "value": 0.31,
          "id": 4167
        },
        {
          "value": 0.171,
          "id": 4168
        },
        {
          "value": 0.146,
          "id": 4169
        },
        {
          "value": 0.294,
          "id": 4170
        },
        {
          "value": 0.315626006904488,
          "id": 4171
        }
      ],
      [
        {
          "value": "Gage",
          "id": 4172
        },
        {
          "value": "3% above",
          "id": 4173
        },
        {
          "value": 0.354,
          "id": 4174
        },
        {
          "value": 0.171,
          "id": 4175
        },
        {
          "value": 0.131,
          "id": 4176
        },
        {
          "value": 0.298,
          "id": 4177
        },
        {
          "value": 0.315626006904488,
          "id": 4178
        }
      ],
      [
        {
          "value": "Furnas",
          "id": 4179
        },
        {
          "value": "1% above",
          "id": 4180
        },
        {
          "value": 0.326,
          "id": 4181
        },
        {
          "value": 0.159,
          "id": 4182
        },
        {
          "value": 0.135,
          "id": 4183
        },
        {
          "value": 0.283,
          "id": 4184
        },
        {
          "value": 0.315626006904488,
          "id": 4185
        }
      ],
      [
        {
          "value": "Fulton",
          "id": 4186
        },
        {
          "value": "on par with",
          "id": 4187
        },
        {
          "value": 0.324,
          "id": 4188
        },
        {
          "value": 0.161,
          "id": 4189
        },
        {
          "value": 0.144,
          "id": 4190
        },
        {
          "value": 0.292,
          "id": 4191
        },
        {
          "value": 0.315626006904488,
          "id": 4192
        }
      ],
      [
        {
          "value": "Frontier",
          "id": 4193
        },
        {
          "value": "3% above",
          "id": 4194
        },
        {
          "value": 0.35,
          "id": 4195
        },
        {
          "value": 0.158,
          "id": 4196
        },
        {
          "value": 0.123,
          "id": 4197
        },
        {
          "value": 0.279,
          "id": 4198
        },
        {
          "value": 0.315626006904488,
          "id": 4199
        }
      ],
      [
        {
          "value": "Fremont",
          "id": 4200
        },
        {
          "value": "1% above",
          "id": 4201
        },
        {
          "value": 0.33,
          "id": 4202
        },
        {
          "value": 0.171,
          "id": 4203
        },
        {
          "value": 0.114,
          "id": 4204
        },
        {
          "value": 0.279,
          "id": 4205
        },
        {
          "value": 0.315626006904488,
          "id": 4206
        }
      ],
      [
        {
          "value": "Freeborn",
          "id": 4207
        },
        {
          "value": "1% below",
          "id": 4208
        },
        {
          "value": 0.314,
          "id": 4209
        },
        {
          "value": 0.162,
          "id": 4210
        },
        {
          "value": 0.093,
          "id": 4211
        },
        {
          "value": 0.271,
          "id": 4212
        },
        {
          "value": 0.315626006904488,
          "id": 4213
        }
      ],
      [
        {
          "value": "Franklin",
          "id": 4214
        },
        {
          "value": "4% above",
          "id": 4215
        },
        {
          "value": 0.364,
          "id": 4216
        },
        {
          "value": 0.159,
          "id": 4217
        },
        {
          "value": 0.119,
          "id": 4218
        },
        {
          "value": 0.323,
          "id": 4219
        },
        {
          "value": 0.315626006904488,
          "id": 4220
        }
      ],
      [
        {
          "value": "Franklin",
          "id": 4221
        },
        {
          "value": "1% above",
          "id": 4222
        },
        {
          "value": 0.994,
          "id": 4223
        },
        {
          "value": 0.553,
          "id": 4224
        },
        {
          "value": 0.40299999999999997,
          "id": 4225
        },
        {
          "value": 0.887,
          "id": 4226
        },
        {
          "value": 0.9468780207134639,
          "id": 4227
        }
      ],
      [
        {
          "value": "Franklin",
          "id": 4242
        },
        {
          "value": "1% below",
          "id": 4243
        },
        {
          "value": 0.305,
          "id": 4244
        },
        {
          "value": 0.183,
          "id": 4245
        },
        {
          "value": 0.166,
          "id": 4246
        },
        {
          "value": 0.284,
          "id": 4247
        },
        {
          "value": 0.315626006904488,
          "id": 4248
        }
      ],
      [
        {
          "value": "Foster",
          "id": 4249
        },
        {
          "value": "3% below",
          "id": 4250
        },
        {
          "value": 0.294,
          "id": 4251
        },
        {
          "value": 0.157,
          "id": 4252
        },
        {
          "value": 0.073,
          "id": 4253
        },
        {
          "value": 0.337,
          "id": 4254
        },
        {
          "value": 0.315626006904488,
          "id": 4255
        }
      ],
      [
        {
          "value": "Forest",
          "id": 4256
        },
        {
          "value": "on par with",
          "id": 4257
        },
        {
          "value": 0.319,
          "id": 4258
        },
        {
          "value": 0.189,
          "id": 4259
        },
        {
          "value": 0.142,
          "id": 4260
        },
        {
          "value": 0.247,
          "id": 4261
        },
        {
          "value": 0.315626006904488,
          "id": 4262
        }
      ],
      [
        {
          "value": "Ford",
          "id": 4263
        },
        {
          "value": "1% above",
          "id": 4264
        },
        {
          "value": 0.325,
          "id": 4265
        },
        {
          "value": 0.185,
          "id": 4266
        },
        {
          "value": 0.08,
          "id": 4267
        },
        {
          "value": 0.307,
          "id": 4268
        },
        {
          "value": 0.315626006904488,
          "id": 4269
        }
      ],
      [
        {
          "value": "Ford",
          "id": 4270
        },
        {
          "value": "2% below",
          "id": 4271
        },
        {
          "value": 0.296,
          "id": 4272
        },
        {
          "value": 0.151,
          "id": 4273
        },
        {
          "value": 0.123,
          "id": 4274
        },
        {
          "value": 0.257,
          "id": 4275
        },
        {
          "value": 0.315626006904488,
          "id": 4276
        }
      ],
      [
        {
          "value": "Fond du Lac",
          "id": 4277
        },
        {
          "value": "1% below",
          "id": 4278
        },
        {
          "value": 0.31,
          "id": 4279
        },
        {
          "value": 0.153,
          "id": 4280
        },
        {
          "value": 0.11,
          "id": 4281
        },
        {
          "value": 0.238,
          "id": 4282
        },
        {
          "value": 0.315626006904488,
          "id": 4283
        }
      ],
      [
        {
          "value": "Floyd",
          "id": 4284
        },
        {
          "value": "1% above",
          "id": 4285
        },
        {
          "value": 0.329,
          "id": 4286
        },
        {
          "value": 0.176,
          "id": 4287
        },
        {
          "value": 0.132,
          "id": 4288
        },
        {
          "value": 0.294,
          "id": 4289
        },
        {
          "value": 0.315626006904488,
          "id": 4290
        }
      ],
      [
        {
          "value": "Florence",
          "id": 4291
        },
        {
          "value": "2% above",
          "id": 4292
        },
        {
          "value": 0.339,
          "id": 4293
        },
        {
          "value": 0.156,
          "id": 4294
        },
        {
          "value": 0.118,
          "id": 4295
        },
        {
          "value": 0.254,
          "id": 4296
        },
        {
          "value": 0.315626006904488,
          "id": 4297
        }
      ],
      [
        {
          "value": "Finney",
          "id": 4298
        },
        {
          "value": "3% above",
          "id": 4299
        },
        {
          "value": 0.349,
          "id": 4300
        },
        {
          "value": 0.182,
          "id": 4301
        },
        {
          "value": 0.088,
          "id": 4302
        },
        {
          "value": 0.224,
          "id": 4303
        },
        {
          "value": 0.315626006904488,
          "id": 4304
        }
      ],
      [
        {
          "value": "Fillmore",
          "id": 4305
        },
        {
          "value": "1% below",
          "id": 4306
        },
        {
          "value": 0.305,
          "id": 4307
        },
        {
          "value": 0.152,
          "id": 4308
        },
        {
          "value": 0.113,
          "id": 4309
        },
        {
          "value": 0.291,
          "id": 4310
        },
        {
          "value": 0.315626006904488,
          "id": 4311
        }
      ],
      [
        {
          "value": "Fillmore",
          "id": 4312
        },
        {
          "value": "6% below",
          "id": 4313
        },
        {
          "value": 0.262,
          "id": 4314
        },
        {
          "value": 0.157,
          "id": 4315
        },
        {
          "value": 0.102,
          "id": 4316
        },
        {
          "value": 0.208,
          "id": 4317
        },
        {
          "value": 0.315626006904488,
          "id": 4318
        }
      ],
      [
        {
          "value": "Fayette",
          "id": 4319
        },
        {
          "value": "7% above",
          "id": 4320
        },
        {
          "value": 0.385,
          "id": 4321
        },
        {
          "value": 0.167,
          "id": 4322
        },
        {
          "value": 0.124,
          "id": 4323
        },
        {
          "value": 0.294,
          "id": 4324
        },
        {
          "value": 0.315626006904488,
          "id": 4325
        }
      ],
      [
        {
          "value": "Fayette",
          "id": 4326
        },
        {
          "value": "5% above",
          "id": 4327
        },
        {
          "value": 0.371,
          "id": 4328
        },
        {
          "value": 0.172,
          "id": 4329
        },
        {
          "value": 0.146,
          "id": 4330
        },
        {
          "value": 0.244,
          "id": 4331
        },
        {
          "value": 0.315626006904488,
          "id": 4332
        }
      ],
      [
        {
          "value": "Faulk",
          "id": 4333
        },
        {
          "value": "2% below",
          "id": 4334
        },
        {
          "value": 0.299,
          "id": 4335
        },
        {
          "value": 0.157,
          "id": 4336
        },
        {
          "value": 0.109,
          "id": 4337
        },
        {
          "value": 0.308,
          "id": 4338
        },
        {
          "value": 0.315626006904488,
          "id": 4339
        }
      ],
      [
        {
          "value": "Faribault",
          "id": 4340
        },
        {
          "value": "5% below",
          "id": 4341
        },
        {
          "value": 0.266,
          "id": 4342
        },
        {
          "value": 0.153,
          "id": 4343
        },
        {
          "value": 0.101,
          "id": 4344
        },
        {
          "value": 0.256,
          "id": 4345
        },
        {
          "value": 0.315626006904488,
          "id": 4346
        }
      ],
      [
        {
          "value": "Fall River",
          "id": 4347
        },
        {
          "value": "1% below",
          "id": 4348
        },
        {
          "value": 0.305,
          "id": 4349
        },
        {
          "value": 0.155,
          "id": 4350
        },
        {
          "value": 0.136,
          "id": 4351
        },
        {
          "value": 0.246,
          "id": 4352
        },
        {
          "value": 0.315626006904488,
          "id": 4353
        }
      ],
      [
        {
          "value": "Emmons",
          "id": 4354
        },
        {
          "value": "1% below",
          "id": 4355
        },
        {
          "value": 0.313,
          "id": 4356
        },
        {
          "value": 0.158,
          "id": 4357
        },
        {
          "value": 0.09,
          "id": 4358
        },
        {
          "value": 0.368,
          "id": 4359
        },
        {
          "value": 0.315626006904488,
          "id": 4360
        }
      ],
      [
        {
          "value": "Emmet",
          "id": 4361
        },
        {
          "value": "3% above",
          "id": 4362
        },
        {
          "value": 0.345,
          "id": 4363
        },
        {
          "value": 0.16,
          "id": 4364
        },
        {
          "value": 0.108,
          "id": 4365
        },
        {
          "value": 0.298,
          "id": 4366
        },
        {
          "value": 0.315626006904488,
          "id": 4367
        }
      ],
      [
        {
          "value": "Ellsworth",
          "id": 4368
        },
        {
          "value": "1% above",
          "id": 4369
        },
        {
          "value": 0.325,
          "id": 4370
        },
        {
          "value": 0.172,
          "id": 4371
        },
        {
          "value": 0.117,
          "id": 4372
        },
        {
          "value": 0.332,
          "id": 4373
        },
        {
          "value": 0.315626006904488,
          "id": 4374
        }
      ],
      [
        {
          "value": "Ellis",
          "id": 4375
        },
        {
          "value": "on par with",
          "id": 4376
        },
        {
          "value": 0.317,
          "id": 4377
        },
        {
          "value": 0.186,
          "id": 4378
        },
        {
          "value": 0.134,
          "id": 4379
        },
        {
          "value": 0.372,
          "id": 4380
        },
        {
          "value": 0.315626006904488,
          "id": 4381
        }
      ],
      [
        {
          "value": "Ellis",
          "id": 4382
        },
        {
          "value": "3% below",
          "id": 4383
        },
        {
          "value": 0.293,
          "id": 4384
        },
        {
          "value": 0.196,
          "id": 4385
        },
        {
          "value": 0.143,
          "id": 4386
        },
        {
          "value": 0.256,
          "id": 4387
        },
        {
          "value": 0.315626006904488,
          "id": 4388
        }
      ],
      [
        {
          "value": "Elk",
          "id": 4389
        },
        {
          "value": "3% above",
          "id": 4390
        },
        {
          "value": 0.347,
          "id": 4391
        },
        {
          "value": 0.167,
          "id": 4392
        },
        {
          "value": 0.146,
          "id": 4393
        },
        {
          "value": 0.269,
          "id": 4394
        },
        {
          "value": 0.315626006904488,
          "id": 4395
        }
      ],
      [
        {
          "value": "Effingham",
          "id": 4396
        },
        {
          "value": "3% below",
          "id": 4397
        },
        {
          "value": 0.293,
          "id": 4398
        },
        {
          "value": 0.151,
          "id": 4399
        },
        {
          "value": 0.113,
          "id": 4400
        },
        {
          "value": 0.246,
          "id": 4401
        },
        {
          "value": 0.315626006904488,
          "id": 4402
        }
      ],
      [
        {
          "value": "Edwards",
          "id": 4403
        },
        {
          "value": "1% above",
          "id": 4404
        },
        {
          "value": 0.325,
          "id": 4405
        },
        {
          "value": 0.161,
          "id": 4406
        },
        {
          "value": 0.107,
          "id": 4407
        },
        {
          "value": 0.285,
          "id": 4408
        },
        {
          "value": 0.315626006904488,
          "id": 4409
        }
      ],
      [
        {
          "value": "Edwards",
          "id": 4410
        },
        {
          "value": "on par with",
          "id": 4411
        },
        {
          "value": 0.318,
          "id": 4412
        },
        {
          "value": 0.16,
          "id": 4413
        },
        {
          "value": 0.13,
          "id": 4414
        },
        {
          "value": 0.265,
          "id": 4415
        },
        {
          "value": 0.315626006904488,
          "id": 4416
        }
      ],
      [
        {
          "value": "Edmunds",
          "id": 4417
        },
        {
          "value": "2% below",
          "id": 4418
        },
        {
          "value": 0.296,
          "id": 4419
        },
        {
          "value": 0.14,
          "id": 4420
        },
        {
          "value": 0.108,
          "id": 4421
        },
        {
          "value": 0.26,
          "id": 4422
        },
        {
          "value": 0.315626006904488,
          "id": 4423
        }
      ],
      [
        {
          "value": "Edgar",
          "id": 4424
        },
        {
          "value": "1% above",
          "id": 4425
        },
        {
          "value": 0.326,
          "id": 4426
        },
        {
          "value": 0.169,
          "id": 4427
        },
        {
          "value": 0.147,
          "id": 4428
        },
        {
          "value": 0.24,
          "id": 4429
        },
        {
          "value": 0.315626006904488,
          "id": 4430
        }
      ],
      [
        {
          "value": "Eddy",
          "id": 4431
        },
        {
          "value": "on par with",
          "id": 4432
        },
        {
          "value": 0.315,
          "id": 4433
        },
        {
          "value": 0.187,
          "id": 4434
        },
        {
          "value": 0.09,
          "id": 4435
        },
        {
          "value": 0.29,
          "id": 4436
        },
        {
          "value": 0.315626006904488,
          "id": 4437
        }
      ],
      [
        {
          "value": "Eau Claire",
          "id": 4438
        },
        {
          "value": "on par with",
          "id": 4439
        },
        {
          "value": 0.323,
          "id": 4440
        },
        {
          "value": 0.169,
          "id": 4441
        },
        {
          "value": 0.13,
          "id": 4442
        },
        {
          "value": 0.213,
          "id": 4443
        },
        {
          "value": 0.315626006904488,
          "id": 4444
        }
      ],
      [
        {
          "value": "DuPage",
          "id": 4445
        },
        {
          "value": "8% below",
          "id": 4446
        },
        {
          "value": 0.239,
          "id": 4447
        },
        {
          "value": 0.116,
          "id": 4448
        },
        {
          "value": 0.093,
          "id": 4449
        },
        {
          "value": 0.183,
          "id": 4450
        },
        {
          "value": 0.315626006904488,
          "id": 4451
        }
      ],
      [
        {
          "value": "Dunn",
          "id": 4452
        },
        {
          "value": "2% below",
          "id": 4453
        },
        {
          "value": 0.6,
          "id": 4454
        },
        {
          "value": 0.359,
          "id": 4455
        },
        {
          "value": 0.173,
          "id": 4456
        },
        {
          "value": 0.58,
          "id": 4457
        },
        {
          "value": 0.631252013808976,
          "id": 4458
        }
      ],
      [
        {
          "value": "Dunklin",
          "id": 4466
        },
        {
          "value": "1% above",
          "id": 4467
        },
        {
          "value": 0.327,
          "id": 4468
        },
        {
          "value": 0.244,
          "id": 4469
        },
        {
          "value": 0.197,
          "id": 4470
        },
        {
          "value": 0.328,
          "id": 4471
        },
        {
          "value": 0.315626006904488,
          "id": 4472
        }
      ],
      [
        {
          "value": "Dundy",
          "id": 4473
        },
        {
          "value": "2% above",
          "id": 4474
        },
        {
          "value": 0.341,
          "id": 4475
        },
        {
          "value": 0.163,
          "id": 4476
        },
        {
          "value": 0.116,
          "id": 4477
        },
        {
          "value": 0.292,
          "id": 4478
        },
        {
          "value": 0.315626006904488,
          "id": 4479
        }
      ],
      [
        {
          "value": "Dubuque",
          "id": 4480
        },
        {
          "value": "4% below",
          "id": 4481
        },
        {
          "value": 0.277,
          "id": 4482
        },
        {
          "value": 0.159,
          "id": 4483
        },
        {
          "value": 0.123,
          "id": 4484
        },
        {
          "value": 0.227,
          "id": 4485
        },
        {
          "value": 0.315626006904488,
          "id": 4486
        }
      ],
      [
        {
          "value": "Douglas",
          "id": 4487
        },
        {
          "value": "on par with",
          "id": 4488
        },
        {
          "value": 0.634,
          "id": 4489
        },
        {
          "value": 0.41500000000000004,
          "id": 4490
        },
        {
          "value": 0.29800000000000004,
          "id": 4491
        },
        {
          "value": 0.583,
          "id": 4492
        },
        {
          "value": 0.631252013808976,
          "id": 4493
        }
      ],
      [
        {
          "value": "Douglas",
          "id": 4494
        },
        {
          "value": "3% below",
          "id": 4495
        },
        {
          "value": 0.292,
          "id": 4496
        },
        {
          "value": 0.145,
          "id": 4497
        },
        {
          "value": 0.106,
          "id": 4498
        },
        {
          "value": 0.258,
          "id": 4499
        },
        {
          "value": 0.315626006904488,
          "id": 4500
        }
      ],
      [
        {
          "value": "Douglas",
          "id": 4501
        },
        {
          "value": "4% below",
          "id": 4502
        },
        {
          "value": 0.282,
          "id": 4503
        },
        {
          "value": 0.174,
          "id": 4504
        },
        {
          "value": 0.141,
          "id": 4505
        },
        {
          "value": 0.221,
          "id": 4506
        },
        {
          "value": 0.315626006904488,
          "id": 4507
        }
      ],
      [
        {
          "value": "Douglas",
          "id": 4515
        },
        {
          "value": "6% below",
          "id": 4516
        },
        {
          "value": 0.263,
          "id": 4517
        },
        {
          "value": 0.153,
          "id": 4518
        },
        {
          "value": 0.098,
          "id": 4519
        },
        {
          "value": 0.222,
          "id": 4520
        },
        {
          "value": 0.315626006904488,
          "id": 4521
        }
      ],
      [
        {
          "value": "Douglas",
          "id": 4522
        },
        {
          "value": "9% below",
          "id": 4523
        },
        {
          "value": 0.233,
          "id": 4524
        },
        {
          "value": 0.167,
          "id": 4525
        },
        {
          "value": 0.172,
          "id": 4526
        },
        {
          "value": 0.187,
          "id": 4527
        },
        {
          "value": 0.315626006904488,
          "id": 4528
        }
      ],
      [
        {
          "value": "Douglas",
          "id": 4529
        },
        {
          "value": "1% below",
          "id": 4530
        },
        {
          "value": 0.308,
          "id": 4531
        },
        {
          "value": 0.156,
          "id": 4532
        },
        {
          "value": 0.109,
          "id": 4533
        },
        {
          "value": 0.27,
          "id": 4534
        },
        {
          "value": 0.315626006904488,
          "id": 4535
        }
      ],
      [
        {
          "value": "Door",
          "id": 4536
        },
        {
          "value": "4% below",
          "id": 4537
        },
        {
          "value": 0.278,
          "id": 4538
        },
        {
          "value": 0.145,
          "id": 4539
        },
        {
          "value": 0.12,
          "id": 4540
        },
        {
          "value": 0.22,
          "id": 4541
        },
        {
          "value": 0.315626006904488,
          "id": 4542
        }
      ],
      [
        {
          "value": "Doniphan",
          "id": 4543
        },
        {
          "value": "1% below",
          "id": 4544
        },
        {
          "value": 0.311,
          "id": 4545
        },
        {
          "value": 0.168,
          "id": 4546
        },
        {
          "value": 0.143,
          "id": 4547
        },
        {
          "value": 0.286,
          "id": 4548
        },
        {
          "value": 0.315626006904488,
          "id": 4549
        }
      ],
      [
        {
          "value": "Dodge",
          "id": 4550
        },
        {
          "value": "4% below",
          "id": 4551
        },
        {
          "value": 0.277,
          "id": 4552
        },
        {
          "value": 0.169,
          "id": 4553
        },
        {
          "value": 0.112,
          "id": 4554
        },
        {
          "value": 0.231,
          "id": 4555
        },
        {
          "value": 0.315626006904488,
          "id": 4556
        }
      ],
      [
        {
          "value": "Dodge",
          "id": 4557
        },
        {
          "value": "1% below",
          "id": 4558
        },
        {
          "value": 0.308,
          "id": 4559
        },
        {
          "value": 0.181,
          "id": 4560
        },
        {
          "value": 0.119,
          "id": 4561
        },
        {
          "value": 0.252,
          "id": 4562
        },
        {
          "value": 0.315626006904488,
          "id": 4563
        }
      ],
      [
        {
          "value": "Dodge",
          "id": 4564
        },
        {
          "value": "3% below",
          "id": 4565
        },
        {
          "value": 0.288,
          "id": 4566
        },
        {
          "value": 0.152,
          "id": 4567
        },
        {
          "value": 0.076,
          "id": 4568
        },
        {
          "value": 0.183,
          "id": 4569
        },
        {
          "value": 0.315626006904488,
          "id": 4570
        }
      ],
      [
        {
          "value": "Dixon",
          "id": 4571
        },
        {
          "value": "1% below",
          "id": 4572
        },
        {
          "value": 0.307,
          "id": 4573
        },
        {
          "value": 0.153,
          "id": 4574
        },
        {
          "value": 0.113,
          "id": 4575
        },
        {
          "value": 0.319,
          "id": 4576
        },
        {
          "value": 0.315626006904488,
          "id": 4577
        }
      ],
      [
        {
          "value": "Divide",
          "id": 4578
        },
        {
          "value": "3% below",
          "id": 4579
        },
        {
          "value": 0.286,
          "id": 4580
        },
        {
          "value": 0.164,
          "id": 4581
        },
        {
          "value": 0.05,
          "id": 4582
        },
        {
          "value": 0.355,
          "id": 4583
        },
        {
          "value": 0.315626006904488,
          "id": 4584
        }
      ],
      [
        {
          "value": "Dickinson",
          "id": 4585
        },
        {
          "value": "1% above",
          "id": 4586
        },
        {
          "value": 0.657,
          "id": 4587
        },
        {
          "value": 0.32799999999999996,
          "id": 4588
        },
        {
          "value": 0.253,
          "id": 4589
        },
        {
          "value": 0.544,
          "id": 4590
        },
        {
          "value": 0.631252013808976,
          "id": 4591
        }
      ],
      [
        {
          "value": "Dickey",
          "id": 4599
        },
        {
          "value": "1% above",
          "id": 4600
        },
        {
          "value": 0.329,
          "id": 4601
        },
        {
          "value": 0.161,
          "id": 4602
        },
        {
          "value": 0.068,
          "id": 4603
        },
        {
          "value": 0.264,
          "id": 4604
        },
        {
          "value": 0.315626006904488,
          "id": 4605
        }
      ],
      [
        {
          "value": "Dewey",
          "id": 4606
        },
        {
          "value": "8% above",
          "id": 4607
        },
        {
          "value": 0.397,
          "id": 4608
        },
        {
          "value": 0.322,
          "id": 4609
        },
        {
          "value": 0.22,
          "id": 4610
        },
        {
          "value": 0.307,
          "id": 4611
        },
        {
          "value": 0.315626006904488,
          "id": 4612
        }
      ],
      [
        {
          "value": "Dewey",
          "id": 4613
        },
        {
          "value": "2% above",
          "id": 4614
        },
        {
          "value": 0.339,
          "id": 4615
        },
        {
          "value": 0.187,
          "id": 4616
        },
        {
          "value": 0.136,
          "id": 4617
        },
        {
          "value": 0.357,
          "id": 4618
        },
        {
          "value": 0.315626006904488,
          "id": 4619
        }
      ],
      [
        {
          "value": "Deuel",
          "id": 4620
        },
        {
          "value": "1% above",
          "id": 4621
        },
        {
          "value": 0.327,
          "id": 4622
        },
        {
          "value": 0.137,
          "id": 4623
        },
        {
          "value": 0.094,
          "id": 4624
        },
        {
          "value": 0.304,
          "id": 4625
        },
        {
          "value": 0.315626006904488,
          "id": 4626
        }
      ],
      [
        {
          "value": "Deuel",
          "id": 4627
        },
        {
          "value": "5% below",
          "id": 4628
        },
        {
          "value": 0.271,
          "id": 4629
        },
        {
          "value": 0.161,
          "id": 4630
        },
        {
          "value": 0.119,
          "id": 4631
        },
        {
          "value": 0.267,
          "id": 4632
        },
        {
          "value": 0.315626006904488,
          "id": 4633
        }
      ],
      [
        {
          "value": "Des Moines",
          "id": 4634
        },
        {
          "value": "on par with",
          "id": 4635
        },
        {
          "value": 0.316,
          "id": 4636
        },
        {
          "value": 0.189,
          "id": 4637
        },
        {
          "value": 0.141,
          "id": 4638
        },
        {
          "value": 0.268,
          "id": 4639
        },
        {
          "value": 0.315626006904488,
          "id": 4640
        }
      ],
      [
        {
          "value": "Dent",
          "id": 4641
        },
        {
          "value": "3% above",
          "id": 4642
        },
        {
          "value": 0.353,
          "id": 4643
        },
        {
          "value": 0.223,
          "id": 4644
        },
        {
          "value": 0.165,
          "id": 4645
        },
        {
          "value": 0.341,
          "id": 4646
        },
        {
          "value": 0.315626006904488,
          "id": 4647
        }
      ],
      [
        {
          "value": "Delaware",
          "id": 4648
        },
        {
          "value": "1% above",
          "id": 4649
        },
        {
          "value": 0.334,
          "id": 4650
        },
        {
          "value": 0.235,
          "id": 4651
        },
        {
          "value": 0.17,
          "id": 4652
        },
        {
          "value": 0.333,
          "id": 4653
        },
        {
          "value": 0.315626006904488,
          "id": 4654
        }
      ],
      [
        {
          "value": "Delaware",
          "id": 4655
        },
        {
          "value": "on par with",
          "id": 4656
        },
        {
          "value": 0.32,
          "id": 4657
        },
        {
          "value": 0.159,
          "id": 4658
        },
        {
          "value": 0.109,
          "id": 4659
        },
        {
          "value": 0.286,
          "id": 4660
        },
        {
          "value": 0.315626006904488,
          "id": 4661
        }
      ],
      [
        {
          "value": "DeKalb",
          "id": 4662
        },
        {
          "value": "7% above",
          "id": 4663
        },
        {
          "value": 0.387,
          "id": 4664
        },
        {
          "value": 0.199,
          "id": 4665
        },
        {
          "value": 0.158,
          "id": 4666
        },
        {
          "value": 0.328,
          "id": 4667
        },
        {
          "value": 0.315626006904488,
          "id": 4668
        }
      ],
      [
        {
          "value": "DeKalb",
          "id": 4669
        },
        {
          "value": "5% below",
          "id": 4670
        },
        {
          "value": 0.274,
          "id": 4671
        },
        {
          "value": 0.168,
          "id": 4672
        },
        {
          "value": 0.146,
          "id": 4673
        },
        {
          "value": 0.221,
          "id": 4674
        },
        {
          "value": 0.315626006904488,
          "id": 4675
        }
      ],
      [
        {
          "value": "Decatur",
          "id": 4676
        },
        {
          "value": "4% above",
          "id": 4677
        },
        {
          "value": 0.358,
          "id": 4678
        },
        {
          "value": 0.171,
          "id": 4679
        },
        {
          "value": 0.123,
          "id": 4680
        },
        {
          "value": 0.277,
          "id": 4681
        },
        {
          "value": 0.315626006904488,
          "id": 4682
        }
      ],
      [
        {
          "value": "Decatur",
          "id": 4683
        },
        {
          "value": "1% below",
          "id": 4684
        },
        {
          "value": 0.307,
          "id": 4685
        },
        {
          "value": 0.193,
          "id": 4686
        },
        {
          "value": 0.144,
          "id": 4687
        },
        {
          "value": 0.249,
          "id": 4688
        },
        {
          "value": 0.315626006904488,
          "id": 4689
        }
      ],
      [
        {
          "value": "De Witt",
          "id": 4690
        },
        {
          "value": "on par with",
          "id": 4691
        },
        {
          "value": 0.32,
          "id": 4692
        },
        {
          "value": 0.151,
          "id": 4693
        },
        {
          "value": 0.129,
          "id": 4694
        },
        {
          "value": 0.263,
          "id": 4695
        },
        {
          "value": 0.315626006904488,
          "id": 4696
        }
      ],
      [
        {
          "value": "Day",
          "id": 4697
        },
        {
          "value": "on par with",
          "id": 4698
        },
        {
          "value": 0.318,
          "id": 4699
        },
        {
          "value": 0.188,
          "id": 4700
        },
        {
          "value": 0.146,
          "id": 4701
        },
        {
          "value": 0.259,
          "id": 4702
        },
        {
          "value": 0.315626006904488,
          "id": 4703
        }
      ],
      [
        {
          "value": "Dawson",
          "id": 4704
        },
        {
          "value": "1% above",
          "id": 4705
        },
        {
          "value": 0.329,
          "id": 4706
        },
        {
          "value": 0.172,
          "id": 4707
        },
        {
          "value": 0.098,
          "id": 4708
        },
        {
          "value": 0.251,
          "id": 4709
        },
        {
          "value": 0.315626006904488,
          "id": 4710
        }
      ],
      [
        {
          "value": "Dawes",
          "id": 4711
        },
        {
          "value": "4% below",
          "id": 4712
        },
        {
          "value": 0.28,
          "id": 4713
        },
        {
          "value": 0.173,
          "id": 4714
        },
        {
          "value": 0.151,
          "id": 4715
        },
        {
          "value": 0.281,
          "id": 4716
        },
        {
          "value": 0.315626006904488,
          "id": 4717
        }
      ],
      [
        {
          "value": "Davison",
          "id": 4718
        },
        {
          "value": "3% above",
          "id": 4719
        },
        {
          "value": 0.35,
          "id": 4720
        },
        {
          "value": 0.155,
          "id": 4721
        },
        {
          "value": 0.122,
          "id": 4722
        },
        {
          "value": 0.241,
          "id": 4723
        },
        {
          "value": 0.315626006904488,
          "id": 4724
        }
      ],
      [
        {
          "value": "Davis",
          "id": 4725
        },
        {
          "value": "1% below",
          "id": 4726
        },
        {
          "value": 0.306,
          "id": 4727
        },
        {
          "value": 0.195,
          "id": 4728
        },
        {
          "value": 0.142,
          "id": 4729
        },
        {
          "value": 0.308,
          "id": 4730
        },
        {
          "value": 0.315626006904488,
          "id": 4731
        }
      ],
      [
        {
          "value": "Daviess",
          "id": 4732
        },
        {
          "value": "4% above",
          "id": 4733
        },
        {
          "value": 0.362,
          "id": 4734
        },
        {
          "value": 0.216,
          "id": 4735
        },
        {
          "value": 0.147,
          "id": 4736
        },
        {
          "value": 0.303,
          "id": 4737
        },
        {
          "value": 0.315626006904488,
          "id": 4738
        }
      ],
      [
        {
          "value": "Dane",
          "id": 4739
        },
        {
          "value": "10% below",
          "id": 4740
        },
        {
          "value": 0.222,
          "id": 4741
        },
        {
          "value": 0.134,
          "id": 4742
        },
        {
          "value": 0.118,
          "id": 4743
        },
        {
          "value": 0.153,
          "id": 4744
        },
        {
          "value": 0.315626006904488,
          "id": 4745
        }
      ],
      [
        {
          "value": "Dallas",
          "id": 4746
        },
        {
          "value": "1% above",
          "id": 4747
        },
        {
          "value": 0.327,
          "id": 4748
        },
        {
          "value": 0.225,
          "id": 4749
        },
        {
          "value": 0.164,
          "id": 4750
        },
        {
          "value": 0.292,
          "id": 4751
        },
        {
          "value": 0.315626006904488,
          "id": 4752
        }
      ],
      [
        {
          "value": "Dallas",
          "id": 4753
        },
        {
          "value": "1% below",
          "id": 4754
        },
        {
          "value": 0.311,
          "id": 4755
        },
        {
          "value": 0.159,
          "id": 4756
        },
        {
          "value": 0.093,
          "id": 4757
        },
        {
          "value": 0.27,
          "id": 4758
        },
        {
          "value": 0.315626006904488,
          "id": 4759
        }
      ],
      [
        {
          "value": "Dakota",
          "id": 4760
        },
        {
          "value": "2% above",
          "id": 4761
        },
        {
          "value": 0.344,
          "id": 4762
        },
        {
          "value": 0.184,
          "id": 4763
        },
        {
          "value": 0.115,
          "id": 4764
        },
        {
          "value": 0.291,
          "id": 4765
        },
        {
          "value": 0.315626006904488,
          "id": 4766
        }
      ],
      [
        {
          "value": "Dakota",
          "id": 4767
        },
        {
          "value": "6% below",
          "id": 4768
        },
        {
          "value": 0.259,
          "id": 4769
        },
        {
          "value": 0.136,
          "id": 4770
        },
        {
          "value": 0.086,
          "id": 4771
        },
        {
          "value": 0.168,
          "id": 4772
        },
        {
          "value": 0.315626006904488,
          "id": 4773
        }
      ],
      [
        {
          "value": "Dade",
          "id": 4774
        },
        {
          "value": "5% above",
          "id": 4775
        },
        {
          "value": 0.37,
          "id": 4776
        },
        {
          "value": 0.218,
          "id": 4777
        },
        {
          "value": 0.159,
          "id": 4778
        },
        {
          "value": 0.333,
          "id": 4779
        },
        {
          "value": 0.315626006904488,
          "id": 4780
        }
      ],
      [
        {
          "value": "Custer",
          "id": 4781
        },
        {
          "value": "3% below",
          "id": 4782
        },
        {
          "value": 0.287,
          "id": 4783
        },
        {
          "value": 0.133,
          "id": 4784
        },
        {
          "value": 0.105,
          "id": 4785
        },
        {
          "value": 0.234,
          "id": 4786
        },
        {
          "value": 0.315626006904488,
          "id": 4787
        }
      ],
      [
        {
          "value": "Custer",
          "id": 4788
        },
        {
          "value": "2% below",
          "id": 4789
        },
        {
          "value": 0.298,
          "id": 4790
        },
        {
          "value": 0.192,
          "id": 4791
        },
        {
          "value": 0.151,
          "id": 4792
        },
        {
          "value": 0.295,
          "id": 4793
        },
        {
          "value": 0.315626006904488,
          "id": 4794
        }
      ],
      [
        {
          "value": "Custer",
          "id": 4795
        },
        {
          "value": "2% above",
          "id": 4796
        },
        {
          "value": 0.341,
          "id": 4797
        },
        {
          "value": 0.147,
          "id": 4798
        },
        {
          "value": 0.115,
          "id": 4799
        },
        {
          "value": 0.293,
          "id": 4800
        },
        {
          "value": 0.315626006904488,
          "id": 4801
        }
      ],
      [
        {
          "value": "Cuming",
          "id": 4802
        },
        {
          "value": "3% below",
          "id": 4803
        },
        {
          "value": 0.289,
          "id": 4804
        },
        {
          "value": 0.136,
          "id": 4805
        },
        {
          "value": 0.116,
          "id": 4806
        },
        {
          "value": 0.252,
          "id": 4807
        },
        {
          "value": 0.315626006904488,
          "id": 4808
        }
      ],
      [
        {
          "value": "Cumberland",
          "id": 4809
        },
        {
          "value": "2% below",
          "id": 4810
        },
        {
          "value": 0.296,
          "id": 4811
        },
        {
          "value": 0.162,
          "id": 4812
        },
        {
          "value": 0.135,
          "id": 4813
        },
        {
          "value": 0.261,
          "id": 4814
        },
        {
          "value": 0.315626006904488,
          "id": 4815
        }
      ],
      [
        {
          "value": "Crow Wing",
          "id": 4816
        },
        {
          "value": "3% below",
          "id": 4817
        },
        {
          "value": 0.293,
          "id": 4818
        },
        {
          "value": 0.172,
          "id": 4819
        },
        {
          "value": 0.117,
          "id": 4820
        },
        {
          "value": 0.205,
          "id": 4821
        },
        {
          "value": 0.315626006904488,
          "id": 4822
        }
      ],
      [
        {
          "value": "Creek",
          "id": 4823
        },
        {
          "value": "4% above",
          "id": 4824
        },
        {
          "value": 0.355,
          "id": 4825
        },
        {
          "value": 0.215,
          "id": 4826
        },
        {
          "value": 0.162,
          "id": 4827
        },
        {
          "value": 0.353,
          "id": 4828
        },
        {
          "value": 0.315626006904488,
          "id": 4829
        }
      ],
      [
        {
          "value": "Crawford",
          "id": 4830
        },
        {
          "value": "3% below",
          "id": 4831
        },
        {
          "value": 0.294,
          "id": 4832
        },
        {
          "value": 0.163,
          "id": 4833
        },
        {
          "value": 0.126,
          "id": 4834
        },
        {
          "value": 0.217,
          "id": 4835
        },
        {
          "value": 0.315626006904488,
          "id": 4836
        }
      ],
      [
        {
          "value": "Crawford",
          "id": 4837
        },
        {
          "value": "1% above",
          "id": 4838
        },
        {
          "value": 0.655,
          "id": 4839
        },
        {
          "value": 0.402,
          "id": 4840
        },
        {
          "value": 0.258,
          "id": 4841
        },
        {
          "value": 0.596,
          "id": 4842
        },
        {
          "value": 0.631252013808976,
          "id": 4843
        }
      ],
      [
        {
          "value": "Crawford",
          "id": 4844
        },
        {
          "value": "3% above",
          "id": 4845
        },
        {
          "value": 0.347,
          "id": 4846
        },
        {
          "value": 0.203,
          "id": 4847
        },
        {
          "value": 0.171,
          "id": 4848
        },
        {
          "value": 0.269,
          "id": 4849
        },
        {
          "value": 0.315626006904488,
          "id": 4850
        }
      ],
      [
        {
          "value": "Crawford",
          "id": 4858
        },
        {
          "value": "2% above",
          "id": 4859
        },
        {
          "value": 0.339,
          "id": 4860
        },
        {
          "value": 0.162,
          "id": 4861
        },
        {
          "value": 0.138,
          "id": 4862
        },
        {
          "value": 0.263,
          "id": 4863
        },
        {
          "value": 0.315626006904488,
          "id": 4864
        }
      ],
      [
        {
          "value": "Craig",
          "id": 4865
        },
        {
          "value": "2% below",
          "id": 4866
        },
        {
          "value": 0.301,
          "id": 4867
        },
        {
          "value": 0.227,
          "id": 4868
        },
        {
          "value": 0.166,
          "id": 4869
        },
        {
          "value": 0.315,
          "id": 4870
        },
        {
          "value": 0.315626006904488,
          "id": 4871
        }
      ],
      [
        {
          "value": "Cowley",
          "id": 4872
        },
        {
          "value": "5% above",
          "id": 4873
        },
        {
          "value": 0.368,
          "id": 4874
        },
        {
          "value": 0.198,
          "id": 4875
        },
        {
          "value": 0.149,
          "id": 4876
        },
        {
          "value": 0.304,
          "id": 4877
        },
        {
          "value": 0.315626006904488,
          "id": 4878
        }
      ],
      [
        {
          "value": "Cottonwood",
          "id": 4879
        },
        {
          "value": "2% below",
          "id": 4880
        },
        {
          "value": 0.296,
          "id": 4881
        },
        {
          "value": 0.159,
          "id": 4882
        },
        {
          "value": 0.102,
          "id": 4883
        },
        {
          "value": 0.315,
          "id": 4884
        },
        {
          "value": 0.315626006904488,
          "id": 4885
        }
      ],
      [
        {
          "value": "Cotton",
          "id": 4886
        },
        {
          "value": "4% above",
          "id": 4887
        },
        {
          "value": 0.357,
          "id": 4888
        },
        {
          "value": 0.204,
          "id": 4889
        },
        {
          "value": 0.15,
          "id": 4890
        },
        {
          "value": 0.363,
          "id": 4891
        },
        {
          "value": 0.315626006904488,
          "id": 4892
        }
      ],
      [
        {
          "value": "Corson",
          "id": 4893
        },
        {
          "value": "7% above",
          "id": 4894
        },
        {
          "value": 0.391,
          "id": 4895
        },
        {
          "value": 0.351,
          "id": 4896
        },
        {
          "value": 0.212,
          "id": 4897
        },
        {
          "value": 0.292,
          "id": 4898
        },
        {
          "value": 0.315626006904488,
          "id": 4899
        }
      ],
      [
        {
          "value": "Cooper",
          "id": 4900
        },
        {
          "value": "3% above",
          "id": 4901
        },
        {
          "value": 0.353,
          "id": 4902
        },
        {
          "value": 0.216,
          "id": 4903
        },
        {
          "value": 0.162,
          "id": 4904
        },
        {
          "value": 0.255,
          "id": 4905
        },
        {
          "value": 0.315626006904488,
          "id": 4906
        }
      ],
      [
        {
          "value": "Cook",
          "id": 4907
        },
        {
          "value": "6% below",
          "id": 4908
        },
        {
          "value": 0.264,
          "id": 4909
        },
        {
          "value": 0.17,
          "id": 4910
        },
        {
          "value": 0.103,
          "id": 4911
        },
        {
          "value": 0.196,
          "id": 4912
        },
        {
          "value": 0.315626006904488,
          "id": 4913
        }
      ],
      [
        {
          "value": "Cook",
          "id": 4914
        },
        {
          "value": "7% below",
          "id": 4915
        },
        {
          "value": 0.249,
          "id": 4916
        },
        {
          "value": 0.156,
          "id": 4917
        },
        {
          "value": 0.146,
          "id": 4918
        },
        {
          "value": 0.2,
          "id": 4919
        },
        {
          "value": 0.315626006904488,
          "id": 4920
        }
      ],
      [
        {
          "value": "Comanche",
          "id": 4921
        },
        {
          "value": "3% above",
          "id": 4922
        },
        {
          "value": 0.349,
          "id": 4923
        },
        {
          "value": 0.22,
          "id": 4924
        },
        {
          "value": 0.189,
          "id": 4925
        },
        {
          "value": 0.304,
          "id": 4926
        },
        {
          "value": 0.315626006904488,
          "id": 4927
        }
      ],
      [
        {
          "value": "Comanche",
          "id": 4928
        },
        {
          "value": "2% above",
          "id": 4929
        },
        {
          "value": 0.339,
          "id": 4930
        },
        {
          "value": 0.14,
          "id": 4931
        },
        {
          "value": 0.116,
          "id": 4932
        },
        {
          "value": 0.265,
          "id": 4933
        },
        {
          "value": 0.315626006904488,
          "id": 4934
        }
      ],
      [
        {
          "value": "Columbia",
          "id": 4935
        },
        {
          "value": "1% above",
          "id": 4936
        },
        {
          "value": 0.334,
          "id": 4937
        },
        {
          "value": 0.155,
          "id": 4938
        },
        {
          "value": 0.105,
          "id": 4939
        },
        {
          "value": 0.23,
          "id": 4940
        },
        {
          "value": 0.315626006904488,
          "id": 4941
        }
      ],
      [
        {
          "value": "Colfax",
          "id": 4942
        },
        {
          "value": "1% below",
          "id": 4943
        },
        {
          "value": 0.311,
          "id": 4944
        },
        {
          "value": 0.149,
          "id": 4945
        },
        {
          "value": 0.073,
          "id": 4946
        },
        {
          "value": 0.266,
          "id": 4947
        },
        {
          "value": 0.315626006904488,
          "id": 4948
        }
      ],
      [
        {
          "value": "Coles",
          "id": 4949
        },
        {
          "value": "4% below",
          "id": 4950
        },
        {
          "value": 0.277,
          "id": 4951
        },
        {
          "value": 0.199,
          "id": 4952
        },
        {
          "value": 0.167,
          "id": 4953
        },
        {
          "value": 0.237,
          "id": 4954
        },
        {
          "value": 0.315626006904488,
          "id": 4955
        }
      ],
      [
        {
          "value": "Cole",
          "id": 4956
        },
        {
          "value": "2% below",
          "id": 4957
        },
        {
          "value": 0.3,
          "id": 4958
        },
        {
          "value": 0.203,
          "id": 4959
        },
        {
          "value": 0.154,
          "id": 4960
        },
        {
          "value": 0.229,
          "id": 4961
        },
        {
          "value": 0.315626006904488,
          "id": 4962
        }
      ],
      [
        {
          "value": "Coffey",
          "id": 4963
        },
        {
          "value": "1% above",
          "id": 4964
        },
        {
          "value": 0.329,
          "id": 4965
        },
        {
          "value": 0.155,
          "id": 4966
        },
        {
          "value": 0.13,
          "id": 4967
        },
        {
          "value": 0.262,
          "id": 4968
        },
        {
          "value": 0.315626006904488,
          "id": 4969
        }
      ],
      [
        {
          "value": "Codington",
          "id": 4970
        },
        {
          "value": "2% below",
          "id": 4971
        },
        {
          "value": 0.301,
          "id": 4972
        },
        {
          "value": 0.165,
          "id": 4973
        },
        {
          "value": 0.115,
          "id": 4974
        },
        {
          "value": 0.231,
          "id": 4975
        },
        {
          "value": 0.315626006904488,
          "id": 4976
        }
      ],
      [
        {
          "value": "Coal",
          "id": 4977
        },
        {
          "value": "4% above",
          "id": 4978
        },
        {
          "value": 0.359,
          "id": 4979
        },
        {
          "value": 0.23,
          "id": 4980
        },
        {
          "value": 0.18,
          "id": 4981
        },
        {
          "value": 0.357,
          "id": 4982
        },
        {
          "value": 0.315626006904488,
          "id": 4983
        }
      ],
      [
        {
          "value": "Cloud",
          "id": 4984
        },
        {
          "value": "1% above",
          "id": 4985
        },
        {
          "value": 0.328,
          "id": 4986
        },
        {
          "value": 0.182,
          "id": 4987
        },
        {
          "value": 0.136,
          "id": 4988
        },
        {
          "value": 0.292,
          "id": 4989
        },
        {
          "value": 0.315626006904488,
          "id": 4990
        }
      ],
      [
        {
          "value": "Clinton",
          "id": 4991
        },
        {
          "value": "3% above",
          "id": 4992
        },
        {
          "value": 0.345,
          "id": 4993
        },
        {
          "value": 0.192,
          "id": 4994
        },
        {
          "value": 0.145,
          "id": 4995
        },
        {
          "value": 0.266,
          "id": 4996
        },
        {
          "value": 0.315626006904488,
          "id": 4997
        }
      ],
      [
        {
          "value": "Clinton",
          "id": 4998
        },
        {
          "value": "1% below",
          "id": 4999
        },
        {
          "value": 0.312,
          "id": 5000
        },
        {
          "value": 0.18,
          "id": 5001
        },
        {
          "value": 0.132,
          "id": 5002
        },
        {
          "value": 0.275,
          "id": 5003
        },
        {
          "value": 0.315626006904488,
          "id": 5004
        }
      ],
      [
        {
          "value": "Clinton",
          "id": 5005
        },
        {
          "value": "4% below",
          "id": 5006
        },
        {
          "value": 0.278,
          "id": 5007
        },
        {
          "value": 0.148,
          "id": 5008
        },
        {
          "value": 0.106,
          "id": 5009
        },
        {
          "value": 0.299,
          "id": 5010
        },
        {
          "value": 0.315626006904488,
          "id": 5011
        }
      ],
      [
        {
          "value": "Cleveland",
          "id": 5012
        },
        {
          "value": "2% below",
          "id": 5013
        },
        {
          "value": 0.299,
          "id": 5014
        },
        {
          "value": 0.19,
          "id": 5015
        },
        {
          "value": 0.151,
          "id": 5016
        },
        {
          "value": 0.254,
          "id": 5017
        },
        {
          "value": 0.315626006904488,
          "id": 5018
        }
      ],
      [
        {
          "value": "Clearwater",
          "id": 5019
        },
        {
          "value": "2% below",
          "id": 5020
        },
        {
          "value": 0.304,
          "id": 5021
        },
        {
          "value": 0.189,
          "id": 5022
        },
        {
          "value": 0.142,
          "id": 5023
        },
        {
          "value": 0.237,
          "id": 5024
        },
        {
          "value": 0.315626006904488,
          "id": 5025
        }
      ],
      [
        {
          "value": "Clayton",
          "id": 5026
        },
        {
          "value": "3% above",
          "id": 5027
        },
        {
          "value": 0.346,
          "id": 5028
        },
        {
          "value": 0.16,
          "id": 5029
        },
        {
          "value": 0.127,
          "id": 5030
        },
        {
          "value": 0.288,
          "id": 5031
        },
        {
          "value": 0.315626006904488,
          "id": 5032
        }
      ],
      [
        {
          "value": "Clay",
          "id": 5033
        },
        {
          "value": "3% below",
          "id": 5034
        },
        {
          "value": 0.58,
          "id": 5035
        },
        {
          "value": 0.385,
          "id": 5036
        },
        {
          "value": 0.29300000000000004,
          "id": 5037
        },
        {
          "value": 0.45999999999999996,
          "id": 5038
        },
        {
          "value": 0.631252013808976,
          "id": 5039
        }
      ],
      [
        {
          "value": "Clay",
          "id": 5040
        },
        {
          "value": "on par with",
          "id": 5041
        },
        {
          "value": 0.639,
          "id": 5042
        },
        {
          "value": 0.32,
          "id": 5043
        },
        {
          "value": 0.256,
          "id": 5044
        },
        {
          "value": 0.614,
          "id": 5045
        },
        {
          "value": 0.631252013808976,
          "id": 5046
        }
      ],
      [
        {
          "value": "Clay",
          "id": 5054
        },
        {
          "value": "4% below",
          "id": 5055
        },
        {
          "value": 0.28,
          "id": 5056
        },
        {
          "value": 0.155,
          "id": 5057
        },
        {
          "value": 0.102,
          "id": 5058
        },
        {
          "value": 0.226,
          "id": 5059
        },
        {
          "value": 0.315626006904488,
          "id": 5060
        }
      ],
      [
        {
          "value": "Clay",
          "id": 5061
        },
        {
          "value": "4% above",
          "id": 5062
        },
        {
          "value": 0.358,
          "id": 5063
        },
        {
          "value": 0.149,
          "id": 5064
        },
        {
          "value": 0.136,
          "id": 5065
        },
        {
          "value": 0.281,
          "id": 5066
        },
        {
          "value": 0.315626006904488,
          "id": 5067
        }
      ],
      [
        {
          "value": "Clay",
          "id": 5068
        },
        {
          "value": "1% below",
          "id": 5069
        },
        {
          "value": 0.306,
          "id": 5070
        },
        {
          "value": 0.154,
          "id": 5071
        },
        {
          "value": 0.115,
          "id": 5072
        },
        {
          "value": 0.251,
          "id": 5073
        },
        {
          "value": 0.315626006904488,
          "id": 5074
        }
      ],
      [
        {
          "value": "Clarke",
          "id": 5082
        },
        {
          "value": "2% below",
          "id": 5083
        },
        {
          "value": 0.296,
          "id": 5084
        },
        {
          "value": 0.191,
          "id": 5085
        },
        {
          "value": 0.124,
          "id": 5086
        },
        {
          "value": 0.275,
          "id": 5087
        },
        {
          "value": 0.315626006904488,
          "id": 5088
        }
      ],
      [
        {
          "value": "Clark",
          "id": 5089
        },
        {
          "value": "2% above",
          "id": 5090
        },
        {
          "value": 0.674,
          "id": 5091
        },
        {
          "value": 0.316,
          "id": 5092
        },
        {
          "value": 0.22699999999999998,
          "id": 5093
        },
        {
          "value": 0.478,
          "id": 5094
        },
        {
          "value": 0.631252013808976,
          "id": 5095
        }
      ],
      [
        {
          "value": "Clark",
          "id": 5103
        },
        {
          "value": "1% above",
          "id": 5104
        },
        {
          "value": 0.664,
          "id": 5105
        },
        {
          "value": 0.349,
          "id": 5106
        },
        {
          "value": 0.29700000000000004,
          "id": 5107
        },
        {
          "value": 0.591,
          "id": 5108
        },
        {
          "value": 0.631252013808976,
          "id": 5109
        }
      ],
      [
        {
          "value": "Clark",
          "id": 5110
        },
        {
          "value": "2% below",
          "id": 5111
        },
        {
          "value": 0.3,
          "id": 5112
        },
        {
          "value": 0.177,
          "id": 5113
        },
        {
          "value": 0.122,
          "id": 5114
        },
        {
          "value": 0.278,
          "id": 5115
        },
        {
          "value": 0.315626006904488,
          "id": 5116
        }
      ],
      [
        {
          "value": "Cimarron",
          "id": 5124
        },
        {
          "value": "1% below",
          "id": 5125
        },
        {
          "value": 0.307,
          "id": 5126
        },
        {
          "value": 0.184,
          "id": 5127
        },
        {
          "value": 0.137,
          "id": 5128
        },
        {
          "value": 0.347,
          "id": 5129
        },
        {
          "value": 0.315626006904488,
          "id": 5130
        }
      ],
      [
        {
          "value": "Christian",
          "id": 5131
        },
        {
          "value": "2% below",
          "id": 5132
        },
        {
          "value": 0.304,
          "id": 5133
        },
        {
          "value": 0.196,
          "id": 5134
        },
        {
          "value": 0.134,
          "id": 5135
        },
        {
          "value": 0.241,
          "id": 5136
        },
        {
          "value": 0.315626006904488,
          "id": 5137
        }
      ],
      [
        {
          "value": "Christian",
          "id": 5138
        },
        {
          "value": "1% above",
          "id": 5139
        },
        {
          "value": 0.334,
          "id": 5140
        },
        {
          "value": 0.161,
          "id": 5141
        },
        {
          "value": 0.143,
          "id": 5142
        },
        {
          "value": 0.323,
          "id": 5143
        },
        {
          "value": 0.315626006904488,
          "id": 5144
        }
      ],
      [
        {
          "value": "Choctaw",
          "id": 5145
        },
        {
          "value": "2% above",
          "id": 5146
        },
        {
          "value": 0.342,
          "id": 5147
        },
        {
          "value": 0.243,
          "id": 5148
        },
        {
          "value": 0.201,
          "id": 5149
        },
        {
          "value": 0.348,
          "id": 5150
        },
        {
          "value": 0.315626006904488,
          "id": 5151
        }
      ],
      [
        {
          "value": "Chisago",
          "id": 5152
        },
        {
          "value": "2% below",
          "id": 5153
        },
        {
          "value": 0.301,
          "id": 5154
        },
        {
          "value": 0.161,
          "id": 5155
        },
        {
          "value": 0.088,
          "id": 5156
        },
        {
          "value": 0.23,
          "id": 5157
        },
        {
          "value": 0.315626006904488,
          "id": 5158
        }
      ],
      [
        {
          "value": "Chippewa",
          "id": 5159
        },
        {
          "value": "4% below",
          "id": 5160
        },
        {
          "value": 0.285,
          "id": 5161
        },
        {
          "value": 0.162,
          "id": 5162
        },
        {
          "value": 0.119,
          "id": 5163
        },
        {
          "value": 0.197,
          "id": 5164
        },
        {
          "value": 0.315626006904488,
          "id": 5165
        }
      ],
      [
        {
          "value": "Chippewa",
          "id": 5166
        },
        {
          "value": "2% below",
          "id": 5167
        },
        {
          "value": 0.296,
          "id": 5168
        },
        {
          "value": 0.16,
          "id": 5169
        },
        {
          "value": 0.102,
          "id": 5170
        },
        {
          "value": 0.326,
          "id": 5171
        },
        {
          "value": 0.315626006904488,
          "id": 5172
        }
      ],
      [
        {
          "value": "Chickasaw",
          "id": 5173
        },
        {
          "value": "1% below",
          "id": 5174
        },
        {
          "value": 0.306,
          "id": 5175
        },
        {
          "value": 0.177,
          "id": 5176
        },
        {
          "value": 0.116,
          "id": 5177
        },
        {
          "value": 0.244,
          "id": 5178
        },
        {
          "value": 0.315626006904488,
          "id": 5179
        }
      ],
      [
        {
          "value": "Cheyenne",
          "id": 5180
        },
        {
          "value": "4% below",
          "id": 5181
        },
        {
          "value": 0.283,
          "id": 5182
        },
        {
          "value": 0.173,
          "id": 5183
        },
        {
          "value": 0.127,
          "id": 5184
        },
        {
          "value": 0.256,
          "id": 5185
        },
        {
          "value": 0.315626006904488,
          "id": 5186
        }
      ],
      [
        {
          "value": "Cheyenne",
          "id": 5187
        },
        {
          "value": "1% above",
          "id": 5188
        },
        {
          "value": 0.329,
          "id": 5189
        },
        {
          "value": 0.144,
          "id": 5190
        },
        {
          "value": 0.124,
          "id": 5191
        },
        {
          "value": 0.338,
          "id": 5192
        },
        {
          "value": 0.315626006904488,
          "id": 5193
        }
      ],
      [
        {
          "value": "Cherry",
          "id": 5194
        },
        {
          "value": "6% below",
          "id": 5195
        },
        {
          "value": 0.26,
          "id": 5196
        },
        {
          "value": 0.158,
          "id": 5197
        },
        {
          "value": 0.13,
          "id": 5198
        },
        {
          "value": 0.31,
          "id": 5199
        },
        {
          "value": 0.315626006904488,
          "id": 5200
        }
      ],
      [
        {
          "value": "Cherokee",
          "id": 5201
        },
        {
          "value": "3% above",
          "id": 5202
        },
        {
          "value": 0.348,
          "id": 5203
        },
        {
          "value": 0.256,
          "id": 5204
        },
        {
          "value": 0.177,
          "id": 5205
        },
        {
          "value": 0.279,
          "id": 5206
        },
        {
          "value": 0.315626006904488,
          "id": 5207
        }
      ],
      [
        {
          "value": "Cherokee",
          "id": 5208
        },
        {
          "value": "7% above",
          "id": 5209
        },
        {
          "value": 0.387,
          "id": 5210
        },
        {
          "value": 0.199,
          "id": 5211
        },
        {
          "value": 0.155,
          "id": 5212
        },
        {
          "value": 0.327,
          "id": 5213
        },
        {
          "value": 0.315626006904488,
          "id": 5214
        }
      ],
      [
        {
          "value": "Cherokee",
          "id": 5215
        },
        {
          "value": "4% above",
          "id": 5216
        },
        {
          "value": 0.357,
          "id": 5217
        },
        {
          "value": 0.154,
          "id": 5218
        },
        {
          "value": 0.116,
          "id": 5219
        },
        {
          "value": 0.298,
          "id": 5220
        },
        {
          "value": 0.315626006904488,
          "id": 5221
        }
      ],
      [
        {
          "value": "Chautauqua",
          "id": 5222
        },
        {
          "value": "1% above",
          "id": 5223
        },
        {
          "value": 0.326,
          "id": 5224
        },
        {
          "value": 0.182,
          "id": 5225
        },
        {
          "value": 0.147,
          "id": 5226
        },
        {
          "value": 0.363,
          "id": 5227
        },
        {
          "value": 0.315626006904488,
          "id": 5228
        }
      ],
      [
        {
          "value": "Chase",
          "id": 5229
        },
        {
          "value": "5% below",
          "id": 5230
        },
        {
          "value": 0.272,
          "id": 5231
        },
        {
          "value": 0.144,
          "id": 5232
        },
        {
          "value": 0.105,
          "id": 5233
        },
        {
          "value": 0.266,
          "id": 5234
        },
        {
          "value": 0.315626006904488,
          "id": 5235
        }
      ],
      [
        {
          "value": "Chase",
          "id": 5236
        },
        {
          "value": "2% below",
          "id": 5237
        },
        {
          "value": 0.301,
          "id": 5238
        },
        {
          "value": 0.164,
          "id": 5239
        },
        {
          "value": 0.141,
          "id": 5240
        },
        {
          "value": 0.288,
          "id": 5241
        },
        {
          "value": 0.315626006904488,
          "id": 5242
        }
      ],
      [
        {
          "value": "Charles Mix",
          "id": 5243
        },
        {
          "value": "3% above",
          "id": 5244
        },
        {
          "value": 0.35,
          "id": 5245
        },
        {
          "value": 0.209,
          "id": 5246
        },
        {
          "value": 0.142,
          "id": 5247
        },
        {
          "value": 0.258,
          "id": 5248
        },
        {
          "value": 0.315626006904488,
          "id": 5249
        }
      ],
      [
        {
          "value": "Chariton",
          "id": 5250
        },
        {
          "value": "on par with",
          "id": 5251
        },
        {
          "value": 0.32,
          "id": 5252
        },
        {
          "value": 0.203,
          "id": 5253
        },
        {
          "value": 0.152,
          "id": 5254
        },
        {
          "value": 0.314,
          "id": 5255
        },
        {
          "value": 0.315626006904488,
          "id": 5256
        }
      ],
      [
        {
          "value": "Champaign",
          "id": 5257
        },
        {
          "value": "5% below",
          "id": 5258
        },
        {
          "value": 0.266,
          "id": 5259
        },
        {
          "value": 0.171,
          "id": 5260
        },
        {
          "value": 0.172,
          "id": 5261
        },
        {
          "value": 0.208,
          "id": 5262
        },
        {
          "value": 0.315626006904488,
          "id": 5263
        }
      ],
      [
        {
          "value": "Cerro Gordo",
          "id": 5264
        },
        {
          "value": "1% below",
          "id": 5265
        },
        {
          "value": 0.314,
          "id": 5266
        },
        {
          "value": 0.173,
          "id": 5267
        },
        {
          "value": 0.131,
          "id": 5268
        },
        {
          "value": 0.279,
          "id": 5269
        },
        {
          "value": 0.315626006904488,
          "id": 5270
        }
      ],
      [
        {
          "value": "Cedar",
          "id": 5271
        },
        {
          "value": "4% below",
          "id": 5272
        },
        {
          "value": 0.28,
          "id": 5273
        },
        {
          "value": 0.139,
          "id": 5274
        },
        {
          "value": 0.111,
          "id": 5275
        },
        {
          "value": 0.285,
          "id": 5276
        },
        {
          "value": 0.315626006904488,
          "id": 5277
        }
      ],
      [
        {
          "value": "Cedar",
          "id": 5278
        },
        {
          "value": "2% above",
          "id": 5279
        },
        {
          "value": 0.343,
          "id": 5280
        },
        {
          "value": 0.223,
          "id": 5281
        },
        {
          "value": 0.171,
          "id": 5282
        },
        {
          "value": 0.323,
          "id": 5283
        },
        {
          "value": 0.315626006904488,
          "id": 5284
        }
      ],
      [
        {
          "value": "Cedar",
          "id": 5285
        },
        {
          "value": "1% above",
          "id": 5286
        },
        {
          "value": 0.328,
          "id": 5287
        },
        {
          "value": 0.159,
          "id": 5288
        },
        {
          "value": 0.107,
          "id": 5289
        },
        {
          "value": 0.315,
          "id": 5290
        },
        {
          "value": 0.315626006904488,
          "id": 5291
        }
      ],
      [
        {
          "value": "Cavalier",
          "id": 5292
        },
        {
          "value": "1% below",
          "id": 5293
        },
        {
          "value": 0.312,
          "id": 5294
        },
        {
          "value": 0.147,
          "id": 5295
        },
        {
          "value": 0.053,
          "id": 5296
        },
        {
          "value": 0.296,
          "id": 5297
        },
        {
          "value": 0.315626006904488,
          "id": 5298
        }
      ],
      [
        {
          "value": "Cass",
          "id": 5299
        },
        {
          "value": "5% below",
          "id": 5300
        },
        {
          "value": 0.547,
          "id": 5301
        },
        {
          "value": 0.33499999999999996,
          "id": 5302
        },
        {
          "value": 0.22,
          "id": 5303
        },
        {
          "value": 0.44399999999999995,
          "id": 5304
        },
        {
          "value": 0.631252013808976,
          "id": 5305
        }
      ],
      [
        {
          "value": "Cass",
          "id": 5306
        },
        {
          "value": "2% above",
          "id": 5307
        },
        {
          "value": 0.338,
          "id": 5308
        },
        {
          "value": 0.176,
          "id": 5309
        },
        {
          "value": 0.11,
          "id": 5310
        },
        {
          "value": 0.25,
          "id": 5311
        },
        {
          "value": 0.315626006904488,
          "id": 5312
        }
      ],
      [
        {
          "value": "Cass",
          "id": 5313
        },
        {
          "value": "1% below",
          "id": 5314
        },
        {
          "value": 0.305,
          "id": 5315
        },
        {
          "value": 0.182,
          "id": 5316
        },
        {
          "value": 0.13,
          "id": 5317
        },
        {
          "value": 0.28,
          "id": 5318
        },
        {
          "value": 0.315626006904488,
          "id": 5319
        }
      ],
      [
        {
          "value": "Cass",
          "id": 5327
        },
        {
          "value": "on par with",
          "id": 5328
        },
        {
          "value": 0.321,
          "id": 5329
        },
        {
          "value": 0.17,
          "id": 5330
        },
        {
          "value": 0.128,
          "id": 5331
        },
        {
          "value": 0.256,
          "id": 5332
        },
        {
          "value": 0.315626006904488,
          "id": 5333
        }
      ],
      [
        {
          "value": "Cass",
          "id": 5334
        },
        {
          "value": "3% below",
          "id": 5335
        },
        {
          "value": 0.288,
          "id": 5336
        },
        {
          "value": 0.158,
          "id": 5337
        },
        {
          "value": 0.118,
          "id": 5338
        },
        {
          "value": 0.254,
          "id": 5339
        },
        {
          "value": 0.315626006904488,
          "id": 5340
        }
      ],
      [
        {
          "value": "Carver",
          "id": 5341
        },
        {
          "value": "8% below",
          "id": 5342
        },
        {
          "value": 0.242,
          "id": 5343
        },
        {
          "value": 0.126,
          "id": 5344
        },
        {
          "value": 0.071,
          "id": 5345
        },
        {
          "value": 0.164,
          "id": 5346
        },
        {
          "value": 0.315626006904488,
          "id": 5347
        }
      ],
      [
        {
          "value": "Carter",
          "id": 5348
        },
        {
          "value": "on par with",
          "id": 5349
        },
        {
          "value": 0.324,
          "id": 5350
        },
        {
          "value": 0.223,
          "id": 5351
        },
        {
          "value": 0.161,
          "id": 5352
        },
        {
          "value": 0.319,
          "id": 5353
        },
        {
          "value": 0.315626006904488,
          "id": 5354
        }
      ],
      [
        {
          "value": "Carter",
          "id": 5355
        },
        {
          "value": "1% above",
          "id": 5356
        },
        {
          "value": 0.325,
          "id": 5357
        },
        {
          "value": 0.239,
          "id": 5358
        },
        {
          "value": 0.174,
          "id": 5359
        },
        {
          "value": 0.305,
          "id": 5360
        },
        {
          "value": 0.315626006904488,
          "id": 5361
        }
      ],
      [
        {
          "value": "Carroll",
          "id": 5362
        },
        {
          "value": "2% above",
          "id": 5363
        },
        {
          "value": 0.342,
          "id": 5364
        },
        {
          "value": 0.204,
          "id": 5365
        },
        {
          "value": 0.143,
          "id": 5366
        },
        {
          "value": 0.296,
          "id": 5367
        },
        {
          "value": 0.315626006904488,
          "id": 5368
        }
      ],
      [
        {
          "value": "Carroll",
          "id": 5369
        },
        {
          "value": "2% below",
          "id": 5370
        },
        {
          "value": 0.296,
          "id": 5371
        },
        {
          "value": 0.164,
          "id": 5372
        },
        {
          "value": 0.111,
          "id": 5373
        },
        {
          "value": 0.252,
          "id": 5374
        },
        {
          "value": 0.315626006904488,
          "id": 5375
        }
      ],
      [
        {
          "value": "Carroll",
          "id": 5376
        },
        {
          "value": "on par with",
          "id": 5377
        },
        {
          "value": 0.316,
          "id": 5378
        },
        {
          "value": 0.15,
          "id": 5379
        },
        {
          "value": 0.131,
          "id": 5380
        },
        {
          "value": 0.267,
          "id": 5381
        },
        {
          "value": 0.315626006904488,
          "id": 5382
        }
      ],
      [
        {
          "value": "Carlton",
          "id": 5383
        },
        {
          "value": "4% below",
          "id": 5384
        },
        {
          "value": 0.281,
          "id": 5385
        },
        {
          "value": 0.193,
          "id": 5386
        },
        {
          "value": 0.108,
          "id": 5387
        },
        {
          "value": 0.195,
          "id": 5388
        },
        {
          "value": 0.315626006904488,
          "id": 5389
        }
      ],
      [
        {
          "value": "Cape Girardeau",
          "id": 5390
        },
        {
          "value": "1% above",
          "id": 5391
        },
        {
          "value": 0.327,
          "id": 5392
        },
        {
          "value": 0.201,
          "id": 5393
        },
        {
          "value": 0.162,
          "id": 5394
        },
        {
          "value": 0.299,
          "id": 5395
        },
        {
          "value": 0.315626006904488,
          "id": 5396
        }
      ],
      [
        {
          "value": "Canadian",
          "id": 5397
        },
        {
          "value": "2% above",
          "id": 5398
        },
        {
          "value": 0.342,
          "id": 5399
        },
        {
          "value": 0.178,
          "id": 5400
        },
        {
          "value": 0.126,
          "id": 5401
        },
        {
          "value": 0.294,
          "id": 5402
        },
        {
          "value": 0.315626006904488,
          "id": 5403
        }
      ],
      [
        {
          "value": "Campbell",
          "id": 5404
        },
        {
          "value": "1% above",
          "id": 5405
        },
        {
          "value": 0.325,
          "id": 5406
        },
        {
          "value": 0.152,
          "id": 5407
        },
        {
          "value": 0.117,
          "id": 5408
        },
        {
          "value": 0.301,
          "id": 5409
        },
        {
          "value": 0.315626006904488,
          "id": 5410
        }
      ],
      [
        {
          "value": "Camden",
          "id": 5411
        },
        {
          "value": "4% below",
          "id": 5412
        },
        {
          "value": 0.281,
          "id": 5413
        },
        {
          "value": 0.199,
          "id": 5414
        },
        {
          "value": 0.156,
          "id": 5415
        },
        {
          "value": 0.242,
          "id": 5416
        },
        {
          "value": 0.315626006904488,
          "id": 5417
        }
      ],
      [
        {
          "value": "Calumet",
          "id": 5418
        },
        {
          "value": "3% below",
          "id": 5419
        },
        {
          "value": 0.293,
          "id": 5420
        },
        {
          "value": 0.137,
          "id": 5421
        },
        {
          "value": 0.085,
          "id": 5422
        },
        {
          "value": 0.229,
          "id": 5423
        },
        {
          "value": 0.315626006904488,
          "id": 5424
        }
      ],
      [
        {
          "value": "Callaway",
          "id": 5425
        },
        {
          "value": "2% above",
          "id": 5426
        },
        {
          "value": 0.343,
          "id": 5427
        },
        {
          "value": 0.193,
          "id": 5428
        },
        {
          "value": 0.144,
          "id": 5429
        },
        {
          "value": 0.31,
          "id": 5430
        },
        {
          "value": 0.315626006904488,
          "id": 5431
        }
      ],
      [
        {
          "value": "Calhoun",
          "id": 5432
        },
        {
          "value": "1% above",
          "id": 5433
        },
        {
          "value": 0.331,
          "id": 5434
        },
        {
          "value": 0.176,
          "id": 5435
        },
        {
          "value": 0.123,
          "id": 5436
        },
        {
          "value": 0.248,
          "id": 5437
        },
        {
          "value": 0.315626006904488,
          "id": 5438
        }
      ],
      [
        {
          "value": "Calhoun",
          "id": 5439
        },
        {
          "value": "2% below",
          "id": 5440
        },
        {
          "value": 0.304,
          "id": 5441
        },
        {
          "value": 0.145,
          "id": 5442
        },
        {
          "value": 0.126,
          "id": 5443
        },
        {
          "value": 0.303,
          "id": 5444
        },
        {
          "value": 0.315626006904488,
          "id": 5445
        }
      ],
      [
        {
          "value": "Caldwell",
          "id": 5446
        },
        {
          "value": "7% above",
          "id": 5447
        },
        {
          "value": 0.392,
          "id": 5448
        },
        {
          "value": 0.201,
          "id": 5449
        },
        {
          "value": 0.156,
          "id": 5450
        },
        {
          "value": 0.32,
          "id": 5451
        },
        {
          "value": 0.315626006904488,
          "id": 5452
        }
      ],
      [
        {
          "value": "Caddo",
          "id": 5453
        },
        {
          "value": "4% above",
          "id": 5454
        },
        {
          "value": 0.362,
          "id": 5455
        },
        {
          "value": 0.228,
          "id": 5456
        },
        {
          "value": 0.166,
          "id": 5457
        },
        {
          "value": 0.369,
          "id": 5458
        },
        {
          "value": 0.315626006904488,
          "id": 5459
        }
      ],
      [
        {
          "value": "Butte",
          "id": 5460
        },
        {
          "value": "5% below",
          "id": 5461
        },
        {
          "value": 0.265,
          "id": 5462
        },
        {
          "value": 0.165,
          "id": 5463
        },
        {
          "value": 0.112,
          "id": 5464
        },
        {
          "value": 0.241,
          "id": 5465
        },
        {
          "value": 0.315626006904488,
          "id": 5466
        }
      ],
      [
        {
          "value": "Butler",
          "id": 5467
        },
        {
          "value": "4% below",
          "id": 5468
        },
        {
          "value": 0.282,
          "id": 5469
        },
        {
          "value": 0.161,
          "id": 5470
        },
        {
          "value": 0.115,
          "id": 5471
        },
        {
          "value": 0.243,
          "id": 5472
        },
        {
          "value": 0.315626006904488,
          "id": 5473
        }
      ],
      [
        {
          "value": "Butler",
          "id": 5474
        },
        {
          "value": "5% above",
          "id": 5475
        },
        {
          "value": 0.365,
          "id": 5476
        },
        {
          "value": 0.23,
          "id": 5477
        },
        {
          "value": 0.178,
          "id": 5478
        },
        {
          "value": 0.291,
          "id": 5479
        },
        {
          "value": 0.315626006904488,
          "id": 5480
        }
      ],
      [
        {
          "value": "Butler",
          "id": 5481
        },
        {
          "value": "1% below",
          "id": 5482
        },
        {
          "value": 0.313,
          "id": 5483
        },
        {
          "value": 0.167,
          "id": 5484
        },
        {
          "value": 0.13,
          "id": 5485
        },
        {
          "value": 0.263,
          "id": 5486
        },
        {
          "value": 0.315626006904488,
          "id": 5487
        }
      ],
      [
        {
          "value": "Butler",
          "id": 5488
        },
        {
          "value": "1% above",
          "id": 5489
        },
        {
          "value": 0.327,
          "id": 5490
        },
        {
          "value": 0.154,
          "id": 5491
        },
        {
          "value": 0.112,
          "id": 5492
        },
        {
          "value": 0.288,
          "id": 5493
        },
        {
          "value": 0.315626006904488,
          "id": 5494
        }
      ],
      [
        {
          "value": "Burt",
          "id": 5495
        },
        {
          "value": "1% above",
          "id": 5496
        },
        {
          "value": 0.327,
          "id": 5497
        },
        {
          "value": 0.183,
          "id": 5498
        },
        {
          "value": 0.125,
          "id": 5499
        },
        {
          "value": 0.353,
          "id": 5500
        },
        {
          "value": 0.315626006904488,
          "id": 5501
        }
      ],
      [
        {
          "value": "Burnett",
          "id": 5502
        },
        {
          "value": "3% below",
          "id": 5503
        },
        {
          "value": 0.288,
          "id": 5504
        },
        {
          "value": 0.178,
          "id": 5505
        },
        {
          "value": 0.13,
          "id": 5506
        },
        {
          "value": 0.258,
          "id": 5507
        },
        {
          "value": 0.315626006904488,
          "id": 5508
        }
      ],
      [
        {
          "value": "Burleigh",
          "id": 5509
        },
        {
          "value": "3% below",
          "id": 5510
        },
        {
          "value": 0.294,
          "id": 5511
        },
        {
          "value": 0.153,
          "id": 5512
        },
        {
          "value": 0.063,
          "id": 5513
        },
        {
          "value": 0.21,
          "id": 5514
        },
        {
          "value": 0.315626006904488,
          "id": 5515
        }
      ],
      [
        {
          "value": "Burke",
          "id": 5516
        },
        {
          "value": "2% below",
          "id": 5517
        },
        {
          "value": 0.296,
          "id": 5518
        },
        {
          "value": 0.187,
          "id": 5519
        },
        {
          "value": 0.07,
          "id": 5520
        },
        {
          "value": 0.312,
          "id": 5521
        },
        {
          "value": 0.315626006904488,
          "id": 5522
        }
      ],
      [
        {
          "value": "Bureau",
          "id": 5523
        },
        {
          "value": "2% below",
          "id": 5524
        },
        {
          "value": 0.299,
          "id": 5525
        },
        {
          "value": 0.151,
          "id": 5526
        },
        {
          "value": 0.124,
          "id": 5527
        },
        {
          "value": 0.281,
          "id": 5528
        },
        {
          "value": 0.315626006904488,
          "id": 5529
        }
      ],
      [
        {
          "value": "Buffalo",
          "id": 5530
        },
        {
          "value": "1% above",
          "id": 5531
        },
        {
          "value": 0.328,
          "id": 5532
        },
        {
          "value": 0.154,
          "id": 5533
        },
        {
          "value": 0.111,
          "id": 5534
        },
        {
          "value": 0.257,
          "id": 5535
        },
        {
          "value": 0.315626006904488,
          "id": 5536
        }
      ],
      [
        {
          "value": "Buffalo",
          "id": 5537
        },
        {
          "value": "10% above",
          "id": 5538
        },
        {
          "value": 0.418,
          "id": 5539
        },
        {
          "value": 0.371,
          "id": 5540
        },
        {
          "value": 0.244,
          "id": 5541
        },
        {
          "value": 0.314,
          "id": 5542
        },
        {
          "value": 0.315626006904488,
          "id": 5543
        }
      ],
      [
        {
          "value": "Buffalo",
          "id": 5544
        },
        {
          "value": "2% below",
          "id": 5545
        },
        {
          "value": 0.296,
          "id": 5546
        },
        {
          "value": 0.147,
          "id": 5547
        },
        {
          "value": 0.125,
          "id": 5548
        },
        {
          "value": 0.243,
          "id": 5549
        },
        {
          "value": 0.315626006904488,
          "id": 5550
        }
      ],
      [
        {
          "value": "Buena Vista",
          "id": 5551
        },
        {
          "value": "1% below",
          "id": 5552
        },
        {
          "value": 0.307,
          "id": 5553
        },
        {
          "value": 0.158,
          "id": 5554
        },
        {
          "value": 0.1,
          "id": 5555
        },
        {
          "value": 0.248,
          "id": 5556
        },
        {
          "value": 0.315626006904488,
          "id": 5557
        }
      ],
      [
        {
          "value": "Buchanan",
          "id": 5558
        },
        {
          "value": "3% above",
          "id": 5559
        },
        {
          "value": 0.351,
          "id": 5560
        },
        {
          "value": 0.217,
          "id": 5561
        },
        {
          "value": 0.158,
          "id": 5562
        },
        {
          "value": 0.28,
          "id": 5563
        },
        {
          "value": 0.315626006904488,
          "id": 5564
        }
      ],
      [
        {
          "value": "Buchanan",
          "id": 5565
        },
        {
          "value": "1% above",
          "id": 5566
        },
        {
          "value": 0.329,
          "id": 5567
        },
        {
          "value": 0.157,
          "id": 5568
        },
        {
          "value": 0.116,
          "id": 5569
        },
        {
          "value": 0.269,
          "id": 5570
        },
        {
          "value": 0.315626006904488,
          "id": 5571
        }
      ],
      [
        {
          "value": "Bryan",
          "id": 5572
        },
        {
          "value": "3% above",
          "id": 5573
        },
        {
          "value": 0.349,
          "id": 5574
        },
        {
          "value": 0.229,
          "id": 5575
        },
        {
          "value": 0.171,
          "id": 5576
        },
        {
          "value": 0.319,
          "id": 5577
        },
        {
          "value": 0.315626006904488,
          "id": 5578
        }
      ],
      [
        {
          "value": "Brule",
          "id": 5579
        },
        {
          "value": "3% above",
          "id": 5580
        },
        {
          "value": 0.354,
          "id": 5581
        },
        {
          "value": 0.173,
          "id": 5582
        },
        {
          "value": 0.118,
          "id": 5583
        },
        {
          "value": 0.243,
          "id": 5584
        },
        {
          "value": 0.315626006904488,
          "id": 5585
        }
      ],
      [
        {
          "value": "Brown",
          "id": 5586
        },
        {
          "value": "5% below",
          "id": 5587
        },
        {
          "value": 0.272,
          "id": 5588
        },
        {
          "value": 0.161,
          "id": 5589
        },
        {
          "value": 0.114,
          "id": 5590
        },
        {
          "value": 0.207,
          "id": 5591
        },
        {
          "value": 0.315626006904488,
          "id": 5592
        }
      ],
      [
        {
          "value": "Brown",
          "id": 5593
        },
        {
          "value": "2% below",
          "id": 5594
        },
        {
          "value": 0.304,
          "id": 5595
        },
        {
          "value": 0.148,
          "id": 5596
        },
        {
          "value": 0.109,
          "id": 5597
        },
        {
          "value": 0.229,
          "id": 5598
        },
        {
          "value": 0.315626006904488,
          "id": 5599
        }
      ],
      [
        {
          "value": "Brown",
          "id": 5600
        },
        {
          "value": "1% below",
          "id": 5601
        },
        {
          "value": 0.616,
          "id": 5602
        },
        {
          "value": 0.34199999999999997,
          "id": 5603
        },
        {
          "value": 0.29500000000000004,
          "id": 5604
        },
        {
          "value": 0.631,
          "id": 5605
        },
        {
          "value": 0.631252013808976,
          "id": 5606
        }
      ],
      [
        {
          "value": "Brown",
          "id": 5607
        },
        {
          "value": "4% below",
          "id": 5608
        },
        {
          "value": 0.278,
          "id": 5609
        },
        {
          "value": 0.146,
          "id": 5610
        },
        {
          "value": 0.095,
          "id": 5611
        },
        {
          "value": 0.214,
          "id": 5612
        },
        {
          "value": 0.315626006904488,
          "id": 5613
        }
      ],
      [
        {
          "value": "Brown",
          "id": 5621
        },
        {
          "value": "on par with",
          "id": 5622
        },
        {
          "value": 0.315,
          "id": 5623
        },
        {
          "value": 0.164,
          "id": 5624
        },
        {
          "value": 0.115,
          "id": 5625
        },
        {
          "value": 0.274,
          "id": 5626
        },
        {
          "value": 0.315626006904488,
          "id": 5627
        }
      ],
      [
        {
          "value": "Brookings",
          "id": 5628
        },
        {
          "value": "4% below",
          "id": 5629
        },
        {
          "value": 0.279,
          "id": 5630
        },
        {
          "value": 0.144,
          "id": 5631
        },
        {
          "value": 0.137,
          "id": 5632
        },
        {
          "value": 0.196,
          "id": 5633
        },
        {
          "value": 0.315626006904488,
          "id": 5634
        }
      ],
      [
        {
          "value": "Bremer",
          "id": 5635
        },
        {
          "value": "on par with",
          "id": 5636
        },
        {
          "value": 0.316,
          "id": 5637
        },
        {
          "value": 0.153,
          "id": 5638
        },
        {
          "value": 0.102,
          "id": 5639
        },
        {
          "value": 0.246,
          "id": 5640
        },
        {
          "value": 0.315626006904488,
          "id": 5641
        }
      ],
      [
        {
          "value": "Boyd",
          "id": 5642
        },
        {
          "value": "1% above",
          "id": 5643
        },
        {
          "value": 0.328,
          "id": 5644
        },
        {
          "value": 0.151,
          "id": 5645
        },
        {
          "value": 0.117,
          "id": 5646
        },
        {
          "value": 0.299,
          "id": 5647
        },
        {
          "value": 0.315626006904488,
          "id": 5648
        }
      ],
      [
        {
          "value": "Box Butte",
          "id": 5649
        },
        {
          "value": "on par with",
          "id": 5650
        },
        {
          "value": 0.315,
          "id": 5651
        },
        {
          "value": 0.182,
          "id": 5652
        },
        {
          "value": 0.145,
          "id": 5653
        },
        {
          "value": 0.277,
          "id": 5654
        },
        {
          "value": 0.315626006904488,
          "id": 5655
        }
      ],
      [
        {
          "value": "Bowman",
          "id": 5656
        },
        {
          "value": "2% below",
          "id": 5657
        },
        {
          "value": 0.297,
          "id": 5658
        },
        {
          "value": 0.153,
          "id": 5659
        },
        {
          "value": 0.053,
          "id": 5660
        },
        {
          "value": 0.303,
          "id": 5661
        },
        {
          "value": 0.315626006904488,
          "id": 5662
        }
      ],
      [
        {
          "value": "Bourbon",
          "id": 5663
        },
        {
          "value": "4% above",
          "id": 5664
        },
        {
          "value": 0.361,
          "id": 5665
        },
        {
          "value": 0.191,
          "id": 5666
        },
        {
          "value": 0.158,
          "id": 5667
        },
        {
          "value": 0.279,
          "id": 5668
        },
        {
          "value": 0.315626006904488,
          "id": 5669
        }
      ],
      [
        {
          "value": "Bottineau",
          "id": 5670
        },
        {
          "value": "2% below",
          "id": 5671
        },
        {
          "value": 0.302,
          "id": 5672
        },
        {
          "value": 0.174,
          "id": 5673
        },
        {
          "value": 0.07,
          "id": 5674
        },
        {
          "value": 0.275,
          "id": 5675
        },
        {
          "value": 0.315626006904488,
          "id": 5676
        }
      ],
      [
        {
          "value": "Boone",
          "id": 5677
        },
        {
          "value": "4% below",
          "id": 5678
        },
        {
          "value": 0.279,
          "id": 5679
        },
        {
          "value": 0.143,
          "id": 5680
        },
        {
          "value": 0.115,
          "id": 5681
        },
        {
          "value": 0.294,
          "id": 5682
        },
        {
          "value": 0.315626006904488,
          "id": 5683
        }
      ],
      [
        {
          "value": "Boone",
          "id": 5684
        },
        {
          "value": "5% below",
          "id": 5685
        },
        {
          "value": 0.273,
          "id": 5686
        },
        {
          "value": 0.195,
          "id": 5687
        },
        {
          "value": 0.172,
          "id": 5688
        },
        {
          "value": 0.195,
          "id": 5689
        },
        {
          "value": 0.315626006904488,
          "id": 5690
        }
      ],
      [
        {
          "value": "Boone",
          "id": 5691
        },
        {
          "value": "on par with",
          "id": 5692
        },
        {
          "value": 0.316,
          "id": 5693
        },
        {
          "value": 0.179,
          "id": 5694
        },
        {
          "value": 0.114,
          "id": 5695
        },
        {
          "value": 0.263,
          "id": 5696
        },
        {
          "value": 0.315626006904488,
          "id": 5697
        }
      ],
      [
        {
          "value": "Boone",
          "id": 5698
        },
        {
          "value": "2% above",
          "id": 5699
        },
        {
          "value": 0.341,
          "id": 5700
        },
        {
          "value": 0.155,
          "id": 5701
        },
        {
          "value": 0.107,
          "id": 5702
        },
        {
          "value": 0.235,
          "id": 5703
        },
        {
          "value": 0.315626006904488,
          "id": 5704
        }
      ],
      [
        {
          "value": "Bond",
          "id": 5705
        },
        {
          "value": "1% below",
          "id": 5706
        },
        {
          "value": 0.305,
          "id": 5707
        },
        {
          "value": 0.174,
          "id": 5708
        },
        {
          "value": 0.133,
          "id": 5709
        },
        {
          "value": 0.258,
          "id": 5710
        },
        {
          "value": 0.315626006904488,
          "id": 5711
        }
      ],
      [
        {
          "value": "Bon Homme",
          "id": 5712
        },
        {
          "value": "1% above",
          "id": 5713
        },
        {
          "value": 0.328,
          "id": 5714
        },
        {
          "value": 0.166,
          "id": 5715
        },
        {
          "value": 0.118,
          "id": 5716
        },
        {
          "value": 0.266,
          "id": 5717
        },
        {
          "value": 0.315626006904488,
          "id": 5718
        }
      ],
      [
        {
          "value": "Bollinger",
          "id": 5719
        },
        {
          "value": "4% above",
          "id": 5720
        },
        {
          "value": 0.357,
          "id": 5721
        },
        {
          "value": 0.217,
          "id": 5722
        },
        {
          "value": 0.158,
          "id": 5723
        },
        {
          "value": 0.343,
          "id": 5724
        },
        {
          "value": 0.315626006904488,
          "id": 5725
        }
      ],
      [
        {
          "value": "Blue Earth",
          "id": 5726
        },
        {
          "value": "4% below",
          "id": 5727
        },
        {
          "value": 0.28,
          "id": 5728
        },
        {
          "value": 0.179,
          "id": 5729
        },
        {
          "value": 0.123,
          "id": 5730
        },
        {
          "value": 0.189,
          "id": 5731
        },
        {
          "value": 0.315626006904488,
          "id": 5732
        }
      ],
      [
        {
          "value": "Blaine",
          "id": 5733
        },
        {
          "value": "6% above",
          "id": 5734
        },
        {
          "value": 0.379,
          "id": 5735
        },
        {
          "value": 0.182,
          "id": 5736
        },
        {
          "value": 0.147,
          "id": 5737
        },
        {
          "value": 0.357,
          "id": 5738
        },
        {
          "value": 0.315626006904488,
          "id": 5739
        }
      ],
      [
        {
          "value": "Blaine",
          "id": 5740
        },
        {
          "value": "4% below",
          "id": 5741
        },
        {
          "value": 0.276,
          "id": 5742
        },
        {
          "value": 0.157,
          "id": 5743
        },
        {
          "value": 0.164,
          "id": 5744
        },
        {
          "value": 0.267,
          "id": 5745
        },
        {
          "value": 0.315626006904488,
          "id": 5746
        }
      ],
      [
        {
          "value": "Black Hawk",
          "id": 5747
        },
        {
          "value": "3% below",
          "id": 5748
        },
        {
          "value": 0.288,
          "id": 5749
        },
        {
          "value": 0.17,
          "id": 5750
        },
        {
          "value": 0.146,
          "id": 5751
        },
        {
          "value": 0.244,
          "id": 5752
        },
        {
          "value": 0.315626006904488,
          "id": 5753
        }
      ],
      [
        {
          "value": "Billings",
          "id": 5754
        },
        {
          "value": "2% below",
          "id": 5755
        },
        {
          "value": 0.297,
          "id": 5756
        },
        {
          "value": 0.157,
          "id": 5757
        },
        {
          "value": 0.053,
          "id": 5758
        },
        {
          "value": 0.317,
          "id": 5759
        },
        {
          "value": 0.315626006904488,
          "id": 5760
        }
      ],
      [
        {
          "value": "Big Stone",
          "id": 5761
        },
        {
          "value": "2% below",
          "id": 5762
        },
        {
          "value": 0.296,
          "id": 5763
        },
        {
          "value": 0.146,
          "id": 5764
        },
        {
          "value": 0.103,
          "id": 5765
        },
        {
          "value": 0.221,
          "id": 5766
        },
        {
          "value": 0.315626006904488,
          "id": 5767
        }
      ],
      [
        {
          "value": "Benton",
          "id": 5768
        },
        {
          "value": "on par with",
          "id": 5769
        },
        {
          "value": 0.319,
          "id": 5770
        },
        {
          "value": 0.201,
          "id": 5771
        },
        {
          "value": 0.155,
          "id": 5772
        },
        {
          "value": 0.319,
          "id": 5773
        },
        {
          "value": 0.315626006904488,
          "id": 5774
        }
      ],
      [
        {
          "value": "Benton",
          "id": 5775
        },
        {
          "value": "4% below",
          "id": 5776
        },
        {
          "value": 0.282,
          "id": 5777
        },
        {
          "value": 0.18,
          "id": 5778
        },
        {
          "value": 0.119,
          "id": 5779
        },
        {
          "value": 0.217,
          "id": 5780
        },
        {
          "value": 0.315626006904488,
          "id": 5781
        }
      ],
      [
        {
          "value": "Benton",
          "id": 5782
        },
        {
          "value": "1% above",
          "id": 5783
        },
        {
          "value": 0.332,
          "id": 5784
        },
        {
          "value": 0.168,
          "id": 5785
        },
        {
          "value": 0.112,
          "id": 5786
        },
        {
          "value": 0.281,
          "id": 5787
        },
        {
          "value": 0.315626006904488,
          "id": 5788
        }
      ],
      [
        {
          "value": "Benson",
          "id": 5789
        },
        {
          "value": "3% above",
          "id": 5790
        },
        {
          "value": 0.354,
          "id": 5791
        },
        {
          "value": 0.319,
          "id": 5792
        },
        {
          "value": 0.149,
          "id": 5793
        },
        {
          "value": 0.323,
          "id": 5794
        },
        {
          "value": 0.315626006904488,
          "id": 5795
        }
      ],
      [
        {
          "value": "Bennett",
          "id": 5796
        },
        {
          "value": "5% above",
          "id": 5797
        },
        {
          "value": 0.365,
          "id": 5798
        },
        {
          "value": 0.287,
          "id": 5799
        },
        {
          "value": 0.193,
          "id": 5800
        },
        {
          "value": 0.269,
          "id": 5801
        },
        {
          "value": 0.315626006904488,
          "id": 5802
        }
      ],
      [
        {
          "value": "Beltrami",
          "id": 5803
        },
        {
          "value": "3% below",
          "id": 5804
        },
        {
          "value": 0.287,
          "id": 5805
        },
        {
          "value": 0.191,
          "id": 5806
        },
        {
          "value": 0.137,
          "id": 5807
        },
        {
          "value": 0.229,
          "id": 5808
        },
        {
          "value": 0.315626006904488,
          "id": 5809
        }
      ],
      [
        {
          "value": "Beckham",
          "id": 5810
        },
        {
          "value": "2% above",
          "id": 5811
        },
        {
          "value": 0.335,
          "id": 5812
        },
        {
          "value": 0.2,
          "id": 5813
        },
        {
          "value": 0.147,
          "id": 5814
        },
        {
          "value": 0.305,
          "id": 5815
        },
        {
          "value": 0.315626006904488,
          "id": 5816
        }
      ],
      [
        {
          "value": "Becker",
          "id": 5817
        },
        {
          "value": "3% below",
          "id": 5818
        },
        {
          "value": 0.294,
          "id": 5819
        },
        {
          "value": 0.173,
          "id": 5820
        },
        {
          "value": 0.105,
          "id": 5821
        },
        {
          "value": 0.246,
          "id": 5822
        },
        {
          "value": 0.315626006904488,
          "id": 5823
        }
      ],
      [
        {
          "value": "Beaver",
          "id": 5824
        },
        {
          "value": "4% above",
          "id": 5825
        },
        {
          "value": 0.357,
          "id": 5826
        },
        {
          "value": 0.164,
          "id": 5827
        },
        {
          "value": 0.109,
          "id": 5828
        },
        {
          "value": 0.311,
          "id": 5829
        },
        {
          "value": 0.315626006904488,
          "id": 5830
        }
      ],
      [
        {
          "value": "Beadle",
          "id": 5831
        },
        {
          "value": "on par with",
          "id": 5832
        },
        {
          "value": 0.315,
          "id": 5833
        },
        {
          "value": 0.167,
          "id": 5834
        },
        {
          "value": 0.13,
          "id": 5835
        },
        {
          "value": 0.263,
          "id": 5836
        },
        {
          "value": 0.315626006904488,
          "id": 5837
        }
      ],
      [
        {
          "value": "Bayfield",
          "id": 5838
        },
        {
          "value": "4% below",
          "id": 5839
        },
        {
          "value": 0.282,
          "id": 5840
        },
        {
          "value": 0.173,
          "id": 5841
        },
        {
          "value": 0.132,
          "id": 5842
        },
        {
          "value": 0.211,
          "id": 5843
        },
        {
          "value": 0.315626006904488,
          "id": 5844
        }
      ],
      [
        {
          "value": "Bates",
          "id": 5845
        },
        {
          "value": "3% above",
          "id": 5846
        },
        {
          "value": 0.348,
          "id": 5847
        },
        {
          "value": 0.212,
          "id": 5848
        },
        {
          "value": 0.164,
          "id": 5849
        },
        {
          "value": 0.316,
          "id": 5850
        },
        {
          "value": 0.315626006904488,
          "id": 5851
        }
      ],
      [
        {
          "value": "Barton",
          "id": 5852
        },
        {
          "value": "on par with",
          "id": 5853
        },
        {
          "value": 0.323,
          "id": 5854
        },
        {
          "value": 0.225,
          "id": 5855
        },
        {
          "value": 0.162,
          "id": 5856
        },
        {
          "value": 0.305,
          "id": 5857
        },
        {
          "value": 0.315626006904488,
          "id": 5858
        }
      ],
      [
        {
          "value": "Barton",
          "id": 5859
        },
        {
          "value": "3% above",
          "id": 5860
        },
        {
          "value": 0.354,
          "id": 5861
        },
        {
          "value": 0.176,
          "id": 5862
        },
        {
          "value": 0.123,
          "id": 5863
        },
        {
          "value": 0.281,
          "id": 5864
        },
        {
          "value": 0.315626006904488,
          "id": 5865
        }
      ],
      [
        {
          "value": "Barry",
          "id": 5866
        },
        {
          "value": "on par with",
          "id": 5867
        },
        {
          "value": 0.323,
          "id": 5868
        },
        {
          "value": 0.207,
          "id": 5869
        },
        {
          "value": 0.145,
          "id": 5870
        },
        {
          "value": 0.313,
          "id": 5871
        },
        {
          "value": 0.315626006904488,
          "id": 5872
        }
      ],
      [
        {
          "value": "Barron",
          "id": 5873
        },
        {
          "value": "1% above",
          "id": 5874
        },
        {
          "value": 0.334,
          "id": 5875
        },
        {
          "value": 0.17,
          "id": 5876
        },
        {
          "value": 0.125,
          "id": 5877
        },
        {
          "value": 0.248,
          "id": 5878
        },
        {
          "value": 0.315626006904488,
          "id": 5879
        }
      ],
      [
        {
          "value": "Barnes",
          "id": 5880
        },
        {
          "value": "1% above",
          "id": 5881
        },
        {
          "value": 0.328,
          "id": 5882
        },
        {
          "value": 0.16,
          "id": 5883
        },
        {
          "value": 0.073,
          "id": 5884
        },
        {
          "value": 0.25,
          "id": 5885
        },
        {
          "value": 0.315626006904488,
          "id": 5886
        }
      ],
      [
        {
          "value": "Barber",
          "id": 5887
        },
        {
          "value": "5% above",
          "id": 5888
        },
        {
          "value": 0.368,
          "id": 5889
        },
        {
          "value": 0.169,
          "id": 5890
        },
        {
          "value": 0.13,
          "id": 5891
        },
        {
          "value": 0.277,
          "id": 5892
        },
        {
          "value": 0.315626006904488,
          "id": 5893
        }
      ],
      [
        {
          "value": "Banner",
          "id": 5894
        },
        {
          "value": "1% above",
          "id": 5895
        },
        {
          "value": 0.331,
          "id": 5896
        },
        {
          "value": 0.149,
          "id": 5897
        },
        {
          "value": 0.142,
          "id": 5898
        },
        {
          "value": 0.328,
          "id": 5899
        },
        {
          "value": 0.315626006904488,
          "id": 5900
        }
      ],
      [
        {
          "value": "Aurora",
          "id": 5901
        },
        {
          "value": "1% below",
          "id": 5902
        },
        {
          "value": 0.307,
          "id": 5903
        },
        {
          "value": 0.141,
          "id": 5904
        },
        {
          "value": 0.092,
          "id": 5905
        },
        {
          "value": 0.314,
          "id": 5906
        },
        {
          "value": 0.315626006904488,
          "id": 5907
        }
      ],
      [
        {
          "value": "Audubon",
          "id": 5908
        },
        {
          "value": "1% above",
          "id": 5909
        },
        {
          "value": 0.329,
          "id": 5910
        },
        {
          "value": 0.16,
          "id": 5911
        },
        {
          "value": 0.116,
          "id": 5912
        },
        {
          "value": 0.284,
          "id": 5913
        },
        {
          "value": 0.315626006904488,
          "id": 5914
        }
      ],
      [
        {
          "value": "Audrain",
          "id": 5915
        },
        {
          "value": "3% above",
          "id": 5916
        },
        {
          "value": 0.347,
          "id": 5917
        },
        {
          "value": 0.213,
          "id": 5918
        },
        {
          "value": 0.156,
          "id": 5919
        },
        {
          "value": 0.274,
          "id": 5920
        },
        {
          "value": 0.315626006904488,
          "id": 5921
        }
      ],
      [
        {
          "value": "Atoka",
          "id": 5922
        },
        {
          "value": "4% above",
          "id": 5923
        },
        {
          "value": 0.359,
          "id": 5924
        },
        {
          "value": 0.234,
          "id": 5925
        },
        {
          "value": 0.177,
          "id": 5926
        },
        {
          "value": 0.298,
          "id": 5927
        },
        {
          "value": 0.315626006904488,
          "id": 5928
        }
      ],
      [
        {
          "value": "Atchison",
          "id": 5929
        },
        {
          "value": "1% below",
          "id": 5930
        },
        {
          "value": 0.313,
          "id": 5931
        },
        {
          "value": 0.184,
          "id": 5932
        },
        {
          "value": 0.144,
          "id": 5933
        },
        {
          "value": 0.335,
          "id": 5934
        },
        {
          "value": 0.315626006904488,
          "id": 5935
        }
      ],
      [
        {
          "value": "Atchison",
          "id": 5936
        },
        {
          "value": "2% below",
          "id": 5937
        },
        {
          "value": 0.299,
          "id": 5938
        },
        {
          "value": 0.193,
          "id": 5939
        },
        {
          "value": 0.167,
          "id": 5940
        },
        {
          "value": 0.284,
          "id": 5941
        },
        {
          "value": 0.315626006904488,
          "id": 5942
        }
      ],
      [
        {
          "value": "Ashland",
          "id": 5943
        },
        {
          "value": "4% below",
          "id": 5944
        },
        {
          "value": 0.278,
          "id": 5945
        },
        {
          "value": 0.198,
          "id": 5946
        },
        {
          "value": 0.147,
          "id": 5947
        },
        {
          "value": 0.228,
          "id": 5948
        },
        {
          "value": 0.315626006904488,
          "id": 5949
        }
      ],
      [
        {
          "value": "Arthur",
          "id": 5950
        },
        {
          "value": "2% below",
          "id": 5951
        },
        {
          "value": 0.298,
          "id": 5952
        },
        {
          "value": 0.149,
          "id": 5953
        },
        {
          "value": 0.153,
          "id": 5954
        },
        {
          "value": 0.294,
          "id": 5955
        },
        {
          "value": 0.315626006904488,
          "id": 5956
        }
      ],
      [
        {
          "value": "Appanoose",
          "id": 5957
        },
        {
          "value": "on par with",
          "id": 5958
        },
        {
          "value": 0.315,
          "id": 5959
        },
        {
          "value": 0.174,
          "id": 5960
        },
        {
          "value": 0.144,
          "id": 5961
        },
        {
          "value": 0.335,
          "id": 5962
        },
        {
          "value": 0.315626006904488,
          "id": 5963
        }
      ],
      [
        {
          "value": "Antelope",
          "id": 5964
        },
        {
          "value": "5% below",
          "id": 5965
        },
        {
          "value": 0.271,
          "id": 5966
        },
        {
          "value": 0.145,
          "id": 5967
        },
        {
          "value": 0.119,
          "id": 5968
        },
        {
          "value": 0.279,
          "id": 5969
        },
        {
          "value": 0.315626006904488,
          "id": 5970
        }
      ],
      [
        {
          "value": "Anoka",
          "id": 5971
        },
        {
          "value": "2% below",
          "id": 5972
        },
        {
          "value": 0.296,
          "id": 5973
        },
        {
          "value": 0.161,
          "id": 5974
        },
        {
          "value": 0.086,
          "id": 5975
        },
        {
          "value": 0.194,
          "id": 5976
        },
        {
          "value": 0.315626006904488,
          "id": 5977
        }
      ],
      [
        {
          "value": "Andrew",
          "id": 5978
        },
        {
          "value": "4% below",
          "id": 5979
        },
        {
          "value": 0.279,
          "id": 5980
        },
        {
          "value": 0.179,
          "id": 5981
        },
        {
          "value": 0.125,
          "id": 5982
        },
        {
          "value": 0.319,
          "id": 5983
        },
        {
          "value": 0.315626006904488,
          "id": 5984
        }
      ],
      [
        {
          "value": "Anderson",
          "id": 5985
        },
        {
          "value": "on par with",
          "id": 5986
        },
        {
          "value": 0.315,
          "id": 5987
        },
        {
          "value": 0.173,
          "id": 5988
        },
        {
          "value": 0.147,
          "id": 5989
        },
        {
          "value": 0.285,
          "id": 5990
        },
        {
          "value": 0.315626006904488,
          "id": 5991
        }
      ],
      [
        {
          "value": "Allen",
          "id": 5992
        },
        {
          "value": "2% above",
          "id": 5993
        },
        {
          "value": 0.344,
          "id": 5994
        },
        {
          "value": 0.174,
          "id": 5995
        },
        {
          "value": 0.151,
          "id": 5996
        },
        {
          "value": 0.298,
          "id": 5997
        },
        {
          "value": 0.315626006904488,
          "id": 5998
        }
      ],
      [
        {
          "value": "Allamakee",
          "id": 5999
        },
        {
          "value": "2% below",
          "id": 6000
        },
        {
          "value": 0.303,
          "id": 6001
        },
        {
          "value": 0.164,
          "id": 6002
        },
        {
          "value": 0.123,
          "id": 6003
        },
        {
          "value": 0.248,
          "id": 6004
        },
        {
          "value": 0.315626006904488,
          "id": 6005
        }
      ],
      [
        {
          "value": "Alfalfa",
          "id": 6006
        },
        {
          "value": "3% above",
          "id": 6007
        },
        {
          "value": 0.347,
          "id": 6008
        },
        {
          "value": 0.194,
          "id": 6009
        },
        {
          "value": 0.142,
          "id": 6010
        },
        {
          "value": 0.399,
          "id": 6011
        },
        {
          "value": 0.315626006904488,
          "id": 6012
        }
      ],
      [
        {
          "value": "Alexander",
          "id": 6013
        },
        {
          "value": "on par with",
          "id": 6014
        },
        {
          "value": 0.324,
          "id": 6015
        },
        {
          "value": 0.238,
          "id": 6016
        },
        {
          "value": 0.224,
          "id": 6017
        },
        {
          "value": 0.296,
          "id": 6018
        },
        {
          "value": 0.315626006904488,
          "id": 6019
        }
      ],
      [
        {
          "value": "Aitkin",
          "id": 6020
        },
        {
          "value": "5% below",
          "id": 6021
        },
        {
          "value": 0.271,
          "id": 6022
        },
        {
          "value": 0.16,
          "id": 6023
        },
        {
          "value": 0.112,
          "id": 6024
        },
        {
          "value": 0.287,
          "id": 6025
        },
        {
          "value": 0.315626006904488,
          "id": 6026
        }
      ],
      [
        {
          "value": "Adams",
          "id": 6027
        },
        {
          "value": "1% below",
          "id": 6028
        },
        {
          "value": 0.313,
          "id": 6029
        },
        {
          "value": 0.16,
          "id": 6030
        },
        {
          "value": 0.121,
          "id": 6031
        },
        {
          "value": 0.25,
          "id": 6032
        },
        {
          "value": 0.315626006904488,
          "id": 6033
        }
      ],
      [
        {
          "value": "Adams",
          "id": 6034
        },
        {
          "value": "1% above",
          "id": 6035
        },
        {
          "value": 0.333,
          "id": 6036
        },
        {
          "value": 0.153,
          "id": 6037
        },
        {
          "value": 0.067,
          "id": 6038
        },
        {
          "value": 0.323,
          "id": 6039
        },
        {
          "value": 0.315626006904488,
          "id": 6040
        }
      ],
      [
        {
          "value": "Adams",
          "id": 6041
        },
        {
          "value": "2% below",
          "id": 6042
        },
        {
          "value": 0.297,
          "id": 6043
        },
        {
          "value": 0.173,
          "id": 6044
        },
        {
          "value": 0.121,
          "id": 6045
        },
        {
          "value": 0.252,
          "id": 6046
        },
        {
          "value": 0.315626006904488,
          "id": 6047
        }
      ],
      [
        {
          "value": "Adams",
          "id": 6048
        },
        {
          "value": "on par with",
          "id": 6049
        },
        {
          "value": 0.323,
          "id": 6050
        },
        {
          "value": 0.158,
          "id": 6051
        },
        {
          "value": 0.116,
          "id": 6052
        },
        {
          "value": 0.284,
          "id": 6053
        },
        {
          "value": 0.315626006904488,
          "id": 6054
        }
      ],
      [
        {
          "value": "Adams",
          "id": 6055
        },
        {
          "value": "3% above",
          "id": 6056
        },
        {
          "value": 0.347,
          "id": 6057
        },
        {
          "value": 0.164,
          "id": 6058
        },
        {
          "value": 0.13,
          "id": 6059
        },
        {
          "value": 0.24,
          "id": 6060
        },
        {
          "value": 0.315626006904488,
          "id": 6061
        }
      ],
      [
        {
          "value": "Adair",
          "id": 6062
        },
        {
          "value": "6% above",
          "id": 6063
        },
        {
          "value": 0.382,
          "id": 6064
        },
        {
          "value": 0.293,
          "id": 6065
        },
        {
          "value": 0.191,
          "id": 6066
        },
        {
          "value": 0.383,
          "id": 6067
        },
        {
          "value": 0.315626006904488,
          "id": 6068
        }
      ],
      [
        {
          "value": "Adair",
          "id": 6069
        },
        {
          "value": "2% below",
          "id": 6070
        },
        {
          "value": 0.303,
          "id": 6071
        },
        {
          "value": 0.235,
          "id": 6072
        },
        {
          "value": 0.178,
          "id": 6073
        },
        {
          "value": 0.276,
          "id": 6074
        },
        {
          "value": 0.315626006904488,
          "id": 6075
        }
      ],
      [
        {
          "value": "Adair",
          "id": 6076
        },
        {
          "value": "1% below",
          "id": 6077
        },
        {
          "value": 0.31,
          "id": 6078
        },
        {
          "value": 0.149,
          "id": 6079
        },
        {
          "value": 0.114,
          "id": 6080
        },
        {
          "value": 0.297,
          "id": 6081
        },
        {
          "value": 0.315626006904488,
          "id": 6082
        }
      ]
    ]
  }
}

//  OpenAI variables
const openai_key = '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';
const openai_org_id = 'org-6pqTIBmFdIUTbxIy0f7FjULZ';
const openai_sample_payload = {
  "model": "text-davinci-003",
  "prompt": "A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.[1] Neutron stars are the smallest and densest stellar objects, excluding black holes and hypothetical white holes, quark stars, and strange stars.[2] Neutron stars have a radius on the order of 10 kilometres (6.2 mi) and a mass of about 1.4 solar masses.[3] They result from the supernova explosion of a massive star, combined with gravitational collapse, that compresses the core past white dwarf star density to that of atomic nuclei.\n\nTl;dr",
  "max_tokens": 120,
  "temperature": 0.7,
  "top_p": 1.0,
  "frequency_penalty":0.0,
  "presence_penalty":1
}

//  Function to convert a Tableau data frame, into an input for Narrative Science's API
const parseForNarrativeScience = (rawData) => {

  let dims = [],
      measures = [],
      rows =[];

  //  Loop through the metadata
  rawData.columns.forEach( column => {
    if (column.datatype === "float") {
      measures.push({
        "name": column.fieldName,
        "id": `col:${column.index}`,
        "format": "number",
        "is_percentage": false,
        "format_options": {
          "decimal_places": "dynamic",
          "label": "US Dollar ($1,234.00)",
          "money_locale": "USD",
          "negative": "minus",
          "spell_out": true,
          "suffix": "_word"
        },
        "up_sentiment": "neutral",
        "cumulative": "add_values"
      });
    } else if (column.datatype === "string") {
      dims.push({
        "dataType": "string",
        "name": column.fieldName,
        "id": `col:${column.index}`,
        "labels": [
          {
            "singular": "entity",
            "plural": "entities",
            "id": "phf8"
          }
        ]
      })
      
    }
  })

  //  Loop through the summary data
  rawData.data.forEach( row => {
    
  })

  //  Create the options payload for narrative science
  const ns_options = {
    "api_version": 2,
    "configuration": {
      "authoring": {
        "format": "paragraph",
        "verbosity": "high",
        "is_linked_to_chart": false,
        "run_support_story": false,
        "selection_made": true,
        "use_derived_measure_order": true,
        "num_drilldown_sections": 3,
        "custom_content": {
          "header": {
            "content": []
          },
          "footer": {
            "content": []
          },
          "summaries": {
            "content": []
          },
          "summary0": {
            "content": []
          },
          "summary1": {
            "content": []
          },
          "summary2": {
            "content": []
          },
          "drilldowns": {
            "content": []
          },
          "drilldown0": {
            "content": []
          },
          "drilldown1": {
            "content": []
          },
          "drilldown2": {
            "content": []
          }
        }
      },
      "analytics": {
        "distribution": {
          "id": "distribution",
          "index": 0,
          "enabled": true,
          "label": "Distribution",
          "requiresMulti": "none"
        },
        "correlation": {
          "id": "correlation",
          "index": 1,
          "enabled": true,
          "label": "Correlation",
          "requiresMulti": "measure"
        },
        "clustering": {
          "id": "clustering",
          "index": 2,
          "enabled": true,
          "label": "Clustering",
          "requiresMulti": "none"
        }
      },
      "relationships": {},
      "contributors": {
        "drivers": [
          {
            "threshold": 3,
            "threshold_type": "static_max_number"
          }
        ],
        "offsetters": [
          {
            "threshold": 3,
            "threshold_type": "static_max_number"
          }
        ],
        "detail_secondary_dimensions": false
      },
      "drivers": {},
      "derived_measures": {}
    },
    "metadata": {
      "valueType": "discrete",
      "platform": "tableau",
      "apiKey": user_key,
      "flags": {
        "useFunctions": true,
        "useConditionals": true
      }
    },
    "data": {
      "dimensions": dims,
      "measures": measures,
      "rows": rows
    }
  }

  return rawData;
}

//  Function to convert the output from Narrative Science API, into a prompt for OpenAI's API
const parseForOpenAI = (htmlData) => {

  //  Use regex to strip out all HTML tags
  const promptData = htmlData.replace(/<[^>]*>/g, '');

  //  Return an object for OpenAI
  return {
    "model": "text-davinci-003",
    "prompt": `${promptData}\n\nTl;dr`,
    "max_tokens": 60,
    "temperature": 0.7,
    "top_p": 1.0,
    "frequency_penalty":0.0,
    "presence_penalty":1
  }

}

export class DashboardExtension extends React.Component {

  //  Look for any saved settings, set them to the state
  constructor(props) {
    super(props);
    //  Set default config values 
    this.state = Object.assign(
      {
        isSaving: false,
        settingsLoaded: false,
        dataTable: null,
        body: null
      },
      TableauHelper.defaultSettings()
    );
  }

  configureExtension() {

    let thisComponent = this;
    
    //  Determine the config popup's url
    const url = window.location.origin + "/config.html";
    
    //  Initialize the extension's config popup     
    tableau.extensions.ui.displayDialogAsync(url, "", { height: 500, width:400 } ).then((closePayload) => {
      thisComponent.setState(TableauHelper.getSettings());
    }).catch((error) => {
      // One expected error condition is when the popup is closed by the user (meaning the user
      // clicks the 'X' in the top right of the dialog).  This can be checked for like so:
      switch (error.errorCode) {
        case tableau.ErrorCodes.DialogClosedByUser:
          console.log("Config popup was closed by user");
          break;
        default:
          console.log(error.message);
      }
    });
  }

  //  Run when the component first mounts
  componentDidMount() {

    //  Save a reference to this
    let thisComponent = this;

    //  Function that takes the configuration settings, and fetches data from the specified worksheet
    const processData = async () => {
      
      //  Load any saved settings
      let settings = TableauHelper.getSettings();

      //  If a worksheet was specified in the config, fetch the dataTable for it
      if (settings.selectedWorksheet) {

        //  Fetch the raw data from a worksheet
        const rawData = await TableauHelper.getData(settings.selectedWorksheet);

        //  Convert the Tableau data table into a payload for Narrative Science
        settings.dataTable = parseForNarrativeScience(rawData);

        //  Make the first API call, to narrative science
        const config1 = {
          'method': 'POST',
          'body': JSON.stringify(settings.dataTable)
        }
        const ns_resp = await fetch(api_url, config1);
        const ns_data = await ns_resp.text();

        //  Convert the Narrative Science output (html) into a prompt for OpenAI
        const openai_prompt = parseForOpenAI(ns_data);

        //  Make the next API call, to OpenAI
        const openai_url = 'https://api.openai.com/v1/completions';
        const config2 = {
          'method': 'POST',
          'headers': {
            'Authorization': `Bearer ${openai_key}`,
            'organization': openai_org_id,
            'Content-Type': 'application/json'
          },
          'body': JSON.stringify(openai_prompt)
        };
        const openai_response = await fetch(openai_url, config2);

        //  Parse the output from OpenAI, and grab just the text to display
        const openai_data = JSON.parse(await openai_response.text());
        const openai_text = openai_data.choices[0].text;
        settings.body = openai_text;

        console.log('Success: used Narrative Science & OpenAI to summarize your Viz')
      }

      //  Update the state
      thisComponent.setState(settings);
    }

    //  Initialize the extension
    tableau.extensions.initializeAsync({"configure": this.configureExtension}).then(function () {

      processData();

      //  Watch for updates to settings
      tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, (settingsEvent) => {
        processData();
      });
    });
  }

  //  HTML to render for this component
   render() {

    //  Has the extension been configured?
    let content;
    if (this.state.body) {
      content = this.state.body;
      //  
    } else {
      content = <div>This extension is not yet configured, <TextLink kind="standalone" onClick={this.configureExtension }>click here</TextLink> to setup.</div>
    }

    //  Render the output
    return  <div>
              { content }
            </div>
  }
}