import { useState } from 'react';
import { Tree, TreeItem, TreeItemContent, Button } from 'react-aria-components';
import styles from '../styles/components/sidebar.module.css';

 // eslint-disable-next-line react/prop-types
export default function SideBar({ categoryData, setPlatform, setGenre, setYear, setDeveloper, platform, genre, developer, year
 }) {

    function toggleItem(id, category) {

      if (category == "Consoles") {
        const newSet = new Set(platform);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setPlatform(newSet);
      } else if (category == "Developers") {
        const newSet = new Set(developer);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setDeveloper(newSet);
      } else if (category == "Genres") {
        const newSet = new Set(genre);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setGenre(newSet);
      } else if (category == "Years") {
        const newSet = new Set(year);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        setYear(newSet);
      }

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
              <Button onClick={() => toggleItem(item.id, section.category)} >{item.name}</Button>
              </TreeItemContent>
            </TreeItem>
          ))}
        </TreeItem>
      ))}
    </Tree>
  );
}
