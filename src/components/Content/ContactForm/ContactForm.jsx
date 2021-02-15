import React, {Component} from 'react';
import './ContactForm.css';


export default class ContactFrom extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
        
        

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
      }

    onPhoneChange(event) {
        this.setState({phone: event.target.value})
      }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state); 
    }

      render(){
        
        return (
            <div className='form-wrapper'>
                <div className='form-info'>
                    <div className='info-title'>
                        <span>
                            have an idea? contact us!
                        </span>
                    </div>
                    <div className='contact-email'>
                        <p className='email-text'>Use this form or write to us on <a href='mailto:hello@ideasoft.io' className='email-text'>hello@ideasoft.io</a></p>
                    </div>
                    <form className='contact-form' onSubmit={this.handleSubmit} method='POST'>
                        <div className='contact-field-wrapper'>
                            <label htmlFor='name'>your name*</label>
                            <input type="text" className="contact-header" 
                                value={this.state.name} 
                                onChange={this.onNameChange}
                                placeholder='Allan Barrett' />
                        </div>
                        <div className='contact-field-wrapper'>
                            <div className='contact-field'>
                                <label htmlFor="email">your email*</label>
                                <input type="text" 
                                    className="contact-info" 
                                    aria-describedby="emailHelp" 
                                    value={this.state.email} 
                                    onChange={this.onEmailChange}
                                    placeholder='allanbarret@gmail.com' />
                            </div>
                            <div className='contact-field'>
                                <label htmlFor="phone">your phone number</label>
                                <input type="number"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                                    className="contact-info" 
                                    value={this.state.phone} 
                                    onChange={this.onPhoneChange}
                                    placeholder='0671111111' />
                            </div>
                            
                        </div>
                        <div className='contact-field-wrapper'>
                            <label htmlFor="question">do you have any questions or requests?</label>
                            <textarea className="form-control" 
                                    value={this.state.question} 
                                    onChange={this.onQuestionChange} />
                        </div>
                            <input type='submit' value='CONTINUE' className='submit-btn'>
                            </input>
                    </form>
                </div>
            </div>
        )
    }
}


    

