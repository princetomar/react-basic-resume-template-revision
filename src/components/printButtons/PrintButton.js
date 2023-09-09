import "./PrintButton.css";
import { Component } from "react";

class PrintButton extends Component {
  printWindow = () => {
    window.print();
  };
  render() {
    return (
      <div>
        <button className="printButtonMain" onClick={this.printWindow}>
          PRINT
        </button>
      </div>
    );
  }
}

export default PrintButton;
