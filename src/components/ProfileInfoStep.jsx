import { useRef, useState } from "react"
import { InputField } from "./InputField"
import { ContinueButton } from "./ContinueButton";

export const ProfileInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

    const imageRef = useRef();

    const [preview, setPreview] = useState('')

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const imageHandler = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.files[0] }))
        setPreview(window.URL.createObjectURL(event.target.files[0]))
    }

    const uploadImage = () => {
        imageRef.current.click()
    }

    const handleNext = (event) => {
        event.preventDefault();

        nextStep();
    }
    return (
        <form onSubmit={handleNext} className="mt-7">
            <InputField type='date' required label='Date' name="date" onChange={onChange} error={formErrors['date']} />

            <div className="mt-7 h-[180px] w-full bg-gray-500 rounded-lg flex justify-center items-center cursor-pointer text-center" onClick={uploadImage}>
                {preview ? <img className="h-full w-full object-cover" src={preview} /> : 'Add image'}
            </div>

            <input className="hidden" type="file" ref={imageRef} onChange={imageHandler} name="profileImage" />

            <ContinueButton prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}
