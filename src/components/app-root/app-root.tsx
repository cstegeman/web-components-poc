import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <cb-header></cb-header>
        <main>
          <cb-button>Button text</cb-button>
          <cb-notice>Notice text</cb-notice>
        </main>
      </div>
    );
  }
}
