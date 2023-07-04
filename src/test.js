if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log("Latitud: " + lat + ", Longitud: " + lon)
    })
  } else {
    console.log("La geolocalización no es compatible en este navegador.")
  }