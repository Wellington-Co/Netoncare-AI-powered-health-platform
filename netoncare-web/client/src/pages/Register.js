import { useState } from "react";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
            alert("Registration successful!");
        } catch (error) {
            alert("Error registering");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
