import './App.css';
import React from 'react'
import { Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel 
} from "@reach/tabs"


function App() {
  return (
    <div className="login">
    <Tabs>
      <TabList>
        <Tab>Login</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <form className="login-form">
            <label htmlFor="username"></label>
            <input type="email" id="username" placeholder="Email" autoComplete="off" />
            <br></br>
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Password"/>
          </form>
        </TabPanel>
        <TabPanel>
          
        </TabPanel>
      </TabPanels>
    </Tabs>
    </div>
  );
}

export default App;
