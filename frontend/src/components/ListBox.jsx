

import {ListBox, ListBoxItem, Select, ListBoxSection, SelectionIndicator, Text} from 'react-aria-components';

function ListBoxSelection(datatype, data, keys, setKeys) {


  return (
    <ListBox aria-label={datatype} selectionMode="multiple" selectedKeys={keys} onSelectionChange={setKeys}>
      {data.map(item => (
        <>
          <ListBoxItem key={item.id} />
          <Text slot="label" />
          <Text slot="description" />
          <SelectionIndicator />
        </>
      ))};
      </ListBox>
    )
}

export default ListBoxSelection;