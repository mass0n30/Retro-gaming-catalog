import { useState } from 'react';
import { Tree, TreeItem, TreeItemContent, Button } from 'react-aria-components';
import styles from '../styles/components/sidebar.module.css';

export default function SideBar({ categoryData }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set());

    const toggleItem = (id) => {
      const newSet = new Set(selectedKeys);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      setSelectedKeys(newSet);
  };


  return (
    <Tree aria-label="Categories"
      >
      {categoryData.map((section) => (
        <TreeItem key={section.category} id={section.category} textValue={section.category}>
          <TreeItemContent>{section.category}</TreeItemContent>

          {section.array.map((item) => (
            <TreeItem key={item.name} id={item.name} textValue={item.name} selected={false}>
              <TreeItemContent>
              <Button onPress={() => toggleItem(item.id)} >{item.name}</Button>
              </TreeItemContent>
            </TreeItem>
          ))}
        </TreeItem>
      ))}
    </Tree>
  );
}
