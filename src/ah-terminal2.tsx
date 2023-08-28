import {h, Fragment} from 'preact'
import register from 'preact-custom-element';
import { toChildArray } from 'preact';

import style from  "./ah-terminal2.css?inline"

function Term(props) {
  const childNodes = props.children?.props.children;

  let l = [];
  if (childNodes) {
    for (let c of childNodes) {
      if (typeof(c) === "string") {
        let lines = c.trim();
        lines.split("\n").forEach((line) => {
          console.log(line);
          if (line.startsWith("$")) {
            const txt = line.replace("$", "").trimEnd();
            l.push( <span data-ty="input">{ txt }</span> );
          } else {
            l.push( <span data-ty="">{ line }</span> )
          }
        });
      }
    }
  }

  console.log(l)

  return (
    <>
      <style>
        { style }
      </style>
      <div data-termynal="">
        { l }
      </div>
    </>
  );
}

register(Term, 'ah-terminal2', [], {shadow: true});
