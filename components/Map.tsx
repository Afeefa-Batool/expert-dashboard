import { useRef, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { BiSearch } from "react-icons/bi";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import { useRouter } from "next/router";

type MapProps = {
  apiKey: string;
};

const MapComponent = ({ apiKey }: MapProps) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const autoCompleteRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      const options = {
        componentRestrictions: { country: "ng" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"],
      };
      const places = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      places.addListener("place_changed", () => {
        const place: any = places.getPlace();
        console.log(place);
        if (place) {
          const location =
            place.name + " , " + place.address_components[0].long_name || "";

          setSelectedLocation(location);
          localStorage.setItem("selectedLocation", location);
          setTimeout(() => {
            router.push("/Create-address-page");
          }, 1500);
        }
      });
    }
  }, [router]);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={12}
        />

        <form
          onSubmit={handleSearch}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
          className="input-search"
        >
          <div ref={autoCompleteRef}>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search to find address"
              ref={inputRef}
            />
          </div>

          <span style={{ marginLeft: "-36px", fontSize: "21px" }}>
            <BiSearch />
          </span>

          <button type="submit" className="skip-button">
            Skip
          </button>
        </form>
      </div>
    </>
  );
};

export default MapComponent;
