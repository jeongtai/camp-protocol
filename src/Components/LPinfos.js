import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LinkImg from "../assets/ExternalLink.svg";
import TokenLogo from "../assets/TokenLogo";
import { reducer } from "../Contract";
import { useSelector } from "react-redux";


const LPInfoItem = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  
  height : 80px;
  padding: 23px 0px;

  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  
  font-size:14px;
  
  p {
    display: flex;
    align-items: center;
    justify-items: center;
    gap : 5px;
    padding : 0 10px 0 0;
  }

  & .btnSection{
    flex-direction: column;
    align-items: stretch;
    justify-items: center;
  }
`


const BondingtoolBtn = styled.button`
  width : 100%;
  min-width : 60px;  

  height: 34px;

  background-color: ${(props) => {
    if (props.btnState === "Bond") { return "white" }
    else if (props.btnState === "Sold-out") { return props.theme.btnGray }
    else if (props.btnState === "Claim") { return props.theme.btnBlue }
  }
  };

  border : 2px solid;
  border-color : ${(props) => {
    if (props.btnState === "Bond") { return props.theme.btnBlue }
    else if (props.btnState === "Sold-out") { return props.theme.btnGray }
    else if (props.btnState === "Claim") { return props.theme.btnBlue }
  }
  };

  border-radius: 6px;

  font-size: 14px;
  font-weight: 300;
  color: ${(props) => {
    if (props.btnState === "Bond") { return props.theme.textBlue }
    else if (props.btnState === "Sold-out") { return props.theme.textDarkGray }
    else if (props.btnState === "Claim") { return "white" }
  }
  };

  &:hover {
      cursor: ${(props)=>props.btnState==="Sold-out"? "" : "pointer"};
  }
`

function timeConversion(millisec) {

  var seconds = (millisec / 1000).toFixed(1);

  var minutes = (millisec / (1000 * 60)).toFixed(1);

  var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

  var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

  if (seconds < 60) {
      return seconds + " Sec";
  } else if (minutes < 60) {
      return minutes + " Min";
  } else if (hours < 24) {
      return hours + " Hrs";
  } else {
      return days + " Days"
  }
}

function LPInfos({ props }) {
  let state = useSelector((state) => state)
  const [bondprice, setBondPrice] = useState()
  const [priceRate, setPriceRate] = useState()
  const [campbalance, setCAMPBalance] = useState()
  const [vestingterm, setVestingTerm] = useState()
  const [poolState, setPoolState] = useState("")

  const contract = props.contract;

  useEffect(async () => {
    try {
      await contract.methods.bondPrice()
        .call((e, v) => setBondPrice((v/1e6).toFixed(2)))
    } catch (e) { setBondPrice(undefined) }

    try {
      await contract.methods.priceRate()
        .call((e, v) => setPriceRate(Math.round((1 - v / 1e9) * 100 * 1000) /1000))
    } catch (e) { setPriceRate(undefined) }

    try {
      await state.CAMPContract.methods.balanceOf(contract._address)
        .call((e, v) => setCAMPBalance((v/1e18).toFixed(2)))
    } catch (e) { setPriceRate(undefined) }

    try {
      await contract.methods.terms()
        .call((e, v) => setVestingTerm(v[1]))
    } catch (e) { setVestingTerm(undefined) }
    
    try {
      await contract.methods.pendingPayoutFor(window.klaytn.selectedAddress)
      .call((e,v) => {
        if (v[0] === 0) {
          setPoolState("Bond")
        } else {
          setPoolState("Claim")
        }
      })
    } catch(e) {console.log("Something wrong!")}
  }, [])

  return (
    <LPInfoItem>
      <p>
        <TokenLogo name={props.name} />
        {" "}{props.name}{" "}
        <a href="https://app.claimswap.org/liquidity/add" target="_blank">
          <img src={LinkImg} />
        </a>
      </p>
      <p> $ {bondprice}</p>
      <p> {priceRate}%</p>
      <p>$ {(campbalance * bondprice)}</p>
      <p>{timeConversion(vestingterm*1000)}</p>

      <p className="btnSection">
        {poolState === "Sold-out"
          ? <BondingtoolBtn btnState={poolState} props={props}>
            {poolState}
          </BondingtoolBtn>
          : 
          <Link to={`${props.name}`} state={{ name: props.name, poolState: poolState }}>
            <BondingtoolBtn btnState={poolState} props={props}>
              {poolState}
            </BondingtoolBtn>
          </Link>
          }
      </p>
    </LPInfoItem>
  )

}

export default LPInfos;