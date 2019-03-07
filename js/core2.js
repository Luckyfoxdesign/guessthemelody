var logo = document.querySelector('.logo')
var notes = document.querySelectorAll('.note')
var catNames = document.querySelectorAll('.category_name')
var turnTeam = document.querySelectorAll('.player_turn')

var tour = 0
var noteClass
var soundsC1 = ion.sound({
  sounds: [
    {
      alias: 't1-c1-n1',
      name: '1r_1c_1n_santabarbara'
    },
    {
      alias: 't1-c1-n2',
      name: '1r_1c_2n_friends'
    },
    {
      alias: 't1-c1-n3',
      name: '1r_1c_3n_igraprestolov'
    },
    {
      alias: 't1-c1-n4',
      name: '1r_1c_4n_elenandrebyata'
    },
    {
      alias: 't1-c2-n1',
      name: '1r_2c_1n_iskala'
    },
    {
      alias: 't1-c2-n2',
      name: '1r_2c_2n_hochesh'
    },
    {
      alias: 't1-c2-n3',
      name: '1r_2c_3n_spasibo'
    },
    {
      alias: 't1-c2-n4',
      name: '1r_2c_4n_romashki'
    },
    {
      alias: 't1-c3-n1',
      name: '1r_3c_1n_monetochka'
    },
    {
      alias: 't1-c3-n2',
      name: '1r_3c_2n_rozovoevino'
    },
    {
      alias: 't1-c3-n3',
      name: '1r_3c_3n_nezabudka'
    },
    {
      alias: 't1-c3-n4',
      name: '1r_3c_4n_bilanmolnia'
    },
    {
      alias: 't1-c4-n1',
      name: '1r_4c_1n_edinstvennaya'
    },
    {
      alias: 't1-c4-n2',
      name: '1r_4c_2n_cvetnastroeniya'
    },
    {
      alias: 't1-c4-n3',
      name: '1r_4c_3n_zayka'
    },
    {
      alias: 't1-c4-n4',
      name: '1r_4c_4n_sneg'
    }
  ],
  path: '../music/',
  preload: true,
  multiplay: false,
  volume: 1
})

document.addEventListener('DOMContentLoaded', hideStartScreen)

function selectTeam() {
  if (this.getAttribute('active') == 'no') {
    turnTeam.forEach(element => {
      if (element.getAttribute('active') == 'yes') {
        element.setAttribute('active', 'no')
        TweenMax.to(element.children, 1, {
          opacity: 0
        })
        this.setAttribute('active', 'yes')
      }
    })
    TweenMax.to(this.children, 1, {
      opacity: 1
    })
  }
}

function hideStartScreen() {
  notes.forEach(element => {
    element.addEventListener('click', playNote)
  })

  turnTeam.forEach(element => {
    element.addEventListener('click', selectTeam)
  })
}

function playNote() {
  var regExpCat = [
    /\b(\w*c1\w*)\b/g,
    /\b(\w*c2\w*)\b/g,
    /\b(\w*c3\w*)\b/g,
    /\b(\w*c4\w*)\b/g
  ]

  if (noteClass == null) {
    noteClass = this.className
    console.log(noteClass)
    this.setAttribute('clicked', 'yes')
    TweenMax.to(this, 0.4, {
      css: { backgroundImage: "url('../img/note_active.svg')" },
      onComplete: () => {
        TweenMax.to(this.children[0], 0.4, {
          opacity: 1
        })
      }
    })

    if (tour == 0) {
      var soundName = this.getAttribute('sound')
      console.log(soundName)
      regExpCat.forEach(element => {
        if (soundName.match(element) == 'c1') {
          catNames.forEach(el => {
            if (el.className != 'category_name category_name1') {
              el.setAttribute('active', 'no')
              TweenMax.to(el, 1.4, {
                css: {
                  backgroundColor: '#855500'
                }
              })
            }
          })
        }
        if (soundName.match(element) == 'c2') {
          catNames.forEach(el => {
            if (el.className != 'category_name category_name2') {
              el.setAttribute('active', 'no')
              TweenMax.to(el, 1.4, {
                css: {
                  backgroundColor: '#855500'
                }
              })
            }
          })
        }
        if (soundName.match(element) == 'c3') {
          catNames.forEach(el => {
            if (el.className != 'category_name category_name3') {
              el.setAttribute('active', 'no')
              TweenMax.to(el, 1.4, {
                css: {
                  backgroundColor: '#855500'
                }
              })
            }
          })
        }
        if (soundName.match(element) == 'c4') {
          catNames.forEach(el => {
            if (el.className != 'category_name category_name4') {
              el.setAttribute('active', 'no')
              TweenMax.to(el, 1.4, {
                css: {
                  backgroundColor: '#855500'
                }
              })
            }
          })
        }
      })
      ion.sound.play(soundName)
    }
  } else {
    if (this.getAttribute('clicked') == 'yes' && this.className == noteClass) {
      this.setAttribute('clicked', 'no')
      catNames.forEach(element => {
        if (element.getAttribute('active') == 'no') {
          element.setAttribute('active', 'yes')
          TweenMax.to(element, 1.4, {
            css: {
              backgroundColor: '#F99F00'
            }
          })
        }
      })
      // TweenMax.to(this, 0.4, {
      //   css: { backgroundImage: 'url("../img/note.svg")' }
      // })
      noteClass = null
      ion.sound.stop()
    }
  }
}
