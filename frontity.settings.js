const settings = {
  "name": "blog",
  "state": {
    "frontity": {
      "url": "https://jatinunmatch.com/blog/",
      "title": "JatinUnMatch Blog",
      "description": "A React powered WordPress Blog"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/blog/about/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://jatinunmatch.com/blog/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
