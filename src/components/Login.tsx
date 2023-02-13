import { useEffect, useReducer } from "react";

interface AuthState {// interface es una forma de definir un tipo de dato
    validando: boolean;// boolean es un tipo de dato
    token: string | null;// string es un tipo de dato y null es un tipo de dato
    username: string;// string es un tipo de dato
    nombre: string;// string es un tipo de dato
}

const initialState: AuthState = {// initialState es una variable de tipo AuthState
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {// type es una forma de definir un tipo de dato
    username: string,// string es un tipo de dato
    nombre: string// string es un tipo de dato
}

type AuthAction = { type: 'logout' } | { type: 'login', payload: LoginPayload } // type es una forma de definir un tipo de dato
//payload es un objeto de tipo AuthAction

const authReducer = (state: AuthState, action: AuthAction): AuthState => {// authReducer es una funcion que recibe dos parametros de tipo AuthState y AuthAction y retorna un valor de tipo AuthState
    switch (action.type) {// switch es una estructura de control
        case 'logout'://
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const { username, nombre } = action.payload
            return {
                validando: false,
                token: 'ABC123',
                username,
                nombre
            }
        default:
            return state
    }
}

export const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);// useReducer es un hook que recibe dos parametros, el primero es una funcion y el segundo es un valor de tipo AuthState

    useEffect(() => {// useEffect es un hook que recibe una funcion
        setTimeout(() => {// setTimeout es una funcion que recibe dos parametros, el primero es una funcion y el segundo es un numero
            dispatch({ type: 'logout' })
        }, 1500);
    }, []);// el segundo parametro es un arreglo vacio y solo se ejecuta una vez

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'merzelert',
                nombre: 'Erik'
            }
        })
    }

    const logout = () => {  // logout es una funcion que no recibe parametros y no retorna nada
        dispatch({ type: 'logout' })// dispatch es una funcion que recibe un objeto de tipo AuthAction
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }


    return (
        <>
            <h3>Login</h3>
            {
                (token)
                    ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">No autenticado...</div>
            }

            {
                (token)
                    ? <button className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>
                    : <button className="btn btn-primary"
                        onClick={login}
                    >
                        Login
                    </button>
            }
        </>
    )
}
