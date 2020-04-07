### NG-ZORRO A11Y FORK

This is a fork of '8.x' branch of an official NG-ZORRO repository.

Below you can see the list of the most significant changes.

#### Collapse panel:
+ Header is focusable by TAB key and is wrapped in `<a>` element with class `ant-collapse-arrow-link`.
+ All content is hidden when a panel is collapsed.
+ New `nzHeadingAriaLabel` attribute: if not null - a panel's header will be marked with `role="heading"` and `aria-label` with provided value.

#### Switch:
+ `nzLabel` attribute for an additional text label.
+ `aria-checked` attribute displaying current state.
+ Marked with `role="checkbox"` attribute.

#### Tooltip:
+ New trigger - `combined`. A tooltip with such trigger will be invoked both on hover and on focus.

#### Notifications:
+ `role="alert"` attribute for notification's description.

#### Card:
+ Header is wrapped in `<h4>` element.

#### Modal:
+ Header is wrapped in `<h4>` element.
+ `aria-modal="true"` attribute for a modal window.
+ `role="heading"` for a header.
+ Focusing on a header on a modal appearing. 

#### Icon:
+ Value of `aria-label` (optional) may be specified with `nzIconLabel` attribute.

#### Badge:
+ Inactive numbers of a counter are marked with `aria-hidden` attribute.

#### Radio:
+ `aria-checked` attribute displaying current state.
+ `nzLabelledById` attribute for a pointer to an element with a corresponding description.
+ Radio-group is wrapped in an additional `div` element with `role="radiogroup"` attribute.

#### Menu:
+ Submenu-item is focusable by TAB key.
+ Collapsed content is not rendered (`*ngIf`-condition).

#### Popover:
+ Autofocusing on a header on opening.
+ `nzShowPopoverCloseButton` attribute for enabling a close-button (and `nzPopoverCloseButtonLabel` for setting `aria-label` attribute for it).
+ `nzPopoverForceRestoreFocus` attribute for restoring a focus on an origin-element after popover hiding.

#### Tabs:
+ Tabs have a `tabindex` now.
+ Navigation with arrow keys.
+ `nzTitleAriaLabel` attribute for a tab.