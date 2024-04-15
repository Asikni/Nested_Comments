const useNode = () => {
  const insertNode = function (tree, commentId, item, dateTime) {
    if (tree.id === commentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        dateTime: dateTime, // Add dateTime property
        items: [],
      });

      return tree;
    }

    tree.items.forEach((ob) => {
      insertNode(ob, commentId, item, dateTime);
    });

    return tree;
  };

  const editNode = (tree, commentId, value, dateTime) => {
    if (tree.id === commentId) {
      tree.name = value;
      tree.dateTime = dateTime; // Update dateTime property
      return tree;
    }

    tree.items.forEach((ob) => {
      editNode(ob, commentId, value, dateTime);
    });

    return tree;
  };


  const deleteNode = (tree, id) => {
    for (let i = 0; i < tree.items.length; i++) {
      const currentItem = tree.items[i];
      if (currentItem.id === id) {
        tree.items.splice(i, 1);
        return tree;
      } else {
        deleteNode(currentItem, id);
      }
    }
    return tree;
  };

  return { insertNode, editNode, deleteNode };
};

export default useNode;
