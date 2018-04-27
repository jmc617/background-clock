
var clockChange = window.setInterval(clock, 1000)

function clock() {
  var clock = document.getElementById('clock');
  var greeting = document.getElementById('greeting')
  var time = new Date();
  var getSeconds = time.getSeconds();
  var getMinutes = time.getMinutes();
  var getHour = time.getHours();
  var hour = hour()
  var minute = minute()
  var seconds = seconds()
  var wrapper = document.getElementById('wrapper')

  function hour() {
    if (getHour < 10) {
    return  "0"+ getHour;
    } else {
    return  getHour;
    }
  }

  function minute() {
     if (getMinutes < 10) {
    return  "0"+ getMinutes;
    } else {
    return  getMinutes;
    }
  }
  function seconds() {
    if (getSeconds < 10) {
       return "0"+ getSeconds;
     } else {
      return  getSeconds;
      }
    }
    function backgroundImg () {
      if (hour >= 24 && hour < 12 ) {
        greeting.innerHTML = "Good Morning!"
        document.body.style.backgroundImage = "url('morning.jpg')"
      } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = "Good Afternoon!"
        document.body.style.backgroundImage = "url('afternoon.jpg)"
      } else {
        greeting.innerHTML = "Good Evening!"
        document.body.style.backgroundImage = "url('evening.jpg')"
      }
    }

    function hexTime () {
      clock.innerHTML = hour +":"+ minute +":" + seconds;
      // greeting.innerHTML = hello;
      // document.body.style.backgroundImage = "url('morning.jpg')";
    }
    hexTime()
}
