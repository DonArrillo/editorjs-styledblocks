import { StyledBlocksStyle } from "index";

declare module 'editorjs-styledblocks' {

    export class StyledBlocksTune {
        data: string;
        blockContent: any;
        styles: StyledBlocksStyle[];

        constructor({ data, config }: any);

        static get isTune(): boolean;

        wrap(blockContent: HTMLElement, style: StyledBlocksStyle): HTMLElement;

        save(): string;
    }
}
