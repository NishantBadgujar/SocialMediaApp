import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/PostListStore'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className='app-container'>
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <div className='content'>
    <Header></Header>
    {selectedTab === "Home" ? <PostList/> : <CreatePost/>  }
    
   
    <Footer/>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App
