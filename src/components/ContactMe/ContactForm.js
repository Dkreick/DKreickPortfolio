import React from 'react';
import emailjs from 'emailjs-com';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'damian.kreick@gmail.com' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="test-mailing">
        <h1>Let's see if it works</h1>
        <div>
          <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder="Post some lorem ipsum here"
            required
            value={this.state.feedback}
            style={{ width: '100%', height: '150px' }}
          />
        </div>
        <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
      </form>
    )
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value })
  }

  handleSubmit(event) {
    const templateId = 'template_id';

    this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
  }

  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import emailjs from 'emailjs-com';

// const styles = {
//   root: {
//     borderRadius: '10px',
//     backgroundColor: 'white',
//     margin: 'auto',
//     marginBottom: '60px',
//     padding: '10px',
//     height: '400px',
//     width: '300px'
//   },
//   message: {
//     height: '300px'
//   }
// };

// handleChange(event) {
//   this.setState({feedback: event.target.value})
// }

// handleSubmit() {
// }

// function ContactForm(props) {
//   const { classes } = props;




//   return (
//     <form className={classes.root}>
//       <TextField
//         id="standard-dense"
//         label="Your name"
//         className={classes.dense}
//         margin="dense"
//       />
//       <TextField
//         id="standard-dense"
//         label="Your email"
//         className={classes.dense}
//         margin="dense"
//       />
//       <TextField
//         id="standard-multiline-static"
//         label="Multiline"
//         multiline
//         rows="4"
//         defaultValue="Default Value"
//         className={classes.textField}
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" className={classes.button}>
//         Primary
//       </Button>
//     </form>
//   );
// }

// ContactForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ContactForm);
