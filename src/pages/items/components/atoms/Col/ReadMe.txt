Componente que divide el espacio en 12 Columnas

    (debe ir dentro del componente Row)
    1. size -> number: este prop cuando se usa solo divide la pantalla para todo tipo de resoluciones.
       El número que se ingresa es la cantidad de columnas que ocupará

       valores: 1,2,3,4,5,6,7,8,9,10,11,12
         <Row>
            <Column size={12} >
            </Column>    
        </Row>

        <Row>
            <Column size={6} >
            </Column>
            <Column size={6} >
            </Column>
        </Row>

         <Row>
            <Column size={4} >
            </Column>
            <Column size={4} >
            </Column>
            <Column size={4} >
            </Column>
        </Row>
    
    2. (md,lg,xl) -> number: segun el prop se dividirá la pantalla segun la resolución

        xl -> se aplica cuando la pantalla es mayor a 1200px
        lg -> se aplica cuando la pantalla es mayor a 992px
        md -> se aplica cuando la pantalla es mayor a 768px

       valores: 1,2,3,4,5,6,7,8,9,10,11,12
        <Row>
            <Column xl={6} >
            </Column>
            <Column xl={6} >
            </Column>
        </Row>

        <Row>
            <Column md={6} >
            </Column>
            <Column md={6} >
            </Column>
        </Row>

    3. size + (md,lg,xl) -> number: cuando se usan ambos 

        size + xl -> las columnas de size  se aplican cuando la pantalla es menor a 1200px despues se aplican las de xl
        lg -> las columnas de size  se aplican cuando la pantalla es menor a 992px despues se aplican las de lg
        md -> las columnas de size  se aplican cuando la pantalla es menor a 768px despues se aplican las de md

       valores: 1,2,3,4,5,6,7,8,9,10,11,12
        <Row>
            <Column size={12} xl={6} >
            </Column>
            <Column size={12} xl={6} >
            </Column>
        </Row>
        (12 hasta 1200px y 6 depues de eso)

        <Row>
            <Column size={1} md={0} >
            </Column>
            <Column size={5} md={6} >
            </Column>
            <Column size={5} md={6} >
            </Column>
            <Column size={1} md={0} >
            </Column>
        </Row>

            (antes de 768px las columnas del centro tendran 6 y 6 (12) despues de esa resolución
            seran columnas 1 5 5 1)
