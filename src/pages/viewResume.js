import React from 'react'
import Resume from '../components/PDF'
import Header from '../components/header'

export default class ViewResume extends React.Component{


    render(){

        return(
            <div>
                <div >
                 <Header headerStyle={{position: 'inherit', padding: '10px 0'}} />
                 </div>
                 <div >
                <Resume />
                </div>  
            </div>
        )
    }
}