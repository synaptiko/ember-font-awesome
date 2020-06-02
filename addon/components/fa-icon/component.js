import Component from '@ember/component';
import layout from './template';

let FaIconComponent = Component.extend({
  layout,
  tagName: '',

  icon: null,
  id: null,
  class: null,
  title: null,
  ariaLabel: null,
  color: null,
  click: null,
  size: null,
  pull: null,
  rotate: null,
  flip: null,
  stack: null,
  ariaHidden: true,
  fixedWidth: false,
  pulse: false,
  inverse: false,
  border: false,
  spin: false,
  listItem: false
});

FaIconComponent.reopenClass({
  positionalParams: ['icon']
});

export default FaIconComponent;
