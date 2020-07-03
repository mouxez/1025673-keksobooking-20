'use strict';

(function () {
  var priceToRoom = {
    low: {
      min: 0,
      max: 10000
    },
    middle: {
      min: 10000,
      max: 50000
    },
    high: {
      min: 50000,
      max: Infinity
    }
  };

  var mapFilters = window.data.mapFilters;
  var housingType = mapFilters.querySelector('#housing-type');
  var housingPrice = mapFilters.querySelector('#housing-price');
  var housingRooms = mapFilters.querySelector('#housing-rooms');
  var housingGuests = mapFilters.querySelector('#housing-guests');

  var filterHousing = function (dataElement, filterElement) {
    return filterElement.value === 'any' ? true : dataElement.toString() === filterElement.value;
  };

  var filterHousingPrice = function (dataElement, filterElement) {
    return filterElement.value === 'any' ? true : priceToRoom[filterElement.value].min <= dataElement && dataElement < priceToRoom[filterElement.value].max;
  };

  var filterHousingFeatures = function (dataElement) {
    var housingFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');

    return Array.from(housingFeatures).every(function (feature) {
      return dataElement.indexOf(feature.value) >= 0;
    });
  };

  window.filter = function (ads) {
    return ads.filter(function (element) {
      return filterHousing(element.offer.type, housingType) &&
        filterHousingPrice(element.offer.price, housingPrice) &&
        filterHousing(element.offer.rooms, housingRooms) &&
        filterHousing(element.offer.guests, housingGuests) &&
        filterHousingFeatures(element.offer.features);
    });
  };
})();
