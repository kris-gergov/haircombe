$(".navigation__link").on("click", function () {
  $("#navi-toggle").prop("checked", false);
});

$(".gallery__carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  arrows: true,
  dots: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 51.483585, lng: 0.019755 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    styles: CustomMapStyles,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

var CustomMapStyles = [
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        hue: "#2c2e33",
      },
      {
        saturation: 7,
      },
      {
        lightness: 19,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
      {
        saturation: "-3",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f39247",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        hue: "#ff0000",
      },
      {
        saturation: "-80",
      },
      {
        lightness: "-1",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        hue: "#ff0000",
      },
      {
        saturation: -100,
      },
      {
        lightness: 100,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        lightness: "-53",
      },
    ],
  },

  {
    featureType: "poi.school",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ff8157",
      },
      {
        lightness: "40",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ff6f00",
      },
      {
        saturation: "100",
      },
      {
        lightness: 31,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#f39247",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        saturation: -93,
      },
      {
        lightness: 31,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text",
    stylers: [
      {
        weight: "4.00",
      },
      {
        saturation: "-91",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        saturation: "1",
      },
      {
        lightness: "1",
      },
      {
        gamma: "1.00",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        saturation: "100",
      },
      {
        lightness: "10",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        lightness: "1",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        weight: "10.00",
      },
      {
        visibility: "on",
      },
      {
        lightness: "-2",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "all",
    stylers: [
      {
        saturation: "0",
      },
      {
        lightness: "10",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#f3dbc8",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        hue: "#bbc0c4",
      },
      {
        saturation: -93,
      },
      {
        lightness: -2,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        hue: "#007fff",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "14",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        hue: "#ff8c00",
      },
      {
        saturation: 100,
      },
      {
        lightness: 0,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        hue: "#007fff",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "100",
      },
      {
        visibility: "simplified",
      },
    ],
  },
];
