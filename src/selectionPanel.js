import React, { Component } from 'react';
import classes from './selectionPanel.module.css'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


  
  
import InfoCard from '../src/infoCard'


  
class SelectionPanel extends Component{
    
constructor(props)
{
    super(props)
    this.state={
        year:2005,
        launch:false,
        landing:false,
        loading:false,
        error:false,
        emsg:'',
        d:[]
    }
    
}
display(e){
    this.setState({
       year:e
    
    }, ()=>
    {console.log(this.state.year)
    if(this.state.launch)
        this.fetchdata()})
    
    
}
changelaunch(e){
    this.setState({
       launch:e
    
    }, ()=>
    {console.log(this.state.launch)
     this.fetchdata()})
}
changelanding(e){
    
    this.setState({
       landing:e
    
    }, ()=>
    {console.log(this.state.landing)
     this.fetchdata()})
    
}
fetchdata= async ()=>{
    this.setState(()=>{
        return {
            loading:true

        }
        
    })
    console.log("in")
    var api='https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+this.state.launch+'&land_success='+this.state.landing +'&launch_year='+this.state.year
    
    await fetch(api)
    .then((response)=>{
        
       return response.json()
        

    })
    .then(data=>
    {
        console.log(data)
        this.setState({
            d:data
        }, ()=>{

        })
        
    })
    .catch((err)=>{
        console.log(err)
        this.setState({
       error:true,
       emsg: err
    
    }, ()=>
    { })
        
    }).finally((msg)=>{
        this.setState(()=>{
            return {
                loading:false
    
            }
            
        })

    })

    
}
render()
{
    var tmp = [];
  for (var i = 2006; i < 2021; i++) {
    tmp.push(i);
  }

    return(
        <div>
            <h1>SpaceX</h1>
        <div className={classes.mainbody}>
        
        <div className={classes.sidepanel}>
        <h4>Launch Year</h4>
            <div>
            {
                       
            tmp.map((e)=>{
                 return (    
                <Button color="success" onClick={()=>this.display(e)}>{e}</Button>
                 )
            })
                
            }

            </div>
            <br />
            <h4>Successful Launch</h4>
            <div>
            
                <Button color="success" onClick={()=>this.changelaunch(true)}>true</Button>
                <Button color="success" onClick={()=>this.changelaunch(false)}>false</Button>
                
            </div>
            <br />
            <h4>Successful Landing</h4>
            <div>
            
                <Button color="success" onClick={()=>this.changelanding(true)}>true</Button>
                <Button color="success" onClick={()=>this.changelanding(false)}>false</Button>
                
            </div>
                <br />
                selected: {this.state.year===2005?"not selected":this.state.year}, launch: {this.state.launch?"true":"false"}, landing: {this.state.landing?"true":"false"}
               
            
           

            

        </div>
            
            {
                this.state.error?
                <div>
                    <Modal isOpen={this.state.error} toggle={false} >
                    
                        <ModalBody>
                        {this.state.emsg}
                        </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={()=>{
                        this.setState({
                            error:false
                            
                            }, ()=>
                            {console.log(this.state.error)
                            })
    
                    }}>close</Button>
                    
                    </ModalFooter>
                    </Modal>
                    
                </div>
                :""
            }
            <div className={classes.infopanel}>
            {
                this.state.d.length>0?
                        this.state.d.map((p)=>{
                            console.log(p)
                            return(
                                
                                    <InfoCard data={p}/>
                                
                            )
                            
                        })
                        :this.state.loading?
                        <div>loading...</div>:
                        this.state.year===2005?
                <div><br />please select year</div>:!this.state.launch?
                <div><br />please select launch=true(there are none that haven't been launched)</div>:
                        !this.state.loading?<div>no results, please change options</div>:''
            }

            </div>
        </div>

        </div>
        
    )
    }
}

export default SelectionPanel