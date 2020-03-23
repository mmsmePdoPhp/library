/*!
 * BootstrapVue Custom CSS (https://bootstrap-vue.js.org)
 */
.bv-no-focus-ring:focus {
    outline: none;
  }
  
  @media (max-width: 575.98px) {
    .bv-d-xs-down-none {
      display: none !important;
    }
  }
  
  @media (max-width: 767.98px) {
    .bv-d-sm-down-none {
      display: none !important;
    }
  }
  
  @media (max-width: 991.98px) {
    .bv-d-md-down-none {
      display: none !important;
    }
  }
  
  @media (max-width: 1199.98px) {
    .bv-d-lg-down-none {
      display: none !important;
    }
  }
  
  .bv-d-xl-down-none {
    display: none !important;
  }
  
  .form-control.focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .form-control.focus.is-valid {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
  
  .form-control.focus.is-invalid {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
  
  .b-form-btn-label-control {
    background-image: none;
  }
  
  [dir="rtl"] .b-form-btn-label-control, .b-form-btn-label-control[dir="rtl"] {
    flex-direction: row-reverse;
  }
  
  [dir="rtl"] .b-form-btn-label-control > label, .b-form-btn-label-control[dir="rtl"] > label {
    text-align: right;
  }
  
  .b-form-btn-label-control > .btn {
    line-height: 1;
    font-size: inherit;
    box-shadow: none !important;
  }
  
  .b-form-btn-label-control > .btn:disabled {
    pointer-events: none;
  }
  
  .b-form-btn-label-control.is-valid > .btn {
    color: #28a745;
  }
  
  .b-form-btn-label-control.is-invalid > .btn {
    color: #dc3545;
  }
  
  .b-form-btn-label-control > label {
    outline: 0;
    cursor: pointer;
    min-height: calc(calc(1.5em + 0.75rem + 2px) - 2px);
  }
  
  .b-form-btn-label-control > label.form-control-sm {
    min-height: calc(calc(1.5em + 0.5rem + 2px) - 2px);
  }
  
  .b-form-btn-label-control > label.form-control-lg {
    min-height: calc(calc(1.5em + 1rem + 2px) - 2px);
  }
  
  .b-form-btn-label-control[aria-disabled="true"], .b-form-btn-label-control[aria-readonly="true"] {
    background-color: #e9ecef;
    opacity: 1;
  }
  
  .b-form-btn-label-control[aria-disabled="true"] {
    pointer-events: none;
  }
  
  .b-form-btn-label-control[aria-disabled="true"] > label {
    cursor: default;
  }
  
  .b-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    font-weight: 400;
    line-height: 1;
    max-width: 100%;
    max-height: auto;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
   box-shadow 0.15s ease-in-out;
  }
  
  .b-avatar:focus {
    outline: 0;
  }
  
  .b-avatara:not(:disabled):not(.disabled), .b-avatarbutton:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  
  .b-avatar.disabled, .b-avatar:disabled, .b-avatar[disabled] {
    opacity: 0.65;
    pointer-events: none;
  }
  
  .b-avatar > span {
    border-radius: inherit;
  }
  
  .b-avatar .b-icon {
    width: 60%;
    height: auto;
    max-width: 100%;
    max-height: auto;
  }
  
  .b-avatar img {
    width: 90%;
    height: 90%;
    max-width: 100%;
    max-height: auto;
    border-radius: inherit;
  }
  
  .b-calendar .b-calendar-inner {
    min-width: 250px;
  }
  
  .b-calendar output.readonly {
    background-color: #e9ecef;
    opacity: 1;
  }
  
  .b-calendar .form-control[role="application"] {
    overflow: hidden;
  }
  
  .b-calendar .b-calendar-grid-body .col[data-date] .btn {
    width: 32px;
    height: 32px;
    font-size: 14px;
    line-height: 1;
    margin: 3px auto;
    padding: 9px 0;
  }
  
  .b-calendar .btn:disabled, .b-calendar .btn.disabled, .b-calendar .btn[aria-disabled="true"] {
    cursor: default;
    pointer-events: none;
  }
  
  .card-img-left {
    border-top-left-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }
  
  .card-img-right {
    border-top-right-radius: calc(0.25rem - 1px);
    border-bottom-right-radius: calc(0.25rem - 1px);
  }
  
  .dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret::after {
    display: none !important;
  }
  
  .dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret::before {
    display: none !important;
  }
  
  .dropdown .dropdown-menu:focus {
    outline: none;
  }
  
  .b-dropdown-form {
    display: inline-block;
    padding: 0.25rem 1.5rem;
    width: 100%;
    clear: both;
    font-weight: 400;
  }
  
  .b-dropdown-form:focus {
    outline: 1px dotted !important;
    outline: 5px auto -webkit-focus-ring-color !important;
  }
  
  .b-dropdown-form.disabled, .b-dropdown-form:disabled {
    outline: 0 !important;
    color: #6c757d;
    pointer-events: none;
  }
  
  .b-dropdown-text {
    display: inline-block;
    padding: 0.25rem 1.5rem;
    margin-bottom: 0;
    width: 100%;
    clear: both;
    font-weight: lighter;
  }
  
  .custom-checkbox.b-custom-control-lg,
  .input-group-lg .custom-checkbox {
    font-size: 1.25rem;
    line-height: 1.5;
    padding-left: 1.875rem;
  }
  
  .custom-checkbox.b-custom-control-lg .custom-control-label::before,
  .input-group-lg .custom-checkbox .custom-control-label::before {
    top: 0.3125rem;
    left: -1.875rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.3rem;
  }
  
  .custom-checkbox.b-custom-control-lg .custom-control-label::after,
  .input-group-lg .custom-checkbox .custom-control-label::after {
    top: 0.3125rem;
    left: -1.875rem;
    width: 1.25rem;
    height: 1.25rem;
    background-size: 50% 50%;
  }
  
  .custom-checkbox.b-custom-control-sm,
  .input-group-sm .custom-checkbox {
    font-size: 0.875rem;
    line-height: 1.5;
    padding-left: 1.3125rem;
  }
  
  .custom-checkbox.b-custom-control-sm .custom-control-label::before,
  .input-group-sm .custom-checkbox .custom-control-label::before {
    top: 0.21875rem;
    left: -1.3125rem;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 0.2rem;
  }
  
  .custom-checkbox.b-custom-control-sm .custom-control-label::after,
  .input-group-sm .custom-checkbox .custom-control-label::after {
    top: 0.21875rem;
    left: -1.3125rem;
    width: 0.875rem;
    height: 0.875rem;
    background-size: 50% 50%;
  }
  
  .custom-switch.b-custom-control-lg,
  .input-group-lg .custom-switch {
    padding-left: 2.8125rem;
  }
  
  .custom-switch.b-custom-control-lg .custom-control-label,
  .input-group-lg .custom-switch .custom-control-label {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  
  .custom-switch.b-custom-control-lg .custom-control-label::before,
  .input-group-lg .custom-switch .custom-control-label::before {
    top: 0.3125rem;
    height: 1.25rem;
    left: -2.8125rem;
    width: 2.1875rem;
    border-radius: 0.625rem;
  }
  
  .custom-switch.b-custom-control-lg .custom-control-label::after,
  .input-group-lg .custom-switch .custom-control-label::after {
    top: calc( 0.3125rem + 2px);
    left: calc( -2.8125rem + 2px);
    width: calc( 1.25rem - 4px);
    height: calc( 1.25rem - 4px);
    border-radius: 0.625rem;
    background-size: 50% 50%;
  }
  
  .custom-switch.b-custom-control-lg .custom-control-input:checked ~ .custom-control-label::after,
  .input-group-lg .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
    -webkit-transform: translateX(0.9375rem);
    transform: translateX(0.9375rem);
  }
  
  .custom-switch.b-custom-control-sm,
  .input-group-sm .custom-switch {
    padding-left: 1.96875rem;
  }
  
  .custom-switch.b-custom-control-sm .custom-control-label,
  .input-group-sm .custom-switch .custom-control-label {
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .custom-switch.b-custom-control-sm .custom-control-label::before,
  .input-group-sm .custom-switch .custom-control-label::before {
    top: 0.21875rem;
    left: -1.96875rem;
    width: 1.53125rem;
    height: 0.875rem;
    border-radius: 0.4375rem;
  }
  
  .custom-switch.b-custom-control-sm .custom-control-label::after,
  .input-group-sm .custom-switch .custom-control-label::after {
    top: calc( 0.21875rem + 2px);
    left: calc( -1.96875rem + 2px);
    width: calc( 0.875rem - 4px);
    height: calc( 0.875rem - 4px);
    border-radius: 0.4375rem;
    background-size: 50% 50%;
  }
  
  .custom-switch.b-custom-control-sm .custom-control-input:checked ~ .custom-control-label::after,
  .input-group-sm .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
    -webkit-transform: translateX(0.65625rem);
    transform: translateX(0.65625rem);
  }
  
  .input-group > .input-group-prepend > .btn-group > .btn,
  .input-group > .input-group-append:not(:last-child) > .btn-group > .btn,
  .input-group > .input-group-append:last-child > .btn-group:not(:last-child):not(.dropdown-toggle) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .input-group > .input-group-append > .btn-group > .btn,
  .input-group > .input-group-prepend:not(:first-child) > .btn-group > .btn,
  .input-group > .input-group-prepend:first-child > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .b-custom-control-lg.custom-file,
  .b-custom-control-lg .custom-file-input,
  .b-custom-control-lg .custom-file-label,
  .input-group-lg.custom-file,
  .input-group-lg .custom-file-input,
  .input-group-lg .custom-file-label {
    font-size: 1.25rem;
    height: calc(1.5em + 1rem + 2px);
  }
  
  .b-custom-control-lg .custom-file-label,
  .b-custom-control-lg .custom-file-label:after,
  .input-group-lg .custom-file-label,
  .input-group-lg .custom-file-label:after {
    padding: 0.5rem 1rem;
    line-height: 1.5;
  }
  
  .b-custom-control-lg .custom-file-label,
  .input-group-lg .custom-file-label {
    border-radius: 0.3rem;
  }
  
  .b-custom-control-lg .custom-file-label::after,
  .input-group-lg .custom-file-label::after {
    font-size: inherit;
    height: calc( 1.5em + 1rem);
    border-radius: 0 0.3rem 0.3rem 0;
  }
  
  .b-custom-control-sm.custom-file,
  .b-custom-control-sm .custom-file-input,
  .b-custom-control-sm .custom-file-label,
  .input-group-sm.custom-file,
  .input-group-sm .custom-file-input,
  .input-group-sm .custom-file-label {
    font-size: 0.875rem;
    height: calc(1.5em + 0.5rem + 2px);
  }
  
  .b-custom-control-sm .custom-file-label,
  .b-custom-control-sm .custom-file-label:after,
  .input-group-sm .custom-file-label,
  .input-group-sm .custom-file-label:after {
    padding: 0.25rem 0.5rem;
    line-height: 1.5;
  }
  
  .b-custom-control-sm .custom-file-label,
  .input-group-sm .custom-file-label {
    border-radius: 0.2rem;
  }
  
  .b-custom-control-sm .custom-file-label::after,
  .input-group-sm .custom-file-label::after {
    font-size: inherit;
    height: calc( 1.5em + 0.5rem);
    border-radius: 0 0.2rem 0.2rem 0;
  }
  
  .was-validated .form-control:invalid,
  .was-validated .form-control:valid, .form-control.is-invalid, .form-control.is-valid {
    background-position: right calc(0.375em + 0.1875rem) center;
  }
  
  input[type="color"].form-control {
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.125rem 0.25rem;
  }
  
  input[type="color"].form-control.form-control-sm,
  .input-group-sm input[type="color"].form-control {
    height: calc(1.5em + 0.5rem + 2px);
    padding: 0.125rem 0.25rem;
  }
  
  input[type="color"].form-control.form-control-lg,
  .input-group-lg input[type="color"].form-control {
    height: calc(1.5em + 1rem + 2px);
    padding: 0.125rem 0.25rem;
  }
  
  input[type="color"].form-control:disabled {
    background-color: #adb5bd;
    opacity: 0.65;
  }
  
  .input-group > .custom-range {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
  
  .input-group > .custom-range + .form-control,
  .input-group > .custom-range + .form-control-plaintext,
  .input-group > .custom-range + .custom-select,
  .input-group > .custom-range + .custom-range,
  .input-group > .custom-range + .custom-file {
    margin-left: -1px;
  }
  
  .input-group > .form-control + .custom-range,
  .input-group > .form-control-plaintext + .custom-range,
  .input-group > .custom-select + .custom-range,
  .input-group > .custom-range + .custom-range,
  .input-group > .custom-file + .custom-range {
    margin-left: -1px;
  }
  
  .input-group > .custom-range:focus {
    z-index: 3;
  }
  
  .input-group > .custom-range:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .input-group > .custom-range:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .input-group > .custom-range {
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0 0.75rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    height: calc(1.5em + 0.75rem + 2px);
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .input-group > .custom-range {
      transition: none;
    }
  }
  
  .input-group > .custom-range:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .input-group > .custom-range:disabled, .input-group > .custom-range[readonly] {
    background-color: #e9ecef;
  }
  
  .input-group-lg > .custom-range {
    height: calc(1.5em + 1rem + 2px);
    padding: 0 1rem;
    border-radius: 0.3rem;
  }
  
  .input-group-sm > .custom-range {
    height: calc(1.5em + 0.5rem + 2px);
    padding: 0 0.5rem;
    border-radius: 0.2rem;
  }
  
  .was-validated .input-group .custom-range:valid, .input-group .custom-range.is-valid {
    border-color: #28a745;
  }
  
  .was-validated .input-group .custom-range:valid:focus, .input-group .custom-range.is-valid:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
  
  .was-validated .custom-range:valid:focus::-webkit-slider-thumb, .custom-range.is-valid:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;
  }
  
  .was-validated .custom-range:valid:focus::-moz-range-thumb, .custom-range.is-valid:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;
  }
  
  .was-validated .custom-range:valid:focus::-ms-thumb, .custom-range.is-valid:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;
  }
  
  .was-validated .custom-range:valid::-webkit-slider-thumb, .custom-range.is-valid::-webkit-slider-thumb {
    background-color: #28a745;
    background-image: none;
  }
  
  .was-validated .custom-range:valid::-webkit-slider-thumb:active, .custom-range.is-valid::-webkit-slider-thumb:active {
    background-color: #9be7ac;
    background-image: none;
  }
  
  .was-validated .custom-range:valid::-webkit-slider-runnable-track, .custom-range.is-valid::-webkit-slider-runnable-track {
    background-color: rgba(40, 167, 69, 0.35);
  }
  
  .was-validated .custom-range:valid::-moz-range-thumb, .custom-range.is-valid::-moz-range-thumb {
    background-color: #28a745;
    background-image: none;
  }
  
  .was-validated .custom-range:valid::-moz-range-thumb:active, .custom-range.is-valid::-moz-range-thumb:active {
    background-color: #9be7ac;
    background-image: none;
  }
  
  .was-validated .custom-range:valid::-moz-range-track, .custom-range.is-valid::-moz-range-track {
    background: rgba(40, 167, 69, 0.35);
  }
  
  .was-validated .custom-range:valid ~ .valid-feedback,
  .was-validated .custom-range:valid ~ .valid-tooltip, .custom-range.is-valid ~ .valid-feedback,
  .custom-range.is-valid ~ .valid-tooltip {
    display: block;
  }
  
  .was-validated .custom-range:valid::-ms-thumb, .custom-range.is-valid::-ms-thumb {
    background-color: #28a745;
    background-image: none;
  }
  
  .was-validated .custom-range:valid::-ms-thumb:active, .custom-range.is-valid::-ms-thumb:active {
    background-color: #9be7ac;
    background-image: none;
  }
  
  .was-validated .custom-range:valid::-ms-track-lower, .custom-range.is-valid::-ms-track-lower {
    background: rgba(40, 167, 69, 0.35);
  }
  
  .was-validated .custom-range:valid::-ms-track-upper, .custom-range.is-valid::-ms-track-upper {
    background: rgba(40, 167, 69, 0.35);
  }
  
  .was-validated .input-group .custom-range:invalid, .input-group .custom-range.is-invalid {
    border-color: #dc3545;
  }
  
  .was-validated .input-group .custom-range:invalid:focus, .input-group .custom-range.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
  
  .was-validated .custom-range:invalid:focus::-webkit-slider-thumb, .custom-range.is-invalid:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;
  }
  
  .was-validated .custom-range:invalid:focus::-moz-range-thumb, .custom-range.is-invalid:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;
  }
  
  .was-validated .custom-range:invalid:focus::-ms-thumb, .custom-range.is-invalid:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;
  }
  
  .was-validated .custom-range:invalid::-webkit-slider-thumb, .custom-range.is-invalid::-webkit-slider-thumb {
    background-color: #dc3545;
    background-image: none;
  }
  
  .was-validated .custom-range:invalid::-webkit-slider-thumb:active, .custom-range.is-invalid::-webkit-slider-thumb:active {
    background-color: #f6cdd1;
    background-image: none;
  }
  
  .was-validated .custom-range:invalid::-webkit-slider-runnable-track, .custom-range.is-invalid::-webkit-slider-runnable-track {
    background-color: rgba(220, 53, 69, 0.35);
  }
  
  .was-validated .custom-range:invalid::-moz-range-thumb, .custom-range.is-invalid::-moz-range-thumb {
    background-color: #dc3545;
    background-image: none;
  }
  
  .was-validated .custom-range:invalid::-moz-range-thumb:active, .custom-range.is-invalid::-moz-range-thumb:active {
    background-color: #f6cdd1;
    background-image: none;
  }
  
  .was-validated .custom-range:invalid::-moz-range-track, .custom-range.is-invalid::-moz-range-track {
    background: rgba(220, 53, 69, 0.35);
  }
  
  .was-validated .custom-range:invalid ~ .invalid-feedback,
  .was-validated .custom-range:invalid ~ .invalid-tooltip, .custom-range.is-invalid ~ .invalid-feedback,
  .custom-range.is-invalid ~ .invalid-tooltip {
    display: block;
  }
  
  .was-validated .custom-range:invalid::-ms-thumb, .custom-range.is-invalid::-ms-thumb {
    background-color: #dc3545;
    background-image: none;
  }
  
  .was-validated .custom-range:invalid::-ms-thumb:active, .custom-range.is-invalid::-ms-thumb:active {
    background-color: #f6cdd1;
    background-image: none;
  }
  
  .was-validated .custom-range:invalid::-ms-track-lower, .custom-range.is-invalid::-ms-track-lower {
    background: rgba(220, 53, 69, 0.35);
  }
  
  .was-validated .custom-range:invalid::-ms-track-upper, .custom-range.is-invalid::-ms-track-upper {
    background: rgba(220, 53, 69, 0.35);
  }
  
  .custom-radio.b-custom-control-lg,
  .input-group-lg .custom-radio {
    font-size: 1.25rem;
    line-height: 1.5;
    padding-left: 1.875rem;
  }
  
  .custom-radio.b-custom-control-lg .custom-control-label::before,
  .input-group-lg .custom-radio .custom-control-label::before {
    top: 0.3125rem;
    left: -1.875rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
  }
  
  .custom-radio.b-custom-control-lg .custom-control-label::after,
  .input-group-lg .custom-radio .custom-control-label::after {
    top: 0.3125rem;
    left: -1.875rem;
    width: 1.25rem;
    height: 1.25rem;
    background: no-repeat 50% / 50% 50%;
  }
  
  .custom-radio.b-custom-control-sm,
  .input-group-sm .custom-radio {
    font-size: 0.875rem;
    line-height: 1.5;
    padding-left: 1.3125rem;
  }
  
  .custom-radio.b-custom-control-sm .custom-control-label::before,
  .input-group-sm .custom-radio .custom-control-label::before {
    top: 0.21875rem;
    left: -1.3125rem;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
  }
  
  .custom-radio.b-custom-control-sm .custom-control-label::after,
  .input-group-sm .custom-radio .custom-control-label::after {
    top: 0.21875rem;
    left: -1.3125rem;
    width: 0.875rem;
    height: 0.875rem;
    background: no-repeat 50% / 50% 50%;
  }
  
  .b-form-spinbutton.form-control {
    text-align: center;
    overflow: hidden;
    background-image: none;
  }
  
  .b-form-spinbutton.form-control.flex-column {
    height: auto;
    width: auto;
  }
  
  [dir="rtl"] .b-form-spinbutton.form-control:not(.flex-column), .b-form-spinbutton.form-control[dir="rtl"]:not(.flex-column) {
    flex-direction: row-reverse;
  }
  
  .b-form-spinbutton.form-control output {
    font-size: inherit;
    outline: 0;
    border: 0;
    background-color: transparent;
  }
  
  .b-form-spinbutton.form-control output > div,
  .b-form-spinbutton.form-control output > bdi {
    display: block;
    min-width: 2.25em;
    height: 1.5em;
  }
  
  .b-form-spinbutton.form-control.d-inline-flex:not(.flex-column),
  .b-form-spinbutton.form-control.d-inline-flex:not(.flex-column) output {
    width: auto;
  }
  
  .b-form-spinbutton.form-control .btn {
    line-height: 1;
    box-shadow: none !important;
  }
  
  .b-form-spinbutton.form-control .btn:disabled {
    pointer-events: none;
  }
  
  .b-form-spinbutton.form-control .btn:hover:not(:disabled) > div > .b-icon {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }
  
  .b-form-spinbutton.form-control.disabled, .b-form-spinbutton.form-control.readonly {
    background-color: #e9ecef;
  }
  
  .b-form-spinbutton.form-control.disabled {
    pointer-events: none;
  }
  
  .b-form-tags.focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .b-form-tags.focus.is-valid {
    border-color: #28a745;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
  
  .b-form-tags.focus.is-invalid {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
  
  .b-form-tags.disabled {
    background-color: #e9ecef;
  }
  
  .b-form-tag {
    font-size: 75%;
    font-weight: normal;
    line-height: 1.5;
  }
  
  .b-form-tag.disabled {
    opacity: 0.75;
  }
  
  .b-form-tag > button.b-form-tag-remove {
    color: inherit;
    font-size: 125%;
    line-height: 1;
    float: none;
  }
  
  .form-control-sm .b-form-tag {
    line-height: 1.5;
  }
  
  .form-control-lg .b-form-tag {
    line-height: 1.5;
  }
  
  .modal-backdrop {
    opacity: 0.5;
  }
  
  .b-pagination-pills .page-item .page-link {
    border-radius: 50rem !important;
    margin-left: 0.25rem;
    line-height: 1;
  }
  
  .b-pagination-pills .page-item:first-child .page-link {
    margin-left: 0;
  }
  
  .popover.b-popover {
    display: block;
    opacity: 1;
    outline: 0;
  }
  
  .popover.b-popover.fade:not(.show) {
    opacity: 0;
  }
  
  .popover.b-popover.show {
    opacity: 1;
  }
  
  .b-popover-primary.popover {
    background-color: #cce5ff;
    border-color: #b8daff;
  }
  
  .b-popover-primary.bs-popover-top > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #b8daff;
  }
  
  .b-popover-primary.bs-popover-top > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #cce5ff;
  }
  
  .b-popover-primary.bs-popover-right > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #b8daff;
  }
  
  .b-popover-primary.bs-popover-right > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #cce5ff;
  }
  
  .b-popover-primary.bs-popover-bottom > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #b8daff;
  }
  
  .b-popover-primary.bs-popover-bottom > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #bdddff;
  }
  
  .b-popover-primary.bs-popover-bottom .popover-header::before, .b-popover-primary.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #bdddff;
  }
  
  .b-popover-primary.bs-popover-left > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #b8daff;
  }
  
  .b-popover-primary.bs-popover-left > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #cce5ff;
  }
  
  .b-popover-primary .popover-header {
    color: #212529;
    background-color: #bdddff;
    border-bottom-color: #a3d0ff;
  }
  
  .b-popover-primary .popover-body {
    color: #004085;
  }
  
  .b-popover-secondary.popover {
    background-color: #e2e3e5;
    border-color: #d6d8db;
  }
  
  .b-popover-secondary.bs-popover-top > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #d6d8db;
  }
  
  .b-popover-secondary.bs-popover-top > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #e2e3e5;
  }
  
  .b-popover-secondary.bs-popover-right > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #d6d8db;
  }
  
  .b-popover-secondary.bs-popover-right > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #e2e3e5;
  }
  
  .b-popover-secondary.bs-popover-bottom > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #d6d8db;
  }
  
  .b-popover-secondary.bs-popover-bottom > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #dadbde;
  }
  
  .b-popover-secondary.bs-popover-bottom .popover-header::before, .b-popover-secondary.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #dadbde;
  }
  
  .b-popover-secondary.bs-popover-left > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #d6d8db;
  }
  
  .b-popover-secondary.bs-popover-left > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #e2e3e5;
  }
  
  .b-popover-secondary .popover-header {
    color: #212529;
    background-color: #dadbde;
    border-bottom-color: #ccced2;
  }
  
  .b-popover-secondary .popover-body {
    color: #383d41;
  }
  
  .b-popover-success.popover {
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  
  .b-popover-success.bs-popover-top > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #c3e6cb;
  }
  
  .b-popover-success.bs-popover-top > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #d4edda;
  }
  
  .b-popover-success.bs-popover-right > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #c3e6cb;
  }
  
  .b-popover-success.bs-popover-right > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #d4edda;
  }
  
  .b-popover-success.bs-popover-bottom > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #c3e6cb;
  }
  
  .b-popover-success.bs-popover-bottom > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #c9e8d1;
  }
  
  .b-popover-success.bs-popover-bottom .popover-header::before, .b-popover-success.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #c9e8d1;
  }
  
  .b-popover-success.bs-popover-left > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #c3e6cb;
  }
  
  .b-popover-success.bs-popover-left > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #d4edda;
  }
  
  .b-popover-success .popover-header {
    color: #212529;
    background-color: #c9e8d1;
    border-bottom-color: #b7e1c1;
  }
  
  .b-popover-success .popover-body {
    color: #155724;
  }
  
  .b-popover-info.popover {
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }
  
  .b-popover-info.bs-popover-top > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #bee5eb;
  }
  
  .b-popover-info.bs-popover-top > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #d1ecf1;
  }
  
  .b-popover-info.bs-popover-right > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #bee5eb;
  }
  
  .b-popover-info.bs-popover-right > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #d1ecf1;
  }
  
  .b-popover-info.bs-popover-bottom > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #bee5eb;
  }
  
  .b-popover-info.bs-popover-bottom > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #c5e7ed;
  }
  
  .b-popover-info.bs-popover-bottom .popover-header::before, .b-popover-info.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #c5e7ed;
  }
  
  .b-popover-info.bs-popover-left > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #bee5eb;
  }
  
  .b-popover-info.bs-popover-left > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #d1ecf1;
  }
  
  .b-popover-info .popover-header {
    color: #212529;
    background-color: #c5e7ed;
    border-bottom-color: #b2dfe7;
  }
  
  .b-popover-info .popover-body {
    color: #0c5460;
  }
  
  .b-popover-warning.popover {
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  
  .b-popover-warning.bs-popover-top > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #ffeeba;
  }
  
  .b-popover-warning.bs-popover-top > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #fff3cd;
  }
  
  .b-popover-warning.bs-popover-right > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #ffeeba;
  }
  
  .b-popover-warning.bs-popover-right > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #fff3cd;
  }
  
  .b-popover-warning.bs-popover-bottom > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #ffeeba;
  }
  
  .b-popover-warning.bs-popover-bottom > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #ffefbe;
  }
  
  .b-popover-warning.bs-popover-bottom .popover-header::before, .b-popover-warning.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #ffefbe;
  }
  
  .b-popover-warning.bs-popover-left > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #ffeeba;
  }
  
  .b-popover-warning.bs-popover-left > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #fff3cd;
  }
  
  .b-popover-warning .popover-header {
    color: #212529;
    background-color: #ffefbe;
    border-bottom-color: #ffe9a4;
  }
  
  .b-popover-warning .popover-body {
    color: #856404;
  }
  
  .b-popover-danger.popover {
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  
  .b-popover-danger.bs-popover-top > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #f5c6cb;
  }
  
  .b-popover-danger.bs-popover-top > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #f8d7da;
  }
  
  .b-popover-danger.bs-popover-right > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #f5c6cb;
  }
  
  .b-popover-danger.bs-popover-right > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #f8d7da;
  }
  
  .b-popover-danger.bs-popover-bottom > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #f5c6cb;
  }
  
  .b-popover-danger.bs-popover-bottom > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #f6cace;
  }
  
  .b-popover-danger.bs-popover-bottom .popover-header::before, .b-popover-danger.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #f6cace;
  }
  
  .b-popover-danger.bs-popover-left > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #f5c6cb;
  }
  
  .b-popover-danger.bs-popover-left > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #f8d7da;
  }
  
  .b-popover-danger .popover-header {
    color: #212529;
    background-color: #f6cace;
    border-bottom-color: #f2b4ba;
  }
  
  .b-popover-danger .popover-body {
    color: #721c24;
  }
  
  .b-popover-light.popover {
    background-color: #fefefe;
    border-color: #fdfdfe;
  }
  
  .b-popover-light.bs-popover-top > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #fdfdfe;
  }
  
  .b-popover-light.bs-popover-top > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #fefefe;
  }
  
  .b-popover-light.bs-popover-right > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #fdfdfe;
  }
  
  .b-popover-light.bs-popover-right > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #fefefe;
  }
  
  .b-popover-light.bs-popover-bottom > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #fdfdfe;
  }
  
  .b-popover-light.bs-popover-bottom > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #f6f6f6;
  }
  
  .b-popover-light.bs-popover-bottom .popover-header::before, .b-popover-light.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #f6f6f6;
  }
  
  .b-popover-light.bs-popover-left > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #fdfdfe;
  }
  
  .b-popover-light.bs-popover-left > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #fefefe;
  }
  
  .b-popover-light .popover-header {
    color: #212529;
    background-color: #f6f6f6;
    border-bottom-color: #eaeaea;
  }
  
  .b-popover-light .popover-body {
    color: #818182;
  }
  
  .b-popover-dark.popover {
    background-color: #d6d8d9;
    border-color: #c6c8ca;
  }
  
  .b-popover-dark.bs-popover-top > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^="top"] > .arrow::before {
    border-top-color: #c6c8ca;
  }
  
  .b-popover-dark.bs-popover-top > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^="top"] > .arrow::after {
    border-top-color: #d6d8d9;
  }
  
  .b-popover-dark.bs-popover-right > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^="right"] > .arrow::before {
    border-right-color: #c6c8ca;
  }
  
  .b-popover-dark.bs-popover-right > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^="right"] > .arrow::after {
    border-right-color: #d6d8d9;
  }
  
  .b-popover-dark.bs-popover-bottom > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^="bottom"] > .arrow::before {
    border-bottom-color: #c6c8ca;
  }
  
  .b-popover-dark.bs-popover-bottom > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^="bottom"] > .arrow::after {
    border-bottom-color: #ced0d2;
  }
  
  .b-popover-dark.bs-popover-bottom .popover-header::before, .b-popover-dark.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    border-bottom-color: #ced0d2;
  }
  
  .b-popover-dark.bs-popover-left > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^="left"] > .arrow::before {
    border-left-color: #c6c8ca;
  }
  
  .b-popover-dark.bs-popover-left > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^="left"] > .arrow::after {
    border-left-color: #d6d8d9;
  }
  
  .b-popover-dark .popover-header {
    color: #212529;
    background-color: #ced0d2;
    border-bottom-color: #c1c4c5;
  }
  
  .b-popover-dark .popover-body {
    color: #1b1e21;
  }
  
  .table.b-table.b-table-fixed {
    table-layout: fixed;
  }
  
  .table.b-table.b-table-no-border-collapse {
    border-collapse: separate;
    border-spacing: 0;
  }
  
  .table.b-table[aria-busy="true"] {
    opacity: 0.55;
  }
  
  .table.b-table > tbody > tr.b-table-details > td {
    border-top: none !important;
  }
  
  .table.b-table > caption {
    caption-side: bottom;
  }
  
  .table.b-table.b-table-caption-top > caption {
    caption-side: top !important;
  }
  
  .table.b-table > tbody > .table-active,
  .table.b-table > tbody > .table-active > th,
  .table.b-table > tbody > .table-active > td {
    background-color: rgba(0, 0, 0, 0.075);
  }
  
  .table.b-table.table-hover > tbody > tr.table-active:hover td,
  .table.b-table.table-hover > tbody > tr.table-active:hover th {
    color: #212529;
    background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));
    background-repeat: no-repeat;
  }
  
  .table.b-table > tbody > .bg-active,
  .table.b-table > tbody > .bg-active > th,
  .table.b-table > tbody > .bg-active > td {
    background-color: rgba(255, 255, 255, 0.075) !important;
  }
  
  .table.b-table.table-hover.table-dark > tbody > tr.bg-active:hover td,
  .table.b-table.table-hover.table-dark > tbody > tr.bg-active:hover th {
    color: #fff;
    background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));
    background-repeat: no-repeat;
  }
  
  .b-table-sticky-header,
  .table-responsive,
  [class*="table-responsive-"] {
    margin-bottom: 1rem;
  }
  
  .b-table-sticky-header > .table,
  .table-responsive > .table,
  [class*="table-responsive-"] > .table {
    margin-bottom: 0;
  }
  
  .b-table-sticky-header {
    overflow-y: auto;
    max-height: 300px;
  }
  
  @media print {
    .b-table-sticky-header {
      overflow-y: visible !important;
      max-height: none !important;
    }
  }
  
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .b-table-sticky-header > .table.b-table > thead > tr > th {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 2;
    }
    .b-table-sticky-header > .table.b-table > thead > tr > .b-table-sticky-column,
    .b-table-sticky-header > .table.b-table > tbody > tr > .b-table-sticky-column,
    .b-table-sticky-header > .table.b-table > tfoot > tr > .b-table-sticky-column,
    .table-responsive > .table.b-table > thead > tr > .b-table-sticky-column,
    .table-responsive > .table.b-table > tbody > tr > .b-table-sticky-column,
    .table-responsive > .table.b-table > tfoot > tr > .b-table-sticky-column,
    [class*="table-responsive-"] > .table.b-table > thead > tr > .b-table-sticky-column,
    [class*="table-responsive-"] > .table.b-table > tbody > tr > .b-table-sticky-column,
    [class*="table-responsive-"] > .table.b-table > tfoot > tr > .b-table-sticky-column {
      position: -webkit-sticky;
      position: sticky;
      left: 0;
    }
    .b-table-sticky-header > .table.b-table > thead > tr > .b-table-sticky-column,
    .table-responsive > .table.b-table > thead > tr > .b-table-sticky-column,
    [class*="table-responsive-"] > .table.b-table > thead > tr > .b-table-sticky-column {
      z-index: 5;
    }
    .b-table-sticky-header > .table.b-table > tbody > tr > .b-table-sticky-column,
    .b-table-sticky-header > .table.b-table > tfoot > tr > .b-table-sticky-column,
    .table-responsive > .table.b-table > tbody > tr > .b-table-sticky-column,
    .table-responsive > .table.b-table > tfoot > tr > .b-table-sticky-column,
    [class*="table-responsive-"] > .table.b-table > tbody > tr > .b-table-sticky-column,
    [class*="table-responsive-"] > .table.b-table > tfoot > tr > .b-table-sticky-column {
      z-index: 2;
    }
    .table.b-table > thead > tr > .table-b-table-default,
    .table.b-table > tbody > tr > .table-b-table-default,
    .table.b-table > tfoot > tr > .table-b-table-default {
      color: #212529;
      background-color: #fff;
    }
    .table.b-table.table-dark > thead > tr > .bg-b-table-default,
    .table.b-table.table-dark > tbody > tr > .bg-b-table-default,
    .table.b-table.table-dark > tfoot > tr > .bg-b-table-default {
      color: #fff;
      background-color: #343a40;
    }
    .table.b-table.table-striped > tbody > tr:nth-of-type(odd) > .table-b-table-default {
      background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
      background-repeat: no-repeat;
    }
    .table.b-table.table-striped.table-dark > tbody > tr:nth-of-type(odd) > .bg-b-table-default {
      background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
      background-repeat: no-repeat;
    }
    .table.b-table.table-hover > tbody > tr:hover > .table-b-table-default {
      color: #212529;
      background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));
      background-repeat: no-repeat;
    }
    .table.b-table.table-hover.table-dark > tbody > tr:hover > .bg-b-table-default {
      color: #fff;
      background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));
      background-repeat: no-repeat;
    }
  }
  
  .table.b-table > thead > tr > [aria-sort],
  .table.b-table > tfoot > tr > [aria-sort] {
    cursor: pointer;
    background-image: none;
    background-repeat: no-repeat;
    background-size: 0.65em 1em;
  }
  
  .table.b-table > thead > tr > [aria-sort]:not(.b-table-sort-icon-left),
  .table.b-table > tfoot > tr > [aria-sort]:not(.b-table-sort-icon-left) {
    background-position: right calc(0.75rem / 2) center;
    padding-right: calc(0.75rem + 0.65em);
  }
  
  .table.b-table > thead > tr > [aria-sort].b-table-sort-icon-left,
  .table.b-table > tfoot > tr > [aria-sort].b-table-sort-icon-left {
    background-position: left calc(0.75rem / 2) center;
    padding-left: calc(0.75rem + 0.65em);
  }
  
  .table.b-table > thead > tr > [aria-sort="none"],
  .table.b-table > tfoot > tr > [aria-sort="none"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table > thead > tr > [aria-sort="ascending"],
  .table.b-table > tfoot > tr > [aria-sort="ascending"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table > thead > tr > [aria-sort="descending"],
  .table.b-table > tfoot > tr > [aria-sort="descending"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table.table-dark > thead > tr > [aria-sort="none"],
  .table.b-table.table-dark > tfoot > tr > [aria-sort="none"],
  .table.b-table > .thead-dark > tr > [aria-sort="none"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table.table-dark > thead > tr > [aria-sort="ascending"],
  .table.b-table.table-dark > tfoot > tr > [aria-sort="ascending"],
  .table.b-table > .thead-dark > tr > [aria-sort="ascending"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table.table-dark > thead > tr > [aria-sort="descending"],
  .table.b-table.table-dark > tfoot > tr > [aria-sort="descending"],
  .table.b-table > .thead-dark > tr > [aria-sort="descending"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table > thead > tr > .table-dark[aria-sort="none"],
  .table.b-table > tfoot > tr > .table-dark[aria-sort="none"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table > thead > tr > .table-dark[aria-sort="ascending"],
  .table.b-table > tfoot > tr > .table-dark[aria-sort="ascending"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table > thead > tr > .table-dark[aria-sort="descending"],
  .table.b-table > tfoot > tr > .table-dark[aria-sort="descending"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
  }
  
  .table.b-table.table-sm > thead > tr > [aria-sort]:not(.b-table-sort-icon-left),
  .table.b-table.table-sm > tfoot > tr > [aria-sort]:not(.b-table-sort-icon-left) {
    background-position: right calc(0.3rem / 2) center;
    padding-right: calc(0.3rem + 0.65em);
  }
  
  .table.b-table.table-sm > thead > tr > [aria-sort].b-table-sort-icon-left,
  .table.b-table.table-sm > tfoot > tr > [aria-sort].b-table-sort-icon-left {
    background-position: left calc(0.3rem / 2) center;
    padding-left: calc(0.3rem + 0.65em);
  }
  
  .table.b-table.b-table-selectable:not(.b-table-selectable-no-click) > tbody > tr {
    cursor: pointer;
  }
  
  .table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range > tbody > tr {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  @media (max-width: 575.98px) {
    .table.b-table.b-table-stacked-sm {
      display: block;
      width: 100%;
    }
    .table.b-table.b-table-stacked-sm > caption,
    .table.b-table.b-table-stacked-sm > tbody,
    .table.b-table.b-table-stacked-sm > tbody > tr,
    .table.b-table.b-table-stacked-sm > tbody > tr > td,
    .table.b-table.b-table-stacked-sm > tbody > tr > th {
      display: block;
    }
    .table.b-table.b-table-stacked-sm > thead,
    .table.b-table.b-table-stacked-sm > tfoot {
      display: none;
    }
    .table.b-table.b-table-stacked-sm > thead > tr.b-table-top-row,
    .table.b-table.b-table-stacked-sm > thead > tr.b-table-bottom-row,
    .table.b-table.b-table-stacked-sm > tfoot > tr.b-table-top-row,
    .table.b-table.b-table-stacked-sm > tfoot > tr.b-table-bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-sm > caption {
      caption-side: top !important;
    }
    .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::before {
      content: attr(data-label);
      width: 40%;
      float: left;
      text-align: right;
      overflow-wrap: break-word;
      font-weight: bold;
      font-style: normal;
      padding: 0 calc(1rem / 2) 0 0;
      margin: 0;
    }
    .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::after {
      display: block;
      clear: both;
      content: "";
    }
    .table.b-table.b-table-stacked-sm > tbody > tr > [data-label] > div {
      display: inline-block;
      width: calc(100% - 40%);
      padding: 0 0 0 calc(1rem / 2);
      margin: 0;
    }
    .table.b-table.b-table-stacked-sm > tbody > tr.top-row, .table.b-table.b-table-stacked-sm > tbody > tr.bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-sm > tbody > tr > :first-child {
      border-top-width: 3px;
    }
    .table.b-table.b-table-stacked-sm > tbody > tr > [rowspan] + td,
    .table.b-table.b-table-stacked-sm > tbody > tr > [rowspan] + th {
      border-top-width: 3px;
    }
  }
  
  @media (max-width: 767.98px) {
    .table.b-table.b-table-stacked-md {
      display: block;
      width: 100%;
    }
    .table.b-table.b-table-stacked-md > caption,
    .table.b-table.b-table-stacked-md > tbody,
    .table.b-table.b-table-stacked-md > tbody > tr,
    .table.b-table.b-table-stacked-md > tbody > tr > td,
    .table.b-table.b-table-stacked-md > tbody > tr > th {
      display: block;
    }
    .table.b-table.b-table-stacked-md > thead,
    .table.b-table.b-table-stacked-md > tfoot {
      display: none;
    }
    .table.b-table.b-table-stacked-md > thead > tr.b-table-top-row,
    .table.b-table.b-table-stacked-md > thead > tr.b-table-bottom-row,
    .table.b-table.b-table-stacked-md > tfoot > tr.b-table-top-row,
    .table.b-table.b-table-stacked-md > tfoot > tr.b-table-bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-md > caption {
      caption-side: top !important;
    }
    .table.b-table.b-table-stacked-md > tbody > tr > [data-label]::before {
      content: attr(data-label);
      width: 40%;
      float: left;
      text-align: right;
      overflow-wrap: break-word;
      font-weight: bold;
      font-style: normal;
      padding: 0 calc(1rem / 2) 0 0;
      margin: 0;
    }
    .table.b-table.b-table-stacked-md > tbody > tr > [data-label]::after {
      display: block;
      clear: both;
      content: "";
    }
    .table.b-table.b-table-stacked-md > tbody > tr > [data-label] > div {
      display: inline-block;
      width: calc(100% - 40%);
      padding: 0 0 0 calc(1rem / 2);
      margin: 0;
    }
    .table.b-table.b-table-stacked-md > tbody > tr.top-row, .table.b-table.b-table-stacked-md > tbody > tr.bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-md > tbody > tr > :first-child {
      border-top-width: 3px;
    }
    .table.b-table.b-table-stacked-md > tbody > tr > [rowspan] + td,
    .table.b-table.b-table-stacked-md > tbody > tr > [rowspan] + th {
      border-top-width: 3px;
    }
  }
  
  @media (max-width: 991.98px) {
    .table.b-table.b-table-stacked-lg {
      display: block;
      width: 100%;
    }
    .table.b-table.b-table-stacked-lg > caption,
    .table.b-table.b-table-stacked-lg > tbody,
    .table.b-table.b-table-stacked-lg > tbody > tr,
    .table.b-table.b-table-stacked-lg > tbody > tr > td,
    .table.b-table.b-table-stacked-lg > tbody > tr > th {
      display: block;
    }
    .table.b-table.b-table-stacked-lg > thead,
    .table.b-table.b-table-stacked-lg > tfoot {
      display: none;
    }
    .table.b-table.b-table-stacked-lg > thead > tr.b-table-top-row,
    .table.b-table.b-table-stacked-lg > thead > tr.b-table-bottom-row,
    .table.b-table.b-table-stacked-lg > tfoot > tr.b-table-top-row,
    .table.b-table.b-table-stacked-lg > tfoot > tr.b-table-bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-lg > caption {
      caption-side: top !important;
    }
    .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::before {
      content: attr(data-label);
      width: 40%;
      float: left;
      text-align: right;
      overflow-wrap: break-word;
      font-weight: bold;
      font-style: normal;
      padding: 0 calc(1rem / 2) 0 0;
      margin: 0;
    }
    .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::after {
      display: block;
      clear: both;
      content: "";
    }
    .table.b-table.b-table-stacked-lg > tbody > tr > [data-label] > div {
      display: inline-block;
      width: calc(100% - 40%);
      padding: 0 0 0 calc(1rem / 2);
      margin: 0;
    }
    .table.b-table.b-table-stacked-lg > tbody > tr.top-row, .table.b-table.b-table-stacked-lg > tbody > tr.bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-lg > tbody > tr > :first-child {
      border-top-width: 3px;
    }
    .table.b-table.b-table-stacked-lg > tbody > tr > [rowspan] + td,
    .table.b-table.b-table-stacked-lg > tbody > tr > [rowspan] + th {
      border-top-width: 3px;
    }
  }
  
  @media (max-width: 1199.98px) {
    .table.b-table.b-table-stacked-xl {
      display: block;
      width: 100%;
    }
    .table.b-table.b-table-stacked-xl > caption,
    .table.b-table.b-table-stacked-xl > tbody,
    .table.b-table.b-table-stacked-xl > tbody > tr,
    .table.b-table.b-table-stacked-xl > tbody > tr > td,
    .table.b-table.b-table-stacked-xl > tbody > tr > th {
      display: block;
    }
    .table.b-table.b-table-stacked-xl > thead,
    .table.b-table.b-table-stacked-xl > tfoot {
      display: none;
    }
    .table.b-table.b-table-stacked-xl > thead > tr.b-table-top-row,
    .table.b-table.b-table-stacked-xl > thead > tr.b-table-bottom-row,
    .table.b-table.b-table-stacked-xl > tfoot > tr.b-table-top-row,
    .table.b-table.b-table-stacked-xl > tfoot > tr.b-table-bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-xl > caption {
      caption-side: top !important;
    }
    .table.b-table.b-table-stacked-xl > tbody > tr > [data-label]::before {
      content: attr(data-label);
      width: 40%;
      float: left;
      text-align: right;
      overflow-wrap: break-word;
      font-weight: bold;
      font-style: normal;
      padding: 0 calc(1rem / 2) 0 0;
      margin: 0;
    }
    .table.b-table.b-table-stacked-xl > tbody > tr > [data-label]::after {
      display: block;
      clear: both;
      content: "";
    }
    .table.b-table.b-table-stacked-xl > tbody > tr > [data-label] > div {
      display: inline-block;
      width: calc(100% - 40%);
      padding: 0 0 0 calc(1rem / 2);
      margin: 0;
    }
    .table.b-table.b-table-stacked-xl > tbody > tr.top-row, .table.b-table.b-table-stacked-xl > tbody > tr.bottom-row {
      display: none;
    }
    .table.b-table.b-table-stacked-xl > tbody > tr > :first-child {
      border-top-width: 3px;
    }
    .table.b-table.b-table-stacked-xl > tbody > tr > [rowspan] + td,
    .table.b-table.b-table-stacked-xl > tbody > tr > [rowspan] + th {
      border-top-width: 3px;
    }
  }
  
  .table.b-table.b-table-stacked {
    display: block;
    width: 100%;
  }
  
  .table.b-table.b-table-stacked > caption,
  .table.b-table.b-table-stacked > tbody,
  .table.b-table.b-table-stacked > tbody > tr,
  .table.b-table.b-table-stacked > tbody > tr > td,
  .table.b-table.b-table-stacked > tbody > tr > th {
    display: block;
  }
  
  .table.b-table.b-table-stacked > thead,
  .table.b-table.b-table-stacked > tfoot {
    display: none;
  }
  
  .table.b-table.b-table-stacked > thead > tr.b-table-top-row,
  .table.b-table.b-table-stacked > thead > tr.b-table-bottom-row,
  .table.b-table.b-table-stacked > tfoot > tr.b-table-top-row,
  .table.b-table.b-table-stacked > tfoot > tr.b-table-bottom-row {
    display: none;
  }
  
  .table.b-table.b-table-stacked > caption {
    caption-side: top !important;
  }
  
  .table.b-table.b-table-stacked > tbody > tr > [data-label]::before {
    content: attr(data-label);
    width: 40%;
    float: left;
    text-align: right;
    overflow-wrap: break-word;
    font-weight: bold;
    font-style: normal;
    padding: 0 calc(1rem / 2) 0 0;
    margin: 0;
  }
  
  .table.b-table.b-table-stacked > tbody > tr > [data-label]::after {
    display: block;
    clear: both;
    content: "";
  }
  
  .table.b-table.b-table-stacked > tbody > tr > [data-label] > div {
    display: inline-block;
    width: calc(100% - 40%);
    padding: 0 0 0 calc(1rem / 2);
    margin: 0;
  }
  
  .table.b-table.b-table-stacked > tbody > tr.top-row, .table.b-table.b-table-stacked > tbody > tr.bottom-row {
    display: none;
  }
  
  .table.b-table.b-table-stacked > tbody > tr > :first-child {
    border-top-width: 3px;
  }
  
  .table.b-table.b-table-stacked > tbody > tr > [rowspan] + td,
  .table.b-table.b-table-stacked > tbody > tr > [rowspan] + th {
    border-top-width: 3px;
  }
  
  .b-time {
    min-width: 150px;
  }
  
  .b-time[aria-disabled="true"] output,
  .b-time[aria-readonly="true"] output,
  .b-time output.disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
  
  .b-time[aria-disabled="true"] output {
    pointer-events: none;
  }
  
  [dir="rtl"] .b-time > .d-flex:not(.flex-column) {
    flex-direction: row-reverse;
  }
  
  .b-toast {
    display: block;
    position: relative;
    max-width: 350px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-clip: padding-box;
    z-index: 1;
    border-radius: 0.25rem;
  }
  
  .b-toast .toast {
    background-color: rgba(255, 255, 255, 0.85);
  }
  
  .b-toast:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  
  .b-toast.b-toast-solid .toast {
    background-color: white;
  }
  
  .b-toast .toast {
    opacity: 1;
  }
  
  .b-toast .toast.fade:not(.show) {
    opacity: 0;
  }
  
  .b-toast .toast .toast-body {
    display: block;
  }
  
  .b-toast-primary .toast {
    background-color: rgba(230, 242, 255, 0.85);
    border-color: rgba(184, 218, 255, 0.85);
    color: #004085;
  }
  
  .b-toast-primary .toast .toast-header {
    color: #004085;
    background-color: rgba(204, 229, 255, 0.85);
    border-bottom-color: rgba(184, 218, 255, 0.85);
  }
  
  .b-toast-primary.b-toast-solid .toast {
    background-color: #e6f2ff;
  }
  
  .b-toast-secondary .toast {
    background-color: rgba(239, 240, 241, 0.85);
    border-color: rgba(214, 216, 219, 0.85);
    color: #383d41;
  }
  
  .b-toast-secondary .toast .toast-header {
    color: #383d41;
    background-color: rgba(226, 227, 229, 0.85);
    border-bottom-color: rgba(214, 216, 219, 0.85);
  }
  
  .b-toast-secondary.b-toast-solid .toast {
    background-color: #eff0f1;
  }
  
  .b-toast-success .toast {
    background-color: rgba(230, 245, 233, 0.85);
    border-color: rgba(195, 230, 203, 0.85);
    color: #155724;
  }
  
  .b-toast-success .toast .toast-header {
    color: #155724;
    background-color: rgba(212, 237, 218, 0.85);
    border-bottom-color: rgba(195, 230, 203, 0.85);
  }
  
  .b-toast-success.b-toast-solid .toast {
    background-color: #e6f5e9;
  }
  
  .b-toast-info .toast {
    background-color: rgba(229, 244, 247, 0.85);
    border-color: rgba(190, 229, 235, 0.85);
    color: #0c5460;
  }
  
  .b-toast-info .toast .toast-header {
    color: #0c5460;
    background-color: rgba(209, 236, 241, 0.85);
    border-bottom-color: rgba(190, 229, 235, 0.85);
  }
  
  .b-toast-info.b-toast-solid .toast {
    background-color: #e5f4f7;
  }
  
  .b-toast-warning .toast {
    background-color: rgba(255, 249, 231, 0.85);
    border-color: rgba(255, 238, 186, 0.85);
    color: #856404;
  }
  
  .b-toast-warning .toast .toast-header {
    color: #856404;
    background-color: rgba(255, 243, 205, 0.85);
    border-bottom-color: rgba(255, 238, 186, 0.85);
  }
  
  .b-toast-warning.b-toast-solid .toast {
    background-color: #fff9e7;
  }
  
  .b-toast-danger .toast {
    background-color: rgba(252, 237, 238, 0.85);
    border-color: rgba(245, 198, 203, 0.85);
    color: #721c24;
  }
  
  .b-toast-danger .toast .toast-header {
    color: #721c24;
    background-color: rgba(248, 215, 218, 0.85);
    border-bottom-color: rgba(245, 198, 203, 0.85);
  }
  
  .b-toast-danger.b-toast-solid .toast {
    background-color: #fcedee;
  }
  
  .b-toast-light .toast {
    background-color: rgba(255, 255, 255, 0.85);
    border-color: rgba(253, 253, 254, 0.85);
    color: #818182;
  }
  
  .b-toast-light .toast .toast-header {
    color: #818182;
    background-color: rgba(254, 254, 254, 0.85);
    border-bottom-color: rgba(253, 253, 254, 0.85);
  }
  
  .b-toast-light.b-toast-solid .toast {
    background-color: white;
  }
  
  .b-toast-dark .toast {
    background-color: rgba(227, 229, 229, 0.85);
    border-color: rgba(198, 200, 202, 0.85);
    color: #1b1e21;
  }
  
  .b-toast-dark .toast .toast-header {
    color: #1b1e21;
    background-color: rgba(214, 216, 217, 0.85);
    border-bottom-color: rgba(198, 200, 202, 0.85);
  }
  
  .b-toast-dark.b-toast-solid .toast {
    background-color: #e3e5e5;
  }
  
  .b-toaster {
    z-index: 1100;
  }
  
  .b-toaster .b-toaster-slot {
    position: relative;
    display: block;
  }
  
  .b-toaster .b-toaster-slot:empty {
    display: none !important;
  }
  
  .b-toaster.b-toaster-top-right, .b-toaster.b-toaster-top-left, .b-toaster.b-toaster-top-center, .b-toaster.b-toaster-top-full, .b-toaster.b-toaster-bottom-right, .b-toaster.b-toaster-bottom-left, .b-toaster.b-toaster-bottom-center, .b-toaster.b-toaster-bottom-full {
    position: fixed;
    left: 0.5rem;
    right: 0.5rem;
    margin: 0;
    padding: 0;
    height: 0;
    overflow: visible;
  }
  
  .b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-top-full .b-toaster-slot, .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {
    position: absolute;
    max-width: 350px;
    width: 100%;
    /* IE 11 fix */
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
  }
  
  .b-toaster.b-toaster-top-full .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {
    width: 100%;
    max-width: 100%;
  }
  
  .b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,
  .b-toaster.b-toaster-top-full .b-toaster-slot .toast, .b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,
  .b-toaster.b-toaster-bottom-full .b-toaster-slot .toast {
    width: 100%;
    max-width: 100%;
  }
  
  .b-toaster.b-toaster-top-right, .b-toaster.b-toaster-top-left, .b-toaster.b-toaster-top-center, .b-toaster.b-toaster-top-full {
    top: 0;
  }
  
  .b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-top-full .b-toaster-slot {
    top: 0.5rem;
  }
  
  .b-toaster.b-toaster-bottom-right, .b-toaster.b-toaster-bottom-left, .b-toaster.b-toaster-bottom-center, .b-toaster.b-toaster-bottom-full {
    bottom: 0;
  }
  
  .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {
    bottom: 0.5rem;
  }
  
  .b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot {
    margin-left: auto;
  }
  
  .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot {
    margin-right: auto;
  }
  
  .b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-right .b-toast.b-toaster-move, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-move, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move {
    transition: -webkit-transform 0.175s;
    transition: transform 0.175s;
    transition: transform 0.175s, -webkit-transform 0.175s;
  }
  
  .b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade {
    transition-delay: 0.175s;
  }
  
  .b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active {
    position: absolute;
    transition-delay: 0.175s;
  }
  
  .b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade {
    transition-delay: 0s;
  }
  
  .tooltip.b-tooltip {
    display: block;
    opacity: 0.9;
    outline: 0;
  }
  
  .tooltip.b-tooltip.fade:not(.show) {
    opacity: 0;
  }
  
  .tooltip.b-tooltip.show {
    opacity: 0.9;
  }
  
  .tooltip.b-tooltip.noninteractive {
    pointer-events: none;
  }
  
  .tooltip.b-tooltip .arrow {
    margin: 0 0.25rem;
  }
  
  .tooltip.b-tooltip.bs-tooltip-right .arrow, .tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^="right"] .arrow, .tooltip.b-tooltip.bs-tooltip-left .arrow, .tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^="left"] .arrow, .tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^="left"] .arrow {
    margin: 0.25rem 0;
  }
  
  .tooltip.b-tooltip-primary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #007bff;
  }
  
  .tooltip.b-tooltip-primary.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #007bff;
  }
  
  .tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #007bff;
  }
  
  .tooltip.b-tooltip-primary.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #007bff;
  }
  
  .tooltip.b-tooltip-primary .tooltip-inner {
    color: #fff;
    background-color: #007bff;
  }
  
  .tooltip.b-tooltip-secondary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #6c757d;
  }
  
  .tooltip.b-tooltip-secondary.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #6c757d;
  }
  
  .tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #6c757d;
  }
  
  .tooltip.b-tooltip-secondary.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #6c757d;
  }
  
  .tooltip.b-tooltip-secondary .tooltip-inner {
    color: #fff;
    background-color: #6c757d;
  }
  
  .tooltip.b-tooltip-success.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #28a745;
  }
  
  .tooltip.b-tooltip-success.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #28a745;
  }
  
  .tooltip.b-tooltip-success.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #28a745;
  }
  
  .tooltip.b-tooltip-success.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #28a745;
  }
  
  .tooltip.b-tooltip-success .tooltip-inner {
    color: #fff;
    background-color: #28a745;
  }
  
  .tooltip.b-tooltip-info.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #17a2b8;
  }
  
  .tooltip.b-tooltip-info.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #17a2b8;
  }
  
  .tooltip.b-tooltip-info.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #17a2b8;
  }
  
  .tooltip.b-tooltip-info.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #17a2b8;
  }
  
  .tooltip.b-tooltip-info .tooltip-inner {
    color: #fff;
    background-color: #17a2b8;
  }
  
  .tooltip.b-tooltip-warning.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #ffc107;
  }
  
  .tooltip.b-tooltip-warning.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #ffc107;
  }
  
  .tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #ffc107;
  }
  
  .tooltip.b-tooltip-warning.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #ffc107;
  }
  
  .tooltip.b-tooltip-warning .tooltip-inner {
    color: #212529;
    background-color: #ffc107;
  }
  
  .tooltip.b-tooltip-danger.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #dc3545;
  }
  
  .tooltip.b-tooltip-danger.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #dc3545;
  }
  
  .tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #dc3545;
  }
  
  .tooltip.b-tooltip-danger.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #dc3545;
  }
  
  .tooltip.b-tooltip-danger .tooltip-inner {
    color: #fff;
    background-color: #dc3545;
  }
  
  .tooltip.b-tooltip-light.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #f8f9fa;
  }
  
  .tooltip.b-tooltip-light.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #f8f9fa;
  }
  
  .tooltip.b-tooltip-light.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #f8f9fa;
  }
  
  .tooltip.b-tooltip-light.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #f8f9fa;
  }
  
  .tooltip.b-tooltip-light .tooltip-inner {
    color: #212529;
    background-color: #f8f9fa;
  }
  
  .tooltip.b-tooltip-dark.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: #343a40;
  }
  
  .tooltip.b-tooltip-dark.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: #343a40;
  }
  
  .tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: #343a40;
  }
  
  .tooltip.b-tooltip-dark.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: #343a40;
  }
  
  .tooltip.b-tooltip-dark .tooltip-inner {
    color: #fff;
    background-color: #343a40;
  }
  
  .b-icon.bi {
    display: inline-block;
    overflow: visible;
    vertical-align: -0.15em;
  }
  
  .b-icon.b-icon-animation-spin,
  .b-icon.b-iconstack .b-icon-animation-spin > g {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-animation: 2s infinite linear normal b-icon-animation-spin;
    animation: 2s infinite linear normal b-icon-animation-spin;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .b-icon.b-icon-animation-spin,
    .b-icon.b-iconstack .b-icon-animation-spin > g {
      -webkit-animation: none;
      animation: none;
    }
  }
  
  .b-icon.b-icon-animation-spin-reverse,
  .b-icon.b-iconstack .b-icon-animation-spin-reverse > g {
    -webkit-transform-origin: center;
    transform-origin: center;
    animation: 2s infinite linear reverse b-icon-animation-spin;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .b-icon.b-icon-animation-spin-reverse,
    .b-icon.b-iconstack .b-icon-animation-spin-reverse > g {
      -webkit-animation: none;
      animation: none;
    }
  }
  
  .b-icon.b-icon-animation-spin-pulse,
  .b-icon.b-iconstack .b-icon-animation-spin-pulse > g {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-animation: 1s infinite steps(8) normal b-icon-animation-spin;
    animation: 1s infinite steps(8) normal b-icon-animation-spin;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .b-icon.b-icon-animation-spin-pulse,
    .b-icon.b-iconstack .b-icon-animation-spin-pulse > g {
      -webkit-animation: none;
      animation: none;
    }
  }
  
  .b-icon.b-icon-animation-spin-reverse-pulse,
  .b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse > g {
    -webkit-transform-origin: center;
    transform-origin: center;
    animation: 1s infinite steps(8) reverse b-icon-animation-spin;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .b-icon.b-icon-animation-spin-reverse-pulse,
    .b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse > g {
      -webkit-animation: none;
      animation: none;
    }
  }
  
  .b-icon.b-icon-animation-cylon,
  .b-icon.b-iconstack .b-icon-animation-cylon > g {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon;
    animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .b-icon.b-icon-animation-cylon,
    .b-icon.b-iconstack .b-icon-animation-cylon > g {
      -webkit-animation: none;
      animation: none;
    }
  }
  
  .b-icon.b-icon-animation-cylon-vertical,
  .b-icon.b-iconstack .b-icon-animation-cylon-vertical > g {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical;
    animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .b-icon.b-icon-animation-cylon-vertical,
    .b-icon.b-iconstack .b-icon-animation-cylon-vertical > g {
      -webkit-animation: none;
      animation: none;
    }
  }
  
  @-webkit-keyframes b-icon-animation-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  
  @keyframes b-icon-animation-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  
  @-webkit-keyframes b-icon-animation-cylon {
    0% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
    }
    100% {
      -webkit-transform: translateX(25%);
      transform: translateX(25%);
    }
  }
  
  @keyframes b-icon-animation-cylon {
    0% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
    }
    100% {
      -webkit-transform: translateX(25%);
      transform: translateX(25%);
    }
  }
  
  @-webkit-keyframes b-icon-animation-cylon-vertical {
    0% {
      -webkit-transform: translateY(25%);
      transform: translateY(25%);
    }
    100% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
  }
  
  @keyframes b-icon-animation-cylon-vertical {
    0% {
      -webkit-transform: translateY(25%);
      transform: translateY(25%);
    }
    100% {
      -webkit-transform: translateY(-25%);
      transform: translateY(-25%);
    }
  }
  
  .btn .b-icon.bi,
  .nav-link .b-icon.bi,
  .dropdown-toggle .b-icon.bi,
  .dropdown-item .b-icon.bi,
  .input-group-text .b-icon.bi {
    font-size: 125%;
    vertical-align: text-bottom;
  }
  /*# sourceMappingURL=bootstrap-vue.css.map */