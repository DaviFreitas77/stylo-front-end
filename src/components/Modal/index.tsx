
type ModalProps = {
    openModal: boolean,
    onClose: () => void;
    title?: string;
    children: React.ReactNode
}

export default function Modal({ openModal, onClose, title, children }: ModalProps) {

    return (
        <div className={`${openModal === true ? 'flex' : 'hidden'} fixed inset-0 bg-black/50 items-center justify-center`}>
            <div className="bg-white text-black p-4 w-[40%] h-[50%] rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[20px] font-medium text-gray-700 block">{title}</p>

                    <button
                        onClick={onClose}
                        className="text-3xl font-bold text-gray-500 hover:text-black mt-3.5"
                    >
                        &times;
                    </button>
                </div>

                {children}

            </div>
        </div>
    )
}