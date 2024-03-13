import { useState } from "react";
import "./App.css";

function App() {
  const [col1, setCol1] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col2, setCol2] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col3, setCol3] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col4, setCol4] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col5, setCol5] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col6, setCol6] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col7, setCol7] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [col8, setCol8] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [col, setCol] = useState("PORTD");
  const [row, setRow] = useState("PORTB");
  const [delay, setDelay] = useState("1");
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <div className="led_matrix">
            {/* the first line */}
            <div
              className="span"
              style={{
                backgroundColor: col1[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[0]) {
                  setCol1([
                    0,
                    col1[1],
                    col1[2],
                    col1[3],
                    col1[4],
                    col1[5],
                    col1[6],
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  1,
                  col1[1],
                  col1[2],
                  col1[3],
                  col1[4],
                  col1[5],
                  col1[6],
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[1]) {
                  setCol1([
                    col1[0],
                    0,
                    col1[2],
                    col1[3],
                    col1[4],
                    col1[5],
                    col1[6],
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  1,
                  col1[2],
                  col1[3],
                  col1[4],
                  col1[5],
                  col1[6],
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[2]) {
                  setCol1([
                    col1[0],
                    col1[1],
                    0,
                    col1[3],
                    col1[4],
                    col1[5],
                    col1[6],
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  col1[1],
                  1,
                  col1[3],
                  col1[4],
                  col1[5],
                  col1[6],
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[3]) {
                  setCol1([
                    col1[0],
                    col1[1],
                    col1[2],
                    0,
                    col1[4],
                    col1[5],
                    col1[6],
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  col1[1],
                  col1[2],
                  1,
                  col1[4],
                  col1[5],
                  col1[6],
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[4]) {
                  setCol1([
                    col1[0],
                    col1[1],
                    col1[2],
                    col1[3],
                    0,
                    col1[5],
                    col1[6],
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  col1[1],
                  col1[2],
                  col1[3],
                  1,
                  col1[5],
                  col1[6],
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[5]) {
                  setCol1([
                    col1[0],
                    col1[1],
                    col1[2],
                    col1[3],
                    col1[4],
                    0,
                    col1[6],
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  col1[1],
                  col1[2],
                  col1[3],
                  col1[4],
                  1,
                  col1[6],
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[6]) {
                  setCol1([
                    col1[0],
                    col1[1],
                    col1[2],
                    col1[3],
                    col1[4],
                    col1[5],
                    0,
                    col1[7],
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  col1[1],
                  col1[2],
                  col1[3],
                  col1[4],
                  col1[5],
                  1,
                  col1[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col1[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col1[7]) {
                  setCol1([
                    col1[0],
                    col1[1],
                    col1[2],
                    col1[3],
                    col1[4],
                    col1[5],
                    col1[6],
                    0,
                  ]);
                  return;
                }
                setCol1([
                  col1[0],
                  col1[1],
                  col1[2],
                  col1[3],
                  col1[4],
                  col1[5],
                  col1[6],
                  1,
                ]);
              }}
            ></div>

            {/* the second line */}
            <div
              className="span"
              style={{
                backgroundColor: col2[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[0]) {
                  setCol2([
                    0,
                    col2[1],
                    col2[2],
                    col2[3],
                    col2[4],
                    col2[5],
                    col2[6],
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  1,
                  col2[1],
                  col2[2],
                  col2[3],
                  col2[4],
                  col2[5],
                  col2[6],
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[1]) {
                  setCol2([
                    col2[0],
                    0,
                    col2[2],
                    col2[3],
                    col2[4],
                    col2[5],
                    col2[6],
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  1,
                  col2[2],
                  col2[3],
                  col2[4],
                  col2[5],
                  col2[6],
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[2]) {
                  setCol2([
                    col2[0],
                    col2[1],
                    0,
                    col2[3],
                    col2[4],
                    col2[5],
                    col2[6],
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  col2[1],
                  1,
                  col2[3],
                  col2[4],
                  col2[5],
                  col2[6],
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[3]) {
                  setCol2([
                    col2[0],
                    col2[1],
                    col2[2],
                    0,
                    col2[4],
                    col2[5],
                    col2[6],
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  col2[1],
                  col2[2],
                  1,
                  col2[4],
                  col2[5],
                  col2[6],
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[4]) {
                  setCol2([
                    col2[0],
                    col2[1],
                    col2[2],
                    col2[3],
                    0,
                    col2[5],
                    col2[6],
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  col2[1],
                  col2[2],
                  col2[3],
                  1,
                  col2[5],
                  col2[6],
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[5]) {
                  setCol2([
                    col2[0],
                    col2[1],
                    col2[2],
                    col2[3],
                    col2[4],
                    0,
                    col2[6],
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  col2[1],
                  col2[2],
                  col2[3],
                  col2[4],
                  1,
                  col2[6],
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[6]) {
                  setCol2([
                    col2[0],
                    col2[1],
                    col2[2],
                    col2[3],
                    col2[4],
                    col2[5],
                    0,
                    col2[7],
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  col2[1],
                  col2[2],
                  col2[3],
                  col2[4],
                  col2[5],
                  1,
                  col2[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col2[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col2[7]) {
                  setCol2([
                    col2[0],
                    col2[1],
                    col2[2],
                    col2[3],
                    col2[4],
                    col2[5],
                    col2[6],
                    0,
                  ]);
                  return;
                }
                setCol2([
                  col2[0],
                  col2[1],
                  col2[2],
                  col2[3],
                  col2[4],
                  col2[5],
                  col2[6],
                  1,
                ]);
              }}
            ></div>

            {/* the Third line */}
            <div
              className="span"
              style={{
                backgroundColor: col3[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[0]) {
                  setCol3([
                    0,
                    col3[1],
                    col3[2],
                    col3[3],
                    col3[4],
                    col3[5],
                    col3[6],
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  1,
                  col3[1],
                  col3[2],
                  col3[3],
                  col3[4],
                  col3[5],
                  col3[6],
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[1]) {
                  setCol3([
                    col3[0],
                    0,
                    col3[2],
                    col3[3],
                    col3[4],
                    col3[5],
                    col3[6],
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  1,
                  col3[2],
                  col3[3],
                  col3[4],
                  col3[5],
                  col3[6],
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[2]) {
                  setCol3([
                    col3[0],
                    col3[1],
                    0,
                    col3[3],
                    col3[4],
                    col3[5],
                    col3[6],
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  col3[1],
                  1,
                  col3[3],
                  col3[4],
                  col3[5],
                  col3[6],
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[3]) {
                  setCol3([
                    col3[0],
                    col3[1],
                    col3[2],
                    0,
                    col3[4],
                    col3[5],
                    col3[6],
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  col3[1],
                  col3[2],
                  1,
                  col3[4],
                  col3[5],
                  col3[6],
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[4]) {
                  setCol3([
                    col3[0],
                    col3[1],
                    col3[2],
                    col3[3],
                    0,
                    col3[5],
                    col3[6],
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  col3[1],
                  col3[2],
                  col3[3],
                  1,
                  col3[5],
                  col3[6],
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[5]) {
                  setCol3([
                    col3[0],
                    col3[1],
                    col3[2],
                    col3[3],
                    col3[4],
                    0,
                    col3[6],
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  col3[1],
                  col3[2],
                  col3[3],
                  col3[4],
                  1,
                  col3[6],
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[6]) {
                  setCol3([
                    col3[0],
                    col3[1],
                    col3[2],
                    col3[3],
                    col3[4],
                    col3[5],
                    0,
                    col3[7],
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  col3[1],
                  col3[2],
                  col3[3],
                  col3[4],
                  col3[5],
                  1,
                  col3[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col3[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col3[7]) {
                  setCol3([
                    col3[0],
                    col3[1],
                    col3[2],
                    col3[3],
                    col3[4],
                    col3[5],
                    col3[6],
                    0,
                  ]);
                  return;
                }
                setCol3([
                  col3[0],
                  col3[1],
                  col3[2],
                  col3[3],
                  col3[4],
                  col3[5],
                  col3[6],
                  1,
                ]);
              }}
            ></div>

            {/* the fourth line */}
            <div
              className="span"
              style={{
                backgroundColor: col4[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[0]) {
                  setCol4([
                    0,
                    col4[1],
                    col4[2],
                    col4[3],
                    col4[4],
                    col4[5],
                    col4[6],
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  1,
                  col4[1],
                  col4[2],
                  col4[3],
                  col4[4],
                  col4[5],
                  col4[6],
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[1]) {
                  setCol4([
                    col4[0],
                    0,
                    col4[2],
                    col4[3],
                    col4[4],
                    col4[5],
                    col4[6],
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  1,
                  col4[2],
                  col4[3],
                  col4[4],
                  col4[5],
                  col4[6],
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[2]) {
                  setCol4([
                    col4[0],
                    col4[1],
                    0,
                    col4[3],
                    col4[4],
                    col4[5],
                    col4[6],
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  col4[1],
                  1,
                  col4[3],
                  col4[4],
                  col4[5],
                  col4[6],
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[3]) {
                  setCol4([
                    col4[0],
                    col4[1],
                    col4[2],
                    0,
                    col4[4],
                    col4[5],
                    col4[6],
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  col4[1],
                  col4[2],
                  1,
                  col4[4],
                  col4[5],
                  col4[6],
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[4]) {
                  setCol4([
                    col4[0],
                    col4[1],
                    col4[2],
                    col4[3],
                    0,
                    col4[5],
                    col4[6],
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  col4[1],
                  col4[2],
                  col4[3],
                  1,
                  col4[5],
                  col4[6],
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[5]) {
                  setCol4([
                    col4[0],
                    col4[1],
                    col4[2],
                    col4[3],
                    col4[4],
                    0,
                    col4[6],
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  col4[1],
                  col4[2],
                  col4[3],
                  col4[4],
                  1,
                  col4[6],
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[6]) {
                  setCol4([
                    col4[0],
                    col4[1],
                    col4[2],
                    col4[3],
                    col4[4],
                    col4[5],
                    0,
                    col4[7],
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  col4[1],
                  col4[2],
                  col4[3],
                  col4[4],
                  col4[5],
                  1,
                  col4[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col4[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col4[7]) {
                  setCol4([
                    col4[0],
                    col4[1],
                    col4[2],
                    col4[3],
                    col4[4],
                    col4[5],
                    col4[6],
                    0,
                  ]);
                  return;
                }
                setCol4([
                  col4[0],
                  col4[1],
                  col4[2],
                  col4[3],
                  col4[4],
                  col4[5],
                  col4[6],
                  1,
                ]);
              }}
            ></div>

            {/* the Fifth line */}
            <div
              className="span"
              style={{
                backgroundColor: col5[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[0]) {
                  setCol5([
                    0,
                    col5[1],
                    col5[2],
                    col5[3],
                    col5[4],
                    col5[5],
                    col5[6],
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  1,
                  col5[1],
                  col5[2],
                  col5[3],
                  col5[4],
                  col5[5],
                  col5[6],
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[1]) {
                  setCol5([
                    col5[0],
                    0,
                    col5[2],
                    col5[3],
                    col5[4],
                    col5[5],
                    col5[6],
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  1,
                  col5[2],
                  col5[3],
                  col5[4],
                  col5[5],
                  col5[6],
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[2]) {
                  setCol5([
                    col5[0],
                    col5[1],
                    0,
                    col5[3],
                    col5[4],
                    col5[5],
                    col5[6],
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  col5[1],
                  1,
                  col5[3],
                  col5[4],
                  col5[5],
                  col5[6],
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[3]) {
                  setCol5([
                    col5[0],
                    col5[1],
                    col5[2],
                    0,
                    col5[4],
                    col5[5],
                    col5[6],
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  col5[1],
                  col5[2],
                  1,
                  col5[4],
                  col5[5],
                  col5[6],
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[4]) {
                  setCol5([
                    col5[0],
                    col5[1],
                    col5[2],
                    col5[3],
                    0,
                    col5[5],
                    col5[6],
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  col5[1],
                  col5[2],
                  col5[3],
                  1,
                  col5[5],
                  col5[6],
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[5]) {
                  setCol5([
                    col5[0],
                    col5[1],
                    col5[2],
                    col5[3],
                    col5[4],
                    0,
                    col5[6],
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  col5[1],
                  col5[2],
                  col5[3],
                  col5[4],
                  1,
                  col5[6],
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[6]) {
                  setCol5([
                    col5[0],
                    col5[1],
                    col5[2],
                    col5[3],
                    col5[4],
                    col5[5],
                    0,
                    col5[7],
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  col5[1],
                  col5[2],
                  col5[3],
                  col5[4],
                  col5[5],
                  1,
                  col5[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col5[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col5[7]) {
                  setCol5([
                    col5[0],
                    col5[1],
                    col5[2],
                    col5[3],
                    col5[4],
                    col5[5],
                    col5[6],
                    0,
                  ]);
                  return;
                }
                setCol5([
                  col5[0],
                  col5[1],
                  col5[2],
                  col5[3],
                  col5[4],
                  col5[5],
                  col5[6],
                  1,
                ]);
              }}
            ></div>

            {/* the sixth line */}
            <div
              className="span"
              style={{
                backgroundColor: col6[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[0]) {
                  setCol6([
                    0,
                    col6[1],
                    col6[2],
                    col6[3],
                    col6[4],
                    col6[5],
                    col6[6],
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  1,
                  col6[1],
                  col6[2],
                  col6[3],
                  col6[4],
                  col6[5],
                  col6[6],
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[1]) {
                  setCol6([
                    col6[0],
                    0,
                    col6[2],
                    col6[3],
                    col6[4],
                    col6[5],
                    col6[6],
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  1,
                  col6[2],
                  col6[3],
                  col6[4],
                  col6[5],
                  col6[6],
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[2]) {
                  setCol6([
                    col6[0],
                    col6[1],
                    0,
                    col6[3],
                    col6[4],
                    col6[5],
                    col6[6],
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  col6[1],
                  1,
                  col6[3],
                  col6[4],
                  col6[5],
                  col6[6],
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[3]) {
                  setCol6([
                    col6[0],
                    col6[1],
                    col6[2],
                    0,
                    col6[4],
                    col6[5],
                    col6[6],
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  col6[1],
                  col6[2],
                  1,
                  col6[4],
                  col6[5],
                  col6[6],
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[4]) {
                  setCol6([
                    col6[0],
                    col6[1],
                    col6[2],
                    col6[3],
                    0,
                    col6[5],
                    col6[6],
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  col6[1],
                  col6[2],
                  col6[3],
                  1,
                  col6[5],
                  col6[6],
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[5]) {
                  setCol6([
                    col6[0],
                    col6[1],
                    col6[2],
                    col6[3],
                    col6[4],
                    0,
                    col6[6],
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  col6[1],
                  col6[2],
                  col6[3],
                  col6[4],
                  1,
                  col6[6],
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[6]) {
                  setCol6([
                    col6[0],
                    col6[1],
                    col6[2],
                    col6[3],
                    col6[4],
                    col6[5],
                    0,
                    col6[7],
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  col6[1],
                  col6[2],
                  col6[3],
                  col6[4],
                  col6[5],
                  1,
                  col6[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col6[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col6[7]) {
                  setCol6([
                    col6[0],
                    col6[1],
                    col6[2],
                    col6[3],
                    col6[4],
                    col6[5],
                    col6[6],
                    0,
                  ]);
                  return;
                }
                setCol6([
                  col6[0],
                  col6[1],
                  col6[2],
                  col6[3],
                  col6[4],
                  col6[5],
                  col6[6],
                  1,
                ]);
              }}
            ></div>

            {/* the seventh line */}
            <div
              className="span"
              style={{
                backgroundColor: col7[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[0]) {
                  setCol7([
                    0,
                    col7[1],
                    col7[2],
                    col7[3],
                    col7[4],
                    col7[5],
                    col7[6],
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  1,
                  col7[1],
                  col7[2],
                  col7[3],
                  col7[4],
                  col7[5],
                  col7[6],
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[1]) {
                  setCol7([
                    col7[0],
                    0,
                    col7[2],
                    col7[3],
                    col7[4],
                    col7[5],
                    col7[6],
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  1,
                  col7[2],
                  col7[3],
                  col7[4],
                  col7[5],
                  col7[6],
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[2]) {
                  setCol7([
                    col7[0],
                    col7[1],
                    0,
                    col7[3],
                    col7[4],
                    col7[5],
                    col7[6],
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  col7[1],
                  1,
                  col7[3],
                  col7[4],
                  col7[5],
                  col7[6],
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[3]) {
                  setCol7([
                    col7[0],
                    col7[1],
                    col7[2],
                    0,
                    col7[4],
                    col7[5],
                    col7[6],
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  col7[1],
                  col7[2],
                  1,
                  col7[4],
                  col7[5],
                  col7[6],
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[4]) {
                  setCol7([
                    col7[0],
                    col7[1],
                    col7[2],
                    col7[3],
                    0,
                    col7[5],
                    col7[6],
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  col7[1],
                  col7[2],
                  col7[3],
                  1,
                  col7[5],
                  col7[6],
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[5]) {
                  setCol7([
                    col7[0],
                    col7[1],
                    col7[2],
                    col7[3],
                    col7[4],
                    0,
                    col7[6],
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  col7[1],
                  col7[2],
                  col7[3],
                  col7[4],
                  1,
                  col7[6],
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[6]) {
                  setCol7([
                    col7[0],
                    col7[1],
                    col7[2],
                    col7[3],
                    col7[4],
                    col7[5],
                    0,
                    col7[7],
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  col7[1],
                  col7[2],
                  col7[3],
                  col7[4],
                  col7[5],
                  1,
                  col7[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col7[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col7[7]) {
                  setCol7([
                    col7[0],
                    col7[1],
                    col7[2],
                    col7[3],
                    col7[4],
                    col7[5],
                    col7[6],
                    0,
                  ]);
                  return;
                }
                setCol7([
                  col7[0],
                  col7[1],
                  col7[2],
                  col7[3],
                  col7[4],
                  col7[5],
                  col7[6],
                  1,
                ]);
              }}
            ></div>

            {/* the eighth line */}
            <div
              className="span"
              style={{
                backgroundColor: col8[0]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[0]) {
                  setCol8([
                    0,
                    col8[1],
                    col8[2],
                    col8[3],
                    col8[4],
                    col8[5],
                    col8[6],
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  1,
                  col8[1],
                  col8[2],
                  col8[3],
                  col8[4],
                  col8[5],
                  col8[6],
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[1]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[1]) {
                  setCol8([
                    col8[0],
                    0,
                    col8[2],
                    col8[3],
                    col8[4],
                    col8[5],
                    col8[6],
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  1,
                  col8[2],
                  col8[3],
                  col8[4],
                  col8[5],
                  col8[6],
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[2]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[2]) {
                  setCol8([
                    col8[0],
                    col8[1],
                    0,
                    col8[3],
                    col8[4],
                    col8[5],
                    col8[6],
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  col8[1],
                  1,
                  col8[3],
                  col8[4],
                  col8[5],
                  col8[6],
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[3]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[3]) {
                  setCol8([
                    col8[0],
                    col8[1],
                    col8[2],
                    0,
                    col8[4],
                    col8[5],
                    col8[6],
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  col8[1],
                  col8[2],
                  1,
                  col8[4],
                  col8[5],
                  col8[6],
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[4]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[4]) {
                  setCol8([
                    col8[0],
                    col8[1],
                    col8[2],
                    col8[3],
                    0,
                    col8[5],
                    col8[6],
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  col8[1],
                  col8[2],
                  col8[3],
                  1,
                  col8[5],
                  col8[6],
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[5]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[5]) {
                  setCol8([
                    col8[0],
                    col8[1],
                    col8[2],
                    col8[3],
                    col8[4],
                    0,
                    col8[6],
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  col8[1],
                  col8[2],
                  col8[3],
                  col8[4],
                  1,
                  col8[6],
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[6]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[6]) {
                  setCol8([
                    col8[0],
                    col8[1],
                    col8[2],
                    col8[3],
                    col8[4],
                    col8[5],
                    0,
                    col8[7],
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  col8[1],
                  col8[2],
                  col8[3],
                  col8[4],
                  col8[5],
                  1,
                  col8[7],
                ]);
              }}
            ></div>
            <div
              className="span"
              style={{
                backgroundColor: col8[7]
                  ? "white"
                  : "black",
              }}
              onClick={() => {
                if (col8[7]) {
                  setCol8([
                    col8[0],
                    col8[1],
                    col8[2],
                    col8[3],
                    col8[4],
                    col8[5],
                    col8[6],
                    0,
                  ]);
                  return;
                }
                setCol8([
                  col8[0],
                  col8[1],
                  col8[2],
                  col8[3],
                  col8[4],
                  col8[5],
                  col8[6],
                  1,
                ]);
              }}
            ></div>
          </div>
          <hr style={{ width: "280px" }} />
          <div className="inputRC">
            ROWs:
            <input
              value={row}
              placeholder="PORTB"
              onChange={(event) => {
                setRow(event.target.value);
              }}
            ></input>
            COLUMNs:
            <input
              value={col}
              placeholder="PORTD"
              onChange={(event) => {
                setCol(event.target.value);
              }}
            ></input>
            delay (ms):
            <input
              value={delay}
              placeholder="1"
              onChange={(event) => {
                setDelay(event.target.value);
              }}
            ></input>
          </div>
          <hr style={{ width: "280px" }} />
        </div>
        <textarea
          style={{
            width: "340px",
            height: "300px",
            fontSize: "20px",
            marginBottom: "50px",
          }}
          value={`unsigned char arr[8]={
0b${col1[0]}${col1[1]}${col1[2]}${col1[3]}${col1[4]}${col1[5]}${col1[6]}${col1[7]},
0b${col2[0]}${col2[1]}${col2[2]}${col2[3]}${col2[4]}${col2[5]}${col2[6]}${col2[7]},
0b${col3[0]}${col3[1]}${col3[2]}${col3[3]}${col3[4]}${col3[5]}${col3[6]}${col3[7]},
0b${col4[0]}${col4[1]}${col4[2]}${col4[3]}${col4[4]}${col4[5]}${col4[6]}${col4[7]},
0b${col5[0]}${col5[1]}${col5[2]}${col5[3]}${col5[4]}${col5[5]}${col5[6]}${col5[7]},
0b${col6[0]}${col6[1]}${col6[2]}${col6[3]}${col6[4]}${col6[5]}${col6[6]}${col6[7]},
0b${col7[0]}${col7[1]}${col7[2]}${col7[3]}${col7[4]}${col7[5]}${col7[6]}${col7[7]},
0b${col8[0]}${col8[1]}${col8[2]}${col8[3]}${col8[4]}${col8[5]}${col8[6]}${col8[7]}
}
//start main
void main() {
${row}=arr[0];${col}=0b11111110;delay_ms(${delay});
${row}=arr[1];${col}=0b11111101;delay_ms(${delay});
${row}=arr[2];${col}=0b11111011;delay_ms(${delay});
${row}=arr[3];${col}=0b11110111;delay_ms(${delay});
${row}=arr[4];${col}=0b11101111;delay_ms(${delay});
${row}=arr[5];${col}=0b11011111;delay_ms(${delay});
${row}=arr[6];${col}=0b10111111;delay_ms(${delay});
${row}=arr[7];${col}=0b01111111;delay_ms(${delay});
}//end main`}
        ></textarea>
      </header>
    </div>
  );
}

export default App;
