import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Card,
  Column,
  Row,
  Image,
  Table,
} from "../../../components";
import { classNames } from "../../../interfaces";
export default function MainComponent(props: any) {
  const [inputOne, setInputOne] = useState<string>();
  return (
    <div
      style={{
        width: "100wv",
        height: "100vh",
        backgroundColor: "black",
        padding: "40px",
      }}
    >
      <div>
        <Row>
          <Column size={12} md={6} className="px-4">
            <Card>
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNames.filled_outlined}
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNames.outlined}
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNames.filled}
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
              />
            </Card>
            <Card>
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNames.filled_outlined}
                error
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNames.outlined}
                error
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNames.filled}
                error
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                error
              />
            </Card>
          </Column>
          <Column size={12} md={6} className="px-4">
            <div>
              <Button onClick={() => {}} label="Button" />
              <Button onClick={() => {}} label="Button" variant="text" />
              <Button onClick={() => {}} label="Button" variant="outlined" />
            </div>
            <div>
              <Button onClick={() => {}} label="Button" />
              <Button onClick={() => {}} label="Button" size="small" />
              <Button onClick={() => {}} label="Button" size="medium" />
            </div>
            <div>
              <Button onClick={() => {}} label="Button" />
              <Button onClick={() => {}} label="Button" color="secondary" />
              <Button onClick={() => {}} label="Button" color="success" />
              <Button onClick={() => {}} label="Button" color="error" />
            </div>
          </Column>
        </Row>
      </div>
    </div>
  );
}
