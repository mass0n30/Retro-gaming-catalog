import { Tree, TreeItem , TreeItemContent } from "react-aria-components";

// eslint-disable-next-line react/prop-types
function TreeItemCategory({ datatype, data, keys, setKeys }) {

  return (
    <Tree
      selectionMode="multiple"
      selectedKeys={keys}
      onSelectionChange={setKeys}
      defaultExpandedKeys={[datatype]} 
    >
      <TreeItem key={datatype} textValue={datatype}>
        <TreeItemContent>
        
          <span className="font-semibold">{datatype}</span>
        </TreeItemContent>

        {data.map((item) => (
          <TreeItem key={item.id} textValue={item.name}>
            <TreeItemContent>{item.name}</TreeItemContent>
          </TreeItem>
        ))}
      </TreeItem>
    </Tree>
  );
}

export default TreeItemCategory;

