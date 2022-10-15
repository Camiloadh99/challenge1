Routes:
    - La ruta principal se crea referenciando a la primera pagina Ej /user
    - Si se requieren rutas secundarias (/user/info) se puede crear un navigation dentro 
      de la carpeta las cuales deben contar con lazy loading. 

Context:
    - Context se usa para pasar informacion dentro de los componentes en la pagina
    - Se crea un contexto por cada pagina

Redux:
    - Permite pasar informacion entre varias paginas
    - Si no se necesita no es necesario persistir la informacion

Componentes
    - Cada page debe tener sus componentes, en la carpeta de componentes externa solo pueden 
      estar aquellos que utilice toda la app