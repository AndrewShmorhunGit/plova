import { useEffect, useState } from "react";
import locationMarker from "../images/common/location2.svg";
import arrowDown from "../images/common/dropdownBlack.svg";
import useGeolocation from "react-hook-geolocation";
export const MainHeaderLocation = ({
  changeLocationModal,
  setChangeLocationModal,
}: {
  changeLocationModal: boolean;
  setChangeLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const [scroll, setScroll] = useState(true);
  const location = useGeolocation();
  const address: string = `lat: ${location.latitude}, lng: ${location.longitude}`;
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY < 50 && true;
      return setScroll(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="#scroll"
      className={!scroll ? "header-user-address-content center" : "hide"}
      onClick={() => setChangeLocationModal(true)}
    >
      <img
        src={locationMarker}
        alt="location marker"
        className="header-user-address-content-location-icon"
      />
      <div
        data-v-7ff8f296=""
        data-test-id="user-address-text"
        className="header-user-address-content-text"
      >
        <span className="address-content-text">
          {`${address.length < 20 ? address : address.slice(0, 20) + "..."}`}
        </span>
      </div>
      <img
        data-v-7ff8f296=""
        src={arrowDown}
        alt="arrow down"
        role="presentation"
        className="header-user-address__content__arrow"
      />
    </div>
  );
};
