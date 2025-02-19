import { ContinueButton } from "./ContinueButton";
import { InputField } from "./InputField";

export const ContactInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.email) {
            setFormErrors((prev) => ({ ...prev, email: "Hooson baina" }))
        }

        if (!formValues.phoneNumber) {
            setFormErrors((prev) => ({ ...prev, phoneNumber: "Hooson baina" }))
        }


        if (!formValues.password) {
            setFormErrors((prev) => ({ ...prev, password: "Hooson baina" }))
        }

        if (!formValues.email || !formValues.phoneNumber || !formValues.password) {
            return;
        }

        nextStep();
    }

    return (
        <form onSubmit={handleNext} className="mt-7">
            <InputField required label='Email' name="email" onChange={onChange} placeholder={'Enter your email'} error={formErrors['email']} />

            <InputField required label='Phone number' name="phoneNumber" onChange={onChange} placeholder={'Enter your phone number'} error={formErrors['phoneNumber']} />

            <InputField required label='Password' name="password" onChange={onChange} placeholder={'Enter your password'} error={formErrors['password']} />

            <ContinueButton prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}