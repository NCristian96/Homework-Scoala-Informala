// import { useState, useEffect } from "react";
let charArr = [];
const showChars = elem => {
  // const [chars, setChars] = useState([]);
  let test = Array.isArray(elem);
  // console.log(test);

  let charData;
  if (test) {
    charData = elem;
  } else {
    charData = [];
  }
  // console.log(charData);
  charArr = [];
  charData.forEach(el => {
    const getChar = async () => {
      const res = await fetch(el);
      return res.json();
    };
    getChar().then(res => {
      charArr.push(res);
      return charArr;
    });
  });

  console.log(charArr);
  return charArr.map(el => {
    return console.log(el);
  });
};

// export { ShowChars };
export default showChars;
// <div key={elem.id} className="content-div content-div2">
//   <img alt={elem.name} className="img-resize" src={elem.image} />
//   <p>{elem.name}</p>
// </div>

// charData.map(el => {
//   fetch(el)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data.name);
//       return (
//         <div key={data.id} className="content-div content-div2">
//           <img alt={data.name} className="img-resize" src={data.image} />
//           <p>{elem.name}</p>
//         </div>
//       );
//     });
// })
