import React, { useState, useEffect } from 'react';
import App from '../App';  // 認証後に表示されるメインのAppコンポーネント

const PasswordAuth = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = 'P@SSW0RD';

  // 初回レンダリング時にセッションストレージから認証状態を確認
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('isAuthenticated');
    if (sessionAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');  // 認証情報をセッションストレージに保存
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('パスワードが正しくありません。');
    }
  };

  if (isAuthenticated) {
    return <App />;  // 認証成功後にAppコンポーネントを表示
  }

  return (
    <div style={styles.container}>
      <h2>パスワード認証</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          ログイン
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default PasswordAuth;
