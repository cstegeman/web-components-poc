import { Component, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'cb-button',
  styleUrl: 'cb-button.css',
  shadow: true,
})
export class CbButton {

  @Prop() buttonType?: 'button' | 'submit' = 'submit';
  @Prop() type?: 'secondary' | 'secondary-blue' | 'order' | 'transparent';
  @Prop() size?: 'tiny' | 'small' | 'large';
  @Prop() isFullWidth?: boolean;
  @Prop() isRound?: boolean;
  @Prop() isSticky?: 'left' | 'right';
  @Prop() isLoading?: boolean;
  @Prop() isDisabled?: boolean;

  @Event() startedLoading: EventEmitter;
  @Event() stoppedLoading: EventEmitter;

  @Watch('isLoading')
  onIsLoadingChanged(newValue: boolean) {
    if (newValue) {
      this.startedLoading.emit();
    } else {
      this.stoppedLoading.emit();
    }
  }

  render() {
    const classNames = {
      'button': true,
      [`button--${this.size}`]: this.size !== undefined,
      'button--secondary': this.type === 'secondary',
      'button--blue-secondary': this.type === 'secondary-blue',
      'button--order': this.type === 'order',
      'button--transparent': this.type === 'transparent',
      'button--full-width': this.isFullWidth,
      'button--round': this.isRound,
      'js-button-sticky': this.isSticky !== undefined,
      [`button--sticky-${this.isSticky || 'left'}`]: this.isSticky !== undefined,
      'is-loading': this.isLoading,
      'is-disabled': this.isDisabled
    }
    return (
      <button type={this.buttonType}
              class={classNames}
              disabled={this.isDisabled}
      >
        <slot/>
      </button>
    );
  }

}
