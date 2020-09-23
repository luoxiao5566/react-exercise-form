import React, {Component} from 'react';
import './myProfile.less';
import './Myprofile.css'

class MyProfile extends Component {
  state = {
    name:'Your name',  
    gander:'male',
    description:'Description about yourself',
    terms:''
  }

  

  handleChange = (event) => {       
    this.setState({
      [event.target.name]:event.target.value
    })    
  }

  handleSubumit = (event) => {
    event.preventDefault();
     console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubumit}>
        <h1>My ProFile</h1>
        <label>
           Name:
           <input 
              className='name'
              type='text' 
              name='name' 
              onChange={this.handleChange}
              value={this.state.name}
            />
        </label>
        {!this.state.name &&
          <i style={{color:'red'}}>please input a name</i>
        }        
        <label>
           Gander:
           <select
              className='gander' 
              name='gander'
              onChange={this.handleChange}
              value={this.state.gander}              
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
        </label>
        <label>
           Description:
           <textarea 
              className='des'              
              name='description' 
              onChange={this.handleChange}
              value={this.state.description}
           />          
        </label>
        {!this.state.description &&
          <i style={{color:'red'}}>please input a name</i>
        }
        <label id='lables'>           
           <input
              className='terms' 
              type='checkbox' 
              name='terms' 
              onChange={this.handleChange}
              checked={this.state.terms}
            />  
            I have read the terms of conduct      
        </label>

        <input 
            className='submit' 
            type='submit' 
            value='Submit'
            disabled={this.state.name === 'Your name' || this.state.description === 'Description about yourself' || !this.state.terms} />
      </form>
    );
  }
}

export default MyProfile;


