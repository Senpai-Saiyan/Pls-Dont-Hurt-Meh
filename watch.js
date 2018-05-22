{
  "install": {
    "include": [
      "^package\\.json$",
      "^packagee\\.json$",
      "^\\.env$"
    ]
  },
  "restart": {
    "exclude": [
      "^public/",
      "^dist/",
      "^plugins/",
      "^app/",
      "^src/",
      "^config/",
      "^commands/"
    ],
    "include": [
      "\\.js$",
      "\\.json"
    ]
  },
  "throttle": 900000
}