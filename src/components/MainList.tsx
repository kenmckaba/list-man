import { FC, useState } from 'react'
import { Tbody, Box, Table } from '@chakra-ui/react'
import ItemRow from './ItemRow'

export interface Item {
  name: string
}

export const MainList: FC = () => {
  const [items, setItems] = useState<Item[]>([{ name: 'Apples' }, { name: 'Oranges' }])
  const [chosens, setChosens] = useState<Item[]>([{ name: 'Bananas' }])

  const onChoose = (index: number): void => {
    setChosens([...chosens, items[index]])
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const onUnchoose = (index: number): void => {
    setItems([...items, chosens[index]])
    const newChosens = [...chosens]
    newChosens.splice(index, 1)
    setChosens(newChosens)
  }

  return (
    <Box>
      <Table variant="simple">
        <Tbody>
          {items.map((item, index) => (
            <ItemRow key={item.name} chosen={true} item={item} onChosen={() => onChoose(index)} />
          ))}
        </Tbody>
      </Table>
      <Box padding={4} />
      <Table variant="simple">
        <Tbody>
          {chosens.map((item, index) => (
            <ItemRow
              key={item.name}
              chosen={false}
              item={item}
              onChosen={() => onUnchoose(index)}
            />
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}
