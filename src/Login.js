import React, { useCallback, Fragment, useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "./firebase";
import { AuthContext } from "./auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  } 

  const handleLogin = async event => {
      event.preventDefault();
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const styles = {
    color: {
      color: "rgb(97, 120, 119)"
    }
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh"}} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center" style={styles.color}>
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleLogin}>
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
              Login
            </Button>
          </Segment>
        </Form>
        <Message as='button'>
          <Link to="/signup">
            New to us?
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default withRouter(Login);



//   return (
//     <Fragment>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <label>
//           Email
//           <input
//             name="email"
//             value={email}
//             placeholder="Email"
//             onChange={handleEmailChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             name="password"
//             value={password}
//             placeholder="Password"
//             onChange={handlePasswordChange}
//           />
//         </label>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//       <div>
//         <Link to="/signup">
//           <button>Sign Up</button>
//         </Link>
//       </div>
//     </Fragment>
//   );
// };
