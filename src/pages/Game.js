import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      getUnityJson(),
      getUnityCode()
    );
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}

// export function Portfolio(props) {

//   this.unityContent = new UnityContent(
//     getUnityJson(),
//     getUnityCode()
//   );

//   return (
//     <div>
//       <Unity unityContent={this.unityContent} />
//     </div>
//   );
// }

async function getUnityJson() {
  return fetch('https://raw.githubusercontent.com/Dkreick/AnotherDayToBe/master/Build/Build/Build.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    })
}

async function getUnityCode() {
  return fetch('https://raw.githubusercontent.com/Dkreick/AnotherDayToBe/master/Build/Build/UnityLoader.js')
    .then((response) => response.text())
    .then((responseCode) => {
      console.log(responseCode)
      return responseCode;
    })
    .catch((error) => {
      console.error(error);
    })
}

export default Game;