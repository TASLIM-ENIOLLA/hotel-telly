export const pageParams = {
  "populate": {
    "heroSection": {
      "populate": {
        "image": {
          "fields": [
            "url"
          ]
        },
        "cta": {
          "populate": "*"
        }
      }
    }, 
    "welcomeSection": {
      "populate": {
        "cta": {
          "populate": "*"
        }
      }
    },
    "offersSection": {
      "populate": {
        "offers": {
          "populate": {
            "svg": {
              "fields": [
                "url"
              ]
            }
          }
        },
        "image": {
          "fields": [
            "url"
          ]
        },
        "cta": {
          "populate": "*"
        },
      }
    },
    "achievementsSections": {
      "populate": {
        "achievements": {
          "populate": "*"
        }
      }
    },
    "roomsSection": {
      "populate": {
        "roomCards": {
          "populate": {
            "image": {
              "fields": [
                "url"
              ]
            }
          }
        },
        "cta": {
          "populate": "*"
        }
      }
    },
    "testimonialsSection": {
      "populate": {
        "testimonials": {
          "populate": "*"
        }
      }
    },
    "contactSection": {
      "populate": {
        "contacts": {
          "populate": {
            "link": {
              "populate": "*"
            }
          }
        }
      }
    },
    "newsletterSection": {
      "populate": "*"
    },
    "mediaSection": {
      "populate": "*"
    }
  }
}