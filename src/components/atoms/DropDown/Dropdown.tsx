import React, { useState } from "react";
import "./style.css";
import { IDropDown } from "./interface";
export default function Dropdown(props: IDropDown) {
  const { options = [], selectedItem, setSelectedItem } = props;
  //   const options: string[] = [
  //     "HTML",
  //     "CSS",
  //     "JS",
  //     "REACT",
  //     "REACT1",
  //     "REACt2",
  //     "REACT3",
  //   ];

  const [classActive, setClassActive] = useState(false);
  //   const [option, setOption] = useState("");

  const handleOnInputChange = (event: any) => {
    const data = event.target.value;
    setClassActive(false);
    setSelectedItem(data);
  };

  const handleFilter = (event: any) => {
    const data = event.target.value;
    setClassActive(true);
    setSelectedItem(data);
  };

  const optionFiltered = options?.filter((item: string) =>
    item.toLowerCase().includes(selectedItem.toLowerCase())
  );

  return (
    <div className={`dropdown ${classActive ? "active" : ""}`}>
      <input
        type="text"
        className="text02"
        value={selectedItem}
        onChange={(value: any) => {
          handleFilter(value);
        }}
        placeholder={selectedItem}
        onClick={() => setClassActive(!classActive)}
      ></input>
      <div className="option">
        {optionFiltered?.map((item: any) => {
          return (
            <option
              key={item}
              value={item}
              onClick={(value: any) => {
                handleOnInputChange(value);
              }}
            >
              {item}
            </option>
          );
        })}
      </div>
      <option></option>
    </div>
  );
}
