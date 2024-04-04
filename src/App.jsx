import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div
  style={{
    backgroundColor: "#034694",
    height: 600,
    width: 796,
    margin: "auto",
    paddingTop: 40
  }}
>
  <form className="form-body" style={{ border: "2px solid #034694" }}>
    <div className="form-content">
      <img src="./assets/logo.svg" />
      <div className="first-top-div">
        <div className="input-div">
          <p className="label-names">ACCOUNT</p>
          <input
            type="text"
            name="account"
            className="account-input"
            placeholder=""
          />
        </div>
        <div className="input-div">
          <p className="label-names">INSTRUCTION TYPE</p>
          <input
            type="text"
            name="account"
            className="instructiontype-input"
            placeholder=""
          />
        </div>
        <div className="input-div gbs-div">
          <img src="./assets/Ns_sign.svg" id="signature" />
          <div className="gbs-content-div">
            <p className="label-names2">GBS SCREEN</p>
            <input
              type="text"
              name="account"
              className="gbsscreen-input"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: 10 }}
      >
        <div>
          <div className="info1">
            <p>REFERENCES: DEUTDEFF</p>
            <p>SEND: DEUTSCHE BANK AG</p>
            <p>ACCOUNT: ****************</p>
          </div>
          <div className="info2" style={{ position: "relative" }}>
            <p className="label-names">STATUS</p>
            <div className="info2-content">
              <p style={{ textDecoration: "underline" }}>RECEIVED</p>
              <p
                style={{
                  marginLeft: 30,
                  marginTop: 10,
                  textDecoration: "underline"
                }}
              >
                INTERNAL/XTERNAL
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ textDecoration: "underline" }}>AMOUNT:</p>
                <p>9, 000, 000</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ textDecoration: "underline" }}>CURRENCY:</p>
                <p>EURO</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ textDecoration: "underline" }}>PARTICIPANT:</p>
                <p>JT. MOD</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="reference-div" style={{ position: "relative" }}>
              <p className="label-names">REFERENCES CHAUS-33</p>
              <div className="reference-div-content1">
                <p style={{marginTop: "7px"}}>REC: COFTECH</p>
                <p>AGENT CLIENT: CHASE</p>
                <p>ACCOUNT: *********</p>
              </div>
            </div>
            <div
              className="user-activity-div"
              style={{ marginTop: 10, position: "relative" }}
            >
              <p className="label-names">USER ACTIVITY</p>
              <div className="reference-div-content2">
                <p>KEYED BY:</p>
                <div
                  style={{
                    marginLeft: "-20px",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <p>RELEASED BY:</p>
                  <p>22.01.24</p>
                  <p>16:35:30</p>
                </div>
                <p>CANCELLED/ MODIFIED</p>
                <div
                  style={{
                    marginLeft: "-20px",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <p>RECEIVED BY:</p>
                  <p>22.01.24</p>
                  <p>16:42:18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src="./assets/Swift_logo.svg"
              style={{ marginLeft: 50, marginTop: "-100px" }}
            />
            <div id="qr" style={{ marginLeft: 50, marginTop: 20 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 7,
          marginTop: 10
        }}
      >
        <div>
          <div className="status-div" style={{ position: "relative" }}>
            <p style={{ textDecoration: "underline" }} className="label-names">
              STATUS
            </p>
            <div style={{ border: "2px solid black", padding: 7 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: 50
                }}
              >
                <p style={{ textDecoration: "underline" }}>ISO</p>
                <p>HK:</p>
                <p>1234567890</p>
              </div>
              <p style={{ textDecoration: "underline" }}>
                NEW MATCH/ NMAT MAT.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginTop: 14, width: 450 }}>
            <p>RECIPIENT COUNTRY: USA</p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <p className="label-names">SECURTIES</p>
          <div
            style={{
              border: "2px solid black",
              width: 377,
              paddingTop: 10,
              paddingLeft: 5
            }}
          >
            <div style={{ display: "flex" }}>
              <p>REFERENCE CODE: </p>
              <input id="refernce-input" type="text" />
            </div>
            <p>DESCRIPTION: T103 CASH TRANSFER</p>
          </div>
        </div>
        <div style={{ marginTop: "-20px", position: "relative" }}>
          <p className="label-names">PROGRESS</p>
          <div style={{ border: "2px solid black", padding: 30 }}>
            <p>PRINTING DONE</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="progress-box">
                <div className="progress-bar" id="progressBar">
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                  <div className="progress-box-item" />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <button style={{ width: 27 }} onclick="printDocument()">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    </>
  )
}

export default App
