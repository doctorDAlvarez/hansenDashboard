import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Form, FormGroup, FormInput } from "shards-react";




export default function MainTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Data Loader" />
        <Tab label="Dashboard" />
        <Tab label="Configuration" />
      </Tabs>
    <div style={{
        display: "flex",
        marginTop: 10,
        padding: 10,
        flexDirection: 'column',
        backgroundColor: 'lightBlue',
        borderRadius: 30,
    }}>
      <DataLoader value={value} />   
      
      <Dashboard value={value} /> 

    </div>
    
    </Paper>
  );
}

function DataLoader({value}) {
    return (
       value === 0 ? 
       <div className="data-loader">
        <Form>
            <FormGroup style={{
                display: 'flex',
                margin: 'auto',
                marginTop: 10,
                padding: 30,
                flexDirection: 'column',
                width: '50%',
                textAlign: 'center',
            }}>
                <label htmlFor="caja-inicial">Fecha</label>
                <FormInput type="date" id="caja-inicial" />
                <label htmlFor="caja-inicial">Caja Cierre</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Alivio</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Credito</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Debito</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Debito</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Debito</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Debito</label>
                <FormInput id="caja-inicial" />
                <label htmlFor="caja-inicial">Debito</label>
                <FormInput id="caja-inicial" />
            </FormGroup>
        </Form>   
       </div>
       
       : null
    )
}

function Dashboard({value}) {
    return (
        value === 1 ?
        <div>
            <h1>DASHBOARD HERE</h1>    
        </div> :
        
        null
    )
}



