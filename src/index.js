import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"; 


var v=[1,2,3,4,5,6,7,8];
var h=["a","b","c","d","e","f","g","h"];

function App(){
	
	let board=[];
	for(let j=v.length-1; j>=0;j--){
	for(let i=0; i <h.length;i++){
	var number=j +i+2;
	if(number%2==0){
		board.push(
	<div className="white">
	</div>
	);
	}
   else{
   board.push(
   <div className="black">
   </div>
	);
   }
	}
	}
	return(
	 <React.Fragment>
	 <div id="p">CHESS BOARD</div>
	 <div id="chessboard">{board}</div>
	 </React.Fragment>
	);


}
ReactDOM.render(
App()
,document.getElementById('root'));