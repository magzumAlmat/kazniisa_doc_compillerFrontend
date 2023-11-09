import React, { useState } from 'react';

const treeData = [
    {
      id: 1,
      name: 'title1',
      children: [
        {
          id: 2,
          name: 'item 1',
          children: []
        },
        {
          id: 3,
          name: 'Item 2',
          children: [
            {
              id: 4,
              name: 'Item 2.1',
              children: []
            },
            {
                id: 5,
                name: 'Item 2.2',
                children: []
              }
          ]
        },
        {
            id: 6,
            name: 'item 3',
            children: []
          },
          {
            id: 7,
            name: 'item 4',
            children: [
                {
                    id: 6,
                    name: 'item 4.1',
                    children: []
                  },
            ]
          },
      ]
    }
  ];
  
  

const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="tree-node">
        <div onClick={handleToggle} className={`node-toggle ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded && node.children.length > 0 ? '📖' : '📂'} {node.name}
        </div>
        {isExpanded && (
          <ul className="child-nodes">
            {node.children.map(childNode => (
              <li key={childNode.id}>
                <TreeNode node={childNode} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
const TreeView = () => {
  return (
    <div>
      {treeData.map(rootNode => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </div>
  );
};
export default TreeView;