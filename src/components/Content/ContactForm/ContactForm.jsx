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
        this.setState({email: event.target.value})
      }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(){
        
    }

      render(){
        return (
            <div className='form-wrapper'>
                <div className='reg-info'>
                    <span>have an idea? contact us!</span>
                </div>
                <div className='contact-email'>
                    <p>Use this form or write to us on <span>hello@ideasoft.io</span></p>
                </div>
                <form className='contact-form' onSubmit={this.handleSubmit} method='POST'>
                    <div className='contact-name'>
                        <label htmlFor='name'>your name*</label>
                        <input type="text" className="contact-header" 
                               value={this.state.name} 
                               onChange={this.onNameChange}
                               placeholder='Allan Barrett' />
                    </div>
                    <div className='contact-email-phone'>
                        <label htmlFor="email">your email*</label>
                        <input type="text" 
                            className="contact-info" 
                            aria-describedby="emailHelp" 
                            value={this.state.email} 
                            onChange={this.onEmailChange}
                            placeholder='allanbarret@gmail.com' />

                        <label htmlFor="phone">your phone number</label>
                        <input type="text" 
                               className="contact-info" 
                               aria-describedby="emailHelp" 
                               value={this.state.phone} 
                               onChange={this.onPhoneChange} />
                    </div>
                    <div>
                        <label htmlFor="question">Message</label>
                        <textarea className="form-control" 
                                  value={this.state.question} 
                                  onChange={this.onQuestionChange} />
                    </div>
                    <div>
                        <span>continue</span>
                        {/* <img></img> */}
                    </div>
                </form>
            </div>
        )
    }

}


    

