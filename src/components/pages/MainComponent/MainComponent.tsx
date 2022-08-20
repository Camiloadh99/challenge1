import React, { useState } from "react";
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
            <Card className="mb-3">
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
            <Card>
              <Row>
                <Column size={12} className="px-4">
                  <Button onClick={() => {}} label="Button" variant="primary" />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="secondary"
                  />
                  <Button onClick={() => {}} label="Button" variant="success" />
                  <Button onClick={() => {}} label="Button" variant="warning" />
                  <Button onClick={() => {}} label="Button" variant="danger" />
                  <Button onClick={() => {}} label="Button" variant="info" />
                </Column>
                <Column size={12} className="px-4 py-4">
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="primary"
                    outlined
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="secondary"
                    outlined
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="success"
                    outlined
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="warning"
                    outlined
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="danger"
                    outlined
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="info"
                    outlined
                  />
                </Column>
                <Column size={12} className="px-4">
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="primary"
                    disabled
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="secondary"
                    disabled
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="success"
                    disabled
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="warning"
                    disabled
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="danger"
                    disabled
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="info"
                    disabled
                  />
                </Column>
                <Column size={12} className="px-4 py-3">
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="primary"
                    size="small"
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="primary"
                    size="medium"
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="primary"
                    size="large"
                  />
                </Column>
              </Row>
            </Card>
          </Column>
        </Row>
      </div>
    </div>
  );
}
