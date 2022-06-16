import Flippy, { FrontSide, BackSide } from "react-flippy";
import { useRef } from "react";
import "./Card.css";
import coinbase from "../image/coinbase.webp";

const Card = ({
  link,
  name,
  mobile,
  hardware,
  web,
  mobilew,
  webw,
  hardwarew,
  description,
  golink,
}) => {
  const ref = useRef();

  const showImageWeb = () => {
    if (web === null) return false;
    return true;
  };
  const showImageMobile = () => {
    if (mobile === null) return false;
    return true;
  };
  const showImageHardWare = () => {
    if (hardware === null) return false;

    return true;
  };

  return (
    <Flippy
      flipOnClick={true}
      flipDirection="horizontal" // horizontal or vertical
      ref={ref}
      id="flippy">
      <FrontSide style={{ backgroundColor: "#222222" }} id="front-side">
        <div id="header" className="row  bg-dark">
          <div className="col-sm-4">
            <img id="logo" src={link} className="img-responsive" />
          </div>
          <div id="description" className="col-md-8">
            {name}
          </div>
        </div>
        <hr class="new1" />
        <div id="information" className="col-md row">
          <div className="col-sm-12">
            <div className="row">
              {showImageWeb() && (
                <div className="col-md-4">
                  <img id="imglogo" src={web} />
                  <p id="logotext"> {webw}</p>
                </div>
              )}
              {showImageMobile() && (
                <div className="col-md-4">
                  <img id="imglogo" src={mobile} />
                  <p id="logotext"> {mobilew}</p>
                </div>
              )}
              {showImageHardWare() && (
                <div className="col-md-4">
                  <img id="imglogo" src={hardware} />
                  <p id="logotext"> {hardwarew}</p>
                </div>
              )}
            </div>
          </div>

          <div id="aciklama" className="row mt-3 ">
            {description}
          </div>
        </div>

        <div id="info" className=" col-sm-12 pt-5">
          <button
            id="button-info"
            type="button"
            className="btn btn-outline-secondary">
            More info
          </button>
        </div>
        <br></br>
        <div className="col-sm">
          <a href={golink} target="_blank">
            <button
              id="button-go"
              type="button"
              className="btn btn-outline-secondary pt-2">
              Go
            </button>
          </a>
        </div>
      </FrontSide>
      <BackSide style={{ backgroundColor: "#191919" }}>
        <div id="header" className="row" style={{ backgroundcolor: "#191919" }}>
          <div className="col-sm-4">
            <img id="logo" src={coinbase} className="img-responsive" />
          </div>
          <div id="description" className="col-md-8">
            Coinbase Wallet
          </div>
        </div>
        <span className="d-flex justify-content-start mt-3">Features</span>
        <hr class="new1" />
        <div className="row col-md-12">
          <div id="features-list" className="row col-md-11 p-1 ">
            <table>
              <tbody>
                <tr
                  id="info-list"
                  className="row d-flex justify-content-center ">
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Withdraw to bank
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Buy ETH with card
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Access to DeFi
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Explore dapps
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Swap tokens
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Buy in high volume
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Transaction limits
                  </td>
                  <td className=" d-flex justify-content-start pt-1 mt-2">
                    Multi-sig protection
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="features-icon" className="col-md-1 p-2">
            <table>
              <tbody>
                <tr>
                  <td className=" d-flex justify-content-start pt-2">❌</td>
                  <td className=" d-flex justify-content-start pt-2">❌</td>
                  <td className=" d-flex justify-content-start pt-2">✅</td>
                  <td className=" d-flex justify-content-start pt-2">✅</td>
                  <td className=" d-flex justify-content-start pt-2">✅</td>
                  <td className=" d-flex justify-content-start pt-3">❌</td>
                  <td className=" d-flex justify-content-start pt-2">✅</td>
                  <td className=" d-flex justify-content-start pt-2">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </BackSide>
    </Flippy>
  );
};

export default Card;
