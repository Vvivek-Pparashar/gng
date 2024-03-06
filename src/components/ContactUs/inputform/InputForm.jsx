import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ClockCircleTwoTone,
  HddTwoTone,
  MailTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import "leaflet/dist/leaflet.css";
import "./inputForm.css";

const InputForm = () => {
  return (
    <div className="if" id="Location">
      <div className="if-input">
        <h2>REQUEST CALL BACK</h2>
        <p>PLEASE FILL YOUR DETAILS BELOW</p>
        <div className="if-input-form">
          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <UserOutlined style={{ color: "#1677FF" }} />
              </div>
              <input placeholder="First Name" className="input" />
            </div>

            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <UserOutlined style={{ color: "#1677FF" }} />
              </div>
              <input placeholder="Last Name" className="input" />
            </div>
          </div>

          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                {/* <CommentOutlined /> */}
                <MobileTwoTone />
              </div>
              <input placeholder="Mobile No" className="input" />
            </div>

            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                {/* <MailOutlined /> */}
                <MailTwoTone />
              </div>
              <input placeholder="Email" className="input" />
            </div>
          </div>

          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                {/* <MobileOutlined /> */}
                <ClockCircleTwoTone />
              </div>
              <input type="date" className="input" />
            </div>

            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <HddTwoTone />
              </div>
              <select name="drinks" required className="input">
                <option value="" disabled selected>
                  Interested In
                </option>
                <optgroup label="Commercial">
                  <option value="GNG Mall">GNG mall</option>
                </optgroup>
                <optgroup label="Residencial">
                  <option value="mercedes">Gng Residence</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                {/* <MobileOutlined /> */}
                {/* <ClockCircleTwoTone /> */}
                <MessageTwoTone />
              </div>
              <input placeholder="Message" className="input" />
            </div>
          </div>

          <button>Contact us</button>
        </div>
      </div>
      <MapContainer
        className="markercluster-map"
        center={[30.726898, 76.652441]}
        zoom={14}
        maxZoom={17}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[30.726898, 76.652441]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InputForm;
