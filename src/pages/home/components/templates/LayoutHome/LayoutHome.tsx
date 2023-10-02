import { Background } from "components";
import Information from "../../molecules/Information/Information";
import Form from "../../molecules/Form/Form";
import "../../../style/style.css";
import { useHomeContext } from "pages/home/context/homeContext";
import CongratsInfo from "../CongratsInfo/CongratsInfo";
import { ChangeEvent, useState } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { red } from "@mui/material/colors";

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default function LayoutHome() {
  const { succesClaim } = useHomeContext();
  const [file, setFile] = useState<any>();
  const [excelData, setExcelData] = useState<any>([]);
  const [excelKeys, setExcelKeys] = useState<any>([]);

  const expectedKeys = ["Name", "Description", "Phone", "Email", "URL"];

  const handleFile = () => {
    let hojas: any = [];
    if (file) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = (e: any) => {
        let data = new Uint8Array(e?.target?.result);
        let workbook = XLSX.read(data, { type: "array" });

        workbook.SheetNames.forEach((sheetName) => {
          // @ts-ignore
          let XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          hojas.push({
            data: XL_row_object,
            name: sheetName,
          });
        });
        if (hojas[0].data.length > 5) {
          alert("El archivo tiene mas de 5 filas");
        } else {
          setExcelData(hojas[0].data);
          setExcelKeys(Object.keys(hojas[0].data[0]));
        }
      };
    }
  };

  const handleFilePapa = () => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray: any[] = [];
        // const valuesArray: any[] = [];

        // Iterating data to get column name and their values
        const data = results.data.map((d: any) => {
          rowsArray.push(Object.keys(d));
          if (!EMAIL_REGEX.test(d[expectedKeys[3]])) {
            return {
              ...d,
              haveAnError: true,
            };
          } else {
            return d;
          }
          // valuesArray.push(Object.values(d));
        });
        console.log(data);

        setExcelData(data);
        setExcelKeys(rowsArray[0]);
        // Parsed Data Response in array format
        // setParsedData(results.data);

        // // Filtered Column Names
        // setTableRows(rowsArray[0]);

        // // Filtered Values
        // setValues(valuesArray);
      },
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <Background>
      <div style={{ background: "#BFCDE0", padding: 30 }}>
        <input type="file" onChange={handleFileChange} accept=".csv" />

        <button
          onClick={handleFile}
          style={{ background: "#FFF", marginLeft: 20 }}
        >
          mostrar contenido
        </button>
        <button
          onClick={handleFilePapa}
          style={{ background: "#FFF", marginLeft: 20 }}
        >
          mostrar contenido 2
        </button>
        <table className="default">
          <thead>
            {excelKeys.map((item: any, index: number) => {
              return (
                <th>
                  {expectedKeys[index] === item ? (
                    <h4>{item}</h4>
                  ) : (
                    <h4 style={{ color: "red" }}>{item}</h4>
                  )}
                </th>
              );
            })}
          </thead>
          <tbody>
            {excelData.map((item: any, index: number) => (
              <>
                {item.haveAnError && (
                  <tr>
                    <td>{index}</td>
                    <td>{item[expectedKeys[0]]}</td>
                    <td>{item[expectedKeys[1]]}</td>
                    <td>{item[expectedKeys[2]]}</td>
                    <td style={item.haveAnError && { color: "red" }}>
                      {item[expectedKeys[3]]}
                    </td>
                    <td>{item[expectedKeys[4]]}</td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      {!succesClaim ? (
        <div className="row container-home">
          <div className="col-lg-1 col-1"></div>
          <div className="col-10 col-lg-5  center-info fade-in">
            <Information />
          </div>
          <div className="col-lg-0 col-1"></div>
          <div className="col-lg-0 col-1"></div>
          <div className="col-lg-5 col-10 center-info fade-in pb-5">
            <Form />
          </div>
          <div className="col-lg-1 col-1"></div>
        </div>
      ) : (
        <CongratsInfo />
      )}
    </Background>
  );
}
