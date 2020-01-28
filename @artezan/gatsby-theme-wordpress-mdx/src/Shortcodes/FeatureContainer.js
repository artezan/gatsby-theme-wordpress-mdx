/** @jsx jsx */
import React from 'react'
import { jsx, Flex } from 'theme-ui'

export const FeaturesWrapper = ({ children, ...rest }) => {
  const numOfChiildren = React.Children.toArray(children).length

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        p: [1, 1, 4]
      }}
      {...rest}
    >
      {children}
    </Flex>
  )
}
