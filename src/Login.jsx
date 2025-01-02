import React, { useState } from 'react';
import image1 from '../public/Image/img.jpg';
//import { useNavigate } from 'react-router-dom';// Reusable Input Component

const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ marginBottom: '10px', padding: '5px', width: '100%',border:"none" ,borderRadius:"6px"}}

  />
);

// Reusable Button Component
const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{ padding: '10px',width:"330px", backgroundColor: "#00ff7f", color: 'black', border: '6px', cursor: 'pointer',fontWeight:"bold",borderRadius:"10px"}}

  >
    {text}
  </button>
);

// Login Form Component

  const LoginForm = ({ onSwitchToRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  //  const navigate = useNavigate(); // Initialize navigate
  
    const handleLogin = () => {
      if (username && password) {
        // Replace this with actual login validation logic
        alert(`Logged in with Username: ${username}`);
        //navigate('/home'); // Navigate to the homepage
      } else {
        alert('Please enter valid credentials!');
      }
    };
  

  return (
    <div className='login' style={{marginTop:"500px", maxWidth: '350px', margin: 'auto', textAlign: 'center',backgroundColor:"gainsboro", padding: "30px 10px",width: "480px",height: "350px",marginTop:"35px", borderRadius:"7px",marginBottom:'600px' }}>
                   <img src={image1} alt="hhh" height={"60px"} width={"90px"} style={{float:"left",}} />
                   <h2 style={{marginTop:"10px",fontSize:"35px",marginRight:"69px"}}>Digital Art</h2>
                    <p style={{marginTop:"20px",fontSize:"20px"}}>Login</p><br></br>
      <InputField type="text" placeholder="Username" value={username} onChange={setUsername} /><br/>
      <InputField type="password" placeholder="Password" value={password} onChange={setPassword} /><br/>
      <Button text="Login" onClick={handleLogin} /><br/>
      <p style={{marginTop:"40px"}}>
        Don't have an account?{' '}
        <span style={{ color: 'black', cursor: 'pointer' ,fontWeight:'bolder'}} onClick={onSwitchToRegister}>
          Register
        </span>
      </p>
    </div>
  );
}

// Registration Form Component
const RegistrationForm = ({ onSwitchToLogin }) => {
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
    
    <div style={{ maxWidth: '350px', margin: 'auto', textAlign: 'center' ,background:"gainsboro",borderRadius:"7px",
        padding: "30px 12px",width: "590px",height: "410px",marginTop:"35px"}}>
    <img src={image1} alt="hhh" height={"55px"} width={"70px"} style={{float:"left",}} />
    <h2 style={{marginTop:"10px",fontSize:"30px",marginRight:"75px"}}>Digital Art</h2>
    <h3 style={{marginTop:"40px"}}>Create Your Account</h3><br/>
      <InputField type="text" placeholder="Username" value={username} onChange={setUsername} />
      <InputField type="email" placeholder="Email" value={email} onChange={setEmail} />
      <InputField type="password" placeholder="Password" value={password} onChange={setPassword} />
      <InputField
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      /><br/>
      <Button text="Register" onClick={handleRegister} /><br/><br/><br/>
      <p>
        Yes, I have an account?{' '}
        <span style={{ color: 'black', cursor: 'pointer',fontWeight:"bold" }} onClick={onSwitchToLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

// Main Component
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ padding: '250px' }}>
      {isLogin ? (
        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegistrationForm onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Login;