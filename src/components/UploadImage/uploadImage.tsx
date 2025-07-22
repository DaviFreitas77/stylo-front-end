
import { useState } from "react";
import { getDownloadURL, storage, uploadBytesResumable, ref } from "../../service/firebaseConnection";

type Props = {
    onUploadComplete: (url: string) => void;
};

export default function UploadImage({ onUploadComplete }: Props) {
    const [image, setImage] = useState<string>('')

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            console.log(file)
            upload(file)
        }
    };


    const upload = (image: File) => {
        const imageName = `${image.name}`
        const storageRef = ref(storage, `produtos/${imageName}`)
        const uploadTask = uploadBytesResumable(storageRef, image)
        uploadTask.then(() => {
            getDownloadURL(uploadTask.snapshot.ref).then((donwload) => {
                setImage(donwload)
                onUploadComplete(donwload)
            })
        })
    }
    
    return (
        <div className="flex-1 min-w-[200px]">
            <h2 className="text-lg font-semibold mb-2">Selecione a imagem </h2>
            <div className="flex flex-wrap gap-3">
                <input type="file"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"/>

            </div>
        </div>
    )
}