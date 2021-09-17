import { Component, h } from '@stencil/core';

@Component({
  tag: 'cb-header',
  styleUrl: 'cb-header.css',
  shadow: true,
})
export class CbHeader {
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  }

}
