import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [recoveringPassword, setRecoveringPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    navigate("/inicio");
  }

  function handlePasswordRecovery(event) {
    event.preventDefault();
    setMessage("Solicitud simulada. No se envió ningún correo.");
  }

  function showLogin() {
    setRecoveringPassword(false);
    setMessage("");
  }

  return (
    <main className="login-page">
      <section className="login-intro" aria-label="Veterinaria FOPARRA">
        <div className="login-brand">
          <span className="login-paw" aria-hidden="true">🐾</span>
          <p>Veterinaria FOPARRA</p>
        </div>
        <div className="login-welcome">
          <p className="login-eyebrow">Cuidamos de quienes más quieres</p>
          <h1>Tu clínica veterinaria, siempre cerca.</h1>
          <p>Inicia sesión para continuar con la gestión de tu veterinaria.</p>
        </div>
        <span className="login-decoration login-decoration-one" aria-hidden="true" />
        <span className="login-decoration login-decoration-two" aria-hidden="true" />
      </section>

      <section className="login-panel">
        <div className="login-card">
          <div className="login-card-heading">
            <p className="login-eyebrow">ACCESO A TU CUENTA</p>
            <h2>{recoveringPassword ? "Recuperar contraseña" : "Iniciar sesión"}</h2>
            <p>
              {recoveringPassword
                ? "Ingresa el correo asociado a tu cuenta."
                : "Ingresa tus datos para acceder."}
            </p>
          </div>

          {recoveringPassword ? (
            <form className="login-form" onSubmit={handlePasswordRecovery}>
              <label htmlFor="recovery-email">Correo electrónico</label>
              <input
                id="recovery-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@correo.com"
                required
              />
              <button className="login-submit" type="submit">
                Enviar instrucciones
              </button>
              <button className="login-back" type="button" onClick={showLogin}>
                Volver a iniciar sesión
              </button>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleLogin}>
              <label htmlFor="username">Correo o nombre de usuario</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Tu correo o usuario"
                required
              />

              <div className="login-password-label">
                <label htmlFor="password">Contraseña</label>
                <button
                  className="login-recovery"
                  type="button"
                  onClick={() => {
                    setRecoveringPassword(true);
                    setMessage("");
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Ingresa tu contraseña"
                required
              />

              <button className="login-submit" type="submit">
                Iniciar sesión
              </button>
            </form>
          )}

          {message && (
            <p className="login-message" role="status">
              {message}
            </p>
          )}
        </div>
        <p className="login-footer">© Veterinaria FOPARRA</p>
      </section>
    </main>
  );
}

export default Login;
