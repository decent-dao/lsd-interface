/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface StreamInterface extends utils.Interface {
  functions: {
    "cfaV1()": FunctionFragment;
    "id()": FunctionFragment;
    "initialize(uint256,address,address,address,address,int96)": FunctionFragment;
    "streamCreator()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "cfaV1" | "id" | "initialize" | "streamCreator"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cfaV1", values?: undefined): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "streamCreator",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "cfaV1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "streamCreator",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface Stream extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StreamInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cfaV1(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; cfa: string }>;

    id(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _id: PromiseOrValue<BigNumberish>,
      _host: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _streamCreator: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    streamCreator(overrides?: CallOverrides): Promise<[string]>;
  };

  cfaV1(
    overrides?: CallOverrides
  ): Promise<[string, string] & { host: string; cfa: string }>;

  id(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _id: PromiseOrValue<BigNumberish>,
    _host: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _receiver: PromiseOrValue<string>,
    _streamCreator: PromiseOrValue<string>,
    _flowRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  streamCreator(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cfaV1(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; cfa: string }>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _id: PromiseOrValue<BigNumberish>,
      _host: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _streamCreator: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    streamCreator(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    cfaV1(overrides?: CallOverrides): Promise<BigNumber>;

    id(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _id: PromiseOrValue<BigNumberish>,
      _host: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _streamCreator: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    streamCreator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cfaV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _id: PromiseOrValue<BigNumberish>,
      _host: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _streamCreator: PromiseOrValue<string>,
      _flowRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    streamCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
