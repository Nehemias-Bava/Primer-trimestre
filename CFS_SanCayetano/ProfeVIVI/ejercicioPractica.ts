/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) */

import * as rls from "readline-sync"


let nombre : string = "Nombre Inicial";
let notaFinal : number;
let nota1 : number = 0;
let nota2 : number = 0;
let nota3 : number = 0;



    while(nombre !== ""){   
        nombre = rls.question("Ingrese el nombre del alumno: ");                                                                                      
        nota1 = rls.questionFloat("Ingrese la nota de practica: ");
        nota2 = rls.questionFloat("Ingrese la nota de problemas: ");
        nota3 = rls.questionFloat("Ingrese la nota de teorica: ");

        if(nota1 <= 0 || nota1 > 10 || nota2 <= 0 || nota2 > 10 || nota3 <= 0 || nota3 > 10){
            console.log("Error");
        }else{
            notaFinal = (nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4);
            console.log("La nota final de", [nombre], " es de:", [notaFinal]);
        } 
    }