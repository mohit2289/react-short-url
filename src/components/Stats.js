import React, {Component} from 'react'
import axios  from  'axios'

class Stats extends Component {
    constructor(props) {
        super(props)
            this.state = {
                postData :[],
                apiurl:'http://localhost:3003'                 
            }            
    }

    componentDidMount(){
        axios.get('http://localhost:3003/api/shorturllist').then(response=>{
            
            this.setState({postData:response.data.data})
        }).catch(error =>{
            console.log(error);
        })
    }

    render(){  
        const {postData,apiurl} = this.state;  
        
        return(            
            <div>
               <br/> <br/>
                <strong>Welcom Short url list :</strong>
           {
            postData.length ? 
            postData.map(postData => <div key={postData.id}>           
                    {apiurl}{postData.short_url}<div>Click Count : {postData.click_count}</div>
            </div>):''
           }
           </div>
        )
    }

}
export default Stats;
