import React from 'react'
import renderer from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'

const Button = styled.button`
  color: red;
`

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})