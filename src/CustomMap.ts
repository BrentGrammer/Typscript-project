/**  This inverts the dependency of the method on classes to allow classes to 
 * opt in to being eligible as an argument to addMarker()
 * 
 * The interface requires that the class that implement it must have a property location
 * which is an object holding two number props.  As long as it has this property, it eligible
 * The class may have other attributes as well.
 */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // the type is an instance of the google Map class
  private googleMap: google.maps.Map;

  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // as long as the argument passed in satisfies and is of type Mappable interface, it can be consumed by this method 
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}