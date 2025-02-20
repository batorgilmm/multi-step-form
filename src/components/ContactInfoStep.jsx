import { ContinueButton } from "./ContinueButton";
import { InputField } from "./InputField";

export const ContactInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        setFormErrors((prev) => ({ ...prev, [event.target.name]: '' }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.email) {
            setFormErrors((prev) => ({ ...prev, email: "Hooson baina" }))
        }

        const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegexPattern.test(formValues.email)) {
            setFormErrors((prev) => ({ ...prev, email: "Email-nii butets bish baina" }))
        }

        if (!formValues.phoneNumber) {
            setFormErrors((prev) => ({ ...prev, phoneNumber: "Hooson baina" }))
        }

        const phoneNumberRegexPattern = /^\+?\d{8}$/;

        if (!phoneNumberRegexPattern.test(formValues.phoneNumber)) {
            setFormErrors((prev) => ({ ...prev, phoneNumber: "Utasnii dugaar buruu baina" }))
        }

        if (!formValues.password) {
            setFormErrors((prev) => ({ ...prev, password: "Hooson baina" }))
        }

        if (!formValues.confirmPassword) {
            setFormErrors((prev) => ({ ...prev, confirmPassword: "Hooson baina" }))
        }

        if (formValues.password != formValues.confirmPassword && formValues.confirmPassword) {
            setFormErrors((prev) => ({ ...prev, confirmPassword: "Password taarku baaina" }))
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

            <InputField type='password' required label='Password' name="password" onChange={onChange} placeholder={'Enter your password'} error={formErrors['password']} />

            <InputField type='password' required label='Confirm password' name="confirmPassword" onChange={onChange} placeholder={'Enter your confirm password'} error={formErrors['confirmPassword']} />

            <ContinueButton prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}