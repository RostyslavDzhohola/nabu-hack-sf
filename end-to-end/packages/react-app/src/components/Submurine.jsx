import React, { useState } from 'react'
import { Card, Upload, Input, Button, Col } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { Submarine } from "pinata-submarine";

import { PINATA_SUBMARINE_API_KEY, PINATA_GATEWAY_URL } from "../constants";

// async function submarineFile({file, setStatus}) {
//   const submarine = new Submarine(PINATA_SUBMARINE_API_KEY);
//   const { cid } = await submarine.upload(file);
//   const url = `${PINATA_GATEWAY_URL}${cid}`;
//   setStatus(`Upload complete! IPFS URI: ${url}`);
//   return url;
// }

// async function testSubmarine() {
//   const submarine = new Submarine(PINATA_SUBMARINE_API_KEY, PINATA_GATEWAY_URL);

//   const findByCid = await submarine.getSubmarinedContentByCid(
//     "bafybeicvgj7l55y7nbggi35kl74efzovkmp6kfi3ktysy2yu3smrr43gze",
//   );

//   console.log(findByCid);
// }

function test() {
  alert("alert");
}

export default function Submurine() {
  return (
    <div>
      <div>Submurine</div>
      <Button type="primary" onClick={test}>
        Test
      </Button>

    </div>
  )
}
