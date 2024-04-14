const useNode = () => {
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
      //starting pe tree.id & comment.id == 1 for main comments

      tree.items.push({
        //each object gets stored in an array
        id: new Date().getTime(),
        name: item,
        items: [],
      });

      return tree;
    }

    let latestNode = []; //for replies
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, commentId, item);
    });

    return { ...tree, latestNode };  //
  };

  const editNode = (tree, commentId, value) => {
    if (tree.id === commentId) {
      tree.name = value;
      return tree;
    }

    tree.items.map((ob) => {
      return editNode(ob, commentId, value);
    });

    return { ...tree };
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

  return { insertNode };
};

export default useNode;
