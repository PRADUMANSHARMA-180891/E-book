import Layout from "./component/layout/Layout"
function App({children}) {
  
  return (
    <>
           <Layout  >
              {children}
           </Layout>
    </>
  )
}

export default App
