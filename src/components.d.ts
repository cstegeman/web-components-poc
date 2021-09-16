/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface CbButton {
        "buttonType"?: 'button' | 'submit';
        "isDisabled"?: boolean;
        "isFullWidth"?: boolean;
        "isLoading"?: boolean;
        "isRound"?: boolean;
        "isSticky"?: 'left' | 'right';
        "size"?: 'tiny' | 'small' | 'large';
        "type"?: 'secondary' | 'secondary-blue' | 'order' | 'transparent';
    }
    interface CbNotice {
        "dismissible": boolean;
        "header": string;
        "message": string;
        "type"?: 'confirmation' | 'warning' | 'critical';
    }
}
declare global {
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCbButtonElement extends Components.CbButton, HTMLStencilElement {
    }
    var HTMLCbButtonElement: {
        prototype: HTMLCbButtonElement;
        new (): HTMLCbButtonElement;
    };
    interface HTMLCbNoticeElement extends Components.CbNotice, HTMLStencilElement {
    }
    var HTMLCbNoticeElement: {
        prototype: HTMLCbNoticeElement;
        new (): HTMLCbNoticeElement;
    };
    interface HTMLElementTagNameMap {
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "cb-button": HTMLCbButtonElement;
        "cb-notice": HTMLCbNoticeElement;
    }
}
declare namespace LocalJSX {
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface CbButton {
        "buttonType"?: 'button' | 'submit';
        "isDisabled"?: boolean;
        "isFullWidth"?: boolean;
        "isLoading"?: boolean;
        "isRound"?: boolean;
        "isSticky"?: 'left' | 'right';
        "onStartedLoading"?: (event: CustomEvent<any>) => void;
        "onStoppedLoading"?: (event: CustomEvent<any>) => void;
        "size"?: 'tiny' | 'small' | 'large';
        "type"?: 'secondary' | 'secondary-blue' | 'order' | 'transparent';
    }
    interface CbNotice {
        "dismissible"?: boolean;
        "header"?: string;
        "message"?: string;
        "type"?: 'confirmation' | 'warning' | 'critical';
    }
    interface IntrinsicElements {
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "cb-button": CbButton;
        "cb-notice": CbNotice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "cb-button": LocalJSX.CbButton & JSXBase.HTMLAttributes<HTMLCbButtonElement>;
            "cb-notice": LocalJSX.CbNotice & JSXBase.HTMLAttributes<HTMLCbNoticeElement>;
        }
    }
}
