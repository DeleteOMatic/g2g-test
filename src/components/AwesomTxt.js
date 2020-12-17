import React from "react";
import { } from 'react-bootstrap';

function AwesomeTxt() {
  const input = {
    a: 'I',
    b: ['not', 'am'],
    c: {  
      a: ['f','f','a','n','f','f'],
      b: ['a'],
      c: ['s','o','m','e']
    },
    d: ['repoleved']
  }
  function awesome(){
    return new Promise (resolve => {
        setTimeout( () => {
          resolve(
            input.a + ' ' + 
            input.b[1] + ' ' + 
            input.c.a[2] + 
            input.c.a[3] + ' ' + 
            input.c.b + 'w' + 
            input.c.c[3] + 
            input.c.c[0] + 
            input.c.c[1] + 
            input.c.c[2] + 
            input.c.c[3] + ' ' +
            reverse(input.d)
          );
        }, 1000);
    })
  }
  /** 
* @param str
* @example
* @return
*/

function reverse(str){
  // todo 
  return str;
  return str.split("").reverse().join("");

}

async function solve(){
  // todo
  const solvetxt = awesome();
  return solvetxt;
}

// output
 function sentence(){
    solve().then(function(result){
      // todo
      return console.log(result);
    });
 }

  return <h1>{sentence()}</h1>;
}

export default AwesomeTxt;