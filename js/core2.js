var logo = document.querySelector('.logo')
var notes = document.querySelectorAll('.note')
var catNames = document.querySelectorAll('.category_name')
var turnTeam = document.querySelectorAll('.player_turn')

var tour = 0
var noteClass
var playingFlag = false
var t1_flag = 0
var soundsC1 = ion.sound({
  sounds: [
    {
      alias: '2r_1c_1t',
      name: '2r_1c_1t'
    },
    {
      alias: '2r_1c_2t',
      name: '2r_1c_2t'
    },
    {
      alias: '2r_1c_3t',
      name: '2r_1c_3t'
    },
    {
      alias: '2r_1c_4t',
      name: '2r_1c_4t'
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
// var intervalId
// var xxxx = 50
// function ball(object){
//   intervalId= setInterval(() => {
//     xxxx += 1
    
//     return z
//   }, 1000) 
//   object.innerHTML = xxxx
// }
// function sttt() {
//   clearInterval(intervalId)
// }

function playNote() {
  var regExpCat = [
    /\b(\w*c1\w*)\b/g,
    /\b(\w*c2\w*)\b/g,
    /\b(\w*c3\w*)\b/g,
    /\b(\w*c4\w*)\b/g
  ]

  if (noteClass == null) {
    noteClass = this.className
    // console.log(this.firstChild)
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
      var soundName;
      playingFlag = true
      
      if(t1_flag == 0) {
        soundName = this.getAttribute('sound')
        ion.sound.play(soundName)
      }
      if(t1_flag == 1) {
        soundName = this.getAttribute('sound2')
        ion.sound.play(soundName)
      }
      if(t1_flag == 2) {
        soundName = this.getAttribute('sound3')
        ion.sound.play(soundName)
      }
      if(t1_flag == 3) {
        soundName = this.getAttribute('sound4')
        ion.sound.play(soundName)
      }
      if(t1_flag > 3) {
            return
      }

    //   intervalId = setInterval(function(){

    //     console.log("wait for me!");
     
    //  }, 1000);

      regExpCat.forEach(element => {
        if (soundName.match(element) == '1c') {
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
    }
  } else {
    if (this.getAttribute('clicked') == 'yes' && this.className == noteClass) {
      // t1_flag = t1_flag + 1
      // playingFlag = false
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
      noteClass = null
      ion.sound.stop()
      // sttt()
    }
  }
}
