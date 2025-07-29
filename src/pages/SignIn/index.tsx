import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import useLogin from '@/hooks/useMutation/useLogin';
import { toast } from "sonner"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import useJwt from '@/hooks/useMutation/useJwt';


type Form = {
    email: string,
    password: string
}

export default function SignIn() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Form>()
    const { mutate, isSuccess, isError } = useLogin()
    const { mutate: reqToken, isSuccess: successToken, isError: errorToken } = useJwt()


    const handleGoogleSuccess = (credentialResponse: any) => {
        console.log('Google Credential:', credentialResponse);
        reqToken(credentialResponse.credential, {
            onSuccess: (response) => {
                toast.success("Login realizado com sucesso:")
                localStorage.setItem("token", response.token)
                localStorage.setItem("name", response.user.name)
                localStorage.setItem("email", response.user.email)
                navigate("/inicio")

            },
            onError: (response) => {
                console.log(response)
            }
        })

    };

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            navigate("/inicio")
        }
    }, [])


    const login = (data: any) => {
        mutate(data, {
            onSuccess: (response) => {
                toast.success("Login realizado com sucesso:")
                localStorage.setItem("token", response.access_token)
                localStorage.setItem("name", response.user.name)
                localStorage.setItem("email", response.user.email)
                navigate("/inicio")
            },
            onError: (error: any) => {
                toast.error(error.message)
            }
        })

    }
    return (
        <div className="flex h-[100vh]  justify-between">
            <div className=' w-[100%] md:w-[50%] items-center justify-center flex'>
                <form onSubmit={handleSubmit(login)} className="flex flex-col space-y-4  justify-center  w-[80%] ">
                    <div>
                        <input
                            {...register('email', { required: 'O email é obrigatório' })}
                            type="email"
                            placeholder="Digite seu email"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.email?.message && (
                            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <input
                            {...register('password', { required: 'Digite sua senha' })}
                            type="password"
                            placeholder="Digite a senha"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.password?.message && (
                            <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                        )}
                        <button type='button' className='text-start cursor-pointer'>
                            <p className='text-blue-700 hover:text-blue-500'>esqueceu a senha?</p>
                        </button>
                    </div>

                    <div className='flex flex-col gap-3 text-center '>
                        <Button
                            type="submit"
                            className="cursor-pointer w-full h-12 bg-black text-white rounded hover:bg-gray-900 transition-colors"
                        >
                            Entrar
                        </Button>
                        ou

                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />




                    </div>
                    <div className='flex gap-2'>
                        <p>não possui um conta?</p>
                        <Link to={"/Cadastrar"} className='text-blue-700 hover:text-blue-500 cursor-pointer'>Cadastre-se</Link>
                    </div>

                </form>
            </div>


            <div className='w-[50%] hidden md:block'>
                <img className=" w-full h-full object-cover md:object-[70%_center] xl:object-center" src="/img/login.jpg" alt="" />
            </div>
        </div>
    )
}