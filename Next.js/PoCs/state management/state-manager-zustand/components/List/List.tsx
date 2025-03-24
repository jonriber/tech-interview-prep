

const List = (props: any) => {


  const list = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'},
    {id: 5, name: 'Item 5'},
  ]

  return (
    <>
      <h1>List component</h1>
      {list.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  )
};


export default List;