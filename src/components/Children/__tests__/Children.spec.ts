import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Children from '../index.vue'

describe('Children', () => {
  it('renders properly', () => {
    // @ts-ignore
    const wrapper = mount(Children, { props: { title: '你好', label: '名称' } })
    console.log(wrapper.text(), 'wrapper')

    expect(wrapper.text()).toContain('你好名称')
  })
})
