import "./Bg.css";
import close_red from "./assets/close.png";

function Bg() {
  return (
    <div className="bg_cont">
      <img src={close_red} className="close_red" />
      <div className="header">
        <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
        <div className="header_formats">פורמטים נתמכים : png, jpeg </div>
        <button className="upload_img_btn ">העלאת תמונה</button>
      </div>
      <div className="middle_cont">
        <div className="right-div"></div>
      </div>
    </div>
  );
}

export default Bg;
