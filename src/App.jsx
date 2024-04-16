import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";
import "./styles.css";

const comments = {
  id: 1,
  dateTime: "",
  items: [],
};
const App = () => {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item,dateTime) => {
    // item = input

    const finalStructure = insertNode(commentsData, folderId, item, dateTime);

    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value, dateTime) => {

    const finalStructure = editNode(commentsData, folderId, value, dateTime);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
};

export default App;
