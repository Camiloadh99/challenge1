Inicio de proyecto desde cero:
npx create-react-app nombre-de-tu-app --typescript
npm i typescript

Al descargar plantilla:
    - npm i
    - npm start 

MainComponent.tsx contiene ejemplo de lo que hay en la plantilla

Routes:
    - La ruta principal se crea referenciando a la primera pagina Ej /user
    - Si se requieren rutas secundarias (/user/info) se puede crear un navigation dentro 
      de la carpeta de la pagina las cuales deben contar con lazy loading. 
    - Debe tener un subject.manager (en models) el cual tendra las rutas publicas y privadas, 
     cada vez que se quiera llamar una ruta desde la app debe hacerse desde lo que se incluya en este archivo
    - El guard es una funcion para proteger rutas, se puede crar otro por ejemplo para proteger paginas por rol
    
    https://www.youtube.com/watch?v=UVsX7A2wfLo&t=3724s&ab_channel=GentlemanProgramming 
    
Context:
    - Context se usa para pasar informacion dentro de los componentes en la pagina
    - Se crea un contexto por cada pagina

Redux:
    - Permite pasar informacion entre varias paginas
    - Si no se necesita no es necesario persistir la informacion
    - Pueden ser por ejemplo, un sistema de almacenamiento de favoritos que usará toda la app

Componentes
    - Cada page debe tener sus componentes, en la carpeta de componentes externa solo pueden 
      estar aquellos que utilice toda la app
    - (Componentes globales): pueden ser por ejemplo, un sistema de muestra de favoritos que usará toda la app

Usar props lo menos posible:
 - Se puede hacer un componente generico que pida props, pero al momento de usarlo se deben crear nuevos componentes 
   que ya sean especificos de la pagina:
   digamos en un formulario, los inputs deben estar en un componente con la logica de envio a contexto o Redux
   y en otro componente el boton que solamente trae esa informacion y hace su logica correspondiente, 
   la pagina no debe entender de logica ni de lo que esta pasando con sus componentes hijos
