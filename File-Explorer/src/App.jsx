import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import UseTraverseTree from "./hooks/use-traverse-tree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = UseTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  console.log(explorerData);
  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        explorer={explorerData}
      ></Folder>
    </div>
  );
}

export default App;
