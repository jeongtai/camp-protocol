/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Callee__factory>;
    getContractFactory(
      name: "MockUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUSDC__factory>;
    getContractFactory(
      name: "CAMP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CAMP__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AssetOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetOracle__factory>;
    getContractFactory(
      name: "UniswapPairOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapPairOracle__factory>;
    getContractFactory(
      name: "Owned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owned__factory>;
    getContractFactory(
      name: "SCAMPBank",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SCAMPBank__factory>;
    getContractFactory(
      name: "SCAMPPoolLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SCAMPPoolLibrary__factory>;
    getContractFactory(
      name: "SCAMP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SCAMP__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "BondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondDepository__factory>;
    getContractFactory(
      name: "BondTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondTreasury__factory>;
    getContractFactory(
      name: "ClaimSwapBondZap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimSwapBondZap__factory>;
    getContractFactory(
      name: "ClaimSwapCampUSDTLpDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimSwapCampUSDTLpDepository__factory>;
    getContractFactory(
      name: "ClaimSwapKlayKbtLpDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimSwapKlayKbtLpDepository__factory>;
    getContractFactory(
      name: "ClaimSwapSCampUSDTLpDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimSwapSCampUSDTLpDepository__factory>;
    getContractFactory(
      name: "IBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondDepository__factory>;
    getContractFactory(
      name: "IBondTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondTreasury__factory>;
    getContractFactory(
      name: "IClaimSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClaimSwapFactory__factory>;
    getContractFactory(
      name: "IClaimSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClaimSwapPair__factory>;
    getContractFactory(
      name: "IClaimSwapZap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IClaimSwapZap__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "IStakedToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakedToken__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IERC2612Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612Permit__factory>;
    getContractFactory(
      name: "IKIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7__factory>;
    getContractFactory(
      name: "IKIP7Detailed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7Detailed__factory>;
    getContractFactory(
      name: "KIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "CvxCrvToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CvxCrvToken__factory>;
    getContractFactory(
      name: "CrvDepositor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrvDepositor__factory>;
    getContractFactory(
      name: "ICrvDeposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrvDeposit__factory>;
    getContractFactory(
      name: "ICurveGauge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveGauge__factory>;
    getContractFactory(
      name: "ICurveVoteEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICurveVoteEscrow__factory>;
    getContractFactory(
      name: "IDeposit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDeposit__factory>;
    getContractFactory(
      name: "IFeeDistro",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFeeDistro__factory>;
    getContractFactory(
      name: "IMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMinter__factory>;
    getContractFactory(
      name: "IPools",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPools__factory>;
    getContractFactory(
      name: "IRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRegistry__factory>;
    getContractFactory(
      name: "IRewardFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewardFactory__factory>;
    getContractFactory(
      name: "IRewards",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewards__factory>;
    getContractFactory(
      name: "IStaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaker__factory>;
    getContractFactory(
      name: "IStash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStash__factory>;
    getContractFactory(
      name: "IStashFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStashFactory__factory>;
    getContractFactory(
      name: "ITokenFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenFactory__factory>;
    getContractFactory(
      name: "ITokenMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenMinter__factory>;
    getContractFactory(
      name: "IVestedEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVestedEscrow__factory>;
    getContractFactory(
      name: "IVoting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVoting__factory>;
    getContractFactory(
      name: "IWalletChecker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWalletChecker__factory>;
    getContractFactory(
      name: "IRewardStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRewardStaking__factory>;
    getContractFactory(
      name: "IStakingProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingProxy__factory>;
    getContractFactory(
      name: "CvxLockerV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CvxLockerV2__factory>;
    getContractFactory(
      name: "MerkleAirdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleAirdrop__factory>;
    getContractFactory(
      name: "MerkleAirdropFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleAirdropFactory__factory>;
    getContractFactory(
      name: "PVSale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PVSale__factory>;
    getContractFactory(
      name: "KPPreSale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KPPreSale__factory>;
    getContractFactory(
      name: "IGovernancePowerDelegationToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernancePowerDelegationToken__factory>;
    getContractFactory(
      name: "IKIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7__factory>;
    getContractFactory(
      name: "IKIP7Detailed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7Detailed__factory>;
    getContractFactory(
      name: "IKIP7WithNonce",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7WithNonce__factory>;
    getContractFactory(
      name: "IKlaybankDistributionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKlaybankDistributionManager__factory>;
    getContractFactory(
      name: "IKlaybankIncentivesController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKlaybankIncentivesController__factory>;
    getContractFactory(
      name: "IScaledBalanceToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IScaledBalanceToken__factory>;
    getContractFactory(
      name: "IStakedToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakedToken__factory>;
    getContractFactory(
      name: "IStakedTokenWithConfig",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakedTokenWithConfig__factory>;
    getContractFactory(
      name: "ITransferHook",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITransferHook__factory>;
    getContractFactory(
      name: "BaseAdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "BaseUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "GovernancePowerDelegationKIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernancePowerDelegationKIP7__factory>;
    getContractFactory(
      name: "GovernancePowerWithSnapshot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernancePowerWithSnapshot__factory>;
    getContractFactory(
      name: "InitializableAdminUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "InitializableUpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableUpgradeabilityProxy__factory>;
    getContractFactory(
      name: "KIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "UpgradeabilityProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeabilityProxy__factory>;
    getContractFactory(
      name: "KlaybankDistributionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KlaybankDistributionManager__factory>;
    getContractFactory(
      name: "KlaybankEcosystemReserve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KlaybankEcosystemReserve__factory>;
    getContractFactory(
      name: "KlaybankIncentivesController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KlaybankIncentivesController__factory>;
    getContractFactory(
      name: "StakeCAMP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakeCAMP__factory>;
    getContractFactory(
      name: "StakedToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakedToken__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "IWKLAY",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWKLAY__factory>;
    getContractFactory(
      name: "UniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2ERC20__factory>;
    getContractFactory(
      name: "UniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Factory__factory>;
    getContractFactory(
      name: "IMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMigrator__factory>;
    getContractFactory(
      name: "UniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Pair__factory>;
    getContractFactory(
      name: "UniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Router02__factory>;
    getContractFactory(
      name: "WKLAY",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WKLAY__factory>;
    getContractFactory(
      name: "VestedEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VestedEscrow__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Callee>;
    getContractAt(
      name: "MockUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUSDC>;
    getContractAt(
      name: "CAMP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CAMP>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "AssetOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetOracle>;
    getContractAt(
      name: "UniswapPairOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapPairOracle>;
    getContractAt(
      name: "Owned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Owned>;
    getContractAt(
      name: "SCAMPBank",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SCAMPBank>;
    getContractAt(
      name: "SCAMPPoolLibrary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SCAMPPoolLibrary>;
    getContractAt(
      name: "SCAMP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SCAMP>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "BondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondDepository>;
    getContractAt(
      name: "BondTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondTreasury>;
    getContractAt(
      name: "ClaimSwapBondZap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimSwapBondZap>;
    getContractAt(
      name: "ClaimSwapCampUSDTLpDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimSwapCampUSDTLpDepository>;
    getContractAt(
      name: "ClaimSwapKlayKbtLpDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimSwapKlayKbtLpDepository>;
    getContractAt(
      name: "ClaimSwapSCampUSDTLpDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimSwapSCampUSDTLpDepository>;
    getContractAt(
      name: "IBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondDepository>;
    getContractAt(
      name: "IBondTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondTreasury>;
    getContractAt(
      name: "IClaimSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClaimSwapFactory>;
    getContractAt(
      name: "IClaimSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClaimSwapPair>;
    getContractAt(
      name: "IClaimSwapZap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IClaimSwapZap>;
    getContractAt(
      name: "IOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: "IStakedToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakedToken>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IERC2612Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2612Permit>;
    getContractAt(
      name: "IKIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7>;
    getContractAt(
      name: "IKIP7Detailed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7Detailed>;
    getContractAt(
      name: "KIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "CvxCrvToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CvxCrvToken>;
    getContractAt(
      name: "CrvDepositor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrvDepositor>;
    getContractAt(
      name: "ICrvDeposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrvDeposit>;
    getContractAt(
      name: "ICurveGauge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurveGauge>;
    getContractAt(
      name: "ICurveVoteEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICurveVoteEscrow>;
    getContractAt(
      name: "IDeposit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDeposit>;
    getContractAt(
      name: "IFeeDistro",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFeeDistro>;
    getContractAt(
      name: "IMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMinter>;
    getContractAt(
      name: "IPools",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPools>;
    getContractAt(
      name: "IRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRegistry>;
    getContractAt(
      name: "IRewardFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewardFactory>;
    getContractAt(
      name: "IRewards",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewards>;
    getContractAt(
      name: "IStaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaker>;
    getContractAt(
      name: "IStash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStash>;
    getContractAt(
      name: "IStashFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStashFactory>;
    getContractAt(
      name: "ITokenFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenFactory>;
    getContractAt(
      name: "ITokenMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenMinter>;
    getContractAt(
      name: "IVestedEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVestedEscrow>;
    getContractAt(
      name: "IVoting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVoting>;
    getContractAt(
      name: "IWalletChecker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWalletChecker>;
    getContractAt(
      name: "IRewardStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRewardStaking>;
    getContractAt(
      name: "IStakingProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingProxy>;
    getContractAt(
      name: "CvxLockerV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CvxLockerV2>;
    getContractAt(
      name: "MerkleAirdrop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleAirdrop>;
    getContractAt(
      name: "MerkleAirdropFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleAirdropFactory>;
    getContractAt(
      name: "PVSale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PVSale>;
    getContractAt(
      name: "KPPreSale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KPPreSale>;
    getContractAt(
      name: "IGovernancePowerDelegationToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernancePowerDelegationToken>;
    getContractAt(
      name: "IKIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7>;
    getContractAt(
      name: "IKIP7Detailed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7Detailed>;
    getContractAt(
      name: "IKIP7WithNonce",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7WithNonce>;
    getContractAt(
      name: "IKlaybankDistributionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKlaybankDistributionManager>;
    getContractAt(
      name: "IKlaybankIncentivesController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKlaybankIncentivesController>;
    getContractAt(
      name: "IScaledBalanceToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IScaledBalanceToken>;
    getContractAt(
      name: "IStakedToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakedToken>;
    getContractAt(
      name: "IStakedTokenWithConfig",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakedTokenWithConfig>;
    getContractAt(
      name: "ITransferHook",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITransferHook>;
    getContractAt(
      name: "BaseAdminUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAdminUpgradeabilityProxy>;
    getContractAt(
      name: "BaseUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUpgradeabilityProxy>;
    getContractAt(
      name: "GovernancePowerDelegationKIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernancePowerDelegationKIP7>;
    getContractAt(
      name: "GovernancePowerWithSnapshot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernancePowerWithSnapshot>;
    getContractAt(
      name: "InitializableAdminUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableAdminUpgradeabilityProxy>;
    getContractAt(
      name: "InitializableUpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InitializableUpgradeabilityProxy>;
    getContractAt(
      name: "KIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "UpgradeabilityProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradeabilityProxy>;
    getContractAt(
      name: "KlaybankDistributionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KlaybankDistributionManager>;
    getContractAt(
      name: "KlaybankEcosystemReserve",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KlaybankEcosystemReserve>;
    getContractAt(
      name: "KlaybankIncentivesController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KlaybankIncentivesController>;
    getContractAt(
      name: "StakeCAMP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakeCAMP>;
    getContractAt(
      name: "StakedToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakedToken>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "IWKLAY",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWKLAY>;
    getContractAt(
      name: "UniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2ERC20>;
    getContractAt(
      name: "UniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Factory>;
    getContractAt(
      name: "IMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMigrator>;
    getContractAt(
      name: "UniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Pair>;
    getContractAt(
      name: "UniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Router02>;
    getContractAt(
      name: "WKLAY",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WKLAY>;
    getContractAt(
      name: "VestedEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VestedEscrow>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
