import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'

test('Render app component', () => {
  const component = renderer.create(<App />)
  expect(component.toJSON()).toMatchSnapshot()
})
