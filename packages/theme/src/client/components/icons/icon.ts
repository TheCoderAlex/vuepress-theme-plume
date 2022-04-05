import { h } from 'vue'
import type { FunctionalComponent } from 'vue'
import { IconBase } from './IconBase'

export const UserIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'user' }, () =>
    h('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      'd': 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    })
  )
UserIcon.displayName = 'UserIcon'

export const FolderIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'folder' }, () =>
    h('path', {
      d: 'M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z',
    })
  )
FolderIcon.displayName = 'FolderIcon'

export const ClockIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'clock' }, () =>
    h('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      'd': 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z',
    })
  )
ClockIcon.displayName = 'ClockIcon'

export const TagIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'tag' }, () =>
    h('path', {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      'd': 'M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z',
    })
  )
TagIcon.displayName = 'TagIcon'

export const TopIcon: FunctionalComponent = () =>
  h(IconBase, { name: 'top', viewBox: '0 0 1024 1024' }, () => [
    h('path', {
      d: 'M80.96 449.194667l37.696-37.717334 19.626667 19.605334-37.717334 37.717333zM197.205333 541.44l116.16-116.138667 13.568 13.568-116.16 116.16zM220.565333 565.162667l116.16-116.16 13.568 13.589333-116.16 116.138667zM173.845333 517.738667l116.16-116.16 13.568 13.589333-116.16 116.138667zM245.354667 587.477333l116.202666-116.096 13.568 13.589334-116.202666 116.096z',
      // fill: '#FA8D14',
    }),
    h('path', {
      d: 'M339.2 0L0 345.6V1024L1024 0H339.2z m-115.2 283.733333l46.933333 46.933334-14.933333 12.8-4.266667-4.266667-140.8 140.8 4.266667 4.266667-14.933333 14.933333-46.933334-46.933333 170.666667-168.533334z m2.133333 375.466667l-12.8-12.8 29.866667-29.866667L149.333333 520.533333l64-64-12.8-12.8L108.8 533.333333l-10.666667-10.666666 89.6-89.6-10.666666-10.666667 14.933333-14.933333 10.666667 10.666666 91.733333-91.733333 10.666667 10.666667-91.733334 91.733333 12.8 12.8 68.266667-68.266667 96 96 27.733333-27.733333 12.8 12.8-204.8 204.8z m232.533334-236.8l-17.066667 17.066667c-6.4-6.4-14.933333-10.666667-21.333333-14.933334 8.533333-4.266667 14.933333-10.666667 21.333333-17.066666 6.4-6.4 6.4-12.8 0-19.2l-136.533333-136.533334-34.133334 34.133334-14.933333-17.066667L332.8 192l14.933333 14.933333-25.6 27.733334 138.666667 138.666666c14.933333 14.933333 14.933333 32-2.133333 49.066667z m-81.066667-200.533333l38.4-38.4-21.333333-34.133334-46.933334 46.933334-14.933333-14.933334 123.733333-123.733333 12.8 17.066667-59.733333 59.733333 21.333333 34.133333 57.6-57.6 98.133334 98.133334-14.933334 14.933333-83.2-83.2-78.933333 78.933333 85.333333 85.333334-14.933333 14.933333-102.4-98.133333z m138.666667 162.133333c-6.4-2.133333-14.933333-4.266667-25.6-4.266667 19.2-34.133333 25.6-61.866667 23.466666-85.333333-2.133333-21.333333-17.066667-44.8-42.666666-70.4L448 200.533333l14.933333-14.933333 23.466667 23.466667c17.066667 17.066667 29.866667 34.133333 38.4 49.066666 38.4-8.533333 74.666667-14.933333 106.666667-19.2l2.133333 25.6c-34.133333 2.133333-68.266667 8.533333-100.266667 14.933334 2.133333 4.266667 2.133333 8.533333 2.133334 12.8 6.4 23.466667 0 55.466667-19.2 91.733333z',
      // fill: '#FA8D14',
    }),
    h('path', {
      d: 'M183.765333 346.965333l37.696-37.717333 19.626667 19.584-37.696 37.738667zM132.288 398.037333l37.76-37.674666 19.584 19.626666-37.738667 37.674667z',
      // fill: '#FA8D14',
    }),
  ])
TopIcon.displayName = 'TopIcon'
