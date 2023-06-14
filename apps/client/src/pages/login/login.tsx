import { useState } from "react";

const isAStringArray = (data:unknown): data is string[] => {
  return Array.isArray(data) && data.every((item) => typeof item === "string");
}

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    }
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const response = await fetch("/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });
    const data = await response.json();
    if(isAStringArray(data.message)) {
      setMessage(data.message.join(", "));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <a href="/">Home</a>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={username}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <button onClick={handleSubmit}>login</button>
      </form>
      <div>{message}</div>
    </div>
  );
}
