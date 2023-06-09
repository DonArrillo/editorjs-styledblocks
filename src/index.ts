"use strict"

export interface StyledBlocksStyle {
    title: string
    key: string
    background: string
    icon: string
}

interface IConfig {
    styles: StyledBlocksStyle[]
}

const defaultStyle: StyledBlocksStyle = {
    title: '',
    key: '',
    background: '',
    icon: '',
}

export default class StyledBlocksTune {
    data: string
    blockContent: any
    styles: StyledBlocksStyle[]

    constructor({ data, config }: any) {
        if (!data) {
            data = '';
        }
        this.data = data;
        this.styles = [];
        if (config && config.styles) {
            this.styles = config.styles;
        }
    }

    static get isTune() {
        return true;
    }

    wrap(blockContent: HTMLElement, style: StyledBlocksStyle) {
        blockContent.style.backgroundColor = '';
        blockContent.style.paddingLeft = '';
        blockContent.querySelector('.styled-blocks-label')?.remove();

        if (this.data) {
            if (!style) {
                style = this.styles.find((s: StyledBlocksStyle) => s.key === this.data) || defaultStyle;
            }
            const label = window.document.createElement('div');
            label.classList.add('styled-blocks-label');
            label.innerText = style.title;
            label.style.position = 'absolute';
            label.style.top = '8px';
            label.style.right = '24px';
            label.style.opacity = '0.5';
            label.style.fontSize = '0.7em';
            blockContent.prepend(label);
            blockContent.style.backgroundColor = style.background;
            blockContent.style.position = 'relative';
            blockContent.style.paddingLeft = '1em';
            blockContent.querySelector
        }
        this.blockContent = blockContent;
        return blockContent;
    }

    save() {
        return this.data;
    }

    protected addButton(style: StyledBlocksStyle): HTMLElement {
        const button = window.document.createElement('div');
        const icon = window.document.createElement('div');
        icon.classList.add('ce-popover__item-icon');
        icon.style.display = 'inline-block';
        icon.style.marginRight = '8px';
        icon.style.clear = 'left';
        icon.innerHTML = style.icon;

        // Create label
        const label = window.document.createElement('div');
        label.innerText = style.title;
        label.classList.add('ce-popover__item-label');
        label.style.display = 'inline-block';
        button.classList.add('ce-popover__item');
        button.style.paddingBottom = '4px';
        button.appendChild(icon);
        button.setAttribute('data-styled-block-style', style.key)
        button.appendChild(label);
        button.addEventListener('click', () => {
            if (style.key === this.data) {
                this.data = '';
            } else {
                this.data = style.key;
            }
            this.wrap(this.blockContent, style);
        });
        return button;
    }

    // Render buttons for tune menu.
    public render(): HTMLElement {
        const self = this;
        const wrapper = window.document.createElement('div');
        this.styles.forEach((style: StyledBlocksStyle) => {
            const button = self.addButton(style);
            wrapper.appendChild(button);
        });
        return wrapper;
    }
}
