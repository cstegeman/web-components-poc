import { Component, Prop, State, h } from '@stencil/core';

function isUndefined(value: any): boolean {
  return value === undefined || value === 'undefined';
}

@Component({
  tag: 'cb-notice',
  styleUrl: 'cb-notice.css',
  shadow: true,
})
export class CbNotice {
  @Prop() header: string;
  @Prop() message: string;
  @Prop() type?: 'confirmation' | 'warning' | 'critical' = 'critical';
  @Prop() dismissible: boolean;

  @State() open: boolean = true;

  handleClose() {
    this.open = false;
  }

  render() {
    const classes = {
      'notice flex': true,
      [`notice--${this.type}`]: true
    };

    const header =(() => {
      return (this.header && !isUndefined(this.header))
        && <strong>{ this.header }</strong>
    })();

    const close = (() => {
      return this.dismissible
        && (
          <button class="notice__close-button p--2" onClick={() => this.handleClose()} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        )
    })();

    return this.open
      && (
        <div class={ classes } role="alert">
          <div class="notice__content flex flex--column grow--1">
            { header }
            <span><slot /></span>
          </div>
          { close }
        </div>
      );
  }
}
