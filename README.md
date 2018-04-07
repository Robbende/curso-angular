# curso-angular

## AngularJS vs Angular
angularjs (1.x) javascript
angular (angular 2) typescript


## Frameworks front end
crean SPA, single page application, toda la navegacion es del lado del cliente:

angular,
react.js (libreria)
vue.js

## Well structured CSS styles, Grid classes and JavaScript components. 
bootstrap


## Pasos para crear una aplicacion angular
(se requiere NPM, node package manager)

1. instalar node.js
2. instalar angular con cli = ngm install @angular/cli -g
3. crear un projecto nuevo = ng new my-new-project
4. correr el projecto = ng serve
5. crear componentes = ng generate component [nombre-componente]

cuando se crea un component, en la parte selector del componente es el nombre que tendra dicho componente,
utilizando una etiqueta app-home, por ejemplo (componente home) es como puede mostrarse en otro componente o html

## Interpolation
comunicar propiedades definidas en el componente hacia el html vista. esto se hace creando la propiedad en el componente y
poniendo en el html {{ nombre-propiedad }}, de esta manera se envian esas propiedades.

## Property Binding
es una comunicacion unidireccional, poniendo la propiedad entre corchetes y el valor es el nombre de nuestra variable definida en el componente.
<input type="submit" [value]="btnText"/>

## ng-model two way data binding
es una comunicacion bidireccional, donde se puede enviar datos del componente al html y del html al componente
se necesita importar FormsModule en el archivo app.module.ts

import { FormsModule } from '@angular/forms';

y agregar FormsModule en la lista de imports...

en el html se agrega:
<input type="text" placeholder="insert text here!" name="mytext" [(ngModel)]="inText">
donde inText es una variable en el componente.

## Event binding
los eventos se encierra entre parentesis
<input type="submit" [value]="btnText" (click)="addItem()">

la funcion se crea en el componente y los valores se obtienen por 2 way binding

## Directiva for en template

<p *ngFor="let goal of goals">
  			{{goal}}
 </p>
 
## Animations

instalar en la consola:
npm install @angular/animations@latest --save
(si sale error hay que correrlo como administrador)

## let vs var
let: las variables declaradas como let, tienen el scope limitado al bloque (if, for, while, etc)
var: las variables que se vuelven a declarar como var dentro de un bloque, modifican las variables declaradas global
