
Escribir como usar input


 <Input
    currentValue={inputOne}
    handleChange={(value: string) => {
    setInputOne(value);
    }}
    styleName={classNames.filled_outlined}
    error
    labelError="Error desde main "
/>

