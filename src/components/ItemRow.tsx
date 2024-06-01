import React from 'react'
import { Checkbox, Text, Tr, Td } from '@chakra-ui/react'
import { Item } from './MainList'

interface ItemRowProps {
  item: Item
  chosen: boolean
  onChosen: () => void
}

const ItemRow: React.FC<ItemRowProps> = ({ item, chosen, onChosen }) => {
  return (
    <Tr>
      <Td padding={2}>
        <Checkbox isChecked={chosen} onChange={() => onChosen()}></Checkbox>
      </Td>
      <Td padding="2px 0px 7px 0px">
        <Text>{item.name}</Text>
      </Td>
    </Tr>
  )
}

export default ItemRow
