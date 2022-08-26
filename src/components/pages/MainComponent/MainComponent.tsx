import React, { useState } from "react";
import {
  Input,
  Button,
  Card,
  Column,
  Row,
  Image,
  Table,
  Loading,
  CompleteLoader,
  Heading,
} from "components";
import { classNamesInput, colorVariants } from "interfaces";
import { getCoolRick } from "api";
import useFetchAndLoad from "hooks/useFetchAndLoad";
import useAsync from "hooks/useAsync";
import { createAddapterApi } from "api/adapters/apiAdapter";
export default function MainComponent(props: any) {
  const [inputOne, setInputOne] = useState<string>();
  const [loadingComponent, setLoadingComponent] = useState<boolean>(false);

  //API CALL
  const { loading, callEndpoint } = useFetchAndLoad();
  const [morty, setMorty] = useState({});
  const getApiData = async () => await callEndpoint(getCoolRick({}));
  const adaptMorty = (data: any) => {
    const newData = createAddapterApi(data);
    setMorty(newData);
  };
  useAsync(getApiData, adaptMorty, () => {});
  console.log({ morty });

  return (
    <div
      style={{
        width: "100wv",
        backgroundColor: "black",
        padding: "40px",
      }}
    >
      <div>
        <Row>
          <Column size={12} lg={6} className="px-2">
            <Card className="mb-3">
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNamesInput.filled_outlined}
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNamesInput.outlined}
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNamesInput.filled}
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
              />
            </Card>
            <Card className="mb-3">
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNamesInput.filled_outlined}
                error
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNamesInput.outlined}
                error
              />
              <Input
                currentValue={inputOne}
                handleChange={(value: string) => {
                  setInputOne(value);
                }}
                styleName={classNamesInput.filled}
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
            <Card style={{ background: "#f3f3f3" }}>
              <Row>
                <Column size={12} md={3} className="px-4">
                  <Image
                    alt="pokemon"
                    src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
                  />
                </Column>
                <Column size={12} md={3} className="px-4">
                  <Image
                    alt="pokemon"
                    rounded
                    src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
                  />
                </Column>
                <Column size={12} md={3} className="px-4">
                  <Image
                    alt="pokemon"
                    thumbnail
                    src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
                  />
                </Column>
                <Column size={12} md={3} className="px-4">
                  <Image
                    circle
                    alt="pokemon"
                    src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
                  />
                </Column>
              </Row>
            </Card>
          </Column>
          <Column size={12} lg={6} className="px-2">
            <Card>
              <Row>
                <Column size={12} className="px-4">
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.primary}
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="secondary"
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.success}
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.warning}
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.danger}
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.info}
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.light}
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant={colorVariants.dark}
                  />
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
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="light"
                    outlined
                  />
                  <Button
                    onClick={() => {}}
                    label="Button"
                    variant="dark"
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
            <Card className="my-3">
              <Row>
                <Column size={6} className="px-4 py-3">
                  <Loading animation="border" variant="primary" />
                  <Loading animation="border" variant="secondary" />
                  <Loading animation="border" variant="success" />
                  <Loading animation="border" variant="danger" />
                  <Loading animation="border" variant="warning" />
                  <Loading animation="border" variant="info" />
                  <Loading animation="border" variant="light" />
                  <Loading animation="border" variant="dark" />
                </Column>
                <Column size={6} className="px-4 py-3">
                  <Heading type="h3">
                    <b>Animation: border</b>
                  </Heading>
                </Column>

                <Column size={6} className="px-4 py-3">
                  <Loading animation="grow" variant="primary" />
                  <Loading animation="grow" variant="secondary" />
                  <Loading animation="grow" variant="success" />
                  <Loading animation="grow" variant="danger" />
                  <Loading animation="grow" variant="warning" />
                  <Loading animation="grow" variant="info" />
                  <Loading animation="grow" variant="light" />
                  <Loading animation="grow" variant="dark" />
                </Column>
                <Column size={6} className="px-4 py-3">
                  <Heading type="h3">
                    <b>Animation: grow</b>
                  </Heading>
                </Column>
                <Column size={6} className="px-4 py-3">
                  <Loading animation="border" variant="primary" size="small" />
                  <Loading animation="border" variant="primary" size="medium" />
                  <Loading animation="border" variant="primary" size="large" />
                  <Loading animation="grow" variant="primary" size="small" />
                  <Loading animation="grow" variant="primary" size="medium" />
                  <Loading animation="grow" variant="primary" size="large" />
                </Column>
                <Column size={6} className="px-4 py-3">
                  <Heading type="h3">
                    <b>Size</b>
                  </Heading>
                </Column>
                <Column size={6} className="px-4 py-3">
                  <Loading
                    animation="border"
                    variant="primary"
                    velocity="slow"
                  />
                  <Loading
                    animation="border"
                    variant="primary"
                    velocity="medium"
                  />
                  <Loading
                    animation="border"
                    variant="primary"
                    velocity="fast"
                  />
                  <Loading animation="grow" variant="primary" velocity="slow" />
                  <Loading
                    animation="grow"
                    variant="primary"
                    velocity="medium"
                  />
                  <Loading animation="grow" variant="primary" velocity="fast" />
                </Column>
                <Column size={6} className="px-4 py-3">
                  <Heading type="h3">
                    <b>Velocity</b>
                  </Heading>
                </Column>
                <Button
                  label="show loading"
                  onClick={() => {
                    setLoadingComponent(!loadingComponent);
                  }}
                ></Button>
                <div
                  style={{
                    zIndex: "30",
                    position: "absolute",
                    top: "0",
                    right: "0",
                  }}
                >
                  {loadingComponent && (
                    <Button
                      label="Close preview"
                      onClick={() => {
                        setLoadingComponent(!loadingComponent);
                      }}
                      variant="warning"
                    ></Button>
                  )}
                </div>
                <CompleteLoader show={loading} />
              </Row>
            </Card>
            <Card className="my-3">
              <Heading type="h1">
                H1 - Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos
              </Heading>
              <Heading type="h2">
                H2 - Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos
              </Heading>
              <Heading type="h3">
                H3 - Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos
              </Heading>
              <Heading type="h4">
                H4 - Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos
              </Heading>
              <Heading type="h5">
                H5 - Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos
              </Heading>
              <Heading type="h6">
                H6 - Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos
              </Heading>
            </Card>
          </Column>
        </Row>
      </div>
    </div>
  );
}
