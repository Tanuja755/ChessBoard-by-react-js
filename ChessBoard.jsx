import React from 'react';


export default function ChessBoard(){

var row = [];
var child = [];
var box1 = [];
var box2 = [];

return(
  <React.Fragment>
     <h1>Chess Board</h1>
        <div id="outer">
          {row}
        </div>
     </React.Fragment>
  );
}