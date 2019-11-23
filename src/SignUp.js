import React, { useCallback, Fragment, useState } from "react";
import { withRouter } from "react-router";
import app from "./firebase";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  //why useCallback( ??
  const handleSignUp = async event => {
    event.preventDefault();
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const styles = {
    color: {
      color: "rgb(97, 120, 119)"
    }
  }

  //   return (
  //     <Fragment>
  //       <h1>Sign Up</h1>
  //       <form onSubmit={handleSignUp}>
  //         <label>
  //           Email
  //           <input
  //             name="email"
  //             type="email"
  //             value={email}
  //             placeholder="Email"
  //             onChange={handleEmailChange}
  //           />
  //         </label>
  //         <label>
  //           Password
  //           <input
  //             name="password"
  //             type="password"
  //             value={password}
  //             placeholder="Password"
  //             onChange={handlePasswordChange}
  //           />
  //         </label>
  //         <div>
  //           <button type="submit">Sign Up</button>
  //         </div>
  //       </form>
  //       <div>
  //         <Link to="/login">
  //           <button>Login</button>
  //         </Link>
  //       </div>
  //     </Fragment>
  //   );
  // };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh"}}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center" style={styles.color}>
          Sign up for an account
        </Header>
        <Form size="large" onSubmit={handleSignUp}>
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <Button style={styles.color} fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message as="button">
          <Link to="/login">Already have an account?</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Signup);
