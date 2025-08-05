import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import UseCreateUser from '@/hooks/useMutation/useCreateUser';
import { useNavigate } from 'react-router-dom';

import { toast } from "sonner"
import { useEffect } from 'react';

type Form = {
    name: string,
    email: string,
    password: string
}

export default function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Form>()
    const { mutate, isSuccess, isError } = UseCreateUser();


    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            navigate("/")
        }
    }, [])


    const registerUser = (data: Form) => {
        mutate(data, {
            onSuccess: (response) => {
                toast(response.message)
                console.log(response)
                localStorage.setItem("token", response.token)
                localStorage.setItem("name", response.user.name)
                localStorage.setItem("email", response.user.email)
                setTimeout(() => {
                    navigate("/")
                }, 2000);
            },
            onError: (error: any) => {
                console.log(error)
                toast(error.message)
            }
        })

    };
    return (
        <div className="flex h-[100vh]  justify-between">

            <div className=' w-[100%] md:w-[50%] items-center justify-center flex'>

                <form onSubmit={handleSubmit(registerUser)} className="flex flex-col space-y-4  justify-center  w-[80%] ">
                    <div>
                        <input
                            {...register('name', { required: 'O nome é obrigatório' })}
                            type="text"
                            placeholder="Digite seu nome"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.name?.message && (
                            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                        )}
                    </div>
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

                    </div>

                    <div className='flex flex-col gap-3 text-center '>
                        <Button
                            type="submit"
                            className="cursor-pointer w-full h-12 bg-black text-white rounded hover:bg-gray-900 transition-colors"
                        >
                            Cadastrar
                        </Button>
                        ou

                        <Button
                            type="button"
                            className="cursor-pointer w-full h-12 flex items-center justify-center gap-3 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        >
                            <FcGoogle size={20} />
                            <span className="text-sm text-gray-700 font-medium">Entrar com Google</span>
                        </Button>

                    </div>
                    <div className='flex gap-2'>
                        <p>ja possui um conta?</p>
                        <Link to={"/Login"} className='text-blue-700 hover:text-blue-500 cursor-pointer'>Entrar</Link>
                    </div>

                </form>
            </div>


            <div className='w-[50%] hidden md:block'>
                <img className=" w-full h-full object-cover md:object-[70%_center] xl:object-center" src="/img/login.jpg" alt="" />
            </div>

        </div>
    )
}