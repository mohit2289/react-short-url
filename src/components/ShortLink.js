import React, {Component} from 'react'
import axios  from  'axios'

 class ShortLink extends Component {
        constructor(props) {
            super(props) 
                this.state = {
                    shortLink :'',
                    shorturl : ''
                }            
        }
      
changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
}
    


submitHandler = (e) =>{
    e.preventDefault();
    //console.log(this.state);
    axios.post('http://localhost:3003/api/shorturl',this.state)
    .then(response=>{
        var  shorturl =response.data.shorturl;
        this.setState({shorturl: shorturl,shortLink:''});
    })
    .catch(error => {
        console.log(error);
    })    
} 

    render(){
        const {shortLink} = this.state;
        let shortlinkUrl ;
        if(this.state.shorturl!==''){
            shortlinkUrl = <div><strong>Here's Your Short URL :</strong>http://localhost:3003{this.state.shorturl}</div>;
        }
        return(
            <div>
            <form onSubmit={this.submitHandler}>
                <h1>Welcome Short.Com </h1>
                 <label>Please Enter Your URL here</label>   
                <input type="text" name="shortLink" value={shortLink} onChange={this.changeHandler} />
                <input type="submit" value="Shorten"/>
            </form>
            <br/>
                {shortlinkUrl}
            </div>
        )
    }

}

export default ShortLink