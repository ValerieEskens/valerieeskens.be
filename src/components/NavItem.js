export default {
  name: 'NavItem',
  props: {
    type: { type: String },
    active: { type: Boolean }
  },
  functional: true,
  render (h, ctx) {
    return h(
      'div',
      {
        on: { click: ctx.listeners.click },
        class: [
          ctx.props.active ? 'filtered-on' : '',
          ctx.props.type,
          'nav__item'
        ]
      },
      `#${ctx.props.type}`
    )
  }
}
