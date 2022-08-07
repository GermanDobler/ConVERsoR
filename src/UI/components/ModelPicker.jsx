import { useState } from "react";
import { BitcoinModel } from "./BitcoinModel";
import { EthereumModel } from "./EthereumModel";

export default function ModelPicker(props) {
    const [coin, setCoin] = useState(props.coin);

    if (coin === "btc") {
        return <BitcoinModel/>
    } else if (coin === "eth")  {
        return <EthereumModel/>
    }
}