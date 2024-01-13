// import React from 'react';

// const MyTestBody = (props) => {
//   return (
// 	<div>
// 	  <span className='conteudo'>MyTestBody{props.conteudo}</span>
// 	</div>
//   );
// }

// export default MyTestBody;


import React from 'react';
import './MyTestBody.css';

// const MyTestBody = (props) => {
//   return (
//     <div className="myTestBody">
//       <span className='conteudo'>MyTestBody{props.conteudo}</span>
//     </div>
//   );
// }

const MyTestBody = (props) => {
	return (
	  <div className="myTestBody">
		<span className='conteudo'>MyTestBody{props.conteudo}</span>
	  </div>
	);
  }

export default MyTestBody;
