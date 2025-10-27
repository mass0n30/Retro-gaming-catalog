import { useEffect, useState } from 'react';
import TreeItemCategory from './ListBox';
import styles from '../styles/components/sidebar.module.css';
import {ListBox, ListBoxItem, ListBoxSection, Collection, Header} from 'react-aria-components';



// eslint-disable-next-line react/prop-types
function SideBar({platform, genre, developer, year, setPlatform, setGenre, setConsole, setDeveloper, setYear, categoryData}) {

let [selectedKeys, setSelectedKeys] = useState(new Set());


  return (
    <>
    <ListBox 
     items={categoryData} aria-label='Categories' className={styles.sidebarlistbox}
      selectionMode='multiple' 
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}>
      {section =>
        <ListBoxSection
         id={section.category} className={styles.categorysection}>
          <Header className={styles.categoryheader}>{section.category}</Header>
          <Collection items={section.array} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            {item => <ListBoxItem className={styles.categoryitem} key={item.name} id={item.name} textValue={item.name}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>
      }
    </ListBox>
    </> )
};

export default SideBar;