### NG-ZORRO A11Y FORK

This is a fork of '8.x' branch of an official NG-ZORRO repository.

Below you can see the list of the most significant changes.

#### Collapse panel:
+ Header is focusable by TAB key and is wrapped in `<a>` element with class `ant-collapse-arrow-link`.
+ All content is hidden when a panel is collapsed.
+ New `nzHeadingAriaLabel` attribute: if not null - a panel's header will be marked with `role="heading"` and `aria-label` with provided value.
+ Can be toggled by ENTER or SPACE key press.
+ `aria-disabled` attribute displaying current state.
+ New `focusOnHeader()` method.

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
+ New `nzHeadingAriaLabel` attribute: if not null - a panel's header will be marked with `role="heading"` and `aria-label` with provided value (+ corresponding attribute `nzHeadingAriaLevel`).

#### Modal:
+ Header is wrapped in `<h4>` element.
+ `aria-modal="true"` attribute for a modal window.
+ `role="heading"` for a header.
+ Focusing on a header on a modal appearing. 
+ Destroying of a focus trap is blocked.

#### Icon:
+ Value of `aria-label` (optional) may be specified with `nzIconLabel` attribute.

#### Badge:
+ Inactive numbers of a counter are marked with `aria-hidden` attribute.

#### Radio:
+ `aria-checked` attribute displaying current state.
+ `nzLabelledById`/`nzGroupLabelledById` attribute for a pointer to an element with a corresponding description.
+ Radio-group is wrapped in an additional `div` element with `role="radiogroup"` attribute.
+ `nzTabIndex` attribute.

#### Menu:
+ Submenu-item is focusable by TAB key.
+ Collapsed content is not rendered (`*ngIf`-condition).

#### Popover:
+ Autofocusing on a header on opening.
+ `nzShowPopoverCloseButton` attribute for enabling a close-button (and `nzPopoverCloseButtonLabel` for setting `aria-label` attribute for it).
+ `nzPopoverForceRestoreFocus` attribute for restoring a focus on an origin-element after popover hiding.

#### Tabs:
+ `tabindex` attribute for selected tab.
+ Navigation with arrow keys.
+ Autofocusing after a navigation with arrow keys.
+ `nzTitleAriaLabel` attribute for a tab.
+ `nzPreselectionMode` for a tab-set. It's `false` by default, but when it's `true` - it will be necessary to click the space key to switch a tab when navigating with the arrow keys.

#### Table:
+ Styles fixes for <th> elements within <tbody>.

#### Checkbox:
+ `nzAriaLabel` attribute.
+ `aria-checked` attribute displaying current state.
+ `nzLabelledById` attribute for a pointer to an element with a corresponding description.

### Select:
+ `nzAriaLabel` attribute.