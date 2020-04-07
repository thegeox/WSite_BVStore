import * as React from "react";

interface IGMapContainerProps {}

let googleMapRef: any = React.createRef<HTMLDivElement>();
const GOOGLE_MAP_API_KEY: string = "AIzaSyBVCIhFavhUtx6dfpa9-9Hz0KxkaFbGzEU";
let googleMap: any;

interface IMarker {
  lat: number;
  lng: number;
  name: string;
  label?: string;
}
const markers: IMarker[] = [
  { lat: 11.847263, lng: -86.192927, name: "Gü" },
  { lat: 11.849684, lng: -86.19883, name: "CB" },
  { lat: 11.848625, lng: -86.19852, name: "CS" }
];

const createGoogleMap = () => {
  return new window.google.maps.Map(googleMapRef.current, {
    zoom: 15,
    center: {
      lat: 11.847931,
      lng: -86.199168
    },
    disableDefaultUI: true
  });
};

const createMarker = (props: IMarker) => {
  const { lat, lng, name, label } = props;

  new window.google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: googleMap,
    label: name,
    animation: google.maps.Animation.DROP
  });
};

const GMapContainer: React.FC<IGMapContainerProps> = props => {
  React.useEffect(() => {
    const gMapScript: HTMLScriptElement = document.createElement("script");
    gMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(gMapScript);

    gMapScript.addEventListener("load", () => {
      googleMap = createGoogleMap();

      if (googleMap) {
        markers.map(m => {
          createMarker(m);
        });
      } else alert("Map object is undefined");
    });
  }, []);

  const mapStyle: any = { width: "400px", height: "300px" };

  return <div id="google-map" ref={googleMapRef} style={mapStyle}></div>;
};

export default GMapContainer;
