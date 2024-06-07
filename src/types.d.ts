import type {Color, Object3D} from "three";
import {Texture} from "three";

export type ContentDirectionAttr = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type JustifyContentAttr = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItemsAttr = 'start' | 'center' | 'end' | 'stretch';
export type BestFitAttr = 'grow' | 'shrink' | 'auto' | 'none';
export type BackgroundSizeAttr = 'grow' | 'shrink' | 'auto' | 'none';
export type FontKerningAttr = 'none' | 'normal';
export type TextAlignAttr =
	'left'
	| 'center'
	| 'right'
	| 'justify'
	| 'justify-left'
	| 'justify-center'
	| 'justify- right';
export type WhiteSpaceAttr = 'normal' | 'pre-line' | 'pre-wrap' | 'pre' | 'nowrap';

export type CommonOptions = {
	offset?: number;
}

//#region BLOCK
export type BlockOptions = {
	width: number;
	height: number;
	fontSize?: number;
	padding?: number;
	margin?: number;
	contentDirection?: ContentDirectionAttr;
	justifyContent?: JustifyContentAttr;
	alignItems?: AlignItemsAttr;
	interLine?: number;
	hiddenOverflow?: boolean;
	bestFit?: BestFitAttr;
	backgroundColor?: Color;
	backgroundOpacity?: number;
	backgroundTexture?: Texture;
	backgroundSize?: BackgroundSizeAttr;
	borderRadius?: number | [topLeft: number, topRight: number, bottomRight: number, bottomLeft: number];
	borderWidth?: number;
	borderColor?: Color;
	borderOpacity?: number;

	fontFamily?: string;
	fontTexture?: string;
}

export type BlockState = {
	state: string;
	attributes: CommonOptions & BlockOptions;
	onSet: Function
}

export declare class Block extends Object3D {
	width: number;
	height: number;
	fontSize?: number;
	padding?: number;
	margin?: number;
	contentDirection?: ContentDirectionAttr;
	justifyContent?: JustifyContentAttr;
	alignItems?: AlignItemsAttr;
	interLine?: number;
	hiddenOverflow?: boolean;
	bestFit?: BestFitAttr;
	backgroundColor?: Color;
	backgroundOpacity?: number;
	backgroundTexture?: Texture;
	backgroundSize?: BackgroundSizeAttr;
	borderRadius?: number | [topLeft: number, topRight: number, bottomRight: number, bottomLeft: number];
	borderWidth?: number;
	borderColor?: Color;
	borderOpacity?: number;

	fontFamily?: string;
	fontTexture?: string;

	constructor(options: CommonOptions & BlockOptions);

	public update(updateParsing: boolean, updateLayout: boolean, updateInner: boolean): void;

	public setupState(opt: BlockState): void;

	public setState(state: string): void;

	public set(options: Partial<CommonOptions & BlockOptions>): void;

	public onAfterUpdate: Function | undefined;
}

//#endregion

//#region TEXT
export type TextOptions = {
	content: string;
	fontKerning: FontKerningAttr;
	letterSpacing: number;
	textAlign: TextAlignAttr;
	whiteSpace: WhiteSpaceAttr;
	breakOn: string;

	fontColor: Color;
	fontOpacity: number;
	fontSuperSampling: boolean;
}

export type TextState = {
	state: string;
	attributes: CommonOptions & TextOptions;
	onSet: Function
}

export declare class Text extends Object3D {
	content: string;
	fontKerning: FontKerningAttr;
	letterSpacing: number;
	textAlign: TextAlignAttr;
	whiteSpace: WhiteSpaceAttr;
	breakOn: string;

	fontColor: Color;
	fontOpacity: number;
	fontSuperSampling: boolean;

	constructor(options: CommonOptions & TextOptions);

	public update(updateParsing: boolean, updateLayout: boolean, updateInner: boolean): void;

	public setupState(opt: TextState): void;

	public setState(state: string): void;

	public set(options: Partial<CommonOptions & TextOptions>): void;

	public onAfterUpdate: Function | undefined;
}

//#endregion

export type InlineBlockOptions = {
	// @todo add missing properties
	[property: string]: any;
}

export declare class InlineBlock extends Object3D {
	constructor(options: InlineBlockOptions);
}

export type KeyboardOptions = {
	// @todo add missing properties
	[property: string]: any;
}

export declare class Keyboard extends Object3D {
	constructor(options: KeyboardOptions);
}

export declare namespace FontLibrary {
	export function setFontFamily(): void;

	export function setFontTexture(): void;

	export function getFontOf(): void;

	// @todo fix type
	export function addFont(...args: any[]): any;
}

export declare function update(): void;
