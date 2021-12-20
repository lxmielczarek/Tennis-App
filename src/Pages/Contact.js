import React, { Component } from 'react';
import Wrapper from './Wrapper'
import PropTypes from 'prop-types';

export default class Contact extends Component {
    state = {
        feedback: '',
        email: '',
        name: '',
        formSubmitted: false
    };
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    static sender = 'sender@example.com';
    handleChange(event) {
        this.setState({
            feedback: event.target.value,
            email: event.target.value,
            name: event.target.value,

        });
    }
    handleSubmit(event) {
        event.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template,
            REACT_APP_EMAILJS_USERID: user,
        } = this.props.env;

        this.sendFeedback(
            template,
            this.sender,
            receiverEmail,
            this.state.feedback,
            user
        );

        this.setState({
            formSubmitted: true
        });
    }

    // Note: this is using default_service, which will map to whatever
    // default email provider you've set in your EmailJS account.
    sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
        window.emailjs
            .send('default_service', templateId, {
                senderEmail,
                receiverEmail,
                feedback
            },
                user
            )
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }
    render() {

        return (
            <Wrapper>
                <div className="formularz">
                    <div className="formtitle">
                        Masz pytania? <br />
                        Skontaktuj się z nami!
                    </div>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <label for="name" className="opiskontakt">Podaj swoje imie</label>
                        <input name="name" onChange={this.handleChange} value={this.name} type="text" className="feedback-input" placeholder="Imie" />
                        <label for="email" className="opiskontakt">Podaj swoj email</label>
                        <input name="email" onChange={this.handleChange} value={this.email} type="text" className="feedback-input" placeholder="Email" />
                        <label for="feedback" className="opiskontakt">Podaj swoje pytanie</label>
                        <textarea name="feedback" onChange={this.handleChange} value={this.feedback} className="feedback-input" placeholder="Twoja wiadomość"></textarea>
                        <input type="submit" value="Wyślij" />
                    </form>
                </div>
            </Wrapper >
        )
    }
}
Contact.propTypes = {
    env: PropTypes.object.isRequired
};
