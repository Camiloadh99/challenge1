
Para el uso de este componente es necesatio:

1. Crear un useState donde la variable será utilizada como "currentValue" y el setVariable 
   se tendra en cuenta en el "handleChange" creando una funcion flecha que permitirá la actualización
   del valor ingresado:

   const [variable, setVariable] = useState<any>("")

   <Input
    currentValue={variable}
    handleChange={(value: string) => {setVariable(value);}}
   />

2. El input cuenta con 4 variantes de estilo (styleName ->string)
     standar (default)
     filled
     outlined
     border
    las cuales pueden ser escritas en forma de string o llamado el enum classNamesInput de interfaces

3. Si se quiere mostrar que hubo un error se utiliza el prop "error" que ademas usa el "labelError",
   lo cual pinta el borde de rojo y muestra un mensaje de error debajo del input

    <Input
        currentValue={inputOne}
        handleChange={(value: string) => {
        setInputOne(value);
        }}
        styleName={classNames.filled_outlined}
        error
        labelError="Error"
    />

4. Otras props:
    type = "text",
    name,
    placeholder,
    readOnly,
    style = {},
    className = "",
    id,

