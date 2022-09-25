import { Link } from "react-router-dom";
import '../css/_loginPage.css'


function LoginPage() {
    return (
        <div>
            <div className="mx-auto w-25 mt-4">
                <form className="">
                    <div className="form-outline mb-4">
                        <label className="input_text" for="form2Example1">Номер телефона</label>
                        <input type="email" id="form2Example1" className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="input_text" for="form2Example2">Пароль</label>
                        <input type="password" id="form2Example2" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-success btn-block mb-4">Войти</button>

                    <div className="text-center">
                        <p>Не зарегестрированы? <Link to="/register">Регистрация</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;