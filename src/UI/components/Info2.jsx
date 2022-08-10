import { Box } from "@mui/system";
import * as React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from "react";
import "./styles/Glassmorphism.css";
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        m: 1,
        p: 2,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Info(props) {
  return (
    <Fragment>
      <div className="items">
        <Box
          sx={{
            textAlign: 'center',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <Item>
            {props.data.from === "ars" ?
              <img src={require('./ARG.png')} className="img" height={40} width={40} alt="ARGENTINO" /> : null}
            {props.data.from === "btc" ?
              <img src={require('./bitcoin.png')} className="img" height={40} width={40} alt="BITCOIN" /> : null}
            {props.data.from === "eth" ?
              <img src={require('./eter.png')} className="img" height={40} width={40} alt="ETHEREUM" /> : null}
            {props.data.from === "sol" ?
              <img src={require('./solana.png')} className="img" height={40} width={40} alt="SOLANA" /> : null}
            {props.data.from === "eur" ?
              <img src={require('./euro.png')} className="img" height={40} width={40} alt="EURO" /> : null}
            {props.data.from === "dlblue" ?
              <img src={require('./moneda-dolar.png')} className="img" height={40} width={40} alt="DOLAR" /> : null}
            {props.data.from === "dloficial" ?
              <img src={require('./moneda-dolar.png')} className="img" height={40} width={40} alt="DOLAR" /> : null}
            <div>
              {props.data.amount === "" ? "- No Data -" : props.data.amount}
            </div>
          </Item>
          <Item>
            {props.data.to === "ars" ?
              <img src={require('./ARG.png')} className="img" height={40} width={40} alt="ARGENTINO" /> : null}
            {props.data.to === "btc" ?
              <img src={require('./bitcoin.png')} className="img" height={40} width={40} alt="BITCOIN" /> : null}
            {props.data.to === "eth" ?
              <img src={require('./eter.png')} className="img" height={40} width={40} alt="ETHEREUM" /> : null}
            {props.data.to === "sol" ?
              <img src={require('./solana.png')} className="img" height={40} width={40} alt="SOLANA" /> : null}
            {props.data.to === "eur" ?
              <img src={require('./euro.png')} className="img" height={40} width={40} alt="EURO" /> : null}
            {props.data.to === "dlblue" ?
              <img src={require('./moneda-dolar.png')} className="img" height={40} width={40} alt="DOLAR" /> : null}
            {props.data.to == "dloficial" ?
              <img src={require('./moneda-dolar.png')} className="img" height={40} width={40} alt="DOLAR" /> : null}
            <div>
              {props.data.to === "" ? "- No Data -" : ""}
              {props.data.result == 0 || isNaN(props.data.result) == true ? "- No Data -" : props.data.result}
            </div>
          </Item>
        </Box>
      </div>
    </Fragment>
  );
}