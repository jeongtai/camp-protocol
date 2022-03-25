import react, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Caver from "caver-js";
import styled from "styled-components";
import { Routes, Route, Link, useMatch } from "react-router-dom";

import Recollattool from "../Components/Recollattool";
import Buybacktool from "../Components/Buybacktool";

import Loading from "../assets/Loading.svg";

const Section = styled.div`
    // flex
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    padding: 24px;

    width: 50%;
    min-width: 360px;
    margin: 0 auto;
    stroke: Solid #ededed 1px;
    background-color: white;
    border-radius: 15px;
    border: 2px solid ${(props) => props.theme.borderColor};

    span {
        font-weight: 400;
        font-size: 20px;
        width: 100%;
    }
`;

const Content = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10px 0px;
    gap: 10px;
`;

const Tab = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 400;

    padding: 0px 0px 10px 0px;

    &:hover {
        cursor: pointer;
    }

    color: ${(props) =>
        props.isActive ? props.theme.textBlack : props.theme.textGray};

    border-bottom: ${(props) =>
        props.isActive ? "2px solid" + props.theme.connectBtnColor : null};
`;

const caver = new Caver(window.klaytn);

const Bank = () => {
    // toggle true=mint false=redeem
    const [isNowMint, setIsNowMint] = useState(true);

    return (
        <Section>
            <Tabs>
                <Tab onClick={() => setIsNowMint(true)} isActive={isNowMint}>
                    Reocollat
                </Tab>
                <Tab onClick={() => setIsNowMint(false)} isActive={!isNowMint}>
                    Buyback
                </Tab>
            </Tabs>
            <Content>{isNowMint ? <Recollattool /> : <Buybacktool />}</Content>


        </Section>
    );
};

export default react.memo(Bank);
