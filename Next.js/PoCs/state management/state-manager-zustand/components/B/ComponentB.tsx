function ComponentB({children}: {children: React.ReactNode}) {

  return(
    <>
      <h1>Component B</h1>
      {children}
    </>
  )
};

export default ComponentB;