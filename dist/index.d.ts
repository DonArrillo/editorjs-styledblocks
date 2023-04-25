export interface StyledBlocksStyle {
    title: string;
    key: string;
    background: string;
    icon: string;
}
export declare class StyledBlocksTune {
    data: string;
    blockContent: any;
    styles: StyledBlocksStyle[];
    constructor({ data, config }: any);
    static get isTune(): boolean;
    wrap(blockContent: HTMLElement, style: StyledBlocksStyle): HTMLElement;
    save(): string;
    protected addButton(style: StyledBlocksStyle): HTMLElement;
    render(): HTMLElement;
}
