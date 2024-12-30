import React, { useState } from 'react';
import image1 from './public/img.jpg';
import './style.css';

// Reusable Input Component
const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ marginBottom: '10px', padding: '5px', width: '100%',border:"none" ,borderRadius:"6px"}}
  />
);
//Reusable Button Component
const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{ padding: '10px',width:"290px", backgroundColor: "#00ff7f", color: 'black', border: '6px', cursor: 'pointer',fontWeight:"bold",borderRadius:"10px"}}
  >
    {text}
  </button>
);

// Login Form Component
const LoginForm = ({ onSwitchToRegister }) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logged in with Username: ${username}`);
  };

  return (
    <div className='body' style={{ maxWidth: '340px', margin: 'auto', textAlign: 'center', background:"gainsboro",
      padding: "40px 10px",width: "480px",height: "410px",marginTop:"35px", borderRadius:"7px"}}>
        <img src={image1} alt="hhh" height={"60px"} width={"90px"} style={{float:"left",}} />
      <h2 style={{marginTop:"15px",fontSize:"35px",marginRight:"69px"}}>Digital Art</h2>
      <p style={{marginTop:"20px",fontSize:"20px"}}>Login</p><br></br>
      <InputField type="email" placeholder="E-mail" value={username} onChange={setEmail} /><br></br><br />
      <InputField type="password" placeholder="Password" value={password} onChange={setPassword} /><br></br><br></br>
      <Button text="Login" onClick={handleLogin} /><br></br><br></br>
      <p style={{marginTop:"40px",}}>
        Don't have an account?{' '}
        <span style={{ color: 'black', cursor: 'pointer',fontWeight:"bolder", }} onClick={onSwitchToRegister}>
          Register
        </span>
      </p>
    </div>
  );
};

// Registration Form Component
const RegistrationForm = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registered with Username: ${username}, Email: ${email}`);
  };

  return (
    <div  className="image" style={{ maxWidth: '340px', margin: 'auto', textAlign: 'center' ,background:"gainsboro",borderRadius:"7px",
      padding: "30px 12px",width: "590px",height: "490px",marginTop:"35px"}}>
     <img src={image1} alt="hhh" height={"60px"} width={"90px"} style={{float:"left",}} />
      <h2 style={{marginTop:"15px",fontSize:"35px",marginRight:"65px"}}>Digital Art</h2>
     <h3 style={{marginTop:"40px"}}>Create Your Account</h3><br /><br />
      <InputField type="text" placeholder="Username" value={username} onChange={setUsername} /><br /><br />
      <InputField type="email" placeholder="Email" value={email} onChange={setEmail} /><br /><br />
      <InputField type="password" placeholder="Password" value={password} onChange={setPassword} /><br /><br />
      <InputField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      /><br></br><br />

      <Button text="Register" onClick={handleRegister} /><br /><br />
      <p>
        Yes, I have an account?{' '}
        <span style={{ color: 'black', cursor: 'pointer',fontWeight:"bold" }} onClick={onSwitchToRegister}>
          Register
        </span>
      </p>
    </div>
  );
};

// Main Component
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      {isLogin ? (
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
      )
      }
    </div>
  );
};




export default Login;

