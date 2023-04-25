"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBlocksTune = void 0;
class StyledBlocksTune {
    constructor({ data, config }) {
        if (!data) {
            data = '';
        }
        this.data = data;
        this.styles = [];
        console.log('hest c', config);
        if (config && config.styles) {
            this.styles = config.styles;
        }
    }
    static get isTune() {
        return true;
    }
    wrap(blockContent, style) {
        var _a;
        blockContent.style.backgroundColor = '';
        blockContent.style.paddingLeft = '';
        (_a = blockContent.querySelector('.styled-blocks-label')) === null || _a === void 0 ? void 0 : _a.remove();
        if (this.data) {
            const label = window.document.createElement('div');
            label.classList.add('styled-blocks-label');
            label.innerText = style.title;
            label.style.position = 'absolute';
            label.style.top = '3px';
            label.style.right = '3px';
            label.style.opacity = '0.5';
            blockContent.appendChild(label);
            blockContent.style.backgroundColor = style.background;
            blockContent.style.position = 'relative';
            blockContent.style.paddingLeft = '1em';
            blockContent.querySelector;
        }
        this.blockContent = blockContent;
        return blockContent;
    }
    save() {
        return this.data;
    }
    addButton(style) {
        console.log('hest');
        const button = window.document.createElement('div');
        const icon = window.document.createElement('div');
        icon.classList.add('ce-popover__item-icon');
        icon.innerHTML = style.icon;
        // Create label
        const label = window.document.createElement('div');
        label.innerText = style.title;
        label.classList.add('ce-popover__item-label');
        button.classList.add('ce-popover__item');
        button.appendChild(icon);
        button.setAttribute('data-styled-block-style', this.data);
        button.appendChild(label);
        button.addEventListener('click', () => {
            if (style.key === this.data) {
                this.data = '';
            }
            else {
                this.data = style.key;
            }
            this.wrap(this.blockContent, style);
        });
        return button;
    }
    render() {
        const self = this;
        const wrapper = window.document.createElement('div');
        // let button;
        this.styles.forEach((style) => {
            const button = self.addButton(style);
            wrapper.appendChild(button);
        });
        // if (!button) {
        //     button = this.addButton(this.styles[0]);
        // }
        return wrapper;
    }
}
exports.StyledBlocksTune = StyledBlocksTune;
